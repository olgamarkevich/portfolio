<template lang="pug">
  .adm_block(v-if="editmode === false")
    .work-image-container
        img(:src="`https://webdev-api.loftschool.com/${work.photo}`").work-image
        .work_tags
          span(
          v-for="tag in work.techs.split(',')"
        ) {{tag}}
    .adm_block_text
      .work-title {{work.title}}
      p.work-desk {{work.description}}
    a(href="#").work-link {{work.link}}
    .adm_block_btns
      button.btn-edit.btn-icon(@click="editWorkbtn")
        span.btn-text Править
      button.btn-close.btn-icon(@click="removeExistingWork")
        span.btn-text Удалить
  .adm_block.adm-top.edit-work(v-else)
      .adm_block_title
        .adm_block_title_span Редактирование работы
      .adm_block_wrapper.edit-work-container
        .adm-work-load
          label.reviews__form-avatar-upload
            input(
              type="file"
              @change="appendFileAndRenderPhoto"
            ).reviews__form-file-input
            .reviews__form-pic
              .reviews__form-avatar-empty(
                :class="{'filled' : true}"
                :style="{'backgroundImage' : `url(${editedWork.rendedPhotoUrl})`}"
              )
            .button.btn_s Изменить фото
        .adm-info
          .adm-info_line
            .adm-info_label Название
            input(placeholder="Ковальчук Дмитрий" v-model="$v.editedWork.title.$model" :class="status($v.editedWork.title)").adm_block_input
          .adm-info_line
            .adm-info_label Ссылка
            input(placeholder="Основатель LoftSchool" v-model="$v.editedWork.link.$model" :class="status($v.editedWork.link)").adm_block_input
          .adm-info_line
            .adm-info_label Описание
            textarea.adm-textarea(v-model="$v.editedWork.description.$model" :class="status($v.editedWork.description)")
          .adm-info_line
            .adm-info_label Добавление тэга
            input(
              v-model="$v.editedWork.techs.$model"
              @keyup="getTags"
              :class="status($v.editedWork.techs)"
            ).adm_block_input
            .adm-tags
              .adm-tags_item(
                  v-for="tag in editedWork.tags"
                  v-if="tag.trim() != ''"
                ) {{tag}}
                button.del-tags(
                  @click="removeTag(tag)"
                )
          .adm-info-btns
            button.btn(v-on:click="editmode = false" type="button") Отмена
            button.btn_s(@click="saveWork") Сохранить       
</template>


<script>
  import { mapActions } from "vuex";

  import Vue from 'vue';
  import Vuelidate from 'vuelidate';
  Vue.use(Vuelidate);
  import { required} from 'vuelidate/lib/validators';

  export default{
    props: {
    work: Object
  },
  data(){
    return{
    editmode: false,
    editedWork: {
        ...this.work,
        rendedPhotoUrl: 'https://webdev-api.loftschool.com/' + this.work.photo
      }
    }
  },
  validations: {
    editedWork: {
      title: {
        required
      },
      link: {
        required
      },
      techs: {
        required
      },
      description: {
        required
      }
    }
  },
  methods:{
        ...mapActions("works", ["removeWork", "editWork"]),
        ...mapActions('tooltips', ['showTooltip']),
        getTags() {
        this.editedWork.tags = this.editedWork.techs.split(',');
    },
      removeTag(tag) {
      this.editedWork.tags.splice(this.editedWork.tags.indexOf(tag), 1);
      this.editedWork.techs = this.editedWork.tags.join(', ')
    },
        editWorkbtn(){
          this.editmode = true;
        },
        async removeExistingWork() {
        try {
          await this.removeWork(this.work.id);
          this.showTooltip({
          type:"success",
          text: "Работа удалена"
        })
        } catch (error) {}
      },
      async saveWork() {
      var cmp = this;
      this.$v.$touch();
        if (!this.$v.$invalid) {
      try {
        await this.editWork(this.editedWork).then(res => {
          if (res.status === 200) {
            cmp.editmode = false;
            this.$v.$reset();
          }
        });
      } catch (error) {
      }
        }
      },
      status(validation) {
        return {
          error: validation.$error,
          dirty: validation.$dirty
        }
      },
      appendFileAndRenderPhoto(e) {
      const file = e.target.files[0];
      this.editedWork.photo = file;
      const reader = new FileReader();
      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.editedWork.rendedPhotoUrl = reader.result;
        };
      } catch (error) {
        alert("sh*t happens :(");
      }
    },


    }
  }
</script>

<style>
.work-image-container{
  position: relative;
}
.work_tags{
  position: absolute;
  right: 5px;
  bottom: 20px;
  span{
    font-size: 0.9375rem;
    opacity: .7;
    font-weight: 600;
    background: rgba(255,255,255,.8);
    font-size:13px;
    border-radius: 20px;
    margin-right: 8px;
    margin-bottom: 0.5rem;
    padding:6px 10px;
  }
}

.edit-work{
  margin-bottom: 0;
}

.edit-work .edit-work-container .adm-work-load,
.edit-work .edit-work-container .adm-info{
width: 100%;
}


.edit-work .edit-work-container{
  flex-wrap: wrap;
}


</style>

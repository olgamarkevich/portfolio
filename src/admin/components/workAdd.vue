<template lang="pug">
  .adm_block.adm-top
      .adm_block_title
        .adm_block_title_span Редактирование работы
      .adm_block_wrapper.edit-work-container
        .adm-work-load
          p.load_label Перетащите или загрузите для загрузки изображения
          label.reviews__form-avatar-upload
            input(
              type="file"
              @change="appendFileAndRenderPhoto"
            ).reviews__form-file-input
            .reviews__form-pic
              .reviews__form-avatar-empty(
                :class="{'filled' : this.rendedPhotoUrl.length}"
                :style="{'backgroundImage' : `url(${this.rendedPhotoUrl})`}"
              )
            .button.btn_s Загрузить
        .adm-info
          .adm-info_line
            .adm-info_label Название
            input(placeholder="Ковальчук Дмитрий" v-model="work.title").adm_block_input
          .adm-info_line
            .adm-info_label Ссылка
            input(placeholder="Основатель LoftSchool" v-model="work.link").adm_block_input
          .adm-info_line
            .adm-info_label Описание
            textarea.adm-textarea(v-model="work.description")
          .adm-info_line
            .adm-info_label Добавление тэга
            input(
              v-model="work.techs"
              @keyup="getTags"
            ).adm_block_input
            .adm-tags
              .adm-tags_item(
                  v-for="tag in work.tags"
                  v-if="tag.trim() != ''"
                ) {{tag}}
                button.del-tags(
                  @click="removeTag(tag)"
                )
          .adm-info-btns
            button.btn(v-on:click="$emit('hideAddingForm')") Отмена
            button.btn_s(@click="addNewWork") Сохранить   
</template>

<script>
import { mapActions } from "vuex";
export default{
  data(){
    return {
      rendedPhotoUrl: "",
      work: {
        title: "",
        link: "",
        techs: "",
        description: "",
        photo:"",
        tags: []
      }
    };
  },

  methods: {
    ...mapActions('works', ['addWork']),
    ...mapActions('tooltips', ['showTooltip']),
    appendFileAndRenderPhoto(e) {
      const file = e.target.files[0];
      this.work.photo = file;
      const reader = new FileReader();
      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.rendedPhotoUrl = reader.result;
        };
      } catch (error) {
        alert("sh*t happens :(");
      }
    },
    async addNewWork() {
      var cmp = this;
      try {
        // await this.addWork(this.work);
        await this.addWork(this.work).then(res => {
          if (res.status === 201) {
            cmp.$emit('hideAddingForm');
            this.showTooltip({
          type:"success",
          text: "Работа добавлена"
        })
          }
        });
      }
      catch (error) {
        // error 
      }
    },
    getTags() {
      this.work.tags = this.work.techs.split(',');
    },
    removeTag(tag) {
      this.work.tags.splice(this.work.tags.indexOf(tag), 1);
      this.work.techs = this.work.tags.join(', ')
    }
  }
}
</script>

<style>
.edit-work-container .reviews__form-pic,
.edit-work-container .reviews__form-avatar-empty{
  border-radius: 0;
  width: 100%;
}

.edit-work-container .reviews__form-avatar-upload{
  width: 70%;
}

.edit-work-container .reviews__form-avatar-empty{
  display: none;
}

.edit-work-container .reviews__form-pic{
height: auto;
}

.edit-work-container .reviews__form-avatar-empty.filled{
display: block;
}

.edit-work-container  .btn_s{
  width: auto;
  display: inline-block
}
</style>

<template lang="pug">
  .adm_block(v-if="editmode === false")
        .adm_block_title
          .reviews-name-wr
            .reviews__avatar
              img(:src="`https://webdev-api.loftschool.com/${review.photo}`")
            .reviews__person
              .reviews__name {{review.author}}
              .reviews__position {{review.occ}}
        .adm_block_text
          p {{review.text}}
        .adm_block_btns
          button.btn-edit.btn-icon(@click="editRevbtn")
            span.btn-text Править
          button.btn-close.btn-icon
            span.btn-text(@click="removeExistedReview") Удалить
  
  .adm_block.adm-top.edit-rew(v-else)
      .adm_block_title
        .adm_block_title_span Редактировать отзыв
      .adm_block_wrapper.wrapper_w70
        .adm_user_photo.edit-foto
          label.reviews__form-avatar-upload
            input(
              type="file"
              @change="appendFileAndRenderPhoto"
            ).reviews__form-file-input
            .reviews__form-pic
              .reviews__form-avatar-empty(
                :class="{'filled' : true}"
                :style="{'backgroundImage' : `url(${editedReview.rendedPhotoUrl})`}"
              )
            .reviews__form-addphoto Изменить фото
        .adm-info
          .adm-info_row
            .adm-info_line
              .adm-info_label Имя автора
              input(placeholder="Ковальчук Дмитрий" v-model="$v.editedReview.author.$model" :class="status($v.editedReview.author)").adm_block_input
            .adm-info_line
              .adm-info_label Титул автора
              input(placeholder="Основатель LoftSchool" v-model="$v.editedReview.occ.$model" :class="status($v.editedReview.occ)").adm_block_input
          .adm-info_line
            .adm-info_label Отзыв
            textarea.adm-textarea(v-model="$v.editedReview.text.$model" :class="status($v.editedReview.text)")
          .adm-info-btns
            button.btn(v-on:click="editmode = false" type="button") Отмена
            button.btn_s(@click="editRev") Сохранить

</template>


<script>
  import { mapActions } from "vuex";

  import Vue from 'vue';
  import Vuelidate from 'vuelidate';
  Vue.use(Vuelidate);
  import { required} from 'vuelidate/lib/validators';
  export default{
    props: {
    review: Object
  },
  data(){
    return{
    editmode:false,
    editedReview: {
        ...this.review,
        rendedPhotoUrl: 'https://webdev-api.loftschool.com/' + this.review.photo
      }
    }
    
  },
  validations: {
    editedReview: {
      author: {
        required
      },
      occ: {
        required
      },
      text: {
        required
      }
    }
  },
  methods:{
      ...mapActions("reviews", ["removeReviews", "editReview"]),
      ...mapActions('tooltips', ['showTooltip']),
      async removeExistedReview() {
      try {
        await this.removeReviews(this.review.id);
        this.showTooltip({
          type:"success",
          text: "Отзыв удален"
        })
      } catch (error) {}
    },
    editRevbtn(){
      this.editmode = true;
    },
    async editRev() {
      this.$v.$touch();
        if (!this.$v.$invalid) {
      try {
        await this.editReview(this.editedReview);
        this.editmode = false;
         this.$v.$reset();
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
      this.editedReview.photo = file;
      const reader = new FileReader();
      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.editedReview.rendedPhotoUrl = reader.result;
        };
      } catch (error) {
        alert("sh*t happens :(");
      }
    },
    }
  }
</script>


<style>
.edit-rew {
  margin-bottom: 0;
.wrapper_w70{
  width: 100%;
  flex-wrap: wrap
}
}

.edit-rew .adm-info_row .adm-info_line{
  margin-right: 0;
  width: 100%;
}

.edit-rew .adm-info_row{
  flex-wrap: wrap;
}

.edit-rew .adm-info{
  width: 100%;
}

.edit-foto .reviews__form-avatar-empty{
  width: 80px;
  height: 80px;
}

.edit-foto .reviews__form-pic{
  width: 80px;
  height: 80px;
  background-size: 80px;
  margin-bottom: 0;
  margin-right: 15px;
}

.edit-foto .reviews__form-avatar-upload{
  display: flex;
  width: 100%;
  align-items: center;
}

.edit-foto.adm_user_photo{
  width: 100%;
  margin-bottom: 15px;
}

</style>
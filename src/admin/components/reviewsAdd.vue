<template lang="pug">
  .adm_block.adm-top
      .adm_block_title
        .adm_block_title_span Новый отзыв
      .adm_block_wrapper.wrapper_w70
        .adm_user_photo
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
            .reviews__form-addphoto Добавить фото
        .adm-info
          .adm-info_row
            .adm-info_line
              .adm-info_label Имя автора
              input(placeholder="Ковальчук Дмитрий" v-model="$v.review.author.$model" :class="status($v.review.author)").adm_block_input
            .adm-info_line
              .adm-info_label Титул автора
              input(placeholder="Основатель LoftSchool" v-model="$v.review.occ.$model" :class="status($v.review.occ)").adm_block_input
          .adm-info_line
            .adm-info_label Отзыв
            textarea.adm-textarea(v-model="$v.review.text.$model" :class="status($v.review.text)")
          .adm-info-btns
            button.btn(v-on:click="$emit('hideAddingForm')" type="button") Отмена
            button.btn_s(@click="addNewReview") Сохранить
</template>


<script>
import { mapActions } from "vuex";

import Vue from 'vue';
  import Vuelidate from 'vuelidate';
  Vue.use(Vuelidate);
  import { required} from 'vuelidate/lib/validators';

export default{

  data(){
    return {
      rendedPhotoUrl: "",
      review: {
        author: "",
        occ: "",
        text: "",
        photo:""
      }
    };
  },
  validations: {
    review: {
      author: {
        required
      },
      occ: {
        required
      },
      text: {
        required
      },
      photo: {
        required
      }
    }
  },

  methods: {
    ...mapActions('reviews', ['addReview', 'createReview']),
    ...mapActions('tooltips', ['showTooltip']),
    appendFileAndRenderPhoto(e) {
      const file = e.target.files[0];
      this.review.photo = file;
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
    async addNewReview() {
      var cmp = this;
      this.$v.$touch();
        if (!this.$v.$invalid) {
      try {
        await this.addReview(this.review).then(res => {
          if (res.status === 201) {
            cmp.$emit('hideAddingForm');
            this.showTooltip({
            type:"success",
            text: "Отзыв добавлен"
          })
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
    
  }
}
</script>

<style lang="pcss">

.reviews__avatar{
  width: 60px;
  height: 60px;
  margin-right: 15px;
  img{
    width: 100%;
    border-radius:50%;
    width: 60px;
  height: 60px;
  }
}

.reviews__form-pic {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 27px;
}

.reviews__form-row {
  display: flex;
  margin-bottom: 40px;
}
.reviews__form-col {
  flex: 1;
}
.reviews__form-block {
  flex: 1;
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }
}
.reviews__form-addphoto {
  color: #383bcf;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
}
.reviews__form-pic {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 27px;
}
.reviews__form-userpic {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
}
.reviews__form-avatar-empty {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #dee4ed;
  position: relative;
  &.filled {
    background: center center no-repeat / cover;
    &:before {
      display: none;
    }
  }
  &:before {
    content: "";
    height: 115px;
    width: 85px;
    background: svg-load("filled-user.svg", fill=#fff) center center no-repeat;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &.filled {
    background: center center no-repeat / cover;
    &:before {
      display: none;
    }
  }
}
.reviews__form-avatar-upload {
  position: relative;
  &.error {
    .reviews__avatar-error {
      display: block;
    }
  }
}
.reviews__avatar-error {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  display: none;
}
.reviews__form-file-input {
  position: absolute;
  top: 0;
  left: -9999px;
}
.edit-form__buttons {
  display: flex;
  justify-content: flex-end;
}
.edit-form__buttons-item {
  margin-right: 20px;
  &:last-child {
    margin-right: 0px;
  }
}

</style>





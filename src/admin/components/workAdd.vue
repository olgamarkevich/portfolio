<template lang="pug">
  .adm_block.adm-top
      .adm_block_title
        .adm_block_title_span Редактирование работы
      .adm_block_wrapper.edit-work-container
        .adm-work-load
          p.load_label Перетащите или загрузите для загрузки изображения
          button.btn_s Загрузить
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
            input(v-model="work.techs").adm_block_input
            .adm-tags
              .adm-tags_item HTML
                button.del-tags
              .adm-tags_item CSS
                button.del-tags 
              .adm-tags_item Javascript
                button.del-tags 
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
        photo:""
      }
    };
  },

  methods: {
    ...mapActions('works', ['addWork', 'createWork']),
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
    async addNewWork() {
      try {
        await this.addWork(this.work);
      } catch (error) {
        // error 
      }
    },
    
  }
}
</script>



<template lang="pug">
  .admin-work
    .admin-title_container
      .admin-title Блок «Работы»

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
            input(placeholder="Ковальчук Дмитрий").adm_block_input
          .adm-info_line
            .adm-info_label Ссылка
            input(placeholder="Основатель LoftSchool").adm_block_input
          .adm-info_line
            .adm-info_label Описание
            textarea.adm-textarea
          .adm-info_line
            .adm-info_label Добавление тэга
            input().adm_block_input
            .adm-tags
              .adm-tags_item HTML
                button.del-tags
              .adm-tags_item CSS
                button.del-tags 
              .adm-tags_item Javascript
                button.del-tags 
          .adm-info-btns
            button.btn Отмена
            button.btn_s Сохранить

    .adm-row.row3
      button.adm_block.add_block
        .add_block_plus +
        .add_block_span Добавить <br>работу

      .adm_block
        .work-image-container
            img(src="../images/portfolio/01.png").work-image
        .adm_block_text
          .work-title Сайт школы образования
          p.work-desk Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах, Только пожалуйста, не загружайте сайт на слишком старых браузерах браузерах браузерах
        a(href="#").work-link http://loftschool.ru
        .adm_block_btns
          button.btn-edit.btn-icon
            span.btn-text Править
          button.btn-close.btn-icon
            span.btn-text Удалить
      .adm_block
        .work-image-container
            img(src="../images/portfolio/02.png").work-image
        .adm_block_text
          .work-title Сайт школы образования
          p.work-desk Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
        a(href="#").work-link http://loftschool.ru
        .adm_block_btns
          button.btn-edit.btn-icon
            span.btn-text Править
          button.btn-close.btn-icon
            span.btn-text Удалить

      .adm_block
        .work-image-container
            img(src="../images/portfolio/03.png").work-image
        .adm_block_text
          .work-title Сайт школы образования
          p.work-desk Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
        a(href="#").work-link http://loftschool.ru
        .adm_block_btns
          button.btn-edit.btn-icon
            span.btn-text Править
          button.btn-close.btn-icon
            span.btn-text Удалить

      .adm_block
        .work-image-container
            img(src="../images/portfolio/04.png").work-image
        .adm_block_text
          .work-title Сайт школы образования
          p.work-desk Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
        a(href="#").work-link http://loftschool.ru
        .adm_block_btns
          button.btn-edit.btn-icon
            span.btn-text Править
          button.btn-close.btn-icon
            span.btn-text Удалить
      workItem
        
</template>

<script>
  import workItem from './components/workItem';

  export default{
    components:{
      workItem
    }
  }
</script>

<style lang="pcss">

.work-link{
  text-decoration: none;
  color:#383bcf;
  font-weight: 600;
  margin-bottom: 30px;
  display: inline-block;
  transition: all 0.3s;
  &:hover{
    opacity: 0.8;
  }
}

.adm_block_text{
  .work-title{
  font-size: 18px;
  font-weight:700;
  opacity: 1.0;
  margin-bottom:10px;
  }
}


.work-image-container{
  margin: -25px -25px 20px -25px;
}

.work-image{
  width: auto;
  max-width: 100%;
}

.adm-info_line{
.adm-tags{
  margin-top: 20px;
}
}
.adm-tags{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .adm-tags_item{
    font-size: 13px;
    font-weight:600;
    opacity: 0.7;
    background: #f4f4f4;
    border-radius:15px;
    padding:8px 10px 8px 15px;
    margin-right:15px;
    .del-tags {
      background: none;
      background: svg-load('close.svg', fill=$text-color) center right no-repeat / contain;
      width: 10px;
      height: 10px;
      margin-left: 5px;
    }
  }
}

.admin-work .adm_block_text{
  height: 200px;
}

.edit-work-container{
  .adm-work-load{
    width: 40%;
  }
  .adm-info{
    width: 55%;
  }
}

.adm-work-load{
  width: 28%;
  margin-right: 2%;
  background: #dee4ed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 270px;
  margin-bottom: 30px;
  padding: 30px;
}

.load_label{
  font-weight: 600;
  opacity: 0.5;
  line-height: 2em;
  max-width: 240px;
  margin-bottom: 20px;

}
</style>
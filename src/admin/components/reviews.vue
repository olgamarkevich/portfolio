<template lang="pug">
  .admin-reviews
    .admin-title_container
      .admin-title Блок «Отзывы»
    .adm_block.adm-top
      .adm_block_title
        .adm_block_title_span Новый отзыв
      .adm_block_wrapper.wrapper_w70
        .adm_user_photo
          button.user_photo
          button.btn Добавить фото
        .adm-info
          .adm-info_row
            .adm-info_line
              .adm-info_label Имя автора
              input(placeholder="Ковальчук Дмитрий").adm_block_input
            .adm-info_line
              .adm-info_label Титул автора
              input(placeholder="Основатель LoftSchool").adm_block_input
          .adm-info_line
            .adm-info_label Отзыв
            textarea.adm-textarea
          .adm-info-btns
            button.btn Отмена
            button.btn_s Сохранить
    .adm-row.row3
      button.adm_block.add_block
        .add_block_plus +
        .add_block_span Добавить<br> отзыв
      .adm_block
        .adm_block_title
          .reviews-name-wr
            .reviews__avatar
              img(src="../images/user.jpg").avatar_img
            .reviews__person
              .reviews__name Владимир Сабанцев
              .reviews__position Преподаватель
        .adm_block_text
          p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
        .adm_block_btns
          button.btn-edit.btn-icon
            span.btn-text Править
          button.btn-close.btn-icon
            span.btn-text Удалить
      .adm_block
        .adm_block_title
            .reviews-name-wr
              .reviews__avatar
                img(src="../images/user.jpg").avatar_img
              .reviews__person
                .reviews__name Ковальчук Дмитрий
                .reviews__position Преподаватель
        .adm_block_text
          p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        .adm_block_btns
          button.btn-edit.btn-icon
            span.btn-text Править
          button.btn-close.btn-icon
            span.btn-text Удалить
      .adm_block
        .adm_block_title
            .reviews-name-wr
              .reviews__avatar
                img(src="../images/user.jpg").avatar_img
              .reviews__person
                .reviews__name Ковальчук Дмитрий
                .reviews__position Основатель Loftschool
        .adm_block_text
          p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        .adm_block_btns
          button.btn-edit.btn-icon
            span.btn-text Править
          button.btn-close.btn-icon
            span.btn-text Удалить
        
</template>



<style lang="pcss">
.user_photo{
  width: 200px;
  height: 200px;
  background-color: #dee4ed;
  border-radius: 50%;
  margin-bottom: 30px;
   background-image: svg-load('user.svg', fill=#fff);
   background-size: 115px;
   background-repeat: no-repeat;
   background-position: center;
   outline: none;
   display: block;
}


.adm_user_photo{
  width: 30%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.adm_block_title {
  .reviews-name-wr{
    display: flex;
    .avatar_img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 15px;
    }
    .reviews__name{
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 5px;
    }
    .reviews__position{
      font-size: 16px;
      opacity: 0.5;
      font-weight: 600;
    }
  }
}

</style>
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
      reviewsItem
      reviewsItem
      reviewsItem
      
        
</template>

<script>
  import reviewsItem from './reviewsItem';

  export default{
    components:{
      reviewsItem
    }
  }
</script>

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

@media (max-width: 640px){
  .adm_user_photo{
  width: 100%;
  margin-bottom: 20px;
}
}

</style>
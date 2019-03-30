
<template lang="pug">

  .page-admin
    section.admin-header
      .container.admin-header_container
        .admin-header_l
          .admin-header_user
            .avatar_wr
              img(src="./images/user.jpg").avatar_img
            .user-name Ольга Маркевич
          .header_panel_title Панель администрирования
        .admin-header_r
          .out-btn Выйти
    section.admin-nav
      .container.admin-nav_container
        ul.admin-nav_list
          - var admin_nav_v = ['Обо мне', 'Работы', 'Отзывы'];
            each item in admin_nav_v
              li.admin-nav__item
                a(href="").admin-nav__link #{item}
    section.admin-content
      .container
        .admin-title_container
          .admin-title Блок «Обо мне»
          a(href="#").btn-add_link
            .btn-add +
            .btn-add-span Добавить группу
        .adm-row.content-about
          .adm_block.new_add_skills
            .adm_block_title
              input(placeholder="Название новой группы").adm_block_input
              .adm_block_title_btns
                button.btn-tick
                button.btn-close
          
            .adm_add_skill
              input(placeholder="Новый навык").adm_block_input
              .persent-skills
                input(value="100").adm_block_input
                span.input_percent %
              button.btn-add +

          .adm_block
            .adm_block_title
              input(value="Workflow").adm_block_input
              .adm_block_title_btns
                button.btn-tick
                button.btn-close
            ul.adm_skills_list
              li.adm_skills_item
                input(value="Git").adm_block_input
                .persent-skills
                  input(value="100").adm_block_input
                  span.input_percent %
                .adm_block_title_btns
                  button.btn-edit
                  button.btn-del
              li.adm_skills_item
                input(value="Git").adm_block_input
                .persent-skills
                  input(value="100").adm_block_input
                  span.input_percent %
                .adm_block_title_btns
                  button.btn-edit
                  button.btn-del
              li.adm_skills_item
                input(value="Git").adm_block_input
                .persent-skills
                  input(value="100").adm_block_input
                  span.input_percent %
                .adm_block_title_btns
                  button.btn-edit
                  button.btn-del
              li.adm_skills_item
                input(value="Git").adm_block_input
                .persent-skills
                  input(value="100").adm_block_input
                  span.input_percent %
                .adm_block_title_btns
                  button.btn-edit
                  button.btn-del
            .adm_add_skill
              input(placeholder="Новый навык").adm_block_input
              .persent-skills
                input(value="100").adm_block_input
                span.input_percent %
              button.btn-add +
          .adm_block
            .adm_block_title
              input(value="Frontend").adm_block_input
              .adm_block_title_btns
                button.btn-edit
            ul.adm_skills_list
              li.adm_skills_item
                input(value="Git").adm_block_input
                .persent-skills
                  input(value="100").adm_block_input
                  span.input_percent %
                .adm_block_title_btns
                  button.btn-edit
                  button.btn-del
              li.adm_skills_item
                input(value="Git").adm_block_input
                .persent-skills
                  input(value="100").adm_block_input
                  span.input_percent %
                .adm_block_title_btns
                  button.btn-edit
                  button.btn-del
              li.adm_skills_item
                input(value="Git").adm_block_input
                .persent-skills
                  input(value="100").adm_block_input
                  span.input_percent %
                .adm_block_title_btns
                  button.btn-tick
                  button.btn-close
              li.adm_skills_item
                input(value="Git").adm_block_input
                .persent-skills
                  input(value="100").adm_block_input
                  span.input_percent %
                .adm_block_title_btns
                  button.btn-edit
                  button.btn-del
            .adm_add_skill
              input(placeholder="Новый навык").adm_block_input
              .persent-skills
                input(value="100").adm_block_input
                span.input_percent %
            
              button.btn-add +

    
    
    section.admin-content
      .container
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
                          img(src="./images/user.jpg").avatar_img
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
                          img(src="./images/user.jpg").avatar_img
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
                          img(src="./images/user.jpg").avatar_img
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
    
    section.admin-content
      .container
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

                  .adm-info-btns
                    button.btn Отмена
                    button.btn_s Сохранить

          .adm-row.row3
            button.adm_block.add_block
              .add_block_plus +
              .add_block_span Добавить <br>работу

            .adm_block
              .work-image-container
                  img(src="./images/portfolio/01.png").work-image
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
                  img(src="./images/portfolio/02.png").work-image
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
                  img(src="./images/portfolio/03.png").work-image
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
                  img(src="./images/portfolio/04.png").work-image
              .adm_block_text
                .work-title Сайт школы образования
                p.work-desk Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
              a(href="#").work-link http://loftschool.ru
              .adm_block_btns
                button.btn-edit.btn-icon
                  span.btn-text Править
                button.btn-close.btn-icon
                  span.btn-text Удалить

        

</template>

<style lang="pcss">

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

.adm_block_text{
  .work-title{
  font-size: 18px;
  font-weight:700;
  opacity: 1.0;
  margin-bottom:10px;
  }
}

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


.work-image-container{
  margin: -25px -25px 20px -25px;
}

.work-image{
  width: auto;
  max-width: 100%;
}

.btn{
  font-size: 16px;
  font-weight: 600;
  font-family: Open Sans,Helvetica,sans-serif;
  color:#383bcf;
  background: none;
  transition: all 0.3s;
  outline: none;
  &:hover{
    opacity: 0.7;
  }
}

.btn_s{
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: Open Sans,Helvetica,sans-serif;
  color:#fff;
  transition: all 0.3s;
      padding: 19px 45px;
      border-radius: 30px;
  outline: none;
      background: linear-gradient(90deg,#006aed,#3f35cb);
  &:hover{
    background: linear-gradient(90deg,#3f35cb,#006aed);
  }
}

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

.adm_block_wrapper{
  display: flex;
  align-items: flex-start;
}
.adm-info{
  width: 70%;
}

.adm_user_photo{
  width: 30%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.adm-info-btns{
  justify-content: flex-end;
  display: flex;
  align-items: center;
  .btn_s{
    margin-left: 55px;
  }
  
}

.wrapper_w70{
  width: 80%;
}

.adm-info_row{
  display: flex;
  .adm-info_line{
    width: 50%;
    margin-right:30px;
    &:last-child{
      margin-right: 0;
    }
  }
}

.adm-textarea{
  resize: none;
  height: 115px;
  outline: none;
  border: 1px solid rgba(0,0,0,.17);
  width: 100%;
  font-size: 16px;
  padding: 15px;
  font-family: Open Sans,Helvetica,sans-serif;
   font-weight: 600;
   color:$text-color;
    line-height: 1.875;
}

.adm-info_label{
  font-weight: 600;
  opacity: 0.5;
  margin-bottom: 8px;
}

.adm-info_line{
  margin-bottom: 30px;
  .adm_block_input{
    font-weight: 600;
    width: 100%;
  }
}

.adm_block_title_span{
  font-size: 18px;
  font-weight: 700;
}

.adm-top{
  margin-bottom: 30px;
  .adm_block_title{
    padding-top: 0;
  }
}

@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');

.adm_block.add_block{
      background: linear-gradient(90deg,#006aed,#3f35cb);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: Open Sans,Helvetica,sans-serif;
}
.add_block{
  .add_block_plus{
  color:#fff;
  font-size:72px;
  font-weight:300;
  font-family: Open Sans,Helvetica,sans-serif;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
    align-items: center;
    border:2px solid #fff;
    border-radius:50%;
    margin-bottom:20px;
  }
  .add_block_span{
    font-weight: 700;
    font-size: 18px;
    color:#fff;
    line-height: 1.66em;
  }
  &:hover{
    background: linear-gradient(90deg,#3f35cb,#006aed);
  }
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

.adm_block_text{
  font-size: 16px;
  font-weight: 600;
  opacity: 0.7;
  line-height: 1.875;
  height: 182px;
  overflow: hidden;
}

.adm_block_btns{
  display: flex;
  justify-content: space-between;
  align-items: center;
.btn-icon{
  padding: 0 25px  0 0;
  background-position: center right;
  width: auto;
  font-size:16px;
  .btn-text{
    opacity: 0.5;
    font-weight: 600;
    color:$text-color;
    font-family: Open Sans,Helvetica,sans-serif;
  }
  &:hover{
    .btn-text{
  opacity: 1;
    transition: all 0.3s;
    }
   
  }
}
}

.btn-edit.btn-icon{
  background: svg-load('edit.svg', fill=#383bcf) center right no-repeat / contain;
  background-size: 16px;
  &:hover{
    background: svg-load('edit.svg', fill=#383bcf) center right no-repeat / contain;
    background-size: 16px;
  }
}

.content-about {
  .adm_block{
    padding-bottom: 70px;
  }
}

.adm_skills_list{
  margin-bottom: 40px;
  .adm_block_input{
    border-bottom: 1px solid transparent;
    &:focus{
      border-bottom: 1px solid #000;
    }
  }
}

.adm_skills_item{
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  .adm_block_input{
    width: calc(100% - 180px);
  }
}

.persent-skills {
   position: relative;
   width: 75px;
  .adm_block_input{
    width: 75px;
    display: block;
    padding-left:6px;
    padding-right:30px;
  }
  .input_percent{
    position: absolute;
    right: 12px;
    top:-2px;
  }
}

.adm_block_input{
  font-size: 16px;
  color:$text-color;
      font-family: Open Sans,Helvetica,sans-serif;
}

.adm_block_title{
  display: flex;
  justify-content: space-between;
  align-items: center;
  .adm_block_input{
    font-size: 18px;
    width: 50%;
    font-weight:500;
  }
}

.input_percent{
  position: relative;
  opacity: 0.7;
}

.adm_add_skill{
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  left: 0;
  padding: 15px;
  .persent-skills{
    margin: 0 25px 0 15px;
  }
  .adm_block_input{
    padding: 0 0 10px 15px;
  }
  .btn-add{
    margin-right: 15px;
  }
}

.btn-edit{
  background: svg-load('edit.svg', fill=#a0a5b1) center center no-repeat / contain;
  width: 30px;
  height: 26px;
  outline: none;
  background-size: 16px;
  &:hover{
    background: svg-load('edit.svg', fill=#383bcf) center center no-repeat / contain;
    background-size: 16px;
  }
}

.btn-close{
  background: svg-load('close.svg', fill=#bf2929) center center no-repeat / contain;
  width: 30px;
  height: 26px;
  background-size: 16px;
  outline: none;
}

.btn-tick{
  background: svg-load('tick.svg', fill=#00d70a) center center no-repeat / contain;
  width: 30px;
  height: 26px;
  outline: none;
  background-size: 16px;
}

.btn-del{
  background: svg-load('del.svg', fill=#a0a5b1) center center no-repeat / contain;
  width: 30px;
  height: 26px;
  background-size: 16px;
  outline: none;
  &:hover{
    background: svg-load('del.svg', fill=#383bcf) center center no-repeat / contain;
    background-size: 16px;
  }
}



.adm_block_input{
  border:none;
  outline: none;
  border-bottom: 1px solid #000;
  padding-bottom: 10px;
}

.adm_block_title{
  border-bottom: 1px solid rgba(0, 0, 0, 0.17);
  margin-bottom: 20px;
  padding: 15px 0;
}

.adm-row{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows:1fr 1fr;
  grid-gap:30px;
  &.row3{
    grid-template-columns: 1fr 1fr 1fr;
  }
}


.adm_block{
  background: #fff;
  padding: 20px 25px;
  box-shadow: 4px 3px 20px 0px rgba(0, 0, 0, 0.07); 
  position: relative;
}

.admin-title_container{
  margin-bottom: 50px;
}

.btn-add_link{
  display: flex;
  text-decoration: none;
  align-items: center;
  .btn-add-span{
    color:#383bcf;
    font-weight: 600;
    font-size:16px;
    margin-left:12px;
  }
}

.admin-title_container{
  display: flex;
  align-items: center;
  .btn-add_link{
    margin-left: 40px;
  }
  .btn-add_link{
    .btn-add{
      width: 20px;
      height: 20px;
      font-size:15px;
    }
  }
}

.btn-add{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 30px;
    outline: none;
    color:#fff;
    background: linear-gradient(90deg,#006aed,#3f35cb);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
    &:hover{
      background: linear-gradient(90deg,#3f35cb,#006aed);
    }
}

.admin-title{
  font-size: 21px;
  font-weight: 700;
}

.admin-content{
      background-image: url(images/admin-bg.jpg);
      background-position: top center;
      background-repeat: no-repeat;
      position: relative;
      min-height:calc(100vh - 155px);
      padding:45px 0;
      &:after{
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top:0;
        left: 0;
        background: rgba(255, 255, 255, 0.9);
      }
      .container{
        position: relative;
        z-index: 100;
      }
}

.admin-nav_list{
  display: flex;
  padding: 30px 0;
  margin-left: 30px;
    align-items: center;
    .admin-nav__item{
      margin-right: 57px;
    &:last-child{
        margin-right: 0;
      }
      .admin-nav__link{
      text-decoration: none;
      color:$text-color;
      
      &:hover{
        color:#383bcf;
      }
      }
    }
}

.out-btn{
  color: #fff;
  opacity: .7;
  line-height: 1.3em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  cursor: pointer;
}

.admin-header_l{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.header_panel_title{
  font-size:14px;
  opacity: .5;
}

.admin-header_user{
  margin-right: 25px;
  align-items: center;
  display: flex;
  .user-name{
  font-size:18px;
      font-weight: 600;
}
  .avatar_wr,
  .avatar_img{
        width: 43px;
    height: 43px;
        border-radius: 50%;
  }
  .avatar_wr{
    margin-right:10px;
  }
}


.admin-header_container{
    align-items: center;
      display: flex;
      justify-content: space-between;
}

.admin-header{
      background: linear-gradient(90deg,#3e3e59,#454573);
      color:#fff;
      padding: 15px 0;
}


@import "normalize.css";

body,
html {
    height: 100%;
    margin:0;
}

body {
    font-family: 'Open Sans', Helvetica, sans-serif;
    font-size: 16px;
    line-height: 1.42;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $text-color;
}

body > svg {
    height: 0;
    width: 0;
    position: absolute;
}

$text-color-hover: #5500f2;

.wrapper {
    overflow: hidden;
    min-height: 100%;
    position: relative;
}

.container {
    margin: 0 auto;
    max-width: 1480px;
    width: 95%;
}

.fullscreen-section {
    height: 100vh;
    min-height: 650px;
}

button {
    border: 0;
    cursor: pointer;
}

* {
    box-sizing: border-box;
}

ul {
    padding: 0;
    margin: 0;
    list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: normal;
    margin: 0;
}

p {
    margin: 0;
    padding: 0;
}

@media (max-width: 991px){
    .adm-row.row3 {
    grid-template-columns: 1fr 1fr;
}
.new_add_skills{
  display: none;
}

.wrapper_w70{
  width: 100%;
}

.user_photo{
  margin-bottom: 20px;
}

}

@media (max-width: 640px){
    .adm-row,
    .adm-row.row3  {
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr;
      grid-gap: 20px;
}


.adm_block{
  padding: 25px 10px;
  margin: 0 -2.5%;
}

.adm_block_text{
  font-size: 14px;
  height: auto;
  margin-bottom: 15px;
}

.adm_block_btns .btn-icon .btn-text{
  font-size: 14px;
}

.add_block .add_block_plus{
  width: 52px;
  height: 52px;
  font-size: 24px;
  margin-bottom: 0;
  margin-right: 20px;
}

.admin-title_container{
  flex-wrap: wrap;
  margin-bottom: 30px;
  .btn-add_link{
    margin-left:0;
  margin-top:15px;
  }
}

  .adm_block.add_block{
    flex-direction: row;
    justify-content: flex-start;

  }

  .add_block .add_block_span br{
    display: none;
  }

  .add_block .add_block_span{
    font-size: 16px;
  }

  .work-link{
    font-size: 14px;
  }

  .admin-nav__link{
    font-size: 14px;
  }

  .admin-title{
    font-size: 18px;
  }

.adm_add_skill .btn-add{
  margin-right: 0;
}

.adm_block_title .reviews-name-wr .reviews__name{
  font-size: 16px;
}

.adm_block_title .reviews-name-wr .reviews__position{
  font-size: 14px;
}

.adm_user_photo{
  width: 100%;
  margin-bottom: 20px;
}

.wrapper_w70,
.adm-info_row{
  flex-wrap: wrap;
  width: 100%
}

.adm-info_row .adm-info_line{
  width: 100%;
  margin-right: 0;
}

.header_panel_title{
  display: none;
}

.adm-info{
  width: 100%;
}

.adm-info_label{
  font-size: 14px;
}
.adm_block_input{
  font-size: 14px;
}

.btn_s,
.btn{
  font-size: 14px;
}
.adm-info-btns .btn_s{
  margin-left: 25px;
}

.admin-nav_list {
  margin-left: 0;
  justify-content: center;
.admin-nav__item{
  margin-right: 35px;
}
}

.edit-work-container .adm-work-load{
  width: 100%;
  margin-right: 0;
  min-height: auto;
}

.edit-work-container .adm-info{
  width: 100%;
}

.edit-work-container{
  flex-wrap: wrap;
}



}


  
</style>
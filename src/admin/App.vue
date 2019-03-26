<template lang="pug">
  .page-about
    section.admin-header
      .container.admin-header_container
        .admin-header_l
          .admin-header_user
            .avatar_wr
              .avatar_img
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
        p dfgdfg

</template>

<style lang="pcss">

.admin-content{
      background-image: url(images/admin-bg.jpg);
      position: relative;
      min-height:calc(100vh - 155px);
      padding:30px 0;
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
    align-items: center;
    .admin-nav__item{
      margin-right: 57px;
      .admin-nav__link{
            text-decoration: none;
      }
      &:hover{
        color:#383bcf;
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


  
</style>
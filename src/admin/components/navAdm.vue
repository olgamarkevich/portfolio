<template lang="pug">
  section.admin-nav
    .container.admin-nav_container
      ul.admin-nav_list
        - var admin_nav_v = ['Обо мне', 'Работы', 'Отзывы'];
          each item in admin_nav_v
            li.admin-nav__item
              a(href="").admin-nav__link #{item}      
</template>

<style lang="pcss">
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

</style>

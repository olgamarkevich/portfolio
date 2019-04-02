<template lang="pug">
  section.admin-nav
    .container.admin-nav_container
      ul.admin-nav_list
        - 
          var admin_nav_v = [
              ['Обо мне', 'about'],
              ['Работы', 'work'],
              ['Отзывы', 'reviews'],
            ]
        each item in admin_nav_v
          li.admin-nav__item
            router-link(to=`/${item[1]}`).admin-nav__link #{item[0]}
    
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
      /* color:$text-color; */
      
      /* &:hover{
        color:#383bcf;
      } */
      }
    }
}

.admin-nav__link.router-link-exact-active{
  color:#5500f2;
  font-weight: 600;
  position: relative;
}

.admin-nav__link.router-link-exact-active:after{
  content:"";
  width: 150%;
    left: -25%;
    bottom: -30px;
    content: "";
    height: 0.1875rem;
    background: #5500f2;
    position: absolute;
}

</style>

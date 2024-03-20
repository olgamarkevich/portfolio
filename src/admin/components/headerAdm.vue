<template lang="pug">
  .admin-header
    .container.admin-header_container
      .admin-header_l
        .admin-header_user
          .avatar_wr
            img(src="../images/user.jpg").avatar_img
          .user-name Ольга Маркевич
        .header_panel_title Панель администрирования
      .admin-header_r
          .out-btn Выйти        
</template>

<style lang="pcss">
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
</style>

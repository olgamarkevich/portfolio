<template lang="pug">
    .page-admin
      headerAdm
      navAdm
      section.admin-content
        .container
          router-view
            //- about
            //- reviews
            //- work
      transition(name="show")
        .tooltips-container(v-if="showed")
          tooltip
</template>

<script>

  import Vue from 'vue'
  
  import headerAdm from './components/headerAdm';
  import navAdm from './components/navAdm';
  import tooltip from './components/tooltip';
  import { mapActions, mapState } from "vuex";


  export default{
    name:'app',
    components:{
      headerAdm,
      navAdm,
      tooltip
    },
    data(){
      return{}
    },
    computed:{
      ...mapState('tooltips', {
        showed:state => state.showed
      })
    }
  }
</script>

<style lang="pcss">
.show-enter-active, .show-leave-active{
transition: transform .5s;
}

.show-enter, .show-leave-to{
transform: translateY(-50%, 110%);
}

.tooltips-container{
  position: fixed;
  bottom: 0;
  left: 50%;
  margin-left: -140px;
  z-index: 100;
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
.adm_block_wrapper{
  display: flex;
  align-items: flex-start;
}
.adm-info{
  width: 70%;
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

.adm_block_text{
  font-size: 16px;
  font-weight: 600;
  
  line-height: 1.875;
  height: 182px;
  overflow: hidden;
  p{
    opacity: 0.7;
  }
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
  grid-template-rows:1fr;
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
  background: none;
   outline: none;
  .btn-add-span{
    color:#383bcf;
    font-weight: 600;
    font-size:16px;
    margin-left:12px;
  }
  :focus{
    outline: none
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

.wrapper_w70{
  width: 100%;
}

.user_photo{
  margin-bottom: 20px;
}
.input_new_slills{
  width: 50%;
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
    width: 100%;
  }

.adm_add_skill .btn-add{
  margin-right: 0;
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

.adm-textarea{
  font-size: 14px;
}
}

</style>
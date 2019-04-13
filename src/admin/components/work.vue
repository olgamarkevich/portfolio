<template lang="pug">
  .admin-work
    .admin-title_container
      .admin-title Блок «Работы»
    workAdd(v-if='showAddingForm' @hideAddingForm="hideAddingForm")
    .adm-row.row3
      button.adm_block.add_block(@click="showAddingForm = true" v-if="showAddingForm === false" )
        .add_block_plus +
        .add_block_span Добавить <br>работу
      workItem(v-for="work in works"
        :key="work.id"
        :work="work"
        )
        
</template>

<script>
  import { mapActions, mapState } from "vuex";
  import workItem from './workItem';
  import workAdd from './workAdd';

  export default{
    components:{
      workItem,
      workAdd
    },
    props:{
    work: Array
    },
    data(){
      return{
        showAddingForm: false
      }
    },
    computed: {
    ...mapState('works', {
      works: state => state.works
    })
    },
    methods:{
        hideAddingForm: function() {
        this.showAddingForm = false;
      },
      ...mapActions('works', ['fetchWorks']),
    },
    async created() {
      try {
        await this.fetchWorks(); 
      } catch (error) {
        alert('Произошла ошибка при загрузке отзывов') 
      }
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
    margin-bottom:5px;
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

@media (max-width: 640px){
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

.admin-work .adm_block_text{
  height: auto;
}

.adm_block_title .reviews-name-wr .reviews__name{
  font-size: 16px;
}

.adm_block_title .reviews-name-wr .reviews__position{
  font-size: 14px;
}
}
</style>
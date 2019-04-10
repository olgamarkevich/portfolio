<template lang="pug">
  .admin-reviews
    .admin-title_container
      .admin-title Блок «Отзывы»
    
    reviewsAdd(v-if='showAddingForm' @hideAddingForm="hideAddingForm")
    .adm-row.row3
      button.adm_block.add_block(@click="showAddingForm = true" v-if="showAddingForm === false" )
        .add_block_plus +
        .add_block_span Добавить<br> отзыв

      reviewsItem(v-for="review in reviews"
        :key="review.id"
        :review="review"
        
        )
      
        
</template>

<script>
import { mapActions, mapState } from "vuex";
  import reviewsItem from './reviewsItem';
  import reviewsAdd from './reviewsAdd';

  export default{
    components:{
      reviewsItem,
      reviewsAdd
    },
    props:{
    review: Array
    },
    data(){
      return{
        showAddingForm: false
      }
    },
    computed: {
    ...mapState('reviews', {
      reviews: state => state.reviews
    })
    },
    methods: {
      hideAddingForm: function() {
        this.showAddingForm = false;
      },
      ...mapActions('reviews', ['fetchReviews']),
    },
    async created() {
    try {
      await this.fetchReviews(); 
    } catch (error) {
      alert('Произошла ошибка при загрузке отзывов') 
    }
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
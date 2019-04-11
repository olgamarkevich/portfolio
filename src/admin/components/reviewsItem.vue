<template lang="pug">
  .adm_block
        .adm_block_title
          .reviews-name-wr
            .reviews__avatar
              img(:src="`https://webdev-api.loftschool.com/${review.photo}`")
            .reviews__person
              .reviews__name {{review.author}}
              .reviews__position {{review.occ}}
        .adm_block_text
          p {{review.text}}
        .adm_block_btns
          button.btn-edit.btn-icon
            span.btn-text Править
          button.btn-close.btn-icon
            span.btn-text(@click="removeExistedReview") Удалить    
</template>


<script>
  import { mapActions } from "vuex";
  export default{
    props: {
    review: Object
  },
  data(){
    return{
    editmode:false,
    editedSkill: {...this.skill}
    }
    
  },
  methods:{
      ...mapActions("reviews", ["removeReviews", "editSkill"]),
      async removeExistedReview() {
      try {
        await this.removeReviews(this.review.id);
      } catch (error) {}
    },
    async save() {
      try {
        await this.editSkill(this.editedSkill);
        this.editmode = false;
      } catch (error) {
        
      }
    }
    }
  }
</script>



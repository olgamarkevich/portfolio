<template lang="pug">
  .adm_block
    .work-image-container
        img(:src="`https://webdev-api.loftschool.com/${work.photo}`").work-image
        .work_tags
          span(
          v-for="tag in work.techs.split(',')"
        ) {{tag}}
          

    .adm_block_text
      .work-title {{work.title}}
      p.work-desk {{work.description}}
    a(href="#").work-link {{work.link}}
    .adm_block_btns
      button.btn-edit.btn-icon
        span.btn-text Править
      button.btn-close.btn-icon(@click="removeExistingWork")
        span.btn-text Удалить    
</template>


<script>
  import { mapActions } from "vuex";
  export default{
    props: {
    work: Object
  },
  data(){
    return{
    editmode:false,
    editedSkill: {...this.skill}
    }
    
  },
  methods:{
        ...mapActions("works", ["removeWork"]),
        async removeExistingWork() {
        try {
          await this.removeWork(this.work.id);
        } catch (error) {}
      }
    }
  }
</script>

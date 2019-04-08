<template lang="pug">
      li.adm_skills_item(v-if="editmode === false")
        .adm_block_input {{skill.title}}
        .persent-skills
          .adm_block_input {{skill.percent}}
          span.input_percent %
        .adm_block_title_btns
          button.btn-edit(@click="editmode = frue")
          button.btn-del(type="button" @click="removeExistedSkill")

      li.adm_skills_item.edit(v-else)
        input(v-model="editedSkill.title").adm_block_input
        .persent-skills
          input(v-model="editedSkill.percent").adm_block_input
          span.input_percent %
        .adm_block_title_btns
          button.btn-tick(@click="save")
          button.btn-close(@click="editmode = false")
</template>

<script>
  import { mapActions } from "vuex";
  export default{
    props: {
    skill: Object
  },
  data(){
    return{
    editmode:false,
    editedSkill: {...this.skill}
    }
    
  },
  methods:{
      ...mapActions("skills", ["removeSkill", "editSkill"]),
      async removeExistedSkill() {
      try {
        await this.removeSkill(this.skill.id);
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

<style  lang="postcss">
.adm_skills_list .edit{
  .adm_block_input{
    border-bottom: 1px solid #000;
  }
}
</style>




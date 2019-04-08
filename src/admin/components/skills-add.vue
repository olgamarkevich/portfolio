<template lang="pug">
  .adm_block.new_add_skills
    .adm_block_title
      input(placeholder="Название новой группы" v-model="skillTitle").adm_block_input
      .adm_block_title_btns
        button.btn-tick(type="button" @click="addSkillGroup")
        button.btn-close(v-on:click="$emit('hideAddingForm')" type="button")

    .adm_add_skill
      input(placeholder="Новый навык").adm_block_input.input_new_slills
      .persent-skills
        input(value="100").adm_block_input
        span.input_percent %
      button.btn-add +
</template>

<script>

import {mapActions} from "vuex"
  export default{
    data(){
      return{
        skillTitle: ""
      }
    },
    methods: {
      ...mapActions('categories', ['addNewSkillsGroup']),
      async addSkillGroup(){
        try{
          await this.addNewSkillsGroup(this.skillTitle);
          this.skillTitle=""
        } catch (error){
          alert(error.message)
        }
      }
    }
  }
</script>



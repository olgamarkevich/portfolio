<template lang="pug">
  .adm_block
    .adm_block_title
      // input(value="Workflow").adm_block_input
      .adm_block_input {{category.category}}
      .adm_block_title_btns
        button.btn-tick
        button.btn-close
    ul.adm_skills_list
      skills-item(
          v-for="skill in skills"
          :key="skill.id"
          :skill="skill"
    )
    .adm_add_skill
      input(placeholder="Новый навык" v-model="skill.title").adm_block_input.input_new_slills
      .persent-skills
        input(value="100"  v-model="skill.percent").adm_block_input
        span.input_percent %
      button.btn-add(@click="addNewSkill") +

      // .adm_block
      //   .adm_block_title
      //     input(value="Frontend").adm_block_input
      //     .adm_block_title_btns
      //       button.btn-edit
      //   ul.adm_skills_list
      //     li.adm_skills_item
      //       input(value="Git").adm_block_input
      //       .persent-skills
      //         input(value="100").adm_block_input
      //         span.input_percent %
      //       .adm_block_title_btns
      //         button.btn-edit
      //         button.btn-del
      //     li.adm_skills_item
      //       input(value="Git").adm_block_input
      //       .persent-skills
      //         input(value="100").adm_block_input
      //         span.input_percent %
      //       .adm_block_title_btns
      //         button.btn-edit
      //         button.btn-del
      //     li.adm_skills_item
      //       input(value="Git").adm_block_input
      //       .persent-skills
      //         input(value="100").adm_block_input
      //         span.input_percent %
      //       .adm_block_title_btns
      //         button.btn-tick
      //         button.btn-close
      //     li.adm_skills_item
      //       input(value="Git").adm_block_input
      //       .persent-skills
      //         input(value="100").adm_block_input
      //         span.input_percent %
      //       .adm_block_title_btns
      //         button.btn-edit
      //         button.btn-del
      //   .adm_add_skill
      //     input(placeholder="Новый навык").adm_block_input.input_new_slills
      //     .persent-skills
      //       input(value="100").adm_block_input
      //       span.input_percent %
      //     button.btn-add +
</template>


<script>
  import { mapActions } from "vuex";
import skillsItem from './skills-item';

export default{
   components:{
      skillsItem
    },
  data(){
    return{
      skill:{
        category: this.category.id,
        title:"",
        percent:""
      }
    }
  },
  props:{
    category: Object,
    skills: Array
  },
  methods: {
    ...mapActions('skills', ['addSkill']),
    async addNewSkill() {
      try {
        await this.addSkill(this.skill);
      } catch (error) {
        // error 
      }
    }
  }
}
</script>
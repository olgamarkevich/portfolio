<template lang="pug">
  .adm_block
    .adm_block_title.no_edit(v-if="editmode === false")
      .adm_block_input {{category.category}}
      .adm_block_title_btns
        button.btn-edit(@click="editmode = true")
    
    .adm_block_title.edit(v-else)
      input.adm_block_input(v-model="editedCategory.category") 
      .adm_block_title_btns
        button.btn-tick(@click="saveCategory") 
        button.btn-close(@click="removeExistingCategory")

    ul.adm_skills_list
      skills-item(
          v-for="skill in skills"
          :key="skill.id"
          :skill="skill"
    )
    .adm_add_skill
      input(placeholder="Новый навык" v-model="$v.skill.title.$model" :class="status($v.skill.title)").adm_block_input.input_new_slills
      .persent-skills
        input(value="100"  v-model="$v.skill.percent.$model" :class="status($v.skill.percent)").adm_block_input
        span.input_percent %
      button.btn-add(@click="addNewSkill") +

</template>


<script>

import { mapActions } from "vuex";
import skillsItem from './skills-item';

import Vue from 'vue';
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);
import { required, integer, minValue, maxValue } from 'vuelidate/lib/validators';

export default{
   components:{
      skillsItem
    },
  data(){
    return{
      editmode: false,
      skill:{
        category: this.category.id,
        title:"",
        percent:""
      },
      editedCategory:{...this.category}
    }
  },
  props:{
    category: Object,
    skills: Array
  },
  validations: {
    skill: {
      title: {
        required
      },
      percent: {
        required,
        integer,
        minValue: minValue(1),
        maxValue: maxValue(100)
      }
    }
  },
  methods: {
    ...mapActions('skills', ['addSkill']),
    ...mapActions('categories', ['deleteCategory', 'editCategory']),
    ...mapActions('tooltips', ['showTooltip']),
    async addNewSkill() {
      this.$v.$touch();
      if(!this.$v.$invalid) {
        try {
          await this.addSkill(this.skill);
          this.showTooltip({
            type:"success",
            text: "Скилл добавлен"
          });
           this.$v.$reset();
        } catch (error) {
          this.showTooltip({
            type:"error",
            text: error.message
          })
        }
      }
    },
    async removeExistingCategory() {
      try {
        await this.deleteCategory(this.category.id);
        this.showTooltip({
          type:"success",
          text: "Категория удалена"
        })
      } catch (error) {
        this.showTooltip({
          type:"error",
          text: "Категорию не удалось удалить"
        })
      }
    },
    async saveCategory() {
      try {
        await this.editCategory(this.editedCategory);
        this.editmode = false;
      } catch (error) {
        
      }
    },
    status(validation) {
        return {
          error: validation.$error,
          dirty: validation.$dirty
        }
      }
  }
}
</script>

<style lang="pcss">
 .no_edit .adm_block_input{
  border-bottom: 1px solid transparent;
}
</style>
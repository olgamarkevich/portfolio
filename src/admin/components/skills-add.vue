<template lang="pug">
  .adm_block.new_add_skills
    .adm_block_title
      input(placeholder="Название новой группы" v-model="$v.skillTitle.$model" :class="status($v.skillTitle)").adm_block_input
      .adm_block_title_btns
        button.btn-tick(type="button" @click="addSkillGroup")
        button.btn-close(v-on:click="$emit('hideAddingForm')" type="button")
</template>

<script>

import Vue from 'vue';
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);
import { required } from 'vuelidate/lib/validators';

import {mapActions} from "vuex";

  export default{
    data(){
      return{
        skillTitle: ""
      }
    },
    validations: {
      skillTitle: {
        required
      },
    },
    methods: {
      ...mapActions('categories', ['addNewSkillsGroup']),
      ...mapActions('tooltips', ['showTooltip']),
      async addSkillGroup(){
        this.$v.$touch();
        if (!this.$v.$invalid) {
          try{
            await this.addNewSkillsGroup(this.skillTitle);
            this.showTooltip({
            type:"success",
            text: "Категория добавлена"
          });
            this.skillTitle="";
            this.$v.$reset();
          } catch (error){
            alert(error.message)
          }
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



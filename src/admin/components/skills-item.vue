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
        input(v-model="$v.editedSkill.title.$model" :class="status($v.editedSkill.title)").adm_block_input
        .persent-skills
          input(v-model="$v.editedSkill.percent.$model" :class="status($v.editedSkill.percent)").adm_block_input
          span.input_percent %
        .adm_block_title_btns
          button.btn-tick(@click="save")
          button.btn-close(@click="editmode = false")
</template>

<script>
  import { mapActions } from "vuex";

  import Vue from 'vue';
  import Vuelidate from 'vuelidate';
  Vue.use(Vuelidate);
  import { required, integer, minValue, maxValue } from 'vuelidate/lib/validators';

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
  validations: {
    editedSkill: {
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
  methods:{
      ...mapActions("skills", ["removeSkill", "editSkill"]),
      ...mapActions('tooltips', ['showTooltip']),
      async removeExistedSkill() {
          try {
            await this.removeSkill(this.skill.id);
            this.showTooltip({
              type:"success",
              text: "Скилл удален"
            })
          } catch (error) {}
    },
    async save() {
      this.$v.$touch();
       if(!this.$v.$invalid) {
          try {
            await this.editSkill(this.editedSkill);
            this.editmode = false;
            this.$v.$reset();
          } catch (error) {
            
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

<style  lang="postcss">
.adm_skills_list .edit{
  .adm_block_input{
    border-bottom: 1px solid #000;
  }
}
</style>




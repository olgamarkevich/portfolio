<template lang="pug">
    .admin-about
      .admin-title_container
        .admin-title Блок «Обо мне»
        button.btn-add_link(@click="showAddingForm = true" v-if="showAddingForm === false" )
          .btn-add +
          .btn-add-span Добавить группу
      
      .adm-row.content-about
        skillsAdd(v-if='showAddingForm' @hideAddingForm="hideAddingForm")
        skills-group(v-for="category in categories"
        :key="category.id"
        :category="category"
        :skills="filterSkillsByCategoryId(category.id)"
        )

</template>



<script>

  import { mapActions, mapState } from "vuex";
  import skillsAdd from './skills-add';
  import skillsGroup from './skills-group';

  export default{
    components:{
      skillsAdd,
      skillsGroup
    },
    data(){
      return{
        showAddingForm: false
      }
    },
    computed: {
    ...mapState('categories', {
      categories: state => state.categories
    }),
    ...mapState('skills', {
      skills: state => state.skills
    })
    },
    methods: {
      ...mapActions('categories', ['fetchCategories']),
      ...mapActions('skills', ['fetchSkills']),
      filterSkillsByCategoryId(categoryId) {
      return this.skills.filter(skill => skill.category === categoryId);
    },
      hideAddingForm: function() {
        this.showAddingForm = false;
      }
    },
    async created() {
    try {
      await this.fetchCategories(); 
    } catch (error) {
      alert('Произошла ошибка при загрузке категорий') 
    }
    try {
      await this.fetchSkills(); 
    } catch (error) {
      alert('Произошла ошибка при загрузке скиллов') 
    }
  }
  }
</script>

<style lang="pcss">
.content-about {
  .adm_block{
    padding-bottom: 70px;
  }
}

.adm_skills_list{
  margin-bottom: 40px;
  .adm_block_input{
    border-bottom: 1px solid transparent;
    &:focus{
      border-bottom: 1px solid #000;
    }
  }
}

.adm_skills_item{
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  .adm_block_input{
    width: calc(100% - 180px);
  }
}

.persent-skills {
   position: relative;
   width: 75px;
  .adm_block_input{
    width: 75px;
    display: block;
    padding-left:6px;
    padding-right:30px;
  }
  .input_percent{
    position: absolute;
    right: 12px;
    top:-2px;
  }
}

.input_percent{
  position: relative;
  opacity: 0.7;
}

.adm_add_skill{
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  left: 0;
  padding: 15px;
  .persent-skills{
    margin: 0 25px 0 15px;
  }
  .adm_block_input{
    padding: 0 0 10px 15px;
  }
  .btn-add{
    margin-right: 15px;
  }
}

@media (max-width: 640px){

}

</style>
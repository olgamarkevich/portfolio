<template lang="pug">
    .admin-about
          .admin-title_container
            .admin-title Блок «Обо мне»
            a(href="#").btn-add_link
              .btn-add +
              .btn-add-span Добавить группу
          
          .adm-row.content-about
            .adm_block.new_add_skills
              .adm_block_title
                input(placeholder="Название новой группы").adm_block_input
                .adm_block_title_btns
                  button.btn-tick
                  button.btn-close
            
              .adm_add_skill
                input(placeholder="Новый навык").adm_block_input.input_new_slills
                .persent-skills
                  input(value="100").adm_block_input
                  span.input_percent %
                button.btn-add +

            .adm_block
              .adm_block_title
                input(value="Workflow").adm_block_input
                .adm_block_title_btns
                  button.btn-tick
                  button.btn-close
              ul.adm_skills_list
                li.adm_skills_item
                  input(value="Git").adm_block_input
                  .persent-skills
                    input(value="100").adm_block_input
                    span.input_percent %
                  .adm_block_title_btns
                    button.btn-edit
                    button.btn-del
                li.adm_skills_item
                  input(value="Git").adm_block_input
                  .persent-skills
                    input(value="100").adm_block_input
                    span.input_percent %
                  .adm_block_title_btns
                    button.btn-edit
                    button.btn-del
                li.adm_skills_item
                  input(value="Git").adm_block_input
                  .persent-skills
                    input(value="100").adm_block_input
                    span.input_percent %
                  .adm_block_title_btns
                    button.btn-edit
                    button.btn-del
                li.adm_skills_item
                  input(value="Git").adm_block_input
                  .persent-skills
                    input(value="100").adm_block_input
                    span.input_percent %
                  .adm_block_title_btns
                    button.btn-edit
                    button.btn-del
              .adm_add_skill
                input(placeholder="Новый навык").adm_block_input.input_new_slills
                .persent-skills
                  input(value="100").adm_block_input
                  span.input_percent %
                button.btn-add +
            .adm_block
              .adm_block_title
                input(value="Frontend").adm_block_input
                .adm_block_title_btns
                  button.btn-edit
              ul.adm_skills_list
                li.adm_skills_item
                  input(value="Git").adm_block_input
                  .persent-skills
                    input(value="100").adm_block_input
                    span.input_percent %
                  .adm_block_title_btns
                    button.btn-edit
                    button.btn-del
                li.adm_skills_item
                  input(value="Git").adm_block_input
                  .persent-skills
                    input(value="100").adm_block_input
                    span.input_percent %
                  .adm_block_title_btns
                    button.btn-edit
                    button.btn-del
                li.adm_skills_item
                  input(value="Git").adm_block_input
                  .persent-skills
                    input(value="100").adm_block_input
                    span.input_percent %
                  .adm_block_title_btns
                    button.btn-tick
                    button.btn-close
                li.adm_skills_item
                  input(value="Git").adm_block_input
                  .persent-skills
                    input(value="100").adm_block_input
                    span.input_percent %
                  .adm_block_title_btns
                    button.btn-edit
                    button.btn-del
              .adm_add_skill
                input(placeholder="Новый навык").adm_block_input.input_new_slills
                .persent-skills
                  input(value="100").adm_block_input
                  span.input_percent %
                button.btn-add +
</template>


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
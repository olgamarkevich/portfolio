import Vue from 'vue';
import axios from 'axios';

const skill = { 
    template:"#skill",
    props: {
        skill: Object
      },
      methods: {
        drawColoredCircle() {
          const circle = this.$refs["color-circle"];
          const dashArray = parseInt(
            getComputedStyle(circle).getPropertyValue("stroke-dasharray")
          );
          circle.style.animationDelay = '-' + (100 - this.skill.percent) + 's';
        }
      },
      mounted() {
        this.drawColoredCircle();
      }
}

const skillsRow = { 
    template:"#skills-row",
    components:{
        skill
    },
    props: {
        category: Object
      }
}

new Vue({
    el:"#skills-component",
    template:"#skills-list",
    components:{
        skillsRow
    },
    data() {
        return {
          categories: [],
          skills: []
        };
    },
    methods: {
      mergeData() {
        var component = this;
        if (component.categories.length && component.skills.length) {
          component.categories.forEach(function(category) {
            category.skills = component.skills.filter(function(skill) {
              return skill.category == category.id;
            });
          });
        }
      }
    },
    created() {
      var component = this;
      axios.get('https://webdev-api.loftschool.com/skills/113')
      .then(function (response) {
        component.skills = response.data;
        component.mergeData();
      })
      .catch(function (error) {
        console.log(error);
      });
      axios.get('https://webdev-api.loftschool.com/categories/113')
      .then(function (response) {
        component.categories = response.data;
        component.mergeData();
      })
      .catch(function (error) {
        console.log(error);
      });
      }

})
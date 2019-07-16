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
        this.categories.forEach(category => {
          category.skills = this.skills.filter(skill => skill.category == category.id)
        })
      }
    },
    async created() {
      const skillsRes = await axios.get('https://webdev-api.loftschool.com/skills/113')
      this.skills = skillsRes.data;
      const catRes = await axios.get('https://webdev-api.loftschool.com/categories/113')
      this.categories = catRes.data;
      this.mergeData()
      }

})
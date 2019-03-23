import Vue from 'vue';
import Flickity from 'vue-flickity';

new Vue({
    el:"#reviews-component",
    template:"#reviews__list",
    components: {
      Flickity
    },
    data() {
      return {
        flickityOptions: {
          initialIndex: 0,
          prevNextButtons: false,
          pageDots: false,
          wrapAround: true,
          cellAlign: 'left'
        }
      }
    },
    methods: {
      next() {
        this.$refs.flickity.next();
      },
      previous() {
        this.$refs.flickity.previous();
      },
      makeArrWithRequiredImages(data) {
        return data.map(item => {
          const requiredPic = require(`../images/content/reviews-person/${item.photo}`);
          item.photo = requiredPic;
          return item;
        });
      },
    },
    created() {
        const data = require("../data/reviews.json");
        this.reviews = this.makeArrWithRequiredImages(data);
      }
  });

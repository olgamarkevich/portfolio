import Vue from 'vue';

const thumbs = {
  template: '#slider-thumbs',
  props: {
    works: Array,
    currentWork: Object,
  },
  created() {
    this.$root.thumbsRefs = this.$refs;
  },
};

const btns = {
  template: '#slider-btns',
};

const display = {
  template: '#slider-display',
  components: {
    btns,
    thumbs,
  },
  props: {
    works: Array,
    currentWork: Object,
    currentIndex: Number,
  },
  computed: {},
};

const tags = {
  template: '#slider-tags',
  props: {
    tagsArray: Array,
  },
};

const info = {
  template: '#slider-info',
  components: {
    tags,
  },
  props: {
    currentWork: Object,
  },
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(',');
    },
  },
};

new Vue({
  template: '#slider-container',
  el: '#slider-component',
  components: {
    display,
    info,
  },

  data() {
    return {
      works: [],
      currentIndex: 0,
    };
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex];
    },
  },
  watch: {
    currentIndex(value) {
      this.makeInfiniteLoopForCurIndex(value);
      this.fixThumbs();
    },
  },
  methods: {
    makeInfiniteLoopForCurIndex(value) {
      const worksAmount = this.works.length - 1;
      if (value > worksAmount) this.currentIndex = 0;
      if (value < 0) this.currentIndex = worksAmount;
    },
    makeArrWithRequiredImages(data) {
      return data.map((item) => {
        const requiredPic = require(`../images/content/portfolio/${
          item.photo
        }`);
        item.photo = requiredPic;

        return item;
      });
    },
    handleSlide(direction) {
      switch (direction) {
        case 'next':
          this.currentIndex++;
          break;
        case 'prev':
          this.currentIndex--;
          break;
      }
    },
    handleSlideTo(index) {
      this.currentIndex = index;
      this.fixThumbs();
    },
    fixThumbs() {
      const thumbHeight = this.thumbsRefs.thumb[0].offsetHeight,
        thumbsHeight = this.thumbsRefs.thumbs.offsetHeight,
        thumbsActive = Math.round(thumbsHeight / thumbHeight),
        thumbsTotal = this.thumbsRefs.thumb.length;

      var offset = 0;

      if (this.currentIndex >= thumbsActive) {
        offset = -(this.currentIndex + 1 - thumbsActive) * thumbHeight;
      }

      this.thumbsRefs.thumb[0].style.marginTop = offset + 'px';
    },
  },
  created() {
    const data = require('../data/work.json');
    this.works = this.makeArrWithRequiredImages(data);
    window.addEventListener('resize', this.fixThumbs);
  },
});

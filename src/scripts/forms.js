import Vue from 'vue';
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);
import { required, email } from 'vuelidate/lib/validators'
const axios = require('axios');

Vue.component('modal', {
  template: `
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box"><slot></slot></div>
      </div>
      <button class="modal-close" @click="$emit('close')"></button>
    </div>
  `
});

new Vue({
    el:"#fb-component",
    data: {
      fbName: '',
      fbMail: '',
      fbMsg: ''
    },
    validations: {
      fbName: {
        required
      },
      fbMail: {
        required,
        email
      },
      fbMsg: {
        required
      }
    },
    methods: {
      status(validation) {
        return {
          error: validation.$error,
          dirty: validation.$dirty
        }
      },
      formIsValid(v) {
        var filelds = ['fbName', 'fbMail', 'fbMsg'];
        return filelds.every(function(field) {
          return v[field].$dirty && !v[field].$error;
        });
      },
      submitFb() {
        axios.post('https://webdev-api.loftschool.com/sendmail', {
          name: this.fbName,
          to: "pyrkoolga@gmail.com",
          mail: this.fbMail,
          comment: this.fbMsg,
          phone: "111"
        })
        .then(function (response) {
          alert('Сообщение отправлено!');
          
        })
        .catch(function (error) {
          alert('Не удалось отправить сообщение!');
        });
      }
    }
});

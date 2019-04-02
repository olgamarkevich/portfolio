import Vue from 'vue';
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);
import { required, email } from 'vuelidate/lib/validators'
const axios = require('axios');

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
        axios.post('https://webdev-api.loftschool.com/register', {
          name: this.fbName,
          mail: this.fbMail,
          msg: this.fbMsg
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

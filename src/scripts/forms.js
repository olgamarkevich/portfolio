import Vue from 'vue';
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);
import { required, email } from 'vuelidate/lib/validators'
const axios = require('axios');

const modalState = {
  msg: null
}

new Vue({
    el:"#fb-component",
    data: {
      fbName: '',
      fbMail: '',
      fbMsg: '',
      modalState: modalState
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
        var form = this;
        axios.post('https://webdev-api.loftschool.com/sendmail', {
          name: this.fbName,
          to: "pyrkoolga@gmail.com",
          mail: this.fbMail,
          comment: this.fbMsg,
          phone: "111"
        })
        .then(function (response) {
          form.modalState.msg = 'Сообщение отправлено!';
          // form.fbName = '';
          // form.fbMail = '';
          // form.fbMsg = ''

        })
        .catch(function (error) {
          form.modalState.msg = 'Не удалось отправить сообщение!';
        });
      }
    }
});

new Vue({
  el:"#modal",
  data: modalState,
  methods: {
    close() {
      this.msg = null;
    }
  }
});

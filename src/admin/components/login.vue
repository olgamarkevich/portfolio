<template lang="pug">
  .login
    .login__content
      form.login__form(@submit.prevent="login")
        .login__form-title Авторизация
        .login__row
          app-input(
            title="Логин"
            icon="user"
            v-model="user.name"
          )
        .login__row
          app-input(
            title="Пароль"
            icon="key"
            type="password"
            v-model="user.password"
          )
        .login__btn
          button(
            type="submit"
          ).login__send-data Отправить
</template>

<script>
import $axios from '../requests'

import appInput from './input';

export default {
  components: {
    appInput
  },
  data() {
    return {
      user: {
        name: "markevich032019",
        password: "ljoka2009"
      }
    };
  },
  methods: {
    async login() {
      try {
        const {
          data: { token }
        } = await $axios.post("/login", this.user);

        localStorage.setItem("token", token);
        $axios.defaults.headers["Authorization"] = `Bearer ${token}`;
        this.$router.replace("/about");
      } catch (error) {
        //error handling
      }
    }
  }
};
</script>

<style lang="postcss">

.login {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: url("~images/bg/admin.jpg") center center / cover no-repeat; */

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.5;
    background: $text-color;
  }
}

.login__form-title {
  font-size: 36px;
  text-align: center;
  font-weight: 600;
}

.login__content {
  position: relative;

  /* @include phones {
    height: 100%;
    width: 100%;
  } */
}

.login__row {
  margin-bottom: 35px;
}

.login__btn {
  display: flex;
  width: 100%;
  padding: 0 8%;
  justify-content: center;
}

.login__send-data {
  width: 100%;
  padding: 30px;
  background-image: linear-gradient(to right, #ad00ed, #5500f2);
  border-radius: 40px 0 40px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;

  &[disabled] {
    opacity: 0.5;
    filter: grayscale(100%);
  }
}

.login__form {
  width: 563px;
  padding: 50px 77px 65px;
  background: #fff;

  /* @include phones {
    width: 100%;
    padding-right: 7%;
    padding-left: 7%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  } */
}
</style>


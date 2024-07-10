<template>
  <div class="login-box">
    <form @submit.prevent="login">
      <div>
        <label for="username">Username</label>
        <input type="text" v-model="form.username" id="username" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="text" v-model="form.password" id="password" />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import ApiLogin from "@/api/apiLogin";
import router from "@/router";
import { ref } from "vue";

export default {
  setup() {
    const form = ref({
      username: "",
      password: "",
    });

    const token = ref('')

    const message = ref('');

    const login = async () => {
      try{
        const response = await ApiLogin.postLogin(form.value)
        token.value = response.auth_token;
        console.log(token.value);
        if(token.value){
          localStorage.setItem('token', token.value);
          router.push('/')
        }

      }catch(error){
        message.value = "Qayta tekshirib ko'rin"
      }
    }

    return {
      form,
      login,
      message
    };
  },
};
</script>

<style>
.login-box {
  max-width: 500px;
  margin: 0 auto;
}
form {
  max-width: 100%;
  background: bisque;
  padding: 20px;
}
input {
  width: 100%;
  padding: 5px;
  display: block;
  margin-bottom: 10px;
}
</style>

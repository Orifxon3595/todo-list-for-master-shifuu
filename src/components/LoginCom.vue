<template>
  <div class="loginContainer">
    <div class="loginBox">
      <form class="loginForm" @submit.prevent="login">
        <h3 class="loginTitle">Login</h3>
        <div class="loginInput">
          <input
            type="text"
            v-model="form.username"
            id="username"
            placeholder="Username"
            required
          />
        </div>
        <div class="loginInput">
          <input
            type="text"
            v-model="form.password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <div>
          <button class="loginBtn" type="submit">Login</button>
        </div>
        <div class="loginSignupText">
          <p>Don't have an account? <router-link to="/signup">Signup</router-link></p>
        </div>
      </form>
    </div>
    <div class="loginImgBox">
      <img class="loginImg" src="../assets/login1.png" alt="Login page image" />
    </div>
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

    const token = ref("");

    const message = ref("");

    const login = async () => {
      try {
        const response = await ApiLogin.postLogin(form.value);
        token.value = response.auth_token;
        if (token.value) {
          localStorage.setItem("token", token.value);
          router.push("/todo");
        }
      } catch (error) {
        message.value = "Qayta tekshirib ko'rin";
      }
    };

    return {
      form,
      login,
      message,
    };
  },
};
</script>

<style>
.loginContainer {
  max-width: 1224px;
  padding: 0 20px;
  height: 90vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 50px;
  align-items: center;
  align-content: center;
}
.loginBox {
  max-width: 500px;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 30px 20px;
  text-align: center;
  box-shadow: 12px 12px 2px 1px rgba(0, 70, 251, 0.2);
}
.loginTitle {
  font-size: x-large;
  text-align: center;
  margin: 5px 0;
  color: rgb(44, 44, 44);
}

/* Form styles */
.loginForm {
  /* display: grid;
  grid-template-columns: auto; */
}
.loginInput input {
  width: 90%;
  display: inline-block;
  font-size: 15px;
  padding: 12px 16px;
  margin: 12px 0;
  border: 0;
  border-bottom: 1px solid #cccccc50;
  box-sizing: border-box;
  outline: none;
}
.loginInput input:focus {
  border-bottom: 2px solid #5581e2;
  background-color: rgba(0, 71, 251, 0.075);
}
.loginBtn {
  width: 90%;
  padding: 4px 30px;
  margin-top: 25px;
  border-radius: 10px;
  border: 2px solid #5581e2;
  background-color: #5581e2;
  color: #ffffff;
  font-size: 16px;
  font-weight: 800;
}
.loginBtn:active {
    border: 2px solid #5581e2;
    background-color: #ffffff;
    color: #5581e2;
}

/* Image styles */
.loginImgBox {
  text-align: right;
}
.loginImg {
  width: 500px;
}
.loginSignupText{
    margin-top: 25px;
    font-size: 15px;
}
.loginSignupText a{
    text-decoration: none;
    color: #5581e2;
}
</style>

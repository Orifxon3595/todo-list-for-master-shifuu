<template>
  <div class="signupContainer">
    <div class="signupBox">
      <form @submit.prevent="signup">
        <h3 class="loginTitle">Signup</h3>
        <div class="signupInput">
          <input type="text" v-model="form.email" id="email" placeholder="Email"/>
        </div>
        <div class="signupInput">
          <input type="text" v-model="form.first_name" id="first_name" placeholder="Firstname">
        </div>
        <div class="signupInput">
          <input type="text" v-model="form.last_name" id="last_name" placeholder="Lastname"/>
        </div>
        <div class="signupInput">
          <input type="text" v-model="form.username" id="username" placeholder="Username"/>
        </div>
        <div class="signupInput">
          <input type="password" v-model="form.password" id="password" placeholder="Password"/>
        </div>
        <div class="signupInput">
          <input type="password" v-model="form.re_password" id="re_password" placeholder="Retype password"/>
        </div>
        <div>
          <button class="signupBtn" type="submit">Sign Up</button>
        </div>
        <div class="signupLoginText">
          <p>Already have an account? <router-link to="/login">Login</router-link></p>
        </div>
      </form>
    </div>
    <div class="signupImgBox">
      <img class="signupImg" src="../assets/sign-up.png" alt="Sign up page image" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import ApiSignup from "@/api/apiSignup";
import router from '@/router';

export default {
  setup() {
    const form = ref({
      email: "",
      first_name: "",
      last_name: "",
      username: "",
      password: "",
      re_password: "",
    });

    const message = ref("");

    const signup = async () => {
      try {
        const response = await ApiSignup.postSignup(form.value);
        message.value = "Ro'yxatdan muvaffaqqiyatli o'ttingiz";
        form.value = "";
        router.push('/login')
      } catch (error) {
        message.value =
          "Qayta tekshiring" + (error.response?.data?.message || error.message);
      }
    };

    return { form, message, signup };
  },
};
</script>

<style>
.signupContainer {
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
.signupBox {
  max-width: 500px;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 30px 20px;
  text-align: center;
  box-shadow: 12px 12px 2px 1px rgba(0, 70, 251, 0.2);
}
.signupTitle {
  font-size: x-large;
  text-align: center;
  margin: 5px 0;
  color: rgb(44, 44, 44);
}

/* Form styles */
.signupInput input {
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
.signupInput input:focus {
  border-bottom: 2px solid #5581e2;
  background-color: rgba(0, 71, 251, 0.075);
}
.signupBtn {
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
.signupBtn:active {
    border: 2px solid #5581e2;
    background-color: #ffffff;
    color: #5581e2;
}

/* Image styles */
.signupImgBox {
  text-align: right;
}
.signupImg {
  width: 100%;
}
.signupLoginText{
    margin-top: 25px;
    font-size: 15px;
}
.signupLoginText a{
    text-decoration: none;
    color: #5581e2;
}
</style>

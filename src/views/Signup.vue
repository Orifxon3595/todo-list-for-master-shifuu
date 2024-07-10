<template>
  <div class="signUp-box">
    <form @submit.prevent="signup">
      <div>
        <label for="email">Email</label>
        <input type="text" v-model="form.email" id="email" />
      </div>
      <div>
        <label for="first_name">Firstname</label>
        <input type="text" v-model="form.first_name" id="first_name" />
      </div>
      <div>
        <label for="last_name">Lastname</label>
        <input type="text" v-model="form.last_name" id="last_name" />
      </div>
      <div>
        <label for="username">Username</label>
        <input type="text" v-model="form.username" id="username" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" v-model="form.password" id="password" />
      </div>
      <div>
        <label for="re_password">Reset password</label>
        <input type="password" v-model="form.re_password" id="re_password" />
      </div>
      <div>
        <button type="submit">Sign Up</button>
      </div>
      <div>
        <p>Allaqachon azomisiz?<a href="/login">Login</a></p>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import ApiSignup from "@/api/apiSignup";

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
.signUp-box {
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

<template>
  <div class="signUp-box">
    <form>
        <input type="text">
        <input type="text">
        <input type="text">
        <input type="text">
        <input type="text">
        <input type="text">
        <button>Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.signUp-box{
    max-width: 500px;
    margin: 0 auto;
}
form{
   max-width: 100%; 
   background: bisque;
   padding: 20px;
}
input{
    width: 100%;
    padding: 5px;
    display: block;
    margin-bottom: 10px;
}
</style>
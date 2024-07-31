<template>
  <div class="home">
    <div class="homeItems">
      <div class="homeItemOne">
        <div class="itemOneTitleBox">
          <h1 class="itemOneTitle"><span>Have you forgotten your daily chores? </span>Then I will help you:) Welcome to the ToDo list</h1>
        </div>
        <div class="itemOneBtnBox">
          <router-link class="btn" to="/login">Login</router-link>
          <router-link class="btn" to="/signup">Signup</router-link>
        </div>
      </div>
      <div class="homeItemTwo">
        <img src="../assets/todoHomeImg.png" alt="Home image">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style>
.homeItems{
  max-width: 1324px;
  padding: 0 20px;
  height: 90vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 50% 50%;
  /* gap: 50px; */
  align-items: center;
  align-content: center;
}
.itemOneTitle{
  font-size: 38px;
  color: #6C6295;
  /* font-weight: 800; */
}

.itemOneTitle span{
  color: #CB9637;
}
.itemOneBtnBox{
  display: flex;
  gap: 20px;
}
.itemOneBtnBox .btn{
  text-decoration: none;
  padding: 8px 36px;
  border-radius: 20px;
  border: 2px solid #5581e2;
  background-color: #5581e2;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
}
.itemOneBtnBox .btn:active {
    border: 2px solid #5581e2;
    background-color: #ffffff;
    color: #5581e2;
}
.homeItemTwo{
  display: flex;
  justify-content: center;
  align-items: center;
}
.homeItemTwo img{
  width: 100%;
  height: auto;
  object-fit: cover;
}
.homeTitle{
  text-align: center;
}
</style>

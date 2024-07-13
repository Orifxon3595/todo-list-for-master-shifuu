<template>
  <div class="navContainer">
    <div class="navItem">
      <div class="navLogoBox">
        <h1 class="navLogo">ToDo</h1>
      </div>
      <div class="userBox">
        <div class="navImgBox">
          <!-- <img class="navUserImg" src="../assets/user.png" alt="" /> -->
        </div>
        <div class="userDrop">
          <span>user</span>
          <span>v</span>
          <div class="dropItem">
            <a href="/userupdate">Taxrirlash</a><br>
            <button @click="handleUpdate">Chiqish</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router';


export default {
  setup(){
    const handleUpdate = () => {
      localStorage.removeItem('token')
      router.push('/login')
    }

    return {handleUpdate}
  }
};
</script>

<style>
.navContainer {
  /* background-color: #ffffff; */
  box-shadow: 0px 10px 5px 0px rgba(0, 70, 251, 0.1);
}
.navItem {
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navImgBox {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 1px solid #4d4d4d;
}
.userBox {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
}
/* .navUserImg{
    width: 100%;
    object-fit: contain;
    border-radius: 100%;
} */
.userDrop {
  position: relative;
  display: inline-block;
}
.dropItem {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}

.userDrop:hover .dropItem{
    display: block;
}
</style>

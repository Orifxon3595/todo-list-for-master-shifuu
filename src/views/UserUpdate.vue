<template>
  <div class="userUpdate">
    <div class="userUpdateItem">
        <ul class="userUl">
            <li class="userLi">
                <p>Email</p>
                <button>up</button>
            </li>
            <li>
                <p>First name</p>
                <button>up</button>
            </li>
            <li>
                <p>Last name</p>
                <button>up</button>
            </li>
            <li>
                <p>Username</p>
                <button>up</button>
            </li> 
        </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.userUpdate{
    max-width: 1024px;
    margin: 0 auto;
}
.userLi{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
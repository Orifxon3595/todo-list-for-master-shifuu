<template>
  <div>
    <UserNav/>
    <h1 class="homeTitle">To Do list for master "Shi fuu"</h1>
    <ToDoList/>
  </div>
</template>

<script>
import UserNav from '@/components/UserNav.vue'
import ToDoList from '../components/ToDoListCom.vue'
export default {
  name: 'HomeView',
  components: {
    ToDoList,
    UserNav
  }
}
</script>

<style>

</style>
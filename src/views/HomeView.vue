<template>
  <div class="home">
    <h1>To Do list for master "Shi fuu"</h1>
    <ToDoList/>
  </div>
</template>

<script>
import ToDoList from '../components/ToDoList.vue'
export default {
  name: 'HomeView',
  components: {
    ToDoList
  }
}
</script>

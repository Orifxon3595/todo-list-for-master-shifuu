<template>
  <div class="todo-wrap">
    <form @submit.prevent="addTodo">
      <div class="todo-form">
        <input class="todo-input" type="text" v-model="newTodo.todo" />
        <button class="todo-create-btn" type="submit">Add</button>
      </div>
    </form>
    <div class="todo-box">
      <ul class="todo-items">
        <li v-for="todo in todos" :key="todo.id" class="todo-item">
          <p class="todo-text">{{ todo.todo }}</p>
          <div>
            <button class="todo-update">up</button>
            <button class="todo-delete" @click="deleteTodo(todo.id)">del</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import APITodo from '@/api/apiToDo';

export default {
  setup() {
    const newTodo = ref({
      id: '',
      todo: '',
      completed: '',
    });
    const todos = ref([]);

    const fetchData = async () => {
      try {
        const response = await APITodo.getTodo();
        todos.value = response.todos;
        console.log(todos.value);
      } catch (error) {
        console.error(error);
      }
    };

    const addTodo = async () => {
      try {
        const addedTodo = await APITodo.postTodo(newTodo.value);
        console.log(addedTodo);
        todos.value.push(addedTodo);  
        newTodo.value.description = "";
      } catch (error) {
        console.error(error);
      }
    };

    const deleteTodo = async (id) => {
      try {
        await APITodo.deleteTodo(id);
        todos.value = todos.value.filter(todo => todo.id !== id);
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(fetchData);

    return {
      newTodo,
      todos,
      addTodo,
      deleteTodo
    };
  }
};
</script>


<style>
.todo-wrap {
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
}
.todo-form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  padding: 10px 20px;
  background: white;
  box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.1);
}
.todo-input {
  width: 80%;
  border: 0;
  outline: none;
  font-size: medium;
}
.todo-create-btn {
  font-size: 16px;
  font-weight: bold;
  border: 0;
  padding: 6px 12px;
  border-radius: 20px;
  background: #ae7eea;
  color: white;
}
.todo-box {
  padding: 5px 20px;
  background: white;
  border-radius: 20px;
  margin-top: 20px;
}
ul {
  padding: 0;
}
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 0 20px;
  border-radius: 20px;
  margin-bottom: 10px;
  background: #e3ebfac0;
  box-shadow: 2px 2px 20px 1px rgba(173, 173, 173, 0.151);
}
.todo-text{
    font-size: 16px;
    font-weight: 600;
    color: #606f7a;
}
.todo-update {
  font-size: 16px;
  font-weight: bold;
  border: 1px solid #57c496;
  padding: 5px 12px;
  border-radius: 20px;
  background: #57c496;
  color: white;
}
.todo-delete {
  font-size: 16px;
  font-weight: bold;
  border: 1px solid #ea7e7e;
  padding: 5px 12px;
  margin-left: 5px;
  border-radius: 20px;
  background: #ea7e7e;
  color: white;
}
.todo-update:active {
  background: #e3ebfac0;
  color: #57c496;
  border: 1px solid #57c496;
}
.todo-delete:active {
  background: #e3ebfac0;
  color: #ea7e7e;
  border: 1px solid #ea7e7e;
}
</style>

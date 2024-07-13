<template>
  <div class="todoContainer">
    <div class="todoFormBox">
      <form @submit.prevent="addTodo">
        <div class="">
          <div class="todoInputBox">
            <input
              type="text"
              v-model="newTodo.title"
              id="title"
              placeholder="Title"
            />
          </div>
          <div>
            <textarea
              placeholder="Description"
              type="text"
              v-model="newTodo.description"
              id="description"
            ></textarea>
          </div>
          <button class="todoBtn" type="submit">
            {{ !edit ? "Add" : "Edit" }}
          </button>
        </div>
      </form>
    </div>
    <div class="todoBox">
      <ul class="todo-items">
        <li v-for="todo in todos" :key="todo.id" class="todoItem">
          <div class="itemLi">
            <div class="checkParBox">
              <input
                type="checkbox"
                v-model="todo.is_done"
                @click="isDisabled(todo.id)"
                :class="{ disabled: todo.is_done }"
              />
              <p
                class="todoText"
                @click="toggleDescription(todo.id)"
                :class="{ disabledTodoText: todo.is_done }"
              >
                {{ todo.title }}
              </p>
            </div>
            <div>
              <button
                class="todo-update"
                :class="{ disabledBtnUp: todo.is_done }"
                @click.stop="handleEdit(todo.id)"
              >
                up
              </button>
              <button class="todo-delete" @click.stop="deleteTodo(todo.id)">
                del
              </button>
            </div>
          </div>
          <div class="itemDesBox" v-show="showDescription === todo.id">
            <p class="itemDescription">
              <span class="descriptionTitle">Description:</span
              >{{ todo.description }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import APITodo from "@/api/apiToDo";

export default {
  setup() {
    const newTodo = ref({
      title: "",
      description: "",
      is_done: false,
    });

    const edit = ref(false);
    const idData = ref(null);
    const todos = ref([]);
    const showDescription = ref(null);

    const fetchData = async () => {
      try {
        const response = await APITodo.getTodo();
        todos.value = response.results;
      } catch (error) {
        console.error(error);
      }
    };

    const addTodo = async () => {
      try {
        if (!edit.value) {
          const addedTodo = await APITodo.postTodo(newTodo.value);
          todos.value.push(addedTodo);
        } else {
          const updatedTodo = await APITodo.putTodo(
            idData.value,
            newTodo.value
          );
          const index = todos.value.findIndex(
            (todo) => todo.id === idData.value
          );
          if (index !== -1) {
            todos.value.splice(index, 1, updatedTodo);
          }
          edit.value = false;
        }
        newTodo.value = {
          title: "",
          description: "",
          is_done: false,
        };
      } catch (error) {
        console.error(error);
      }
    };

    const deleteTodo = async (id) => {
      showDescription.value = null;
      try {
        await APITodo.deleteTodo(id);
        todos.value = todos.value.filter((todo) => todo.id !== id);
      } catch (error) {
        console.error(error);
      }
    };

    const handleEdit = (id) => {
      edit.value = true;
      idData.value = id;
      const data = todos.value.find((item) => item.id === id);
      if (data) {
        newTodo.value = {
          title: data.title,
          description: data.description,
          is_done: data.is_done,
        };
      }
    };

    const toggleDescription = (id) => {
      if (showDescription.value === id) {
        showDescription.value = null;
      } else {
        showDescription.value = id;
      }
    };

    const isDisabled = async (id) => {
      const data = todos.value.find((item) => item.id === id);
      if (data) {
        const newData = {
          title: data.title,
          description: data.description,
          is_done: data.is_done ? false : true,
        };
        const updatedCheck = await APITodo.putTodo(data.id, newData);
        const index = todos.value.findIndex((todo) => todo.id === id);
        if (index !== -1) {
          todos.value.splice(index, 1, updatedCheck);
        }
      }
    };

    onMounted(fetchData);

    return {
      idData,
      newTodo,
      todos,
      edit,
      showDescription,
      addTodo,
      deleteTodo,
      handleEdit,
      toggleDescription,
      isDisabled,
    };
  },
};
</script>

<style>
.disabled {
  opacity: 0.5;
}
.disabledTodoText{
  opacity: 0.5;
  pointer-events: none;
  text-decoration: line-through;
}
.disabledBtnUp {
  pointer-events: none;
  opacity: 0.5;
}
.todoContainer {
  max-width: 1224px;
  padding: 0 20px;
  /* height: 90vh; */
  margin: 0 auto;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 10px;
  align-items: start;
  /* align-content: center; */
}
.todoFormBox {
  max-width: 500px;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 30px 20px;
  text-align: center;
  box-shadow: 12px 12px 2px 1px rgba(0, 70, 251, 0.2);
}

/* Form styles */
.todoInputBox input,
textarea {
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
.todoInputBox input:focus,
textarea:focus {
  border-bottom: 2px solid #5581e2;
  background-color: rgba(0, 71, 251, 0.075);
}
.todoBtn {
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
.todoBox {
  padding: 5px 20px;
  background: white;
  border-radius: 10px;
}
ul {
  padding: 0;
  list-style: none;
}
.todoItem {
  border-radius: 20px;
  background: #e3ebfac0;
  box-shadow: 2px 2px 20px 1px rgba(173, 173, 173, 0.151);
  margin-bottom: 10px;
  padding: 0 20px;
}
.checkParBox {
  display: flex;
  align-items: center;
}
.itemLi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
}
.todoText {
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 600;
  margin-left: 10px;
  color: #606f7a;
}
.todoText:hover {
  cursor: pointer;
  color: #5581e2;
}
.itemDesBox {
  padding: 8px 0px 20px;
}
.descriptionTitle {
  margin-left: 30px;
  margin-right: 8px;
  font-weight: 700;
  /* color: #606f7a; */
}
.itemDescription {
  margin: 0;
  line-height: 1.6rem;
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

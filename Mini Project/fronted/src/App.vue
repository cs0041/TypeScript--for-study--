<script setup lang="ts">
import { reactive,ref } from 'vue'
import axios from 'axios'
import {TodoItem} from '../../backend/src/models/todo'


const input = reactive<Pick<TodoItem,'title'| 'description'>>({
  title: '',
  description: '',
})

const todoList = ref<TodoItem[]>([])

async function fetchTodo() {
  try {
    const res = await axios.get('http://localhost:3000/api/todo')
    todoList.value = <TodoItem[]>(res.data.data) 
  } catch (error) {
    alert(error)
  }
}

fetchTodo()

async function addTodo() {
  try {
    await axios.post('http://localhost:3000/api/todo', input)
    input.title = ''
    input.description = ''
    await fetchTodo()
  } catch (error) {
    alert(error)
  }
}

</script>

<template>
  <div class="container my-4">
    <h1>Todo App</h1>
    <hr>
    <ul>
      <li v-for="todo of todoList" >
        {{todo.title}}
        <span v-if="todo.description">
          - {{ todo.description }}
        </span>
      </li>
    </ul>
    <form @submit.prevent="addTodo">
      <div class="mb-3">
        <label for="todoTitle" class="form-label">หัวข้อ</label>
        <input v-model="input.title" type="text" class="form-control"  id="todoTitle" required  placeholder="เขียนสิ่งที่จะต้องทำ">
      </div>
      <div class="mb-3">
        <label for="todoDescription" class="form-label">รายละเอียดเพิ่มเติม (ไม่จำเป็นต้องระบุ)</label>
        <textarea v-model="input.description"  class="form-control"  id="todoDescription" rows="4" ></textarea>
      </div>
      <button class="btn btn-primary">เพิ่มสิ่งที่ต้องทำ</button>
    </form>

    
  </div>
</template>


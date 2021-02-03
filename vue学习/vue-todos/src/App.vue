<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="(item, index) in todos" :key='index'>
          {{ index + 1 }}.{{ item.value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      title: "vue-todos",
      todos: [
        {value: '阅读一本关于前端的书', done: false},
        {value: '补充范例代码', done: true},
        {value: '写心得', done: false}
      ],
      fullName: {
        firstName: 'ray',
        lastName: 'liray'
      }
    }
  }
  
}
</script>

<style scoped>
  @import './assets/todos.less';
</style>

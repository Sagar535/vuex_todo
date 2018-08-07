<template>
  <div>
    <ul>
      <li v-for="t in todos" :class="{completed: t.done}">{{t.task}}</li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "TodoList",
        props: ['todos']
    }
</script>

<style scoped>

</style>

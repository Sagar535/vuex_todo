<template>
  <div>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="task" />
    </form>
    <todo-list :todos="to_dos"></todo-list>
  </div>
</template>

<script>
    import TodoList from "@/components/TodoList"

    export default {
      name: "vuex_todo",
      components: {
        TodoList
      },
      data() {
          return {
            task: ''
          }
      },
      computed: {
          to_dos: function() {
            return this.$store.getters.todos;
          }
      },
      methods: {
        addTodo: function() {
          this.$store.commit('add_todo', this.task);
          this.task = '';
        }
      }
    }
</script>

<style scoped>

</style>

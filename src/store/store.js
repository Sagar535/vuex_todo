import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state= {
    todos: [
      {
        task: 'Code',
        done: false
      },
      {
        task: 'Sleep',
        done: true
      },
      {
        task: 'Eat',
        done: false
      },
      {
        task: 'Thrive',
        done: true
      }
    ]
  };

 const getters = {
        todos: state => state.todos,
      };

 const mutations = {
   add_todo: function(state, current_task) {
     const task = {
       task:current_task,
       done: false
     }

     state.todos.push(task);
   }
 }

export default new Vuex.Store({
  state,
  getters,
  mutations
})

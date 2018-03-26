import Vue from 'vue'
import Vuex from 'vuex'
import kanban from './firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    taskBackLog: [],
    taskToDo: [],
    taskDone: [],
    taskDoing: []
  },
  getters: {
    taskBackLog: (state) => {
      return state.taskBackLog
    },
    taskTodo: (state) => {
      return state.taskToDo
    },
    taskDone: (state) => {
      return state.taskDone
    },
    taskDoing: (state) => {
      return state.taskDoing
    }
  },
  mutations: {
    getTask: function (state, payload) {
      state.taskBackLog = payload.filter(val => {
        return val.status === 'backlog'
      })
      state.taskTodo = payload.filter(val => {
        return val.status === 'todo'
      })
      state.taskDoing = payload.filter(val => {
        return val.status === 'doing'
      })
      state.taskDone = payload.filter(val => {
        return val.status === 'done'
      })
      console.log('backlog')
      console.log(state.taskTodo)
      console.log(state)
    }
  },
  actions: {
    getTask: function (context) {
      kanban.on('value', snapshot => {
        let allTasks = []
        snapshot.forEach(val => {
          let obj = {}
          obj.id = val.key
          obj.title = val.val().title
          obj.description = val.val().description
          obj.status = val.val().status
          allTasks.push(obj)
        })
        context.commit('getTask', allTasks)
      })
    },
    addNewTask: function (context, newTask) {
      console.log('ini newtask')
      console.log(newTask)
      let newKey = kanban.push().key
      kanban.child(newKey).update(newTask)
      console.log('succeed to add task')
    },
    changeStatus: function (context, payload) {
      kanban.child(payload.id).update({status: payload.state})
    },
    deleteTask: function (context, id) {
      kanban.child(id).remove()
    }
  }
})

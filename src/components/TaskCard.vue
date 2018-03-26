<template>
    <div class="card">
      <div class="card-header">
        {{task.title}}
      </div>
      <div class="card-body">
        <p>{{task.description}}</p>
        <button @click="actionChange('todo', task.id)" v-if="task.status === 'backlog'">To Do</button>
        <button @click="actionChange('doing', task.id)" v-if="task.status === 'todo'">Doing</button>
        <button @click="actionChange('done', task.id)" v-if="task.status === 'doing'">Done</button>
        <button @click="actionChange('backlog', task.id)" v-if="task.status === 'todo'">Back-Log</button>
        <button @click="actionChange('todo', task.id)" v-if="task.status === 'doing'">To Do</button>
        <button @click="actionChange('doing', task.id)" v-if="task.status === 'done'">Doing</button>
        <button @click="deleteTask(task.id)">Delete</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'TaskCard',
  props: ['task'],
  methods: {
    actionChange: function (state, id) {
      this.$store.dispatch('changeStatus', {
        state: state, 
        id: id
      })
    },
    deleteTask: function (id) {
      this.$store.dispatch('deleteTask', id)
    }
  }
}
</script>

<style scoped>
</style>

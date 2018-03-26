<template>
<div class='container'>
<navbar @openmoda='openModal'></navbar>
<div class='main'>
<div class='row'>
  <category-card :tasks="this.$store.state.taskBackLog" :title = "'Back-Log'"></category-card>
  <category-card :tasks="this.$store.state.taskTodo" :title = "'To Do'"></category-card>
  <category-card :tasks="this.$store.state.taskDoing" :title = "'Doing'"></category-card>
  <category-card :tasks="this.$store.state.taskDone" :title = "'Done'"></category-card>
</div>
</div>
<add-task></add-task>
</div>
</template>

<script>
import Navbar from '@/components/Navbar'
import CategoryCard from '@/components/CategoryCard'
import AddTask from '@/components/AddTask'

export default {
  name: 'KanbanHome',
  components: {
    Navbar,
    CategoryCard,
    AddTask
  },
  data () {
    return {
    }
  },
  methods: {
    openModal: function () {
      console.log('modal open')
      // $('addTaskModal').modal('show')
    }
  },
  created () {
    this.$store.dispatch('getTask')
  }
}
</script>

<style scoped>
.main {
  margin-top: 100px;
}
</style>

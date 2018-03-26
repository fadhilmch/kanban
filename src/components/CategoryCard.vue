<template>
  <div class='col-md-3'>
    <div class="card">
      <div class="card-header">
        {{title}}
      </div>
      <div class="card-body">
        <div class="task-card" v-for = "(task,i) in tasks" :key = "i">
          <task-card :task="task"></task-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskCard from '@/components/TaskCard'

export default {
  name: 'CategoryCard',
  props: ['title','tasks'],
  components: {
    TaskCard
  }
}
</script>

<style scoped>
.task-card {
  margin-top: 20px;
}
</style>

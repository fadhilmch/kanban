<template>
  <div class='col-lg-3 col-sm-6'>
    <div class="card category">
      <div class="card-header" :class="color">
        <h4>{{title}}</h4>
      </div>
      <div class="card-body">
        <div class="task-card" v-for = "(task,i) in tasks" :key = "i">
          <task-card :color='color' :task="task"></task-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskCard from '@/components/TaskCard'

export default {
  name: 'CategoryCard',
  props: ['title', 'tasks', 'color'],
  components: {
    TaskCard
  }
}
</script>

<style scoped>
.task-card {
  margin-top: 20px;
  font-size: 15px;
}

.card-header {
  color: white;
}
.category {
  border: none;
  transition: transform .2s;
  margin-bottom: 30px;
}

.category:hover {
  transform: scale(1.05);
}

.green {
  background-color: #27ae60;
}

.red {
  background-color:#c0392b;
}

.yellow {
  background-color: #f39c12;
}

.blue {
  background-color: #2980b9;
}

</style>

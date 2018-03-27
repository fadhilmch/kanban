<template>
    <div class="card">
      <div class="card-header" data-toggle="collapse" :href="'#'+task.id" role='button' :aria-controls='task.id' :class="color">
        {{task.title}}
      </div>
      <div class="card-body collapse" :id="task.id" :class='color'>
        <p><strong>Assigned To:</strong></p>
        <p>{{task.assigned}}</p>
        <p><strong>Description:</strong></p>
        <p>{{task.description}}</p>
        <div class='row'>
          <div class='col-lg-4'>
            <button class='btn' :class='color' @click="actionChange('backlog', task.id)" v-if="task.status === 'todo'"><i class="fas fa-chevron-circle-left fa-lg"></i></button>
            <button class='btn' :class='color' @click="actionChange('todo', task.id)" v-if="task.status === 'doing'"><i class="fas fa-chevron-circle-left fa-lg"></i></button>
            <button class='btn' :class='color' @click="actionChange('doing', task.id)" v-if="task.status === 'done'"><i class="fas fa-chevron-circle-left fa-lg"></i></button>
          </div>
          <div class='col-lg-4'>
            <button class='btn' :class='color' @click="deleteTask(task.id)"><i class="fas fa-trash-alt fa-lg"></i></button>
          </div>
          <div class='col-lg-4'>
            <button class='btn' :class='color' @click="actionChange('todo', task.id)" v-if="task.status === 'backlog'"><i class="fas fa-chevron-circle-right fa-lg"></i></button>
            <button class='btn' :class='color' @click="actionChange('doing', task.id)" v-if="task.status === 'todo'"><i class="fas fa-chevron-circle-right fa-lg"></i></button>
            <button class='btn' :class='color' @click="actionChange('done', task.id)" v-if="task.status === 'doing'"><i class="fas fa-chevron-circle-right fa-lg"></i></button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'TaskCard',
  props: ['task', 'color'],
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
.btn.red {
  background-color: rgba(0,0,0,0);
  color:#e74c3c;
}
.btn.green {
  background-color: rgba(0,0,0,0);
  color:#27ae60;
}
.btn.yellow {
  background-color: rgba(0,0,0,0);
  color:#f39c12;
}
.btn.blue {
  background-color: rgba(0,0,0,0);
  color:#2980b9;
}

.btn {
  background-color: rgba(0,0,0,0);
  transition: transform .2s;
}

.btn:hover {
  transform: scale(1.2);
}

.category {
  border: none;
  transition: transform .2s;
}

.category:hover {
  transform: scale(1.05);
}

.card-body p {
  font-weight: 400;
  font-family: Helvetica;
  text-align: left;
}

.card-header {
  color: white;
  font-weight: 600;
}

.green {
  background-color: #2ecc71;
}

.red {
  background-color:#e74c3c;
}

.yellow {
  background-color: #f1c40f;
}

.blue {
  background-color: #3498db;
}

.card-body.green {
  background-color: #d5f4e2;
}

.card-body.red {
  background-color:#fadbd8;
}

.card-body.yellow {
  background-color: #fcf3cf;
}

.card-body.blue {
  background-color: #d6eaf7;
}
</style>

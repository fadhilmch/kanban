<template>
<div>
<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
<div class="container">
<router-link class="navbar-brand" :to="{ path: '/home/article'}">
#Kanban
</router-link>
<ul class="navbar-nav ml-auto">
<li class="nav-item">
<button type='button' class="nav-link btn btn-default" data-toggle="modal" data-target="#addTaskModal">Add Task</button>
</li>
</ul>
</div>
</nav>
<add-task></add-task>
</div>
</template>

<script>
import AddTask from '@/components/AddTask'

export default {
  name: 'HelloWorld',
  components: {
    AddTask
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    openModal: function () {
      this.$emit('openmodal')
    }
  }
}
</script>

<style scoped>
#mainNav {
  position: absolute;
  border-bottom: 1px solid #e9ecef;
  background-color: rgba(255,255,255,0);
}

#mainNav .navbar-brand {
  font-weight: 800;
  color: #343a40;
}

#mainNav .navbar-toggler {
  font-size: 12px;
  font-weight: 800;
  padding: 13px;
  text-transform: uppercase;
  color: #343a40;
}

#mainNav .navbar-nav > li.nav-item > a {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
}
</style>

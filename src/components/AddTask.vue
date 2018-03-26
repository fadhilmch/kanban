<template>
  <div>
    <div class="modal fade" id="addTaskModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Task</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="task-title" class="col-form-label">Title:</label>
                <input type="text" class="form-control" id="task-title-form" v-model="newTask.title">
              </div>
              <div class="form-group">
                <label for="task-description" class="col-form-label">Description:</label>
                <textarea class="form-control" id="task-description-from" v-model="newTask.description"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" @click="addTask">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newTask: {
        title: '',
        description: ''
      }
    }
  },
  methods: {
    addTask: function () {
      $('#addTaskModal').modal('hide')
      this.$store.dispatch('addNewTask', {
        title: this.newTask.title,
        description: this.newTask.description,
        status: 'backlog'
      })
    }
  }
}
</script>

<style scoped>

</style>

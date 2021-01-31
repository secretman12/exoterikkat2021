<template>
  <div class="PhDStudentEntry">
    <PhdNavbar />
      <TaskForm/>
  </div>

</template>
<style scoped>

</style>
<script>
// @ is an alias to /src
import PhdNavbar from '@/components/PhdNavbar.vue'
import TaskForm from '@/components/TaskForm.vue'

export default {
  name: 'TaskRegister',
  components: {
    PhdNavbar,
    TaskForm
  }
}
</script>
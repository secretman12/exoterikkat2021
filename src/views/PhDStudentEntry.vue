<template>
  <div class="PhDStudentEntry">
    <PhdNavbar />
      <br>
      <PhDStudentInfos/>
  </div>

</template>
<style scoped>

</style>
<script>
// @ is an alias to /src
import PhdNavbar from '@/components/PhdNavbar.vue'
import PhDStudentInfos from '@/components/PhDStudentInfos.vue'

export default {
  name: 'PhDStudentEntry',
  components: {
    PhdNavbar,
    PhDStudentInfos
  }
}
</script>
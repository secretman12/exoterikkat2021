<template>
  <div class="home">
    <HomeNavbar />
    <div class="container">
      <br><br>
    <Login />
    </div>
  </div>

</template>
<style scoped>

</style>
<script>
// @ is an alias to /src
import HomeNavbar from '@/components/HomeNavbar.vue'
import Login from '@/components/Login.vue'

export default {
  name: 'Home',
  components: {
    HomeNavbar,
    Login
  }
}
</script>

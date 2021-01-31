<template>
<nav class="navbar navbar-expand-lg navbar-info bg-info">
	<a class="navbar-brand"><i class="fa fa-university"></i>MSTS</a>
  <ul class="navbar-nav ml-auto">
		<li class="nav-item" >
            <router-link class="nav-link"  to="/PhdStudentnEtry"><i class="fas fa-home"></i>Home</router-link></li>
		<li class="nav-item" >
            <router-link class="nav-link"  to="/TaskRegister"><i class="fas fa-tasks"></i>Task Register</router-link></li>
		<li class="nav-item"><a  href @click.prevent="logout"
				class="btn btn-outline-light "><i class="fa fa-sign-out"></i>Logout </a></li>
    </ul>
</nav>

</template>

<script>
import phdStudentService from '../services/phdStudentService';
export default {
  name: 'PhdNavbar',
  methods: {
    logout() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/');
    }

  },
  mounted(){
    if (this.$store.state.auth.token===null){
        this.$router.push('/');
    }
  }
}
</script>
<style scoped>
.navbar-brand{
  color:white;
    font-size: 150%;

}
.nav-link{
  color:white;
}
</style>
<template>
  <div id="login">
        <h3 class="text-center text-white pt-5">Login form</h3>
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                            <h3 class="text-center text-info"><i class="fa fa-university"></i> Login</h3>
                            <form @submit.prevent="handleLogin">
                            <div class="form-group">
                                <label for="username" class="text-info">Username:</label><br>
                                <input
                                    v-model="user.username"
                                    required="required"
                                    type="text"
                                    class="form-control"
                                    name="username"
                                />
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br>
                                <input v-model="user.password"
                                    required="required"
                                    type="password"
                                    class="form-control"
                                    name="password">
                            </div>
							              <br>
                            <div class="form-group">
                                <input class="btn btn-info btn-block" value="Login" type="Submit" >
                            </div>
                            <div class="form-group">
                                    <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
                            </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import User from '../models/user';export default {
  name: 'Login',
  data() {
    return {
      user: new User('', ''),
      loading: false,
      message: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/PhdStudentnEtry');
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;

        if (this.user.username && this.user.password) {
          this.$store.dispatch('auth/login', this.user).then(
            () => {
              this.$router.push('/PhdStudentnEtry');
            },
            error => {
              this.loading = false;
              this.message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
            }
          );

     }
    }
  }
};
</script>
<style scoped>
#login .container #login-row #login-column #login-box {
  margin-top: 120px;
  max-width: 600px;
  height: 320px;
  border: 1px solid #9C9C9C;
  background-color: #EAEAEA;
}
#login .container #login-row #login-column #login-box #login-form {
  padding: 20px;
}
#login .container #login-row #login-column #login-box #login-form #register-link {
  margin-top: -85px;
}
</style>

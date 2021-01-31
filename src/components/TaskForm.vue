<template>
<div>
    <div  v-if="message" class="alert alert-success" role="alert">
  {{message}}
</div>
<div class="container">
    <br>
    <br>
    <br>
    <div v-if="phd" class="card">
        <div class="card-header bg-info">
            What have done until now?
        </div>
        <div class="card-body">
        <form @submit.prevent="sendTask">
        <div class="form-group">
            <label for="teach_lab_hours" >Teach lab hours:</label><br>
            <input
            v-model="phd.teach_lab_hours"
            required="required"
            type="number"
            class="form-control"
            name="teach_lab_hours"
        />
        </div>
        <div class="form-group">
            <label for="xp_per_task" >Grading number:</label><br>
            <input
            v-model="phd.xp_per_task"
            required="required"
            type="number"
            class="form-control"
            name="xp_per_task"
        />
        </div>
        <div class="form-group">
            <label for="surveillance_hours" >Sureveilance hours:</label><br>
            <input
            v-model="phd.surveillance_hours"
            required="required"
            type="number"
            class="form-control"
            name="surveillance_hours"
        />
        </div>
        <div class="form-group">
            <input class="btn btn-info " type="submit" value="Submit">
        </div>
        </form>
        </div>

    </div>
</div>
</div>
</template>
<style scoped>
.form-group{
    text-align: left;
}
</style>
<script>
import phdStudentService from '../services/phdStudentService';
export default {
  name: 'PhDStudentInfos',
  data() {
    return {
      phd: '',
      message:'',
    };
  },
  mounted() {
    phdStudentService.getPhDStudent().then(
      response => {
        console.log(response.data);
        this.phd = response.data;
      },
      error => {
        this.message =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
  methods: {
    sendTask() {
        phdStudentService.SaveTask(this.phd).then(
          response => {
            this.message="The secretery will register your points now!"
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
};
</script>
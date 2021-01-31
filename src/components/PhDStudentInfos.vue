<template>
  <div class="container">
		<br>

        <h2 v-if="phd">Welcome {{phd.username}}</h2>
        <br>
		<div class="row">
			<div class="col-sm-8">
				<div  class="card mb-3">
                    <div class="card-header bg-info">
                    Your Details
                    </div>
					<div class="card-body">
						<div class="row">
							<div class="col-sm-4">
								<h6 class="mb-0">Full Name</h6>
							</div>
							<div class="col-sm-8 text-secondary">{{phd.full_name}}</div>
						</div>
						<hr>
						<div class="row">
							<div class="col-sm-4">
								<h6 class="mb-0">Email</h6>
							</div>
							<div class="col-sm-8 text-secondary">{{phd.email}}</div>

						</div>
						<hr>
						<div class="row">
							<div class="col-sm-4">
								<h6 class="mb-0">Username</h6>
							</div>
							<div class="col-sm-8 text-secondary">{{phd.username}}</div>
						</div>
						<hr>
						<div class="row">
							<div class="col-sm-4">
								<h6 class="mb-0">Phone</h6>
							</div>
							<div class="col-sm-8 text-secondary">{{phd.phone}}</div>
						</div>
						<hr>
						</div>
				</div>
			</div>
            <div v-if="phd.task" class="col-sm-4">
                <div  class="card mb-3">
                    <div class="card-header bg-info">
                    Your Task
                    </div>
					<div class="card-body">
						<div class="row">
							<div class="col-sm-4">
								<h6 class="mb-0">Teach lab points</h6>
							</div>
							<div class="col-sm-8 text-secondary">{{phd.task.teach_lab}}</div>
						</div>
						<hr>
						<div class="row">
							<div class="col-sm-4">
								<h6 class="mb-0">Grading points</h6>
							</div>
							<div class="col-sm-8 text-secondary">{{phd.task.grading}}</div>

						</div>
						<hr>
						<div class="row">
							<div class="col-sm-4">
								<h6 class="mb-0">Surveillance points</h6>
							</div>
							<div class="col-sm-8 text-secondary">{{phd.task.surveillance}}</div>
						</div>
						<hr>
                        <div class="row">
							<div class="col-sm-4">
								<h6 class="mb-0">Task Status</h6>
							</div>
							<div class="col-sm-8 text-secondary">{{phd.task.status}}</div>
						</div>
						<hr>
					</div>
                </div>
            </div>
		</div>
  </div>
</template>

<script>
import phdStudentService from '../services/phdStudentService';
export default {
  name: 'PhDStudentInfos',
  data() {
    return {
      phd: ''
    };
  },
  created() {
    phdStudentService.getPhDStudent().then(
      response => {
        this.phd = response.data;
      },
      error => {
        this.phd =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>
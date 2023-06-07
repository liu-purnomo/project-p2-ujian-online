<script>
import { mapActions, mapState } from 'pinia'
import { useUserStore } from '../stores/user'

export default {
  name: 'FormEditProfile',
  computed: {
    ...mapState(useUserStore, ['user'])
  },
  data() {
    return {
      userDetail: {}
    }
  },
  methods: {
    ...mapActions(useUserStore, ['fetchDetailUser', 'handleUpdateProfile']),
    handleSubmitFormEditProfile() {
      this.handleUpdateProfile(this.userDetail)
    }
  },
  async created() {
    await this.fetchDetailUser()
    this.userDetail = this.user
  }
}
</script>

<template>
  <div>
    <div class="card">
      <div class="card-header">
        <h5>Edit My Profile</h5>
      </div>
      <form @submit.prevent="handleSubmitFormEditProfile">
        <div class="card-body">
          <div class="row g-4">
            <div class="col-md-6">
              <label class="form-label">Username</label>
              <input
                v-model="userDetail.username"
                type="text"
                class="form-control"
                placeholder="Username here"
              />
            </div>
            <div class="col-md-6">
              <label class="form-label">Email</label>
              <input disabled type="email" class="form-control" :placeholder="user.email" />
            </div>
            <div class="col-md-6">
              <label class="form-label">Full Name</label>
              <input
                v-model="userDetail.name"
                type="text"
                class="form-control"
                placeholder="Full name here"
              />
            </div>
            <div class="col-md-6">
              <label class="form-label">Avatar URL</label>
              <input
                v-model="userDetail.avatar"
                type="text"
                class="form-control"
                placeholder="URL avatar"
              />
            </div>
            <div class="col-md-6">
              <label class="form-label">Phone Number</label>
              <input
                v-model="userDetail.phone"
                type="text"
                class="form-control"
                placeholder="Phone Number here"
              />
            </div>
            <div class="col-md-6">
              <label class="form-label">Gender</label>
              <select v-model="userDetail.gender" class="form-select">
                <option value="">Select Gender</option>
                <option :selected="userDetail.gender === 'male'" value="male">Male</option>
                <option :selected="userDetail.gender === 'female'" value="female">Female</option>
              </select>
            </div>

            <div class="text-sm-end">
              <button type="submit" class="btn btn-primary">Update now</button>
            </div>
          </div>
        </div>
      </form>
      <hr />
      <h5 class="text-center mt-2 mb-2">Edit Password</h5>
      <hr />
      <form>
        <div class="card-body">
          <div class="row g-4">
            <div class="col">
              <input type="password" class="form-control" placeholder="Old password" />
            </div>
            <div class="col">
              <input type="password" class="form-control" placeholder="New password" />
            </div>
            <div class="col text-end">
              <button type="submit" class="btn btn-primary">Update Password</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>

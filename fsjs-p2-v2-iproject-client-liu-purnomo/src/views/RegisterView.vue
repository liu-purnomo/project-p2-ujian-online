<script>
import { mapActions } from 'pinia'
import { useUserStore } from '../stores/user'

export default {
  name: 'RegisterView',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      message: '',
      passwordStrength: 'weak',
      showPassword: false,
      passwordMatch: ''
    }
  },
  methods: {
    ...mapActions(useUserStore, ['handleRegister']),
    passwordStrengthMeter() {
      const containUpperCase = this.password.match(/[A-Z]/)
      const containLowerCase = this.password.match(/[a-z]/)
      const containNumber = this.password.match(/\d/)

      if (this.password.length < 8) {
        this.message = 'Password at least 8 characters'
        this.passwordStrength = 'weak'
      } else {
        if (containUpperCase) {
          if (!containLowerCase) {
            this.passwordStrength = 'netral'
            this.message = 'Include at least one lowercase'
          } else if (!containNumber) {
            this.passwordStrength = 'netral'
            this.message = 'Include at least one number'
          } else {
            this.passwordStrength = 'strong'
            this.message = 'Congrats: your password strong!'
          }
        } else if (containLowerCase) {
          if (!containUpperCase) {
            this.passwordStrength = 'netral'
            this.message = 'Include at least one uppercase'
          } else if (!containNumber) {
            this.passwordStrength = 'netral'
            this.message = 'Include at least one number'
          } else {
            this.passwordStrength = 'strong'
            this.message = 'Congrats: your password strong!'
          }
        } else if (containNumber) {
          if (!containUpperCase) {
            this.passwordStrength = 'netral'
            this.message = 'Include at least one uppercase'
          } else if (!containLowerCase) {
            this.passwordStrength = 'netral'
            this.message = 'Include at least one uppercase'
          } else {
            this.passwordStrength = 'strong'
            this.message = 'Congrats: your password strong!'
          }
        }
      }
    },
    showHidePassword() {
      if (this.showPassword) {
        this.showPassword = false
      } else {
        this.showPassword = true
      }
    },
    checkConfirmPassword() {
      if (this.password !== this.confirmPassword) {
        this.passwordMatch = "Password didn't match"
      } else {
        this.passwordMatch = null
      }
    },
    handleSubmitFormRegister() {
      this.handleRegister(this.name, this.email, this.password)
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="row justify-content-center align-items-center vh-100 py-5">
      <!-- Main content START -->
      <div class="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
        <!-- Sign in START -->
        <div class="card card-body text-center p-4 p-sm-5">
          <!-- Title -->
          <h1 class="mb-2">Sign in</h1>
          <p class="mb-0">
            Already registered? <RouterLink to="/login">Click here to sign in</RouterLink>
          </p>
          <!-- Form START -->
          <form @submit.prevent="handleSubmitFormRegister" class="mt-4">
            <!-- Email -->
            <div class="mb-3 input-group-lg">
              <input
                v-model="name"
                type="text"
                class="form-control"
                placeholder="Enter full name"
              />
            </div>
            <div class="mb-3 input-group-lg">
              <input v-model="email" type="email" class="form-control" placeholder="Enter email" />
              <small>We'll never share your email with anyone else.</small>
            </div>
            <!-- New password -->
            <div class="mb-3 position-relative">
              <!-- Input group -->
              <div class="input-group input-group-lg">
                <input
                  class="form-control fakepassword"
                  @keyup="passwordStrengthMeter"
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  id="psw-input"
                  placeholder="Enter new password"
                />
                <span @click.prevent="showHidePassword" class="input-group-text p-0">
                  <i
                    :class="showPassword ? 'bi-eye-slash' : 'bi-eye'"
                    class="fakepasswordicon bi cursor-pointer p-1 w-60px fs-3"
                  ></i>
                </span>
              </div>
              <!-- Pswmeter -->
              <div id="pswmeter" class="mt-2"></div>
              <div class="d-flex mt-1">
                <div id="pswmeter-message" class="rounded"></div>
                <!-- Password message notification -->
                <div class="ms-auto">
                  {{ message }}
                  <i
                    v-if="passwordStrength === 'strong'"
                    class="bi bi-emoji-smile-fill text-success ps-1"
                  ></i>
                  <i
                    v-if="passwordStrength === 'netral'"
                    class="bi bi-emoji-neutral-fill text-primary ps-1"
                  ></i>
                  <i
                    v-if="passwordStrength === 'weak'"
                    class="bi bi-emoji-frown-fill text-danger ps-1"
                  ></i>
                </div>
              </div>
            </div>
            <!-- Confirm password -->
            <div class="mb-3 input-group-lg">
              <input
                @keyup.prevent="checkConfirmPassword"
                v-model="confirmPassword"
                class="form-control"
                type="password"
                placeholder="Confirm password"
              />
              <div v-if="passwordMatch" class="d-flex mt-2">
                <div id="pswmeter-message" class="rounded"></div>
                <div class="ms-auto text-danger">
                  {{ passwordMatch }}
                  <i class="bi bi-info-circle text-danger ps-1"></i>
                </div>
              </div>
            </div>
            <!-- Keep me signed in -->
            <div class="mb-3 text-start"></div>
            <!-- Button -->
            <div class="d-grid">
              <button type="submit" class="btn btn-lg btn-primary">Sign me up</button>
            </div>
            <!-- Copyright -->
            <p class="mb-0 mt-3 text-center">
              ©2022 <a target="_blank" href="https://ujian-online.com/">Ujian Online.</a> All rights
              reserved
            </p>
          </form>
        </div>
        <!-- Sign in START -->
      </div>
    </div>
    <!-- Row END -->
  </div>
</template>

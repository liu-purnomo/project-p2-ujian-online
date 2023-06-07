<script>
import { mapActions } from 'pinia'
import { useExamStore } from '../stores/exam'

export default {
  name: 'FormExam',
  data() {
    return {
      exam: {
        title: '',
        description: '',
        totalQuestions: '',
        duration: '',
        isPremium: '',
        closingDate: ''
      }
    }
  },
  methods: {
    ...mapActions(useExamStore, ['handleAddExam']),
    handleSubmitFormAddExam() {
      this.handleAddExam(this.exam)
      this.exam.title = ''
      this.exam.description = ''
      this.exam.totalQuestions = ''
      this.exam.duration = ''
      this.exam.isPremium = ''
      this.exam.closingDate = ''
    }
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmitFormAddExam">
    <div class="modal-body">
      <div class="row g-4">
        <div class="col-12">
          <label class="form-label">Title</label>
          <input
            v-model="exam.title"
            type="text"
            class="form-control"
            placeholder="Exam title here"
            required
          />
        </div>

        <div class="col-12">
          <label class="form-label">Description</label>
          <textarea
            v-model="exam.description"
            class="form-control"
            rows="2"
            placeholder="Ex: topics, schedule, etc."
          ></textarea>
        </div>
        <div class="col-sm-6">
          <label class="form-label">Total Questions</label>
          <input
            v-model="exam.totalQuestions"
            type="number"
            class="form-control"
            placeholder="Set total questions"
            required
          />
        </div>
        <div class="col-sm-6">
          <label class="form-label">Duration</label>
          <input
            v-model="exam.duration"
            type="number"
            class="form-control"
            placeholder="Set total durations"
            required
          />
        </div>
        <div class="col-12">
          <label class="form-label">Expired Date</label>
          <input v-model="exam.closingDate" type="date" class="form-control" />
        </div>
      </div>
    </div>
    <div class="modal-footer row justify-content-between">
      <div class="col-lg-4">
        <select v-model="exam.isPremium" class="form-select">
          <option value="false">Free</option>
          <option value="true">Premium</option>
        </select>
      </div>
      <div class="col-lg-6 text-sm-end">
        <button type="button" class="btn btn-danger-soft me-2" data-bs-dismiss="modal">
          Cancel
        </button>
        <button type="submit" class="btn btn-success-soft">Create now</button>
      </div>
    </div>
  </form>
</template>

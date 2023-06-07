<script>
import { mapActions } from 'pinia'
import { useQuestionStore } from '../stores/question'

export default {
  name: 'FormAddQuestion',
  data() {
    return {
      question: {
        question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        answer: '',
        isPremium: '',
        explanation: ''
      }
    }
  },
  methods: {
    ...mapActions(useQuestionStore, ['handleAddQuestion']),
    handleSubmitFormAddQuestion() {
      this.handleAddQuestion(this.question)
    }
  }
}
</script>

<template>
  <div>
    <!-- Page Header START -->
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
      <div class="d-block mb-2 mb-md-0">
        <h2 class="h4">Create new question</h2>
        <p class="mb-0">Add new questions</p>
      </div>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group ms-2 ms-lg-3">
          <button type="button" class="btn btn-outline-dark">Dashboard</button>
        </div>
      </div>
    </div>
    <!-- Page Header End -->
    <div class="card">
      <form @submit.prevent="handleSubmitFormAddQuestion">
        <div class="card-body">
          <div class="row g-4">
            <div class="col-12">
              <label class="form-label">Question</label>
              <textarea
                v-model="question.question"
                class="form-control"
                rows="2"
                placeholder="Ex: topics, schedule, etc."
              ></textarea>
            </div>
            <div class="col-12">
              <label class="form-label">Answer A</label>
              <textarea
                v-model="question.option1"
                class="form-control"
                rows="2"
                placeholder="Ex: topics, schedule, etc."
              ></textarea>
            </div>
            <div class="col-12">
              <label class="form-label">Answer B</label>
              <textarea
                v-model="question.option2"
                class="form-control"
                rows="2"
                placeholder="Ex: topics, schedule, etc."
              ></textarea>
            </div>
            <div class="col-12">
              <label class="form-label">Answer C</label>
              <textarea
                v-model="question.option3"
                class="form-control"
                rows="2"
                placeholder="Ex: topics, schedule, etc."
              ></textarea>
            </div>
            <div class="col-12">
              <label class="form-label">Answer D</label>
              <textarea
                v-model="question.option4"
                class="form-control"
                rows="2"
                placeholder="Ex: topics, schedule, etc."
              ></textarea>
            </div>
            <div class="col-sm-6">
              <label class="form-label">Status</label>
              <select v-model="question.isPremium" class="form-select">
                <option value="">Select Status</option>
                <option value="false">Free</option>
                <option value="true">Premium</option>
              </select>
            </div>
            <div class="col-sm-6">
              <label class="form-label">Answer</label>
              <select v-model="question.answer" class="form-select">
                <option value="">Select Option Answer</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div class="col-12">
              <label class="form-label">Explanation</label>
              <textarea
                v-model="question.explanation"
                class="form-control"
                rows="2"
                placeholder="Ex: topics, schedule, etc."
              ></textarea>
            </div>
            <div class="col-12 text-end">
              <button type="submit" class="btn btn-primary px-5">Create now</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

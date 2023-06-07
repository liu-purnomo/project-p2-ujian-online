<script>
import { mapActions, mapState } from 'pinia'
import { useExamStore } from '../stores/exam'

export default {
  name: 'QuestionCard',
  props: ['questionItem', 'dataIndex', 'questionNumber'],
  computed: {
    ...mapState(useExamStore, ['examQuestions', 'detailAnswer'])
  },
  methods: {
    ...mapActions(useExamStore, ['handleAnswerExam', 'fetchDetailAnswer']),
    async handleSubmitAnswer(option) {
      await this.handleAnswerExam(this.questionItem.questionNumber, option)
      await this.fetchDetailAnswer(this.$route.params.number)
    }
  }
}
</script>

<template>
  <div class="card-header border-0 pb-0">
    <div class="d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <div class="avatar me-2">
          <span
            :class="detailAnswer ? 'btn-primary' : 'btn-success'"
            class="btn btn-primary justify-item-center text-center rounded-circle icon-md m-1"
          >
            {{ questionItem.questionNumber }}
          </span>
        </div>
        <div>
          <h6 class="card-title mb-0">
            {{ questionItem.Question?.question }}
          </h6>
        </div>
      </div>
    </div>
  </div>
  <div class="card-body pb-2">
    <div class="vstack gap-2">
      <div>
        <a @click.prevent="handleSubmitAnswer('1')" href="">
          <div class="d-flex mb-2 mt-2 align-items-center justify-content-between">
            <span
              :class="
                detailAnswer && detailAnswer.answer === '1' ? 'btn-primary' : 'btn-outline-primary'
              "
              class="btn ustify-item-center text-center rounded-circle icon-md m-1"
              >A</span
            >
            <span
              :class="
                detailAnswer && detailAnswer.answer === '1' ? 'btn-primary' : 'btn-outline-primary'
              "
              class="btn w-100 text-start"
            >
              {{ questionItem.Question?.option1 }}
            </span>
          </div>
        </a>
        <a @click.prevent="handleSubmitAnswer('2')" href="">
          <div class="d-flex mb-2 mt-2 align-items-center justify-content-between">
            <span
              :class="
                detailAnswer && detailAnswer.answer === '2' ? 'btn-primary' : 'btn-outline-primary'
              "
              class="btn justify-item-center text-center rounded-circle icon-md m-1"
              >B</span
            >
            <span
              :class="
                detailAnswer && detailAnswer.answer === '2' ? 'btn-primary' : 'btn-outline-primary'
              "
              class="btn w-100 text-start"
            >
              {{ questionItem.Question?.option2 }}
            </span>
          </div>
        </a>

        <a @click.prevent="handleSubmitAnswer('3')" href="">
          <div class="d-flex mb-2 mt-2 align-items-center justify-content-between">
            <span
              :class="
                detailAnswer && detailAnswer.answer === '3' ? 'btn-primary' : 'btn-outline-primary'
              "
              class="btn justify-item-center text-center rounded-circle icon-md m-1"
              >C</span
            >
            <span
              :class="
                detailAnswer && detailAnswer.answer === '3' ? 'btn-primary' : 'btn-outline-primary'
              "
              class="btn w-100 text-start"
            >
              {{ questionItem.Question?.option3 }}
            </span>
          </div>
        </a>

        <a @click.prevent="handleSubmitAnswer('4')" href="">
          <div class="d-flex mb-2 mt-2 align-items-center justify-content-between">
            <span
              :class="
                detailAnswer && detailAnswer.answer === '4' ? 'btn-primary' : 'btn-outline-primary'
              "
              class="btn justify-item-center text-center rounded-circle icon-md m-1"
              >D</span
            >
            <span
              :class="
                detailAnswer && detailAnswer.answer === '4' ? 'btn-primary' : 'btn-outline-primary'
              "
              class="btn w-100 text-start"
            >
              {{ questionItem.Question?.option4 }}
            </span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

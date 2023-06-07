<script>
import HeaderSection from '../components/HeaderSection.vue'
import SideProfileSection from '../components/SideProfileSection.vue'
import ExamCard from '../components/ExamCard.vue'
import { mapActions, mapState } from 'pinia'
import { useExamStore } from '../stores/exam'

export default {
  components: {
    HeaderSection,
    SideProfileSection,
    ExamCard
  },
  computed: {
    ...mapState(useExamStore, ['exams'])
  },
  methods: {
    ...mapActions(useExamStore, ['fetchListExamForUser'])
  },
  created() {
    this.fetchListExamForUser()
  }
}
</script>

<template>
  <HeaderSection />
  <main>
    <div class="container">
      <div class="row g-4 mb-4">
        <SideProfileSection />
        <div class="col-lg-8 vstack gap-4">
          <ExamCard v-for="exam in exams.exams" :key="exam.id" :exam="exam" />
        </div>
      </div>
    </div>
  </main>
</template>

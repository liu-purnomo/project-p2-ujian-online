<script>
import HeaderSection from '../components/HeaderSection.vue'
import SideProfileSection from '../components/SideProfileSection.vue'
import ExamStartSection from '../components/ExamStartSection.vue'

export default {
  name: 'ExamConfirmView',
  components: {
    HeaderSection,
    SideProfileSection,
    ExamStartSection
  }
}
</script>

<template>
  <HeaderSection />
  <main>
    <div class="container">
      <div class="row g-4 mb-4">
        <ExamStartSection />
      </div>
    </div>
  </main>
</template>

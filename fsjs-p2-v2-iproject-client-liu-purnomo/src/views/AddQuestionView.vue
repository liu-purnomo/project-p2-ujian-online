<script>
import HeaderSection from '../components/HeaderSection.vue'
import SideProfileSection from '../components/SideProfileSection.vue'
import FormAddQuestion from '../components/FormAddQuestion.vue'

export default {
  name: 'AddQuestionView',
  components: {
    HeaderSection,
    SideProfileSection,
    FormAddQuestion
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
          <FormAddQuestion />
        </div>
      </div>
    </div>
  </main>
</template>

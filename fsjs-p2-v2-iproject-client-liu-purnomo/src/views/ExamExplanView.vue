<script>
import HeaderSection from '../components/HeaderSection.vue'
import SideProfileSection from '../components/SideProfileSection.vue'
import ExplanSection from '../components/ExplanSection.vue'

ExplanSection

export default {
  components: {
    HeaderSection,
    SideProfileSection,
    ExplanSection
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
          <ExplanSection />
        </div>
      </div>
    </div>
  </main>
</template>

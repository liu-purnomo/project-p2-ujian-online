<script>
import GradesTableSection from '../components/GradesTableSection.vue'
import HeaderSection from '../components/HeaderSection.vue'
import SideProfileSection from '../components/SideProfileSection.vue'

export default {
  name: 'GradesView',
  components: {
    HeaderSection,
    SideProfileSection,
    GradesTableSection
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
          <!-- Page Header START -->
          <GradesTableSection />
          <!-- Share feed START -->
        </div>
      </div>
    </div>
  </main>
</template>

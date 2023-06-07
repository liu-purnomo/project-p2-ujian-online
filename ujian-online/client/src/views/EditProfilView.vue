<script>
import HeaderSection from '../components/HeaderSection.vue'
import SideProfileSection from '../components/SideProfileSection.vue'
import FormEditProfile from '../components/FormEditProfile.vue'

export default {
  name: 'EditProfilView',
  components: {
    HeaderSection,
    SideProfileSection,
    FormEditProfile
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
          <FormEditProfile />
        </div>
      </div>
    </div>
  </main>
</template>

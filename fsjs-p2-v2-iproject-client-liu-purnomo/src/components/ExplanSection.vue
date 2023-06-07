<script>
import DetailExplanCard from './DetailExplanCard.vue'

export default {
  name: 'ExplanSection',
  components: { DetailExplanCard }
}
</script>

<template>
  <div class="card">
    <div class="card">
      <div class="card-header">
        <h4>Pembahasan Hasil Ujian</h4>
        <p class="lead">Detail Ujian</p>
      </div>
      <div class="card-body">
        <DetailExplanCard />
      </div>
      <div class="card-footer">
        <h5>Jumlah Jawaban Benar = 1</h5>
        <h5>Nilai Anda Adalah = 50</h5>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

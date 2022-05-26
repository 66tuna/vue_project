<template>
  <modal-layout>
    <page-title>
      <template #header>
        팝업 타이틀
      </template>
      <template #default>
          <p>팝업 컨텐츠 1</p>
          <p>팝업 컨텐츠 2</p>
      </template>
      <template #footer>
          <button type="button">닫기</button>
      </template>
    </page-title>
  </modal-layout>
</template>

<script>
import PageTitle from '../components/SloatPageTitle.vue'
export default {
  components: {
    PageTitle
  }
}
</script>

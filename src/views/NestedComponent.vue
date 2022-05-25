<template>
    <div>
        <PageTitle title="부모 컴포넌트에서 자식 컴포넌트로 데이터 전달"/> <!-- 이렇게 바로 때려박으면 정적 -->
        <PageTitle v-bind:title="title" :level="level"/>  <!-- 이렇게 data로 return에 한번 거치고 가야지 동적 -->
    </div>
</template>

<script>
import PageTitle from '../components/PageTitle' // 컴포넌트 import
export default {
  data () {
    return {
      title: '동적 페이지 타이틀',
      level: 10
    }
  },
  components: {
    PageTitle // 현재 컴포넌트에서 사용할 컴포넌트 등록
  }
}
</script>

<template>
  <div>
    <h2>{{$translate('ko.hi')}}</h2>
    <h2>{{i18n.ko.hi}}</h2>
  </div>
</template>

<script>
export default {
  name: 'plugins-i18n',
  inject: ['i18n'],
  mounted () {
    console.log(this.i18n)
  }
}
</script>

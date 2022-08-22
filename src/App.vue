<template>
  <TheHeader/>
  <RouterView />
  <TheFooter />

</template>

<script>
import TheFooter from '@/components/TheFooter.vue'
import TheHeader from '@/components/TheHeader.vue'

export default {
  components: {
    TheFooter,
    TheHeader
  }
}
</script>

<style lang="scss" scoped>
@import "./css/main.scss";

  .container {
    justify-content: center;
    text-align: center;
  }
  
</style>


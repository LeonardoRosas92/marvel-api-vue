<template>
  <HeaderApp/>
  <router-view></router-view>
</template>

<script>
import HeaderApp from '@/components/HeaderApp.vue';
export default {
  name: 'HomeView',
  components: { HeaderApp }
}
</script>

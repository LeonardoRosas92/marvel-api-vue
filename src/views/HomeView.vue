<template>
  <HeaderApp/>
  <ListCards/>
</template>

<script>
import HeaderApp from '@/components/HeaderApp.vue';
import ListCards from '@/components/ListCards.vue'
export default {
  name: 'HomeView',
  components: { HeaderApp, ListCards }
}
</script>

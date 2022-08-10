<template>
  <div class="listCards">
    <CardCharacter v-for="character in characters" :key="character.id" :character="character" class="card" />
  </div>
</template>

<script>
import CardCharacter from '@/components/CardCharacter.vue';
import { mapActions, mapState } from 'vuex'
export default {
    name: "ListCard",
    components: { CardCharacter },
    methods:{
        ...mapActions(['getCharacters'])
    },
    computed:{
        ...mapState(['characters'])
    },
    mounted() {
        this.getCharacters();
    }
}
</script>

<style lang="scss" scoped>
.listCards{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 20px;
    margin: 0 auto;
    width: 90%;
    padding-top: 30px;
}
</style>
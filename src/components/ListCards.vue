<template>
  <div class="listCards">
    <CardCharacter
      v-for="character in getCharacters"
      :key="character.id"
      :character="character"
      class="card"
      @click.prevent="getCharacter(character.id)"
    />
    <div class="spinner-container" v-if="isWaiting">
      <div class="spinner"></div>
    </div>
  </div>
</template>

<script>
import CardCharacter from "@/components/CardCharacter.vue";
import { mapActions, mapGetters } from "vuex";
import router from "@/router";
export default {
  name: "ListCard",
  components: { CardCharacter },
  data() {
    return {
      wait: false,
      target: null,
      isWaiting: false,
    };
  },
  methods: {
    ...mapActions(["getCharactersApi", "clearCharacters"]),
    getCharacter(id) {
      router.push({ name: "Character", params: { idCharacter: id } });
    },
    async getNextUser() {
      if (this.getOffset === 0) {
        await this.getCharactersApi();
      }
    },
    async handleScroll() {
      let bottomOfWindow = document.documentElement.offsetHeight - (document.documentElement.scrollTop + window.innerHeight) <= 10;
      if (bottomOfWindow && !this.isWaiting && this.getOffset <= 1500) {
        this.isWaiting = true;
        await this.getCharactersApi();
        this.isWaiting = false;
      }
    }
  },
  computed: {
    ...mapGetters(["getCharacters", "getOffset"]),
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll)
    if (this.getOffset === 0) {
      this.isWaiting = true;
      this.getNextUser();
      this.isWaiting = false;
    }
    return;
  },
  unmounted(){
    window.removeEventListener("scroll", this.handleScroll)
  }
};
</script>

<style lang="scss" scoped>
.listCards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px;
  margin: 0 auto;
  width: 90%;
  padding-top: 30px;
  padding-bottom: 30px;
}
.spinner-container {
  padding: 20px 0;
  width: 100%;
  .spinner {
    margin: 100px auto;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: radial-gradient(farthest-side, #f0131e 94%, #0000) top/14.1px
        14.1px no-repeat,
      conic-gradient(#0000 30%, #f0131e);
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(100% - 25px),
      #000 0
    );
    animation: spinner-c7wet2 0.8s infinite linear;
  }
}

@keyframes spinner-c7wet2 {
  100% {
    transform: rotate(1turn);
  }
}
</style>
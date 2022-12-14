<template>
  <div class="character" v-if="getCharacter">
    <img src="@/assets/back.svg" alt="back_img" class="character__back" @click.prevent="back">
    <div class="character__picture">
      <img
        :src="`${getCharacter.thumbnail.path}/portrait_incredible.${getCharacter.thumbnail.extension}`"
        alt="img_character"
      />
    </div>
    <div class="character__texts">
      <h2>{{ getCharacter.name }}</h2>
      <h3>{{ getCharacter.description }}</h3>
    </div>
  </div>
  <div class="comics" v-if="getCharacter && getCharacter.comics.length > 0">
    <h2>Apariciones</h2>
    <div class="comics__container">
      <CardComic
        v-for="comic in getCharacter.comics"
        :key="comic.id"
        :comic="comic"
      />
    </div>
  </div>
  <div class="spinner-container" v-if="!getCharacter">
    <div class="spinner"></div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { mapActions, mapGetters } from "vuex";
import CardComic from "@/components/CardComic.vue";
import router from "@/router";
export default {
  name: "CharacterPerfil",
  components: { CardComic },
  data() {
    return {
      character: null,
    };
  },
  methods: {
    ...mapActions(["getCharacterInfoApi","clearCharacter"]),
    back(){
      router.go(-1)
    }
  },
  computed: {
    ...mapGetters(["getCharacter"]),
  },
  async mounted() {
    const idCharacter = useRoute().params.idCharacter;
    await this.getCharacterInfoApi(idCharacter);
  },
  unmounted(){
    this.clearCharacter();
  }
};
</script>

<style scoped lang="scss">
* {
  color: white;
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
        25.1px no-repeat,
      conic-gradient(#0000 30%, #f0131e);
      -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(100% - 25px),
      #000 0
    );
    animation: spinner-c7wet2 0.8s infinite linear;
  }
}

.character {
  width: 90%;
  max-width: 1200px;
  box-shadow: 1px 1px 10px 0px rgba(255, 255, 255, 0.75);
  margin: 20px auto;
  border-radius: 15px;
  display: flex;
  padding: 20px 0px;
  position: relative;
  &__back {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 5px;
    left: 5px;
    background: rgba(255, 255, 255, 0.265);
    border-radius: 15px;
    transition: all .5s;
    &:hover{
      background: rgba(255, 255, 255, 0.491);
      cursor: pointer;
    }
  }
  &__picture {
    width: 30%;
    display: flex;
    align-items: center;
    img {
      display: block;
      width: 80%;
      margin: 0 auto;
      border-radius: 15px;
    }
  }
  &__texts {
    width: 70%;
    font-family: "Poppins";
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      width: 90%;
      font-size: 3rem;
      display: inline-flex;
      border-bottom: 5px solid;
      margin-bottom: 40px;
      letter-spacing: 2px;
    }
    h3 {
      font-size: 1.2rem;
      font-weight: 200;
    }
  }
}

.comics {
  height: 550px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 3rem;
    display: inline-flex;
    flex-wrap: wrap;
    width: max-content;
    border-bottom: 5px solid;
    margin-bottom: 30px;
  }
  &__container {
    width: 100%;
    height: 500px;
    display: flex;
    gap: 20px;
    overflow: hidden;
    overflow-x: auto;
    margin-bottom: 20px;
    padding: 0 20px 20px;
  }
}

@media screen and (max-width: 768px) {
  .character {
    width: 95%;
    &__picture {
      width: 40%;
    }
    &__texts {
      width: 60%;
      padding: 0 10px;
      h2 {
        font-size: 2rem;
      }
      h3 {
        font-size: 0.8rem;
      }
    }
  }
  .comics {
    h2 {
      font-size: 2rem;
      border-bottom: 4px solid;
      margin-bottom: 20px;
    }
  }
}

@media screen and (max-width: 425px) {
  .character {
    width: 90%;
    flex-direction: column;
    &__picture {
      width: 90%;
      max-width: 300px;
      margin: 0 auto;
    }
    &__texts {
      width: 100%;
      padding-right: 10px;
      h2 {
        font-size: 2rem;
        margin: 20px 0;
        text-align: center;
        width: 100%;
      }
      h3 {
        font-size: 0.8rem;
        text-align: center;
      }
    }
  }
  .comics {
    h2 {
      font-size: 1.9rem;
      border-bottom: 3px solid;
      margin-bottom: 10px;
      margin-bottom: 20px;
    }
  }
}

@keyframes spinner-c7wet2 {
  100% {
    transform: rotate(1turn);
  }
}
</style>
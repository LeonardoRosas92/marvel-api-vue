<template>
  <div class="character" v-if="getCharacter">
    <div class="character__picture">
      <img :src="`${getCharacter.thumbnail.path}/portrait_incredible.${getCharacter.thumbnail.extension}`" alt="img_character" />
    </div>
    <div class="character__texts">
      <h2>{{ getCharacter.name }}</h2>
      <h3>{{ getCharacter.description }}</h3>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CharacterPerfil",
  data() {
    return {
      character: null,
    };
  },
  methods: {
    ...mapActions(["getCharacterInfoApi"]),
  },
  computed: {
    ...mapGetters(["getCharacter"]),
  },
  async mounted() {
    const idCharacter = useRoute().params.idCharacter;
    await this.getCharacterInfoApi(idCharacter);
  },
};
</script>

<style scoped lang="scss">
* {
  color: white;
}

.character {
  width: 90%;
  max-width: 1200px;
  box-shadow: 1px 1px 10px 0px rgba(255, 255, 255, 0.75);
  margin: 20px auto;
  border-radius: 15px;
  display: flex;
  padding: 20px 0px;
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
    h2 {
      font-size: 3rem;
      display: inline-block;
      width: max-content;
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
      align-items: center;
      h2 {
        font-size: 2rem;
        margin: 20px 0;
      }
      h3 {
        font-size: 0.8rem;
        text-align: center;
      }
    }
  }
}
</style>
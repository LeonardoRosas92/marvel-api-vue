<template>
  <div class="card" >
    <div class="card__picture">
      <img :src="getUrl" alt="" class="img" />
    </div>
    <div class="card__texts">
      <h2>{{ character.name }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardCharacter",
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getUrl() {
      return `${this.character.thumbnail.path}/portrait_incredible.${this.character.thumbnail.extension}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 290px;
  height: 370px;
  border: 1px solid #fff;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  position: relative;
  transition: all 0.5s;

  background-color: rgba(255, 255, 255, 0.199);
  border-radius: 15px;

  box-shadow: 1px 1px 10px 0px rgba(255, 255, 255, 0.75);

  &:hover {
    cursor: pointer;
    transform: scale(1.0);
    .card__picture{
      &::before{
        width: 110%;
      }
    }
    .card__texts{
      h2 {
        font-size: 1.4rem;
      }
    }
  }

  &__picture {
    width: 250px;
    height: 250px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    overflow: hidden;
    &::before {
      content: "";
      position: absolute;
      width: 50%;
      height: 150%;
      background: linear-gradient(315deg, #f0131e, #aa0000);
      animation: animate 4s linear infinite;
      transition: all 0.5s;
    }
    .img {
      margin: 0 auto;
      padding: 0;
      position: relative;
      display: block;
      width: 95%;
      height: 95%;
      object-fit: cover;
      object-position: center top;
      border-radius: 50%;
      z-index: 3;
    }
  }
  &__texts {
    width: 100%;
    height: 30%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
      color: #fff;
      font-family: "Poppins";
      font-size: 1.3rem;
      font-weight: 200;
      letter-spacing: 1px;
      transition: all 0.5s;
    }
  }
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
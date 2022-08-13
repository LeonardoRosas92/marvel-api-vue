<template>
<div class="card">
    <div class="card__img">
        <img :src="getUrl" alt="comic_img">
    </div>
    <div class="card__texts">
        <h2>{{comic.title}}</h2>
    </div>
</div>

</template>

<script>
export default {
  name: "CardComic",
  props: {
    comic: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getUrl() {
      return `${this.comic.thumbnail.path}/portrait_incredible.${this.comic.thumbnail.extension}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.card{
    min-width: 225px;
    box-shadow: 1px 1px 10px 0px rgba(255, 255, 255, 0.75);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    &__img{
        width: 100%;
        overflow: hidden;
        img{
          min-width: 100%;
          object-fit: cover;
          border-radius: 10px 10px 0 0;
          display: block;
        }
    }
    &__texts{
        display: flex;
        margin: auto;
        justify-content: center;
        width: 100%;
        padding: 0 5px;
        h2{
            display: inline-block;
            font-size: 1rem;
            font-family: 'Poppins';
            text-align: center;
        }
    }
}

</style>
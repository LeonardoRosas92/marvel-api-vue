<template>
  <header class="header" id="header">
    <div class="header__pictures">
      <img
        class="header__pictures__logo"
        src="@/assets/marvel_logo.png"
        alt="Logo_Marvel"
      />
      <img
        class="header__pictures__ironman"
        src="@/assets/Ironman.svg"
        alt="IronMan"
      />
    </div>
    <div class="header__texts">
      <h2>SUPER HEROES</h2>
      <h3>Encuentra informacion de tus personajes favoritos de MARVEL</h3>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderApp",
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-image: url("@/assets/space.jpeg");
  background-size: cover;
  background-position-y: center;
  display: flex;
  overflow: hidden;
  &__pictures {
    position: relative;
    width: 50%;
    display: flex;
    align-items: flex-end;
    &__logo {
      margin: 0 0 10px 10px;
      width: 250px;
      clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
      animation: showLogo 2s 2s forwards;
    }
    &__ironman {
      position: absolute;
      width: 250px;
      bottom: 0;
      left: 0;
      transition: 0.5s all;
      transform: translate(-30%, 50%);
      animation: ironman 2s forwards;
    }
  }
  &__texts {
    font-family: "Poppins";
    width: 50%;
    background-color: rgba(255, 255, 255, 0.384);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
    z-index: 1;
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    animation: showGradient 2s 2s forwards;
    gap: 30px;
    text-align: center;
    h2 {
      border-top: 5px solid;
      border-bottom: 5px solid;
      font-size: 5rem;
      opacity: 0;
      animation: showText 2s 3s forwards;
    }
    h3 {
      font-size: 2rem;
      font-weight: 300;
      letter-spacing: 1px;
      opacity: 0;
      animation: showText 2s 3s forwards;
    }
  }
}

@keyframes ironman {
  100% {
    transform: translate(100%, -100%) scale(4);
  }
}

@keyframes showLogo {
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}

@keyframes showGradient {
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}

@keyframes showText {
  100% {
    opacity: 1;
  }
}

@media screen and (max-width: 768px) {
  .header {
    &__pictures {
      &__logo {
        width: 200px;
      }
    }
    &__texts {
      h2 {
        font-size: 3rem;
      }
      h3 {
        font-size: 1.5rem;
        font-weight: 300;
      }
    }
  }
  @keyframes ironman {
    100% {
      transform: translate(70%, -80%) scale(3);
    }
  }
}

@media screen and (max-width: 425px) {
  .header {
    flex-direction: column;
    &__pictures {
      align-items: flex-start;
      &__logo {
        margin: 10px 0 10px 10px;
        width: 150px;
        z-index: 99;
      }
      &__ironman {
        transform: translate(-20%, 0%);
      }
    }
    &__texts {
      position: absolute;
      width: 100%;
      min-height: 100vh;
      flex: 1;
      h2 {
        margin-top: 20px;
        font-size: 2.5rem;
      }
      h3 {
        font-size: 1.5rem;
      }
    }
  }
  @keyframes ironman {
    100% {
      transform: translate(20%, 250%) scale(3);
    }
  }
}
</style>
<template>
  <footer class="footer">
    <h3>&copy; Derechos Reservados 2022 </h3>
    <h2>Leonardo Rosas</h2>
    <a href="https://github.com/LeonardoRosas92/marvel-api-vue" target="_blank">
        <img src="@/assets/github1.svg" alt="Github_Icon">
    </a>
  </footer>
</template>

<script>
export default {
    name: 'FooterApp'
}
</script>

<style scoped lang="scss">
.footer{
    width: 100%;
    background: rgba(255, 255, 255, 0.312) ;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    font-family: 'Poppins';
    text-shadow: 2px 2px 5px #D6DBD0;
    h2{
        font-size: 1rem;
    }
    h3{
        font-size: 1.5rem;
    }
    a{
        text-decoration: none;
        img{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            box-shadow:1px 1px 10px #D6DBD0;
        }
    }
}
</style>
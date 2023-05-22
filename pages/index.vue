<template>
    
</template>

<script>
    export default {
        mounted()
        {
          let isAuthenticate = this.$isLogged()
          if(!isAuthenticate){
          this.$router.push('/login')
          }
          else
          this.$router.push('/profil/me')
        }
    }
</script>

<style scoped>

</style>
<template>
    
</template>

<script>
    export default {
        mounted()
        {
          /* let isAuthenticate = this.$isLogged()
          if(!isAuthenticate){
          this.$router.push('https://siteweb-gec-citoyen.vercel.app/')
          }
          else
          this.$router.push('/dashboard') */
          this.$router.push('/dashboard')
        },
          methods:{
            getToken(){
                console.log("aaaa", localStorage.getItem('gecToken'))
            
            }
        }
    }
</script>

<style scoped>

</style>
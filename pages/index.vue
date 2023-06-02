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

          if (this.$route.query.gecToken) {
            try {
              localStorage.setItem('gecToken', this.$route.query.gecToken)
              localStorage.setItem('gecLoggedInUser',this.$route.query.gecLoggedInUser)
              localStorage.setItem('gecIsAuthenticated', this.$route.query.gecIsAuthenticated)
          
            }catch (error) {
              console.error(error);
            }
            this.$router.push('/dashboard')
          }
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
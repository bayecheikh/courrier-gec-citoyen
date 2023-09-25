<template>
  <v-row class="d-flex justify-content-between">
    <v-col md="4" sm="12" lg="4" class="">
      <div class="bg-marron mr-3 pt-5 pb-0 justify-content-end">
        <div class="d-flex justify-space-between align-center ">
          <div>
            <v-icon color="#0a3764">mdi-email-outline</v-icon>
          </div>
          
          <h4 class="text-primary">Total courriers envoyés</h4>
          
        </div>
        
        <h1 class="text-chiffre">{{
            (
              this.listcourriers.length
            ).toLocaleString() }}
        </h1>
       
        <NuxtLink class="text-detail" to="/courrierenvoyes">
          Voir détail
        </NuxtLink>
      </div>
    </v-col>
    <v-col md="4" sm="12" lg="4" class="">
      <div class="bg-marron mr-3 pt-5 pb-0 justify-content-end">
        <div class="d-flex justify-space-between align-center ">
          <div>
            <v-icon color="#008064">mdi-email-outline</v-icon>
          </div>
          
          <h4 class="text-success">Réponses reçues</h4>
          
        </div>
        
        <h1 class="text-chiffre">{{
            (
              this.listcourriers.filter(item => item.traitement_status_slug=='traite').length
            ).toLocaleString() }}
        </h1>
        
        <NuxtLink class="text-detail" to="/courrierrecus">
          Voir détail
        </NuxtLink>
      </div>
    </v-col>
    <v-col md="4" sm="12" lg="4" class="">
      <div class="bg-marron mr-3 pt-5 pb-0 justify-content-end">
        <div class="d-flex justify-space-between align-center ">
          <div>
            <v-icon color="#d65e18">mdi-email-outline</v-icon>
          </div>
          
          <h4 class="text-warning">En cours de traitement</h4>
          
        </div>
        
        <h1 class="text-chiffre">{{
            (
              this.listcourriers.filter(item => item.traitement_status_slug=='en-cours-de-traitement').length
            ).toLocaleString() }}
        </h1>
        <NuxtLink class="text-detail" to="/courrierentraitements">
          Voir détail
        </NuxtLink>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
      listcourriers: 'courriers/listcourriers'
    })},
    data() {
      return {
      };
    },
    methods:{
      goToListCourrier(value) { 
        switch (value) {
          case 'courrierrecus':{
            this.$router.push('/courrierrecus');
          };
          case 'courrierenvoyes':{
            this.$router.push('/courrierenvoyes');
          };
          case 'courrierentraitements':{
            this.$router.push('/courrierentraitements');
          }
        }    
        
       // window.location.href = 'https://siteweb-gec-citoyen.vercel.app/addcourrier'
      },
    }
  }
</script>
<style scoped>
.text-detail{
  cursor: pointer;
}
.bg-marron {
  background-color: #fff;
  border-radius: 5px;
  padding: 30px;
  min-height: 110px;
}
/* .bg-marron:hover {
  background-color: #0a3764;
  color: #fff !important;
} */
.color-white {
  color: #fff;
}
.border-right-solid {
  border-right: solid 1px #ffffff59;
  padding: 20px;
}
.bg-white{
  border-radius: 5px;
  background-color: #fff;
  margin-left: 0.3px;
margin-right: 0.3px;
}
.text-primary{
  color: #0a3764;
}
.text-success{
  color: #008064;
}
.text-warning{
  color: #d65e18;
}
.text-chiffre{
  font-weight: 400;
font-size: 30px;
}
.text-detail{
opacity: 0.5;
}
</style>
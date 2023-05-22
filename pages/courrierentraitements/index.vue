<template>
  <div>
  <!-- <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div>  -->
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <courrier-entraitement></courrier-entraitement>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import CourrierEntraitement from '@/components/courriers/CourrierEntraitement'
  export default {
    layout: "dashboard",
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-parametres')){
        return redirect('/')
      }
    },
    components: {
      LeftMenu,
      PageHeader,
      CourrierEntraitement
    },
    mounted: function() {
      this.$store.dispatch('courriers/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Rôles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'courriers', icon: 'mdi-lock',link:'/courriers',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des courriers',
            disabled: true,
            to: '/courriers',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>

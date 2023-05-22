<template>
  <div>
<!--   <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> --> 
  <div class="custom-container mt-5">
    <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
     <v-row align="center"
            justify="center">
            <v-col cols="12" md="12" lg="12" sm="12">
              <actions-courrier></actions-courrier>
            </v-col>
            <v-col cols="12" md="12" lg="12" sm="12">
              <info-courrier></info-courrier>
            </v-col>
            
          </v-row>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import InfoCourrier from '@/components/courriers/detail/InfoCourrier';
import ActionsCourrier from '@/components/courriers/detail/ActionsCourrier';
  export default {
    layout: "dashboard",
    components: {
      LeftMenu,
      PageHeader,
      InfoCourrier,
      ActionsCourrier
    },
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-parametres')){
        return redirect('/')
      }
    },
    data () {
      return {
        leftmenuItems: [
          { text: 'Roles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'Courriers', icon: 'mdi-lock',link:'/Courriers',position:2  }
        ],
        headerItems: [
        {
          text: 'Courriers',
          disabled: false,
          to: '/Courriers',
          exact: true
        },
        {
          text: 'Détail Courrier',
          disabled: true,
          to: '/Courriers/94',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>

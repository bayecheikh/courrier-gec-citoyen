<template>
  <div>
    <div class="custom-container pb-5 mb-0 pt-6">
      <h2>Tableau de bord</h2>  
    </div> 
    <div class="custom-container mt-0">
      <stat-box></stat-box>
    </div>
    <div class=" mt-0 mr-8 ml-8 pl-0 pr-0 pt-0 pb-5 mb-5">
      <table-courrier></table-courrier>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import TableCourrier from "@/components/dashboard/TableCourrier";
import LeftMenu from "@/components/LeftMenu";
import StatBox from "@/components/dashboard/StatBox";

export default {
  layout: "dashboard",
  components: {
    StatBox,
    LeftMenu,
    TableCourrier,
  },
  mounted: function () {
    this.$store.dispatch('courriers/getList')
  },
  data() {
    return {
      headerItems: [
          {
            text: 'Tableau de bord',
            disabled: true,
            to: '/dashbord',
            exact: true
          }
        ]
    };
  },
  methods: {
    /* getCourriers() {
      this.$gecApi.$get('/structures')
      .then(async (response) => { 
        console.log('Données reçues contenu+++++++++++',response)
        await commit('initlist', response.data.data)
      }).catch((error) => {
        console.log("ERROR GEC", error)
          this.$toast.error(error).goAway(3000)
      }).finally(() => {
        console.log('Requête envoyée ')
  
      });
    } */
  },
};
</script>

<style scoped>
.bg-marron {
  background-color: #0a3764;
  border-radius: 5px;
  padding: 30px;
  color: rgba(255, 255, 255, 0.941);
  min-height: 110px;
}
.bg-marron:hover {
  background-color: #fff;
  color: #045d86 !important;
}
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
</style>

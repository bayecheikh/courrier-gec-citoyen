<template>
  <div>
    <div class="d-flex border-bottom-solid">
      <div>
        <v-tabs v-model="tab">
          <v-tab class="text-normal" v-for="item in tabItems" :key="item.value"> {{item.title}}</v-tab>
        </v-tabs>
      </div>
      <div class="ml-auto p-2">
        <v-btn
        depressed
        rounded
        color="primary"
        @click="goToAddContenuDynamique"
        >
          <v-icon left>
            mdi-plus
          </v-icon>
          Ajouter un contenu
        </v-btn>
      </div>
    </div>
    
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabItems"  :key="item.value" >
          <table-contenus-dynamiques :tab="item.value"></table-contenus-dynamiques> 
      </v-tab-item>          
    </v-tabs-items>
  </div>
</template>
<script>
import TableContenusDynamiques from '@/components/contenusdynamiques/TableContenusDynamiques'
  export default {
    components: {
      TableContenusDynamiques
    },
    data: () => ({
      tab: null,
      tabItems: [
        {title:'Tout',value:'tout'}
      ],
      selected: []
    }),
    methods:{
      goToAddContenuDynamique() {      
        this.$router.push('/contenusdynamiques/addContenuDynamique');
      },
    }
  }
</script>
<style scoped>
.border-bottom-small{
  border-bottom: solid 1px #80808052;
}
</style>
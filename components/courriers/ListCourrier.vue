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
        @click="goToAddcourrier"
        >
          <v-icon left>
            mdi-plus
          </v-icon>
          Ajouter un courrier
        </v-btn>
      </div>
    </div>
    
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabItems"  :key="item.value" >
          <table-courrier :tab="item.value"></table-courrier> 
      </v-tab-item>          
    </v-tabs-items>
  </div>
</template>
<script>
import TableCourrier from '@/components/courriers/TableCourrier'
  export default {
    components: {
      TableCourrier
    },
    data: () => ({
      tab: null,
      tabItems: [
        {title:'Tout',value:'tout'}
      ],
      selected: []
    }),
    methods:{
      goToAddcourrier() {      
        this.$router.push('#');
      },
    }
  }
</script>
<style scoped>
.border-bottom-small{
  border-bottom: solid 1px #80808052;
}
</style>
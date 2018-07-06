<template>
 
    <v-layout row justify-center>
    <v-flex xs12>
      <v-card>
        <v-card-title class="justify-center" >
          <span  class="headline">Farmer Details</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Name of Farmer" v-model="name" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="County" v-model="county" :return-value.sync="county" required></v-text-field>
              </v-flex>
    
              <v-flex xs12>
                <basic-select :options="options"  :selected-option="counties"    placeholder="select county"
                        @select="onSelect">
                </basic-select>
              </v-flex>
              <v-flex xs12 >
                <v-text-field class="mb-3" label="Subcounty" v-model="subcounty" required></v-text-field>
              </v-flex>
              <v-flex xs12 >
                <basic-select :options="options"  :selected-option="subcounties"    placeholder="select subcounty"
                        @select="onSelect">
                </basic-select>
              </v-flex>
              
              <v-flex xs12 >
                <v-text-field label="Size of land"  v-model="land_size" required hint="How big is your farm?"  persistent-hint ></v-text-field>
              </v-flex>  
             
            </v-layout>
            <small>*indicates required field</small>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Cancel</v-btn>
          <v-btn color="blue darken-1" flat  @click="print" @click.native="dialog = false">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import { BasicSelect } from 'vue-search-select'
import json from '@/counties.json'
export default {
  data() {
    return {
        name:null,
        county:null,
        subcounty:null,
        land_size:null,

options: json,
        counties: {
          value: '',
          text: ''
        },
        searchText: ''

    };
  },
  methods: {
    navTo({ name: route }) {
      this.$router.push(route);
    },
    print(){
        console.log(this.counties.text)
    },
    onSelect (counties) {
        this.counties = counties
       this.county= this.counties.text
        console.log(this.county)
      },
      reset () {
        this.counties = {}
      },
      selectOption () {
        // select option from parent component
        this.counties = this.options[0]
      }
    },
    components: {
      BasicSelect
    }
};
</script>
<style scoped>
</style>

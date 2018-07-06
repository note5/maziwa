<template>
 <div>
   <v-layout row justify-center>
      <v-flex xs12>
         <v-dialog v-model="dialog" persistent max-width="700">
            <v-btn slot="activator" color="success" dark>Create A farmer</v-btn>
            <v-card>
               <v-card-title class="justify-center" >
                  <span  class="headline">Farmer Details</span>
               </v-card-title>
               <v-card-text>
                  <v-container grid-list-md>
                     <v-layout wrap>
                        <v-flex xs12>
                           <h3>Name of farmer</h3>
                           <v-text-field label="Name of Farmer" v-model="name" required></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                           <h3>Select County: </h3>
                           <p v-if="county"> **You selected :{{county}}** </p>
                           <basic-select :options="options"  :selected-option="counties"    placeholder="select county"
                              @select="onSelect">
                           </basic-select>
                        </v-flex>
                        <v-flex xs12 >
                           <h3>Select Subcounty: </h3>
                           <p v-if="subcounty">** You Selected: {{subcounty}}**</p>
                           <basic-select :options="options_subcounties"  :selected-option="subcounties"   required placeholder="select subcounty"
                              @select="onSelect_sub">
                           </basic-select>
                        </v-flex>
                        <v-flex xs12 class="mt-2">
                           <h3>Enter Size of land</h3>
                           <v-text-field label="Size of land"  v-model="land_size" required hint="How big is your farm?"  persistent-hint ></v-text-field>
                        </v-flex>
                     </v-layout>
                     <small>* indicates required field</small>
                  </v-container>
               </v-card-text>
               <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1"  @click.native="dialog = false">Cancel</v-btn>
                  <v-btn color="green darken-1"   @click.native="dialog = false">Submit</v-btn>
               </v-card-actions>
            </v-card>
         </v-dialog>
      </v-flex>
   </v-layout >
   <v-layout row wrap>
   <v-flex xs12>
      <h1>farmer</h1>
   </v-flex>
   </v-layout>
</div>
 
</template>

<script>
import { BasicSelect } from "vue-search-select";
import json from "@/counties.json";

export default {
  data() {
    return {
      dialog: false,
      name: null,
      county: null,
      subcounty: null,
      land_size: null,

      options: json,
      counties: {
        value: "",
        text: ""
      },
      options_subcounties: null,
      subcounties: {
        text: ""
      },
      searchText: ""
    };
  },
  methods: {
    navTo({ name: route }) {
      this.$router.push(route);
    },
    onSelect(counties) {
      this.counties = counties;
      this.options_subcounties = this.counties.Subcounties;
      this.county = this.counties.text; //select county chosen
      console.log(this.county);
    },
    onSelect_sub(subcounties) {
      this.subcounties = subcounties;
      this.subcounty = this.subcounties;
      this.subcounty = this.subcounties.text; //select subcounty chosen
      console.log(this.subcounty);
      if (!subcounties) {
        console.log("enter county");
      }
    },
    reset() {
      this.counties = {};
      this.options_subcounties = {};
    },
    selectOption() {
      // select option from parent component
      this.counties = this.options[0];
    }
  },
  components: {
    BasicSelect
  }
};
</script>
<style scoped>
p{
  color:green;
}
</style>

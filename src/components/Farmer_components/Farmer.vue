<template>
  <div>
    <!--add farmer detals-->
    <v-layout row justify-center>
          <v-dialog v-model="dialog" persistent max-width="700">
            <v-btn v-if="!farm_name" slot="activator" color="success" dark>Create A farmer</v-btn>
               <v-card>
               <v-card-title class="justify-center" >
                  <span  class="headline"><strong>Farmer Details</strong></span>
                    <v-spacer></v-spacer>
                   <v-btn flat color="red" @click.native="dialog = false"> <v-icon >highlight_off</v-icon></v-btn>
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
    </v-layout>
    <!-- end of adding farmer details modal -->

    <!--Edit modal-->
       <v-layout row justify-center>
          <v-dialog v-model="dialog_Edit" persistent max-width="700">
               <v-card>
               <v-card-title class="justify-center" >
                  <span  class="headline"><strong>Edit Farmer Details</strong></span>
                    <v-spacer></v-spacer>
                   <v-btn flat color="red" @click.native="dialog_Edit = false"> <v-icon >highlight_off</v-icon></v-btn>
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
                  <v-btn color="green darken-1"  @click.native="dialog_Edit = false">Cancel</v-btn>
                  <v-btn color="green darken-1"  @click="submit_edited" @click.native="dialog_Edit = false">edit</v-btn>
               </v-card-actions>
               </v-card>
          </v-dialog>
    </v-layout>
    <!--end of edit modal-->
    <v-layout row wrap>
      <v-flex xs12 md8 offset-md2>
      <v-card class="mt-3">
         <v-container>
           <v-list-tile-content>
             <v-list-tile-title class="mb-2">
               <h2 class="mb-4" ><strong>Farm name:</strong></h2>
             </v-list-tile-title>
             <v-list-tile-sub-title class="mb-2">
               {{farm_name}}
             </v-list-tile-sub-title>
           </v-list-tile-content>
           <v-divider></v-divider>
           <v-list-tile-content>
             <v-list-tile-title class="mb-2">
               <h2><strong>County:</strong></h2>
             </v-list-tile-title>
             <v-list-tile-sub-title class="mb-2">
               {{county_name}}
             </v-list-tile-sub-title>
           </v-list-tile-content>
           <v-divider></v-divider>
           <v-list-tile-content>
             <v-list-tile-title class="mb-2">
               <h2><strong>Subcounty:</strong></h2>
             </v-list-tile-title>
             <v-list-tile-sub-title class="mb-2">
               {{subcounty_name}}
             </v-list-tile-sub-title>
           </v-list-tile-content>
           <v-divider></v-divider>
           <v-list-tile-content>
             <v-list-tile-title class="mb-2">
              <h2><strong>Land Size</strong></h2>
             </v-list-tile-title>
             <v-list-tile-sub-title class="mb-2">
               {{size_of_land}}
             </v-list-tile-sub-title>
           </v-list-tile-content>
           <v-divider></v-divider>
           <v-btn block color="success" dark @click="edit_farmer">Edit farmer details</v-btn>
         </v-container>
      </v-card>  
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
      dialog_Edit:false,
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
      searchText: "",
      //place the farmer data on the card
      farm_name:'Kapkamuren',
      county_name:'Baringo',
      subcounty_name:'Koibatek',
      size_of_land:'200 acres'
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
    },
    //edit farmer details function
    edit_farmer(){
      this.dialog_Edit= true
      console.log(this.dialog)
    },
    submit_edited(){
      console.log("send edited")
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
h2{
  color:blue;
}
strong{
  color: blue;
}
</style>

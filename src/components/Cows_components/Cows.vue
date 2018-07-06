<template>
  <div>
    <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="700">
      <v-btn slot="activator" color="success" dark>ADD a cow</v-btn>
      <v-card>
        <v-card-title class="justify-center" >
          <span  class="headline">Cow Details</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Name of cow" v-model="cow_name" required hint="Make the name unique for each cow" persistent-hint></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Breed of the Cow" required hint="What is the breed of the Cow?" persistent-hint></v-text-field>
              </v-flex>
              <v-flex xs12 >
                <v-text-field label="Year the cow was born" required hint="Add the year the cow was born"  persistent-hint ></v-text-field>
              </v-flex>  
              <v-flex xs12 >
                <v-text-field label="Weight of the cow" required hint="Add the recent weight in kgs"  persistent-hint ></v-text-field>
              </v-flex>  
              <v-flex xs12 >
                <v-select auto v-model="value"  tags ref="value" :items="items" attach chips label="Current state of the cow"
                    required hint="what is the current state of the cow?"  persistent-hint
                    multiple >
                </v-select>
              </v-flex>  
              <v-flex xs12>
                <input  type="file" @change="onFileChanged"  @keyup.enter="onUpload">
                  <v-btn color="success" @click="onUpload">Upload!</v-btn>
                   
                  <div class="image-preview" v-if="imageData.length > 0">
                   <div><h2>Name: {{cow_name}}</h2></div>
                <img class="preview mt-2" :src="imageData">
            </div>
              </v-flex>
            </v-layout>
            <small>*indicates required field</small>
          </v-container>
           
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Cancel</v-btn>
          <v-btn color="blue darken-1" flat @click="print" @click.native="dialog = false">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
   <v-layout row wrap>
  <v-flex xs12 sm12>
    <v-card class="mt-2 mb-0">
      <v-card-title style="justify-content:center;"><h2 @click="navTo({name:'view_cow'})">Your Cows</h2>
      </v-card-title>
      
    <div>
  <v-card>
    <v-card-title>
      Nutrition
      <v-spacer></v-spacer>
      <v-text-field  v-model="search" append-icon="search" label="Search" single-line hide-details ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="desserts" :search="search"  >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.calories }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="text-xs-right">{{ props.item.iron }}</td>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
    </div>
    </v-card>
  </v-flex>
</v-layout>

</div>
</template>

<script>
export default {
  watch: {
    value(val) {
      setTimeout(() => {
        this.$refs.value.menuIsActive = false;
      }, 50);
    }
  },
  data() {
    return {
      cow_name:'',
      imageData: "",
      selectedFile: null,
      dialog: false,
      items: ["pregnant", "sold", "dead", "slaughtered", "dry", "milked"],
      value: [],
      search: "",
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" }
      ],
      desserts: [
        {
          value: false,
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          value: false,
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          value: false,
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          value: false,
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        },
        {
          value: false,
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%"
        },
        {
          value: false,
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%"
        },
        {
          value: false,
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%"
        },
        {
          value: false,
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%"
        },
        {
          value: false,
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%"
        },
        {
          value: false,
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        }
      ]
    };
  },
  methods: {
    navTo({ name: route }) {
      this.$router.push(route);
    },
    print() {
      var i = 0;
      for (i in this.value) {
        console.log(this.value[i]);
      }
    },
    onFileChanged(event) {
      const file = event.target.files[0];
      this.selectedFile = file;
      if(file){
      this.imageData = URL.createObjectURL(file);
      }
    },
    onUpload() { //debugging purposes
      console.log('file', this.selectedFile)
      console.log(this.selectedFile);
    }
  }
};
</script>
<style scoped>
img.preview {
    max-width:300px;
    max-height:200px;
    background-color: grey;
    border: 1px solid #DDD;
    padding: 3px;
}
</style>

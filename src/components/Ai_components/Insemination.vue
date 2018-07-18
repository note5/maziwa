<template>
  <div>
    <!--add AI modal-->
    <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="700">
      <v-btn slot="activator" color="success" dark>ADD AI record</v-btn>
      <v-card>
        <v-card-title class="justify-center" >
          <span  class="headline"><strong> AI Details</strong></span>
          <v-spacer></v-spacer>
         <v-btn flat color="red" @click.native="dialog = false"> <v-icon >highlight_off</v-icon></v-btn>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
            <v-flex xs12>
                <h3>veterinarian: </h3>
                <v-text-field v-model="vet_name" required hint="What is the name of the Vet?" persistent-hint></v-text-field>
              </v-flex>
              <v-flex xs12>
                  <h3>Name of Cow: </h3>
               <v-combobox  v-model="cow_name"  ref="cow_name" :items="items" chips label="Name  of the cow"
                   required hint="Name of the cow"  persistent-hint
                    multiple >
                </v-combobox>
              </v-flex>
              <v-flex xs12>
                <h3>Breed: </h3>
                <v-text-field v-model="breed" required hint="What is the breed of the semen" persistent-hint></v-text-field>
              </v-flex>
              <v-flex xs12 >
                <h3>Straw number: </h3>
                <v-text-field v-model="straw_number"  hint="Type the straw number"  persistent-hint ></v-text-field>
              </v-flex>
              <v-flex xs12 >
                <h3>Date: </h3>
                 <v-menu
                            ref="menu1"
                            :close-on-content-click="false"
                            v-model="menu1"
                            :nudge-right="40"
                            :return-value.sync="date1"
                            lazy
                            transition="scale-transition"
                            offset-y

                        
                        >
                            <v-text-field
                            slot="activator"
                            v-model="date1"
                            label="Date"
                            prepend-icon="event"
                            readonly
                            ></v-text-field>
                            <v-date-picker v-model="date1" width="250" no-title scrollable>
                            <v-spacer></v-spacer>
                            <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                            <v-btn flat color="primary" @click="date_picked('menu1',date1)">OK</v-btn>
                            </v-date-picker>
                   </v-menu>
              </v-flex>    
              <v-flex xs12>
                <h3>Picture of the  Straw: </h3>
                <input  type="file" @change="onFileChanged" >
                  <v-btn color="success" @click="onUpload">Upload!</v-btn>
                   
                  <div class="image-preview" v-if="imageData.length > 0">
                   <div><h2>Name: {{cow_name}}</h2></div>
                <img class="preview mt-2" :src="imageData">
            </div>
              </v-flex>
            </v-layout>
          </v-container>
           
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Cancel</v-btn>
          <v-btn color="blue darken-1" flat  @click.native="dialog = false">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
  <!--end of add AI modal-->
  <!--start of edit AI modal-->
  <v-layout row justify-center>
    <v-dialog v-model="dialog_edit" persistent max-width="700">
      <v-card>
        <v-card-title class="justify-center" >
          <span  class="headline"><strong> AI Details</strong></span>
          <v-spacer></v-spacer>
         <v-btn flat color="red" @click.native="dialog_edit = false"> <v-icon >highlight_off</v-icon></v-btn>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
            <v-flex xs12>
                <h3>veterinarian: </h3>
                <v-combobox  v-model="cow_name_edit"  ref="cow_name_edit" :items="items" chips label="Name  of the cow"
                   required hint="Name of the cow"  persistent-hint
                    multiple >
                </v-combobox>
              </v-flex>
              <v-flex xs12>
                  <h3>Name of Cow: </h3>
                <v-text-field  v-model="cow_name_edit" required hint="Make the name unique for each cow" persistent-hint></v-text-field>
              </v-flex>
              <v-flex xs12>
                <h3>Breed: </h3>
                <v-text-field v-model="breed_edit" required hint="What is the breed of the semen" persistent-hint></v-text-field>
              </v-flex>
              <v-flex xs12 >
                <h3>Straw number: </h3>
                <v-text-field v-model="straw_number_edit"  hint="Type the straw number"  persistent-hint ></v-text-field>
              </v-flex>  
                <v-flex xs12 >
                <h3>Date: </h3>
                 <v-menu
                            ref="menu1"
                            :close-on-content-click="false"
                            v-model="menu1"
                            :nudge-right="40"
                            :return-value.sync="date1"
                            lazy
                            transition="scale-transition"
                            offset-y

                        
                        >
                            <v-text-field
                            slot="activator"
                            v-model="date1"
                            label="Date"
                            prepend-icon="event"
                            readonly
                            ></v-text-field>
                            <v-date-picker v-model="date1" width="250" no-title scrollable>
                            <v-spacer></v-spacer>
                            <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                            <v-btn flat color="primary" @click="date_picked('menu1',date1)">OK</v-btn>
                            </v-date-picker>
                   </v-menu>
              </v-flex> 
              <v-flex xs12>
                <h3>Picture of the  Straw: </h3>
                <input  type="file" @change="onFileChanged" >
                  <div class="image-preview" v-if="imageData.length > 0">
                   <div><h2>No: {{straw_number}}</h2></div>
                <img class="preview mt-2" :src="imageData">
            </div>
              </v-flex>
            </v-layout>
          </v-container>
           
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog_edit = false">Cancel</v-btn>
          <v-btn color="blue darken-1" flat  @click.native="dialog_edit = false">EDIT</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
  <!-- end of AI edit modal-->
   <v-layout row wrap>
  <v-flex xs12 sm12>
    <v-card class="mt-2 mb-0">
      <v-card-title style="justify-content:center;"><h2 @click="navTo({name:'view_cow'})">Your Cows</h2>
      </v-card-title>
      
    <div>
  <v-card>
    <v-card-title>
      Cows
      <v-spacer></v-spacer>
      <v-text-field  v-model="search" append-icon="search" label="Search" single-line hide-details ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="feeds" :search="search"  >
      <template slot="items" slot-scope="props">
        <td @click="show_AI(props.item)" style="cursor:pointer">{{ props.item.cow[0] }}</td>
        <td>{{ props.item.veterinarian }}</td>
        <td>{{ props.item.breed }}</td>
         <td>{{ props.item.straw_number }}</td>
          <td>{{ props.item.picture }}</td>
        <td>{{ props.item.date }}</td>
        <td @click="show(props.item)" style="cursor:pointer; margin-left:1px" class="text-xs-right"> <i class="material-icons">border_color</i></td>
        <td @click="print(props.item.weight)"  class="text-xs-right" style="cursor:pointer" > <i class="material-icons">delete</i></td>
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
         items: ["Mardadi", "Ravine", "Chelel", "Solian", "Mochongi", "Rongai"],
      cow_name: [],
      vet_name:"",
      imageData: "",
      breed: null,
      straw_number: null,
      menu1: "",
      date1: "",
      //edit modal values
      cow_name_edit: [],
      vet_name_edit:"",
      imageData_edit: "",
      breed_edit: null,
      straw_number_edit:null,


      selectedFile: null,
      dialog: false,
      dialog_edit: false,
      value_edit: [],
      search: "",
      headers: [
        
        { text: "Name of cow", sortable: false, value: "cow" },
        { text: "Veterinarian", value: "veterinarian" },
        { text: "Breed", value: "breed" },
        { text: "Number", value: "straw_number" },
        { text: "Picture", value: "picture", sortable: false },
        { text: "Date", value: "date" },
        { text: "Edit", value: "edit", sortable: false },
        { text: "Delete", value: "delete", sortable: false }
      ]   ,
       feeds: [
        {
          cow: ["Mardadi"],
          veterinarian: "Mr koholo",
          breed: "Ashire",
          straw_number:"10987767",
          date: "2018-07-02",
          straw_picture:"has some ganola",
          picture:"ugdjdbdjbd"
        },
        {
           cow: ["Mardadi"],
          veterinarian: "Dr kakilo",
          breed: "Freshian",
          straw_number:"172524",
          date: "2018-07-02",
          straw_picture:"has some ganola",
          picture:"ugdjdbdjbd"
        },
        {
           cow: ["Mardadi"],
          veterinarian: "Mrs ngilohk",
          breed: "Jersey",
          straw_number:"197977",
          date: "2018-07-02",
          straw_picture:"has some ganola",
          picture:"ugdjdbdjbd"
        }
      ]   
    };
  },
  methods: {
      date_picked(x, date) {
      var y = date;
      console.log(date);
      this.$refs[x].save(date);
      },
    navTo({ name: route }) {
      this.$router.push(route);
    },
    print() {
      console.log("edit");
    },
    show(x) {
      this.dialog_edit = true;
      this.cow_name_edit = x.name;
      this.breed_edit = x.breed;
      this.year_born_edit = x.date;
      this.weight_edit = x.weight;
      if (x.state) {
        this.value_edit = x.state;
      }
      this.imageData_edit = x.picture;
    },
    show_AI(AI) {
      this.$router.push({
        name: "view_AI",

        params: { AI: AI }
      });
    },
    onFileChanged(event) {
      const file = event.target.files[0];
      this.selectedFile = file;
      if (file) {
        this.imageData = URL.createObjectURL(file);
      }
    },
    onUpload() {
      //debugging purposes
      console.log("file", this.selectedFile);
      console.log(this.selectedFile);
    }
  },
  
};
</script>
<style scoped>
img.preview {
  max-width: 300px;
  max-height: 200px;
  background-color: grey;
  border: 1px solid #ddd;
  padding: 3px;
}
h3 {
  color: blue;
}
</style>

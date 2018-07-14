<template>
  <div>
    <!--add cow modal-->
    <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="700">
      <v-btn slot="activator" color="success" dark>ADD vaccination</v-btn>
      <v-card>
        <v-card-title class="justify-center" >
          <span  class="headline"><strong>  vaccination</strong></span>
          <v-spacer></v-spacer>
         <v-btn flat color="red" @click.native="dialog = false"> <v-icon >highlight_off</v-icon></v-btn>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                  <h3>Name of Disease: </h3>
                <v-text-field  v-model="disease_name" required hint="what disease is your cow suffering from?" persistent-hint></v-text-field>
              </v-flex>
              <v-flex xs12>
                <h3>Name of the cow: </h3><v-checkbox   :label="` All the cows`"    v-model="checkbox"></v-checkbox>
               <v-combobox  v-model="cow"  ref="cow" :items="items" chips label="Name of the cow"
                    required hint="which cow are you vaccinating? elect the check box to select all"  persistent-hint
                    multiple >
                </v-combobox>
              </v-flex> 
              <v-flex xs12 >
                <h3>Vet or company administering vaccination: </h3>
                <v-text-field  v-model="vet_name" required hint="Add the recent weight in kgs"  persistent-hint ></v-text-field>
              </v-flex>  
              <v-flex xs12>
                  <h3>Name of Vaccine: </h3>
                <v-text-field  v-model="vaccine_name" required hint="what is the name of the vaccine give?" persistent-hint></v-text-field>
              </v-flex>
              <v-flex xs12>
                  <h3>Description of the Vaccine: </h3>
                <v-textarea
          name="input-7-1"
          hint="Brief description of the vaccine" persistent-hint
          v-model="text"
        ></v-textarea>
              </v-flex>
              <v-flex xs12 >
                <h3>Date: </h3>
                      <v-menu
                            ref="menu"
                            :close-on-content-click="false"
                            v-model="menu"
                            :nudge-right="40"
                            :return-value.sync="date"
                            lazy
                            transition="scale-transition"
                            offset-y

                        
                        >
                            <v-text-field
                            slot="activator"
                            v-model="date"
                            label="From"
                            prepend-icon="event"
                            readonly
                            ></v-text-field>
                            <v-date-picker v-model="date" width="250" no-title scrollable>
                            <v-spacer></v-spacer>
                            <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                            <v-btn flat color="primary" @click="date_picked('menu',date)">OK</v-btn>
                            </v-date-picker>
                   </v-menu>
              </v-flex>  
              <v-flex xs12>
                <h3>Picture of the vaccine: </h3>
                <input  type="file" @change="onFileChanged" >                   
                  <div class="image-preview" v-if="imageData.length > 0">
                   <div><h2>Name: {{vaccine_name}}</h2></div>
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
  <!--end of add cow modal-->
  <!--start of edit cow modal-->
  <v-layout row justify-center>
    <v-dialog v-model="dialog_edit" persistent max-width="700">
      <v-card>
        <v-card-title class="justify-center" >
          <span  class="headline"><strong> Edit Vaccinations</strong></span>
          <v-spacer></v-spacer>
         <v-btn flat color="red" @click.native="dialog_edit = false"> <v-icon >highlight_off</v-icon></v-btn>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                  <h3>Name of Disease: </h3>
                <v-text-field  v-model="disease_name_edit" required hint="what disease is your cow suffering from?" persistent-hint></v-text-field>
              </v-flex>
              <v-flex xs12>
                <h3>Name of the cow: </h3><v-checkbox   :label="` All the cows`"    v-model="checkbox1"></v-checkbox>
                <v-combobox  v-model="cow_edit"  ref="cow_edit" :items="items" chips label="Name of the cow"
                    required hint="which cow are you vaccinating? elect the check box to select all"  persistent-hint
                    multiple >
                </v-combobox>
              </v-flex> 
              <v-flex xs12 >
                <h3>Vet or company administering vaccination: </h3>
                <v-text-field  v-model="vet_name_edit" required hint="Add the recent weight in kgs"  persistent-hint ></v-text-field>
              </v-flex>  
              <v-flex xs12>
                  <h3>Name of Vaccine: </h3>
                <v-text-field  v-model="vaccine_name_edit" required hint="what is the name of the vaccine give?" persistent-hint></v-text-field>
              </v-flex>
              <v-flex xs12>
                  <h3>description of the Vaccine: </h3>
                <v-textarea
          name="input-7-1"
          hint="Brief description of the vaccine" persistent-hint
          v-model="text_edit"
        
        ></v-textarea>
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
                            label="From"
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
                <h3>Picture of the vaccine: </h3>
                <input  type="file" @change="onFileChanged" >                   
                  <div class="image-preview" v-if="imageData_edit.length > 0">
                   <div><h2>Name: {{vaccine_name}}</h2></div>
                <img class="preview mt-2" :src="imageData_edit">
            </div>
              </v-flex>
            </v-layout>
          </v-container>
           
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog_edit = false">Cancel</v-btn>
          <v-btn color="green" flat @click="print" @click.native="dialog_edit = false">Edit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
  <!-- end of edit cow modal-->
   <v-layout row wrap>
  <v-flex xs12 sm12>
    <v-card class="mt-2 mb-0">     
    <div>
  <v-card>
    <v-card-title>
      Cows
      <v-spacer></v-spacer>
      <v-text-field  v-model="search" append-icon="search" label="Search" single-line hide-details ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="vaccinations" :search="search"  >
      <template slot="items" slot-scope="props">
        <td @click="show_cow(props.item)" style="cursor:pointer">{{ props.item.vaccination ||"No entry" }}</td>
        <td>{{ props.item.disease }}</td>
        <td>{{ props.item.cow[0] }}</td>
        <td>{{ props.item.vet }}</td>
        <td>{{ props.item.date }}</td>
        <td>{{ props.item.picture }}</td>
        <td @click="show(props.item)" style="cursor:pointer; margin-left:1px" class="text-xs-right"> <i class="material-icons">border_color</i></td>
        <td @click="print(props.item.cow)"  class="text-xs-right" style="cursor:pointer" > <i class="material-icons">delete</i></td>
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
  watch:{
  checkbox: function see(){
    console.log(this.checkbox)
  }
  },
  data() {
    return {
      //modal v-model
      disease_name: "",
      items: ["Mardadi", "Ravine", "Chelel", "Solian","Mochongi", "Rongai"],
      cow: [],
      vet_name: "",
      date: "",
      menu: "",
      text:"",
      imageData: "",
      vaccine_name: "",
      checkbox: false,
      //edit modal values
      disease_name_edit: "",
      cow_edit:[],
      vet_name_edit: "",
      menu1: "",
      date1: "",
      text_edit:"",
      imageData_edit: "",
      vaccine_name_edit: "",
      checkbox1: false,

      selectedFile: null,
      dialog: false,
      dialog_edit: false,
      value: [],
      value_edit: [],
      search: "",

      headers: [
        { text: "Vaccination", value: "vaccination", sortable: false },

        {
          text: "Name of Disease",
          sortable: false,
          value: "disease"
        },
        { text: "Cow", value: "cow", sortable: false },
        { text: "Vet", value: "vet", sortable: false },
        { text: "Date", value: "date" },
        { text: "Picture", value: "picture" },
        { text: "Edit", value: "edit", sortable: false },
        {
          text: "Delete",

          sortable: false
        }
      ],
      vaccinations: [
        {
          disease: "RVF",
          cow: ["Mardadi","Rongai"],
          vet: "mrs erol",
          vaccination: "my dawa",
          picture:
            "https://media.mnn.com/assets/images/2017/01/cow-in-pasture.jpg.838x0_q80.jpg",
          date: "2018-07-02"
        },
        {
          disease: "ECF",
          cow: ["chelel"],
          vet: "mr doctor",
          picture: "http/hshshhs/hdhdd",
          date: "2018-07-22"
        },
        {
          disease: "Liver flukes",
          cow: ["Baringo","Mardadi"],
          vet: "mr bart",
          vaccination: "my dawa",
          picture:
            "https://media.mnn.com/assets/images/2017/01/cow-in-pasture.jpg.838x0_q80.jpg",
          date: "2018-07-20"
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
    show_cow(vaccine) {
      this.$router.push({
        name: "view_vaccine",
        params: { vaccine: vaccine }
      });
    },
    print() {
      console.log("edit");
    },
    show(x) {
      this.dialog_edit = true;
      this.disease_name_edit = x.disease || "no entry";
      this.cow_edit = x.cow || "no entry";
      this.vet_name_edit = x.vet || "no entry";
      this.date1 = x.date || "no entry";
      this.vaccine_name_edit = x.vaccination || "no entry";
      this.imageData_edit = x.picture || "no entry";
      
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
  }
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
  color: green;
}
</style>

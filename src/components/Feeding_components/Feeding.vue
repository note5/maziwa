<template>
  <div>
    <!--add feeding modal-->
    <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="700">
      <v-btn slot="activator" color="success" dark>ADD Feeding record</v-btn>
      <v-card>
        <v-card-title class="justify-center" >
          <span  class="headline"><strong>  Feeding</strong></span>
          <v-spacer></v-spacer>
         <v-btn flat color="red" @click.native="dialog = false"> <v-icon >highlight_off</v-icon></v-btn>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
                 <v-flex xs12>
                <h3>Name of the cow: </h3><v-checkbox   :label="` All the cows`"    v-model="checkbox"></v-checkbox>
                <v-combobox  v-model="cow_name"  ref="cow_name" :items="items" chips label="Name of the cow"
                    required hint="which cow are you feeding? elect the check box to select all"  persistent-hint
                    multiple >
                </v-combobox>
              </v-flex> 
              <v-flex xs12>
                  <h3>Weight of serving: </h3>
                <v-text-field  v-model="serving_weight" required hint="How much have you given the cow?" persistent-hint></v-text-field>
              </v-flex>
              <v-flex xs12 >
                <h3>percentage protein: </h3>
                <v-text-field  v-model="protein" required hint="what is the estimate percentage protein?"  persistent-hint ></v-text-field>
              </v-flex>  
              <v-flex xs12>
                  <h3>Description of the food: </h3>
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
  <!--end of add feeding modal-->
  <!--start of edit feeding modal-->
  <v-layout row justify-center>
    <v-dialog v-model="dialog_edit" persistent max-width="700">
      <v-card>
        <v-card-title class="justify-center" >
          <span  class="headline"><strong> Edit Feeding</strong></span>
          <v-spacer></v-spacer>
         <v-btn flat color="red" @click.native="dialog_edit = false"> <v-icon >highlight_off</v-icon></v-btn>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
      
                <v-flex xs12>
                <h3>Name of the cow: </h3>
                <v-combobox  v-model="cow_name_edit"  ref="cow_name_edit" :items="items" chips label="Name  of the cow"
                    required hint="which cows are your feeding? select the check box to select all"  persistent-hint
                    multiple >
                </v-combobox>
              </v-flex> 
              <v-flex xs12>
                  <h3>Weight of serving: </h3>
                <v-text-field  v-model="serving_weight_edit" required hint="How much have you given the cow?" persistent-hint></v-text-field>
              </v-flex>
              <v-flex xs12 >
                <h3>percentage protein: </h3>
                <v-text-field  v-model="protein_edit" required hint="what is the estimate percentage protein?"  persistent-hint ></v-text-field>
              </v-flex>  
              <v-flex xs12>
                  <h3>Description of the food: </h3>
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
  <!-- end of edit feeding modal-->
   <v-layout row wrap>
  <v-flex xs12 sm12>
    <v-card class="mt-2 mb-0">     
    <div>
  <v-card>
    <v-card-title>
      <h2>Feeding records</h2>
      <v-spacer></v-spacer>
      <v-btn flat >view overall consumption chart</v-btn>
      <v-spacer></v-spacer>
      <v-text-field  v-model="search" append-icon="search" label="Search" single-line hide-details ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="feeds" :search="search"  >
      <template slot="items" slot-scope="props">
        <td @click="show_cow(props.item)" style="cursor:pointer">{{ props.item.cow[0] ||"No entry" }}</td>
        <td>{{ props.item.food }}</td>
        <td>{{ props.item.weight }}</td>
         <td>{{ props.item.protein }}</td>
         <td>{{ props.item.text }}</td>
          <td>{{ props.item.date }}</td>
        
        <td @click="show(props.item)" style="cursor:pointer; margin-left:1px" class="text-xs-right"> <i class="material-icons">border_color</i></td>
        <td @click="print(props.item.food)"  class="text-xs-right" style="cursor:pointer" > <i class="material-icons">delete</i></td>
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
  data() {
    return {
      //modal v-model
      serving_weight:"",
      protein:"",
      menu: "",
      date: "",
      text:"",
      checkbox: false,
      items: ["Mardadi", "Ravine", "Chelel", "Solian","Mochongi", "Rongai"],
      cow_name: [],
      value:"",
      //edit modal values
      cow_name_edit:[],
      serving_weight_edit:"",
      protein_edit:"",
      menu1: "",
      date1: "",
      text_edit:"",
      checkbox: false,
      //modal opens
      dialog: false,
      dialog_edit: false,
      search: "",

      headers: [
    
        { text: "Cow", value: "cow", sortable: false },
        { text: "Feed Description", value: "food", sortable: false },
        { text: "Weight (kgs)", value: "weight"},
        { text: "protein (%)", value: "protein"},
        {text:"comments",value:"text"},
        { text: "Date", value: "date"},
        { text: "Edit", value: ''},
        { text: "Delete", value: ""},
      ],
      feeds: [
        {
          cow: ["Mardadi"],
          food: "wheat brand",
          weight: "50",
          protein:"17",
          date: "2018-07-02",
          text:"has some ganola"
        },
        {
          cow: ["chelel"],
          food: "dairy meal",
          weight: "50",
          protein:"17",
          date: "2018-12-02",
          text:"very good "
        },
        {
          cow: ["Baringo"],
          food: "maize jam",
          weight: "50",
          protein:"17",
          date: "2018-07-05",
          text:"has a lot of dry matter"
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
    show_cow(food) {
      this.$router.push({
        name: "View_cow_feed",
        params: { food: food }
      });
    },
    print() {
      console.log("edit");
    },
    show(x) {
      this.dialog_edit = true;
      this.serving_weight_edit = x.weight || "no entry";
      this.cow_name_edit = x.cow || "no entry";
      this.protein_edit = x.protein || "no entry";
      this.date1 = x.date || "no entry";
      this.text_edit = x.text || "no entry";
      console.log(x.cow)
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

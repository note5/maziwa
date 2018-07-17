<template>
  <div>
    <!--add milk modal-->
    <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="700">
      <v-btn slot="activator" color="success" dark>ADD Milk record</v-btn>
      <v-card>
        <v-card-title class="justify-center" >
          <span  class="headline"><strong>Milk</strong></span>
          <v-spacer></v-spacer>
         <v-btn flat color="red" @click.native="dialog = false"> <v-icon >highlight_off</v-icon></v-btn>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
                 <v-flex xs12>
                <h3>Name of the cow: </h3>
                <v-combobox  v-model="cow_name"  ref="cow_name" :items="items" chips label="Name of the cow"
                    required hint="Name of the cow"  persistent-hint
                    multiple >
                </v-combobox>
              </v-flex>
             <v-flex xs12 >
                <h3>Amount: </h3>
                <v-text-field  v-model="milk_amount" required label="Amount of milk "></v-text-field>
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
                            label="Date"
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
  <!--end of add milk modal-->
  <!--start of edit milk modal-->
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
                   required hint="Name of the cow"  persistent-hint
                    multiple >
                </v-combobox>
              </v-flex> 
              <v-flex xs12 >
                <h3>Amount: </h3>
                <v-text-field  v-model="milk_amount_edit" required label="Amount of milk " ></v-text-field>
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
            </v-layout>
          </v-container>
           
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog_edit = false">Cancel</v-btn>
          <v-btn color="green" flat @click="edit" @click.native="dialog_edit = false">Edit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
  <!-- end of edit milk modal-->
   <v-layout row wrap>
  <v-flex xs12 sm12>
    <v-card class="mt-2 mb-0">     
    <div>
  <v-card>
    <v-card-title>
      <h2>Milk records</h2>
      <v-spacer></v-spacer>
      <v-btn flat >view overall Milk chart</v-btn>
      <v-spacer></v-spacer>
      <v-text-field  v-model="search" append-icon="search" label="Search" single-line hide-details ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="milk" :search="search"  >
      <template slot="items" slot-scope="props">
        <td @click="show_cow(props.item)" style="cursor:pointer">{{ props.item.cow[0] ||"No entry" }}</td>
        <td>{{ props.item.amount }}</td>
        <td>{{ props.item.date }}</td>
        <td @click="show(props.item)" style="cursor:pointer; margin-left:1px" class="text-xs-right"> <i class="material-icons">border_color</i></td>
        <td @click="destroy(props.item.cow)"  class="text-xs-right" style="cursor:pointer" > <i class="material-icons">delete</i></td>
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
      menu: "",
      date: "",
      milk_amount:"",
      items: ["Mardadi", "Ravine", "Chelel", "Solian", "Mochongi", "Rongai"],
      cow_name: [],
      value: "",
      //edit modal values
      cow_name_edit: [],
      milk_amount_edit:"",
      menu1: "",
      date1: "",
      //modal opens
      dialog: false,
      dialog_edit: false,
      search: "",

      headers: [
        { text: "Cow", value: "cow", sortable: false },
        { text: "Milk Amount", value: "amount"},
        { text: "Date", value: "date" },
        { text: "Edit", value: "" },
        { text: "Delete", value: "" }
      ],
      milk: [
        {
          cow: ["Mardadi"],
          amount: "47",
          date: "2018-07-02"
        },
        {
          cow: ["chelel"],
          amount: "17",
          date: "2018-12-02",
          text: "very good "
        },
        {
          cow: ["Baringo"],
          amount: "29",
          date: "2018-07-05",
          text: "has a lot of dry matter"
        }
      ]
    };
  },
  methods: {
      edit(){

      },
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
    destroy(x) {
      console.log(x);
    },
    show(x) {
      this.dialog_edit = true;
      this.cow_name_edit = x.cow || "no entry";
      this.milk_amount_edit = x.amount || "no entry";
      this.date1 = x.date || "no entry";
      this.text_edit = x.text || "no entry";
      console.log(x);
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

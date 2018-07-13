<template>
  <div>
    <!--add cow modal-->
    <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="700">
      <v-btn slot="activator" color="success" dark>ADD a cow</v-btn>
      <v-card>
        <v-card-title class="justify-center" >
          <span  class="headline"><strong> Cow Details</strong></span>
          <v-spacer></v-spacer>
         <v-btn flat color="red" @click.native="dialog = false"> <v-icon >highlight_off</v-icon></v-btn>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                  <h3>Name of Cow: </h3>
                <v-text-field  v-model="cow_name" required hint="Make the name unique for each cow" persistent-hint></v-text-field>
              </v-flex>
              <v-flex xs12>
                <h3>Breed of the Cow: </h3>
                <v-text-field v-model="breed" required hint="What is the breed of the Cow?" persistent-hint></v-text-field>
              </v-flex>
              <v-flex xs12 >
                <h3>Year the cow was born: </h3>
                <v-text-field v-model="year_born"  hint="Add the year the cow was born"  persistent-hint ></v-text-field>
              </v-flex>
              <v-flex xs12 >
                <h3>Weight of Cow: </h3>
                <v-text-field  v-model="weight" required hint="Add the recent weight in kgs"  persistent-hint ></v-text-field>
              </v-flex>
              <v-flex xs12 >
                <h3>State of the Cow: </h3>
                <v-select auto v-model="value"  tags ref="value" :items="items" attach chips label="Current state of the cow"
                    required hint="what is the current state of the cow?"  persistent-hint
                    multiple >
                </v-select>
              </v-flex>
              <v-flex xs12>
                <h3>Picture of the  Cow: </h3>
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
  <!--end of add cow modal-->
  <!--start of edit cow modal-->
  <v-layout row justify-center>
    <v-dialog v-model="dialog_edit" persistent max-width="700">
      <v-card>
        <v-card-title class="justify-center" >
          <span  class="headline"><strong> Cow Details</strong></span>
          <v-spacer></v-spacer>
         <v-btn flat color="red" @click.native="dialog_edit = false"> <v-icon >highlight_off</v-icon></v-btn>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <h3>Name of the Cow: </h3>
                <v-text-field  v-model="cow_name_edit" required hint="Make the name unique for each cow" persistent-hint></v-text-field>
              </v-flex>
              <v-flex xs12>
                <h3>Breed of the  Cow: </h3>
                <v-text-field  v-model="breed_edit" required hint="What is the breed of the Cow?" persistent-hint></v-text-field>
              </v-flex>
              <v-flex xs12 >
                <h3>Year the Cow was born: </h3>
                <v-text-field  v-model="year_born_edit" required hint="Add the year the cow was born"  persistent-hint ></v-text-field>
              </v-flex>
              <v-flex xs12 >
                <h3>Weight of the Cow: </h3>
                <v-text-field  v-model="weight_edit" required hint="Add the recent weight in kgs"  persistent-hint ></v-text-field>
              </v-flex>
              <v-flex xs12 >
                <h3>State of the Cow: </h3>
                <v-select auto v-model="value_edit"  tags ref="value_edit" :items="items" attach chips
                    required hint="what is the current state of the cow?"  persistent-hint
                    multiple >
                </v-select>
              </v-flex>
              <v-flex xs12>
                <input  type="file" @change="onFileChanged" >
                  <v-btn color="success" @click="onUpload">Upload!</v-btn>

                  <div class="image-preview" v-if="imageData_edit.length > 0">
                   <div><h2>Name: {{cow_name}}</h2></div>
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
      <v-card-title style="justify-content:center;"><h2 @click="navTo({name:'view_cow'})">Your Cows</h2>
      </v-card-title>

    <div>
  <v-card>
    <v-card-title>
      Cows
      <v-spacer></v-spacer>
      <v-text-field  v-model="search" append-icon="search" label="Search" single-line hide-details ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="cows" :search="search"  >
      <template slot="items" slot-scope="props">
        <td @click="show_cow(props.item)" style="cursor:pointer">{{ props.item.name }}</td>
        <td>{{ props.item.weight }}</td>
        <td>{{ props.item.breed }}</td>
        <td >{{ props.item.picture }}</td>
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
      cow_name: "",
      imageData: "",
      breed: null,
      year_born: null,
      weight: null,
      //edit modal values
      cow_name_edit: "",
      imageData_edit: "",
      breed_edit: null,
      year_born_edit: null,
      weight_edit: null,

      selectedFile: null,
      dialog: false,
      dialog_edit: false,
      items: ["pregnant", "sold", "dead", "slaughtered", "dry", "milked"],
      value: [],
      value_edit: [],
      search: "",
      headers: [
        {
          text: "Name of cow",
          sortable: false,
          value: "name"
        },
        { text: "Weight (Kgs)", value: "weight" },
        { text: "Breed", value: "breed" },
        {
          text: "Picture",
          value: "picture",
          sortable: false
        },
        { text: "Edit", value: "edit", sortable: false },
        {
          text: "Delete",
          value: "delete",
          sortable: false
        }
      ],
      cows: [
        {
          value: false,
          name: "chelel",
          weight: 408,
          breed: "freshian",
          picture:
            "https://media.mnn.com/assets/images/2017/01/cow-in-pasture.jpg.838x0_q80.jpg",
          date: "1/1/2009",
          delete: "Delete"
        },
        {
          value: false,
          name: "baringo",
          weight: 345,
          breed: "ashyre",
          picture: "http/hshshhs/hdhdd",
          date: "1/1/2009",

          delete: "Delete"
        },
        {
          value: false,
          name: "mardadi",
          weight: 287,
          breed: "jersey",
          picture:
            "https://media.mnn.com/assets/images/2017/01/cow-in-pasture.jpg.838x0_q80.jpg",
          state: ["pregnant", "dry"],
          date: "1/1/2009",

          delete: "Delete"
        }
      ]
    };
  },
  methods: {
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
    show_cow(cow) {
      this.$router.push({
        name: "view_cow",
        params: { cow: cow }
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
  color: blue;
}
</style>

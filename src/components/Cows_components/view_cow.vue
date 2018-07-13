<template>
  <div>
  <v-layout row wrap>
     <v-flex xs12 sm4 md4>
       <v-card class="mr-2" height="100%">
        <v-card-title>
          <h2 class="mt-2 mb-2" style="text-decoration:underline; ">Cow Profile</h2>
        </v-card-title>
         <v-card-text>
         <h3>Name: <span style="color:black;text-transform: capitalize;">{{name}}</span> </h3>
         <h3>Breed: <span style="color:black;text-transform: capitalize;">{{breed}}</span> </h3>
         <h3>weight: <span style="color:black;text-transform: capitalize;">{{weight}}</span> </h3>
         <h3>Year of birth: <span style="color:black;text-transform: capitalize;">{{year}}</span> </h3>
         </v-card-text>
       <v-card-text>
         <img class="preview mt-2" :src="imageData">
       </v-card-text>
     </v-card>
   </v-flex>
   <v-flex xs12 sm8 md8>
     <v-card class="mr-1">
      <v-layout row wrap>
        <v-card-title primary-title class="title-md-center">
            <h2 style="text-align:center">Number of of cows vaccinated over time by ccccccc</h2>
         <!-- <h2>Milk and feeds  Chart for chelel for the last 30 day</h2> -->
       </v-card-title>
       <v-flex xs12 sm6>
         <v-menu
        ref="menu1"
        :close-on-content-click="false"
        v-model="menu1"
        :nudge-right="40"
        :return-value.sync="date1"
        lazy
        transition="scale-transition"
        offset-y
        min-width="200"
        full-width>
        <v-text-field
          slot="activator"
          v-model="date1"
          label="From"
          prepend-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="date1"  no-title scrollable>
          <v-btn flat color="primary" @click="menu1 = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="date_picked('menu1',date1)">OK</v-btn>
        </v-date-picker>
      </v-menu>
       </v-flex>
    <v-flex xs12 sm6>
      <v-menu
        ref="menu2"
        :close-on-content-click="false"
        v-model="menu2"
        :nudge-right="40"
        :return-value.sync="date2"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="200"

      >
        <v-text-field
          slot="activator"
          v-model="date2"
          label="To"
          prepend-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="date2"  no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu2 = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="date_picked('menu2',date2)">OK</v-btn>
        </v-date-picker>
      </v-menu>
  </v-flex>
</v-layout>
        <!--End date menu-->
<v-card-actions>
  <v-btn block color="green">apply time range</v-btn>
</v-card-actions>
   <canvas ref="chart"></canvas>
</v-card>
 </v-layout>

<v-layout row wrap>
  <v-flex xs12 sm12>
    <v-card class="mt-2 mb-0">
      <v-card-title style="justify-content:center;"><h2 >Milk produced by {{name}} in the last 30 days</h2>
      </v-card-title>
    <div>
  <v-card>
    <v-card-title>
      {{name}} milk data
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="cow_data"
      :search="search"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.milk }}</td>
        <td>{{ props.item.date }}</td>
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
    data () {
      return {
    date1: null,
    date2: null,
    menu1: false,
    menu2: false,
    date: null,
        search: '',
        name:this.$route.params.cow.name,
        breed: this.$route.params.cow.breed,
        weight: this.$route.params.cow.weight,
        year: this.$route.params.cow.date,
        imageData:this.$route.params.cow.picture,

        headers: [
          {
            text: 'Milk', value: 'milk'},
          { text: 'Date', value: 'date' }
        ],
        cow_data: [
          {
            milk: 30,
            date: '2018-06-09'

          },
          {
            milk: 40,
            date: '2018-05-19'
          }
        ]
      }
    },
    mounted() {
            console.log(this.$route.params.cow)
            var chart = this.$refs.chart;
            var ctx = chart.getContext("2d");
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        },
methods: {
    date_picked(x, date) {
      console.log(x);
      this.$refs[x].save(date);
    },
    navTo({ name: route }) {
      this.$router.push(route);
    }
  }
  }
</script>


<style scoped>
img.preview {
  max-width: 90%;
  max-height: 80%;
  background-color: grey;
  border: 1px solid #ddd;
}
h3{
  color:rgb(14, 134, 64);
  margin-bottom: 3%
}
h2{
  text-align:center;
  color:green;
}

</style>

<template>
  <div>
  <v-layout row wrap>
     <v-flex xs12 sm4 md4>
       <v-card class="mr-2" height="100%">
<<<<<<< HEAD
  
       <v-card-title primary-title>
         <h2>Top Performers </h2>
       </v-card-title>
       <v-card-text>
             <p>{{name}}</p>

            <img class="preview mt-2" :src="imageData">
=======
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
>>>>>>> ae59f1c8d7e9e29a17a8e5ece6c6680e4d38de93
       </v-card-text>
     </v-card>
   </v-flex>
   <v-flex xs12 sm8 md8>
     <v-card class="mr-1">
        <!-- ---------Date picker  -------->
<<<<<<< HEAD
    <v-card flat>
      <v-layout row wrap>
=======
      <v-layout row wrap>
        <v-card-title primary-title class="title-md-center">
            <h2 style="text-align:center">Number of of cows vaccinated over time by ccccccc</h2>
         <!-- <h2>Milk and feeds  Chart for chelel for the last 30 day</h2> -->
       </v-card-title>
>>>>>>> ae59f1c8d7e9e29a17a8e5ece6c6680e4d38de93
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
<<<<<<< HEAD
=======
        min-width="200"
>>>>>>> ae59f1c8d7e9e29a17a8e5ece6c6680e4d38de93
        full-width>
        <v-text-field
          slot="activator"
          v-model="date1"
          label="From"
          prepend-icon="event"
          readonly
        ></v-text-field>
<<<<<<< HEAD
        <v-date-picker v-model="date1" width="200" no-title scrollable>
=======
        <v-date-picker v-model="date1"  no-title scrollable>
>>>>>>> ae59f1c8d7e9e29a17a8e5ece6c6680e4d38de93
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
<<<<<<< HEAD
=======
        min-width="200"
>>>>>>> ae59f1c8d7e9e29a17a8e5ece6c6680e4d38de93
        
      >
        <v-text-field
          slot="activator"
          v-model="date2"
          label="To"
          prepend-icon="event"
          readonly
        ></v-text-field>
<<<<<<< HEAD
        <v-date-picker v-model="date2" width="200" no-title scrollable>
=======
        <v-date-picker v-model="date2"  no-title scrollable>
>>>>>>> ae59f1c8d7e9e29a17a8e5ece6c6680e4d38de93
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu2 = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="date_picked('menu2',date2)">OK</v-btn>
        </v-date-picker>
      </v-menu>
  </v-flex>
</v-layout>
<<<<<<< HEAD
<v-card-actions>
  <v-btn block color="green">apply time range</v-btn>
</v-card-actions>
</v-card>
        <!--End date menu-->
       <v-card-title primary-title style="justify-content:center;">
         <h2>Milk and feeds  Chart for chelel for the last 30 day</h2>
       </v-card-title>
             <canvas ref="chart"></canvas>
     </v-card>
=======
        <!--End date menu-->
<v-card-actions>
  <v-btn block color="green">apply time range</v-btn>
</v-card-actions>
   <canvas ref="chart"></canvas>
</v-card>
>>>>>>> ae59f1c8d7e9e29a17a8e5ece6c6680e4d38de93
   </v-flex>
 </v-layout>

<v-layout row wrap>
  <v-flex xs12 sm12>
    <v-card class="mt-2 mb-0">
<<<<<<< HEAD
      <v-card-title style="justify-content:center;"><h2 >Milk produced by Chelel in the last 30 days</h2>
      </v-card-title>
      
    <div>
  <v-card>
    <v-card-title>
      Nutrition
=======
      <v-card-title style="justify-content:center;"><h2 >Milk produced by {{name}} in the last 30 days</h2>
      </v-card-title>
    <div>
  <v-card>
    <v-card-title>
      {{name}} milk data
>>>>>>> ae59f1c8d7e9e29a17a8e5ece6c6680e4d38de93
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
<<<<<<< HEAD
      :items="desserts"
      :search="search"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.calories }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="text-xs-right">{{ props.item.iron }}</td>
=======
      :items="cow_data"
      :search="search"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.milk }}</td>
        <td>{{ props.item.date }}</td>
>>>>>>> ae59f1c8d7e9e29a17a8e5ece6c6680e4d38de93
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
<<<<<<< HEAD
=======
        breed: this.$route.params.cow.breed,
        weight: this.$route.params.cow.weight,
        year: this.$route.params.cow.date,
>>>>>>> ae59f1c8d7e9e29a17a8e5ece6c6680e4d38de93
        imageData:this.$route.params.cow.picture,

        headers: [
          {
<<<<<<< HEAD
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' }
        ],
        desserts: [
          {
            value: false,
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
          {
            value: false,
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            value: false,
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%'
          },
          {
            value: false,
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%'
          },
          {
            value: false,
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%'
          },
          {
            value: false,
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%'
          },
          {
            value: false,
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%'
          },
          {
            value: false,
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%'
          },
          {
            value: false,
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            value: false,
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
=======
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
>>>>>>> ae59f1c8d7e9e29a17a8e5ece6c6680e4d38de93
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
<<<<<<< HEAD
=======
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
>>>>>>> ae59f1c8d7e9e29a17a8e5ece6c6680e4d38de93

</style>

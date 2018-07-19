<template>
  <v-layout row justify-center wrap >
    <v-card class="mr-1">
        <!-- ---------Date picker  -------->
      <v-layout row wrap>
        <v-card-title primary-title class="title-md-center">
            <h2 style="text-align:center">Feeds consumed by {{name}}</h2>
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
    name:''
      }
    },
    mounted() {
        console.log(this.$route.params)
        this.name= this.$route.params.food.cow[0]
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
    }
  }
  }
</script>


<style scoped>
img.preview {
  max-width: 280px;
  max-height: 200px;
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

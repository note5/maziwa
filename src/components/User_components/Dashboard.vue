<template>
<div>
    <v-card class="mb-2">
        <h4  class="text-xs-center display-2" style="color:green;">Quick Summary</h4>
    <v-card-text>
    <v-layout row wrap >        
        <v-flex>
            <div class="headline">
                <v-card  height="100" class="ma-1" color="green">
                    <!-- <v-card-title>
                       
                    </v-card-title> -->
                    <v-card-text @click="2" style="cursor:pointer">
                        <span class="display-1">50</span><br>
                        <small>Cows</small>                   
                    </v-card-text>
                </v-card>                
            </div>
        </v-flex>
        <v-flex>
            <div class="headline">
                <v-card  height="100" class="ma-1" color="green">
                    <!-- <v-card-title>
                       
                    </v-card-title> -->
                    <v-card-text @click="2" style="cursor:pointer">
                        <span class="display-1">120</span><small>
                        ltrs of Milk</small><br>
                         <small>Last 24 hours</small>
                    </v-card-text>
                </v-card>                
            </div>
        </v-flex>
        <v-flex>
            <div class="headline">
                <v-card  height="100" class="ma-1" color="green">
                    <!-- <v-card-title>
                       
                    </v-card-title> -->
                    <v-card-text @click="2" style="cursor:pointer">
                        <span class="display-1">5 Pregnant</span>
                        <br>
                        <small>Last 12 months</small>
                    </v-card-text>
                </v-card>                
            </div>
        </v-flex>
        <v-flex>
            <div class="headline">
                <v-card  height="100" class="ma-1" color="green">
                    <!-- <v-card-title>
                       
                    </v-card-title> -->
                    <v-card-text @click="2" style="cursor:pointer">
                        <span class="display-2">300</span> <small>kgs</small><br>
                        <small> Feeds last 30 days</small>
                    </v-card-text>
                </v-card>                
            </div>
        </v-flex>
        <v-flex>
            <div class="headline">
                <v-card  height="100" class="ma-1" color="green">
                    <!-- <v-card-title>
                       
                    </v-card-title> -->
                    <v-card-text @click="2" style="cursor:pointer">
                        <span class="display-1">5</span> <small>Cows sold</small><br>
                        <small> last 12 months</small>
                    </v-card-text>
                </v-card>                
            </div>
        </v-flex>
        <v-flex>
            <div class="headline">
                <v-card  height="100" class="ma-1" color="green">
                    <!-- <v-card-title>
                       
                    </v-card-title> -->
                    <v-card-text @click="2" style="cursor:pointer;">
                        <span class="display-1">1</span><small>cow</small><br>
                        <small> died last year</small>
                    </v-card-text>
                </v-card>                
            </div>
        </v-flex>              
    </v-layout>
   </v-card-text>
</v-card>

 <v-layout row wrap>
   <v-flex xs12 sm8>
     <v-card class="mr-1">
       <!-- ---------Date picker  -------->
        <v-card  flat >
           <v-card-title style="justify-content:center;">
        
                <h2 style="color:green;">Milk Chart for the Month</h2> 

           </v-card-title>
           <v-layout row wrap>
                <v-flex xs12 sm4 offset-sm2>
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
                            <v-btn flat color="primary" @click="menu1 = false">Cancel</v-btn>
                            <v-btn flat color="primary" @click="date_picked('menu1',date1)">OK</v-btn>
                            </v-date-picker>
                   </v-menu>
                </v-flex>
                <v-flex xs12 sm4 offset-sm2>
                    <v-menu
                        ref="menu2"
                        :close-on-content-click="false"
                        v-model="menu2"
                        :nudge-right="40"
                        :return-value.sync="date2"
                        lazy
                        transition="scale-transition"
                        offset-y
                        
                    >
                        <v-text-field
                        slot="activator"
                        v-model="date2"
                        label="To"
                        prepend-icon="event"
                        readonly
                        ></v-text-field>
                        <v-date-picker v-model="date2" width="250" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="menu2 = false">Cancel</v-btn>
                        <v-btn flat color="primary" @click="date_picked('menu2',date2)">OK</v-btn>
                        </v-date-picker>
                    </v-menu>
                </v-flex>
            </v-layout>
        </v-card>
          <!--End date menu-->
        <div class="mt-2">
        <canvas ref="chart"></canvas>
        </div>
    </v-card>
 </v-flex>
 <!--progress section-->
 <v-flex xs12 sm4 >
   <v-card class="ml-1" height="100%">
     <v-card-text flat>
      <v-card-title primary-title>
         <h3 style="color:green;">Top Performers in the last 30 days </h3>
       </v-card-title>
        <v-divider></v-divider>
     </v-card-text>
       <v-card-text>
         <div>
            <div>
                <h4>Chelel</h4>
                <v-progress-linear value="75" height="10" color="secondary"></v-progress-linear>
             </div>
             <div>
                <h4>Baringo</h4>
                <v-progress-linear value="60" height="10" color="success"></v-progress-linear>
             </div>
             <div>
                <h4>mochongoi</h4>
                <v-progress-linear value="45" height="10" color="info"></v-progress-linear>
             </div>
             <div>
                <h4>Pembe</h4>
                <v-progress-linear value="30" height="10" color="warning"></v-progress-linear>
             </div>
             <div>
                <h4>mardadi</h4>
                <v-progress-linear value="15" height="10" color="error"></v-progress-linear>
             </div>
         </div>
      </v-card-text>
     </v-card>
   </v-flex>
 </v-layout>
<!-- Pie chart section -->
 <v-layout row wrap>
     <v-flex xs12 sm4>
      <v-card class="mr-2 mt-2 mb-2 ">
        <v-card flat>
            <v-card-title primary-title style="
            justify-content:center;">
               <h4 style="color:teal">Sick cows in the last 30 days</h4>
            </v-card-title>
         </v-card>
       <v-card-text class="text-xs-center">
         <v-progress-circular
              :size="100" :width="15":rotate="360":value="value"color="teal">
          {{ value }}
         </v-progress-circular>
       </v-card-text>  
     </v-card>
    </v-flex>

    <v-flex xs12 sm4>
     <v-card class="mr-2 mt-2 mb-2 ">
        <v-card flat>
            <v-card-title primary-title style="
            justify-content:center;">
               <h4 style="color:#795548!important;">Cows milked in the last 30 days</h4>
            </v-card-title>
         </v-card>
       <v-card-text class="text-xs-center">
         <v-progress-circular
              :size="100" :width="15":rotate="360":value="value"color="brown">
          {{ value }}
         </v-progress-circular>
       </v-card-text>  
     </v-card>
   </v-flex>
   <v-flex xs12 sm4>
     <v-card class="mt-2 mb-2 ">
        <v-card flat>
           <v-card-title primary-title style="
            justify-content:center;">
               <h4 style="color:#2196f3!important">Pregnant cows in the last 30 days</h4>
            </v-card-title>
         </v-card>
       <v-card-text class="text-xs-center">
         <v-progress-circular
              :size="100" :width="15":rotate="360":value="value"color="blue">
          {{ value }}
         </v-progress-circular>
       </v-card-text>  
     </v-card>
     <!-- end of pie charts -->
   </v-flex>
 </v-layout>
 <v-layout row wrap>
   <v-flex xs12 sm12>
     <v-card class="mr-1">
       <v-card-title primary-title>
         <h2>Feed Summary For 30 days</h2>
       </v-card-title>
     </v-card>
   </v-flex>  
  </v-layout>
 </div>
</template>

<script>
import Chart from "chart.js";

export default {
  name: "app",
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0);
      }
      this.value += 10;
    }, 1000);

    var chart = this.$refs.chart;
    var ctx = chart.getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  },
  data: () => ({
    date1: null,
    date2: null,
    menu1: false,
    menu2: false,
    date: null,
    //// chart
    interval: {},
    value: 0
  }),
  methods: {
    date_picked(x, date) {
      var y = date;
      console.log(x);
      this.$refs[x].save(date);
    },
    navTo({ name: route }) {
      this.$router.push(route);
    }
  }
};
</script>

<style>

</style>
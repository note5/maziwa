<template>
<div>
    <v-card class="mb-2">
        <p @click="navTo({'name':'CowModal'})" class="text-xs-center display-2">Quick Summary</p>
            <v-card-text>
    <v-layout row wrap >        
        <v-flex>
            <div class="headline">
                <v-card  height="100" class="ma-1" color="green lighten-2">
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
                <v-card  height="100" class="ma-1" color="green lighten-2">
                    <!-- <v-card-title>
                       
                    </v-card-title> -->
                    <v-card-text @click="2" style="cursor:pointer">
                        <span class="display-1">120</span><small>
                        ltrs</small><br>
                         <small>Milk</small>
                    </v-card-text>
                </v-card>                
            </div>
        </v-flex>
        <v-flex>
            <div class="headline">
                <v-card  height="100" class="ma-1" color="green lighten-2">
                    <!-- <v-card-title>
                       
                    </v-card-title> -->
                    <v-card-text @click="2" style="cursor:pointer">
                        <span class="display-1">5</span> <small>cows</small>
                        <br>
                        <small> Pregnant</small>
                    </v-card-text>
                </v-card>                
            </div>
        </v-flex>
        <v-flex>
            <div class="headline">
                <v-card  height="100" class="ma-1" color="green lighten-2">
                    <!-- <v-card-title>
                       
                    </v-card-title> -->
                    <v-card-text @click="2" style="cursor:pointer">
                        <span class="display-1">300</span> <small>kgs</small><br>
                        <small> Feeds</small>
                    </v-card-text>
                </v-card>                
            </div>
        </v-flex>
        <v-flex>
            <div class="headline">
                <v-card  height="100" class="ma-1" color="green lighten-2">
                    <!-- <v-card-title>
                       
                    </v-card-title> -->
                    <v-card-text @click="2" style="cursor:pointer">
                        <span class="display-1">5</span> <small>Cows sold</small><br>
                        <small> last year</small>
                    </v-card-text>
                </v-card>                
            </div>
        </v-flex>
        <v-flex>
            <div class="headline">
                <v-card  height="100" class="ma-1" color="green lighten-2">
                    <!-- <v-card-title>
                       
                    </v-card-title> -->
                    <v-card-text @click="2" style="cursor:pointer">
                        <span class="display-1">1</span><small>cow</small><br>
                        <small> dead</small>
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
    <v-card flat>
      <v-layout row wrap>
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
        full-width
    
      >
        <v-text-field
          slot="activator"
          v-model="date1"
          label="select start date"
          prepend-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="date1" width="200" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu1 = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="date_picked(date1)">OK</v-btn>
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
        
      >
        <v-text-field
          slot="activator"
          v-model="date2"
          label="select end date"
          prepend-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="date2" width="200" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu2 = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="date_picked('menu2',date2)">OK</v-btn>
        </v-date-picker>
      </v-menu>
  </v-flex>
</v-layout>
</v-card>
        <!--End date menu-->
       <v-card-title primary-title>
         <h2>Milk Chart for the Month</h2>
       </v-card-title>
             <canvas ref="chart"></canvas>
     </v-card>
   </v-flex>
  
     <v-flex xs12 sm4 >
       <v-card class="ml-1" height="100%">
  
       <v-card-title primary-title>
         <h2>Top Performers </h2>
       </v-card-title>
       <v-divider></v-divider>
        <div>
         <v-card>
    <v-progress-linear value="75" height="10" color="secondary"></v-progress-linear>
</v-card>

    <v-progress-linear value="60" height="10" color="success"></v-progress-linear>

    <v-progress-linear value="45" height="10" color="info"></v-progress-linear>

    <v-progress-linear value="30" height="10" color="warning"></v-progress-linear>

    <v-progress-linear value="15" height="10" color="error"></v-progress-linear>
  </div>
     </v-card>
   </v-flex>
 </v-layout>

 <v-layout row wrap>
     <v-flex xs12 sm4>
     <v-card class="mr-2 mt-2 mb-2 ">
       <v-card-title primary-title>
         <h2>Pie chart one</h2>
       </v-card-title>
            
     </v-card>
   </v-flex>
   <v-flex xs12 sm4>
     <v-card class="mr-2 mt-2 mb-2 ">
       <v-card-title primary-title>
         <h2>Pie Chart 2</h2>
       </v-card-title>
            
     </v-card>
   </v-flex>
   <v-flex xs12 sm4>
     <v-card class="mr-2 mt-2 mb-2 ">
       <v-card-title primary-title>
         <h2>Pie chart 3</h2>
       </v-card-title>
            
     </v-card>
   </v-flex>
 </v-layout>
 <v-layout row wrap>
   <v-flex xs12 sm6>
     <v-card class="mr-1">
       <v-card-title primary-title>
         <h2>Feed Summary For 30 days</h2>
       </v-card-title>
            
     </v-card>
   </v-flex>  
     <v-flex xs12 sm6 >
       <v-card class="ml-1">
       <v-card-title primary-title>
         <h2>Average Feed for month</h2>
       </v-card-title>
             
     </v-card>
   </v-flex>
 </v-layout>
</div>
</template>

<script>
    import Chart from 'chart.js';

    export default {
        name: 'app',
        mounted() {
            var chart = this.$refs.chart;
            // var gg = this.$refs.gg;
            // var ggt = gg.getContext("2d")
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
            var myChart = new Chart(ggt, {
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
        data:()=>({
            date1:null,
            date2:null,
            menu1: false,
            menu2:false,
            date: null
        }),
        methods:{
        //     date_picked(x,date){
        //         y =date
        //        console.log(x)
        //        console.log(this.$refs.x.y)
        //     },
        navTo({"name":route}){
            this.$router.push(route)
         }
        }
    }
</script>

<style>
    /* #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    #content {
        margin: auto;
        width: 1024px;
        background-color: #FFFFFF;
        padding: 20px;
    } */
</style>
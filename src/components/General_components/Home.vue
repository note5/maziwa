<template>
  <div>
      <section>
        <v-parallax :src="require('@/assets/cows1.jpg')"  class="cpow" height="400">
          <v-layout
            column
            align-center
            justify-center >
            <img :src="require('@/assets/cpows2.jpg')" height="200">
            <h1 style="background:black;"></h1>
            <!-- <div class="subheading mb-3 text-xs-center" 
            style="background:black;">Made by a farmer for farmers
            <v-btn to="register">Rgister</v-btn>
            or
            <v-btn to="login">log in</v-btn>
            </div> -->

             <div v-if="!$store.state.isLoggedIn" style="background-color:black;">
            <div class="mb-1 text-xs-center"><h2>Dairy Analytics</h2></div>
            <p style="text-align:center">Made by a farmer for farmers</p>
             <v-btn  color="green" to="login">login</v-btn>
             <v-btn  color="green" to="register">create an account</v-btn>
            </div>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">The platform that shows the unknowns</h2>
              <!-- <span class="subheading">
                Cras facilisis mi vitae nunc 
              </span> -->
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent" style="heigh:max-content%">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="green--text text--lighten-2">trending_up</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Visualize Milk Production</div>
                    </v-card-title>
                    <v-card-text>
                      With an intuitive record keeping module, the system will create charts of the milk production
                      over the time specified by the user. This creates a visual insight on the performance of the
                      farm over specific time periods
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="green--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Keep track of feeds consumed</div>
                    </v-card-title>
                    <v-card-text>
                      This platform offers the ability to delegently keep the feeding patterns of your animals
                      and help create a visual representation for all the animals under feeding, One can also compare
                      the daily amount of feeds against the milk produced, this will create better insights about the costs and and 
                      food variations over time. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="green--text text--lighten-2">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Know every aspects of your animals life</div>
                    </v-card-title>
                    <v-card-text>
                     Through this application, the state, health and reproductive health of your precious
                     animals are well recorded and presented for quick references, the vetenarian, diseases,treatments
                     and vaccinations for each animal will be recored and hence create a record that can be used when needed 
                     later on.
             
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax :src="require('@/assets/cows1.jpg')" height="380">
          <v-layout v-if="!$store.state.isLoggedIn" column align-center justify-center>
            <div style="background-color:black;">
            <div style="text-align:center"><h2>Market your Farm</h2></div>
            <p>Create a public profile about your farm</p>
             <v-btn   color="green" to="login">login</v-btn>
             <v-btn color="green" to="register">create an account</v-btn>
            </div>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Inspiration</div>
                </v-card-title>
                <v-card-text>
                  I am an Engineer brought up and resourced by dairy cows and now I see the potential
                  of data analytics in dairy farming. 
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact us</div>
                </v-card-title>
                <v-card-text>
                <a href="DairyAnalytics.com"> DairyAnalytics.com</a>
                </v-card-text>
                <v-list class="transparent">
                    <v-list-tile>
                        <v-list-tile-action>
                          <v-icon class="blue--text text--lighten-2">phone</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>0724XXXXXX</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-action>
                          <v-icon class="blue--text text--lighten-2">place</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Nairobi, Ke</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-action>
                          <v-icon class="blue--text text--lighten-2">email</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>dairyanalytics@gmail.com</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    </div>
</template>

<script>
export default {
}
</script>


<style scoped>
.cpow {
    height: auto; 
    width: auto; 

    max-height: 600px;
}

</style>

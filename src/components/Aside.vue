<template>
      <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      class="grey lighten-4"
      app
    >
      <v-list
        dense
        class="grey lighten-4"
      >
        <template >
          <div>
          <v-list-tile
  
          >
            <v-list-tile-content>
              <v-list-tile-title>
                <P style="margin-left:40%">User</p>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
          >
          <v-list-tile-action >
              <P style="margin-left:10%" @click="navigateTo({'name':'login'})">Login</p>
            </v-list-tile-action>
          </v-list-tile>
          </div>
          <v-layout
            row
            align-center
          >
          </v-layout>
          <v-divider
            dark
            class="my-3"
          ></v-divider>
          <v-list-tile
            @click=""
          >
            <v-list-tile-action>
              <v-icon>add</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grey--text">
                Create new label
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
</template>

<script>

export default {
 data (){
   Vue.prototype.$drawer
   return{
     drawer:null
   }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

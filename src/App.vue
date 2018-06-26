<template>
  <v-app >
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      class="grey lighten-4"
      width="250"
      app 
      v-if="l==false">
      <v-list dense class="grey lighten-4" >
        <template >
          <div>
               <v-list-tile @click="navigateTo({'name':'/'})" >
                  <v-list-tile-action>
                      <v-icon>home</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>
                        Home
                   </v-list-tile-title>
                  </v-list-tile-content>
              </v-list-tile>

              <v-list-tile @click="navigateTo({'name':'Login'})" >
                  <v-list-tile-action>
                      <v-icon>fingerprint</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>
                        Login
                   </v-list-tile-title>
                  </v-list-tile-content>
              </v-list-tile>

              <v-list-tile @click="navigateTo({'name':'Register'})" >
                  <v-list-tile-action>
                      <v-icon>how_to_reg</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>
                        Register
                   </v-list-tile-title>
                  </v-list-tile-content>
              </v-list-tile>

              <v-list-tile @click="navigateTo({'name':'Dashboard'})" >
                  <v-list-tile-action>
                      <v-icon>dashboard</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>
                        Dashboard
                   </v-list-tile-title>
                  </v-list-tile-content>
              </v-list-tile>

             <v-list-tile @click="logout" >
                  <v-list-tile-action>
                      <v-icon>power_settings_new</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>
                        Logout
                   </v-list-tile-title>
                  </v-list-tile-content>
              </v-list-tile>
        </div>

          <v-layout row align-center >
          </v-layout>
          <v-divider dark class="my-3"></v-divider>

          <v-list-tile @click=""   >
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
    <v-toolbar flat color="green lighten-2" app  clipped-left v-if="l==false">
      <v-toolbar-side-icon @click.native="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5">Dairy Analytics</span>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat to="/">Home</v-btn>
          <v-btn flat to="/register">Register</v-btn>
          <v-btn flat to="/login">Login</v-btn>
          <v-btn flat to="/dashboard">Dashboard</v-btn>
    </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container  fluid  fill-height>  
        <v-layout row wrap>
          <v-flex xs12>      
             <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
       <span>&copy; Bart</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  methods:{
    navigateTo({"name":route}){
      this.$router.push(route)
      console.log('pressed',route)
    },
    logout(){
      console.log('logout')
    }
  },
  data(){
    return{
      drawer:true,
      l:false,
      items: [
        { icon: 'perm_identity', text: 'USER' },
        { icon: 'touch_app', text: 'Login' },
        { divider: true },
        { heading: 'Labels' },
        { icon: 'add', text: 'Create new label' },
        { divider: true },
        { icon: 'archive', text: 'Archive' },
        { icon: 'delete', text: 'Trash' },
        { divider: true },
        { icon: 'settings', text: 'Settings' },
        { icon: 'chat_bubble', text: 'Trash' },
        { icon: 'help', text: 'Help' },
        { icon: 'phonelink', text: 'App downloads' },
        { icon: 'keyboard', text: 'Keyboard shortcuts' }
      ]
    }
  }
}
</script>

<style>
  #keep main .container {
    height: 660px;
  }
  .navigation-drawer__border {
    display: none;
  }
  .text {
    font-weight: 400;
  }

</style>

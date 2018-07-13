<template>
      <v-layout align-center>
        <v-flex xs12 sm6 offset-sm3>
          <v-card  colo>
             <v-card-title class="justify-center" primary-title>
                <div class="headline">Put your Name, Email and password to register</div>
              </v-card-title>
              <v-card-text>
               <v-divider></v-divider>
               <v-form v-model="valid">
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  :counter="10"
                  label="Name"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required>
                  </v-text-field>

                   <v-text-field
                  v-model="password"
                  :rules="passwordrules"
                  :counter="10"
                  label="password"
                  type="password"
                  required
                ></v-text-field>
                 <v-text-field
                  v-model="password1"
                  :rules="passwordrules"
                  :counter="10"
                  label="Repeat password"
                  type="password"
                  required
                ></v-text-field>
                {{passmsg}}
                 </v-form>
               </v-card-text>
               <v-card-actions>
                 <v-checkbox
                  v-model="checkbox"
                  :rules="[v => !!v || 'You must agree to continue!']"
                  label="Do you agree with the terms and conditions?"
                  required>
                  </v-checkbox>
              <v-btn  color="success" @click="register">Register</v-btn>
            </v-card-actions>
      </v-card>
        </v-flex>
      </v-layout>
</template>

<script>
import Authservice from '@/services/authService'
export default {
 data: () => ({
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      password:'',
      password1:'',
      passwordrules:[
        p=> !!p || 'Enter a password',
      ],
       checkbox: false,
       passmsg:null
    }),
    // the register method
  methods:{
    async register(){
      try{
        if(this.password===this.password1){
         const response = await Authservice.register({
          name: this.name,
          email:  this.email,
          password:  this.password
      })
      this.passmsg=null 
      console.log(response.data)
      this.$store.dispatch('setToken', response.data.token)
<<<<<<< HEAD
=======
      this.$router.push({name:"Dashboard"})
>>>>>>> ae59f1c8d7e9e29a17a8e5ece6c6680e4d38de93
      }else{
      this.passmsg = 'password did not match'
      }
      console.log(this.passmsg)
      }catch(error){

        this.err = error.response.data.error
        console.log(this.err)
      }
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

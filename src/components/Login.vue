<template>
      <v-layout align-center>
        <v-flex xs12 sm6 offset-sm3>
          <v-card flat="true">
      
             <v-card-title class="justify-center" primary-title>
                <div class="headline">Put your Email and password to Login</div>
              </v-card-title>
              <v-card-text>
              <v-divider></v-divider>
              <v-form v-model="valid">
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
                 </v-form>
              </v-card-text>
              
              <v-btn block  color="success">Login</v-btn>
           
      </v-card>
        </v-flex>
      </v-layout>
</template>

<script>
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
      passwordrules:[
        p=> !!p || 'Enter a password'
      ],
       checkbox: false
    })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

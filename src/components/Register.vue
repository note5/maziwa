<template>
      <v-layout align-center>
        <v-flex xs12 sm6 offset-sm3>
          <v-card >
             <v-card-title class="justify-center" primary-title>
                <div class="headline">Put your Name, Email and password to register</div>
              </v-card-title>
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
                 </v-form>
               <v-card-actions>
                 <v-checkbox
                  v-model="checkbox"
                  :rules="[v => !!v || 'You must agree to continue!']"
                  label="Do you agree with the terms and conditions?"
                  required>
                  </v-checkbox>
              <v-btn  flat color="success">Register</v-btn>
            </v-card-actions>
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
      password1:'',
      passwordrules:[
        p=> !!p || 'Enter a password',
        p=> this.password1 !=p || 'Password did not match'
      ],
       checkbox: false
    })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

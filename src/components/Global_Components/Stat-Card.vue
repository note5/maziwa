<template >
  <div class="headline">
      <v-card  height="100" class="ma-1" color="grey lighten-2">
          <v-card-text @click="2" style="cursor:pointer">
              <span class="display-2">{{value}}</span>
              <small>{{unitf}}</small><br>
              <small> {{comment}}</small>
          </v-card-text>
      </v-card>
  </div>
</template>

<script>
export default {
  props:['value', 'unitf', 'comment']
}
</script>

<style lang="css">
</style>

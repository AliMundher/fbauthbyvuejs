<template>
  <v-container>
    <div class="home">
      <!-- Start First Row of Info Personne -->
      <v-row class="mt-4">
        <v-col>
          <div class="myinfo">
            <img src="" alt="" class="image" />
            <div class="persone">
              <h1 class="name mb-0 subtitle-3 text-capitalize">
                monther saeed
              </h1>
              <h1 class="ham text-capitalize">hamilton</h1>
            </div>
          </div>
        </v-col>
      </v-row>
      <!-- End First Row of Info Personne -->
      <!-- Start Second Row of Info Personne -->
      <h2 class="blue-grey--text lighten-5">Attendances</h2>
      <p class="blue-grey--text lighten-5">
        Use the following buttons at the right moment to encode your
        attendances.
      </p>
      <v-row
        class="blue-grey lighten-5 mt-4 pa-2"
        v-for="v in valuesInput"
        :key="v.name"
      >
        <!-- Start Column My Location -->
        <v-col cols="12" md="4">
          <h4 class="caption text-capitalize">my location</h4>
          <v-btn outlined class="mr-2 blue-grey--text darken-1" @click="save">
            <v-icon left color="deep-orange accent-3">home</v-icon>
            {{ v.location[0] }}</v-btn
          >
          <v-btn outlined class="blue-grey--text darken-1" @click="save">
            <v-icon left color="deep-orange accent-3">corporate_fare</v-icon>
            {{ v.location[1] }}</v-btn
          >
        </v-col>
        <!-- End Column My Location -->
        <!-- Start Column Morning -->
        <v-col xs="6" sm="3" md="2">
          <h4 class="caption text-capitalize">morning</h4>
          <v-btn
            outlined
            class="mr-2 blue-grey--text darken-1"
            v-model="valuesInput.date"
            @click="save"
          >
            <v-icon left color="deep-orange accent-3">schedule</v-icon>
            {{ v.date.morning }}</v-btn
          >
        </v-col>
        <!-- End Column Morning -->
        <!-- Start Column Lunch -->
        <v-col xs="6" sm="3" md="2">
          <h4 class="caption text-capitalize">lunch</h4>
          <v-btn
            outlined
            class="mr-2 blue-grey--text darken-1"
            v-model="valuesInput.date"
            @click="save"
          >
            <v-icon left color="deep-orange accent-3">schedule</v-icon>
            {{ v.date.lunch }}</v-btn
          >
          <p class="caption">
            Active from <span class="deep-orange--text accent-3">09:00</span> to
            <span class="deep-orange--text accent-3">13:20</span>
          </p>
        </v-col>
        <!-- End Column Lunch -->
        <!-- Start Column Noon -->
        <v-col xs="6" sm="3" md="2">
          <h4 class="caption text-capitalize">noon</h4>
          <v-btn
            outlined
            class="mr-2 blue-grey--text darken-1"
            v-model="valuesInput.date"
            @click="save"
          >
            <v-icon left color="deep-orange accent-3">schedule</v-icon>
            {{ v.date.noon }}</v-btn
          >
          <p class="caption">
            Active from <span class="deep-orange--text accent-3">13:20</span> to
            <span class="deep-orange--text accent-3">17:00</span>
          </p>
        </v-col>
        <!-- End Column Noon -->
        <!-- Start Column Evening -->
        <v-col xs="6" sm="3" md="2">
          <h4 class="caption text-capitalize">evening</h4>
          <v-btn outlined class="mr-2 blue-grey--text darken-1" @click="save">
            <v-icon left color="deep-orange accent-3">schedule</v-icon>
            {{ v.date.evening }}</v-btn
          >
          <p class="caption">
            Active from <span class="deep-orange--text accent-3">13:30</span> to
            <span class="deep-orange--text accent-3">21:00</span>
          </p>
        </v-col>
        <!-- End Column Evening -->
      </v-row>
      <p class="blue-grey--text lighten-5 mt-5">
        Missed a checkpoint? Contact your coaches as soon as you can!
      </p>
      <!-- End Second Row of Info Personne -->
    </div>
  </v-container>
</template>

<script>
// import {auth} from '../fb';
export default {
  name: "HelloWorld",

  data: () => ({
    valuesInput: [
      {
        name: "monther saeed",
        location: ["home", "becode"],
        date: {
          evening: "17:30",
          noon: "13:30",
          lunch: "10:30",
          morning: "09:00",
        },
        city: ["liège", "gen", "bruxelles"],
      },
    ],
  }),
  methods: {
    save() {
      if (!this.valuesInput.name) {
        console.log("errrrrrrrrrrrror");
      } else {
        console.log(this.valuesInput);
      }
    },
  },
};
</script>

<style lang="scss">
.home {
  .myinfo {
    .image {
      width: 60px;
      height: 60px;
      border: 1px solid #546e7a;
    }
    .persone {
      position: relative;
      top: -69px;
      left: 73px;
      .name {
        color: #546e7a;
        font-size: 1.4rem;
      }
      .ham {
        font-size: 1.3rem;
        color: #546e7a;
      }
    }
  }
}
</style>

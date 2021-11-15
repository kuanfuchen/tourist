<template>
  <div class="weather">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <navHeader />
    <div class="container-fluid">
      <h4 class="row justify-content-start">{{ weatherText }}</h4>
      <a href="#/attractions" class="btn btn-outline-primary">景點</a>
    </div>
    <div class="">
      <div class="row">
        <div
          class="col-4 mb-3"
          v-for="(cityInfo, key) in weatherInfo"
          :key="key"
        >
          <div class="card">
            <div class="card-body">
              <h4 class="card-title text-primary">{{ cityInfo[0] }}</h4>
              <p class="card-text">
                <span style="font-size: 14px; margin-right: 10px">{{
                  cityInfo[1]
                }}</span
                >{{ cityInfo[2] }}
              </p>
              <p class="card-text">
                <span style="font-size: 14px; margin-right: 10px">{{
                  cityInfo[3]
                }}</span
                >{{ cityInfo[4] }}
              </p>
              <p class="card-text">
                <span
                  style="font-size: 14px; margin-right: 10px"
                  class="mr-3"
                  >{{ cityInfo[5] }}</span
                >{{ cityInfo[6] }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import navHeader from "@/components/navHeader.vue";
// import axios from "axios";
// import VueAxios from "vue-axios";
// import axios from axios
// import tab from "bootstrap/js/dist/tab.js";
export default {
  name: "Taiwantourist",
  components: {
    // HelloWorld,
    navHeader,
  },
  data() {
    return {
      weatherInfo: [],
      weatherText: "",
    };
  },
  methods: {
    getWeatherInfo() {
      this.axios({
        method: "get",
      }).then((response) => {
        const info = response.data.records;
        this.weatherText = info.datasetDescription;
        console.log(info);
        for (let i = 0; info.location.length > i; i++) {
          this.weatherInfo[i] = [];
          this.weatherInfo[i].push(info.location[i].locationName);
          for (
            let j = 0;
            info.location[i].weatherElement[0].time.length > j;
            j++
          ) {
            this.weatherInfo[i].push(
              info.location[i].weatherElement[0].time[j].startTime
              // info.location[i].weatherElement[0].time[j].parameter.parameterName
            );
            this.weatherInfo[i].push(
              // info.location[i].weatherElement[0].time[j].startTime
              info.location[i].weatherElement[0].time[j].parameter.parameterName
            );
          }
        }
      });
    },
  },
  watch: {},
  mounted() {
    // setTimeout(() => {
    this.getWeatherInfo();
    // }, 1000);
  },
};
</script>

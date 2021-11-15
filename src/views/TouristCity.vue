<template>
  <div>
    <div class="cardIndexShowadow" :style="navImage">
      <div class="container-xl d-flex justify-content-center">
        <div style="margin-top: 183px">
          <img src="../assets/storageView/Welcome.png" />
          <p style="font-size: 14px; color: white">
            台北、台中、台南、屏東、宜蘭。。。。遊遍台灣
          </p>
          <div style="width: 490px" class="d-flex">
            <input
              type="text"
              v-model="touristVal"
              class="form-control"
              placeholder="搜索旅遊(例如:臺北)"
            />
            <button
              type="button"
              :style="btnPinkSearchImg"
              class="align-self-center btn"
              @click="btnTouristFn"
            ></button>
          </div>
          <div class="d-flex mt-2" style="width: 490px">
            <select class="form-select selectRound" v-model="typeInfo">
              <option selected disabled>類別</option>
              <option
                v-for="(item, key) in selectType"
                :key="key"
                :value="item.value"
              >
                {{ item.type }}
              </option>
            </select>
            <select
              class="form-select selectRound"
              style="margin-left: 7px"
              v-model="cityInfo"
            >
              <option selected disabled>請選擇</option>
              <option
                v-for="(city, key) in selectCity"
                :key="key"
                :value="city.City"
              >
                {{ city.CityName }}
              </option>
            </select>
            <button
              type="button"
              class="align-self-center btn"
              :style="btnPinkPositionImg"
              @click="touristCityInfoCity"
            ></button>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import jsSHA from "jssha";
export default {
  name: "TouristCity",
  data() {
    return {
      selectCity: [],
      cityInfo: "請選擇",
      typeInfo: "類別",
      cityName: "",
      defaultImg: require("@/assets/defaultImage.jpg"),
      navImage: {
        height: "536px",
        margin: "20px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${require("@/assets/storageView/img02.png")})`,
      },
      btnPinkPositionImg: {
        width: "45px",
        height: "40px",
        marginLeft: "6px",
        backgroundImage: `url(${require("@/assets/storageView/icon4.png")})`,
      },
      btnPinkSearchImg: {
        width: "45px",
        height: "40px",
        marginLeft: "6px",
        backgroundImage: `url(${require("@/assets/storageView/icon5.png")})`,
      },
      displayModal: "",
      displayModalData: {
        Picture: {
          PictureUrl: [],
          PictureUrl1: "",
        },
        DescriptionDetail: "",
        Name: "",
        OpenTime: "",
        Address: "",
        Phone: "",
        WebsiteUrl: "",
      },
      pages: {
        total_page: "",
        page: "0",
        pageArr: [],
      },
      selectType: [
        {
          type: "景點",
          value: "ScenicSpot",
        },

        {
          type: "活動",
          value: "Activity",
        },
      ],
      touristVal: "",
      selectTypeCardInfo: [],
      showCardInfo: [],
      displayModal: "",
      teansformCity: true,
      modalImgLen: "",
      modalImgCurrent: "",
      modalImgLenIf: false,
    };
  },
  methods: {
    getAuthorizationHeader() {
      const AppID = `${process.env.VUE_APP_ID}`;
      const AppKey = `${process.env.VUE_APP_KEY}`;
      const GMTString = new Date().toGMTString();
      let ShaObj = new jsSHA("SHA-1", "TEXT");
      ShaObj.setHMACKey(AppKey, "TEXT");
      ShaObj.update("x-date: " + GMTString);
      const HMAC = ShaObj.getHMAC("B64");
      const Authorization =
        'hmac username="' +
        AppID +
        '", algorithm="hmac-sha1", headers="x-date", signature="' +
        HMAC +
        '"';
      return {
        Authorization: Authorization,
        "X-Date": GMTString,
      };
    },
    cityInfoFn() {
      this.axios({
        method: "get",
        url: "https://gist.motc.gov.tw/gist_api/V3/Map/Basic/City",
        headers: this.getAuthorizationHeader(),
      }).then((response) => {
        this.selectCity = response.data;
      });
    },
    btnTouristFn() {
      if (this.touristVal.length < 2) {
        return;
      }
      this.selectCity.filter((item) => {
        const cityValue = item.CityName.indexOf(this.touristVal);
        if (cityValue !== -1) {
          const cityVal = item.City;
          console.log(cityVal);
          this.$router.push({
            name: "TouristCityTourist",
            params: { city: cityVal },
          });
        }
      });
    },
    touristCityInfoCity() {
      if (this.cityInfo === "請選擇" || this.typeInfo === "類別") {
        return;
      }
      if (this.typeInfo === "ScenicSpot") {
        console.log(this.cityInfo);
        this.$router.push({
          name: "TouristCityTourist",
          params: { city: this.cityInfo },
        });
      } else if (this.typeInfo === "Activity") {
        this.$router.push({
          name: "TouristCityActive",
          params: { city: this.cityInfo },
        });
      }
    },
  },
  async mounted() {
    // const cityName = this.$route.params.city;
    await this.cityInfoFn();
  },
};
</script>
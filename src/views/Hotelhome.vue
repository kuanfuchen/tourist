<template>
  <div>
    <div class="cardIndexShowadow" :style="navImage">
      <div class="container-xl d-flex justify-content-center">
        <div style="margin-top: 183px">
          <img src="@/assets/storageView/Welcome.png" />
          <p style="font-size: 14px; color: white">
            台北、台中、台南、屏東、宜蘭。。。。遊遍台灣
          </p>
          <div style="width: 490px" class="d-flex">
            <input
              type="text"
              class="form-control"
              placeholder="搜索住宿(例:臺北)"
              v-model="liveVal"
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
// import Pagation from "@/components/Pagination.vue";
// import Modal from "bootstrap/js/src/modal.js";
export default {
  name: "Hotel",
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
        backgroundImage: `url(${require("@/assets/storageView/img03.png")})`,
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
          type: "美食",
          value: "Restaurant",
        },
        {
          type: "住宿",
          value: "Hotel",
        },
      ],
      showHotelCardInfo: [],
      showCardRestaurantInfo: [],
      liveVal: "",
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
    btnTouristFn() {
      if (this.liveVal.length < 2) {
        return;
      }
      this.selectCity.filter((item) => {
        const cityValue = item.CityName.indexOf(this.liveVal);
        if (cityValue !== -1) {
          const cityVal = item.City;
          console.log(cityVal);
          this.$router.push({
            name: "LiveHotel",
            params: { city: cityVal },
          });
        }
      });
    },

    cityInfoFn() {
      this.axios({
        method: "get",
        url: "https://gist.motc.gov.tw/gist_api/V3/Map/Basic/City",
        headers: this.getAuthorizationHeader(),
      }).then((response) => {
        this.selectCity = response.data;
        console.log(response.data);
      });
    },
    // touristDataFn(city, typeText) {
    //   let typeSelect;
    //   let citySelect;
    //   if (this.typeInfo === "類別" && this.cityInfo === "請選擇") {
    //     typeSelect = typeText;
    //     citySelect = city;
    //   } else {
    //     typeSelect = this.typeInfo;
    //     citySelect = this.cityInfo;
    //   }
    //   this.showHotelCardInfo = [];
    //   this.showCardRestaurantInfo = [];
    //   this.axios({
    //     method: "get",
    //     url: `https://ptx.transportdata.tw/MOTC/v2/Tourism/${typeSelect}/${citySelect}?$top=10`,
    //     headers: this.getAuthorizationHeader(),
    //   }).then((response) => {
    //     const data = response.data;
    //     console.log(data);
    //     if (typeSelect === "Restaurant") {
    //       for (let i = 0; data.length > i; i++) {
    //         this.cityName = data[0].City;
    //         this.showCardRestaurantInfo.push(data[i]);
    //         if (!this.showCardRestaurantInfo[i].Picture.PictureUrl1) {
    //           this.showCardRestaurantInfo[i].Picture.PictureUrl1 =
    //             this.defaultImg;
    //         }
    //       }
    //     } else if (typeSelect === "Hotel") {
    //       for (let i = 0; data.length > i; i++) {
    //         this.cityName = data[0].City;
    //         this.showHotelCardInfo.push(data[i]);
    //         if (!this.showHotelCardInfo[i].Picture.PictureUrl1) {
    //           this.showHotelCardInfo[i].Picture.PictureUrl1 = this.defaultImg;
    //         }
    //       }
    //     }

    //     // this.pages.total_page = Math.ceil(this.selectTypeCardInfo.length / 20);
    //     // this.pages.page = "1";
    //     // this.getPageInfoFn();
    //   });
    // },
    touristCityInfoCity() {
      if (this.cityInfo === "請選擇" || this.typeInfo === "類別") {
        return;
      }
      console.log(this.cityInfo);
      if (this.typeInfo === "Restaurant") {
        this.$router.push({
          name: "LiveFood",
          params: { city: this.cityInfo },
        });
      } else if (this.typeInfo === "Hotel") {
        this.$router.push({
          name: "LiveHotel",
          params: { city: this.cityInfo },
        });
      }
    },
  },
  async mounted() {
    await this.cityInfoFn();
    // await this.touristDataFn("Tainan", "Restaurant");
    // await this.touristDataFn("Keelung", "Hotel");
    // this.displayModal = new Modal(this.$refs.displayModal);
  },
};
</script>
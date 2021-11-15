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
    <div class="container-xl pxContainer">
      <div class="d-flex">
        <p style="font-size: 20px; font-weight: 600; margin-top: 80px">
          <img style="width: 20px" src="@/assets/storageView/iconsqure.png" />
          <span class="ms-1">熱門餐飲</span>
        </p>
      </div>
      <div class="pxContainer">
        <div class="row justify-content-center">
          <div
            @click="displayModalFn(info, 'Restaurant')"
            data-bs-toggle="modal"
            data-bs-target="#cardModal"
            v-for="(info, key) in showCardRestaurantInfo"
            style="width: 206px; margin: 0 5px 0 5px"
            class="page-item p-0"
            :key="key"
          >
            <div
              class="card mb-2 cardModalShowadow"
              style="width: 206px; hight: 243px; padding: 12px"
            >
              <div class="cardSiteImgBox">
                <img :src="info.Picture.PictureUrl1" class="cardSiteImg" />
              </div>
              <p class="ellipsis">
                {{ info.Name }}
              </p>
              <span class="text-start ellipsis"
                ><font-awesome-icon
                  class="pink"
                  :icon="['fas', 'map-marker-alt']"
                />{{ info.Address }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="container-xl pxContainer" style="margin-top: 80px">
        <p class="text-start" style="font-size: 20px; font-weight: 600">
          <img
            style="width: 20px"
            src="../assets/storageView/iconsqure.png"
            alt=""
            srcset=""
          />
          推薦住宿
        </p>
      </div>
      <!--  -->
      <div class="pxContainer">
        <div class="row justify-content-center">
          <div
            @click="displayModalFn(info, 'Restaurant')"
            data-bs-toggle="modal"
            data-bs-target="#cardModal"
            v-for="(info, key) in showHotelCardInfo"
            style="width: 206px; margin: 0 5px 0 5px"
            class="page-item p-0"
            :key="key"
          >
            <div
              class="card mb-2 cardModalShowadow"
              style="width: 206px; hight: 243px; padding: 12px"
            >
              <div class="cardSiteImgBox">
                <img :src="info.Picture.PictureUrl1" class="cardSiteImg" />
              </div>
              <p class="ellipsis">
                {{ info.Name }}
              </p>
              <span class="text-start ellipsis"
                ><font-awesome-icon
                  class="pink"
                  :icon="['fas', 'map-marker-alt']"
                />{{ info.Address }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <!-- Modal -->
      <div
        class="modal fade"
        id="cardModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        role="dialog"
        ref="displayModal"
      >
        <div class="modal-dialog" style="position: relative">
          <button
            type="button"
            class="ms-auto btn btn-pink py-0 px-2 dialogBtnPosition"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            X
          </button>
          <div class="modal-content text-black" style="padding: 16px">
            <div style="overflow: hidden;612px;height:459px">
              <img
                style="
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  object-position: center center;
                "
                :src="displayModalData.Picture.PictureUrl1"
                :alt="displayModalData.Name"
              />
            </div>
            <div v-if="modalImgLenIf" class="d-flex justify-content-end mt-1">
              <div class="btn-group me-2" role="group" aria-label="First group">
                <button
                  v-for="(num, key) in modalImgLen"
                  :key="key"
                  type="button"
                  class="btn btn-outline-pink"
                  @click="selectModalImgNumFn(num)"
                  :class="{ active: num === modalImgCurrent }"
                >
                  {{ num }}
                </button>
              </div>
            </div>
            <p
              style="font-size: 18px; font-weight: 400; margin-top: 22px"
              class="text-start"
            >
              {{ displayModalData.Name }}
            </p>
            <p style="font-size: 14px; font-weight: 400" class="text-start">
              {{ displayModalData.DescriptionDetail }}
            </p>
            <div class="row text-start" style="width: 100%; font-size: 14px">
              <p class="col-md-6">
                <img src="@/assets/storageView/iconTime.png" />
                <span class="ms-1">{{ displayModalData.OpenTime }}</span>
              </p>
              <p class="col-md-6">
                <img src="@/assets/storageView/iconticket.png" />
                <span class="ms-1">{{ displayModalData.WebsiteUrl }}</span>
              </p>
              <p class="col-md-6">
                <font-awesome-icon
                  class="pink"
                  :icon="['fas', 'map-marker-alt']"
                  style="font-size: 19px"
                />
                <span class="ms-1">{{ displayModalData.Address }}</span>
              </p>
              <p class="col-md-6">
                <img src="@/assets/storageView/iconphone.png" />
                <span class="ms-1">{{ displayModalData.Phone }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import jsSHA from "jssha";
import Modal from "bootstrap/js/src/modal.js";
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
      displayModal: "",
      teansformCity: true,
      modalImgLen: "",
      modalImgCurrent: "",
      modalImgLenIf: false,
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
    selectModalImgNumFn(num) {
      this.modalImgCurrent = num;
      this.displayModalData.Picture.PictureUrl1 =
        this.displayModalData.Picture.PictureUrl[num - 1];
    },
    displayModalFn(info, type) {
      console.log(info);
      this.displayModalData.DescriptionDetail = info.DescriptionDetail;
      this.displayModalData.Name = info.Name;
      this.displayModalData.Phone = info.Phone;
      this.displayModalData.Picture.PictureUrl = [];
      for (let i = 0; 5 > i; i++) {
        const name = `PictureUrl${i}`;
        if (info.Picture[name]) {
          this.displayModalData.Picture.PictureUrl.push(info.Picture[name]);
        }
      }
      if (this.displayModalData.Picture.PictureUrl.length === 0) {
        this.displayModalData.Picture.PictureUrl.push(this.defaultImg);
      }
      this.displayModalData.Picture.PictureUrl1 =
        this.displayModalData.Picture.PictureUrl[0];
      this.modalImgLen = this.displayModalData.Picture.PictureUrl.length;
      if (this.modalImgLen > 1) {
        this.modalImgLenIf = true;
      } else {
        this.modalImgLenIf = false;
      }
      this.modalImgCurrent = 1;
      if (type === "Hotel") {
        this.displayModalData.DescriptionDetail = info.Description;
        this.displayModalData.OpenTime = info.StartTime;
        this.displayModalData.Address = info.Location;
      } else if (type === "Restaurant") {
        this.displayModalData.DescriptionDetail = info.Description;
        this.displayModalData.OpenTime = info.OpenTime;
        this.displayModalData.Address = info.Address;
      }
    },
    //
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
    touristDataFn(city, typeText) {
      let typeSelect;
      let citySelect;
      if (this.typeInfo === "類別" && this.cityInfo === "請選擇") {
        typeSelect = typeText;
        citySelect = city;
      } else {
        typeSelect = this.typeInfo;
        citySelect = this.cityInfo;
      }
      this.showHotelCardInfo = [];
      this.showCardRestaurantInfo = [];
      this.axios({
        method: "get",
        url: `https://ptx.transportdata.tw/MOTC/v2/Tourism/${typeSelect}/${citySelect}?$top=10`,
        headers: this.getAuthorizationHeader(),
      }).then((response) => {
        const data = response.data;
        console.log(data);
        if (typeSelect === "Restaurant") {
          for (let i = 0; data.length > i; i++) {
            this.cityName = data[0].City;
            this.showCardRestaurantInfo.push(data[i]);
            if (!this.showCardRestaurantInfo[i].Picture.PictureUrl1) {
              this.showCardRestaurantInfo[i].Picture.PictureUrl1 =
                this.defaultImg;
            }
          }
        } else if (typeSelect === "Hotel") {
          for (let i = 0; data.length > i; i++) {
            this.cityName = data[0].City;
            this.showHotelCardInfo.push(data[i]);
            if (!this.showHotelCardInfo[i].Picture.PictureUrl1) {
              this.showHotelCardInfo[i].Picture.PictureUrl1 = this.defaultImg;
            }
          }
        }

        // this.pages.total_page = Math.ceil(this.selectTypeCardInfo.length / 20);
        // this.pages.page = "1";
        // this.getPageInfoFn();
      });
    },
    touristCityInfoCity() {
      if (this.cityInfo === "請選擇" || this.typeInfo === "類別") {
        return;
      }
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
    await this.touristDataFn("Tainan", "Restaurant");
    await this.touristDataFn("Keelung", "Hotel");
    this.displayModal = new Modal(this.$refs.displayModal);
  },
};
</script>
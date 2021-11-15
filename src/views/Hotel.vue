<template>
  <div>
    <div class="container-xl pxContainer">
      <div class="d-flex">
        <p style="font-size: 20px; font-weight: 600; margin-top: 80px">
          <img style="width: 20px" src="@/assets/storageView/iconsqure.png" />
          <span class="ms-1">推薦住宿</span>
        </p>
      </div>
      <div class="pxContainer">
        <div class="row justify-content-center">
          <div
            @click="displayModalFn(info, 'Hotel')"
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
      <Pagation
        :pages="pages"
        class="mt-2"
        @emit-page="getPageInfoFn"
      ></Pagation>
    </div>
  </div>
</template>
<script>
import jsSHA from "jssha";
import Pagation from "@/components/Pagination.vue";
import Modal from "bootstrap/js/src/modal.js";
export default {
  name: "Hotel",
  components: {
    Pagation,
  },
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
      hotelInfo: [],
      showHotelCardInfo: [],
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
    selectModalImgNumFn(num) {
      this.modalImgCurrent = num;
      this.displayModalData.Picture.PictureUrl1 =
        this.displayModalData.Picture.PictureUrl[num - 1];
    },
    displayModalFn(info, type) {
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
      this.displayModalData.DescriptionDetail = info.Description;
      this.displayModalData.OpenTime = info.StartTime;
      this.displayModalData.Address = info.Location;
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
      // this.showHotelCardInfo = [];
      this.hotelInfo = [];
      this.axios({
        method: "get",
        url: `https://ptx.transportdata.tw/MOTC/v2/Tourism/${typeSelect}/${citySelect}`,
        headers: this.getAuthorizationHeader(),
      }).then((response) => {
        const data = response.data;
        for (let i = 0; data.length > i; i++) {
          this.cityName = data[0].City;
          this.hotelInfo.push(data[i]);
          if (!this.hotelInfo[i].Picture.PictureUrl1) {
            this.hotelInfo[i].Picture.PictureUrl1 = this.defaultImg;
          }
        }

        this.pages.total_page = Math.ceil(this.hotelInfo.length / 20);
        this.pages.page = "1";
        this.getPageInfoFn();
      });
    },
    pageDisplay() {
      let temPageNum = parseInt(this.pages.page) + 2;
      if (temPageNum >= this.pages.total_page) {
        temPageNum = this.pages.total_page;
      }
      let tempOriginPageNum = parseInt(this.pages.page) - 2;
      if (tempOriginPageNum < 1) {
        tempOriginPageNum = 1;
      }
      for (let i = tempOriginPageNum; temPageNum >= i; i++) {
        if (i <= this.pages.total_page) {
          this.pages.pageArr.push(i);
        }
      }
    },
    getPageInfoFn(page = 1) {
      if (page < 1) {
        return;
      }
      this.pages.pageArr = [];
      this.pages.page = page;
      this.showHotelCardInfo = [];
      let finalPage = parseInt(page * 20);
      let forOriginVal = parseInt(page - 1) * 20;
      if (finalPage > this.hotelInfo.length) {
        finalPage = this.hotelInfo.length;
      }
      for (let i = forOriginVal; finalPage > i; i++) {
        this.showHotelCardInfo.push(this.hotelInfo[i]);
      }
      this.pageDisplay();
    },
  },
  watch: {
    "$route.params.city": {
      handler(val) {
        this.touristDataFn(val, "Hotel");
      },
    },
  },
  async mounted() {
    const cityName = this.$route.params.city;
    // await this.cityInfoFn();
    await this.touristDataFn(cityName, "Hotel");
    this.displayModal = new Modal(this.$refs.displayModal);
  },
};
</script>
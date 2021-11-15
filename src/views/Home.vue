
<template>
  <div class="home">
    <!-- <navHeader /> -->
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
    <div class="container-xl pxContainer">
      <div class="d-flex">
        <p class="" style="font-size: 20px; font-weight: 600; margin-top: 80px">
          <img style="width: 20px" src="@/assets/storageView/Vector.png" />
          <span class="ms-1">熱門城市</span>
        </p>
      </div>
      <div class="d-flex justify-content-center" style="position: relative">
        <button
          class="btn btn-outline-pink positionAbsolute btnCityPageRight"
          v-if="teansformCity"
          @click="teansformCity = false"
          style="font-size: 20px"
        >
          <font-awesome-icon :icon="['fas', 'angle-right']" />
        </button>
        <button
          class="btn btn-outline-pink positionAbsolute btnCityPageLeft"
          v-else
          @click="teansformCity = true"
          style="font-size: 20px"
        >
          <font-awesome-icon :icon="['fas', 'angle-left']" />
        </button>
        <div class="d-flex">
          <div class="cityIndexStyle">
            <div class="cityIconStyle">
              <img
                src="@/assets/storageView/map_M.png"
                style="width: 16px"
                alt=""
              />
              <span v-if="teansformCity">台北市</span>
              <span v-else>台<span class="cityNameSpace"></span>南</span>
            </div>
            <div class="" v-if="teansformCity">
              <router-link
                :to="{ name: 'TouristCityTourist', params: { city: 'Taipei' } }"
              >
                <img
                  class="selectCityImgTransition"
                  src="@/assets/storageView/fig1/taipei.png"
                  alt=""
                />
              </router-link>
            </div>
            <div class="" v-else>
              <router-link
                :to="{ name: 'TouristCityTourist', params: { city: 'Tainan' } }"
                ><img
                  class="selectCityImgTransition"
                  src="@/assets/storageView/fig2/tainan.png"
                />
              </router-link>
            </div>
          </div>
          <div style="margin-left: 13px" class="column">
            <div class="cityIndexhalfStyle">
              <div class="cityIconhalfStyle">
                <img src="@/assets/storageView/map_M.png" style="width: 16px" />
                <span v-if="teansformCity">新北市</span>
                <span v-else>高<span class="cityNameSpace"></span>雄</span>
              </div>
              <div v-if="teansformCity">
                <router-link
                  :to="{
                    name: 'TouristCityTourist',
                    params: { city: 'NewTaipei' },
                  }"
                  ><img
                    src="@/assets/storageView/fig1/newtaipei.png"
                    class="selectCityImgTransition"
                  />
                </router-link>
              </div>
              <div v-else>
                <router-link
                  :to="{
                    name: 'TouristCityTourist',
                    params: { city: 'Kaohsiung' },
                  }"
                  ><img
                    src="@/assets/storageView/fig2/kaoh.png"
                    class="selectCityImgTransition"
                  />
                </router-link>
              </div>
            </div>
            <div class="cityIndexhalfStyle" style="margin-top: 5px">
              <div class="cityIconhalfStyle">
                <img
                  src="@/assets/storageView/map_M.png"
                  style="width: 16px"
                  alt=""
                />
                <span v-if="teansformCity">桃園市</span>
                <span v-else>屏<span class="cityNameSpace"></span>東</span>
              </div>
              <div v-if="teansformCity">
                <router-link
                  :to="{
                    name: 'TouristCityTourist',
                    params: { city: 'Taoyuan' },
                  }"
                  ><img
                    src="@/assets/storageView/fig1/taoyu.png"
                    class="selectCityImgTransition"
                    alt=""
                  />
                </router-link>
              </div>
              <div v-else>
                <router-link
                  :to="{
                    name: 'TouristCityTourist',
                    params: { city: 'PingtungCounty' },
                  }"
                >
                  <img
                    src="@/assets/storageView/fig2/pingtun.png"
                    class="selectCityImgTransition"
                  />
                </router-link>
              </div>
            </div>
          </div>
          <div class="cityIndexStyle" style="margin-left: 13px">
            <div class="cityIconStyle">
              <img
                src="@/assets/storageView/map_M.png"
                style="width: 16px"
                alt=""
              />
              <span v-if="teansformCity">新竹市</span>
              <span v-else>宜<span class="cityNameSpace"></span>蘭</span>
            </div>
            <div v-if="teansformCity">
              <router-link
                :to="{
                  name: 'TouristCityTourist',
                  params: { city: 'Hsinchu' },
                }"
                ><img
                  src="@/assets/storageView/fig1/hsinchu.png"
                  class="selectCityImgTransition"
              /></router-link>
            </div>
            <div v-else>
              <router-link
                :to="{
                  name: 'TouristCityTourist',
                  params: { city: 'YilanCounty' },
                }"
                ><img
                  src="@/assets/storageView/fig2/yilan.png"
                  class="selectCityImgTransition"
              /></router-link>
            </div>
          </div>
          <div style="margin-left: 13px" class="column">
            <div class="cityIndexhalfStyle">
              <div class="cityIconhalfStyle">
                <img src="@/assets/storageView/map_M.png" style="width: 16px" />
                <span v-if="teansformCity"
                  >台<span class="cityNameSpace"></span>中</span
                >
                <span v-else>花<span class="cityNameSpace"></span>蓮</span>
              </div>
              <div v-if="teansformCity">
                <router-link
                  :to="{
                    name: 'TouristCityTourist',
                    params: { city: 'YilanCounty' },
                  }"
                  ><img
                    src="@/assets/storageView/fig1/taichung.png"
                    class="selectCityImgTransition"
                /></router-link>
              </div>
              <div v-else>
                <router-link
                  :to="{
                    name: 'TouristCityTourist',
                    params: { city: 'HualienCounty' },
                  }"
                  ><img
                    src="@/assets/storageView/fig2/hunlien.png"
                    class="selectCityImgTransition"
                  />
                </router-link>
              </div>
            </div>
            <div class="cityIndexhalfStyle" style="margin-top: 5px">
              <div class="cityIconhalfStyle">
                <img src="@/assets/storageView/map_M.png" style="width: 16px" />
                <span v-if="teansformCity"
                  >南<span class="cityNameSpace"></span>投</span
                >
                <span v-else>台<span class="cityNameSpace"></span>東</span>
              </div>
              <div v-if="teansformCity">
                <router-link
                  :to="{
                    name: 'TouristCityTourist',
                    params: { city: 'NantouCounty' },
                  }"
                  ><img
                    src="@/assets/storageView/fig1/nantou.png"
                    class="selectCityImgTransition"
                    alt=""
                /></router-link>
              </div>
              <div v-else>
                <router-link
                  :to="{
                    name: 'TouristCityTourist',
                    params: { city: 'TaitungCounty' },
                  }"
                  ><img
                    src="@/assets/storageView/fig2/taitung.png"
                    class="selectCityImgTransition"
                /></router-link>
              </div>
            </div>
          </div>
          <div class="cityIndexStyle" style="margin-left: 13px">
            <div class="cityIconStyle">
              <img src="@/assets/storageView/map_M.png" style="width: 16px" />
              <span v-if="teansformCity"
                >嘉<span class="cityNameSpace"></span>義</span
              >
              <span v-else>澎<span class="cityNameSpace"></span>湖</span>
            </div>
            <div v-if="teansformCity">
              <router-link
                :to="{
                  name: 'TouristCityTourist',
                  params: { city: 'ChiayiCounty' },
                }"
                ><img
                  src="@/assets/storageView/fig1/chiayi.png"
                  class="selectCityImgTransition"
              /></router-link>
            </div>
            <div v-else>
              <router-link
                :to="{
                  name: 'TouristCityTourist',
                  params: { city: 'PenghuCounty' },
                }"
                ><img
                  src="../assets/storageView/fig2/penghu.png"
                  class="selectCityImgTransition"
                />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-xl pxContainer" style="margin-top: 60px">
      <div class="d-flex">
        <p class="" style="font-size: 20px; font-weight: 600">
          <img style="width: 20px" src="@/assets/storageView/Vector.png" />
          <span class="ms-1">熱門活動</span>
        </p>
      </div>
      <div class="row justify-content-center">
        <div
          @click="displayModalFn(data, 'Activity')"
          data-bs-toggle="modal"
          data-bs-target="#cardModal"
          class="col-6 mb-3"
          :key="key"
          v-for="(data, key) in cardActiveInfo"
        >
          <div class="card cardModalShowadow">
            <div class="row g-0" style="padding: 16px">
              <div class="col-md-4">
                <div class="activeCardImgbox">
                  <img :src="data.Picture.PictureUrl1" class="activeCardImg" />
                </div>
              </div>
              <div class="col-md-8 ps-3">
                <div class="ms-3">
                  <p
                    class="card-title"
                    style="font-size: 16px; color: black; font-weight: 600"
                  >
                    {{ data.Name }}
                  </p>
                  <p
                    class="card-text ellipsisDescription"
                    style="font-size: 14px; color: #acacac"
                  >
                    {{ data.Description }}
                  </p>
                </div>
                <div
                  class="d-flex justify-content-between"
                  style="margin-top: 12px"
                >
                  <span class="px-3 ellipsis"
                    ><font-awesome-icon
                      class="pink"
                      :icon="['fas', 'map-marker-alt']"
                    />{{ data.Location }}</span
                  >
                  <button class="pink btn btn-outline-pink">活動詳情</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-xl pxContainer" style="margin-top: 60px">
      <div class="d-flex">
        <p style="font-size: 20px; font-weight: 600">
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
</template>

<script>
import jsSHA from "jssha";
import Pagation from "@/components/Pagination.vue";
import Modal from "bootstrap/js/src/modal.js";
export default {
  name: "Home",
  components: {
    Pagation,
  },
  data() {
    return {
      selectCity: [],
      cityInfo: "請選擇",
      typeInfo: "類別",
      cardActiveInfo: [
        {
          ID: "C2_315080000H_080478",
          Name: "2021大稻埕情人節",
          Description:
            "為慶祝七夕情人節，每年農曆七夕前周末於大稻埕周邊舉辦以情人為主題之煙火音樂展演活動，為全臺最經典之七夕情人慶典。2019年活動以「萬人一起唱情歌」為主題，除了歌手團體接力演出一首首情歌，並將施放情人煙火秀，現場還有浪漫花牆、愛情塗鴉牆、愛情文創市集、胖卡美食、清涼啤酒專區與有趣的體驗活動，並與北門相機商圈合作推出「大稻埕情人節攝影比賽」，歡迎你(妳)帶著情人或家人、朋友一起來大稻埕河岸享受浪漫的時光。本活動並結合在地商圈及產業推出前期活動，及與旅行社合作打造專屬遊程，邀請民眾走進街區，漫步臺北舊城區巷弄間，細細體會大稻埕經典小鎮魅力。※ 受疫情影響，2021大稻埕情人節煙火秀，將延期至10月16日舉辦。",
          Location: "臺北市 大同區",
          Address: "延平河濱公園",
          Organizer: "臺北市政府觀光傳播局",
          StartTime: "2021-10-16T00:00:00+08:00",
          EndTime: "2021-10-16T00:00:00+08:00",
          WebsiteUrl: "https://www.2021tpivalentinesday.com/",
          Picture: {
            PictureUrl1:
              "https://www.taiwan.net.tw/att/event/7856e6f6-8207-42c0-9a44-b3c1e5edc0a2.jpg",
            PictureDescription1:
              "480秒情人煙火秀照亮台北水岸夜空，讓所有人感到浪漫又幸福",
            PictureUrl2:
              "https://www.taiwan.net.tw/att/event/4da28e96-6122-4ada-85c2-68e3e1479868.jpg",
            PictureDescription2: "歌手、樂團輪番開唱，現場人潮擠滿活動草坪",
            PictureUrl3:
              "https://www.taiwan.net.tw/att/event/ef54b704-19bd-41d1-84a1-38c23a5c7a68.jpg",
            PictureDescription3:
              "攝影高手齊聚北門廣場，捕捉古蹟與煙火同框的經典畫面",
          },
          Position: {
            PositionLon: 121.507080078125,
            PositionLat: 25.054115295410156,
            GeoHash: "wsqqsbyyb",
          },
          Class1: "節慶活動",
          Class2: "藝文活動",
          City: "臺北市",
          SrcUpdateTime: "2021-11-11T01:12:57+08:00",
          UpdateTime: "2021-11-11T02:10:14+08:00",
        },
        {
          ID: "C2_315080000H_080437",
          Name: "2021臺北燈節",
          Description:
            "俗稱「小過年」的元宵節是源遠流長的傳統民俗節慶，臺北市政府自民國86年（西元1997年）辦理「臺北燈節」以來，歷經逾20年的蘊育及特色養成，成為民眾春節期間不可或缺的參觀去處，不僅將新年的歡慶氣氛導入城市行銷，更將傳承民俗元宵節慶文化規模足以媲美外國有名的盛大慶典，其成功之展演也成為各縣市競相仿效的目標，近年更利用互動科技與藝術表演，增添燈節魅力，提供賞燈民眾更多城市參與及創新體驗。※ 受疫情影響，2021臺北燈節延至耶誕節期間12月17日至26日辦理。",
          Location: "臺北市 萬華區",
          Address: "西園路",
          Organizer: "臺北市政府觀光傳播局",
          StartTime: "2021-12-17T00:00:00+08:00",
          EndTime: "2021-12-26T00:00:00+08:00",
          WebsiteUrl: "https://2021lanternfestival.taipei/tc/index.htm",
          Picture: {
            PictureUrl1:
              "https://www.taiwan.net.tw/att/event/3eddc7de-7beb-47b0-a69b-dfa10a527066.jpg",
            PictureDescription1: "西門主展演區主題燈「百變豬寶亮晶晶」",
            PictureUrl2:
              "https://www.taiwan.net.tw/att/event/10e2d259-3d1e-4a4b-9231-bee252aa6d3f.jpg",
            PictureDescription2:
              "臺北燈節重頭戲為「百變豬寶亮晶晶」主燈秀，吸引上萬民眾參觀及欣賞可愛模樣",
            PictureUrl3:
              "https://www.taiwan.net.tw/att/event/cd298512-a5ae-45a3-88ae-f09338f09b6c.jpg",
            PictureDescription3: "搖擺北門",
          },
          Position: {
            PositionLon: 121.49890899658203,
            PositionLat: 25.034622192382812,
            GeoHash: "wsqqkv2v1",
          },
          Class1: "節慶活動",
          Class2: "藝文活動",
          City: "臺北市",
          SrcUpdateTime: "2021-11-11T01:12:57+08:00",
          UpdateTime: "2021-11-11T02:10:14+08:00",
        },
        {
          ID: "C2_315080000H_080438",
          Name: "2021陽明山花季",
          Description:
            "每年吸引百萬以上花迷前來朝聖的陽明山花季，花季主要景點為陽明公園、花卉試驗中心等地，美麗的陽明山擁有豐富多元的生態資源及歷史文化，走進陽明山如同進入一本內容豐富色彩鮮艷的童話故事書，其中有八重櫻、昭和櫻、吉野櫻、平戶杜鵑等花卉上陣，在週末濛濛小雨、充滿大自然芬多精的氛圍中，讓陽明山花季更添意境。※ 受到疫情影響，2021陽明山花季實體活動全部取消。夜櫻點燈部分，花季期間仍維持晚間6-10點。",
          Location: "臺北市 北投區",
          Address: "湖山路二段26號",
          Organizer: "臺北市政府工務局公園路燈工程管理處",
          StartTime: "2021-02-05T00:00:00+08:00",
          EndTime: "2021-03-21T00:00:00+08:00",
          WebsiteUrl: "https://2020flower.travel.taipei/zh/ymsflower",
          Picture: {
            PictureUrl1:
              "https://www.taiwan.net.tw/att/event/b3f01fa1-7b01-4523-8d25-49d4b7d70c3e.jpg",
            PictureDescription1: "第二停車場八重櫻盛開",
            PictureUrl2:
              "https://www.taiwan.net.tw/att/event/6fe79f6c-927a-46e7-b9dc-89b2c8f9107e.jpg",
            PictureDescription2: "陽明公園王陽明銅像區金毛杜鵑盛開",
            PictureUrl3:
              "https://www.taiwan.net.tw/att/event/e8d11a23-164d-402a-950a-698e5f62a23c.jpg",
            PictureDescription3: "陽明公園噴水池夜景",
          },
          Position: {
            PositionLon: 121.54013061523438,
            PositionLat: 25.159212112426758,
            GeoHash: "wsqrjsng4",
          },
          Class1: "節慶活動",
          Class2: "藝文活動",
          City: "臺北市",
          SrcUpdateTime: "2021-11-11T01:12:57+08:00",
          UpdateTime: "2021-11-11T02:10:14+08:00",
        },
        {
          ID: "C2_315080000H_080546",
          Name: "合歡山國際暗空公園-星空清境跨年活動",
          Description:
            "南投縣與各單位多年於合歡山舉辦清境高山跨年晚會活動，今年將活動主軸由傳統跨年晚會轉化成為台灣高山星空遊程之體驗活動，以剛通過美國IDA認證的華語區第一座國際暗空公園作為宣傳主題，在擁有東南亞區最佳的星空觀測環境的合歡山上作為本次活動主舞台，透過現場天文導覽及專業器材進行互動體驗，使民眾有機會在臺灣高山漫天星斗下倒數跨年，用臺灣最美的山景迎接2021年的到來。※ 防疫優先，南投縣政府宣佈2020清境跨年活動採線上直播辦理。",
          Location: "南投縣 仁愛鄉",
          Address: "大同村定遠新村26-1號",
          Organizer: "南投縣政府、仁愛鄉公所",
          StartTime: "2020-12-31T00:00:00+08:00",
          EndTime: "2021-01-01T00:00:00+08:00",
          Picture: {
            PictureUrl1:
              "https://www.taiwan.net.tw/att/event/f401957f-72ff-4c95-9a51-b59a6194bed5.jpg",
            PictureDescription1: "火樹銀花",
            PictureUrl2:
              "https://www.taiwan.net.tw/att/event/73f19944-a9df-4d32-a895-05735b7c1443.jpg",
            PictureDescription2: "絢麗多彩",
            PictureUrl3:
              "https://www.taiwan.net.tw/att/event/7dbc0a7f-cd94-482a-9ad6-bbe2c940712c.jpg",
            PictureDescription3: "清境跨年演唱會",
          },
          Position: {
            PositionLon: 121.1570816040039,
            PositionLat: 24.04391860961914,
            GeoHash: "wsq0ucpcu",
          },
          Class1: "節慶活動",
          Class2: "藝文活動",
          City: "南投縣",
          SrcUpdateTime: "2021-11-11T01:12:57+08:00",
          UpdateTime: "2021-11-11T02:10:14+08:00",
        },
      ],
      defaultImg: require("@/assets/defaultImage.jpg"),

      navImage: {
        height: "536px",
        margin: "20px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${require("@/assets/storageView/img01.png")})`,
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
      selectTypeCardInfo: [],
      showCardRestaurantInfo: [],
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
      displayModal: "",
      teansformCity: true,
      modalImgLen: "",
      modalImgCurrent: "",
      modalImgLenIf: false,
      touristVal: "",
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
        console.log(response.data);
      });
    },
    autoRestaurantInfo() {
      this.axios({
        method: "get",
        url: `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/Tainan?$top=10`,
        headers: this.getAuthorizationHeader(),
      }).then((response) => {
        let restaurantData = response.data;
        for (let i = 0; restaurantData.length > i; i++) {
          this.showCardRestaurantInfo.push(restaurantData[i]);
        }
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
      if (type === "Activity") {
        this.displayModalData.DescriptionDetail = info.Description;
        this.displayModalData.OpenTime = info.StartTime;
        this.displayModalData.Address = info.Location;
      } else if (type === "Restaurant") {
        this.displayModalData.DescriptionDetail = info.Description;
        this.displayModalData.OpenTime = info.OpenTime;
        this.displayModalData.Address = info.Address;
      }
    },
  },
  mounted() {
    this.autoRestaurantInfo();
    this.cityInfoFn();
    this.displayModal = new Modal(this.$refs.displayModal);
  },
};
</script>
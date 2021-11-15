<template>
  <div>
    <div
      class="d-flex justify-content-between"
      style="height: 104px; margin: 0px 95px 0px 95px"
    >
      <div class="align-self-center row" style="margin-top: 5px">
        <a href="#" style="padding-top: 29px; padding-bottom: 18px">
          <img src="@/assets/storageView/taiwan.png" style="width: 80%" />
        </a>
      </div>
      <div class="" style="justify-content: end; margin-top: 52px">
        <!-- <a href="#/attractions" style="text-decoration: none"> -->
        <router-link
          :to="{ name: 'TouristCityTourist', params: { city: 'Taipei' } }"
          ><span><img src="@/assets/storageView/icon01.png" /></span
          ><span class="indexHeaderText" style="color: #ff1d6c">台灣景點</span>
        </router-link>
        <!-- </a> -->

        <router-link :to="{ name: 'Hotel' }">
          <span><img src="@/assets/storageView/icon02.png" /></span
          ><span class="indexHeaderText" style="color: #ffb72c">美食住宿</span>
        </router-link>
        <!-- <a href="#" style="text-decoration: none"
          ><span><img src="@/assets/storageView/icon03.png" /></span
          ><span class="indexHeaderText" style="color: #007350">景點交通</span>
        </a> -->
      </div>
    </div>
  </div>
</template>
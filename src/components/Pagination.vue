<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination d-flex justify-content-center">
        <li class="page-item" :class="{ disabled: pages.page === 1 }">
          <a
            class="page-link"
            @click="updatePage(pages.page - 1)"
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          class="page-item"
          v-for="(page, key) in pages.pageArr"
          :key="key"
          :class="{ active: pages.page === page }"
        >
          <a class="page-link" @click="updatePage(page)">{{ page }}</a>
        </li>
        <!-- <li class="page-item">
          <a class="page-link" @click="updatePage()">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" @click="updatePage()">3</a>
        </li> -->
        <li
          class="page-item"
          :class="{
            disabled: pages.page === pages.total_page,
          }"
        >
          <a
            class="page-link"
            @click="updatePage(pages.page + 1)"
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Pagination",
  props: ["pages"],
  methods: {
    updatePage(page) {
      this.$emit("emit-page", page);
    },
  },
};
</script>
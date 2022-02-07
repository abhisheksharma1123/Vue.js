<template>
  <div id="app">
    <h1>Two countries</h1>
    <ul>
      <country
        v-for="c in countries"
        :key="c.code"
        @deleteCountry="deleteCountry"
        :c="c"
        ><div>=====</div></country
      >
    </ul>
  </div>
</template>

<script>
import country from "@/components/country.vue";

export default {
  components: {
    country,
  },
  data() {
    return {
      countries: [
        { name: "India", code: "ind" },
        { name: "Pakistan", code: "pak" },
      ],
    };
  },
  methods: {
    deleteCountry(name) {
      this.countries = this.countries.filter((c) => c.name !== name);
    },
  },
  beforeCreate() {
    console.log("before create");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("before mount");
  },
  mounted() {
    console.log("mounted");
  },
};
</script>

<style lang="scss"></style>

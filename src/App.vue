<template>
  <div>
    <MainNav></MainNav>
    <div
      class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
    ></div>
  </div>
</template>

<script>
import MainNav from "@/components/MainNav.vue";
export default {
  name: "App",
  components: {
    MainNav,
  },
};
</script>

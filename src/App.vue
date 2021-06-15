<template>
  <Page_Header></Page_Header>
  <Page_Main></Page_Main>
  <Page_Footer></Page_Footer>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import Page_Header from '@/components/Page_Header.vue'
import Page_Main from '@/components/Page_Main.vue'
import Page_Footer from '@/components/Page_Footer.vue'

export default defineComponent({
  components:{
    Page_Header,Page_Main,Page_Footer
  },
  setup() {
    return {
      
    };
  },
});
</script>

<style lang="scss">
@import "@/scss/_style.scss";
</style>

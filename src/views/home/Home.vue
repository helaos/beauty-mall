<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import {getHomeMultidata} from 'network/home';
export default {
  name: 'Home',
  components: {
    NavBar
  },
  data() {
    return {
      banners: [],
      recommends: [],

    }
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner
      this.recommends = res.data.recommend
      // console.log(this.result);
    })
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #FFF;
}
</style>

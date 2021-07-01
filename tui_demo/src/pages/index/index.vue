<template>
  <view class="index">
    <text>{{ msg }}</text>
    <nut-overlay v-model:visible="show" :z-index="2000">
      <div class="wrapper">
        <div class="content">这里是正文</div>
      </div>
    </nut-overlay>
  </view>
</template>

<script>
import { ref } from "vue";
import "./index.styl";

export default {
  setup() {
    const show = true;
    return {
      show,
    };
  },
};
</script>

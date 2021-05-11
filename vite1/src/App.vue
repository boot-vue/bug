<template>
  <span>Copyright © 2019 - {{ year }} vbeats</span>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import dayjs from "dayjs";
import { message } from "ant-design-vue";

export default defineComponent({
  name: "CopyRight",
  setup() {
    const data = reactive({
      year: dayjs().year(),
    });

    message.success("xxxxxxxxxxxxxxxxxxxxxxxx", 0);

    return {
      ...data,
    };
  },
});
</script>

<style>
</style>

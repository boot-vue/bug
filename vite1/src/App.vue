<template>
  <span>Copyright © 2019 - {{ year }} vbeats</span>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue'
import dayjs from "dayjs"

export default defineComponent({
  name: "CopyRight",
  setup() {
    const data = reactive({
      year: dayjs().year()
    })

    return {
      ...data
    }
  }
})
</script>

<style>
</style>

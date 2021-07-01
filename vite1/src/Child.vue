
<template>
  <a-modal :visible="true" title="Basic Modal" @cancel="handleCancle">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-modal>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Child",
  emits: ["handleCancle"],
  setup(props, { emit }) {
    const handleCancle = () => {
      console.log(111);
      emit("handleCancle");
    };
    return { handleCancle };
  },
});
</script>
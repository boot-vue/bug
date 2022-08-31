<script setup lang="ts">
const t1 = import.meta.env.VITE_XX;
const t2 = import.meta.env.VITE_OO;
const t3 = import.meta.env.VITE_XXOO;
</script>

<template>

value :{{ t1 }} / type : {{ typeof t1 }} <br />
value :{{ t2 }} / type : {{ typeof t2 }} <br />
value :{{ t3 }} / type : {{ typeof t3 }} <br />

</template>

<style scoped>
</style>

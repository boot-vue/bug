<template>
    <button @click="goIndex1">go to index1</button>
    <br />
    <br />
    <avue-tree :option="option">
    </avue-tree>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const goIndex1 = () => {
    router.replace({ name: 'index1' })
}


const option = ref({
    props: {
        labelText: '标题',
        label: 'xxx',
        value: 'ooo',
        children: 'children'
    }
})
</script>
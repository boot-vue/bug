<template>
    index2222222222222
    <avue-crud ref="crud" v-model:page="page" :data="datas" :option="option" :table-loading="loading"
        @refresh-change="listDatas" @search-change="listDatas" @size-change="listDatas" @current-change="listDatas">
    </avue-crud>

    <br />
    <br />
    <br />
    <button @click="goIndex1">go to inde1 </button>
</template>
  
<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const crud = ref()
const router = useRouter()

const datas = ref<any>([])
const loading = ref(true)

const page = ref({
    total: 0,
    currentPage: 1,
    pageSize: 30
})

const goIndex1 = () => {
    router.replace({ name: 'index1' })
}

const listDatas = (param?: any, done?: any) => {
    loading.value = true
    datas.value = [
        {
            code: '1111',
            type: 0
        },
        {
            code: '2222',
            type: 1
        }
    ]
    page.value.total = datas.value.length
    loading.value = false
    done && done()
}

listDatas()

const option = ref({
    border: true,
    menuWidth: 380,
    dialogWidth: '50%',
    column: [
        {
            label: '编号2222222',
            prop: 'code',
        },
        {
            label: '类型2222222222',
            prop: 'type',
            type: 'radio',
            dicData: [{ label: '菜单', value: 0 }, { label: '按钮', value: 1 }],
            value: 0,
            rules: [
                { required: true, message: '类型不能为空', trigger: 'blur' }
            ]
        }
    ]
})
</script>
  
<style lang="stylus" scoped>
  
  </style>
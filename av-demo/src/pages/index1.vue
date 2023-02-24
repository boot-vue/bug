<template>
    <div>
        index11111111111
        <avue-crud ref="crud" v-model:page="page" :data="datas" :option="option" :table-loading="loading"
            @refresh-change="listDatas" @search-change="listDatas" @size-change="listDatas" @current-change="listDatas">
        </avue-crud>

        <br />
        <br />
        <br />
        <button @click="goIndex2">go to index2</button>
        <button @click="goIndex3">go to index3</button>
    </div>
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

const goIndex2 = () => {
    router.replace({ name: 'index2' })
}

const goIndex3 = () => {
    router.replace({ name: 'index3' })
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
            label: '编号',
            prop: 'code',
        },
        {
            label: '类型',
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
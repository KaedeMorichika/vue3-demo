import {ref, reactive, computed} from "vue";

export const setting = reactive({
    columnNum: ref(6),
    rowNum: ref(6),
    aimSize: '100px'
})
export const bindColumnNum = computed({
    get () {
        console.log(this)
        return this.setting.columnNum.toString()
    },
    set (val) { this.setting.columnNum = parseInt(val) }
})
export const bindRowNum = computed({
    get () { return this.setting.rowNum.toString() },
    set (val) { this.setting.rowNum = parseInt(val) }
})
import {ref, computed} from "vue";

export const useGameSetting = () => {
    const setting = {
        rowNum: ref(6),
        columnNum: ref(6),
        aimSize: '100px'
    }
    const bindRowNum = computed({
        get: () => setting.rowNum.value.toString(),
        set: (val) => setting.rowNum.value = parseInt(val)
    })
    const bindColumnNum = computed({
        get: () => setting.columnNum.value.toString(),
        set: (val) => setting.columnNum.value = parseInt(val)
    })
    return {setting, bindRowNum, bindColumnNum}
}

export default useGameSetting
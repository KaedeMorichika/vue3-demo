import {ref, computed} from "vue";

export const useGameSetting = () => {
    const setting = {
        rowNum: ref(6),
        columnNum: ref(6),
        aimSize: '100px'
    }
    const bindRowNum = computed({
        get () { return setting.rowNum.toString()},
        set (val) { return setting.rowNum = parseInt(val) }
    })
    const bindColumnNum = computed({
        get () { return setting.columnNum.toString()},
        set (val) { return setting.columnNum = parseInt(val) }
    })
    return {setting, bindRowNum, bindColumnNum}
}

export default useGameSetting
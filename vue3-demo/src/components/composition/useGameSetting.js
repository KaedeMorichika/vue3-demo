/**
 * エイム練習の設定に関するデータ・処理をまとめてある
 */

import {ref, computed} from "vue";

export const useGameSetting = () => {
    // Options APIでいう data
    const setting = {
        rowNum: ref(6),
        columnNum: ref(6),
        aimSize: ref('100px')
    }
    // Options APIでいう computed
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
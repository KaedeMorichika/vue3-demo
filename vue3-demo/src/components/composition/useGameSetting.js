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
        set: (val) => {
            if (parseInt(val) > 1) {
                setting.rowNum.value = parseInt(val)
            } else {
                setting.rowNum.value = 1
            }
        }
    })
    const bindColumnNum = computed({
        get: () => setting.columnNum.value.toString(),
        set: (val) => {
            if (parseInt(val) > 1) {
                setting.columnNum.value = parseInt(val)
            } else {
                setting.columnNum.value = 1
            }
        }
    })
    return {setting, bindRowNum, bindColumnNum}
}

export default useGameSetting
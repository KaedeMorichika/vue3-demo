<template>
    <div style="margin: 50px">
        <div style="width: 1000px; display: flex; justify-content: space-between; padding: 10px;">
            <div>
                <span>縦：</span><input v-model="setting.rowNum">
            </div>
            <div>
                <span>横：</span><input v-model="setting.columnNum">
            </div>
            <div>
                <span>エイムサイズ：</span><input v-model="setting.aimSize">
            </div>
            <div>
                <button @click="game">スタート！</button>
            </div>
        </div>
    </div>
    <div style="display: flex; flex-direction: row;">
        <div v-for="i in parseInt(setting.rowNum)" :key="i" style="display: flex; flex-direction: column">
            <AimTarget
                v-for="j in parseInt(setting.columnNum)" :key="j"
                :row-index="i - 1" :column-index="j - 1"
                :size="setting.aimSize"
                :marked="isMarkedTarget(i - 1, j - 1)"
                @click="hit(i - 1, j - 1)"
            ></AimTarget>
        </div>
    </div>
    <div v-show="!gameStatus.isGaming && gameStatus.score !== 0">
        スコア：{{gameStatus.score}}
    </div>
</template>

<script>
import useGameSetting from "@/components/composition/useGameSetting.js";
import useGameStatus from "@/components/composition/useGameStatus.js";
import AimTarget from "@/components/composition/AimTarget.vue";

export default {
    name: "CompositionDemo",
    components: {AimTarget},
    setup () {
        const {setting, bindRowNum, bindColumnNum}  = useGameSetting()
        const {gameStatus, game, hit, isMarkedTarget} = useGameStatus(setting)
        return {setting, gameStatus, bindRowNum, bindColumnNum, game, hit, isMarkedTarget}
    }
}
</script>

<style scoped>

</style>
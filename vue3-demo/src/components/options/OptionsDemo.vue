<template>
    <div style="margin: 50px">
        <div style="width: 1000px; display: flex; justify-content: space-between; padding: 10px;">
            <div>
                <span>縦：</span><input v-model="rowNum" :disabled="isGaming">
            </div>
            <div>
                <span>横：</span><input v-model="columnNum" :disabled="isGaming">
            </div>
            <div>
                <span>エイムサイズ：</span><input v-model="aimSize" :disabled="isGaming">
            </div>
            <div>
                <button @click="gameStart">スタート！</button>
            </div>
        </div>
        <div style="display: flex; flex-direction: row;">
            <div v-for="i in parseInt(rowNum)" :key="i" style="display: flex; flex-direction: column">
                <AimTarget
                    v-for="j in parseInt(columnNum)" :key="j"
                    :row-index="i - 1" :column-index="j - 1"
                    :size="aimSize"
                    :marked="isMarkedTarget(i - 1, j - 1)"
                    @click="onButtonClick(i - 1, j - 1)"
                ></AimTarget>
            </div>
        </div>
        <div v-show="!isGaming && score !== 0">
            スコア：{{score}}
        </div>
    </div>
</template>

<script>
import AimTarget from "@/components/options/AimTarget.vue";

export default {
    name: "OptionsDemo",
    components: {AimTarget},
    data () {
        return {
            columnNum: 6,
            rowNum: 6,
            aimSize: '100px',
            markedTarget: null,
            score: 0,
            isGaming: false
        }
    },
    methods: {
        gameStart () {
            this.initGame()
            this.game()
        },
        initGame () {
            this.score = 0
            this.isGaming = true
            this.markedTarget = this.generateMarkedTarget()
        },
        game () {
            // const gameTime = 60000
            const gameTime = 5000
            setTimeout(() => {
                this.endGame()
            }, gameTime)
        },
        endGame () {
            this.isGaming = false
            this.markedTarget = null
        },
        generateMarkedTarget() {
            return {
                row: this._getRandomInt(this.columnNum - 1),
                column: this._getRandomInt(this.rowNum - 1)
            }
        },
        onButtonClick (row, column) {
            if (this.isMarkedTarget(row, column)) {
                this.score++
                this.markedTarget = this.generateMarkedTarget()
            }
        },
        _getRandomInt(max) {
            return Math.floor(Math.random() * max);
        },
        isMarkedTarget (row, column) {
            if (this.markedTarget) {
                return row === this.markedTarget.row && column === this.markedTarget.column
            } else {
                return false
            }
        },
    }
}
</script>

<style scoped>

</style>
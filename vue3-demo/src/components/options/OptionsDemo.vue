<template>
    <div style="margin: 50px">
        <div style="width: 1000px; display: flex; justify-content: space-between; padding: 10px;">
            <div>
                <span>縦：</span><input type="number" min="1" v-model="bindRowNum" :disabled="gameStatus.isGaming">
            </div>
            <div>
                <span>横：</span><input type="number" min="1" v-model="bindColumnNum" :disabled="gameStatus.isGaming">
            </div>
            <div>
                <span>エイムサイズ：</span><input v-model="setting.aimSize" :disabled="gameStatus.isGaming">
            </div>
            <div>
                <button @click="game">スタート！</button>
            </div>
        </div>
        <div style="display: flex; flex-direction: row; justify-content: center">
            <div v-for="i in parseInt(setting.columnNum)" :key="i" style="display: flex; flex-direction: column">
                <AimTarget
                    v-for="j in parseInt(setting.rowNum)" :key="j"
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
    </div>
</template>

<script>
import AimTarget from "@/components/options/AimTarget.vue";
import {getRandomInt} from "@/utils/utils.js";

export default {
    name: "OptionsDemo",
    components: {AimTarget},
    data () {
        return {
            setting: {
                columnNum: 6,
                rowNum: 6,
                aimSize: '100px'
            },
            gameStatus: {
                isGaming: false,
                markedTarget: null,
                score: 0
            }
        }
    },
    methods: {
        game () {
            const gameTime = 5000
            this.initGame()
            setTimeout(() => {
                this.endGame()
            }, gameTime)
        },
        initGame () {
            this.gameStatus.score = 0
            this.gameStatus.isGaming = true
            this.gameStatus.markedTarget = this.generateMarkedTarget()
        },
        endGame () {
            this.gameStatus.isGaming = false
            this.gameStatus.markedTarget = null
        },
        generateMarkedTarget() {
            return {
                row: getRandomInt(parseInt(this.setting.columnNum) - 1),
                column: getRandomInt(parseInt(this.setting.rowNum) - 1)
            }
        },
        hit (row, column) {
            if (this.isMarkedTarget(row, column)) {
                this.gameStatus.score++
                this.gameStatus.markedTarget = this.generateMarkedTarget()
            }
        },
        isMarkedTarget (row, column) {
            if (this.gameStatus.markedTarget) {
                return parseInt(row) === this.gameStatus.markedTarget.row && parseInt(column) === this.gameStatus.markedTarget.column
            } else {
                return false
            }
        }
    },
    computed: {
        bindColumnNum: {
            get () {
                return this.setting.columnNum.toString()
            },
            set (val) {
                if (parseInt(val) > 1) {
                    this.setting.columnNum = parseInt(val)
                } else {
                    this.setting.columnNum = 1
                }
            }
        },
        bindRowNum: {
            get () {
                return this.setting.rowNum.toString()
            },
            set (val) {
                if (parseInt(val) > 1) {
                    this.setting.rowNum = parseInt(val)
                } else {
                    this.setting.rowNum = 1
                }
            }
        }
    }
}
</script>

<style scoped>

</style>
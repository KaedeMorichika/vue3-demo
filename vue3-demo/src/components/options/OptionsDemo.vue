<template>
    <div style="margin: 50px">
        <div style="display: flex; flex-direction: row;">
            <div v-for="i in rowNum" :key="i" style="display: flex; flex-direction: column">
                <AimTarget
                    v-for="j in rowNum" :key="j"
                    :row-index="i - 1" :column-index="j - 1"
                    :marked="isMarkedTarget(i - 1, j - 1)"
                    @click="onButtonClick(i - 1, j - 1)"
                ></AimTarget>
            </div>
        </div>
    </div>
</template>

<script>
import AimTarget from "@/components/options/AimTarget.vue";

export default {
    name: "OptionsDemo",
    components: {AimTarget},
    props: {
        columnNum: {
            type: Number,
            default: 6
        },
        rowNum: {
            type: Number,
            default: 6
        }
    },
    data () {
        return {
            markedTarget: this.generateMarkedTarget()
        }
    },
    methods: {
        generateMarkedTarget() {
            return {
                column: this._getRandomInt(this.rowNum - 1),
                row: this._getRandomInt(this.columnNum - 1)
            }
        },
        onButtonClick (row, column) {
            if (this.isMarkedTarget(row, column)) {
                this.markedTarget = this.generateMarkedTarget()
            }
        },
        _getRandomInt(max) {
            return Math.floor(Math.random() * max);
        },
        isMarkedTarget (row, column) {
            return row === this.markedTarget.row && column === this.markedTarget.column
        },
    }
}
</script>

<style scoped>

</style>
<template>
    <div class="target">
        <button :class="{marked: marked}" style="width: 100%; height: 100%" @click="onButtonClick"></button>
    </div>
</template>

<script>
export default {
    name: "AimTarget",
    props: {
        rowIndex: {
            type: Number,
            required: true
        },
        columnIndex: {
            type: Number,
            required: true
        },
        marked: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        onButtonClick () {
            this.$emit('click', {
                row: this.rowIndex,
                column: this.columnIndex
            })
        }
    }
}
</script>

<style scoped>
.target {
    width: 100px;
    height: 100px;
    border: 1px solid black;
}
.target button {
    background-color: white;
}
.target button.marked {
    background-color: crimson;
}
</style>
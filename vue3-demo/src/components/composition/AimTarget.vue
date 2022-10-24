<template>
    <div class="target" :style="{width: size, height: size}">
        <button :class="{marked: marked}" style="width: 100%; height: 100%" @click="onButtonClick"></button>
    </div>
</template>

<script>
export default {
    name: "AimTarget",
    props: {
        size: {
            type: String,
            default: '100px'
        },
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

</style>
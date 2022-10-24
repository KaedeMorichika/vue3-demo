<template>
    <div>
        <label>
            <input type="radio" v-model="apiSwitch" value="0">
            <span>OptionsApi</span>
        </label>
        <label>
            <input type="radio" v-model="apiSwitch" value="1">
            <span>CompositionApi</span>
        </label>
        <OptionsDemo v-show="parseInt(apiSwitch) === 0"></OptionsDemo>
        <CompositionDemo v-show="parseInt(apiSwitch) === 1"></CompositionDemo>
    </div>
</template>

<script>
import OptionsDemo from "@/components/options/OptionsDemo.vue";
import CompositionDemo from "@/components/composition/CompositionDemo.vue";

export default {
  name: 'App',
  data () {
    return {
      apiSwitch: 0
    }
  },
  components: {
      OptionsDemo,
      CompositionDemo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

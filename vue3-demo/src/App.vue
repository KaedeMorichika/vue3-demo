<template>
    <div>
        <label>
            <input type="radio" v-model="apiSwitch" value="options">
            <span>OptionsApi</span>
        </label>
        <label>
            <input type="radio" v-model="apiSwitch" value="composition">
            <span>CompositionApi</span>
        </label>
        <h3>{{ apiSwitch }}</h3>
        <OptionsDemo v-show="apiSwitch === 'options'"></OptionsDemo>
        <CompositionDemo v-show="apiSwitch === 'composition'"></CompositionDemo>
    </div>
</template>

<script>
import OptionsDemo from "@/components/options/OptionsDemo.vue";
import CompositionDemo from "@/components/composition/CompositionDemo.vue";

export default {
  name: 'App',
  data () {
    return {
      apiSwitch: 'options'
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

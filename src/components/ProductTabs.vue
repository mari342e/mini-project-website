<template>
  <div>
    <span class="tab" 
      :class="{ activeTab: selectedTab === tab }"
      v-for="(tab, index) in tabs" 
      :key="index" 
      @click="selectedTab = tab">
        {{ tab }}
    </span>

    <div v-show="selectedTab === 'Description'">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: ['Description', 'Video', 'Size & specs', 'Delivery', 'Reviews'],
      selectedTab: 'Description'       
    }
  }
}
</script>

<style lang="scss">
  .activeTab {
    background: $dark-accent-color;
    color: $light-accent-color;
  }
</style>



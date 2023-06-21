<script setup lang="ts">
defineProps<{
  msg3: string;
}>()
</script>

<script lang="ts">
export default {
  name: 'HelloWorldExtend'
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg3 }}</h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

</style>

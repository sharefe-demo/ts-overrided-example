<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<script lang="ts">
export default {
  name: 'HelloWorld'
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
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

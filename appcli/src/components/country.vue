<template>
  <div @click="$emit('deleteCountry', c.name)" style="cursor: pointer">
    <li>{{ c.name }}</li>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["c"],
};
</script>

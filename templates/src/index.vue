<!--
 * @Author: 肖槿
 * @Date: 2021-12-29 11:09:59
 * @Description: 模板index.vue
 * @LastEditors: 肖槿
 * @LastEditTime: 2021-12-29 14:03:07
 * @FilePath: \tiang-ui\templates\src\index.vue
-->
<template>
  <div class="tiang-{{name}}"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Tiang{{hump name}}',
  setup() {}
})
</script>

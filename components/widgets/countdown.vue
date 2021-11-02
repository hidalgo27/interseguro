<template>

    <div id="contadorCyber" class="flipdown"></div>

</template>

<script>
export default {
  name: "countdown",
  mounted() {
    new FlipDown(1635640365, 'contadorCyber').start()
  }
}
</script>

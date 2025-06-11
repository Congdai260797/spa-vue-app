<template>
  <div v-if="visible" class="loading-overlay">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
/* HTML: <div class="loader"></div> */
.loader {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  -webkit-mask: conic-gradient(from 15deg, #0000, #000);
  animation: l26 1s infinite steps(12);
}
.loader,
.loader:before,
.loader:after {
  background: radial-gradient(closest-side at 50% 12.5%, #2b2b2b 96%, #0000) 50%
      0/20% 80% repeat-y,
    radial-gradient(closest-side at 12.5% 50%, #2b2b2b 96%, #0000) 0 50%/80% 20%
      repeat-x;
}
.loader:before,
.loader:after {
  content: "";
  grid-area: 1/1;
  transform: rotate(30deg);
}
.loader:after {
  transform: rotate(60deg);
}

@keyframes l26 {
  100% {
    transform: rotate(1turn);
  }
}
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.spinner {
  border: 8px solid #f3f3f3;
  border-radius: 50%;
  border-top: 8px solid #3498db;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

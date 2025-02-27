<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      message: "Loading..."
    };
  },
  created() {
    fetch("/api/hello")
      .then(response => response.json())
      .then(data => {
        this.message = data.message;
      })
      .catch(error => {
        this.message = "Error loading message.";
        console.error("Error:", error);
      });
  }
};
</script>

<style scoped>
div {
    text-align: center;
    margin-top: 50px;
  }
</style>
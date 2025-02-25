<template>
  <v-app>
    <v-main>
      <v-container>
        <h1>{{ message }}</h1>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
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
<template>
  <div>
    <h1>{{ data.message }}</h1>
    <p>Signed by: {{ data.signedby.name }} Aged: {{ data.signedby.age }} Contacts: email {{ data.signedby.email }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        data: null
      };
    },
    created() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        try {
          const response = await fetch('/api/hello');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          this.data = data;
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    }
  };
</script>

<style scoped>
div {
    text-align: center;
    margin-top: 50px;
  }
</style>
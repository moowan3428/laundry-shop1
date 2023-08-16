<template>
    <div>
      <h2>ฟอร์มส่งรายการซักผ้า</h2>
      <form @submit.prevent="submitForm">
        <!-- Your form elements here -->
        <button type="submit">ส่งรายการซักผ้า</button>
      </form>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    methods: {
      ...mapActions(['saveSettings']), // Map Vuex action
      submitForm() {
        // Process form data
        const newSettings = {
          // Updated settings data
        };
        this.saveSettings(newSettings); // Call Vuex action to update settings
      }
    }
  };
  </script>
  
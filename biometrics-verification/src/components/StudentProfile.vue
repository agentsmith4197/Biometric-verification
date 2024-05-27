<template>
    <div class="h-screen flex flex-col bg-gray-900 text-white p-8">
      <h1 class="text-3xl font-bold mb-4">User Profile</h1>
      <div class="flex items-center mb-4">
        <img :src="userProfile.picture" class="w-20 h-20 rounded-full" :alt="userProfile.name">
        <div class="ml-4">
          <h2 class="text-3xl font-semibold">{{ userProfile.name }}</h2>
          <p class="text-gray-400 text-2x1">{{ userProfile.faculty }} - {{ userProfile.department }}</p>
          <p class="text-gray-400">Registration Number: {{ userProfile.registrationNumber }}</p>
          <p class="text-gray-400">Gender: {{ userProfile.gender }}</p>
        </div>
      </div>
      <!-- Additional profile details can be added here -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'Profile',
    data() {
      return {
        userProfile: {
          name: 'John Doe',
          picture: 'https://via.placeholder.com/120', // Adjust the picture size as needed
          faculty: 'Faculty of Science',
          department: 'Computer Science',
          registrationNumber: '20230001',
          gender: 'Male',
          // Add more profile information as needed
        }
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styling here if needed */
  </style>
  
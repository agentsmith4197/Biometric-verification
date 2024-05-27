<template>
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <!-- Left side: Logo -->
        <div class="text-white text-xl font-bold">
          ATTENDANCE SYSTEM
        </div>
        
        <!-- Right side: User profile -->
        <div class="flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile Picture"
            class="w-10 h-10 rounded-full"
          />
          <span class="ml-3 text-white">Username</span>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  
  <style scoped>
  /* Add any additional styling here if needed */
  </style>
  
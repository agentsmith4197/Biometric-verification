<template>
  <div class="h-screen flex bg-gray-900 text-white">
    <!-- Sidebar Navigation -->
    <div class="w-1/4 bg-gray-800 p-4 flex flex-col">
      <div class="text-center mb-8">
        <h1 class="text-2xl font-bold">ATTENDANCE SYSTEM</h1>
      </div>
      <!-- Navigation Links -->
      <div class="mb-4">
        <router-link to="/" class="flex items-center p-2 rounded hover:bg-gray-700">
          <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7m-9 11v-8h4v8m-4 0H5a2 2 0 01-2-2v-5a2 2 0 012-2h3m10 0h3a2 2 0 012 2v5a2 2 0 01-2 2h-3m-4 0h-4"></path>
              </svg>
          <span class="ml-2">Dashboard</span>
        </router-link>
      </div>
      <div class="mb-4">
        <router-link to="/students" class="flex items-center p-2 rounded hover:bg-gray-700">
          <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 19.388A8.966 8.966 0 003 13c0-1.848.567-3.564 1.533-4.977M15 21v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5M9 11a5 5 0 100-10 5 5 0 000 10zM21 11a5 5 0 10-10 0 5 5 0 0010 0z"></path>
              </svg>
          <span class="ml-2">Students</span>
        </router-link>
      </div>
      <div class="mb-4">
        <router-link to="/attendance-list" class="flex items-center p-2 rounded hover:bg-gray-700">
          <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <span class="ml-2">Attendance List</span>
        </router-link>
      </div>
      <div class="mb-4">
        <router-link to="/attendance-report" class="flex items-center p-2 rounded hover:bg-gray-700">
          <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2a4 4 0 10-2-7.464M15 17v-2a4 4 0 10-2-7.464M9 21h6"></path>
              </svg>
          <span class="ml-2">Attendance Record</span>
        </router-link>
      </div>
      <!-- User Profile -->
      
      <div class="flex-none mt-auto">
        <router-link to="/profile" class="flex items-center p-2 rounded hover:bg-gray-700">
        <div class="flex items-center p-2 rounded hover:bg-gray-700">
          <img class="w-10 h-10 rounded-full" src="https://via.placeholder.com/40" alt="User Profile">
          <span class="ml-2">User Name</span>
        </div></router-link>
      </div>
    </div>

    <!-- Main Content -->
    <div class="w-3/4 p-8 overflow-hidden flex flex-col">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style scoped>
.material-icons {
  font-size: 1.5rem;
}
</style>

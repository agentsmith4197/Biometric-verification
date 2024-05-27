<template>
  <div class="space-y-8 p-8 bg-gray-900 min-h-screen text-white">
    <!-- Welcome message -->
    <div class="bg-gray-800 p-6 rounded-lg shadow">
      <h2 class="text-3xl font-bold mb-2">Welcome, [User]!</h2>
      <p class="text-gray-400">Here's a summary of your attendance system activity.</p>
    </div>

    <!-- Statistics -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-gray-800 p-6 rounded-lg shadow hover:bg-gray-700 cursor-pointer">
        <h3 class="text-xl font-semibold">Total Students</h3>
        <p class="text-3xl font-bold ">200</p>
      </div>
      <div class="bg-gray-800 p-6 rounded-lg shadow hover:bg-gray-700 cursor-pointer">
        <h3 class="text-xl font-semibold">Present Today</h3>
        <p class="text-3xl font-bold">180</p>
      </div>
      <div class="bg-gray-800 p-6 rounded-lg shadow hover:bg-gray-700 cursor-pointer">
        <h3 class="text-xl font-semibold">Absent Today</h3>
        <p class="text-3xl font-bold">20</p>
      </div>
      <div class="bg-gray-800 p-6 rounded-lg shadow hover:bg-gray-700 cursor-pointer">
        <h3 class="text-xl font-semibold">Average Attendance</h3>
        <p class="text-3xl font-bold">90%</p>
      </div>
    </div>

    <!-- Recent activity -->
    <div class="bg-gray-800 p-6 rounded-lg shadow">
      <h3 class="text-2xl font-bold mb-4">Recent Activity</h3>
      <ul class="space-y-4">
        <li class="flex items-center">
          <div class="bg-blue-500 h-8 w-8 rounded-full flex items-center justify-center">
            <svg class="text-white w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3"></path>
            </svg>
          </div>
          <p class="ml-4 text-gray-300">Student John Doe marked as present</p>
        </li>
        <li class="flex items-center">
          <div class="bg-green-500 h-8 w-8 rounded-full flex items-center justify-center">
            <svg class="text-white w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3"></path>
            </svg>
          </div>
          <p class="ml-4 text-gray-300">Student Jane Smith marked as absent</p>
        </li>
        <li class="flex items-center">
          <div class="bg-red-500 h-8 w-8 rounded-full flex items-center justify-center">
            <svg class="text-white w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3"></path>
            </svg>
          </div>
          <p class="ml-4 text-gray-300">Attendance report generated</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
};
</script>

<style scoped>
/* Add any additional styling here if needed */
</style>

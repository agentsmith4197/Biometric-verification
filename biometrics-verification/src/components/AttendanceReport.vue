<template>
  <div class="h-screen flex flex-col bg-gray-900 text-white">
    <!-- Header -->
    <div class="flex-none p-4 bg-gray-800 shadow">
      <h2 class="text-3xl font-bold">Attendance Records</h2>
      <p class="text-gray-400">View and manage attendance records.</p>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Date Filter -->
      <div class="flex-none p-4 bg-gray-700 shadow mb-4">
        <label for="date" class="block text-gray-400 mb-2">Select Date:</label>
        <input 
          type="date" 
          id="date" 
          v-model="selectedDate" 
          @change="filterRecordsByDate" 
          class="w-full p-2 rounded bg-gray-600 text-white"
        />
      </div>

      <!-- Attendance Records List -->
      <div class="flex-1 overflow-auto p-4 bg-gray-800 rounded-lg shadow">
        <table class="w-full text-left">
          <thead>
            <tr class="text-gray-400">
              <th class="py-2 px-4">Student Name</th>
              <th class="py-2 px-4">Date</th>
              <th class="py-2 px-4">Status</th>
              <th class="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="record in filteredRecords" :key="record.id" class="border-b border-gray-700">
              <td class="py-2 px-4">{{ record.studentName }}</td>
              <td class="py-2 px-4">{{ formatDate(record.date) }}</td>
              <td class="py-2 px-4">
                <span :class="statusClass(record.status)">
                  {{ record.status }}
                </span>
              </td>
              <td class="py-2 px-4">
                <button @click="editRecord(record.id)" class="text-green-500 hover:underline mx-2">Edit</button>
                <button @click="deleteRecord(record.id)" class="text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AttendanceRecord',
  data() {
    return {
      selectedDate: new Date().toISOString().substr(0, 10),
      attendanceRecords: [
        { id: 1, studentName: 'John Doe', date: '2024-05-25', status: 'Present' },
        { id: 2, studentName: 'Jane Smith', date: '2024-05-24', status: 'Absent' },
        { id: 3, studentName: 'Alice Johnson', date: '2024-05-23', status: 'Present' },
        // Add more attendance records here
      ],
      filteredRecords: [],
    };
  },
  mounted() {
    this.filterRecordsByDate();
  },
  methods: {
    filterRecordsByDate() {
      this.filteredRecords = this.attendanceRecords.filter(record => record.date === this.selectedDate);
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString(undefined, options);
    },
    statusClass(status) {
      return {
        'text-green-500': status === 'Present',
        'text-red-500': status === 'Absent',
      };
    },
    editRecord(id) {
      // Implement edit record functionality here
      console.log(`Edit record with ID: ${id}`);
    },
    deleteRecord(id) {
      // Implement delete record functionality here
      console.log(`Delete record with ID: ${id}`);
    },
  },
};
</script>

<style scoped>
/* Add any additional styling here if needed */
</style>

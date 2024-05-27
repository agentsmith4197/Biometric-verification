<template>
  <div class="p-8 bg-gray-900 min-h-screen text-white">
    <!-- Header -->
    <div class="mb-8">
      <h2 class="text-3xl font-bold">Attendance List</h2>
      <p class="text-gray-400">View and manage attendance records here.</p>
    </div>

    <!-- Attendance Records -->
    <div class="bg-gray-800 p-6 rounded-lg shadow">
      <table class="w-full text-left">
        <thead>
          <tr class="text-gray-400">
            <th class="py-3 px-4">Student Name</th>
            <th class="py-3 px-4">Date</th>
            <th class="py-3 px-4">Status</th>
            <th class="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="record in attendanceRecords" :key="record.id" class="border-b border-gray-700">
            <td class="py-3 px-4">{{ record.studentName }}</td>
            <td class="py-3 px-4">{{ formatDate(record.date) }}</td>
            <td class="py-3 px-4">
              <span :class="statusClass(record.status)">
                {{ record.status }}
              </span>
            </td>
            <td class="py-3 px-4">
              <button @click="editRecord(record.id)" class="text-green-500 hover:underline mx-2">Edit</button>
              <button @click="deleteRecord(record.id)" class="text-red-500 hover:underline">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AttendanceList',
  data() {
    return {
      attendanceRecords: [
        { id: 1, studentName: 'John Doe', date: '2024-05-25', status: 'Present' },
        { id: 2, studentName: 'Jane Smith', date: '2024-05-25', status: 'Absent' },
        { id: 3, studentName: 'Alice Johnson', date: '2024-05-25', status: 'Present' },
        // Add more attendance records here
      ],
    };
  },
  methods: {
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

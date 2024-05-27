<template>
  <div class="h-screen flex flex-col bg-gray-900 text-white">
    <!-- Header -->
    <div class="flex-none p-4 bg-gray-800 shadow">
      <h2 class="text-3xl font-bold">Students</h2>
      <p class="text-gray-400">Manage student records.</p>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Students List -->
      <div class="flex-1 overflow-auto p-4 bg-gray-800 rounded-lg shadow">
        <table class="w-full text-left">
          <thead>
            <tr class="text-gray-400">
              <th class="py-2 px-4">Student Name</th>
              <th class="py-2 px-4">Class</th>
              <th class="py-2 px-4">Age</th>
              <th class="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in students" :key="student.id" class="border-b border-gray-700">
              <td class="py-2 px-4">{{ student.name }}</td>
              <td class="py-2 px-4">{{ student.class }}</td>
              <td class="py-2 px-4">{{ student.age }}</td>
              <td class="py-2 px-4">
                <router-link to="/profile"> <button @click="viewStudent(student.id)" class="text-blue-500 hover:underline mx-2">View</button></router-link>
                <button @click="editStudent(student.id)" class="text-green-500 hover:underline mx-2">Edit</button>
                <button @click="deleteStudent(student.id)" class="text-red-500 hover:underline">Delete</button>
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
  name: 'Student',
  data() {
    return {
      students: [
        { id: 1, name: 'John Doe', class: '10A', age: 15 },
        { id: 2, name: 'Jane Smith', class: '10B', age: 16 },
        { id: 3, name: 'Alice Johnson', class: '10A', age: 15 },
        // Add more student records here
      ],
    };
  },
  methods: {
    viewStudent(id) {
      // Implement view student functionality here
      console.log(`View student with ID: ${id}`);
    },
    editStudent(id) {
      // Implement edit student functionality here
      console.log(`Edit student with ID: ${id}`);
    },
    deleteStudent(id) {
      // Implement delete student functionality here
      console.log(`Delete student with ID: ${id}`);
    },
  },
};
</script>

<style scoped>
/* Add any additional styling here if needed */
</style>

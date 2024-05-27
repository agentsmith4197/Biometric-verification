import './assets/main.css'

// import { createApp } from 'vue'
// import { createPinia } from 'pinia'
// import App from './App.vue'

// const app = createApp(App)

// app.use(createPinia())

// app.mount('#app')

import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

// Import your components for each page
import Dashboard from './components/Dashboard.vue';
import Students from './components/Students.vue';
import AttendanceList from './components/AttendanceList.vue';
import AttendanceReport from './components/AttendanceReport.vue';
import StudentProfile from './components/StudentProfile.vue'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/students', component: Students },
  { path: '/attendance-list', component: AttendanceList },
  { path: '/attendance-report', component: AttendanceReport },
  { path: '/profile', component: StudentProfile}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');

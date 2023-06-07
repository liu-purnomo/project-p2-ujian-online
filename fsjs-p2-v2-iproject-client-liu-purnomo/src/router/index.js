import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExamExplanView from '../views/ExamExplanView.vue'
import QuestionsView from '../views/QuestionsView.vue'
import GradesView from '../views/GradesView.vue'
import ExamTableView from '../views/ExamTableView.vue'
import EditProfilView from '../views/EditProfilView.vue'
import AddQuestionView from '../views/AddQuestionView.vue'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ExaminationView from '../views/ExaminationView.vue'
import ExamConfirmView from '../views/ExamConfirmView.vue'
import EmailConfirmView from '../views/EmailConfirmView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/explanation',
      name: 'explanation',
      component: ExamExplanView
    },
    {
      path: '/questions',
      name: 'questions',
      component: QuestionsView
    },
    {
      path: '/grades',
      name: 'grades',
      component: GradesView
    },
    {
      path: '/exams',
      name: 'exams',
      component: ExamTableView
    },
    {
      path: '/settings',
      name: 'settings',
      component: EditProfilView
    },
    {
      path: '/add-question',
      name: 'add-question',
      component: AddQuestionView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/examination/:number',
      name: 'examination',
      component: ExaminationView,
    },
    {
      path: '/exam-start/:id',
      name: 'exam-start',
      component: ExamConfirmView,
    },
    {
      path: '/confirmation',
      name: 'confirmation',
      component: EmailConfirmView,
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (!localStorage.access_token) {
    if (to.name !== 'login' && to.name !== 'register' && to.name !== 'confirmation') {
      next('/login')
    } else {
      next()
    }
  } else {
    if (to.name == 'login' || to.name === 'register' || to.name === 'confirmation') {
      next('/')
    } else {
      next()
    }
  }
})

export default router

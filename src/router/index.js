import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'// 조금 느림
import DataBinding from '../views/DataBinding.vue'
import DataBindingInputText from '../views/DataBindingInputText.vue'
import DataBindingInputNumber from '../views/DataBindingInputNumber.vue'
import DataBindingTextarea from '../views/DataBindingTextarea.vue'
import DataBindingSelect from '../views/DataBindingSelect.vue'
import DataBindingCheckbox from '../views/DataBindingCheckbox.vue'
import DataBindingCheckBox2 from '../views/DataBindingCheckBox2.vue'
import DataBindingTset from '../views/DataBindingTset.vue'
import DataBindingAttribue from '../views/DataBindingAttribue.vue'
import DataBindingButton from '../views/DataBindingButton.vue'
import DataBindingClass from '../views/DataBindingClass.vue'
import DataBindingClass2 from '../views/DataBindingClass2.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')// 조금 빠름@@@
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/databindinginputtext',
    name: 'DataBindingInputText',
    component: DataBindingInputText
  },
  {
    path: '/databindinginputnumber',
    name: 'DataBindingInputNumber',
    component: DataBindingInputNumber
  },
  {
    path: '/databindingtextarea',
    name: 'DataBindingTextarea',
    component: DataBindingTextarea
  },
  {
    path: '/databindingselect',
    name: 'DataBindingSelect',
    component: DataBindingSelect
  },
  {
    path: '/databindingcheckbox',
    name: 'DataBindingCheckbox',
    component: DataBindingCheckbox
  },
  {
    path: '/databindingcheckbox2',
    name: 'DataBindingCheckBox2',
    component: DataBindingCheckBox2
  },
  {
    path: '/databindingtset',
    name: 'DataBindingTset',
    component: DataBindingTset
  },
  {
    path: '/databindingattribue',
    name: 'DataBindingAttribue',
    component: DataBindingAttribue
  },
  {
    path: '/databindingbutton',
    name: 'DataBindingButton',
    component: DataBindingButton
  },
  {
    path: '/databindingclass',
    name: 'DataBindingClass',
    component: DataBindingClass
  },
  {
    path: '/databindingclass2',
    name: 'DataBindingClass2',
    component: DataBindingClass2
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

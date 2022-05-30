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
import DataBindingStyle from '../views/DataBindingStyle.vue'
import DataBindingList from '../views/DataBindingList.vue'
import RenderingVif from '../views/RenderingVif.vue'
import RenderingVshow from '../views/RenderingVshow.vue'
import EventClick from '../views/EventClick.vue'
import EventClickSet7 from '../views/EventClickSet7.vue'
import EventClickAlert from '../views/EventClickAlert.vue'
import EventChange from '../views/EventChange.vue'
import EventKeyUp from '../views/EventKeyUp.vue'
import Computed from '../views/Computed.vue'
import Watch from '../views/Watch.vue'
import DataBindingList2 from '../views/DataBindingList2.vue'
import NestedComponent from '../views/NestedComponent.vue'
import ParentComponent from '../views/ParentComponent.vue'
import ParentComponent2 from '../views/ParentComponent2.vue'
import ParentComponent3 from '../views/ParentComponent3.vue'
import ParentComponent4 from '../views/ParentComponent4.vue'
import ParentComponent5 from '../views/ParentComponent5.vue'
import SlotModalLayout from '../views/SlotModalLayout.vue'
import ProvideInject from '../views/ProvideInject.vue'
import Calculator from '../views/Calculator.vue'
import CompositionApi from '../views/CompositionApi.vue'
import CompositionApi2 from '../views/CompositionApi2.vue'
import CompositionApi3 from '../views/CompositionApi3.vue'
import CompositionApi4 from '../views/CompositionApi4.vue'
import CompositionAPIProvide from '../views/CompositionAPIProvide.vue'
import Mixins from '../views/Mixins.vue'
import CustomDirective from '../views/CustomDirective.vue'
import KakaoLogin from '../views/KakaoLogin.vue'
import NaverLogin from '../views/NaverLogin.vue'
// import StoreAccess from '../views/StoreAccess.vue'
// import { computed } from 'vue'
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
  },
  {
    path: '/databindingstyle',
    name: 'DataBindingStyle',
    component: DataBindingStyle
  },
  {
    path: '/databindinglist',
    name: 'DataBindingList',
    component: DataBindingList
  },
  {
    path: '/renderingvif',
    name: 'RenderingVif',
    component: RenderingVif
  },
  {
    path: '/renderingvshow',
    name: 'RenderingVshow',
    component: RenderingVshow
  },
  {
    path: '/eventclick',
    name: 'EventClick',
    component: EventClick
  },
  {
    path: '/eventclickset7',
    name: 'EventClickSet7',
    component: EventClickSet7
  },
  {
    path: '/eventclickalert',
    name: 'EventClickAlert',
    component: EventClickAlert
  },
  {
    path: '/eventchange',
    name: 'EventChange',
    component: EventChange
  },
  {
    path: '/eventkeyup',
    name: 'EventKeyUp',
    component: EventKeyUp
  },
  {
    path: '/computed',
    name: 'Computed',
    component: Computed
  },
  {
    path: '/watch',
    name: 'Watch',
    component: Watch
  },
  {
    path: '/databindinglist2',
    name: 'DataBindingList2',
    component: DataBindingList2
  },
  {
    path: '/nestedcomponent',
    name: 'NestedComponent',
    component: NestedComponent
  },
  {
    path: '/parentcomponent',
    name: 'ParentComponent',
    component: ParentComponent
  },
  {
    path: '/parentcomponent2',
    name: 'ParentComponent2',
    component: ParentComponent2
  },
  {
    path: '/parentcomponent3',
    name: 'ParentComponent3',
    component: ParentComponent3
  },
  {
    path: '/parentcomponent4',
    name: 'ParentComponent4',
    component: ParentComponent4
  },
  {
    path: '/parentcomponent5',
    name: 'ParentComponent5',
    component: ParentComponent5
  },
  {
    path: '/slotmodallayout',
    name: 'SlotModalLayout',
    component: SlotModalLayout
  },
  {
    path: '/provideinject',
    name: 'ProvideInject',
    component: ProvideInject
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: Calculator
  },
  {
    path: '/compositionapi',
    name: 'CompositionApi',
    component: CompositionApi
  },
  {
    path: '/compositionapi2',
    name: 'CompositionApi2',
    component: CompositionApi2
  },
  {
    path: '/compositionapi3',
    name: 'CompositionApi3',
    component: CompositionApi3
  },
  {
    path: '/compositionapi4',
    name: 'CompositionApi4',
    component: CompositionApi4
  },
  {
    path: '/compositionapiprovide',
    name: 'CompositionAPIProvide',
    component: CompositionAPIProvide
  },
  {
    path: '/mixins',
    name: 'Mixins',
    component: Mixins
  },
  {
    path: '/customdirective',
    name: 'CustomDirective',
    component: CustomDirective
  },
  {
    path: '/kakaologin',
    name: 'KakaoLogin',
    component: KakaoLogin
  },
  {
    path: '/login',
    name: 'Login',
    component: NaverLogin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

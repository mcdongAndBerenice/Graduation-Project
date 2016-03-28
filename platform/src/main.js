import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';
import Main from './components/main.vue';
import BugList from './components/bugList.vue';
import BugInfo from './components/bugInfo.vue';
import SubmitBug from './components/submitBug.vue';
import CompanyList from './components/companyList.vue';
import UserList from './components/userList.vue';
import BugSummary from './components/bugSummary.vue';
import SignUp from './components/signUp.vue';
import SignIn from './components/signIn.vue';
// install Router
Vue.use(Router);
// install vue-resource which can communicate with the server
Vue.use(Resource);

var router = new Router();

router.map({
  "/BugList": {
    component: BugList,
    menuIndex: 0
  },
  "/BugInfo/:id":{
    component: BugInfo,
    name: "BugInfo",
    menuIndex: 0
  },
  "/SubmitBug": {
    component: SubmitBug,
    menuIndex: 1
  },
  "/BugSummary": {
    component: BugSummary,
    menuIndex: 2
  },
  "/UserList": {
    component: UserList,
    menuIndex: 3
  },
  "/CompanyList": {
    component: CompanyList,
    menuIndex: 4
  },
  "/SignUp": {
    component: SignUp,
    menuIndex: 5
  },
  "/SignIn": {
    component: SignIn,
    menuIndex: 6
  }
});

router.beforeEach(function(transition) {
  window.scrollTo(0, 0);
  var index = transition.to.menuIndex;
  $('#menu li').removeClass('active').eq(index).addClass('active');
  transition.next();
});

router.redirect({
  '*': '/BugList'
})

router.start(Main, '#main');

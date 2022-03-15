import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";

import VueSupabase from "vue-supabase";

Vue.use(VueSupabase, {
  supabaseUrl: "https://wycnvmvdrmklojxqsnzr.supabase.co",
  supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5Y252bXZkcm1rbG9qeHFzbnpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDY3MDgxNTksImV4cCI6MTk2MjI4NDE1OX0.ivlE42KPD3fk2wwfSL0N6XWSSZiWMO4su0F95jIIRAI",
  supabaseOptions: {},
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

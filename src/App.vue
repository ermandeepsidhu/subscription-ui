<template>
  <div id="appd" class="bg-gray-100 h-full w-full flex">
    <div class="container mx-auto max-w-md justify-center items-center content-center">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { authenticationService } from "./_services/authentication.service";
import { router } from "./_helpers/router";
import { Role } from "./_helpers/role";

export default {
  name: "App",
  data() {
    return {
      currentUser: null
    };
  },
  computed: {
    isAdmin() {
      return this.currentUser && this.currentUser.role === Role.Admin;
    }
  },
  created() {
    authenticationService.currentUser.subscribe(x => (this.currentUser = x));
  },
  methods: {
    logout() {
      authenticationService.logout();
      router.push("/login");
    }
  }
};
</script>

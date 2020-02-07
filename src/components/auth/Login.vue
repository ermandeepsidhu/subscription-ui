<template>
  <div class>
    <div>
      <div>
        <div class="rounded overflow-hidden shadow mt-20">
          <div class="text-center p-6">
            <img
              class="h-24 w-24 rounded-full mx-auto"
              src="https://uilogos.co/img/logomark/circle.png"
              alt="Logo"
            >
            <p class="pt-6 text-lg font-semibold text-blue-800">Welcome back!</p>
            <p class="text-sm text-gray-600">Enter your email and password.</p>
            <div class="mt-5">
              <router-link
                to="/auth/signup"
                class="border rounded-full py-2 px-4 text-xs font-semibold text-gray-700 hover:bg-blue-100"
              >New user? Sign Up</router-link>
            </div>
          </div>
          <div class="p-4">
            <div class="mb-4">
              <label class="uppercase text-gray-600 text-xs font-medium">Email address</label>
              <input
                type="email"
                placeholder="jane@example.com"
                class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none leading-normal"
              >
            </div>
            <div>
              <div class="flex justify-between">
                <label class="uppercase text-gray-600 text-xs font-medium">Password</label>
                <a href="#" class="uppercase text-blue-600 text-xs font-medium">Forgot?</a>
              </div>
              <input
                type="password"
                placeholder="********"
                class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none leading-normal"
              >
            </div>
          </div>
          <div class>
            <!-- First list item -->
            <div class="px-6 py-4 text-center">
              <button
                type="submit"
                class="bg-blue-600 text-white w-full border rounded py-2 px-4 text-xs font-semibold text-gray-70"
              >Log In</button>
            </div>
          </div>

          <div class="bg-gray-100 px-6 py-4 text-center">
            <span
              class="inline-block rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mr-2"
            >Privacy Policy</span>
            <span
              class="inline-block rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mr-2"
            >Terms of Service</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    logoUrl: String
  }
};
</script>

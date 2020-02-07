<template>
  <div class>
    <div>
      <div>
        <div class="rounded overflow-hidden mt-20 shadow-lg bg-white py-10 px-8">
          <div class="p-6">
            <p class="pt-6 text-xl font-semibold text-gray-800">Let's get you started</p>
            <p
              class="text-sm text-gray-800"
            >Try Manage my org and see if it works for your organization</p>
            <div class="mt-10 flex items-center">
              <div class="flex-auto">
                <input type="email" class="border p-2 w-full" placeholder="Work email">
              </div>
              <div class="ml-2">
                <a href="#" class="bg-black text-white py-2 px-4 border-0 rounded">Subscribe</a>
              </div>
            </div>
          </div>
          <div class="px-6 py-1 flex items-center mb-10">
            <div class="inline-block mr-2">
              <img
                src="https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"
                alt="logo"
                class="w-8 h-8"
              >
            </div>
            <div class="text-xs font-semibold text-gray-600">Or sign up with your google accout</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    msg: String
  }
};
</script>

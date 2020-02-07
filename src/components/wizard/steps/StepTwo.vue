<template>
  <div>
    <div class="text-center w-full">
      <h2 class="text-xl my-4 font-medium text-blue-800">Let's set up your company profile</h2>
      <p class="text-sm text-gray-600 pb-8">Tell us a little bit about your company</p>
    </div>
    <!-- Form fields -->
    <div>
      <div class="mb-4">
        <label class="uppercase text-gray-600 text-xs font-medium">Company name</label>
        <input
          type="text"
          placeholder="Acme corp."
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none leading-normal"
        >
      </div>
      <div class="mb-4">
        <label class="uppercase text-gray-600 text-xs font-medium">Address</label>
        <input
          type="text"
          placeholder="215 Acme St."
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none leading-normal"
        >
      </div>
      <div class="mb-4">
        <label class="uppercase text-gray-600 text-xs font-medium">Phone</label>
        <input
          type="text"
          placeholder="215 Acme St."
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none leading-normal"
        >
      </div>
      <div class="mb-4">
        <label class="uppercase text-gray-600 text-xs font-medium">Business type</label>
        <input
          type="text"
          placeholder="215 Acme St."
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none leading-normal"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WizardPage",
  props: {
    msg: String,
    progressInPercentage: {
      type: Number,
      default: 10
    },
    currentStep: {
      type: Number,
      default: 1
    },
    totalSteps: {
      type: Number,
      default: 9
    }
  },
  methods: {
    changeProgress: function(newPercentage) {
      this.progressInPercentage = newPercentage;
    },
    nextStep: function() {
      if (this.currentStep === this.totalSteps) return;
      //proceed to next step
      this.currentStep = this.currentStep + 1;
      this.progressInPercentage = (this.currentStep / this.totalSteps) * 100;
    },
    reset: function() {
      this.currentStep = 1;
      this.progressInPercentage = (this.currentStep / this.totalSteps) * 100;
    }
  }
};
</script>

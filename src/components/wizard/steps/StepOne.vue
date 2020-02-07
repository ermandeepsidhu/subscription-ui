<template>
  <div class="text-center">
    <h2 class="text-xl my-4 font-medium text-blue-800">Hi! I'm Ronnie your org agent</h2>
    <p class="text-sm text-gray-600 pb-8">I'll ask a few questions to help you set up your account</p>
    <p class="text-gray-800 font-semibold pb-8">Sound good?</p>
    <div class="mt-6 mb-16">
      <a
        href="javascript:;"
        v-on:click="nextStep"
        class="rounded py-2 px-4 font-semibold bg-orange-400 text-white hover:shadow"
      >Yes, get started</a>
      <div class="py-6" v-show="currentStep > 1">
        <a href="javascript:;" v-on:click="reset" class="py-2 px-4">Reset</a>
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

<template>
  <div class>
    <div>
      <div>
        <div class="rounded shadow-lg mt-20">
          <div class="p-6">
            <div class="text-center">
              <img
                class="h-24 w-24 rounded-full mx-auto -m-16"
                src="https://uilogos.co/img/logomark/circle.png"
                alt="Logo"
              >
            </div>
            <div class="pb-8 pt-20">
              <p
                class="text-sm text-gray-800 pb-2 font-bold text-center"
              >{{currentStep}} of {{totalSteps}}</p>
              <transition name="component-fade" mode="out-in">
                <StepOne v-if="currentStep === 1"/>
              </transition>
              <StepTwo v-if="currentStep === 2"/>
            </div>
            <!-- Next / Previous Buttons -->
            <div class="w-full flex justify-between pb-8">
              <div>
                <a
                  v-show="!isWizardAtFirstStep"
                  href="javascript:;"
                  v-on:click="previousStep"
                  class="rounded py-2 px-6 text-sm font-semibold border border-gray-200 text-teal-700 hover:bg-blue-100"
                >Back</a>
              </div>
              <div>
                <template v-if="isNextButtonDisabled">
                  <a
                    href="javascript:;"
                    class="rounded py-2 px-6 text-sm font-semibold bg-gray-200 text-gray-500 cursor"
                  >Next</a>
                </template>
                <template v-else>
                  <a
                    href="javascript:;"
                    v-on:click="nextStep"
                    class="rounded py-2 px-6 text-sm font-semibold bg-teal-700 text-white hover:shadow disabled:bg-gray-100"
                  >Next</a>
                </template>
              </div>
            </div>
            <!-- Progress Bar -->
            <div class="w-full">
              <div class="rounded-full w-full h-1 bg-gray-200">
                <div
                  class="rounded-full h-1 bg-teal-700 text-xs leading-none text-center text-white"
                  v-bind:style="{width: progressInPercentage  + '%'}"
                ></div>
              </div>
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
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";

export default {
  name: "WizardPage",
  components: {
    StepOne,
    StepTwo
  },
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
    },
    steps: {},
    nextButtonEnabled: {
      type: Boolean,
      default: true
    },
    backButtonEnabled: {
      type: Boolean,
      default: true
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
    previousStep: function() {
      if (this.currentStep === 1) return;
      //proceed to next step
      this.currentStep = this.currentStep - 1;
      this.progressInPercentage = (this.currentStep / this.totalSteps) * 100;
    },
    reset: function() {
      this.currentStep = 1;
      this.progressInPercentage = (this.currentStep / this.totalSteps) * 100;
    }
  },
  computed: {
    isWizardAtLastStep: function() {
      if (this.currentStep === this.totalSteps) return true;
      return false;
    },
    isWizardAtFirstStep: function() {
      if (this.currentStep === 1) return true;

      return false;
    },
    isNextButtonDisabled: function() {
      return !this.nextButtonEnabled;
    },
    renderStepView: function() {
      if (this.currentStep === 1) {
        return StepOne;
      } else if (this.currentStep === 2) {
        return StepTwo;
      }

      return StepOne;
    }
  }
};
</script>

<style scoped>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

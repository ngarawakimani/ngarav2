<template>
<div class="container px-0 py-4">
  <Navbar/>
  <div class="hireus pt-5">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-xl-8">
					<div class="section-title text-center">
					  <h1 class="section-name">HIRE US</h1>
            <p>Let's get to work! Please answer a couple of short questions about you and your project.</p>
					</div>
				</div>
			</div>
		</div>
		<div class="container pt-0 form-details">
			<div class="row justify-content-center">
        <div class="col-xl-12">
          <form @submit.prevent="submit" class="col-md-8 offset-md-2 text-left">
            <div class="col-xl-12 my-5">
              <div class="text-center">
                <h5 class="">ABOUT YOU</h5>
              </div>
            </div>
            <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
              <input class="form-control" v-model.trim="$v.name.$model" value="" placeholder="Name"/>
              <div class="error" v-if="submitStatus && !$v.name.required">Your name is required</div>
              <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
            </div>
            <div class="row my-5">
              <div class="col-md-6">
                <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
                  <input type="email" class="form-control" v-model.trim="$v.email.$model" value="" placeholder="Email"/>
                  <div class="error" v-if="submitStatus && !$v.email.required">Your email is required</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group" :class="{ 'form-group--error': $v.phone.$error }">
                  <input class="form-control" v-model.trim="$v.phone.$model" value="" placeholder="Phone"/>
                  <div class="error" v-if="submitStatus && !$v.phone.required">Your phone number is required</div>
                  <div class="error" v-if="!$v.phone.minLength">Phone number must have at least {{$v.phone.$params.minLength.min}} letters.</div>
                </div>
              </div>
            </div>
            <div class="col-xl-12 my-5">
              <div class="text-center">
                <h5 class="">ABOUT YOUR PROJECT</h5>
              </div>
            </div>
            <div class="form-group" :class="{ 'form-group--error': $v.project_about.$error }">
              <textarea rows="6" class="form-control" v-model.trim="$v.project_about.$model" value="" placeholder="Tell us about your project."></textarea>
              <div class="error" v-if="submitStatus && !$v.project_about.required">Please tell us about your project</div>
              <div class="error" v-if="!$v.project_about.minLength">About Project must have at least {{$v.project_about.$params.minLength.min}} letters.</div>
            </div>
            <div class="row my-5 pb-5">
              <div class="col-md-6">
                <p class="budget">What is your budget?</p>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <select class="form-control selectpicker" v-model.trim="$v.project_amount.$model">
                    <option v-for="project_amount_option of project_amount_options" :key="project_amount_option.name" :value=project_amount_option.name>{{project_amount_option.label}}</option>
                    <div class="error" v-show="project_amount_validation">Please tell us about your project</div>
                  </select>
                </div>
              </div>
            </div>
            <button class="btn btn-primary btn-block btn-submit mt-5" type="submit" :disabled="submitStatus === 'PENDING'">
              Lets Chat
              <i v-show="!btnSendLoading" class="ml-4 fa fa-arrow-right"></i>
              <i v-show="btnSendLoading" class="fa fa-spinner fa-spin" style="margin-left: 20px;"></i>
            </button>
            <span class="form-status">
              <p class="success" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
              <p class="error" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
              <p class="pending" v-if="submitStatus === 'PENDING'">Sending...</p>
              <p class="mt-5 text-center">The information above will be stored only for business purposes.</p>
            </span>
          </form>
        </div>
			</div>
    </div>
    <VueElevator :word="word" :duration="duration" :mainAudio="mainAudio" :endAudio="endAudio"></VueElevator>
  </div>
</div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import { VueElevator } from 'vue-elevator'
  import { validationMixin } from 'vuelidate'
  import axios from 'axios'
  import {
    required,
    email,
    helpers,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'

  export default {
    name: 'FormValidation',
    mixins: [validationMixin],
    components: {
      Navbar,
      VueElevator,
      validationMixin
    },
    head: {
      title: 'Kenyan Craftsmen of Web and Mobile Apps.',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Kenyan Craftsmen of Web and Mobile Apps' }
      ]
    },
    data () {
      return {
        name: '',
        email: '',
        phone: '',
        project_about: '',
        project_amount_validation: true,
        project_amount: 'choose_amount',
        project_amount_options: [
          {
            name: 'choose_amount',
            label: 'Choose Amount'
          },
          {
            name: 'over_500',
            label: 'Over Kshs 500,000'
          },
          {
            name: '300_500',
            label: 'Ksh 300,000 - Ksh 500,000'
          },
          {
            name: '100_300',
            label: 'Ksh 100,000 - Ksh 300,000'
          },
          {
            name: '30_100',
            label: 'Ksh 30,000 - Ksh 100,000'
          },
          {
            name: 'cant_disclose',
            label: 'Cant Disclose'
          },
          {
            name: 'not_sure',
            label: 'Not Sure'
          }
        ],
        btnSendLoading: false,
        submitStatus: null,
        word: "Go to Top",
        duration: 4000,
        mainAudio: "http://tholman.com/elevator.js/music/elevator.mp3",
        endAudio: "http://tholman.com/elevator.js/music/ding.mp3",
      }
    },
    validations: {
      name: {
        required,
        minLength: minLength(4)
      },
      email: {
        required,
        email
      },
      phone: {
        required,
        minLength: minLength(10)
      },
      project_about: {
        required,
        minLength: minLength(4)
      },
      project_amount: {
        required
      }
    },
    methods: {
      submit() {
        this.$v.$touch()
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR'
        } else {
          //
          this.btnSendLoading = true;
          axios.post('http://localhost:8000/api/sendmail', {
            name: this.name,
            email: this.email,
            phone: this.phone,
            project_about: this.project_about,
            project_amount: this.project_amount
          })
          .then(function (response) {
          })
          .catch(function (error) {
            console.log(error);
          });
          this.submitStatus = 'OK';
          this.btnSendLoading = false;
        }
      }
    }
  }
</script>

<style scoped>
  .hireus .section-title h1{
    font-family: 'DM Serif Display', serif;
    font-size: 120px;
    font-weight: 700;
    letter-spacing: 12px;
  }

  .hireus .section-title{
    font-size: 28px;
    line-height: 35px;
  }

  .form-details h5{
    color: var(--color-primary);
  }

  input, select , textarea{
    border: 2px solid silver;
    border-radius: 8px;
    background: transparent;
    padding: 20px 10px;
  }

  .btn-submit {
    padding: 20px 10px;
    border-radius: 8px;
    background-color: var(--color-primary);
    border-color: var(--color-primary);
  }

  .dirty {
    border-color: #5A5;
    background: #EFE;
  }

  .dirty:focus {
    outline-color: #8E8;
  }

  .error {
    color: red;
  }

  .error:focus {
    color: red;
  }

  .budget {
    font-size: 23px;
  }

  .form-status .success, .form-status .pending{
    color: var(--color-primary);
  }

</style>

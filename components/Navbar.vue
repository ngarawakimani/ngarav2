<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
		<div class="container-fluid">
			<a class="navbar-brand" href="/"><Logo /> <span class="mt-5"></span></a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarText">
				<ul class="navbar-nav ml-auto mb-lg-0">
					<li class="nav-item">
            <nuxt-link to="/" class="nav-link px-4 active">Home</nuxt-link>
					</li>
					<li class="nav-item">
            <nuxt-link to="/#service-row" class="nav-link px-4">Services</nuxt-link>
					</li>
					<li class="nav-item">
            <nuxt-link to="/#contact" class="nav-link px-4">Contacts</nuxt-link>
					</li>
				</ul>
				<span class="navbar-text ml-5">
					<ColorModePicker />
				</span>
				<span class="text-center text-md-left ml-5" id="navbar_button">
          <nuxt-link to="/hireus" class="btn btn-success shadow lift mr-1 px-4 py-2 rounded-5">
						<i class="fe fe-arrow-right d-none d-md-inline"></i> Hire Us
          </nuxt-link>
				</span>
			</div>
		</div>
  	</nav>
</template>

<script>
	import Logo from '@/components/Logo'
  import ColorModePicker from '@/components/ColorModePicker'

	export default {
		components: {
      Logo,
      ColorModePicker
		},
		data () {
		return {
		}
		},
		methods: {
    }
  }
</script>

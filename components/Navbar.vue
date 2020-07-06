<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
		<div class="container-fluid">
			<a class="navbar-brand" href="#"><Logo /> <span class="mt-5"></span></a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarText">
				<ul class="navbar-nav ml-auto mb-lg-0">
					<li class="nav-item" v-for="menuItem of menuItems" :key="menuItem" >
						<a class="nav-link px-4" :class="activeMenuItem(menuItem)" aria-current="page" href="#">{{menuItem}}</a>
					</li>
				</ul>
				<span class="navbar-text ml-5">
					<ColorModePicker />
				</span>
        <span class="text-center text-md-left ml-5" id="navbar_button">
          <a href="overview.html" class="btn btn-success shadow lift mr-1 px-4 py-2 rounded-5">
            <i class="fe fe-arrow-right d-none d-md-inline"></i> Get Quote
          </a>
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
			menuItems: ['Home', 'Services', 'Contact Us']
		}
		},
		methods: {
			getClasses (color) {
				// Does not set classes on ssr preference is system (because we know them on client-side)
				if (this.$colorMode.unknown) {
				return {}
				}
				return {
          preferred: color === this.$colorMode.preference,
          selected: color === this.$colorMode.value
				}
			},
      activeMenuItem(item) {
        return {
          active: item === 'Home'
        }
      }
    }
  }
</script>

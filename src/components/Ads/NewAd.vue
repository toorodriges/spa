<template>
	<v-container>
		<v-layout row>
			<v-flex xs12 sm6 offset-sm3>
				<h1 class="text--secondary mb-3">Create New Ad</h1>
				<v-form
					class="mb-3"
					ref="form"
					v-model="valid"
					validation
				>
					<v-text-field
						:rules="[v => !!v || 'Title is required']"
						label="Ad title"
						name="title"
						required
						type="text"
						v-model="title"
					></v-text-field>

					<v-textarea
						name="description"
						label="Ad description"
						type="text"
						v-model="description"
						multi-line
						:rules="[v => !!v || 'Title is required']"
					></v-textarea>
				</v-form>
				<v-layout row class="mb-3">
					<v-flex xs12>
						<v-btn class="warning">
							Upload
							<v-icon right dark>cloud_upload</v-icon>
						</v-btn>
					</v-flex>
				</v-layout>
				<v-layout row>
					<v-flex xs12>
						<img src="" height="100">
					</v-flex>
				</v-layout>
				<v-layout row>
					<v-flex xs12>
						<v-switch
							v-model="promo"
							label="Ad to promo"
						></v-switch>
					</v-flex>
				</v-layout>
				<v-layout row>
					<v-flex xs12>
						<v-spacer></v-spacer>
						<v-btn
							:loading="loading"
							:disabled="!valid || loding"
							@click="createAd"
							class="success">
							Create ad
						</v-btn>
					</v-flex>
				</v-layout>
			</v-flex>
		</v-layout>
	</v-container>
</template>
<script>
  export default {
    data: function () {
      return {
        title: '',
        description: '',
        promo: false,
        valid: false
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
			}
		},
    methods: {
      createAd() {
        if (this.$refs.form.validate()) {
          //Logic
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo,
            imageSrc: 'https://webformyself.com/hivideo/images/js/vue.jpg'
          }
          this.$store.dispatch('createAd', ad)
						.then( () => {
						  this.$router.push('/list')
						})
						.catch(() => {

						})
        }
      }
    }
  }
</script>

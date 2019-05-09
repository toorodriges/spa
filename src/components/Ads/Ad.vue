<template>
	<v-container>
		<v-layout row>
			<v-flex xs12>
				<v-card>
					<v-layout row>
						<v-flex xs12>
							<v-card-media
									src="https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
									height="300px"
							></v-card-media>
							<v-card-text>
								<h2 class="text--primary">Title</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, ipsum.</p>
							</v-card-text>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn class="warning" flat>edit</v-btn>
								<v-btn
										class="success"
								>buy</v-btn>
							</v-card-actions>
						</v-flex>

					</v-layout>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>
<script>
    export default {
        data () {
            return{}
        }
    }
</script>

<template>
	<v-container>
		<v-layout row>
			<v-flex xs12>
				<v-card>
					<v-layout row>
						<v-flex xs12>
							<v-img
									:src="ad.imageSrc"
									height="300px"
							></v-img>
							<v-card-text>
								<h2 class="text--primary">{{ad.title}}</h2>
								<p>{{ad.description}}</p>
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
        props: ['id'],
        computed: {
            ad() {
                const id = this.id
                return this.$store.getters.adById(id)
            }
				}
    }
</script>

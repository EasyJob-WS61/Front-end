<template>
    <v-container class="allcontainer">
        <v-row>
            <v-col style="margin-bottom: 1pc;"><h1>{{project.title}}</h1></v-col>
        </v-row>
        <v-row>
            <v-col cols="5">
                <img class="img-project" :src="project.photo" alt="">
            </v-col>
            <v-col style="margin-bottom: 1pc;">
                <p>
                    {{project.description}}
                </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col style="margin-bottom: 1pc;" class="12">
                <v-btn color="primary" elevation="3" x-large text  @click="goToGitHub()" >
                VIEW IN GITHUB
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col style="margin-bottom: 1pc;">
                <h2>Evidencias:</h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-text>
                        <v-row>
                            <v-col cols="6" v-for="evidence in evidences" :key="evidence.id">
                                <img class="img-project" :src="evidence.photo" alt="">
                                <h5>{{evidence.description}}</h5>
                            </v-col>
                            
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import projectsService from '../service/projects.service';
export default {
    name: "project-view",
    data() {
        return {
            project:'',
            evidences:[]
        }
    },
    async mounted() {
        const response = await projectsService.getById(this.$route.params.id);
        this.project = response.data;
        const evidencesResponse = await projectsService.getEvidences(this.$route.params.id);
        this.evidences = evidencesResponse.data;
        console.log(this.evidences);
    },
    methods:{
        goToGitHub(){
            window.open(this.project.url, '_blank');
        }
    }
};
</script>

<style scoped>
.allcontainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  height: auto;
}

.img-project{
    width: inherit;
}

</style>
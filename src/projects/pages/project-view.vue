<template>
    <v-container class="allcontainer">
        <v-row>
            <v-col style="margin-bottom: 1pc;"><h1>Genshin Impact</h1></v-col>
        </v-row>
        <v-row>
            <v-col cols="5">
                <img class="img-project" src="https://www.pdvg.it/wp-content/uploads/2020/10/genshin_impact.jpg" alt="">
            </v-col>
            <v-col style="margin-bottom: 1pc;">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, nam tempore. Odit blanditiis, ea nam totam eaque nemo veniam! Voluptates nesciunt repellendus distinctio nihil ipsa sit est rerum aperiam quis?
                </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col style="margin-bottom: 1pc;" class="12">
                <v-btn color="primary" elevation="3" x-large text>
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
                            <v-col cols="6">
                                <img class="img-project" src="https://webstatic.hoyoverse.com/upload/contentweb/2022/04/19/439abf22cf4f6ae0014f6923799c38fe_7800376538180287502.jpg" alt="">
                            </v-col>
                            <v-col cols="6">
                                <img class="img-project" src="https://productive.io/wp-content/uploads/2021/01/team-Rietta-B.png" alt="">
                            </v-col>
                            <v-col cols="6">
                                <img class="img-project" src="https://cdn.hackernoon.com/images/dkcg32z7.jpg" alt="">
                            </v-col>
                            <v-col cols="6">
                                <img class="img-project" src="https://cdn.hackernoon.com/images/dkcg32z7.jpg" alt="">
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "project-view",
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
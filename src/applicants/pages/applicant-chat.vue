<template>
  <v-container>
    <v-row class="ma-0 pa-0 d-flex" >
      <v-col cols="12">
        <v-card class="elevation-0">
          <v-card-title class="font-weight-bold justify-center text-h5 primary">{{ this.actual }}</v-card-title>
        </v-card>
      </v-col>
      <v-col style="justify-content: center" class="ma-2 pa-0"><br/>
        <v-row class="justify-center overflow-auto"  style="height:360px">
          <v-col class="botto" cols="8" v-for="chat in chats" :key="chat">
            <v-row class="justify-lg-start" v-if="chat.applicant_id==this.actualId && chat.postulant_id==this.postulantid && chat.fromApplicant===0">
              <v-card max-width="50%" class="black" style="background: linear-gradient(#02EDB3,#01C4FF);color: white">
                <v-card-title>{{chat.text}} </v-card-title>
              </v-card>
            </v-row>
            <v-row class="justify-lg-end" v-if="chat.applicant_id==this.actualId && chat.postulant_id==this.postulantid && chat.fromApplicant===1">
              <v-card class="justify-lg-end black" style="alignment: right" max-width="50%" >
                <v-card-title>   {{chat.text}}</v-card-title>

              </v-card>
            </v-row>
          </v-col>
        </v-row>

        <v-footer app bottom align="center" class="justify-center" style="margin-left: 50px">
          <v-col cols="10">
            <v-textarea v-model="chat.text" solo name="input-7-4" label="Solo textarea"></v-textarea>
          </v-col>
          <v-col>
            <v-btn @click="send()">Send</v-btn>
          </v-col>
        </v-footer>
      </v-col>

      <v-col cols="3" class="ma-0 pa-0 elevation-2 " style="justify-content: center;margin-top: 40px">
        <v-card v-for="postulant in postulants" :key="postulant">
          <v-row tyle="margin-top: 30px; justify-content: center" class="ma-2 pa-0">
            <v-col >
              <v-btn  flat style="font-family: Roboto" @click="cargarChat(postulant.id,postulant.name)" class="primary">{{postulant.name}} {{postulant.lastname}}</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ApplicantsService from "@/applicants/services/applicants.service.js";
import PostulantsService from "@/postulants/services/postulants.service.js";
import postulantsChatService from "@/postulants/services/postulants.chat.service.js";
import router from "@/router";

export default {
  name: "applicant-chat",
  data: () => ({
    applicants: [],
    actual:"Click a name",
    actualId:0,
    postulantid:0,
    postulants:[],
    chats:[],
    chat:{},
    items: [],
  }),
  async created() {
    try {
      const response1 = await ApplicantsService.getAll();
      this.applicants = response1.data;
      const response2 = await PostulantsService.getAll();
      this.postulants = response2.data;

      this.actualId=this.$route.params.idUser;
      this.postulantid=this.$route.params.idUser2;
      await PostulantsService.getById(this.postulantid).then(response=>{this.actual=response.data.name})
      const response3 = await postulantsChatService.getAll();
      this.chats = response3.data;
    }
    catch (e)
    {
      console.error(e);
      console.log(this.applicants)
      console.log(this.postulants)
    }
  },

  methods: {
    cargarChat(id,name) {
      router.push({params: {idUser: this.$route.params.idUser, idUser2: id} });
      this.actual=name;
      this.postulantid=id;
      this.actualId=this.$route.params.idUser;

      postulantsChatService.getAll().then(response=>{ this.chats= response.data});

    },
    send(){
      this.chat.fromApplicant=1;
      this.chat.applicant_id=parseInt(this.actualId);
      this.chat.postulant_id= parseInt(this.postulantid);
      this.chat.date=Date().toLocaleString();
      postulantsChatService.create(this.chat);

      postulantsChatService.getAll().then(response=>{ this.chats= response.data});
      this.cargarChat(this.postulantid,this.actual)
    }
  }
}
</script>

<style scoped>
.primary {
  color: #01C4FF;
  font-size: 20px;
  font-family: Roboto;
  elevation: 0;
}
.black{
  color: #6c6b6b;
  font-family: Roboto;
}
</style>

<template>

  <v-row class="ma-0 pa-0 d-flex" >
    <v-col style="justify-content: center" class="ma-2 pa-0"><br/>
      <v-row   style=" justify-content: center" class="ma-2 pa-0">
      <v-card class="">
        <v-card-title class="font-weight-bold justify-end text-h5   primary">{{ this.actual }}</v-card-title>
      </v-card>
      </v-row>

      <v-row class="justify-center"   style="height: 68%;margin-top: 20px">
        <v-col class="justify-center" cols="8" v-for="chat in chats" :key="chat">
          <v-row class="justify-lg-start" v-if="chat.postulant_id==this.actualId && chat.applicant_id==this.applicantid && chat.fromApplicant===1">
            <v-card max-width="50%" class="black" style="background: linear-gradient(#02EDB3,#01C4FF);color: white">
             <v-card-title>{{chat.text}} </v-card-title>
            </v-card>
          </v-row>

          <v-row class="justify-lg-end" v-if="chat.postulant_id==this.actualId && chat.applicant_id==this.applicantid && chat.fromApplicant===0">

            <v-card class="justify-lg-end black" style="alignment: right" max-width="50%" >
              <v-card-title>   {{chat.text}}</v-card-title>

            </v-card>
          </v-row>

        </v-col>
      </v-row>

        <v-row class="justify-center" style="margin-left: 50px">
          <v-col cols="10">
            <v-textarea v-model="chat.text" solo name="input-7-4" label="Solo textarea"></v-textarea>
          </v-col>
          <v-col>
            <v-btn @click="send()">Send</v-btn>
          </v-col>
        </v-row>

    </v-col>

    <v-col cols="2" class="ma-0 pa-0 elevation-2 " style="justify-content: center;margin-top: 40px">
      <v-card v-for="applicant in applicants" :key="applicant" >
        <v-row tyle="margin-top: 30px; justify-content: center" class="ma-2 pa-0">
          <v-col >
            <v-btn flat style="font-family: Roboto" @click="cargarChat(applicant.id,applicant.name)" class="primary">{{applicant.name}} {{applicant.lastname}}</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import ApplicantsService from "@/applicants/services/applicants.service";
import PostulantsService from "@/postulants/services/postulants.service";
import postulantsChatService from "@/postulants/services/postulants.chat.service";


import router from "@/router";
export default {
  name: "postulant-chat",
  components: {},
  data: () => ({
    applicants: [],
    actual:"Click a name",
    actualId:0,
    applicantid:0,
    postulants:[],
    chatPostulants:[],
    chatApplicants:[],
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
      this.applicantid=id;
      this.actualId=this.$route.params.idUser;

      const response2 =  postulantsChatService.getByApplicantId(id);
      this.chatApplicants = response2.data;
      const response3 =  postulantsChatService.getByPostulantId(id);
      this.chatPostulants = response3.data;
    },
    send(){
      this.chat.fromApplicant=0;
      this.chat.applicant_id=this.applicantid;
      this.chat.postulant_id=this.actualId;
      this.chat.date=Date().toLocaleString();
      postulantsChatService.create(this.chat);
      this.$router.go('/postulants/'+this.actualId+'/chat/'+this.applicantid);
      const response2 =  postulantsChatService.getByApplicantId(this.applicantid);
      this.chatApplicants = response2.data;
      const response3 =  postulantsChatService.getByPostulantId(this.actualId);
      this.chatPostulants = response3.data;
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
<template>
  <v-container class="allcontainer">
    <v-row justify="center" fluid class="container">
      <v-col cols="12">
        <v-row>
          <v-col>
            <div class="containter-anuncio">
              <v-row>
                <v-col class="row-center">
                  <h2>{{announcement.title}}</h2>
                </v-col>
              </v-row>
              <v-row>
                <v-col>MOVISTAR</v-col>
              </v-row>
              <v-row>
                <v-col class="row-center">
                  <p style="color: #01c4ff; font-weight: bold">{{announcement.period}}</p>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center" fluid class="container">
      <v-col>
        <div class="containter-anuncio anuncio-details">
          <v-row>
            <v-col class="row-center">
              <h2>Detalles del aviso</h2>
            </v-col>
          </v-row>
          <v-row justify="space-around">
            <v-col>
              <p>
                {{announcement.description}}
                <br />
                Ofrecemos:<br />
                -Salario de ${{announcement.salary}}<br />
              </p>
            </v-col>
            <v-col class="col-center row-center">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQEAAADECAMAAACoYGR8AAAAdVBMVEX///8Bm/IAlfEAmPIAl/IAk/EAnPL8///3/P/m9P7y+v7t9/4ppPPc7/213PpMr/RftvUZofOv2frJ5vzi8v07qfSQy/iKyPif0fnW7Px8wvfQ6fy+4PvD4/vL5vyUzfhsu/ZXs/V0vvao1vmGw/dgtPWx2/phI2mWAAALQklEQVR4nO2da2PqKBCGGyBq1WNq1WqrXbU9e/7/T9x4ab0ALzMwJLvdPJ9rQyYwzI3h4aGjo6Ojo6Ojo+OnMBg9jtoeQ1uMNsv9WJU1ZrrYrdb9tgfULPPtQimjizNaG1U8bf4/QthUV2//jVa9l0HbQ2uE56myX/+EKVZtjy4/72Plef0javza9gjzMqrg+x/Xwkvbg8zJyjv/r6dB9WM14nARmgDnaTD9oSbCa48wAU4i6D22PdgcTGgT4OeK4KWkC+CwEIZtD1iaN8YMOIpg0faIheEKoDaOdm2PWRS+AOpN8bPtUQuyjRBALYJ52+MW45mlBL/R07YHLsVr1AyoMUvRcfQHwwPNu5/DXqQAiqL8JTSG0ftqt5j2tCmVKab77axRMVRUS9BGZkucbxdGGX0ZhjZK7/6S+NckVrFr4IB6Tn7+ZOGKxtQu6Hgi8HYE5ikCKIpe4uM/e35vVI3XIq8YYBG/Bg6YbcrDNz0s//JN6jX9fKZNgXq2xvsHoyq4C5tFbpU4TBVAYaI/08a1/C0B5w5FfKStgaMIIof4RjPDMvvhiWrwJIEos2gQjEd+iyCrH/6UPgXq7SAiajgcG/L/15X8i3/xS2AKRNkEwylH9CpfjmInMQUiDMP+mPdglUsVPNJnIqTkGi5cG0Q/ZXn/WhsLSUDveM99Yj+3zBOJGIqsgQOKZbYs+dpHf2SRwFZoCtQbIkdVvceEYxIsTz/9+LCAxZj+2GHUA7LsiMkewRWMdRppguSITI/lBFAYcjqZk5i6QSU5oS7eBadAUVBjpnFr4IjaCEsgITbmGh6xrGKXoH2N7JY4jwuQe0dHc4/WKU/VU9GyhTfRKUBdBmkBKSNpGvZFtUCNosTNN4lPldSGKzFr6AwpXpi8/Si50OlU4q2voTiI0TvhhZ6UbTiTXgQku1XAAhGzDUViQ7eEt+uZxPYjpApG8lOA4L7JWCClSEGnnFd4Rcg7ErNAJKwCQa/wggmEsqQsEL1PF0DqtuxG4URnXy4ek169I+sSfKFx8uhZTuyh2RZknkML1GCLQFDsyVviMpMEoEUgFZc+kppAELcHv8aFTFZZMzxtHeTRg0UgXppYpnBHWvXOPoseLHDa4FFY7CnrIIc9eAZ8GHlfNH4dZLEHz6PyJ07EN+CE/SCXHixQsHAoL3b1J1IAf+VbBIXxWoWygekTOrLCSCZh7sYfLs1hgnDztWfSK6fQmLyRTNm98Aw7aX9EXCff4NsMBnmeyshWXpBMldloz1MzGWExRsFrVOZaG0rlX03pKayTTk58YfhxU375oFZF9ftlWWnSYVTPysw18/jKsM9dj8Z8nPf4wYRwHtUTLX2UzdBdP5AbNPxkSkB9XE/rWbAEzuMbTbKpX7aHxNuU9PRuUverwKt4aoxzqYGCXcvIO09kKtvoCpj3nnW5SHrJACxlyPoWyhX/H+AoszuM28+mBgpmqWGf85+Ve0Jv8Ns4l2VOV6TegRmlJZzEpTdVj9eB88xNXjuUU2jH0IN+7xt7ecr1k5zOGBzrPRzTtOf1PHEVYun6XcaIxBFFPeDAMMxQ1Bd+UadZnFMRnp5KUwWMw9XQ43hGq9p1FlvmEAPEUExDxjhwahIezHFZqdmi89eE46Z9xqEODY9OQZNAvds/yBiavQy5FzzuxYjVhlKzSJ+4IoUZbeILwRNpe8Z3CEVeUAWOq6IsT6bafvQMDTrk0VwTrFJB39QVK829GX4P3F9h9Mg42Uaws9G6dhUTNaAGTqjKoww+KdGdy78JqhQUZHA4h9IZQ4DWW0eN0YzYauwM4RQxMggcFmoD5sAF09veegn9TcWaAKTYI4z42M5hXs/Qwujd5GtbGE12BfP9SUXy0MKxN5J8ITIPWplisd/t9lPDff2Cdo4ceod2kT03NimD1jpqEyYd68P+sfXnTZiEcqQfErCzRrnqtrJAizXAUJMdIvndjEkog8uvsfkD3WPrzzNHiGShnRWCqq20/pxSyK8NNTOZF+LpYdjBKUYCqvjYfi4XEVuXNMSyFBj6tVdBqHhPjc9pn/WibZ1JPeH+ggZquBK4LoiKaRMpCTUPiyMeTAnom/03rlGkFOQ0LFzYdsoE/vl9uj2iOYMchpqFhTEfeztBu6FtgPAbdMhhqMd3YOqJJwGHAcLsUiMIvdMHjHrZSwkV7th6s9lwwg3kQ2wwbeawq4FV7IzItaYNyW1nYQ8FR5QMeEbuzhVZqi/D0LvJjJCucpy2At6xuw5ZoltcBL5KQBsY+XTEmIAbodzNWFvxpxnV+msoATtmD6JknhR1v6kMw81Y6G1hYYjI2Bk3ECn1WaENB1ePgNMh9+DwgJ3JBwVsXjs8w9H4AJzqVOwa2vMa6A1voYbo4UQStOAQQQKlncEFlbz+xzauDDl9Nn/zQkQPD/6/9neyYhX+CcDqfQfL013VdP6KUlCs8qdZZcjq8AK1lMvDRj/wP6ZZy5B1EQOKeOi/HT8AaxokqqPOgsQSaBxwBwoPOP8TyDUjDdxklN1jnEZIwOldACMSNfXLeDrYgncbCVqgzm8KTphAY7y5hCNvEcBSMnfeEXxM3+G0A825BwoWYd0DG9wqp10BZg1M1TZSinmE1d8Heu/u9QRsKIcndUVDdXjME2vINfQsa+Af44c3FDNktv9ErqGnDAs1o8Ja+KMRZchwjA+gzLEvygCejnuyy3XVBnCboiPX0Pc6fwNViEMzTeyI5FTRGZQ39U1p8B4hp6yBHVExDy8DK987nVDUK1DHnX9HZB9bReF/X8R9AF4jdDlD9h2R1XX+ALjzwO9kI5soEKMV7qtsw74aAa0C74JCPwpFZ3LviOw7GsHL+BcUMqNCIxjkXQb8u4j8uyH4mqgdUfCqUMlbBhyPZ3lFB/z1lGhfBYoAuwYHsvZO0eyup37PCH1MpAiCbUdztHOiP93G90XgvgpfImiWZ+umR5mBNj6jEHaDQAZ+eCXmaitaOFM8QTz1Axobd8CwIWjjbCmkuE6P7kkQaJGFXJxwa6lBJgHwDcITrnKv0Al41AKFMBMFW/3eDjvubsaRLQG1C/wG1V9RtFGeFFJ0++v5/RkeT9OSa0DujFLAAitXouHkzG95nF4va6MJFSjolCLlWrQsRRUJ97b3P75OA2ij3yghBlSCRqnhyZFCitSDZ9Z7dcBUn8QQC1jJpHB1hoBZ6nVxj5vNZk0Ps6LwmqO61kb8yoH4e4rjQPshSSNF3QoIJZD5JmUL8A1pRSzCAbO4W4pTQGdTUAb1G+Fy29huv/Eg/5BWxyPqHmS8QtgHapBJm5GS+fSAJ5cHZNTQxiNoGZaUI9bSoAPLxFb0L1IiUORLOSVB9+lRk3dC+0HaDRDxIO9oR/sXg56ICJJvw4kEJQGpTopIaxt+iFwItBuQL3cX0IZl8xvhF6BKkn7GI/lmwna04AmwDBg2aqIICOGcfIC7zTgBq3Vcn5kTZYsz4AGW5nPiNb8Y3RbvBZB+LVwSoJoE94W8Y1jFrQRdyF0VG4nfsid1ArqwKiOmgaqkLoqNx+/eca81n4+500DHJAnF8ZeJGvb9RCvN8Za1emo6JuTGaxlzy/pqBktDlYFRe5EbYgXwTgL+HKgZvWlCIyOtem/ceqmM+CZBpK0+XC0UFIJWZj+RuB5XDN950nh3bV4LQbmMJG2Umn5M2tf/d3iaTCRksOqZMHmrTKnMF0qpsljsXjb/DuV3jzN7JJC+GK03q5cD28/N7FfjkWAGzhQg0yD6j+NIH5ld24Nqltl9Akz7r4z4ocxuVbcmdN//aYyeLu0Idelrt/2zed1pddq3KqZP9HMYzFbL5epfumV3dHR0dHR0dHR0CPAPXyCo2EiRRmUAAAAASUVORK5CYII="
                alt=""
              />
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" fluid class="container">
      <button @click="dialog = true; postular()">POSTULARME</button>
    </v-row>

    <v-row>
      <v-dialog v-model="dialog" max-width="1000px">
        <v-card class="card-dialog">
          <v-card-title class="col-center">
            <h2 style="text-align:center;">¡Estas postulando!</h2>
          </v-card-title>
          <v-card-text>
            <h4>
              Hemos enviado tu perfil profesional al solicitante. ¡Suerte!
            </h4>
          </v-card-text>
            <v-card-actions class="col-center">
                <v-btn color="primary" @click="dialog = false">
                Cerrar
                </v-btn>
            </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import AnnouncesService from "../services/Announces.service";
import ApplicantNotificationService from "@/applicants/services/applicants.notification.service";
export default {
  name: "DetallesAnuncio",


  data: () => ({
    dialog: false,
    announcement: "",
    notification: {}
  }),

  async mounted() {
    const id = this.$route.params.id;
    const announcementResponse = await AnnouncesService.getById(id);
    this.announcement = await announcementResponse.data;

  
  },
  methods:{
    postular(){
      this.notification.applicantId= parseInt(this.announcement.applicantId);
      this.notification.announcement_id= parseInt(this.$route.params.a_id);
      this.notification.postulant_id= parseInt(this.$route.params.id);
      this.notification.date=Date().toLocaleString();
      this.notification.state="pending";
      ApplicantNotificationService.create(this.notification);
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
.container {
  width: 100%;
}
.button-container {
  display: flex;
  justify-content: flex-end;
  margin-right: 3pc;
}

.row-center {
  display: flex;
  align-items: center;
}

.col-center {
  display: flex;
  justify-content: center;
}

.containter-anuncio {
  border: 1px solid rgb(189, 189, 189);
  height: 8rem;
  -webkit-box-shadow: 3px 7px 21px -6px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: 3px 7px 21px -6px rgba(0, 0, 0, 0.61);
  box-shadow: 3px 7px 21px -6px rgba(0, 0, 0, 0.61);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 2px 20px;
  margin: 0.5rem 0px;
}

.anuncio-details {
  height: auto;
  padding: 1rem;
}

.containter-anuncio h2 {
  color: #01c4ff;
}
.containter-anuncio p {
  color: #ffffff;
}
.flex-end {
  display: flex;
  justify-content: flex-end;
}
.img-post {
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
}
img {
  width: 10.1rem;
  height: 10rem;
  max-width: 100% !important;
}
button {
  background: #02edb3 !important;
  width: 20rem;
  height: 3.5pc;
  color: white !important;
  border-radius: 1rem;
  font-weight: bold !important;
}
.card-dialog button{
    color:white !important;
    margin: 1pc 0px;
}
</style>

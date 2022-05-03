import {mount} from "@vue/test-utils";

const ApplicationComponent = {
    template: `
      <p v-if="applications.length === 0">There are no applicants</p>
      <div v-else v-for="(application, key) in applications" v-bind:key="key">
          <p>{{ application.postulant.name }} {{application.postulant.lastname}}</p>
          <p>{{ application.postulant.email }}</p>
      </div>
    `,
    data() {
        return {
            applications: [],
        }
    },
}

describe("As an applicant I want to see who applied to an ad so I can review them and select the best ones.", () => {
    it("There are no applicants", () => {
        const wrapper = mount(ApplicationComponent);
        const text = wrapper.find('p');

        wrapper.setData( {
            applications: [
                {
                    id: 1,
                    applicantId: 1,
                    announcementId: 1,
                    date: "10/02/2022",
                    state: "pending",
                    postulant: {
                        id: 1,
                        name: "Heber",
                        lastname: "Cordova",
                        email: "hbcordova@gmail.com"
                    }
                },
            ],
        });

        expect(text.text()).toContain('');
    });
    it("There are applicants", () => {
        const wrapper = mount(ApplicationComponent);
        const text = wrapper.find('p');

        expect(text.text()).toContain('There are no applicants');
    });
})

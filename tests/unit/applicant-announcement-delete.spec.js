import {mount} from "@vue/test-utils";

const AnnouncementComponent = {
    template: `
      <div v-for="(announcement, key) in announcements" v-bind:key="key">
        <p>{{ announcement.date }}</p>
        <p>{{ announcement.title }}</p>
        <p>{{ announcement.description }}</p>
        <p>{{ announcement.salary }}</p>
        <btn @click="deleteAnnouncement(key)"></btn>
      </div>
      <div>
        <span>{{msg}}</span>
      </div>
    `,
    data() {
        return {
            announcements: [
                {
                    id: 1,
                    date: "10/10/2022",
                    title: "This is a title of my announcement",
                    description: "this is a description of my announcement",
                    salary: 2000,
                },
                {
                    id: 2,
                    date: "11/10/2022",
                    title: "This is a title of my announcement",
                    description: "this is a description of my announcement",
                    salary: 3000,
                },
            ],
            msg: '',
        }
    },
    methods: {
        deleteAnnouncement(key) {
            this.announcements.splice(key, 1);
            if (this.announcements.length === 0) {
                this.msg = 'There are no announcements registered';
            }
            else {
                this.msg = 'Removed successfully'
            }
        }
    }
}

describe("As an applicant I want to delete an ad so that no more candidates apply.", () => {
   it("Scenery 1: There are no job announcement", async () => {
       const wrapper = mount(AnnouncementComponent);
       const text = wrapper.find('span');
       const button = wrapper.find('btn');

       await button.trigger('click');
       await button.trigger('click');

       expect(text.text()).toContain("There are no announcements registered");
   });
    it("Scenery 2: There are job announcements", async () => {
        const wrapper = mount(AnnouncementComponent);
        const text = wrapper.find('span');
        const button = wrapper.find('btn');

        await button.trigger('click');

        expect(text.text()).toContain("Removed successfully");
    })

});

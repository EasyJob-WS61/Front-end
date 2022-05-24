import { mount } from '@vue/test-utils'

const AnnouncementComponent = {
    template: `
      <div>
        <input v-model="announcement.title" placeholder="Add the title">
        <input v-model="announcement.description" placeholder="Add the description">
        <input v-model="announcement.salary" placeholder="Add the salary">
        <btn @click="addAnnouncement"></btn>
      </div>
      <div>
        <p>{{msg}}</p>
      </div>
    `,
    data() {
        return {
            announcement: {
                id: null,
                date: '',
                title: '',
                description: '',
                salary: '',
            },
            msg: ' ',
        }
    },
    methods: {
        addAnnouncement() {
            if (this.announcement.title.trim().length <= 50 && this.announcement.title.trim().length >= 10)
                if (this.announcement.description.trim().length >= 10 && this.announcement.description.trim().length <= 200)
                    if (this.announcement.salary > 0 && this.announcement.salary <= 99999) {
                        this.announcement.id = 1;
                        this.announcement.date = '05/02/2022';
                        this.msg = 'Successfully added';
                    }
                    else this.msg = 'The salary is required.';
                else this.msg = 'The description is required. Must be at least 50 characters.';
            else this.msg = 'The title is required. Must be at least 10 characters.';
        }
    }
}

describe("As an applicant I want to add job advertisements to receive applicants interested in my job offer.", () => {
    test("Scenery 1: Enter all the fields correctly", async () => {
        const wrapper = mount(AnnouncementComponent);
        const button = wrapper.find('btn');
        const text = wrapper.find('p');

        wrapper.setData({announcement: {
                title: "This is the title of my job announcement",
                description: "This is the description of my job announcement",
                salary: 2000
            }})

        await button.trigger('click');

        expect(text.text()).toContain("Successfully added")
    });
    test("Scenery 2: You do not enter all the fields correctly", async () => {
        const wrapper = mount(AnnouncementComponent);
        const button = wrapper.find('btn');
        const text = wrapper.find('p');

        wrapper.setData({
            announcement: {
                title: "",
                description: "This is the description of my job announcement",
                salary: 2000
            },
        })

        await button.trigger('click');

        expect(text.text()).toContain("The title is required. Must be at least 10 characters.");
    });
})

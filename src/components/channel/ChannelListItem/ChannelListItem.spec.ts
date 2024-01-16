import { mount, RouterLinkStub } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import ChannelListItemVue from "./ChannelListItem.vue";
import moment from "moment";

describe("ChannelListItem.vue", () => {
  it("Component renders.", () => {
    const date = moment("2000-01-01 02:30:30", "yyyy-MM-DD hh:mm:ss").format(
      "yyyy-MM-DD'T'hh:mm:ss.SSSSSS'Z'"
    );

    const wrapper = mount(ChannelListItemVue, {
      props: {
        channel: {
          id: 1,
          content: "Channel 1",
          createdDate: date,
          updatedDate: date,
          numPosts: 0,
          posts: []
        }
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    });

    expect(
      wrapper.find("[data-test=channel-list-item-1]").exists()
    ).toBeTruthy();
    expect(wrapper.find("[data-test=channel-list-item-content-1]").text()).toBe(
      "Channel 1"
    );
    expect(
      wrapper.find("[data-test=channel-list-item-created-date-1]").text()
    ).toBe("January 1, 2000 2:30 AM");
    expect(
      wrapper.find("[data-test=channel-list-item-post-count-1]").text()
    ).toBe("0");
  });
});

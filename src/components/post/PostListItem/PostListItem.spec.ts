import { mount, RouterLinkStub } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import PostListItemVue from "./PostListItem.vue";
import moment from "moment";

describe("PostListItem.vue", () => {
  it("Component renders.", () => {
    const date = moment("2000-01-01 02:30:30", "yyyy-MM-DD hh:mm:ss").format(
      "yyyy-MM-DD'T'hh:mm:ss.SSSSSS'Z'"
    );

    const wrapper = mount(PostListItemVue, {
      props: {
        post: {
          id: 1,
          content: "Post 1",
          createdDate: date,
          updatedDate: date,
          numComments: 0,
          channel: {
            id: 1,
            content: "Channel 1",
            createdDate: date,
            updatedDate: date
          }
        }
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    });

    expect(wrapper.find("[data-test=post-list-item-1]").exists()).toBeTruthy();
    expect(wrapper.find("[data-test=post-list-item-content-1]").text()).toBe(
      "Post 1"
    );
    expect(
      wrapper.find("[data-test=post-list-item-created-date-1]").text()
    ).toBe("January 1, 2000 2:30 AM");
    expect(
      wrapper.find("[data-test=post-list-item-comment-count-1]").text()
    ).toBe("0");
  });
});

import {mount} from "@vue/test-utils";
import MainNav from "@/components/MainNav";

describe("MainNav", () => {
  it("display company name", () => {
    const wrapper = mount(MainNav);
    console.info(wrapper.text().length);
    expect(wrapper.text()).toMatch("abel");
  });
});

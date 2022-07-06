import {mount} from "@vue/test-utils";
import MainNav from "@/components/MainNav";
import {text} from "body-parser";

describe("MainNav", () => {
  it("display company name", () => {
    const wrapper = mount(MainNav);
    console.info(wrapper.text().length);
    expect(wrapper.text()).toMatch("Power Careers");
  });
  it("display menu items for navigation", () => {
    const wrapper = mount(MainNav);
    const elementiNav = wrapper.findAll("[datatest='main-nav-list-item']");
    const elementiNavTesto = elementiNav.map((item) => item.text());
    console.log(elementiNav);
    expect(elementiNavTesto).toEqual([
      "Teams",
      "Location",
      "Life at power",
      "How we hire",
      "students",
      "Jobs",
    ]);
  });
});

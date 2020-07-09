import React from "react";
import { shallow } from "enzyme";
import Start from "./Start";
import { findByTestAttr } from "./../../../Util";

const setUp = (props = {}) => {
    const component = shallow(<Start {...props} />);
    return component;
};
describe("Start Component", () => {

    describe("Start Component with props", () => {
        let component;
        beforeEach(() => {
            const props = {
                title: 'title',
                description: 'description',
                buttonText: 'button text'
            };
            component = setUp(props);
        });

        test("start should render", () => {
            const wrapper = findByTestAttr(component, "start");
            expect(wrapper.length).toBe(1);
        });

        test("startTitle should render without errors", () => {
            const wrapper = findByTestAttr(component, "startTitle");
            expect(wrapper.text()).toEqual("title");
        });

        test("startDescription should render without errors", () => {
            const wrapper = findByTestAttr(component, "startDescription");
            expect(wrapper.text()).toEqual("description");
        });

        test("buttonText should render without errors", () => {
            const wrapper = findByTestAttr(component, "buttonText");
            expect(wrapper.text()).toEqual("button text");
        });

    });
});
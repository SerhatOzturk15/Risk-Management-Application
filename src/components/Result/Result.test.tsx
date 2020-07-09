import React from "react";
import { shallow } from "enzyme";
import Result from "./Result";
import { findByTestAttr } from "./../../../Util";

const setUp = (props = {}) => {
    const component = shallow(<Result {...props} />);
    return component;
};
describe("Result Component", () => {

    describe("Result Component with props", () => {
        let component;
        beforeEach(() => {
            const props = {
                title: 'title',
                description: 'description',
                handleTakeTest: function () { },
                buttonText: 'button text'
            };
            component = setUp(props);
        });

        test("result should render", () => {
            const wrapper = findByTestAttr(component, "result");
            expect(wrapper.length).toBe(1);
        });

        test("resultTitle should render without errors", () => {
            const wrapper = findByTestAttr(component, "resultTitle");
            expect(wrapper.text()).toEqual("title");
        });

        test("resultDescription should render without errors", () => {
            const wrapper = findByTestAttr(component, "resultDescription");
            expect(wrapper.text()).toEqual("description");
        });

        test("button should render without errors", () => {
            const wrapper = findByTestAttr(component, "button");
            expect(wrapper.text()).toEqual("button text");
        });

    });
});
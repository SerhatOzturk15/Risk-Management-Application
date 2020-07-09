import React from "react";
import { shallow } from "enzyme";
import ChoiceList from "./ChoiceList";
import { findByTestAttr } from "./../../../Util";

const setUp = (props = {}) => {
    const component = shallow(<ChoiceList {...props} />);
    return component;
};
describe("ChoiceList Component", () => {

    describe("ChoiceList Component with props", () => {
        let component;
        beforeEach(() => {
            const props = {
                choices: [1, 2, 3],
                handleChange: function () { },
                selected: 1
            };
            component = setUp(props);
        });

        test("choice should render", () => {
            const wrapper = findByTestAttr(component, "choice");
            expect(wrapper.length).toBe(3);
        });

    });

    describe("ChoiceList Component with props", () => {
        let component;
        beforeEach(() => {
            const props = {
                choices: ["Strongly Agree", "Agree", "Neither Agree nor Disagree", "Disagree", "Strongly Disagree"],
                handleChange: function () { },
                selected: 1
            };
            component = setUp(props);
        });

        test("choice should render", () => {
            const wrapper = findByTestAttr(component, "choice");
            expect(wrapper.length).toBe(5);
        });
    });
});
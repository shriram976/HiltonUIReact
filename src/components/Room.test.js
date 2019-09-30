import React from 'react';
import { Room } from './Room';
import { shallow, mount, render } from 'enzyme';
describe("Room component ", () => {
    it('renders without crashing', () => {
        var wrapper = shallow(<Room />);
        expect(wrapper).toBeDefined();
    });
    
    it('renders check box for selection if selectionRequired is true ', () => {
        var wrapper = shallow(<Room selectionRequired={true}/>);
        expect(wrapper.find("input[type='checkbox']").length).toBe(1);
    });

    it('does not renders check box for selection if selectionRequired is false ', () => {
        var wrapper = shallow(<Room selectionRequired={false}/>);
        expect(wrapper.find("input[type='checkbox']").length).toBe(0);
    });
});


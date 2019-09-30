import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './App';

describe("App component", () => {
  var savedData = [{
    selectedFlag: true,
    selectionRequired: false,
    adultCnt: 1,
    childCnt: 0
  }, {
    selectedFlag: false,
    selectionRequired: true,
    adultCnt: 1,
    childCnt: 0
  }, {
    selectedFlag: false,
    selectionRequired: true,
    adultCnt: 1,
    childCnt: 0
  }, {
    selectedFlag: false,
    selectionRequired: true,
    adultCnt: 1,
    childCnt: 0
  }];
  it('renders without crashing', () => {    
    const wrapper = shallow(<App savedData={savedData}/>);
    expect(wrapper).toBeDefined();
  });
  it ("Should contain submit button", () => {
    const wrapper = shallow(<App savedData={savedData}/>);
    expect(wrapper.find("input[type='button']").length).toBe(1);
  });
});


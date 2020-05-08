import React from 'react'
import { DayCard, CardHeader, WeekDay } from './index'
import renderer from 'react-test-renderer'


test ("DayCard div test", () => {
    //preparação
    const newSnapShop = renderer.create(<DayCard/>).toJSON();
    //verificação 
    expect(newSnapShop).toMatchSnapshot();
})
test ("CardHeader div test", () => {
    //preparação
    const newSnapShop = renderer.create(<CardHeader/>).toJSON();
    //verificação 
    expect(newSnapShop).toMatchSnapshot();
})
test ("CardHeader div test", () => {
    //preparação
    const newSnapShop = renderer.create(<WeekDay/>).toJSON();
    //verificação 
    expect(newSnapShop).toMatchSnapshot();
})
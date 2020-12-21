import React from 'react';
import MyProfileStatus from "./MyProfileStatus";
import {create} from 'react-test-renderer'
describe ("MyProfileStatus test",() => {
    test("status from props should be in state",() => {
        const component = create(<MyProfileStatus MyStatus={"Rock is dead"}/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Rock is dead")
    })
})

import {getSetup} from "./main";

describe('Setup Works', () => {
    it('Test if the setup works', () => {
        expect(getSetup()).toBe(true)
    })
})

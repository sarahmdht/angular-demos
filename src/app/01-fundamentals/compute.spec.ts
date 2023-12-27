//describe() suite or group of tests
// it() spec or test

import { compute } from "./compute";
describe('compute', ()=>{
    it('should return 0 if input is negative', ()=>{
        const result = compute(-1);
        expect(result).toBe(0);
    })
    it('it should increment the input if it is positive number', ()=>{
        const result = compute(2);
        expect(result).toBe(3);
    })
} )
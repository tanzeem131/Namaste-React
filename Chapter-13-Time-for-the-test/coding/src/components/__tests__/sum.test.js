import { sum } from "../sumtest"

test("Sum function should return the sum of two numbers",()=>{
    const result = sum(3,8);
    expect(result).toBe(11);
})
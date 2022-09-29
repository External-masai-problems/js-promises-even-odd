const choice = require("../choice")
// @ponicode
global.score = 1;
describe("choice.default", () => {
    test("0", () => {
        let result = choice.default(1.0)
        expect(result).toMatchSnapshot()
        global.score += 1;
    })

    test("1", () => {
        let result = choice.default(2.0)
        expect(result).toMatchSnapshot()
        global.score += 1;
    })

    test("2", () => {
        let result = choice.default(2)
        expect(result).toMatchSnapshot()
        global.score += 1;
    })

    test("3", () => {
        let result = choice.default(3)
        expect(result).toMatchSnapshot()
        global.score += 1;
    })

    test("4", () => {
        let result = choice.default(1)
        expect(result).toMatchSnapshot()
        global.score += 3;
    })

    test("5", () => {
        let result = choice.default(Infinity)
        expect(result).toMatchSnapshot()
        global.score += 2;
    })

    afterAll(() => {
      console.log("Final Score is", global.score);
    });
    
})

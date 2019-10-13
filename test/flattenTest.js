"use strict";
// tslint:disable-next-line: no-implicit-dependencies
const expect = require("chai").expect;
const flattenArrayFunc = require("../flatten.js");
const notArray = 123;
const testArr1 = [];
const testArr2 = [1, 2, 3];
const testArr3 = [
    "test1",
    "test2",
    "test3",
    1,
    2,
    3,
    { name: "jeremy" },
    ["4", "5", "6"],
    [
        ["7", "8"],
        [
            "10",
            [
                "11",
                ["12"]
            ]
        ]
    ],
    true,
    false,
    null,
    {
        age: 36,
        email: "blah@email.com"
    },
    ["test4", 13, true, null, { color: "red" }, flattenArrayFunc]
];
const testArr3Answer = [
    "test1",
    "test2",
    "test3",
    1,
    2,
    3,
    { name: "jeremy" },
    "4",
    "5",
    "6",
    "7",
    "8",
    "10",
    "11",
    "12",
    true,
    false,
    null,
    { age: 36, email: "blah@email.com" },
    "test4",
    13,
    true,
    null,
    { color: "red" },
    flattenArrayFunc
];
describe("function flattenArray(array) test", () => {
    it(`Input is ${notArray}:   Should throw error when not passed an array`, () => {
        // @ts-ignore Let's try passing the incorrect type to throw error
        expect(() => { flattenArrayFunc(notArray); }).to.throw(Error);
    });
    it(`Input is [${testArr1.toString()}]:   Output should be of type Array`, () => {
        expect(Array.isArray(flattenArrayFunc(testArr1))).to.equal(true);
    });
    it(`Input is [${testArr1.toString()}]:   Outputted array should = []`, () => {
        expect(flattenArrayFunc(testArr1)).to.deep.equal([]);
    });
    it(`Input is [${testArr1.toString()}]:   Outputted array should have length of 0`, () => {
        expect(flattenArrayFunc(testArr1).length).to.equal(0);
    });
    it(`Input [${testArr2.toString()}]:   Outputted array should = [1, 2, 3]`, () => {
        expect(flattenArrayFunc(testArr2)).to.deep.equal([1, 2, 3]);
    });
    it(`Input [${testArr2.toString()}]:   Outputted array should have length of 3`, () => {
        expect(flattenArrayFunc(testArr2).length).to.equal(3);
    });
    it("Input testArr3:   Outputted array should = testArr3Answer", () => {
        expect(flattenArrayFunc(testArr3)).to.deep.equal(testArr3Answer);
    });
    it("Input testArr3:   Outputted array should have length of 25", () => {
        expect(flattenArrayFunc(testArr3).length).to.equal(25);
    });
});

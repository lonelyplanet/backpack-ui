import { expect } from "chai";
import createQAHook from "../../src/utils/createQAHook";

describe('createQAHook', () => {
    describe('hook present', () => {
        it("should create hooks properly with leading/trailing whitespace", () => {
            expect(createQAHook("       tEst HOOK        ")).to.equal("test-hook-unknown");
        });
    
        it("should create hooks properly with multiple whitespaces in between text", () => {
            expect(createQAHook("TEST         HOOK   ")).to.equal("test---------hook-unknown");
        });
    
        it("should create hooks properly with numbers", () => {
            expect(createQAHook(12345)).to.equal("12345-unknown")
        })
    
        it("should create hook called default if wrong type inserted into function (object)", () => {
            expect(createQAHook({ nottheright:'type' })).to.equal("default-unknown");
        });
    
        it("should create hook called default if wrong type inserted into function (func)", () => {
            expect(createQAHook(() => {})).to.equal("default-unknown");
        });
    
        it("should create hook called default if wrong type inserted into function (array object)", () => {
            expect(createQAHook([])).to.equal("default-unknown");
        });
    
        it("should create hooks properly with leading/trailing whitespace", () => {
            expect(createQAHook(null, "       tEst HOOK        ")).to.equal("test-hook-unknown");
        });
    })


    describe('fallback present', () => {
        it("should create hooks properly with leading/trailing whitespace", () => {
            expect(createQAHook(null, "       tEst HOOK        ")).to.equal("test-hook-unknown");
        });
    
        it("should create hooks properly with multiple whitespaces in between text", () => {
            expect(createQAHook(null, "TEST         HOOK   ")).to.equal("test---------hook-unknown");
        });
    
        it("should create hooks properly with numbers", () => {
            expect(createQAHook(null, 12345)).to.equal("12345-unknown")
        })
    
        it("should create hook called default-object if wrong type inserted into function (object)", () => {
            expect(createQAHook(null, { nottheright:'type' })).to.equal("default-unknown");
        });
    
        it("should create hook called default-function if wrong type inserted into function (func)", () => {
            expect(createQAHook(null, () => {})).to.equal("default-unknown");
        });
    
        it("should create hook called default-object if wrong type inserted into function (array object)", () => {
            expect(createQAHook(null, [])).to.equal("default-unknown");
        });
    
        it("should create hooks properly with leading/trailing whitespace", () => {
            expect(createQAHook(null, "       tEst HOOK        ")).to.equal("test-hook-unknown");
        });
    })

    describe('type present', () => {
        it("should create hooks properly with leading/trailing whitespace", () => {
            expect(createQAHook(null, "       tEst HOOK        ", "btn")).to.equal("test-hook-btn");
        });
    
        it("should create hooks properly with multiple whitespaces in between text", () => {
            expect(createQAHook(null, "TEST         HOOK   ", "link")).to.equal("test---------hook-link");
        });
    
        it("should create hooks properly with numbers", () => {
            expect(createQAHook(null, 12345, "button")).to.equal("12345-button")
        })
    
        it("should create hook called default if wrong type inserted into function (object)", () => {
            expect(createQAHook(null, { nottheright:'type' }, "       type       ")).to.equal("default-type");
        });
    
        it("should create hook called default if wrong type inserted into function (func)", () => {
            expect(createQAHook(null, () => {}, "anything")).to.equal("default-anything");
        });
    
        it("should create hook called default if wrong type inserted into function (array object)", () => {
            expect(createQAHook(null, [], "yolo")).to.equal("default-yolo");
        });
    
        it("should create hooks properly with leading/trailing whitespace", () => {
            expect(createQAHook(null, "       tEst HOOK        ", "nAv")).to.equal("test-hook-nav");
        });
    })

    describe('everything present', () => {
        it('should work properly', () => {
            expect(createQAHook("qa", "hook", "data")).to.equal("qa-data");
        })
    })

    describe('nothing present', () => {
        it('should work properly', () => {
            expect(createQAHook(null, null, null)).to.equal("default-default");
        })
    })

    describe('type only present', () => {
        it('should work properly', () => {
            expect(createQAHook(null, null, '         type of        ')).to.equal("default-type-of");
        })
    });
});

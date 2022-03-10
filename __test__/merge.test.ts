import { deepMerge } from "../src/utils/mergePkgJSON"

test("should deepMerge test be passed!", () => {
    const before = {
        a: "a_value1",
        b: {
            bc: "bc_1",
        },
        c: "c_1",
    }

    const after = {
        a: "a_value2",
        b: {
            bc: "bc_2",
            bc1: "bc1_2",
        },
    }
    expect(deepMerge(before, after)).toEqual({
        a: "a_value2",
        b: {
            bc: "bc_2",
            bc1: "bc1_2",
        },
        c: "c_1",
    })
})

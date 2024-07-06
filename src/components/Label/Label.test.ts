import "@testing-library/jest-dom";
import { getCursorStyle, getOpacityStyle } from "./Label.lib";

test("getCursorStyle returns correct cursor style", () => {
    expect(getCursorStyle(true)).toBe("not-allowed");
    expect(getCursorStyle(false)).toBe("pointer");
});

test("getVisibilityStyle returns correct visibility", () => {
    expect(getOpacityStyle(true)).toBe("0.5");
    expect(getOpacityStyle(false)).toBe("1");
});

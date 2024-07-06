import "@testing-library/jest-dom";
import {
    getCursorStyle,
    getVisibilityStyle,
} from "./Links.lib";

test("getCursorStyle returns correct cursor style", () => {
    expect(getCursorStyle(true)).toBe("not-allowed");
    expect(getCursorStyle(false)).toBe("default");
});

test("getVisibilityStyle returns correct visibility style ", () => {
    expect(getVisibilityStyle(true)).toBe("hidden");
    expect(getVisibilityStyle(false)).toBe("visible");
});
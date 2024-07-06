import "@testing-library/jest-dom";
import { getCursorStyle, getVisibilityStyle } from "./Text.lib";

test("getCursorStyle returns correct cursor style based on disabled prop", () => {
    expect(getCursorStyle(true)).toBe("not-allowed");
    expect(getCursorStyle(false)).toBe("default");
});

test("getVisibilityStyle returns correct visibility style based on hidden prop", () => {
    expect(getVisibilityStyle(true)).toBe("hidden");
    expect(getVisibilityStyle(false)).toBe("visible");
});

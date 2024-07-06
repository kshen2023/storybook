import '@testing-library/jest-dom';
import { getDisplayStyle } from "./Button.lib";
import { getOpacityStyle } from "./Button.lib";

test("getDisplayStyle returns 'none' when the button is hidden", () => {
    const result = getDisplayStyle(false);
    expect(result).toBe("none");
});

test("getDisplayStyle returns 'block' when the button is not hidden", () => {
    const result = getDisplayStyle(false);
    expect(result).toBe("block");
});

test("getOpacityStyle  returns '0.5' when the button is disabled", () => {
    const result = getOpacityStyle(true);
    expect(result).toBe("0.5");
});
test("getOpacityStyle  returns '1' when the button is not disabled", () => {
    const result = getOpacityStyle(false);
    expect(result).toBe("1");
});

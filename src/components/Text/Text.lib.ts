export function getCursorStyle(disabled?: boolean) {
    return disabled ? "not-allowed" : "default";
}

export function getVisibilityStyle(hidden?: boolean) {
    return hidden ? "hidden" : "visible";
}

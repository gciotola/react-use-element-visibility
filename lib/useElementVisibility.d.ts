declare module "useScrollYPosition" {
    export const useScrollYPosition: (delayMs: number) => number;
}
declare module "useWindowHeight" {
    export const useWindowHeight: (delayMs: number) => number;
}
declare module "index" {
    export const useElementVisibility: ElementVisibility;
    export interface VisibilityObject {
        isPartiallyVisible: boolean;
        isTotallyVisible: boolean;
        isTotallyHidden: boolean;
        isPartiallyAboveViewport: boolean;
        isTotallyAboveViewport: boolean;
        isPartiallyBelowViewport: boolean;
        isTotallyBelowViewport: boolean;
    }
    type ElementVisibility = (elementToTrack: React.RefObject<HTMLElement | null>, offsetTop: number, throttleMs?: number) => VisibilityObject;
}

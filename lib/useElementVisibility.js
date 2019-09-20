define("useScrollYPosition", ["require", "exports", "lodash", "react"], function (require, exports, lodash_1, react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var isBrowser = typeof window !== "undefined";
    var getScrollYPosition = function () {
        return isBrowser ? window.pageYOffset : 0;
    };
    exports.useScrollYPosition = function (delayMs) {
        var _a = react_1.useState(getScrollYPosition()), scollYPosition = _a[0], setScrollYPosition = _a[1];
        var handleScroll = function () {
            setScrollYPosition(getScrollYPosition());
        };
        var throttledHandleScroll = lodash_1.throttle(handleScroll, delayMs);
        react_1.useEffect(function () {
            window.addEventListener('scroll', throttledHandleScroll);
            return function () {
                window.addEventListener('scroll', throttledHandleScroll.cancel);
            };
        }, []);
        return scollYPosition;
    };
});
define("useWindowHeight", ["require", "exports", "lodash", "react"], function (require, exports, lodash_2, react_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getWindowHeight = function () { return window.innerHeight; };
    exports.useWindowHeight = function (delayMs) {
        var _a = react_2.useState(getWindowHeight()), windowHeight = _a[0], setWindowHeight = _a[1];
        var handleResize = function () {
            setWindowHeight(getWindowHeight());
        };
        var throttledHandleRezise = lodash_2.throttle(handleResize, delayMs);
        react_2.useEffect(function () {
            window.addEventListener('resize', throttledHandleRezise);
            return function () {
                window.addEventListener('resize', throttledHandleRezise.cancel);
            };
        }, []);
        return windowHeight;
    };
});
define("index", ["require", "exports", "react", "useScrollYPosition", "useWindowHeight"], function (require, exports, react_3, useScrollYPosition_1, useWindowHeight_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useElementVisibility = function (elementToTrack, offsetTop, throttleMs) {
        var throttleValue = throttleMs !== undefined ? throttleMs : 10;
        var scrollYposition = useScrollYPosition_1.useScrollYPosition(throttleValue);
        var windowHeight = useWindowHeight_1.useWindowHeight(throttleValue);
        var _a = react_3.useState({
            isPartiallyVisible: false,
            isTotallyVisible: false,
            isTotallyHidden: false,
            isPartiallyAboveViewport: false,
            isTotallyAboveViewport: false,
            isPartiallyBelowViewport: false,
            isTotallyBelowViewport: false,
        }), elementVisibility = _a[0], updateElementVisibility = _a[1];
        react_3.useEffect(function () {
            var isTrackableElement = Boolean(elementToTrack.current);
            var bounding = elementToTrack.current && elementToTrack.current.getBoundingClientRect();
            var isPartiallyVisible = isTrackableElement &&
                bounding &&
                bounding.top <= windowHeight &&
                bounding.bottom >= offsetTop
                ? true
                : false;
            var isPartiallyAboveViewport = isTrackableElement && bounding && bounding.top - offsetTop <= 0
                ? true
                : false;
            var isTotallyAboveViewport = isPartiallyAboveViewport && !isPartiallyVisible;
            var isPartiallyBelowViewport = isTrackableElement && bounding && bounding.bottom >= windowHeight
                ? true
                : false;
            var isTotallyBelowViewport = isPartiallyBelowViewport && !isPartiallyVisible;
            var isTotallyVisible = isPartiallyVisible &&
                !isPartiallyAboveViewport &&
                !isPartiallyBelowViewport;
            var isTotallyHidden = !isTotallyVisible && !isPartiallyVisible;
            updateElementVisibility({
                isPartiallyVisible: isPartiallyVisible,
                isTotallyVisible: isTotallyVisible,
                isTotallyHidden: isTotallyHidden,
                isPartiallyAboveViewport: isPartiallyAboveViewport,
                isTotallyAboveViewport: isTotallyAboveViewport,
                isPartiallyBelowViewport: isPartiallyBelowViewport,
                isTotallyBelowViewport: isTotallyBelowViewport,
            });
        }, [offsetTop, scrollYposition, windowHeight]);
        return elementVisibility;
    };
});

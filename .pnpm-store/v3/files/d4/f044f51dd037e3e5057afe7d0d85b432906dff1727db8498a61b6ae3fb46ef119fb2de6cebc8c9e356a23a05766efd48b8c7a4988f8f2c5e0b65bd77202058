var $b36jj$react = require("react");
var $b36jj$contentfulf36core = require("@contentful/f36-core");
var $b36jj$emotion = require("emotion");
var $b36jj$contentfulf36tokens = require("@contentful/f36-tokens");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Collapse", () => $b74a0b6a31e34ee6$export$78768a9af065a7b);





const $d94e5835c1823c41$export$67c4b7c8eedcd694 = ({ className: className  })=>{
    return {
        collapseWrapper: $b36jj$emotion.cx(/*#__PURE__*/ $b36jj$emotion.css({
            boxSizing: 'border-box',
            overflow: 'hidden',
            height: 0,
            display: 'none',
            transition: `height ${($parcel$interopDefault($b36jj$contentfulf36tokens)).transitionDurationDefault} ${($parcel$interopDefault($b36jj$contentfulf36tokens)).transitionEasingDefault}, padding ${($parcel$interopDefault($b36jj$contentfulf36tokens)).transitionDurationDefault} ${($parcel$interopDefault($b36jj$contentfulf36tokens)).transitionEasingDefault}`
        }), className)
    };
};


const $b74a0b6a31e34ee6$export$78768a9af065a7b = ({ children: children , className: className , isExpanded: isExpanded = false , testId: testId = 'cf-collapse' , ...otherProps })=>{
    const panelEl = $b36jj$react.useRef(null);
    const styles = $d94e5835c1823c41$export$67c4b7c8eedcd694({
        className: className
    });
    const getPanelContentHeight = ()=>{
        const { current: current  } = panelEl;
        if (!current) // to keep the function return type as string only and
        // not overcomplicate things with non-nullable checks
        return '0px';
        return `${current.scrollHeight}px`;
    };
    $b36jj$react.useLayoutEffect(()=>{
        const { current: current  } = panelEl;
        const handleTransitionEnd = ()=>{
            if (current) {
                if (isExpanded) current.style.setProperty('height', 'auto');
                else {
                    current.style.removeProperty('pointer-events');
                    current.style.setProperty('display', 'none');
                }
            }
        };
        if (current) {
            current.addEventListener('transitionend', handleTransitionEnd);
            requestAnimationFrame(function() {
                if (!isExpanded) // Don't allow interaction while collapsing
                current.style.setProperty('pointer-events', 'none');
                else {
                    // Overwrite none display to see expanding transition
                    current.style.setProperty('display', 'block');
                    current.style.removeProperty('pointer-events');
                } // Calculate panel height after removing none display
                const fromHeight = isExpanded ? '0px' : getPanelContentHeight();
                const toHeight = isExpanded ? getPanelContentHeight() : '0px';
                current.style.setProperty('height', fromHeight);
                requestAnimationFrame(function() {
                    current.style.setProperty('height', toHeight);
                });
            });
        }
        return ()=>{
            if (current) current.removeEventListener('transitionend', handleTransitionEnd);
        };
    }, [
        isExpanded
    ]);
    return /*#__PURE__*/ ($parcel$interopDefault($b36jj$react)).createElement($b36jj$contentfulf36core.Box, {
        ...otherProps,
        testId: testId,
        role: "region",
        "aria-hidden": !isExpanded,
        className: styles.collapseWrapper,
        ref: panelEl
    }, children);
};




//# sourceMappingURL=main.js.map

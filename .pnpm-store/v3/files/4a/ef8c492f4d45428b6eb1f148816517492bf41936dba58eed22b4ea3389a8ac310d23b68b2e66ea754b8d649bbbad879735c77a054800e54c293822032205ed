import $k3Dqa$react, {useRef as $k3Dqa$useRef, useLayoutEffect as $k3Dqa$useLayoutEffect} from "react";
import {Box as $k3Dqa$Box} from "@contentful/f36-core";
import {cx as $k3Dqa$cx, css as $k3Dqa$css} from "emotion";
import $k3Dqa$contentfulf36tokens from "@contentful/f36-tokens";






const $738f6177011fac25$export$67c4b7c8eedcd694 = ({ className: className  })=>{
    return {
        collapseWrapper: $k3Dqa$cx(/*#__PURE__*/ $k3Dqa$css({
            boxSizing: 'border-box',
            overflow: 'hidden',
            height: 0,
            display: 'none',
            transition: `height ${$k3Dqa$contentfulf36tokens.transitionDurationDefault} ${$k3Dqa$contentfulf36tokens.transitionEasingDefault}, padding ${$k3Dqa$contentfulf36tokens.transitionDurationDefault} ${$k3Dqa$contentfulf36tokens.transitionEasingDefault}`
        }), className)
    };
};


const $31dbe30f6e3c4e2f$export$78768a9af065a7b = ({ children: children , className: className , isExpanded: isExpanded = false , testId: testId = 'cf-collapse' , ...otherProps })=>{
    const panelEl = $k3Dqa$useRef(null);
    const styles = $738f6177011fac25$export$67c4b7c8eedcd694({
        className: className
    });
    const getPanelContentHeight = ()=>{
        const { current: current  } = panelEl;
        if (!current) // to keep the function return type as string only and
        // not overcomplicate things with non-nullable checks
        return '0px';
        return `${current.scrollHeight}px`;
    };
    $k3Dqa$useLayoutEffect(()=>{
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
    return /*#__PURE__*/ $k3Dqa$react.createElement($k3Dqa$Box, {
        ...otherProps,
        testId: testId,
        role: "region",
        "aria-hidden": !isExpanded,
        className: styles.collapseWrapper,
        ref: panelEl
    }, children);
};




export {$31dbe30f6e3c4e2f$export$78768a9af065a7b as Collapse};
//# sourceMappingURL=module.js.map

import {cx as $8USmO$cx, css as $8USmO$css} from "emotion";
import $8USmO$react, {useState as $8USmO$useState, useCallback as $8USmO$useCallback} from "react";
import {DragIcon as $8USmO$DragIcon} from "@contentful/f36-icons";
import $8USmO$contentfulf36tokens from "@contentful/f36-tokens";







const $1282af47e008eae6$export$ffd58b7f6f099a57 = ()=>({
        label: /*#__PURE__*/ $8USmO$css({
            name: "1b512s9",
            styles: "position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;"
        }),
        root: ({ isActive: isActive , isFocused: isFocused , isHovered: isHovered  })=>{
            return $8USmO$cx(/*#__PURE__*/ $8USmO$css({
                alignItems: 'center',
                backgroundColor: $8USmO$contentfulf36tokens.gray100,
                border: 0,
                borderBottomLeftRadius: $8USmO$contentfulf36tokens.borderRadiusMedium,
                borderRight: `1px solid ${$8USmO$contentfulf36tokens.gray200}`,
                borderTopLeftRadius: $8USmO$contentfulf36tokens.borderRadiusMedium,
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center',
                padding: 0,
                position: 'relative',
                transition: `background-color ${$8USmO$contentfulf36tokens.transitionDurationDefault} ${$8USmO$contentfulf36tokens.transitionEasingDefault}`,
                width: $8USmO$contentfulf36tokens.spacingL,
                '&:hover': {
                    backgroundColor: $8USmO$contentfulf36tokens.gray200
                },
                '&:focus': {
                    boxShadow: $8USmO$contentfulf36tokens.glowPrimary
                },
                '&:focus:not(:focus-visible)': {
                    boxShadow: 'unset'
                },
                '&:focus-visible': {
                    boxShadow: $8USmO$contentfulf36tokens.glowPrimary
                }
            }), (isActive || isFocused || isHovered) && /*#__PURE__*/ $8USmO$css({
                backgroundColor: $8USmO$contentfulf36tokens.gray200,
                cursor: isActive ? 'grabbing' : 'grab'
            }));
        }
    })
;


//
// The other alternative way to fix it was to pass a custom `shouldCancelStart` callback,
// in every place where we use this component with react-sortable-hoc.
// (the custom callback with all the logic from default callback, but without button event cancelation).
// So we decided that just changing it to the div, as it was in v3, is a better fix.
//
// default shouldCancelStart callback:
// https://github.com/clauderic/react-sortable-hoc/blob/d94ba3cc67cfc7d6d460b585e7723bdb50015e53/src/SortableContainer/defaultShouldCancelStart.js
const $0d6e001a91dc675e$var$DRAG_HANDLE_DEFAULT_TAG = 'div';
function $0d6e001a91dc675e$var$_DragHandle(props, ref) {
    const styles = $1282af47e008eae6$export$ffd58b7f6f099a57();
    const { as: as = $0d6e001a91dc675e$var$DRAG_HANDLE_DEFAULT_TAG , className: className , isActive: isActive , isFocused: isFocusedProp , isHovered: isHoveredProp , label: label , onBlur: onBlur , onFocus: onFocus , onMouseEnter: onMouseEnter , onMouseLeave: onMouseLeave , testId: testId = 'cf-ui-drag-handle' , style: style , ...otherProps } = props;
    const [isFocused, setisFocused] = $8USmO$useState(isFocusedProp);
    const [isHovered, setisHovered] = $8USmO$useState(isHoveredProp);
    const handleFocus = $8USmO$useCallback((event)=>{
        setisFocused(true);
        if (onFocus) onFocus(event);
    }, [
        onFocus
    ]);
    const handleBlur = $8USmO$useCallback((event)=>{
        setisFocused(false);
        if (onBlur) onBlur(event);
    }, [
        onBlur
    ]);
    const handleMouseEnter = $8USmO$useCallback((event)=>{
        setisHovered(true);
        if (onMouseEnter) onMouseEnter(event);
    }, [
        onMouseEnter
    ]);
    const handleMouseLeave = $8USmO$useCallback((event)=>{
        setisHovered(false);
        if (onMouseLeave) onMouseLeave(event);
    }, [
        onMouseLeave
    ]);
    const commonProps = {
        className: $8USmO$cx(styles.root({
            isActive: isActive,
            isFocused: isFocused,
            isHovered: isHovered
        }), className),
        'data-test-id': testId,
        onBlur: handleBlur,
        onFocus: handleFocus,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        ref: ref,
        style: style
    };
    if (as === 'div') return /*#__PURE__*/ $8USmO$react.createElement("div", {
        ...otherProps,
        ...commonProps,
        role: "button",
        tabIndex: 0
    }, /*#__PURE__*/ $8USmO$react.createElement($8USmO$DragIcon, {
        variant: "muted"
    }), /*#__PURE__*/ $8USmO$react.createElement("span", {
        className: styles.label
    }, label));
    return /*#__PURE__*/ $8USmO$react.createElement("button", {
        ...otherProps,
        ...commonProps,
        type: "button"
    }, /*#__PURE__*/ $8USmO$react.createElement($8USmO$DragIcon, {
        variant: "muted"
    }), /*#__PURE__*/ $8USmO$react.createElement("span", {
        className: styles.label
    }, label));
}
const $0d6e001a91dc675e$export$a0c24614540b0efb = /*#__PURE__*/ $8USmO$react.forwardRef($0d6e001a91dc675e$var$_DragHandle);




export {$0d6e001a91dc675e$export$a0c24614540b0efb as DragHandle};
//# sourceMappingURL=module.js.map

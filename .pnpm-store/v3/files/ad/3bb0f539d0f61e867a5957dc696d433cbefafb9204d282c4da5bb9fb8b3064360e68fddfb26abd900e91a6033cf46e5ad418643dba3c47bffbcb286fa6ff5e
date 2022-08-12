var $9zqHf$emotion = require("emotion");
var $9zqHf$react = require("react");
var $9zqHf$contentfulf36icons = require("@contentful/f36-icons");
var $9zqHf$contentfulf36tokens = require("@contentful/f36-tokens");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "DragHandle", () => $7340ff11beb99de7$export$a0c24614540b0efb);






const $590c5f6da3a22459$export$ffd58b7f6f099a57 = ()=>({
        label: /*#__PURE__*/ $9zqHf$emotion.css({
            name: "1b512s9",
            styles: "position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;"
        }),
        root: ({ isActive: isActive , isFocused: isFocused , isHovered: isHovered  })=>{
            return $9zqHf$emotion.cx(/*#__PURE__*/ $9zqHf$emotion.css({
                alignItems: 'center',
                backgroundColor: ($parcel$interopDefault($9zqHf$contentfulf36tokens)).gray100,
                border: 0,
                borderBottomLeftRadius: ($parcel$interopDefault($9zqHf$contentfulf36tokens)).borderRadiusMedium,
                borderRight: `1px solid ${($parcel$interopDefault($9zqHf$contentfulf36tokens)).gray200}`,
                borderTopLeftRadius: ($parcel$interopDefault($9zqHf$contentfulf36tokens)).borderRadiusMedium,
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center',
                padding: 0,
                position: 'relative',
                transition: `background-color ${($parcel$interopDefault($9zqHf$contentfulf36tokens)).transitionDurationDefault} ${($parcel$interopDefault($9zqHf$contentfulf36tokens)).transitionEasingDefault}`,
                width: ($parcel$interopDefault($9zqHf$contentfulf36tokens)).spacingL,
                '&:hover': {
                    backgroundColor: ($parcel$interopDefault($9zqHf$contentfulf36tokens)).gray200
                },
                '&:focus': {
                    boxShadow: ($parcel$interopDefault($9zqHf$contentfulf36tokens)).glowPrimary
                },
                '&:focus:not(:focus-visible)': {
                    boxShadow: 'unset'
                },
                '&:focus-visible': {
                    boxShadow: ($parcel$interopDefault($9zqHf$contentfulf36tokens)).glowPrimary
                }
            }), (isActive || isFocused || isHovered) && /*#__PURE__*/ $9zqHf$emotion.css({
                backgroundColor: ($parcel$interopDefault($9zqHf$contentfulf36tokens)).gray200,
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
const $7340ff11beb99de7$var$DRAG_HANDLE_DEFAULT_TAG = 'div';
function $7340ff11beb99de7$var$_DragHandle(props, ref) {
    const styles = $590c5f6da3a22459$export$ffd58b7f6f099a57();
    const { as: as = $7340ff11beb99de7$var$DRAG_HANDLE_DEFAULT_TAG , className: className , isActive: isActive , isFocused: isFocusedProp , isHovered: isHoveredProp , label: label , onBlur: onBlur , onFocus: onFocus , onMouseEnter: onMouseEnter , onMouseLeave: onMouseLeave , testId: testId = 'cf-ui-drag-handle' , style: style , ...otherProps } = props;
    const [isFocused, setisFocused] = $9zqHf$react.useState(isFocusedProp);
    const [isHovered, setisHovered] = $9zqHf$react.useState(isHoveredProp);
    const handleFocus = $9zqHf$react.useCallback((event)=>{
        setisFocused(true);
        if (onFocus) onFocus(event);
    }, [
        onFocus
    ]);
    const handleBlur = $9zqHf$react.useCallback((event)=>{
        setisFocused(false);
        if (onBlur) onBlur(event);
    }, [
        onBlur
    ]);
    const handleMouseEnter = $9zqHf$react.useCallback((event)=>{
        setisHovered(true);
        if (onMouseEnter) onMouseEnter(event);
    }, [
        onMouseEnter
    ]);
    const handleMouseLeave = $9zqHf$react.useCallback((event)=>{
        setisHovered(false);
        if (onMouseLeave) onMouseLeave(event);
    }, [
        onMouseLeave
    ]);
    const commonProps = {
        className: $9zqHf$emotion.cx(styles.root({
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
    if (as === 'div') return /*#__PURE__*/ ($parcel$interopDefault($9zqHf$react)).createElement("div", {
        ...otherProps,
        ...commonProps,
        role: "button",
        tabIndex: 0
    }, /*#__PURE__*/ ($parcel$interopDefault($9zqHf$react)).createElement($9zqHf$contentfulf36icons.DragIcon, {
        variant: "muted"
    }), /*#__PURE__*/ ($parcel$interopDefault($9zqHf$react)).createElement("span", {
        className: styles.label
    }, label));
    return /*#__PURE__*/ ($parcel$interopDefault($9zqHf$react)).createElement("button", {
        ...otherProps,
        ...commonProps,
        type: "button"
    }, /*#__PURE__*/ ($parcel$interopDefault($9zqHf$react)).createElement($9zqHf$contentfulf36icons.DragIcon, {
        variant: "muted"
    }), /*#__PURE__*/ ($parcel$interopDefault($9zqHf$react)).createElement("span", {
        className: styles.label
    }, label));
}
const $7340ff11beb99de7$export$a0c24614540b0efb = /*#__PURE__*/ ($parcel$interopDefault($9zqHf$react)).forwardRef($7340ff11beb99de7$var$_DragHandle);




//# sourceMappingURL=main.js.map

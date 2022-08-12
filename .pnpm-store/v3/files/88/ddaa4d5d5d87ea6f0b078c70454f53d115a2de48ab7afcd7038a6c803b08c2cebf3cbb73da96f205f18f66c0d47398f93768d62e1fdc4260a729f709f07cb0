var $kKXtg$emotion = require("emotion");
var $kKXtg$react = require("react");
var $kKXtg$contentfulf36tooltip = require("@contentful/f36-tooltip");
var $kKXtg$contentfulf36icons = require("@contentful/f36-icons");
var $kKXtg$contentfulf36button = require("@contentful/f36-button");
var $kKXtg$contentfulf36tokens = require("@contentful/f36-tokens");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Pill", () => $bc3f6edf150dce19$export$d2cf3038149dd1b5);







const $a9ab23b916aea562$var$getCloseButtonStyle = ()=>{
    return /*#__PURE__*/ $kKXtg$emotion.css({
        borderLeft: `1px solid ${($parcel$interopDefault($kKXtg$contentfulf36tokens)).gray400}`,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        padding: ($parcel$interopDefault($kKXtg$contentfulf36tokens)).spacingXs,
        minHeight: 'auto',
        transition: `background ${($parcel$interopDefault($kKXtg$contentfulf36tokens)).transitionDurationShort} ${($parcel$interopDefault($kKXtg$contentfulf36tokens)).transitionEasingDefault},
    opacity ${($parcel$interopDefault($kKXtg$contentfulf36tokens)).transitionDurationDefault} ${($parcel$interopDefault($kKXtg$contentfulf36tokens)).transitionEasingDefault}`,
        '&:focus': {
            boxShadow: ($parcel$interopDefault($kKXtg$contentfulf36tokens)).glowMuted,
            borderLeftColor: ($parcel$interopDefault($kKXtg$contentfulf36tokens)).gray300
        },
        '&:hover, &:focus, &:active': {
            backgroundColor: ($parcel$interopDefault($kKXtg$contentfulf36tokens)).gray300
        }
    });
};
const $a9ab23b916aea562$var$getLabelStyle = ()=>{
    return /*#__PURE__*/ $kKXtg$emotion.css({
        color: ($parcel$interopDefault($kKXtg$contentfulf36tokens)).gray700,
        lineHeight: ($parcel$interopDefault($kKXtg$contentfulf36tokens)).lineHeightM,
        padding: ($parcel$interopDefault($kKXtg$contentfulf36tokens)).spacingXs,
        fontSize: ($parcel$interopDefault($kKXtg$contentfulf36tokens)).fontSizeM,
        flexGrow: 2,
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
    });
};
const $a9ab23b916aea562$var$getPillStyle = (variant1)=>{
    const variantStyle = (variant)=>{
        switch(variant){
            case 'active':
                return {
                    background: ($parcel$interopDefault($kKXtg$contentfulf36tokens)).gray300
                };
            case 'deleted':
                return {
                    background: ($parcel$interopDefault($kKXtg$contentfulf36tokens)).gray200,
                    textDecoration: 'line-through',
                    opacity: '0.5'
                };
            default:
                return {
                    background: ($parcel$interopDefault($kKXtg$contentfulf36tokens)).gray200
                };
        }
    };
    return /*#__PURE__*/ $kKXtg$emotion.css({
        display: 'inline-flex',
        fontFamily: ($parcel$interopDefault($kKXtg$contentfulf36tokens)).fontStackPrimary,
        alignItems: 'center',
        borderRadius: ($parcel$interopDefault($kKXtg$contentfulf36tokens)).borderRadiusSmall,
        border: 'none',
        padding: 0,
        maxWidth: '100%',
        ...variantStyle(variant1)
    });
};
function $a9ab23b916aea562$export$f8a32d770d8a45c9(variant) {
    return {
        closeButton: $a9ab23b916aea562$var$getCloseButtonStyle(),
        label: $a9ab23b916aea562$var$getLabelStyle(),
        icon: /*#__PURE__*/ $kKXtg$emotion.css({
            fill: ($parcel$interopDefault($kKXtg$contentfulf36tokens)).gray600,
            verticalAlign: 'middle',
            outline: 'none'
        }),
        dragIcon: /*#__PURE__*/ $kKXtg$emotion.css({
            padding: ($parcel$interopDefault($kKXtg$contentfulf36tokens)).spacingXs,
            paddingRight: 0,
            cursor: 'move'
        }),
        pill: $a9ab23b916aea562$var$getPillStyle(variant)
    };
}


const $bc3f6edf150dce19$export$d2cf3038149dd1b5 = /*#__PURE__*/ ($parcel$interopDefault($kKXtg$react)).forwardRef((props, ref1)=>{
    const { label: label , onClose: onClose , testId: testId = 'cf-ui-pill' , onDrag: onDrag , className: className , dragHandleComponent: dragHandleComponent , variant: variant = 'idle' , ...otherProps } = props;
    const styles = $a9ab23b916aea562$export$f8a32d770d8a45c9(variant);
    const [textIsTruncated, setTextIsTruncated] = ($parcel$interopDefault($kKXtg$react)).useState(false);
    const trackRefChange = ($parcel$interopDefault($kKXtg$react)).useCallback((ref)=>{
        if (!ref) return;
        const { scrollWidth: scrollWidth , offsetWidth: offsetWidth  } = ref.parentElement;
        setTextIsTruncated(scrollWidth > offsetWidth);
    }, [
        setTextIsTruncated
    ]);
    return /*#__PURE__*/ ($parcel$interopDefault($kKXtg$react)).createElement("div", {
        className: $kKXtg$emotion.cx(styles.pill, className),
        "data-test-id": testId,
        onDrag: onDrag,
        ref: ref1,
        ...otherProps
    }, onDrag && (dragHandleComponent ? dragHandleComponent : /*#__PURE__*/ ($parcel$interopDefault($kKXtg$react)).createElement("span", {
        "aria-label": "Drag handler",
        className: styles.dragIcon
    }, /*#__PURE__*/ ($parcel$interopDefault($kKXtg$react)).createElement($kKXtg$contentfulf36icons.DragIcon, {
        className: styles.icon,
        variant: "muted"
    }))), /*#__PURE__*/ ($parcel$interopDefault($kKXtg$react)).createElement($kKXtg$contentfulf36tooltip.Tooltip, {
        content: label,
        maxWidth: "none",
        targetWrapperClassName: styles.label,
        isDisabled: !textIsTruncated
    }, /*#__PURE__*/ ($parcel$interopDefault($kKXtg$react)).createElement("span", {
        ref: trackRefChange
    }, label)), onClose && /*#__PURE__*/ ($parcel$interopDefault($kKXtg$react)).createElement($kKXtg$contentfulf36button.Button, {
        type: "button",
        variant: "transparent",
        startIcon: /*#__PURE__*/ ($parcel$interopDefault($kKXtg$react)).createElement($kKXtg$contentfulf36icons.CloseIcon, {
            "aria-label": "Close"
        }),
        "aria-label": "Close",
        onClick: onClose,
        className: styles.closeButton
    }));
});
$bc3f6edf150dce19$export$d2cf3038149dd1b5.displayName = 'Pill';




//# sourceMappingURL=main.js.map

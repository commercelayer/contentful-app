import {cx as $eBAed$cx, css as $eBAed$css} from "emotion";
import $eBAed$react from "react";
import {Tooltip as $eBAed$Tooltip} from "@contentful/f36-tooltip";
import {DragIcon as $eBAed$DragIcon, CloseIcon as $eBAed$CloseIcon} from "@contentful/f36-icons";
import {Button as $eBAed$Button} from "@contentful/f36-button";
import $eBAed$contentfulf36tokens from "@contentful/f36-tokens";








const $c9003ed854b253a9$var$getCloseButtonStyle = ()=>{
    return /*#__PURE__*/ $eBAed$css({
        borderLeft: `1px solid ${$eBAed$contentfulf36tokens.gray400}`,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        padding: $eBAed$contentfulf36tokens.spacingXs,
        minHeight: 'auto',
        transition: `background ${$eBAed$contentfulf36tokens.transitionDurationShort} ${$eBAed$contentfulf36tokens.transitionEasingDefault},
    opacity ${$eBAed$contentfulf36tokens.transitionDurationDefault} ${$eBAed$contentfulf36tokens.transitionEasingDefault}`,
        '&:focus': {
            boxShadow: $eBAed$contentfulf36tokens.glowMuted,
            borderLeftColor: $eBAed$contentfulf36tokens.gray300
        },
        '&:hover, &:focus, &:active': {
            backgroundColor: $eBAed$contentfulf36tokens.gray300
        }
    });
};
const $c9003ed854b253a9$var$getLabelStyle = ()=>{
    return /*#__PURE__*/ $eBAed$css({
        color: $eBAed$contentfulf36tokens.gray700,
        lineHeight: $eBAed$contentfulf36tokens.lineHeightM,
        padding: $eBAed$contentfulf36tokens.spacingXs,
        fontSize: $eBAed$contentfulf36tokens.fontSizeM,
        flexGrow: 2,
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
    });
};
const $c9003ed854b253a9$var$getPillStyle = (variant1)=>{
    const variantStyle = (variant)=>{
        switch(variant){
            case 'active':
                return {
                    background: $eBAed$contentfulf36tokens.gray300
                };
            case 'deleted':
                return {
                    background: $eBAed$contentfulf36tokens.gray200,
                    textDecoration: 'line-through',
                    opacity: '0.5'
                };
            default:
                return {
                    background: $eBAed$contentfulf36tokens.gray200
                };
        }
    };
    return /*#__PURE__*/ $eBAed$css({
        display: 'inline-flex',
        fontFamily: $eBAed$contentfulf36tokens.fontStackPrimary,
        alignItems: 'center',
        borderRadius: $eBAed$contentfulf36tokens.borderRadiusSmall,
        border: 'none',
        padding: 0,
        maxWidth: '100%',
        ...variantStyle(variant1)
    });
};
function $c9003ed854b253a9$export$f8a32d770d8a45c9(variant) {
    return {
        closeButton: $c9003ed854b253a9$var$getCloseButtonStyle(),
        label: $c9003ed854b253a9$var$getLabelStyle(),
        icon: /*#__PURE__*/ $eBAed$css({
            fill: $eBAed$contentfulf36tokens.gray600,
            verticalAlign: 'middle',
            outline: 'none'
        }),
        dragIcon: /*#__PURE__*/ $eBAed$css({
            padding: $eBAed$contentfulf36tokens.spacingXs,
            paddingRight: 0,
            cursor: 'move'
        }),
        pill: $c9003ed854b253a9$var$getPillStyle(variant)
    };
}


const $cea80b934e2f5738$export$d2cf3038149dd1b5 = /*#__PURE__*/ $eBAed$react.forwardRef((props, ref1)=>{
    const { label: label , onClose: onClose , testId: testId = 'cf-ui-pill' , onDrag: onDrag , className: className , dragHandleComponent: dragHandleComponent , variant: variant = 'idle' , ...otherProps } = props;
    const styles = $c9003ed854b253a9$export$f8a32d770d8a45c9(variant);
    const [textIsTruncated, setTextIsTruncated] = $eBAed$react.useState(false);
    const trackRefChange = $eBAed$react.useCallback((ref)=>{
        if (!ref) return;
        const { scrollWidth: scrollWidth , offsetWidth: offsetWidth  } = ref.parentElement;
        setTextIsTruncated(scrollWidth > offsetWidth);
    }, [
        setTextIsTruncated
    ]);
    return /*#__PURE__*/ $eBAed$react.createElement("div", {
        className: $eBAed$cx(styles.pill, className),
        "data-test-id": testId,
        onDrag: onDrag,
        ref: ref1,
        ...otherProps
    }, onDrag && (dragHandleComponent ? dragHandleComponent : /*#__PURE__*/ $eBAed$react.createElement("span", {
        "aria-label": "Drag handler",
        className: styles.dragIcon
    }, /*#__PURE__*/ $eBAed$react.createElement($eBAed$DragIcon, {
        className: styles.icon,
        variant: "muted"
    }))), /*#__PURE__*/ $eBAed$react.createElement($eBAed$Tooltip, {
        content: label,
        maxWidth: "none",
        targetWrapperClassName: styles.label,
        isDisabled: !textIsTruncated
    }, /*#__PURE__*/ $eBAed$react.createElement("span", {
        ref: trackRefChange
    }, label)), onClose && /*#__PURE__*/ $eBAed$react.createElement($eBAed$Button, {
        type: "button",
        variant: "transparent",
        startIcon: /*#__PURE__*/ $eBAed$react.createElement($eBAed$CloseIcon, {
            "aria-label": "Close"
        }),
        "aria-label": "Close",
        onClick: onClose,
        className: styles.closeButton
    }));
});
$cea80b934e2f5738$export$d2cf3038149dd1b5.displayName = 'Pill';




export {$cea80b934e2f5738$export$d2cf3038149dd1b5 as Pill};
//# sourceMappingURL=module.js.map

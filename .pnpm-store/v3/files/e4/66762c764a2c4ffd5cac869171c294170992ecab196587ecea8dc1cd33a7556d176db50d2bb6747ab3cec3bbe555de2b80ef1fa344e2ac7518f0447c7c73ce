import {cx as $dnnsg$cx, css as $dnnsg$css} from "emotion";
import $dnnsg$react, {useState as $dnnsg$useState, useRef as $dnnsg$useRef, useCallback as $dnnsg$useCallback} from "react";
import $dnnsg$reactcopytoclipboard from "react-copy-to-clipboard";
import {CopyIcon as $dnnsg$CopyIcon} from "@contentful/f36-icons";
import {Tooltip as $dnnsg$Tooltip} from "@contentful/f36-tooltip";
import $dnnsg$contentfulf36tokens from "@contentful/f36-tokens";








const $c5d0896db030b9aa$export$ffd58b7f6f099a57 = ({ size: size  })=>{
    const buttonSize = size === 'small' ? '32px' : '40px';
    return {
        wrapper: /*#__PURE__*/ $dnnsg$css({
            display: 'inline-block',
            height: buttonSize,
            position: 'relative',
            width: buttonSize
        }),
        copyButton: /*#__PURE__*/ $dnnsg$css({
            alignItems: 'center',
            background: $dnnsg$contentfulf36tokens.colorWhite,
            border: `1px solid ${$dnnsg$contentfulf36tokens.gray300}`,
            display: 'inline-flex',
            height: '100%',
            justifyContent: 'center',
            outline: 'none',
            padding: 0,
            transition: `background ${$dnnsg$contentfulf36tokens.transitionDurationShort} ${$dnnsg$contentfulf36tokens.transitionEasingDefault}`,
            width: '100%',
            '&:hover': {
                backgroundColor: $dnnsg$contentfulf36tokens.gray100,
                cursor: 'pointer'
            },
            '&:active': {
                backgroundColor: $dnnsg$contentfulf36tokens.gray200,
                cursor: 'pointer'
            },
            '&:focus': {
                boxShadow: $dnnsg$contentfulf36tokens.glowMuted
            },
            '&:focus:not(:focus-visible)': {
                boxShadow: 'unset'
            },
            '&:focus-visible': {
                boxShadow: $dnnsg$contentfulf36tokens.glowMuted
            }
        }),
        copyButtonDisabled: /*#__PURE__*/ $dnnsg$css({
            cursor: 'not-allowed',
            backgroundColor: $dnnsg$contentfulf36tokens.gray100,
            '&:hover': {
                cursor: 'not-allowed',
                backgroundColor: $dnnsg$contentfulf36tokens.gray100
            },
            '&:focus': {
                borderColor: $dnnsg$contentfulf36tokens.gray300,
                boxShadow: 'none'
            },
            '&:active, &:active:hover': {
                borderColor: $dnnsg$contentfulf36tokens.gray300,
                boxShadow: 'none'
            }
        })
    };
};


function $b6698237aa721326$var$_CopyButton(props, ref) {
    const { onCopy: onCopy , value: value , className: className , testId: testId = 'cf-ui-copy-button' , tooltipText: tooltipText = 'Copy to clipboard' , tooltipCopiedText: tooltipCopiedText = 'Copied!' , tooltipProps: tooltipProps , isDisabled: isDisabled = false , size: size = 'medium' , ...otherProps } = props;
    const styles = $c5d0896db030b9aa$export$ffd58b7f6f099a57({
        size: size
    });
    const [copied, setCopied] = $dnnsg$useState(false);
    const button = $dnnsg$useRef(null);
    const handleOnCopy = $dnnsg$useCallback((e)=>{
        if (onCopy) onCopy(e);
        setCopied(true);
        setTimeout(()=>{
            setCopied(false);
            if (button.current) button.current.blur();
        }, 1000);
    }, [
        onCopy
    ]);
    return /*#__PURE__*/ $dnnsg$react.createElement("div", {
        ref: ref,
        "data-test-id": testId,
        className: $dnnsg$cx(styles.wrapper, className),
        ...otherProps
    }, /*#__PURE__*/ $dnnsg$react.createElement($dnnsg$reactcopytoclipboard, {
        text: value,
        onCopy: handleOnCopy
    }, /*#__PURE__*/ $dnnsg$react.createElement($dnnsg$Tooltip, {
        content: copied ? tooltipCopiedText : tooltipText,
        ...tooltipProps,
        isDisabled: isDisabled
    }, /*#__PURE__*/ $dnnsg$react.createElement("button", {
        type: "button",
        ref: button,
        className: $dnnsg$cx(styles.copyButton, {
            [styles.copyButtonDisabled]: isDisabled
        }),
        "aria-label": `Copy ${value} to clipboard`,
        disabled: isDisabled,
        "aria-live": "assertive"
    }, /*#__PURE__*/ $dnnsg$react.createElement($dnnsg$CopyIcon, {
        variant: "muted",
        size: size === 'small' ? 'tiny' : 'small'
    })))));
}
$b6698237aa721326$var$_CopyButton.displayName = 'CopyButton';
const $b6698237aa721326$export$4f2558dd25106ae2 = /*#__PURE__*/ $dnnsg$react.forwardRef($b6698237aa721326$var$_CopyButton);




export {$b6698237aa721326$export$4f2558dd25106ae2 as CopyButton};
//# sourceMappingURL=module.js.map

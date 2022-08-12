var $2mOCL$emotion = require("emotion");
var $2mOCL$react = require("react");
var $2mOCL$reactcopytoclipboard = require("react-copy-to-clipboard");
var $2mOCL$contentfulf36icons = require("@contentful/f36-icons");
var $2mOCL$contentfulf36tooltip = require("@contentful/f36-tooltip");
var $2mOCL$contentfulf36tokens = require("@contentful/f36-tokens");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "CopyButton", () => $7cfc52ec8d291deb$export$4f2558dd25106ae2);







const $a21422a7510521de$export$ffd58b7f6f099a57 = ({ size: size  })=>{
    const buttonSize = size === 'small' ? '32px' : '40px';
    return {
        wrapper: /*#__PURE__*/ $2mOCL$emotion.css({
            display: 'inline-block',
            height: buttonSize,
            position: 'relative',
            width: buttonSize
        }),
        copyButton: /*#__PURE__*/ $2mOCL$emotion.css({
            alignItems: 'center',
            background: ($parcel$interopDefault($2mOCL$contentfulf36tokens)).colorWhite,
            border: `1px solid ${($parcel$interopDefault($2mOCL$contentfulf36tokens)).gray300}`,
            display: 'inline-flex',
            height: '100%',
            justifyContent: 'center',
            outline: 'none',
            padding: 0,
            transition: `background ${($parcel$interopDefault($2mOCL$contentfulf36tokens)).transitionDurationShort} ${($parcel$interopDefault($2mOCL$contentfulf36tokens)).transitionEasingDefault}`,
            width: '100%',
            '&:hover': {
                backgroundColor: ($parcel$interopDefault($2mOCL$contentfulf36tokens)).gray100,
                cursor: 'pointer'
            },
            '&:active': {
                backgroundColor: ($parcel$interopDefault($2mOCL$contentfulf36tokens)).gray200,
                cursor: 'pointer'
            },
            '&:focus': {
                boxShadow: ($parcel$interopDefault($2mOCL$contentfulf36tokens)).glowMuted
            },
            '&:focus:not(:focus-visible)': {
                boxShadow: 'unset'
            },
            '&:focus-visible': {
                boxShadow: ($parcel$interopDefault($2mOCL$contentfulf36tokens)).glowMuted
            }
        }),
        copyButtonDisabled: /*#__PURE__*/ $2mOCL$emotion.css({
            cursor: 'not-allowed',
            backgroundColor: ($parcel$interopDefault($2mOCL$contentfulf36tokens)).gray100,
            '&:hover': {
                cursor: 'not-allowed',
                backgroundColor: ($parcel$interopDefault($2mOCL$contentfulf36tokens)).gray100
            },
            '&:focus': {
                borderColor: ($parcel$interopDefault($2mOCL$contentfulf36tokens)).gray300,
                boxShadow: 'none'
            },
            '&:active, &:active:hover': {
                borderColor: ($parcel$interopDefault($2mOCL$contentfulf36tokens)).gray300,
                boxShadow: 'none'
            }
        })
    };
};


function $7cfc52ec8d291deb$var$_CopyButton(props, ref) {
    const { onCopy: onCopy , value: value , className: className , testId: testId = 'cf-ui-copy-button' , tooltipText: tooltipText = 'Copy to clipboard' , tooltipCopiedText: tooltipCopiedText = 'Copied!' , tooltipProps: tooltipProps , isDisabled: isDisabled = false , size: size = 'medium' , ...otherProps } = props;
    const styles = $a21422a7510521de$export$ffd58b7f6f099a57({
        size: size
    });
    const [copied, setCopied] = $2mOCL$react.useState(false);
    const button = $2mOCL$react.useRef(null);
    const handleOnCopy = $2mOCL$react.useCallback((e)=>{
        if (onCopy) onCopy(e);
        setCopied(true);
        setTimeout(()=>{
            setCopied(false);
            if (button.current) button.current.blur();
        }, 1000);
    }, [
        onCopy
    ]);
    return /*#__PURE__*/ ($parcel$interopDefault($2mOCL$react)).createElement("div", {
        ref: ref,
        "data-test-id": testId,
        className: $2mOCL$emotion.cx(styles.wrapper, className),
        ...otherProps
    }, /*#__PURE__*/ ($parcel$interopDefault($2mOCL$react)).createElement(($parcel$interopDefault($2mOCL$reactcopytoclipboard)), {
        text: value,
        onCopy: handleOnCopy
    }, /*#__PURE__*/ ($parcel$interopDefault($2mOCL$react)).createElement($2mOCL$contentfulf36tooltip.Tooltip, {
        content: copied ? tooltipCopiedText : tooltipText,
        ...tooltipProps,
        isDisabled: isDisabled
    }, /*#__PURE__*/ ($parcel$interopDefault($2mOCL$react)).createElement("button", {
        type: "button",
        ref: button,
        className: $2mOCL$emotion.cx(styles.copyButton, {
            [styles.copyButtonDisabled]: isDisabled
        }),
        "aria-label": `Copy ${value} to clipboard`,
        disabled: isDisabled,
        "aria-live": "assertive"
    }, /*#__PURE__*/ ($parcel$interopDefault($2mOCL$react)).createElement($2mOCL$contentfulf36icons.CopyIcon, {
        variant: "muted",
        size: size === 'small' ? 'tiny' : 'small'
    })))));
}
$7cfc52ec8d291deb$var$_CopyButton.displayName = 'CopyButton';
const $7cfc52ec8d291deb$export$4f2558dd25106ae2 = /*#__PURE__*/ ($parcel$interopDefault($2mOCL$react)).forwardRef($7cfc52ec8d291deb$var$_CopyButton);




//# sourceMappingURL=main.js.map

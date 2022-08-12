var $2NnqJ$emotion = require("emotion");
var $2NnqJ$react = require("react");
var $2NnqJ$contentfulf36core = require("@contentful/f36-core");
var $2NnqJ$contentfulf36tokens = require("@contentful/f36-tokens");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "TextLink", () => $e96a9c2354cb7173$export$67efe7a6dccb9914);





const $71d15822edb72f8d$var$variantToStyles = (variant)=>{
    switch(variant){
        case 'primary':
            return {
                color: ($parcel$interopDefault($2NnqJ$contentfulf36tokens)).blue600,
                '&:hover, &:focus': {
                    color: ($parcel$interopDefault($2NnqJ$contentfulf36tokens)).blue700
                }
            };
        case 'secondary':
            return {
                color: ($parcel$interopDefault($2NnqJ$contentfulf36tokens)).gray600,
                '&:hover, &:focus': {
                    color: ($parcel$interopDefault($2NnqJ$contentfulf36tokens)).gray700
                }
            };
        case 'positive':
            return {
                color: ($parcel$interopDefault($2NnqJ$contentfulf36tokens)).green600,
                '&:hover, &:focus': {
                    color: ($parcel$interopDefault($2NnqJ$contentfulf36tokens)).green700
                }
            };
        case 'negative':
            return {
                color: ($parcel$interopDefault($2NnqJ$contentfulf36tokens)).red600,
                '&:hover, &:focus': {
                    color: ($parcel$interopDefault($2NnqJ$contentfulf36tokens)).red700
                }
            };
        case 'muted':
            return {
                color: ($parcel$interopDefault($2NnqJ$contentfulf36tokens)).gray400,
                '&:hover, &:focus': {
                    color: ($parcel$interopDefault($2NnqJ$contentfulf36tokens)).gray500
                }
            };
        case 'white':
            return {
                color: ($parcel$interopDefault($2NnqJ$contentfulf36tokens)).colorWhite,
                '&:hover, &:focus': {
                    color: ($parcel$interopDefault($2NnqJ$contentfulf36tokens)).gray100
                }
            };
        default:
            return {
                color: ($parcel$interopDefault($2NnqJ$contentfulf36tokens)).colorWhite
            };
    }
};
const $71d15822edb72f8d$var$textLink = ({ variant: variant , isDisabled: isDisabled  })=>/*#__PURE__*/ $2NnqJ$emotion.css({
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        border: 0,
        padding: 0,
        fontFamily: ($parcel$interopDefault($2NnqJ$contentfulf36tokens)).fontStackPrimary,
        fontSize: ($parcel$interopDefault($2NnqJ$contentfulf36tokens)).fontSizeM,
        fontWeight: ($parcel$interopDefault($2NnqJ$contentfulf36tokens)).fontWeightMedium,
        transition: `color ${($parcel$interopDefault($2NnqJ$contentfulf36tokens)).transitionDurationShort} ${($parcel$interopDefault($2NnqJ$contentfulf36tokens)).transitionEasingDefault}`,
        textDecoration: 'none',
        background: 'none',
        appearance: 'none',
        whiteSpace: 'normal',
        textAlign: 'left',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.5 : 1,
        ...$71d15822edb72f8d$var$variantToStyles(variant),
        outline: 'none',
        '&:focus, &:focus-visible, &:hover': {
            textDecoration: isDisabled ? 'none' : 'underline'
        },
        '&:focus': {
            boxShadow: isDisabled ? 'none' : ($parcel$interopDefault($2NnqJ$contentfulf36tokens)).glowPrimary,
            borderRadius: ($parcel$interopDefault($2NnqJ$contentfulf36tokens)).borderRadiusSmall
        },
        '&:focus:not(:focus-visible)': {
            borderRadius: 0,
            boxShadow: 'none'
        },
        '&:focus-visible': {
            borderRadius: ($parcel$interopDefault($2NnqJ$contentfulf36tokens)).borderRadiusSmall,
            boxShadow: isDisabled ? 'none' : ($parcel$interopDefault($2NnqJ$contentfulf36tokens)).glowPrimary
        }
    })
;
const $71d15822edb72f8d$var$textLinkIcon = ()=>/*#__PURE__*/ $2NnqJ$emotion.css({
        fill: 'currentColor',
        transition: `fill ${($parcel$interopDefault($2NnqJ$contentfulf36tokens)).transitionDurationShort} ${($parcel$interopDefault($2NnqJ$contentfulf36tokens)).transitionEasingDefault}`
    })
;
const $71d15822edb72f8d$var$textLinkText = ({ alignIcon: alignIcon  })=>{
    if (alignIcon === 'start') return /*#__PURE__*/ $2NnqJ$emotion.css({
        marginLeft: ($parcel$interopDefault($2NnqJ$contentfulf36tokens)).spacing2Xs
    });
    if (alignIcon === 'end') return /*#__PURE__*/ $2NnqJ$emotion.css({
        marginRight: ($parcel$interopDefault($2NnqJ$contentfulf36tokens)).spacing2Xs
    });
};
const $71d15822edb72f8d$export$9dd6ff9ea0189349 = {
    textLink: $71d15822edb72f8d$var$textLink,
    textLinkIcon: $71d15822edb72f8d$var$textLinkIcon,
    textLinkText: $71d15822edb72f8d$var$textLinkText
};


const $e96a9c2354cb7173$var$TEXT_LINK_DEFAULT_TAG = 'a';
function $e96a9c2354cb7173$var$_TextLink(props, ref) {
    const { children: children , className: className , testId: testId = 'cf-ui-text-link' , variant: variant = 'primary' , href: href , icon: icon , alignIcon: alignIcon = 'start' , isDisabled: isDisabled , as: as = $e96a9c2354cb7173$var$TEXT_LINK_DEFAULT_TAG , ...otherProps } = props;
    const commonProps = {
        ref: ref,
        className: $2NnqJ$emotion.cx($71d15822edb72f8d$export$9dd6ff9ea0189349.textLink({
            variant: variant,
            isDisabled: isDisabled
        }), props.className),
        ['data-test-id']: testId,
        ...otherProps
    };
    const iconContent = icon ? /*#__PURE__*/ ($parcel$interopDefault($2NnqJ$react)).createElement($2NnqJ$contentfulf36core.Flex, {
        as: "span"
    }, /*#__PURE__*/ ($parcel$interopDefault($2NnqJ$react)).cloneElement(icon, {
        className: $2NnqJ$emotion.cx(icon.props.className, $71d15822edb72f8d$export$9dd6ff9ea0189349.textLinkIcon()),
        size: 'small'
    })) : null;
    const commonContent = /*#__PURE__*/ ($parcel$interopDefault($2NnqJ$react)).createElement(($parcel$interopDefault($2NnqJ$react)).Fragment, null, icon && alignIcon === 'start' && iconContent, children && /*#__PURE__*/ ($parcel$interopDefault($2NnqJ$react)).createElement("span", {
        className: $71d15822edb72f8d$export$9dd6ff9ea0189349.textLinkText({
            alignIcon: icon ? alignIcon : undefined
        })
    }, children), icon && alignIcon === 'end' && iconContent);
    if (as === 'button') return /*#__PURE__*/ ($parcel$interopDefault($2NnqJ$react)).createElement("button", {
        ...commonProps,
        disabled: isDisabled,
        type: "button"
    }, commonContent);
    return /*#__PURE__*/ ($parcel$interopDefault($2NnqJ$react)).createElement("a", {
        ...commonProps,
        onClick: isDisabled ? (e)=>{
            e.preventDefault();
        } : commonProps.onClick,
        href: href,
        ...isDisabled ? {
            tabIndex: -1
        } : {}
    }, commonContent);
}
$e96a9c2354cb7173$var$_TextLink.displayName = 'TextLink';
const $e96a9c2354cb7173$export$67efe7a6dccb9914 = /*#__PURE__*/ ($parcel$interopDefault($2NnqJ$react)).forwardRef($e96a9c2354cb7173$var$_TextLink);




//# sourceMappingURL=main.js.map

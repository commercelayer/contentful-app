import {cx as $9LDm0$cx, css as $9LDm0$css} from "emotion";
import $9LDm0$react from "react";
import {Flex as $9LDm0$Flex} from "@contentful/f36-core";
import $9LDm0$contentfulf36tokens from "@contentful/f36-tokens";






const $1ebb5661060f2b6b$var$variantToStyles = (variant)=>{
    switch(variant){
        case 'primary':
            return {
                color: $9LDm0$contentfulf36tokens.blue600,
                '&:hover, &:focus': {
                    color: $9LDm0$contentfulf36tokens.blue700
                }
            };
        case 'secondary':
            return {
                color: $9LDm0$contentfulf36tokens.gray600,
                '&:hover, &:focus': {
                    color: $9LDm0$contentfulf36tokens.gray700
                }
            };
        case 'positive':
            return {
                color: $9LDm0$contentfulf36tokens.green600,
                '&:hover, &:focus': {
                    color: $9LDm0$contentfulf36tokens.green700
                }
            };
        case 'negative':
            return {
                color: $9LDm0$contentfulf36tokens.red600,
                '&:hover, &:focus': {
                    color: $9LDm0$contentfulf36tokens.red700
                }
            };
        case 'muted':
            return {
                color: $9LDm0$contentfulf36tokens.gray400,
                '&:hover, &:focus': {
                    color: $9LDm0$contentfulf36tokens.gray500
                }
            };
        case 'white':
            return {
                color: $9LDm0$contentfulf36tokens.colorWhite,
                '&:hover, &:focus': {
                    color: $9LDm0$contentfulf36tokens.gray100
                }
            };
        default:
            return {
                color: $9LDm0$contentfulf36tokens.colorWhite
            };
    }
};
const $1ebb5661060f2b6b$var$textLink = ({ variant: variant , isDisabled: isDisabled  })=>/*#__PURE__*/ $9LDm0$css({
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        border: 0,
        padding: 0,
        fontFamily: $9LDm0$contentfulf36tokens.fontStackPrimary,
        fontSize: $9LDm0$contentfulf36tokens.fontSizeM,
        fontWeight: $9LDm0$contentfulf36tokens.fontWeightMedium,
        transition: `color ${$9LDm0$contentfulf36tokens.transitionDurationShort} ${$9LDm0$contentfulf36tokens.transitionEasingDefault}`,
        textDecoration: 'none',
        background: 'none',
        appearance: 'none',
        whiteSpace: 'normal',
        textAlign: 'left',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.5 : 1,
        ...$1ebb5661060f2b6b$var$variantToStyles(variant),
        outline: 'none',
        '&:focus, &:focus-visible, &:hover': {
            textDecoration: isDisabled ? 'none' : 'underline'
        },
        '&:focus': {
            boxShadow: isDisabled ? 'none' : $9LDm0$contentfulf36tokens.glowPrimary,
            borderRadius: $9LDm0$contentfulf36tokens.borderRadiusSmall
        },
        '&:focus:not(:focus-visible)': {
            borderRadius: 0,
            boxShadow: 'none'
        },
        '&:focus-visible': {
            borderRadius: $9LDm0$contentfulf36tokens.borderRadiusSmall,
            boxShadow: isDisabled ? 'none' : $9LDm0$contentfulf36tokens.glowPrimary
        }
    })
;
const $1ebb5661060f2b6b$var$textLinkIcon = ()=>/*#__PURE__*/ $9LDm0$css({
        fill: 'currentColor',
        transition: `fill ${$9LDm0$contentfulf36tokens.transitionDurationShort} ${$9LDm0$contentfulf36tokens.transitionEasingDefault}`
    })
;
const $1ebb5661060f2b6b$var$textLinkText = ({ alignIcon: alignIcon  })=>{
    if (alignIcon === 'start') return /*#__PURE__*/ $9LDm0$css({
        marginLeft: $9LDm0$contentfulf36tokens.spacing2Xs
    });
    if (alignIcon === 'end') return /*#__PURE__*/ $9LDm0$css({
        marginRight: $9LDm0$contentfulf36tokens.spacing2Xs
    });
};
const $1ebb5661060f2b6b$export$9dd6ff9ea0189349 = {
    textLink: $1ebb5661060f2b6b$var$textLink,
    textLinkIcon: $1ebb5661060f2b6b$var$textLinkIcon,
    textLinkText: $1ebb5661060f2b6b$var$textLinkText
};


const $25ccc469f1497ecf$var$TEXT_LINK_DEFAULT_TAG = 'a';
function $25ccc469f1497ecf$var$_TextLink(props, ref) {
    const { children: children , className: className , testId: testId = 'cf-ui-text-link' , variant: variant = 'primary' , href: href , icon: icon , alignIcon: alignIcon = 'start' , isDisabled: isDisabled , as: as = $25ccc469f1497ecf$var$TEXT_LINK_DEFAULT_TAG , ...otherProps } = props;
    const commonProps = {
        ref: ref,
        className: $9LDm0$cx($1ebb5661060f2b6b$export$9dd6ff9ea0189349.textLink({
            variant: variant,
            isDisabled: isDisabled
        }), props.className),
        ['data-test-id']: testId,
        ...otherProps
    };
    const iconContent = icon ? /*#__PURE__*/ $9LDm0$react.createElement($9LDm0$Flex, {
        as: "span"
    }, /*#__PURE__*/ $9LDm0$react.cloneElement(icon, {
        className: $9LDm0$cx(icon.props.className, $1ebb5661060f2b6b$export$9dd6ff9ea0189349.textLinkIcon()),
        size: 'small'
    })) : null;
    const commonContent = /*#__PURE__*/ $9LDm0$react.createElement($9LDm0$react.Fragment, null, icon && alignIcon === 'start' && iconContent, children && /*#__PURE__*/ $9LDm0$react.createElement("span", {
        className: $1ebb5661060f2b6b$export$9dd6ff9ea0189349.textLinkText({
            alignIcon: icon ? alignIcon : undefined
        })
    }, children), icon && alignIcon === 'end' && iconContent);
    if (as === 'button') return /*#__PURE__*/ $9LDm0$react.createElement("button", {
        ...commonProps,
        disabled: isDisabled,
        type: "button"
    }, commonContent);
    return /*#__PURE__*/ $9LDm0$react.createElement("a", {
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
$25ccc469f1497ecf$var$_TextLink.displayName = 'TextLink';
const $25ccc469f1497ecf$export$67efe7a6dccb9914 = /*#__PURE__*/ $9LDm0$react.forwardRef($25ccc469f1497ecf$var$_TextLink);




export {$25ccc469f1497ecf$export$67efe7a6dccb9914 as TextLink};
//# sourceMappingURL=module.js.map

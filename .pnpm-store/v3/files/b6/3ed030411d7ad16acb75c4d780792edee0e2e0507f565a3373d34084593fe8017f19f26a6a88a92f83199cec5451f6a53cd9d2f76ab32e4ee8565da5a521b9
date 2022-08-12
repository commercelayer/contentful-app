import {cx as $6t5Db$cx, css as $6t5Db$css} from "emotion";
import $6t5Db$react from "react";
import {Box as $6t5Db$Box} from "@contentful/f36-core";
import $6t5Db$contentfulf36tokens from "@contentful/f36-tokens";






const $8a1e33ed71d0ddeb$var$variantToStyles = ({ variant: variant  })=>{
    switch(variant){
        case 'positive':
            return {
                color: $6t5Db$contentfulf36tokens.green600,
                backgroundColor: $6t5Db$contentfulf36tokens.green200
            };
        case 'primary':
            return {
                color: $6t5Db$contentfulf36tokens.blue600,
                backgroundColor: $6t5Db$contentfulf36tokens.blue200
            };
        case 'negative':
            return {
                color: $6t5Db$contentfulf36tokens.red600,
                backgroundColor: $6t5Db$contentfulf36tokens.red200
            };
        case 'warning':
            return {
                color: $6t5Db$contentfulf36tokens.orange600,
                backgroundColor: $6t5Db$contentfulf36tokens.orange200
            };
        case 'secondary':
            return {
                color: $6t5Db$contentfulf36tokens.gray700,
                backgroundColor: $6t5Db$contentfulf36tokens.gray200
            };
        case 'primary-filled':
            return {
                color: $6t5Db$contentfulf36tokens.colorWhite,
                backgroundColor: $6t5Db$contentfulf36tokens.blue600
            };
        case 'featured':
            return {
                color: $6t5Db$contentfulf36tokens.purple600,
                backgroundColor: $6t5Db$contentfulf36tokens.purple200
            };
        default:
            return {};
    }
};
const $8a1e33ed71d0ddeb$var$sizeToStyles = ({ size: size  })=>{
    switch(size){
        case 'small':
            return {
                padding: `3px ${$6t5Db$contentfulf36tokens.spacing2Xs}`,
                fontSize: '0.625rem',
                lineHeight: '0.625rem',
                maxHeight: '16px'
            };
        default:
            return {
                padding: `0 ${$6t5Db$contentfulf36tokens.spacingXs}`,
                fontSize: `calc(1rem * (12 / ${$6t5Db$contentfulf36tokens.fontBaseDefault}))`,
                lineHeight: '20px',
                maxHeight: '20px'
            };
    }
};
const $8a1e33ed71d0ddeb$export$c9d43b5c20560398 = ({ variant: variant , size: size  })=>{
    return /*#__PURE__*/ $6t5Db$css({
        fontFamily: $6t5Db$contentfulf36tokens.fontStackPrimary,
        fontWeight: $6t5Db$contentfulf36tokens.fontWeightDemiBold,
        textTransform: 'uppercase',
        letterSpacing: '0.06rem',
        borderRadius: `${$6t5Db$contentfulf36tokens.borderRadiusSmall}`,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        verticalAlign: 'middle',
        ...$8a1e33ed71d0ddeb$var$variantToStyles({
            variant: variant
        }),
        ...$8a1e33ed71d0ddeb$var$sizeToStyles({
            size: size
        })
    });
};


const $23fe874050de62bc$export$37acb3580601e69a = /*#__PURE__*/ $6t5Db$react.forwardRef((props, ref)=>{
    const { children: children , variant: variant = 'primary' , size: size = 'default' , testId: testId = 'cf-ui-badge' , className: className , ...otherProps } = props;
    return /*#__PURE__*/ $6t5Db$react.createElement($6t5Db$Box, {
        as: "div",
        testId: testId,
        display: "inline-block",
        className: $6t5Db$cx($8a1e33ed71d0ddeb$export$c9d43b5c20560398({
            variant: variant,
            size: size
        }), className),
        ...otherProps,
        ref: ref
    }, children);
});
$23fe874050de62bc$export$37acb3580601e69a.displayName = 'Badge';




const $a23f6dc8cefcf8e1$var$statusMap = {
    published: 'positive',
    draft: 'warning',
    archived: 'negative',
    changed: 'primary',
    deleted: 'negative',
    new: 'primary-filled'
};
function $a23f6dc8cefcf8e1$var$EntityStatusBadge(props, ref) {
    const { entityStatus: entityStatus , ...otherProps } = props;
    const variant = $a23f6dc8cefcf8e1$var$statusMap[entityStatus];
    return /*#__PURE__*/ $6t5Db$react.createElement($23fe874050de62bc$export$37acb3580601e69a, {
        ...otherProps,
        variant: variant,
        ref: ref
    }, entityStatus);
}
$a23f6dc8cefcf8e1$var$EntityStatusBadge.displayName = 'EntityStatusBadge';
const $a23f6dc8cefcf8e1$export$ab4ed1b313ef6d98 = /*#__PURE__*/ $6t5Db$react.forwardRef($a23f6dc8cefcf8e1$var$EntityStatusBadge);




export {$23fe874050de62bc$export$37acb3580601e69a as Badge, $a23f6dc8cefcf8e1$export$ab4ed1b313ef6d98 as EntityStatusBadge};
//# sourceMappingURL=module.js.map

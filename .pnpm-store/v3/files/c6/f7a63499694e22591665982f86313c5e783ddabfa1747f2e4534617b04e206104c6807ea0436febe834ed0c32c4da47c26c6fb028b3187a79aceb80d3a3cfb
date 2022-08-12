var $2TfL1$emotion = require("emotion");
var $2TfL1$react = require("react");
var $2TfL1$contentfulf36core = require("@contentful/f36-core");
var $2TfL1$contentfulf36tokens = require("@contentful/f36-tokens");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Badge", () => $0b9eb5cb77360f1e$export$37acb3580601e69a);
$parcel$export(module.exports, "EntityStatusBadge", () => $db994f281dc286ac$export$ab4ed1b313ef6d98);





const $2a438b1691bd83eb$var$variantToStyles = ({ variant: variant  })=>{
    switch(variant){
        case 'positive':
            return {
                color: ($parcel$interopDefault($2TfL1$contentfulf36tokens)).green600,
                backgroundColor: ($parcel$interopDefault($2TfL1$contentfulf36tokens)).green200
            };
        case 'primary':
            return {
                color: ($parcel$interopDefault($2TfL1$contentfulf36tokens)).blue600,
                backgroundColor: ($parcel$interopDefault($2TfL1$contentfulf36tokens)).blue200
            };
        case 'negative':
            return {
                color: ($parcel$interopDefault($2TfL1$contentfulf36tokens)).red600,
                backgroundColor: ($parcel$interopDefault($2TfL1$contentfulf36tokens)).red200
            };
        case 'warning':
            return {
                color: ($parcel$interopDefault($2TfL1$contentfulf36tokens)).orange600,
                backgroundColor: ($parcel$interopDefault($2TfL1$contentfulf36tokens)).orange200
            };
        case 'secondary':
            return {
                color: ($parcel$interopDefault($2TfL1$contentfulf36tokens)).gray700,
                backgroundColor: ($parcel$interopDefault($2TfL1$contentfulf36tokens)).gray200
            };
        case 'primary-filled':
            return {
                color: ($parcel$interopDefault($2TfL1$contentfulf36tokens)).colorWhite,
                backgroundColor: ($parcel$interopDefault($2TfL1$contentfulf36tokens)).blue600
            };
        case 'featured':
            return {
                color: ($parcel$interopDefault($2TfL1$contentfulf36tokens)).purple600,
                backgroundColor: ($parcel$interopDefault($2TfL1$contentfulf36tokens)).purple200
            };
        default:
            return {};
    }
};
const $2a438b1691bd83eb$var$sizeToStyles = ({ size: size  })=>{
    switch(size){
        case 'small':
            return {
                padding: `3px ${($parcel$interopDefault($2TfL1$contentfulf36tokens)).spacing2Xs}`,
                fontSize: '0.625rem',
                lineHeight: '0.625rem',
                maxHeight: '16px'
            };
        default:
            return {
                padding: `0 ${($parcel$interopDefault($2TfL1$contentfulf36tokens)).spacingXs}`,
                fontSize: `calc(1rem * (12 / ${($parcel$interopDefault($2TfL1$contentfulf36tokens)).fontBaseDefault}))`,
                lineHeight: '20px',
                maxHeight: '20px'
            };
    }
};
const $2a438b1691bd83eb$export$c9d43b5c20560398 = ({ variant: variant , size: size  })=>{
    return /*#__PURE__*/ $2TfL1$emotion.css({
        fontFamily: ($parcel$interopDefault($2TfL1$contentfulf36tokens)).fontStackPrimary,
        fontWeight: ($parcel$interopDefault($2TfL1$contentfulf36tokens)).fontWeightDemiBold,
        textTransform: 'uppercase',
        letterSpacing: '0.06rem',
        borderRadius: `${($parcel$interopDefault($2TfL1$contentfulf36tokens)).borderRadiusSmall}`,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        verticalAlign: 'middle',
        ...$2a438b1691bd83eb$var$variantToStyles({
            variant: variant
        }),
        ...$2a438b1691bd83eb$var$sizeToStyles({
            size: size
        })
    });
};


const $0b9eb5cb77360f1e$export$37acb3580601e69a = /*#__PURE__*/ ($parcel$interopDefault($2TfL1$react)).forwardRef((props, ref)=>{
    const { children: children , variant: variant = 'primary' , size: size = 'default' , testId: testId = 'cf-ui-badge' , className: className , ...otherProps } = props;
    return /*#__PURE__*/ ($parcel$interopDefault($2TfL1$react)).createElement($2TfL1$contentfulf36core.Box, {
        as: "div",
        testId: testId,
        display: "inline-block",
        className: $2TfL1$emotion.cx($2a438b1691bd83eb$export$c9d43b5c20560398({
            variant: variant,
            size: size
        }), className),
        ...otherProps,
        ref: ref
    }, children);
});
$0b9eb5cb77360f1e$export$37acb3580601e69a.displayName = 'Badge';




const $db994f281dc286ac$var$statusMap = {
    published: 'positive',
    draft: 'warning',
    archived: 'negative',
    changed: 'primary',
    deleted: 'negative',
    new: 'primary-filled'
};
function $db994f281dc286ac$var$EntityStatusBadge(props, ref) {
    const { entityStatus: entityStatus , ...otherProps } = props;
    const variant = $db994f281dc286ac$var$statusMap[entityStatus];
    return /*#__PURE__*/ ($parcel$interopDefault($2TfL1$react)).createElement($0b9eb5cb77360f1e$export$37acb3580601e69a, {
        ...otherProps,
        variant: variant,
        ref: ref
    }, entityStatus);
}
$db994f281dc286ac$var$EntityStatusBadge.displayName = 'EntityStatusBadge';
const $db994f281dc286ac$export$ab4ed1b313ef6d98 = /*#__PURE__*/ ($parcel$interopDefault($2TfL1$react)).forwardRef($db994f281dc286ac$var$EntityStatusBadge);




//# sourceMappingURL=main.js.map

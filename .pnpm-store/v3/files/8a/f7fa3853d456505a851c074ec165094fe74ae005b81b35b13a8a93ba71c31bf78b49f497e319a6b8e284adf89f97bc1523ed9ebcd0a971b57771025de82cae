var $hadoL$emotion = require("emotion");
var $hadoL$react = require("react");
var $hadoL$contentfulf36tokens = require("@contentful/f36-tokens");
var $hadoL$contentfulf36badge = require("@contentful/f36-badge");
var $hadoL$contentfulf36icons = require("@contentful/f36-icons");
var $hadoL$contentfulf36icon = require("@contentful/f36-icon");
var $hadoL$contentfulf36typography = require("@contentful/f36-typography");
var $hadoL$contentfulf36draghandle = require("@contentful/f36-drag-handle");
var $hadoL$contentfulf36button = require("@contentful/f36-button");
var $hadoL$contentfulf36menu = require("@contentful/f36-menu");
var $hadoL$contentfulf36skeleton = require("@contentful/f36-skeleton");
var $hadoL$contentfulf36core = require("@contentful/f36-core");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "EntityList", () => $e853778315da5e40$export$8bb466c13870163e);
$parcel$export(module.exports, "EntityListItem", () => $3f4d63406b2f6561$export$65b9c70c5f42a158);




const $e3aba86fc342822d$export$2b0a239870ba448d = ()=>({
        root: /*#__PURE__*/ $hadoL$emotion.css({
            display: 'block',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            border: `1px solid ${($parcel$interopDefault($hadoL$contentfulf36tokens)).gray200}`,
            borderBottom: 'none',
            borderRadius: ($parcel$interopDefault($hadoL$contentfulf36tokens)).borderRadiusMedium,
            overflow: 'hidden'
        })
    })
;


function $42fa390001ac865a$var$_EntityList(props, ref) {
    const styles = $e3aba86fc342822d$export$2b0a239870ba448d();
    return /*#__PURE__*/ ($parcel$interopDefault($hadoL$react)).createElement("ul", {
        "data-test-id": props.testId || 'cf-ui-entity-list',
        ref: ref,
        className: $hadoL$emotion.cx(styles.root, props.className),
        style: props.style
    }, props.children);
}
$42fa390001ac865a$var$_EntityList.displayName = 'EntityList';
const $42fa390001ac865a$export$8bb466c13870163e = /*#__PURE__*/ ($parcel$interopDefault($hadoL$react)).forwardRef($42fa390001ac865a$var$_EntityList);













const $07bceb135ccb0944$export$3bb342229d68a121 = ()=>({
        root: (props)=>/*#__PURE__*/ $hadoL$emotion.css({
                display: 'flex',
                boxShadow: `inset 0 -1px 0 ${($parcel$interopDefault($hadoL$contentfulf36tokens)).gray200}`,
                position: 'relative',
                transition: `${($parcel$interopDefault($hadoL$contentfulf36tokens)).transitionDurationShort} ${($parcel$interopDefault($hadoL$contentfulf36tokens)).transitionEasingDefault}`,
                transitionProperty: 'box-shadow, background-color',
                backgroundColor: ($parcel$interopDefault($hadoL$contentfulf36tokens)).colorWhite,
                ...props.isDragActive ? {
                    boxShadow: ($parcel$interopDefault($hadoL$contentfulf36tokens)).boxShadowHeavy
                } : {},
                '&:hover': {
                    backgroundColor: ($parcel$interopDefault($hadoL$contentfulf36tokens)).gray100
                }
            })
        ,
        card: /*#__PURE__*/ $hadoL$emotion.css({
            display: 'flex',
            textDecoration: 'none',
            width: '100%',
            minHeight: ($parcel$interopDefault($hadoL$contentfulf36tokens)).spacing3Xl,
            padding: ($parcel$interopDefault($hadoL$contentfulf36tokens)).spacingXs,
            border: 'none',
            background: 'none',
            textAlign: 'left'
        }),
        content: /*#__PURE__*/ $hadoL$emotion.css({
            name: "15ync0s",
            styles: "flex-grow:1;min-width:0;"
        }),
        media: /*#__PURE__*/ $hadoL$emotion.css({
            display: 'flex',
            flexShrink: 0,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: ($parcel$interopDefault($hadoL$contentfulf36tokens)).gray200,
            width: ($parcel$interopDefault($hadoL$contentfulf36tokens)).spacing2Xl,
            height: ($parcel$interopDefault($hadoL$contentfulf36tokens)).spacing2Xl,
            margin: '0',
            marginRight: ($parcel$interopDefault($hadoL$contentfulf36tokens)).spacingXs
        }),
        thumbnail: /*#__PURE__*/ $hadoL$emotion.css({
            name: "12qah06",
            styles: "display:block;width:100%;height:100%;object-fit:cover;"
        }),
        contentType: /*#__PURE__*/ $hadoL$emotion.css({
            marginLeft: ($parcel$interopDefault($hadoL$contentfulf36tokens)).spacingXs
        }),
        description: /*#__PURE__*/ $hadoL$emotion.css({
            marginTop: ($parcel$interopDefault($hadoL$contentfulf36tokens)).spacing2Xs
        }),
        meta: /*#__PURE__*/ $hadoL$emotion.css({
            name: "1n0gfod",
            styles: "margin-left:auto;flex-shrink:0;"
        }),
        dragHandle: /*#__PURE__*/ $hadoL$emotion.css({
            borderBottomLeftRadius: '0',
            borderTopLeftRadius: '0',
            boxShadow: `inset 0 -1px 0 ${($parcel$interopDefault($hadoL$contentfulf36tokens)).gray200}`
        }),
        menuTrigger: /*#__PURE__*/ $hadoL$emotion.css({
            name: "c1v07n",
            styles: "padding:0 0.125rem;min-height:1.5rem;"
        })
    })
;




const $3f4d63406b2f6561$var$ICON_MAP = {
    asset: $hadoL$contentfulf36icons.AssetIcon,
    entry: $hadoL$contentfulf36icons.EntryIcon,
    release: $hadoL$contentfulf36icons.ReleaseIcon
};
const $3f4d63406b2f6561$export$65b9c70c5f42a158 = ({ className: className , testId: testId = 'cf-ui-entity-list-item' , title: title , description: description , contentType: contentType , entityType: entityType = 'entry' , withThumbnail: withThumbnail = true , thumbnailUrl: thumbnailUrl , thumbnailAltText: thumbnailAltText , status: status , actions: actions , withDragHandle: withDragHandle , isDragActive: isDragActive , isLoading: isLoading , onClick: onClick , href: href , cardDragHandleProps: cardDragHandleProps , cardDragHandleComponent: cardDragHandleComponent , isActionsDisabled: isActionsDisabled = false , ...otherProps })=>{
    const styles = $07bceb135ccb0944$export$3bb342229d68a121();
    const renderCardDragHandle = ()=>{
        if (cardDragHandleComponent) return cardDragHandleComponent;
        else if (withDragHandle) return /*#__PURE__*/ ($parcel$interopDefault($hadoL$react)).createElement($hadoL$contentfulf36draghandle.DragHandle, {
            className: styles.dragHandle,
            isActive: isDragActive,
            label: "Reorder entry",
            ...cardDragHandleProps
        });
    };
    let Element = 'article';
    if (href || onClick) Element = href ? 'a' : 'button';
     // archived assets will not be available on the CDN, resulting in a broken image src
    const isArchived = status === 'archived';
    const asIcon = isArchived || !thumbnailUrl;
    return /*#__PURE__*/ ($parcel$interopDefault($hadoL$react)).createElement("li", {
        ...otherProps,
        className: $hadoL$emotion.cx(styles.root({
            isDragActive: isDragActive
        }), className),
        "data-test-id": testId
    }, renderCardDragHandle(), isLoading ? /*#__PURE__*/ ($parcel$interopDefault($hadoL$react)).createElement("article", {
        className: styles.card
    }, /*#__PURE__*/ ($parcel$interopDefault($hadoL$react)).createElement($hadoL$contentfulf36skeleton.SkeletonContainer, {
        clipId: "f36-entity-list-item-skeleton"
    }, /*#__PURE__*/ ($parcel$interopDefault($hadoL$react)).createElement($hadoL$contentfulf36skeleton.SkeletonImage, {
        height: 46,
        width: 46
    }), /*#__PURE__*/ ($parcel$interopDefault($hadoL$react)).createElement($hadoL$contentfulf36skeleton.SkeletonBodyText, {
        numberOfLines: 2,
        lineHeight: 18,
        offsetLeft: 54
    }))) : /*#__PURE__*/ ($parcel$interopDefault($hadoL$react)).createElement(Element, {
        className: styles.card,
        onClick: onClick,
        href: href,
        type: Element === 'button' ? 'button' : undefined,
        target: href ? '_blank' : undefined
    }, withThumbnail && /*#__PURE__*/ ($parcel$interopDefault($hadoL$react)).createElement("figure", {
        className: styles.media
    }, asIcon ? /*#__PURE__*/ ($parcel$interopDefault($hadoL$react)).createElement($hadoL$contentfulf36icon.Icon, {
        as: $3f4d63406b2f6561$var$ICON_MAP[entityType.toLowerCase()],
        variant: "muted"
    }) : /*#__PURE__*/ ($parcel$interopDefault($hadoL$react)).createElement("img", {
        src: thumbnailUrl,
        className: styles.thumbnail,
        alt: thumbnailAltText
    })), /*#__PURE__*/ ($parcel$interopDefault($hadoL$react)).createElement("div", {
        className: styles.content
    }, /*#__PURE__*/ ($parcel$interopDefault($hadoL$react)).createElement($hadoL$contentfulf36core.Flex, null, /*#__PURE__*/ ($parcel$interopDefault($hadoL$react)).createElement($hadoL$contentfulf36typography.Text, {
        as: "h3",
        lineHeight: "lineHeightM",
        fontColor: "gray900",
        fontWeight: "fontWeightDemiBold",
        isTruncated: true
    }, title), contentType && /*#__PURE__*/ ($parcel$interopDefault($hadoL$react)).createElement($hadoL$contentfulf36typography.Text, {
        as: "span",
        lineHeight: "lineHeightM",
        fontColor: "gray600",
        className: styles.contentType,
        isTruncated: true
    }, "(", contentType, ")")), description && /*#__PURE__*/ ($parcel$interopDefault($hadoL$react)).createElement($hadoL$contentfulf36typography.Text, {
        as: "p",
        lineHeight: "lineHeightM",
        fontColor: "gray900",
        isTruncated: true,
        className: styles.description
    }, description)), /*#__PURE__*/ ($parcel$interopDefault($hadoL$react)).createElement($hadoL$contentfulf36core.Flex, {
        className: styles.meta,
        alignItems: "flex-start",
        paddingLeft: "spacingXs"
    }, status && /*#__PURE__*/ ($parcel$interopDefault($hadoL$react)).createElement($hadoL$contentfulf36core.Box, {
        marginRight: actions ? 'spacingXs' : 'none'
    }, /*#__PURE__*/ ($parcel$interopDefault($hadoL$react)).createElement($hadoL$contentfulf36badge.EntityStatusBadge, {
        entityStatus: status
    })), actions && /*#__PURE__*/ ($parcel$interopDefault($hadoL$react)).createElement($hadoL$contentfulf36menu.Menu, null, /*#__PURE__*/ ($parcel$interopDefault($hadoL$react)).createElement($hadoL$contentfulf36menu.Menu.Trigger, null, /*#__PURE__*/ ($parcel$interopDefault($hadoL$react)).createElement($hadoL$contentfulf36button.Button, {
        isDisabled: isActionsDisabled,
        startIcon: /*#__PURE__*/ ($parcel$interopDefault($hadoL$react)).createElement($hadoL$contentfulf36icons.MoreHorizontalIcon, null),
        variant: "transparent",
        "aria-label": "Actions",
        size: "small",
        className: styles.menuTrigger
    })), /*#__PURE__*/ ($parcel$interopDefault($hadoL$react)).createElement($hadoL$contentfulf36menu.Menu.List, null, actions)))));
};
$3f4d63406b2f6561$export$65b9c70c5f42a158.displayName = 'EntityListItem';


const $e853778315da5e40$export$8bb466c13870163e = $42fa390001ac865a$export$8bb466c13870163e;
$e853778315da5e40$export$8bb466c13870163e.Item = $3f4d63406b2f6561$export$65b9c70c5f42a158;





//# sourceMappingURL=main.js.map

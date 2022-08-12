import {cx as $qeOF0$cx, css as $qeOF0$css} from "emotion";
import $qeOF0$react from "react";
import $qeOF0$contentfulf36tokens from "@contentful/f36-tokens";
import {EntityStatusBadge as $qeOF0$EntityStatusBadge} from "@contentful/f36-badge";
import {AssetIcon as $qeOF0$AssetIcon, EntryIcon as $qeOF0$EntryIcon, ReleaseIcon as $qeOF0$ReleaseIcon, MoreHorizontalIcon as $qeOF0$MoreHorizontalIcon} from "@contentful/f36-icons";
import {Icon as $qeOF0$Icon} from "@contentful/f36-icon";
import {Text as $qeOF0$Text} from "@contentful/f36-typography";
import {DragHandle as $qeOF0$DragHandle} from "@contentful/f36-drag-handle";
import {Button as $qeOF0$Button} from "@contentful/f36-button";
import {Menu as $qeOF0$Menu} from "@contentful/f36-menu";
import {SkeletonContainer as $qeOF0$SkeletonContainer, SkeletonImage as $qeOF0$SkeletonImage, SkeletonBodyText as $qeOF0$SkeletonBodyText} from "@contentful/f36-skeleton";
import {Flex as $qeOF0$Flex, Box as $qeOF0$Box} from "@contentful/f36-core";





const $32a4ed8cc58cbd41$export$2b0a239870ba448d = ()=>({
        root: /*#__PURE__*/ $qeOF0$css({
            display: 'block',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            border: `1px solid ${$qeOF0$contentfulf36tokens.gray200}`,
            borderBottom: 'none',
            borderRadius: $qeOF0$contentfulf36tokens.borderRadiusMedium,
            overflow: 'hidden'
        })
    })
;


function $3382b9e83b849fa7$var$_EntityList(props, ref) {
    const styles = $32a4ed8cc58cbd41$export$2b0a239870ba448d();
    return /*#__PURE__*/ $qeOF0$react.createElement("ul", {
        "data-test-id": props.testId || 'cf-ui-entity-list',
        ref: ref,
        className: $qeOF0$cx(styles.root, props.className),
        style: props.style
    }, props.children);
}
$3382b9e83b849fa7$var$_EntityList.displayName = 'EntityList';
const $3382b9e83b849fa7$export$8bb466c13870163e = /*#__PURE__*/ $qeOF0$react.forwardRef($3382b9e83b849fa7$var$_EntityList);













const $7cd3138fd5d2efdd$export$3bb342229d68a121 = ()=>({
        root: (props)=>/*#__PURE__*/ $qeOF0$css({
                display: 'flex',
                boxShadow: `inset 0 -1px 0 ${$qeOF0$contentfulf36tokens.gray200}`,
                position: 'relative',
                transition: `${$qeOF0$contentfulf36tokens.transitionDurationShort} ${$qeOF0$contentfulf36tokens.transitionEasingDefault}`,
                transitionProperty: 'box-shadow, background-color',
                backgroundColor: $qeOF0$contentfulf36tokens.colorWhite,
                ...props.isDragActive ? {
                    boxShadow: $qeOF0$contentfulf36tokens.boxShadowHeavy
                } : {},
                '&:hover': {
                    backgroundColor: $qeOF0$contentfulf36tokens.gray100
                }
            })
        ,
        card: /*#__PURE__*/ $qeOF0$css({
            display: 'flex',
            textDecoration: 'none',
            width: '100%',
            minHeight: $qeOF0$contentfulf36tokens.spacing3Xl,
            padding: $qeOF0$contentfulf36tokens.spacingXs,
            border: 'none',
            background: 'none',
            textAlign: 'left'
        }),
        content: /*#__PURE__*/ $qeOF0$css({
            name: "15ync0s",
            styles: "flex-grow:1;min-width:0;"
        }),
        media: /*#__PURE__*/ $qeOF0$css({
            display: 'flex',
            flexShrink: 0,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: $qeOF0$contentfulf36tokens.gray200,
            width: $qeOF0$contentfulf36tokens.spacing2Xl,
            height: $qeOF0$contentfulf36tokens.spacing2Xl,
            margin: '0',
            marginRight: $qeOF0$contentfulf36tokens.spacingXs
        }),
        thumbnail: /*#__PURE__*/ $qeOF0$css({
            name: "12qah06",
            styles: "display:block;width:100%;height:100%;object-fit:cover;"
        }),
        contentType: /*#__PURE__*/ $qeOF0$css({
            marginLeft: $qeOF0$contentfulf36tokens.spacingXs
        }),
        description: /*#__PURE__*/ $qeOF0$css({
            marginTop: $qeOF0$contentfulf36tokens.spacing2Xs
        }),
        meta: /*#__PURE__*/ $qeOF0$css({
            name: "1n0gfod",
            styles: "margin-left:auto;flex-shrink:0;"
        }),
        dragHandle: /*#__PURE__*/ $qeOF0$css({
            borderBottomLeftRadius: '0',
            borderTopLeftRadius: '0',
            boxShadow: `inset 0 -1px 0 ${$qeOF0$contentfulf36tokens.gray200}`
        }),
        menuTrigger: /*#__PURE__*/ $qeOF0$css({
            name: "c1v07n",
            styles: "padding:0 0.125rem;min-height:1.5rem;"
        })
    })
;




const $b8d6b7ec5fedd0fe$var$ICON_MAP = {
    asset: $qeOF0$AssetIcon,
    entry: $qeOF0$EntryIcon,
    release: $qeOF0$ReleaseIcon
};
const $b8d6b7ec5fedd0fe$export$65b9c70c5f42a158 = ({ className: className , testId: testId = 'cf-ui-entity-list-item' , title: title , description: description , contentType: contentType , entityType: entityType = 'entry' , withThumbnail: withThumbnail = true , thumbnailUrl: thumbnailUrl , thumbnailAltText: thumbnailAltText , status: status , actions: actions , withDragHandle: withDragHandle , isDragActive: isDragActive , isLoading: isLoading , onClick: onClick , href: href , cardDragHandleProps: cardDragHandleProps , cardDragHandleComponent: cardDragHandleComponent , isActionsDisabled: isActionsDisabled = false , ...otherProps })=>{
    const styles = $7cd3138fd5d2efdd$export$3bb342229d68a121();
    const renderCardDragHandle = ()=>{
        if (cardDragHandleComponent) return cardDragHandleComponent;
        else if (withDragHandle) return /*#__PURE__*/ $qeOF0$react.createElement($qeOF0$DragHandle, {
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
    return /*#__PURE__*/ $qeOF0$react.createElement("li", {
        ...otherProps,
        className: $qeOF0$cx(styles.root({
            isDragActive: isDragActive
        }), className),
        "data-test-id": testId
    }, renderCardDragHandle(), isLoading ? /*#__PURE__*/ $qeOF0$react.createElement("article", {
        className: styles.card
    }, /*#__PURE__*/ $qeOF0$react.createElement($qeOF0$SkeletonContainer, {
        clipId: "f36-entity-list-item-skeleton"
    }, /*#__PURE__*/ $qeOF0$react.createElement($qeOF0$SkeletonImage, {
        height: 46,
        width: 46
    }), /*#__PURE__*/ $qeOF0$react.createElement($qeOF0$SkeletonBodyText, {
        numberOfLines: 2,
        lineHeight: 18,
        offsetLeft: 54
    }))) : /*#__PURE__*/ $qeOF0$react.createElement(Element, {
        className: styles.card,
        onClick: onClick,
        href: href,
        type: Element === 'button' ? 'button' : undefined,
        target: href ? '_blank' : undefined
    }, withThumbnail && /*#__PURE__*/ $qeOF0$react.createElement("figure", {
        className: styles.media
    }, asIcon ? /*#__PURE__*/ $qeOF0$react.createElement($qeOF0$Icon, {
        as: $b8d6b7ec5fedd0fe$var$ICON_MAP[entityType.toLowerCase()],
        variant: "muted"
    }) : /*#__PURE__*/ $qeOF0$react.createElement("img", {
        src: thumbnailUrl,
        className: styles.thumbnail,
        alt: thumbnailAltText
    })), /*#__PURE__*/ $qeOF0$react.createElement("div", {
        className: styles.content
    }, /*#__PURE__*/ $qeOF0$react.createElement($qeOF0$Flex, null, /*#__PURE__*/ $qeOF0$react.createElement($qeOF0$Text, {
        as: "h3",
        lineHeight: "lineHeightM",
        fontColor: "gray900",
        fontWeight: "fontWeightDemiBold",
        isTruncated: true
    }, title), contentType && /*#__PURE__*/ $qeOF0$react.createElement($qeOF0$Text, {
        as: "span",
        lineHeight: "lineHeightM",
        fontColor: "gray600",
        className: styles.contentType,
        isTruncated: true
    }, "(", contentType, ")")), description && /*#__PURE__*/ $qeOF0$react.createElement($qeOF0$Text, {
        as: "p",
        lineHeight: "lineHeightM",
        fontColor: "gray900",
        isTruncated: true,
        className: styles.description
    }, description)), /*#__PURE__*/ $qeOF0$react.createElement($qeOF0$Flex, {
        className: styles.meta,
        alignItems: "flex-start",
        paddingLeft: "spacingXs"
    }, status && /*#__PURE__*/ $qeOF0$react.createElement($qeOF0$Box, {
        marginRight: actions ? 'spacingXs' : 'none'
    }, /*#__PURE__*/ $qeOF0$react.createElement($qeOF0$EntityStatusBadge, {
        entityStatus: status
    })), actions && /*#__PURE__*/ $qeOF0$react.createElement($qeOF0$Menu, null, /*#__PURE__*/ $qeOF0$react.createElement($qeOF0$Menu.Trigger, null, /*#__PURE__*/ $qeOF0$react.createElement($qeOF0$Button, {
        isDisabled: isActionsDisabled,
        startIcon: /*#__PURE__*/ $qeOF0$react.createElement($qeOF0$MoreHorizontalIcon, null),
        variant: "transparent",
        "aria-label": "Actions",
        size: "small",
        className: styles.menuTrigger
    })), /*#__PURE__*/ $qeOF0$react.createElement($qeOF0$Menu.List, null, actions)))));
};
$b8d6b7ec5fedd0fe$export$65b9c70c5f42a158.displayName = 'EntityListItem';


const $bbd0ee2d7d3132a2$export$8bb466c13870163e = $3382b9e83b849fa7$export$8bb466c13870163e;
$bbd0ee2d7d3132a2$export$8bb466c13870163e.Item = $b8d6b7ec5fedd0fe$export$65b9c70c5f42a158;





export {$bbd0ee2d7d3132a2$export$8bb466c13870163e as EntityList, $b8d6b7ec5fedd0fe$export$65b9c70c5f42a158 as EntityListItem};
//# sourceMappingURL=module.js.map

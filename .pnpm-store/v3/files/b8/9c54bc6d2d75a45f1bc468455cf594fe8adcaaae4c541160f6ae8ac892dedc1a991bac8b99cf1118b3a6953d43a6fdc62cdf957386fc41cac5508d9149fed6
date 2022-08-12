import {cx as $5DxI1$cx, css as $5DxI1$css} from "emotion";
import $5DxI1$react, {useState as $5DxI1$useState, useCallback as $5DxI1$useCallback, forwardRef as $5DxI1$forwardRef} from "react";
import {Flex as $5DxI1$Flex, Box as $5DxI1$Box, getEntityStatusStyles as $5DxI1$getEntityStatusStyles} from "@contentful/f36-core";
import {EntityStatusBadge as $5DxI1$EntityStatusBadge} from "@contentful/f36-badge";
import {Asset as $5DxI1$Asset} from "@contentful/f36-asset";
import {SkeletonContainer as $5DxI1$SkeletonContainer, SkeletonImage as $5DxI1$SkeletonImage, SkeletonDisplayText as $5DxI1$SkeletonDisplayText, SkeletonBodyText as $5DxI1$SkeletonBodyText} from "@contentful/f36-skeleton";
import {DragHandle as $5DxI1$DragHandle} from "@contentful/f36-drag-handle";
import $5DxI1$contentfulf36tokens from "@contentful/f36-tokens";
import {Text as $5DxI1$Text, Heading as $5DxI1$Heading, Subheading as $5DxI1$Subheading, Paragraph as $5DxI1$Paragraph} from "@contentful/f36-typography";
import {IconButton as $5DxI1$IconButton} from "@contentful/f36-button";
import {MoreHorizontalIcon as $5DxI1$MoreHorizontalIcon} from "@contentful/f36-icons";
import {Menu as $5DxI1$Menu} from "@contentful/f36-menu";
import $5DxI1$truncate from "truncate";
import {Tooltip as $5DxI1$Tooltip} from "@contentful/f36-tooltip";












const $082b639acf692abe$export$e5c3362273de1eca = ()=>{
    return {
        contentBody: /*#__PURE__*/ $5DxI1$css({
            name: "161cbg",
            styles: "grid-column:content;grid-row:content;white-space:initial;"
        }),
        wrapper: /*#__PURE__*/ $5DxI1$css({
            name: "1cjnmwb",
            styles: "flex:1 1 0;display:grid;grid-template-rows:[header] auto [content] minmax(0, 1fr);grid-template-columns:auto [content] minmax(0, 1fr);"
        }),
        dragHandle: /*#__PURE__*/ $5DxI1$css({
            borderBottomLeftRadius: $5DxI1$contentfulf36tokens.borderRadiusMedium,
            borderTopLeftRadius: $5DxI1$contentfulf36tokens.borderRadiusMedium,
            cursor: 'grab'
        }),
        root: ({ hasHeader: hasHeader , isHovered: isHovered , isSelected: isSelected  })=>{
            const styles = {
                backgroundColor: $5DxI1$contentfulf36tokens.colorWhite,
                borderColor: $5DxI1$contentfulf36tokens.gray300,
                borderRadius: $5DxI1$contentfulf36tokens.borderRadiusMedium,
                borderStyle: 'solid',
                borderWidth: 1,
                color: $5DxI1$contentfulf36tokens.gray900,
                display: 'flex',
                textAlign: 'left',
                width: '100%',
                fontSize: $5DxI1$contentfulf36tokens.fontSizeM,
                fontWeight: $5DxI1$contentfulf36tokens.fontWeightNormal,
                position: 'relative',
                textDecoration: 'none',
                transition: `border-color ${$5DxI1$contentfulf36tokens.transitionDurationDefault} ${$5DxI1$contentfulf36tokens.transitionEasingDefault},
    box-shadow ${$5DxI1$contentfulf36tokens.transitionDurationShort} ${$5DxI1$contentfulf36tokens.transitionEasingDefault}`,
                '&:focus': /*#__PURE__*/ $5DxI1$css({
                    borderColor: isSelected ? $5DxI1$contentfulf36tokens.blue100 : $5DxI1$contentfulf36tokens.colorPrimary,
                    boxShadow: $5DxI1$contentfulf36tokens.glowPrimary,
                    outline: 'none'
                }),
                '&:focus:not(:focus-visible)': /*#__PURE__*/ $5DxI1$css({
                    borderColor: isSelected ? $5DxI1$contentfulf36tokens.colorPrimary : $5DxI1$contentfulf36tokens.gray300,
                    boxShadow: 'unset'
                }),
                '&:focus-visible': /*#__PURE__*/ $5DxI1$css({
                    borderColor: $5DxI1$contentfulf36tokens.colorPrimary,
                    boxShadow: $5DxI1$contentfulf36tokens.glowPrimary
                })
            };
            if (!hasHeader) styles.paddingTop = $5DxI1$contentfulf36tokens.spacingM;
            if (isHovered) {
                styles.borderColor = $5DxI1$contentfulf36tokens.colorPrimary;
                styles.cursor = 'pointer';
            }
            if (isSelected) {
                styles.backgroundColor = $5DxI1$contentfulf36tokens.blue100;
                styles.borderColor = $5DxI1$contentfulf36tokens.colorPrimary;
            }
            return /*#__PURE__*/ $5DxI1$css(styles);
        },
        skeleton: /*#__PURE__*/ $5DxI1$css({
            border: `1px solid ${$5DxI1$contentfulf36tokens.gray300}`,
            borderRadius: $5DxI1$contentfulf36tokens.borderRadiusMedium,
            padding: $5DxI1$contentfulf36tokens.spacingM
        })
    };
};















const $6e2e1e7b43420737$export$6468e6b9c1bc1de = ()=>{
    return {
        root: /*#__PURE__*/ $5DxI1$css({
            minHeight: 'auto',
            padding: $5DxI1$contentfulf36tokens.spacing2Xs,
            marginLeft: $5DxI1$contentfulf36tokens.spacingXs
        })
    };
};


const $c83d23d1a559d33c$export$9b6a647253f61c5f = ({ buttonProps: buttonProps , children: children  })=>{
    const styles = $6e2e1e7b43420737$export$6468e6b9c1bc1de();
    return /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$Menu, null, /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$Menu.Trigger, null, /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$IconButton, {
        "aria-label": "Actions",
        icon: /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$MoreHorizontalIcon, null),
        ...buttonProps,
        className: $5DxI1$cx(styles.root, buttonProps === null || buttonProps === void 0 ? void 0 : buttonProps.className),
        size: "small",
        variant: "transparent",
        testId: "cf-ui-card-actions"
    })), /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$Menu.List, null, children));
};



const $798bf03d82ac02ed$var$getHeaderStyles = ()=>{
    return {
        header: /*#__PURE__*/ $5DxI1$css({
            alignItems: 'center',
            borderBottomColor: $5DxI1$contentfulf36tokens.gray200,
            borderBottomStyle: 'solid',
            borderBottomWidth: 1,
            borderTopLeftRadius: $5DxI1$contentfulf36tokens.borderRadiusMedium,
            borderTopRightRadius: $5DxI1$contentfulf36tokens.borderRadiusMedium,
            boxSizing: 'border-box',
            color: $5DxI1$contentfulf36tokens.gray600,
            fontSize: $5DxI1$contentfulf36tokens.fontSizeM,
            fontWeight: $5DxI1$contentfulf36tokens.fontWeightNormal,
            gridColumn: 'content',
            gridRow: 'header',
            lineHeight: $5DxI1$contentfulf36tokens.lineHeightM,
            paddingBottom: $5DxI1$contentfulf36tokens.spacingXs,
            paddingLeft: $5DxI1$contentfulf36tokens.spacingM,
            paddingRight: $5DxI1$contentfulf36tokens.spacingXs,
            paddingTop: $5DxI1$contentfulf36tokens.spacingXs,
            minHeight: '37px'
        }),
        headerWithActions: /*#__PURE__*/ $5DxI1$css({
            paddingBottom: 0,
            paddingRight: $5DxI1$contentfulf36tokens.spacingXs,
            paddingTop: 0
        })
    };
};
const $798bf03d82ac02ed$export$783e10c0b439f264 = (e)=>{
    e.preventDefault();
    e.stopPropagation();
};
const $798bf03d82ac02ed$export$606643aa598b5a97 = (props)=>{
    const { icon: icon , type: type , actions: actions , actionsButtonProps: actionsButtonProps , badge: badge  } = props;
    const styles = $798bf03d82ac02ed$var$getHeaderStyles();
    return /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$Flex, {
        className: $5DxI1$cx(styles.header, actions && styles.headerWithActions)
    }, /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$Flex, {
        flexGrow: 1
    }, type && /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$Text, {
        fontColor: "gray600",
        isWordBreak: true
    }, type)), icon && /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$Flex, {
        alignItems: "center",
        marginLeft: "spacingXs"
    }, icon), badge && /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$Flex, {
        alignItems: "center",
        marginLeft: "spacingXs"
    }, badge), actions && actions.length > 0 && /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$Flex // don't propagate click event, so onClick handler on the card is not triggered
    , {
        onClick: $798bf03d82ac02ed$export$783e10c0b439f264,
        alignItems: "center"
    }, /*#__PURE__*/ $5DxI1$react.createElement($c83d23d1a559d33c$export$9b6a647253f61c5f, {
        buttonProps: actionsButtonProps
    }, actions)));
};
$798bf03d82ac02ed$export$606643aa598b5a97.displayName = 'DefaultCardHeader';


const $58aab48c7cf09ac0$export$eed7d00d62e881b8 = 'article';
function $58aab48c7cf09ac0$var$_BaseCard({ actions: actions , actionsButtonProps: actionsButtonProps , ariaLabel: ariaLabel , badge: badge , children: children , className: className , contentBodyProps: contentBodyProps , header: header , href: href , icon: icon , isDragging: isDragging = false , isHovered: isHoveredProp , isSelected: isSelected = false , onBlur: onBlur , onClick: onClick , onFocus: onFocus , onKeyDown: onKeyDown , onMouseEnter: onMouseEnter , onMouseLeave: onMouseLeave , target: target , rel: rel , testId: testId = 'cf-ui-base-card' , title: title , type: type , withDragHandle: withDragHandle , dragHandleRender: dragHandleRender , isLoading: isLoading , ...otherProps }, forwardedRef) {
    const styles = $082b639acf692abe$export$e5c3362273de1eca();
    const [isHovered, setIsHovered] = $5DxI1$useState(isHoveredProp !== null && isHoveredProp !== void 0 ? isHoveredProp : false);
    const isInteractive = Boolean(onClick || href || withDragHandle);
    const hasHeader = Boolean(header);
    const defaultHeader = type || icon || badge || actions ? /*#__PURE__*/ $5DxI1$react.createElement($798bf03d82ac02ed$export$606643aa598b5a97, {
        type: type,
        icon: icon,
        badge: badge,
        actions: actions,
        actionsButtonProps: actionsButtonProps
    }) : null;
    const handleFocus = $5DxI1$useCallback((event)=>{
        if (onFocus) onFocus(event);
    }, [
        onFocus
    ]);
    const handleBlur = $5DxI1$useCallback((event)=>{
        if (onBlur) onBlur(event);
    }, [
        onBlur
    ]);
    const handleMouseEnter = $5DxI1$useCallback((event)=>{
        setIsHovered(true);
        if (onMouseEnter) onMouseEnter(event);
    }, [
        onMouseEnter
    ]);
    const handleMouseLeave = $5DxI1$useCallback((event)=>{
        setIsHovered(false);
        if (onMouseLeave) onMouseLeave(event);
    }, [
        onMouseLeave
    ]);
    const handleClick = onClick ? (event)=>{
        onClick(event);
    } : undefined;
    const handleKeyDown = $5DxI1$useCallback((event)=>{
        if (onKeyDown) onKeyDown(event);
    }, [
        onKeyDown
    ]);
    if (isLoading) return /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$SkeletonContainer, {
        className: styles.skeleton,
        svgHeight: "5.6rem"
    }, /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$SkeletonDisplayText, {
        numberOfLines: 1
    }), /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$SkeletonBodyText, {
        numberOfLines: 1,
        offsetTop: 35
    }));
    const drag = /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$DragHandle, {
        className: styles.dragHandle,
        isActive: isDragging,
        label: "Reorder entry",
        onClick: $798bf03d82ac02ed$export$783e10c0b439f264
    });
    return /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$Box, {
        "aria-label": title || ariaLabel,
        "aria-pressed": otherProps.as === 'button' ? isSelected ? 'true' : 'false' : undefined,
        as: $58aab48c7cf09ac0$export$eed7d00d62e881b8,
        className: $5DxI1$cx(styles.root({
            hasHeader: hasHeader,
            isHovered: isHovered,
            isSelected: isSelected
        }), className),
        href: href,
        onBlur: handleBlur,
        onClick: handleClick,
        onFocus: handleFocus,
        onMouseEnter: typeof isHoveredProp === 'undefined' && isInteractive ? handleMouseEnter : undefined,
        onMouseLeave: typeof isHoveredProp === 'undefined' && isInteractive ? handleMouseLeave : undefined,
        onKeyDown: handleKeyDown,
        rel: href && (rel || 'noreferrer'),
        role: onClick && !href ? 'button' : undefined,
        tabIndex: onClick ? 0 : undefined,
        target: target,
        ...otherProps,
        ref: forwardedRef,
        testId: testId,
        title: title
    }, withDragHandle ? dragHandleRender ? dragHandleRender({
        drag: drag,
        isDragging: isDragging
    }) : drag : null, /*#__PURE__*/ $5DxI1$react.createElement("div", {
        className: styles.wrapper,
        "data-card-part": "wrapper"
    }, header !== null && header !== void 0 ? header : defaultHeader, /*#__PURE__*/ $5DxI1$react.createElement("div", {
        className: styles.contentBody,
        "data-card-part": "content"
    }, children)));
}
$58aab48c7cf09ac0$var$_BaseCard.displayName = 'BaseCard';
const $58aab48c7cf09ac0$export$ffd8d1a491a618f2 = /*#__PURE__*/ $5DxI1$forwardRef($58aab48c7cf09ac0$var$_BaseCard);




const $f5face715e2a2436$export$37a6ca57378bcb83 = ()=>{
    return {
        root: ({ size: size  })=>/*#__PURE__*/ $5DxI1$css({
                display: 'inline-flex',
                width: 'auto',
                borderRadius: $5DxI1$contentfulf36tokens.borderRadiusMedium,
                minWidth: `calc(1rem * (120 / ${$5DxI1$contentfulf36tokens.fontBaseDefault}))`,
                height: size === 'small' ? `calc(1rem * (188 / ${$5DxI1$contentfulf36tokens.fontBaseDefault}))` : `calc(1rem * (300 / ${$5DxI1$contentfulf36tokens.fontBaseDefault}))`,
                padding: 0,
                textAlign: 'center'
            })
        ,
        asset: /*#__PURE__*/ $5DxI1$css({
            name: "10klw3m",
            styles: "height:100%;"
        }),
        skeleton: /*#__PURE__*/ $5DxI1$css({
            border: `1px solid ${$5DxI1$contentfulf36tokens.gray300}`,
            borderRadius: $5DxI1$contentfulf36tokens.borderRadiusMedium,
            padding: $5DxI1$contentfulf36tokens.spacingM
        })
    };
};




const $e5307476578213bc$export$eff93e4e59ccc3b8 = ({ actions: actions , className: className , icon: icon = null , isSelected: isSelected , size: size = 'default' , src: src , status: status , title: title , type: type , withDragHandle: withDragHandle = false , isLoading: isLoading , testId: testId = 'cf-ui-asset-card' , ...otherProps })=>{
    const styles = $f5face715e2a2436$export$37a6ca57378bcb83();
    const badge = status ? /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$EntityStatusBadge, {
        entityStatus: status
    }) : null;
    const header = icon || badge || actions ? /*#__PURE__*/ $5DxI1$react.createElement($798bf03d82ac02ed$export$606643aa598b5a97, {
        icon: icon,
        badge: badge,
        actions: actions
    }) : null;
    if (isLoading) return /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$SkeletonContainer, {
        className: styles.skeleton,
        svgWidth: size === 'default' ? '18rem' : '11rem',
        svgHeight: size === 'default' ? '18.75rem' : '12rem'
    }, /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$SkeletonImage, {
        width: "100%",
        height: "18.75rem"
    }));
    return /*#__PURE__*/ $5DxI1$react.createElement($58aab48c7cf09ac0$export$ffd8d1a491a618f2, {
        ...otherProps,
        badge: badge,
        className: $5DxI1$cx(styles.root({
            size: size
        }), className),
        header: header,
        isSelected: isSelected,
        title: title,
        withDragHandle: withDragHandle,
        testId: testId
    }, /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$Flex, {
        alignItems: "center",
        fullHeight: true,
        justifyContent: "center"
    }, /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$Asset, {
        className: styles.asset,
        src: src,
        status: status,
        title: title,
        type: type
    })));
};











const $2fcc945398035016$var$getCardPaddingValue = (padding)=>{
    switch(padding){
        case 'large':
            return $5DxI1$contentfulf36tokens.spacingL;
        case 'none':
            return 0;
        default:
            return $5DxI1$contentfulf36tokens.spacingM;
    }
};
const $2fcc945398035016$export$164c3dc7db460fb7 = ({ padding: padding  })=>({
        header: /*#__PURE__*/ $5DxI1$css({
            gridColumn: 'content',
            gridRow: 'header',
            marginBottom: $5DxI1$contentfulf36tokens.spacingM
        }),
        root: /*#__PURE__*/ $5DxI1$css({
            padding: $2fcc945398035016$var$getCardPaddingValue(padding)
        })
    })
;


function $cce5018d103477ad$var$_Card({ actions: actions , badge: badge , icon: icon , padding: padding = 'default' , title: title , className: className , testId: testId = 'cf-ui-card' , ...otherProps }, forwardedRef) {
    const styles = $2fcc945398035016$export$164c3dc7db460fb7({
        padding: padding
    });
    const hasHeader = Boolean(title || icon || badge || actions);
    return /*#__PURE__*/ $5DxI1$react.createElement($58aab48c7cf09ac0$export$ffd8d1a491a618f2, {
        className: $5DxI1$cx(styles.root, className),
        ...otherProps,
        testId: testId,
        header: hasHeader && /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$Flex, {
            alignItems: "center",
            className: $5DxI1$cx(styles.header)
        }, title && /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$Flex, {
            as: "header",
            flexGrow: 1
        }, /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$Heading, {
            marginBottom: "none"
        }, title)), icon && /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$Flex, {
            alignItems: "center",
            marginLeft: "spacingXs"
        }, icon), badge && /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$Flex, {
            alignItems: "center",
            marginLeft: "spacingXs"
        }, badge), actions && /*#__PURE__*/ $5DxI1$react.createElement($c83d23d1a559d33c$export$9b6a647253f61c5f, null, actions)),
        ref: forwardedRef
    });
}
$cce5018d103477ad$var$_Card.displayName = 'Card';
const $cce5018d103477ad$export$60332b2344f7fe41 = /*#__PURE__*/ $5DxI1$forwardRef($cce5018d103477ad$var$_Card);












const $163f0b3a3660f6d4$export$25b6e8fb8b7b795b = ()=>{
    return {
        actionsButton: /*#__PURE__*/ $5DxI1$css({
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderTopLeftRadius: 0,
            borderTopRightRadius: $5DxI1$contentfulf36tokens.borderRadiusMedium
        }),
        content: (size)=>/*#__PURE__*/ $5DxI1$css({
                gridColumn: 'content',
                marginTop: size === 'small' ? $5DxI1$contentfulf36tokens.spacingXs : $5DxI1$contentfulf36tokens.spacingS,
                marginBottom: size === 'small' ? `calc(-1 * ${$5DxI1$contentfulf36tokens.spacingXs})` : 0
            })
        ,
        root: /*#__PURE__*/ $5DxI1$css({
            padding: 0,
            '[data-card-part="content"]': {
                paddingBottom: $5DxI1$contentfulf36tokens.spacingM,
                paddingLeft: $5DxI1$contentfulf36tokens.spacingM,
                paddingRight: $5DxI1$contentfulf36tokens.spacingM
            }
        }),
        header: /*#__PURE__*/ $5DxI1$css({
            borderBottomWidth: 1,
            borderBottomColor: $5DxI1$contentfulf36tokens.gray200,
            borderBottomStyle: 'solid',
            minHeight: 'auto',
            paddingBottom: $5DxI1$contentfulf36tokens.spacingXs,
            paddingLeft: $5DxI1$contentfulf36tokens.spacingM,
            paddingRight: $5DxI1$contentfulf36tokens.spacingXs
        }),
        thumbnail: (size)=>/*#__PURE__*/ $5DxI1$css({
                margin: `0 0 0 ${$5DxI1$contentfulf36tokens.spacingS}`,
                padding: 0,
                overflow: 'hidden',
                position: 'relative',
                img: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    zIndex: 1
                },
                ...size === 'small' ? {
                    height: '40px',
                    width: '40px'
                } : {
                    height: '70px',
                    width: '70px'
                }
            })
    };
};


const $b207f531c43dcc46$var$ENTRY_CARD_DEFAULT_TAG = 'article';
function $b207f531c43dcc46$var$EntryCardTitle({ title: title , titleTag: titleTag  }) {
    if (!title) return null;
    const truncatedTitle = $5DxI1$truncate(title, 255, {});
    return /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$Subheading, {
        title: title.length > 255 ? title : '',
        testId: "title",
        as: titleTag,
        marginBottom: "none",
        isWordBreak: true
    }, truncatedTitle);
}
$b207f531c43dcc46$var$EntryCardTitle.displayName = 'EntryCardTitle';
function $b207f531c43dcc46$var$EntryCardDescription({ description: description , size: size  }) {
    if (!description || size === 'small') return null;
    const truncatedDescription = $5DxI1$truncate(description, 95, {});
    return /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$Paragraph, {
        marginBottom: "none",
        isWordBreak: true
    }, truncatedDescription);
}
$b207f531c43dcc46$var$EntryCardDescription.displayName = 'EntryCardDescription';
function $b207f531c43dcc46$var$_EntryCard({ actions: actions , children: children , className: className , src: src , status: status , thumbnailElement: thumbnailElement , description: description , withDragHandle: withDragHandle = false , title: title , titleTag: titleTag = 'h2' , size: size , testId: testId = 'cf-ui-entry-card' , contentType: contentType , ...otherProps }, forwardedRef) {
    const styles = $163f0b3a3660f6d4$export$25b6e8fb8b7b795b();
    const badge = status ? /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$EntityStatusBadge, {
        entityStatus: status
    }) : null;
    return /*#__PURE__*/ $5DxI1$react.createElement($58aab48c7cf09ac0$export$ffd8d1a491a618f2, {
        as: $b207f531c43dcc46$var$ENTRY_CARD_DEFAULT_TAG,
        ...otherProps,
        actions: actions,
        badge: badge,
        className: $5DxI1$cx(styles.root, className),
        withDragHandle: withDragHandle,
        ref: forwardedRef,
        type: contentType,
        testId: testId
    }, /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$Flex, {
        alignItems: "center",
        className: styles.content(size),
        flexDirection: "row"
    }, /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$Flex, {
        flexDirection: "column",
        flexGrow: 1,
        gap: "spacingS"
    }, /*#__PURE__*/ $5DxI1$react.createElement($b207f531c43dcc46$var$EntryCardTitle, {
        title: title,
        titleTag: titleTag
    }), /*#__PURE__*/ $5DxI1$react.createElement($b207f531c43dcc46$var$EntryCardDescription, {
        size: size,
        description: description
    }), children), thumbnailElement && size !== 'small' && /*#__PURE__*/ $5DxI1$react.createElement("figure", {
        className: styles.thumbnail(size)
    }, thumbnailElement)));
}
$b207f531c43dcc46$var$_EntryCard.displayName = 'EntryCard';
const $b207f531c43dcc46$export$326973e3eb2dbf = /*#__PURE__*/ $5DxI1$forwardRef($b207f531c43dcc46$var$_EntryCard);











const $7025bd74e0f685d1$export$ccfc6dbdba6183be = ()=>{
    return {
        actions: /*#__PURE__*/ $5DxI1$css({
            display: 'flex',
            padding: 0,
            marginLeft: $5DxI1$contentfulf36tokens.spacingXs,
            minHeight: 'auto'
        }),
        root: ({ status: status  })=>{
            const statusColors = $5DxI1$getEntityStatusStyles({
                status: status
            });
            return /*#__PURE__*/ $5DxI1$css({
                borderBottomLeftRadius: 0,
                borderTopLeftRadius: 0,
                display: 'inline-flex',
                width: 'auto',
                verticalAlign: 'middle',
                paddingBottom: 0,
                paddingTop: 0,
                paddingLeft: $5DxI1$contentfulf36tokens.spacingS,
                paddingRight: $5DxI1$contentfulf36tokens.spacing2Xs,
                '[data-card-part="wrapper"]': {
                    display: 'inline-flex',
                    flexDirection: 'row-reverse'
                },
                '&::before': {
                    backgroundColor: statusColors.color,
                    bottom: 0,
                    content: '""',
                    display: 'block',
                    left: 0,
                    position: 'absolute',
                    top: 0,
                    width: $5DxI1$contentfulf36tokens.spacing2Xs
                }
            });
        },
        skeleton: /*#__PURE__*/ $5DxI1$css({
            display: 'inline-flex',
            border: `1px solid ${$5DxI1$contentfulf36tokens.gray300}`,
            borderTopRightRadius: $5DxI1$contentfulf36tokens.borderRadiusMedium,
            borderBottomRightRadius: $5DxI1$contentfulf36tokens.borderRadiusMedium,
            padding: $5DxI1$contentfulf36tokens.spacingXs
        })
    };
};




const $80460818031cae79$export$94c16395f9ec3265 = ({ actions: actions , className: className , children: children , status: status , title: title , isLoading: isLoading , testId: testId = 'cf-ui-inline-entry-card' , ...otherProps })=>{
    const styles = $7025bd74e0f685d1$export$ccfc6dbdba6183be();
    const header = /*#__PURE__*/ $5DxI1$react.createElement($c83d23d1a559d33c$export$9b6a647253f61c5f, {
        buttonProps: {
            className: styles.actions
        }
    }, actions);
    if (isLoading) return /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$SkeletonContainer, {
        className: styles.skeleton,
        svgHeight: "1.25rem",
        svgWidth: "6rem"
    }, /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$SkeletonBodyText, {
        numberOfLines: 1
    }));
    return /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$Tooltip, {
        placement: "bottom",
        content: title
    }, /*#__PURE__*/ $5DxI1$react.createElement($58aab48c7cf09ac0$export$ffd8d1a491a618f2, {
        ...otherProps,
        className: $5DxI1$cx(styles.root({
            status: status
        }), className),
        header: header,
        testId: testId
    }, children || /*#__PURE__*/ $5DxI1$react.createElement($5DxI1$Text, null, title)));
};





export {$e5307476578213bc$export$eff93e4e59ccc3b8 as AssetCard, $cce5018d103477ad$export$60332b2344f7fe41 as Card, $b207f531c43dcc46$export$326973e3eb2dbf as EntryCard, $80460818031cae79$export$94c16395f9ec3265 as InlineEntryCard};
//# sourceMappingURL=module.js.map

var $ej4sI$emotion = require("emotion");
var $ej4sI$react = require("react");
var $ej4sI$contentfulf36core = require("@contentful/f36-core");
var $ej4sI$contentfulf36badge = require("@contentful/f36-badge");
var $ej4sI$contentfulf36asset = require("@contentful/f36-asset");
var $ej4sI$contentfulf36skeleton = require("@contentful/f36-skeleton");
var $ej4sI$contentfulf36draghandle = require("@contentful/f36-drag-handle");
var $ej4sI$contentfulf36tokens = require("@contentful/f36-tokens");
var $ej4sI$contentfulf36typography = require("@contentful/f36-typography");
var $ej4sI$contentfulf36button = require("@contentful/f36-button");
var $ej4sI$contentfulf36icons = require("@contentful/f36-icons");
var $ej4sI$contentfulf36menu = require("@contentful/f36-menu");
var $ej4sI$truncate = require("truncate");
var $ej4sI$contentfulf36tooltip = require("@contentful/f36-tooltip");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "AssetCard", () => $a1789fe336016cbc$export$eff93e4e59ccc3b8);
$parcel$export(module.exports, "Card", () => $f9cc9ae35ca0e97b$export$60332b2344f7fe41);
$parcel$export(module.exports, "EntryCard", () => $53f5ebde1e43cd99$export$326973e3eb2dbf);
$parcel$export(module.exports, "InlineEntryCard", () => $ce99b3784504d625$export$94c16395f9ec3265);











const $ac580b2c4ac6c617$export$e5c3362273de1eca = ()=>{
    return {
        contentBody: /*#__PURE__*/ $ej4sI$emotion.css({
            name: "161cbg",
            styles: "grid-column:content;grid-row:content;white-space:initial;"
        }),
        wrapper: /*#__PURE__*/ $ej4sI$emotion.css({
            name: "1cjnmwb",
            styles: "flex:1 1 0;display:grid;grid-template-rows:[header] auto [content] minmax(0, 1fr);grid-template-columns:auto [content] minmax(0, 1fr);"
        }),
        dragHandle: /*#__PURE__*/ $ej4sI$emotion.css({
            borderBottomLeftRadius: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).borderRadiusMedium,
            borderTopLeftRadius: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).borderRadiusMedium,
            cursor: 'grab'
        }),
        root: ({ hasHeader: hasHeader , isHovered: isHovered , isSelected: isSelected  })=>{
            const styles = {
                backgroundColor: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).colorWhite,
                borderColor: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).gray300,
                borderRadius: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).borderRadiusMedium,
                borderStyle: 'solid',
                borderWidth: 1,
                color: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).gray900,
                display: 'flex',
                textAlign: 'left',
                width: '100%',
                fontSize: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).fontSizeM,
                fontWeight: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).fontWeightNormal,
                position: 'relative',
                textDecoration: 'none',
                transition: `border-color ${($parcel$interopDefault($ej4sI$contentfulf36tokens)).transitionDurationDefault} ${($parcel$interopDefault($ej4sI$contentfulf36tokens)).transitionEasingDefault},
    box-shadow ${($parcel$interopDefault($ej4sI$contentfulf36tokens)).transitionDurationShort} ${($parcel$interopDefault($ej4sI$contentfulf36tokens)).transitionEasingDefault}`,
                '&:focus': /*#__PURE__*/ $ej4sI$emotion.css({
                    borderColor: isSelected ? ($parcel$interopDefault($ej4sI$contentfulf36tokens)).blue100 : ($parcel$interopDefault($ej4sI$contentfulf36tokens)).colorPrimary,
                    boxShadow: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).glowPrimary,
                    outline: 'none'
                }),
                '&:focus:not(:focus-visible)': /*#__PURE__*/ $ej4sI$emotion.css({
                    borderColor: isSelected ? ($parcel$interopDefault($ej4sI$contentfulf36tokens)).colorPrimary : ($parcel$interopDefault($ej4sI$contentfulf36tokens)).gray300,
                    boxShadow: 'unset'
                }),
                '&:focus-visible': /*#__PURE__*/ $ej4sI$emotion.css({
                    borderColor: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).colorPrimary,
                    boxShadow: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).glowPrimary
                })
            };
            if (!hasHeader) styles.paddingTop = ($parcel$interopDefault($ej4sI$contentfulf36tokens)).spacingM;
            if (isHovered) {
                styles.borderColor = ($parcel$interopDefault($ej4sI$contentfulf36tokens)).colorPrimary;
                styles.cursor = 'pointer';
            }
            if (isSelected) {
                styles.backgroundColor = ($parcel$interopDefault($ej4sI$contentfulf36tokens)).blue100;
                styles.borderColor = ($parcel$interopDefault($ej4sI$contentfulf36tokens)).colorPrimary;
            }
            return /*#__PURE__*/ $ej4sI$emotion.css(styles);
        },
        skeleton: /*#__PURE__*/ $ej4sI$emotion.css({
            border: `1px solid ${($parcel$interopDefault($ej4sI$contentfulf36tokens)).gray300}`,
            borderRadius: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).borderRadiusMedium,
            padding: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).spacingM
        })
    };
};















const $6d621ff952663052$export$6468e6b9c1bc1de = ()=>{
    return {
        root: /*#__PURE__*/ $ej4sI$emotion.css({
            minHeight: 'auto',
            padding: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).spacing2Xs,
            marginLeft: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).spacingXs
        })
    };
};


const $5b97eda51fdfde91$export$9b6a647253f61c5f = ({ buttonProps: buttonProps , children: children  })=>{
    const styles = $6d621ff952663052$export$6468e6b9c1bc1de();
    return /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36menu.Menu, null, /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36menu.Menu.Trigger, null, /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36button.IconButton, {
        "aria-label": "Actions",
        icon: /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36icons.MoreHorizontalIcon, null),
        ...buttonProps,
        className: $ej4sI$emotion.cx(styles.root, buttonProps === null || buttonProps === void 0 ? void 0 : buttonProps.className),
        size: "small",
        variant: "transparent",
        testId: "cf-ui-card-actions"
    })), /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36menu.Menu.List, null, children));
};



const $4f678cc54123ba6b$var$getHeaderStyles = ()=>{
    return {
        header: /*#__PURE__*/ $ej4sI$emotion.css({
            alignItems: 'center',
            borderBottomColor: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).gray200,
            borderBottomStyle: 'solid',
            borderBottomWidth: 1,
            borderTopLeftRadius: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).borderRadiusMedium,
            borderTopRightRadius: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).borderRadiusMedium,
            boxSizing: 'border-box',
            color: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).gray600,
            fontSize: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).fontSizeM,
            fontWeight: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).fontWeightNormal,
            gridColumn: 'content',
            gridRow: 'header',
            lineHeight: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).lineHeightM,
            paddingBottom: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).spacingXs,
            paddingLeft: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).spacingM,
            paddingRight: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).spacingXs,
            paddingTop: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).spacingXs,
            minHeight: '37px'
        }),
        headerWithActions: /*#__PURE__*/ $ej4sI$emotion.css({
            paddingBottom: 0,
            paddingRight: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).spacingXs,
            paddingTop: 0
        })
    };
};
const $4f678cc54123ba6b$export$783e10c0b439f264 = (e)=>{
    e.preventDefault();
    e.stopPropagation();
};
const $4f678cc54123ba6b$export$606643aa598b5a97 = (props)=>{
    const { icon: icon , type: type , actions: actions , actionsButtonProps: actionsButtonProps , badge: badge  } = props;
    const styles = $4f678cc54123ba6b$var$getHeaderStyles();
    return /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36core.Flex, {
        className: $ej4sI$emotion.cx(styles.header, actions && styles.headerWithActions)
    }, /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36core.Flex, {
        flexGrow: 1
    }, type && /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36typography.Text, {
        fontColor: "gray600",
        isWordBreak: true
    }, type)), icon && /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36core.Flex, {
        alignItems: "center",
        marginLeft: "spacingXs"
    }, icon), badge && /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36core.Flex, {
        alignItems: "center",
        marginLeft: "spacingXs"
    }, badge), actions && actions.length > 0 && /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36core.Flex // don't propagate click event, so onClick handler on the card is not triggered
    , {
        onClick: $4f678cc54123ba6b$export$783e10c0b439f264,
        alignItems: "center"
    }, /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($5b97eda51fdfde91$export$9b6a647253f61c5f, {
        buttonProps: actionsButtonProps
    }, actions)));
};
$4f678cc54123ba6b$export$606643aa598b5a97.displayName = 'DefaultCardHeader';


const $7fa2d152b3057b6a$export$eed7d00d62e881b8 = 'article';
function $7fa2d152b3057b6a$var$_BaseCard({ actions: actions , actionsButtonProps: actionsButtonProps , ariaLabel: ariaLabel , badge: badge , children: children , className: className , contentBodyProps: contentBodyProps , header: header , href: href , icon: icon , isDragging: isDragging = false , isHovered: isHoveredProp , isSelected: isSelected = false , onBlur: onBlur , onClick: onClick , onFocus: onFocus , onKeyDown: onKeyDown , onMouseEnter: onMouseEnter , onMouseLeave: onMouseLeave , target: target , rel: rel , testId: testId = 'cf-ui-base-card' , title: title , type: type , withDragHandle: withDragHandle , dragHandleRender: dragHandleRender , isLoading: isLoading , ...otherProps }, forwardedRef) {
    const styles = $ac580b2c4ac6c617$export$e5c3362273de1eca();
    const [isHovered, setIsHovered] = $ej4sI$react.useState(isHoveredProp !== null && isHoveredProp !== void 0 ? isHoveredProp : false);
    const isInteractive = Boolean(onClick || href || withDragHandle);
    const hasHeader = Boolean(header);
    const defaultHeader = type || icon || badge || actions ? /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($4f678cc54123ba6b$export$606643aa598b5a97, {
        type: type,
        icon: icon,
        badge: badge,
        actions: actions,
        actionsButtonProps: actionsButtonProps
    }) : null;
    const handleFocus = $ej4sI$react.useCallback((event)=>{
        if (onFocus) onFocus(event);
    }, [
        onFocus
    ]);
    const handleBlur = $ej4sI$react.useCallback((event)=>{
        if (onBlur) onBlur(event);
    }, [
        onBlur
    ]);
    const handleMouseEnter = $ej4sI$react.useCallback((event)=>{
        setIsHovered(true);
        if (onMouseEnter) onMouseEnter(event);
    }, [
        onMouseEnter
    ]);
    const handleMouseLeave = $ej4sI$react.useCallback((event)=>{
        setIsHovered(false);
        if (onMouseLeave) onMouseLeave(event);
    }, [
        onMouseLeave
    ]);
    const handleClick = onClick ? (event)=>{
        onClick(event);
    } : undefined;
    const handleKeyDown = $ej4sI$react.useCallback((event)=>{
        if (onKeyDown) onKeyDown(event);
    }, [
        onKeyDown
    ]);
    if (isLoading) return /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36skeleton.SkeletonContainer, {
        className: styles.skeleton,
        svgHeight: "5.6rem"
    }, /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36skeleton.SkeletonDisplayText, {
        numberOfLines: 1
    }), /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36skeleton.SkeletonBodyText, {
        numberOfLines: 1,
        offsetTop: 35
    }));
    const drag = /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36draghandle.DragHandle, {
        className: styles.dragHandle,
        isActive: isDragging,
        label: "Reorder entry",
        onClick: $4f678cc54123ba6b$export$783e10c0b439f264
    });
    return /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36core.Box, {
        "aria-label": title || ariaLabel,
        "aria-pressed": otherProps.as === 'button' ? isSelected ? 'true' : 'false' : undefined,
        as: $7fa2d152b3057b6a$export$eed7d00d62e881b8,
        className: $ej4sI$emotion.cx(styles.root({
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
    }) : drag : null, /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement("div", {
        className: styles.wrapper,
        "data-card-part": "wrapper"
    }, header !== null && header !== void 0 ? header : defaultHeader, /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement("div", {
        className: styles.contentBody,
        "data-card-part": "content"
    }, children)));
}
$7fa2d152b3057b6a$var$_BaseCard.displayName = 'BaseCard';
const $7fa2d152b3057b6a$export$ffd8d1a491a618f2 = /*#__PURE__*/ $ej4sI$react.forwardRef($7fa2d152b3057b6a$var$_BaseCard);




const $8737d8f2d81a08a9$export$37a6ca57378bcb83 = ()=>{
    return {
        root: ({ size: size  })=>/*#__PURE__*/ $ej4sI$emotion.css({
                display: 'inline-flex',
                width: 'auto',
                borderRadius: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).borderRadiusMedium,
                minWidth: `calc(1rem * (120 / ${($parcel$interopDefault($ej4sI$contentfulf36tokens)).fontBaseDefault}))`,
                height: size === 'small' ? `calc(1rem * (188 / ${($parcel$interopDefault($ej4sI$contentfulf36tokens)).fontBaseDefault}))` : `calc(1rem * (300 / ${($parcel$interopDefault($ej4sI$contentfulf36tokens)).fontBaseDefault}))`,
                padding: 0,
                textAlign: 'center'
            })
        ,
        asset: /*#__PURE__*/ $ej4sI$emotion.css({
            name: "10klw3m",
            styles: "height:100%;"
        }),
        skeleton: /*#__PURE__*/ $ej4sI$emotion.css({
            border: `1px solid ${($parcel$interopDefault($ej4sI$contentfulf36tokens)).gray300}`,
            borderRadius: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).borderRadiusMedium,
            padding: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).spacingM
        })
    };
};




const $a1789fe336016cbc$export$eff93e4e59ccc3b8 = ({ actions: actions , className: className , icon: icon = null , isSelected: isSelected , size: size = 'default' , src: src , status: status , title: title , type: type , withDragHandle: withDragHandle = false , isLoading: isLoading , testId: testId = 'cf-ui-asset-card' , ...otherProps })=>{
    const styles = $8737d8f2d81a08a9$export$37a6ca57378bcb83();
    const badge = status ? /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36badge.EntityStatusBadge, {
        entityStatus: status
    }) : null;
    const header = icon || badge || actions ? /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($4f678cc54123ba6b$export$606643aa598b5a97, {
        icon: icon,
        badge: badge,
        actions: actions
    }) : null;
    if (isLoading) return /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36skeleton.SkeletonContainer, {
        className: styles.skeleton,
        svgWidth: size === 'default' ? '18rem' : '11rem',
        svgHeight: size === 'default' ? '18.75rem' : '12rem'
    }, /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36skeleton.SkeletonImage, {
        width: "100%",
        height: "18.75rem"
    }));
    return /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($7fa2d152b3057b6a$export$ffd8d1a491a618f2, {
        ...otherProps,
        badge: badge,
        className: $ej4sI$emotion.cx(styles.root({
            size: size
        }), className),
        header: header,
        isSelected: isSelected,
        title: title,
        withDragHandle: withDragHandle,
        testId: testId
    }, /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36core.Flex, {
        alignItems: "center",
        fullHeight: true,
        justifyContent: "center"
    }, /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36asset.Asset, {
        className: styles.asset,
        src: src,
        status: status,
        title: title,
        type: type
    })));
};











const $0f06030e2ddcf42b$var$getCardPaddingValue = (padding)=>{
    switch(padding){
        case 'large':
            return ($parcel$interopDefault($ej4sI$contentfulf36tokens)).spacingL;
        case 'none':
            return 0;
        default:
            return ($parcel$interopDefault($ej4sI$contentfulf36tokens)).spacingM;
    }
};
const $0f06030e2ddcf42b$export$164c3dc7db460fb7 = ({ padding: padding  })=>({
        header: /*#__PURE__*/ $ej4sI$emotion.css({
            gridColumn: 'content',
            gridRow: 'header',
            marginBottom: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).spacingM
        }),
        root: /*#__PURE__*/ $ej4sI$emotion.css({
            padding: $0f06030e2ddcf42b$var$getCardPaddingValue(padding)
        })
    })
;


function $f9cc9ae35ca0e97b$var$_Card({ actions: actions , badge: badge , icon: icon , padding: padding = 'default' , title: title , className: className , testId: testId = 'cf-ui-card' , ...otherProps }, forwardedRef) {
    const styles = $0f06030e2ddcf42b$export$164c3dc7db460fb7({
        padding: padding
    });
    const hasHeader = Boolean(title || icon || badge || actions);
    return /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($7fa2d152b3057b6a$export$ffd8d1a491a618f2, {
        className: $ej4sI$emotion.cx(styles.root, className),
        ...otherProps,
        testId: testId,
        header: hasHeader && /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36core.Flex, {
            alignItems: "center",
            className: $ej4sI$emotion.cx(styles.header)
        }, title && /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36core.Flex, {
            as: "header",
            flexGrow: 1
        }, /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36typography.Heading, {
            marginBottom: "none"
        }, title)), icon && /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36core.Flex, {
            alignItems: "center",
            marginLeft: "spacingXs"
        }, icon), badge && /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36core.Flex, {
            alignItems: "center",
            marginLeft: "spacingXs"
        }, badge), actions && /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($5b97eda51fdfde91$export$9b6a647253f61c5f, null, actions)),
        ref: forwardedRef
    });
}
$f9cc9ae35ca0e97b$var$_Card.displayName = 'Card';
const $f9cc9ae35ca0e97b$export$60332b2344f7fe41 = /*#__PURE__*/ $ej4sI$react.forwardRef($f9cc9ae35ca0e97b$var$_Card);












const $6ca911295fb9c155$export$25b6e8fb8b7b795b = ()=>{
    return {
        actionsButton: /*#__PURE__*/ $ej4sI$emotion.css({
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderTopLeftRadius: 0,
            borderTopRightRadius: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).borderRadiusMedium
        }),
        content: (size)=>/*#__PURE__*/ $ej4sI$emotion.css({
                gridColumn: 'content',
                marginTop: size === 'small' ? ($parcel$interopDefault($ej4sI$contentfulf36tokens)).spacingXs : ($parcel$interopDefault($ej4sI$contentfulf36tokens)).spacingS,
                marginBottom: size === 'small' ? `calc(-1 * ${($parcel$interopDefault($ej4sI$contentfulf36tokens)).spacingXs})` : 0
            })
        ,
        root: /*#__PURE__*/ $ej4sI$emotion.css({
            padding: 0,
            '[data-card-part="content"]': {
                paddingBottom: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).spacingM,
                paddingLeft: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).spacingM,
                paddingRight: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).spacingM
            }
        }),
        header: /*#__PURE__*/ $ej4sI$emotion.css({
            borderBottomWidth: 1,
            borderBottomColor: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).gray200,
            borderBottomStyle: 'solid',
            minHeight: 'auto',
            paddingBottom: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).spacingXs,
            paddingLeft: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).spacingM,
            paddingRight: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).spacingXs
        }),
        thumbnail: (size)=>/*#__PURE__*/ $ej4sI$emotion.css({
                margin: `0 0 0 ${($parcel$interopDefault($ej4sI$contentfulf36tokens)).spacingS}`,
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


const $53f5ebde1e43cd99$var$ENTRY_CARD_DEFAULT_TAG = 'article';
function $53f5ebde1e43cd99$var$EntryCardTitle({ title: title , titleTag: titleTag  }) {
    if (!title) return null;
    const truncatedTitle = ($parcel$interopDefault($ej4sI$truncate))(title, 255, {});
    return /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36typography.Subheading, {
        title: title.length > 255 ? title : '',
        testId: "title",
        as: titleTag,
        marginBottom: "none",
        isWordBreak: true
    }, truncatedTitle);
}
$53f5ebde1e43cd99$var$EntryCardTitle.displayName = 'EntryCardTitle';
function $53f5ebde1e43cd99$var$EntryCardDescription({ description: description , size: size  }) {
    if (!description || size === 'small') return null;
    const truncatedDescription = ($parcel$interopDefault($ej4sI$truncate))(description, 95, {});
    return /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36typography.Paragraph, {
        marginBottom: "none",
        isWordBreak: true
    }, truncatedDescription);
}
$53f5ebde1e43cd99$var$EntryCardDescription.displayName = 'EntryCardDescription';
function $53f5ebde1e43cd99$var$_EntryCard({ actions: actions , children: children , className: className , src: src , status: status , thumbnailElement: thumbnailElement , description: description , withDragHandle: withDragHandle = false , title: title , titleTag: titleTag = 'h2' , size: size , testId: testId = 'cf-ui-entry-card' , contentType: contentType , ...otherProps }, forwardedRef) {
    const styles = $6ca911295fb9c155$export$25b6e8fb8b7b795b();
    const badge = status ? /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36badge.EntityStatusBadge, {
        entityStatus: status
    }) : null;
    return /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($7fa2d152b3057b6a$export$ffd8d1a491a618f2, {
        as: $53f5ebde1e43cd99$var$ENTRY_CARD_DEFAULT_TAG,
        ...otherProps,
        actions: actions,
        badge: badge,
        className: $ej4sI$emotion.cx(styles.root, className),
        withDragHandle: withDragHandle,
        ref: forwardedRef,
        type: contentType,
        testId: testId
    }, /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36core.Flex, {
        alignItems: "center",
        className: styles.content(size),
        flexDirection: "row"
    }, /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36core.Flex, {
        flexDirection: "column",
        flexGrow: 1,
        gap: "spacingS"
    }, /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($53f5ebde1e43cd99$var$EntryCardTitle, {
        title: title,
        titleTag: titleTag
    }), /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($53f5ebde1e43cd99$var$EntryCardDescription, {
        size: size,
        description: description
    }), children), thumbnailElement && size !== 'small' && /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement("figure", {
        className: styles.thumbnail(size)
    }, thumbnailElement)));
}
$53f5ebde1e43cd99$var$_EntryCard.displayName = 'EntryCard';
const $53f5ebde1e43cd99$export$326973e3eb2dbf = /*#__PURE__*/ $ej4sI$react.forwardRef($53f5ebde1e43cd99$var$_EntryCard);











const $1c0682cd2721a9f0$export$ccfc6dbdba6183be = ()=>{
    return {
        actions: /*#__PURE__*/ $ej4sI$emotion.css({
            display: 'flex',
            padding: 0,
            marginLeft: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).spacingXs,
            minHeight: 'auto'
        }),
        root: ({ status: status  })=>{
            const statusColors = $ej4sI$contentfulf36core.getEntityStatusStyles({
                status: status
            });
            return /*#__PURE__*/ $ej4sI$emotion.css({
                borderBottomLeftRadius: 0,
                borderTopLeftRadius: 0,
                display: 'inline-flex',
                width: 'auto',
                verticalAlign: 'middle',
                paddingBottom: 0,
                paddingTop: 0,
                paddingLeft: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).spacingS,
                paddingRight: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).spacing2Xs,
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
                    width: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).spacing2Xs
                }
            });
        },
        skeleton: /*#__PURE__*/ $ej4sI$emotion.css({
            display: 'inline-flex',
            border: `1px solid ${($parcel$interopDefault($ej4sI$contentfulf36tokens)).gray300}`,
            borderTopRightRadius: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).borderRadiusMedium,
            borderBottomRightRadius: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).borderRadiusMedium,
            padding: ($parcel$interopDefault($ej4sI$contentfulf36tokens)).spacingXs
        })
    };
};




const $ce99b3784504d625$export$94c16395f9ec3265 = ({ actions: actions , className: className , children: children , status: status , title: title , isLoading: isLoading , testId: testId = 'cf-ui-inline-entry-card' , ...otherProps })=>{
    const styles = $1c0682cd2721a9f0$export$ccfc6dbdba6183be();
    const header = /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($5b97eda51fdfde91$export$9b6a647253f61c5f, {
        buttonProps: {
            className: styles.actions
        }
    }, actions);
    if (isLoading) return /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36skeleton.SkeletonContainer, {
        className: styles.skeleton,
        svgHeight: "1.25rem",
        svgWidth: "6rem"
    }, /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36skeleton.SkeletonBodyText, {
        numberOfLines: 1
    }));
    return /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36tooltip.Tooltip, {
        placement: "bottom",
        content: title
    }, /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($7fa2d152b3057b6a$export$ffd8d1a491a618f2, {
        ...otherProps,
        className: $ej4sI$emotion.cx(styles.root({
            status: status
        }), className),
        header: header,
        testId: testId
    }, children || /*#__PURE__*/ ($parcel$interopDefault($ej4sI$react)).createElement($ej4sI$contentfulf36typography.Text, null, title)));
};





//# sourceMappingURL=main.js.map

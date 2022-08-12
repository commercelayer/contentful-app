var $9pthv$react = require("react");
var $9pthv$contentfulf36core = require("@contentful/f36-core");
var $9pthv$emotion = require("emotion");
var $9pthv$contentfulf36tokens = require("@contentful/f36-tokens");
var $9pthv$contentfulf36typography = require("@contentful/f36-typography");
var $9pthv$contentfulf36icons = require("@contentful/f36-icons");
var $9pthv$contentfulf36collapse = require("@contentful/f36-collapse");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Accordion", () => $485e20d95dcb1fa7$export$a766cd26d0d69044);
$parcel$export(module.exports, "AccordionHeader", () => $a14b9c8d0b0cbe0b$export$5e3e5deaaf81ee41);
$parcel$export(module.exports, "AccordionItem", () => $b9a3851e41efa019$export$d99097c13d4dac9f);
$parcel$export(module.exports, "AccordionPanel", () => $dc0312cfa0956395$export$7cad6f17fd6e117b);





const $b2e2219a9d74caf2$export$af90c4d6702a6ca7 = ({ className: className  })=>({
        accordion: $9pthv$emotion.cx(/*#__PURE__*/ $9pthv$emotion.css({
            boxSizing: 'border-box',
            padding: '0',
            margin: '0',
            listStyle: 'none',
            '&:first-child': {
                borderTop: `1px solid ${($parcel$interopDefault($9pthv$contentfulf36tokens)).gray300}`
            }
        }), className)
    })
;


const $6b1aad2dfaf9ce0d$var$_Accordion = ({ align: align = 'end' , children: children , className: className , testId: testId = 'cf-ui-accordion' , ...otherProps }, ref)=>{
    const styles = $b2e2219a9d74caf2$export$af90c4d6702a6ca7({
        className: className
    });
    return /*#__PURE__*/ ($parcel$interopDefault($9pthv$react)).createElement($9pthv$contentfulf36core.Box, {
        as: "ul",
        className: styles.accordion,
        testId: testId,
        ...otherProps,
        ref: ref
    }, ($parcel$interopDefault($9pthv$react)).Children.map(children, (child)=>{
        if (/*#__PURE__*/ ($parcel$interopDefault($9pthv$react)).isValidElement(child)) return /*#__PURE__*/ ($parcel$interopDefault($9pthv$react)).cloneElement(child, {
            align: align
        });
        return child;
    }));
};
const $6b1aad2dfaf9ce0d$export$a766cd26d0d69044 = /*#__PURE__*/ ($parcel$interopDefault($9pthv$react)).forwardRef($6b1aad2dfaf9ce0d$var$_Accordion);










const $cc0727a9cc62031c$var$getHeaderStyles = ({ align: align  })=>$9pthv$emotion.cx(/*#__PURE__*/ $9pthv$emotion.css({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        border: '0',
        padding: ($parcel$interopDefault($9pthv$contentfulf36tokens)).spacingM,
        backgroundColor: 'transparent',
        fontFamily: ($parcel$interopDefault($9pthv$contentfulf36tokens)).fontStackPrimary,
        fontSize: ($parcel$interopDefault($9pthv$contentfulf36tokens)).fontSizeL,
        fontWeight: ($parcel$interopDefault($9pthv$contentfulf36tokens)).fontWeightDemiBold,
        lineHeight: ($parcel$interopDefault($9pthv$contentfulf36tokens)).lineHeightL,
        color: ($parcel$interopDefault($9pthv$contentfulf36tokens)).gray800,
        width: '100%',
        minWidth: '9px',
        cursor: 'pointer',
        transition: `background-color ${($parcel$interopDefault($9pthv$contentfulf36tokens)).transitionDurationDefault} ${($parcel$interopDefault($9pthv$contentfulf36tokens)).transitionEasingDefault},
        box-shadow ${($parcel$interopDefault($9pthv$contentfulf36tokens)).transitionDurationShort} ${($parcel$interopDefault($9pthv$contentfulf36tokens)).transitionEasingDefault}`,
        '&:hover': {
            backgroundColor: ($parcel$interopDefault($9pthv$contentfulf36tokens)).gray100
        },
        '&:focus': {
            backgroundColor: ($parcel$interopDefault($9pthv$contentfulf36tokens)).gray100,
            borderRadius: ($parcel$interopDefault($9pthv$contentfulf36tokens)).borderRadiusMedium,
            boxShadow: ($parcel$interopDefault($9pthv$contentfulf36tokens)).glowPrimary,
            outline: 'none'
        },
        '&:focus:not(:focus-visible)': {
            backgroundColor: 'transparent',
            borderRadius: 'unset',
            boxShadow: 'unset'
        },
        '&:focus-visible': {
            backgroundColor: ($parcel$interopDefault($9pthv$contentfulf36tokens)).gray100,
            borderRadius: ($parcel$interopDefault($9pthv$contentfulf36tokens)).borderRadiusMedium,
            boxShadow: ($parcel$interopDefault($9pthv$contentfulf36tokens)).glowPrimary
        }
    }), align === 'end' && /*#__PURE__*/ $9pthv$emotion.css({
        name: "1tvf3d0",
        styles: "flex-direction:row-reverse;justify-content:space-between;"
    }))
;
const $cc0727a9cc62031c$var$getIconStyles = ({ align: align , isExpanded: isExpanded  })=>$9pthv$emotion.cx(/*#__PURE__*/ $9pthv$emotion.css({
        transform: 'rotate(0deg)',
        transition: `transform ${($parcel$interopDefault($9pthv$contentfulf36tokens)).transitionDurationDefault} ${($parcel$interopDefault($9pthv$contentfulf36tokens)).transitionEasingDefault}`
    }), align === 'end' && /*#__PURE__*/ $9pthv$emotion.css({
        marginLeft: ($parcel$interopDefault($9pthv$contentfulf36tokens)).spacingM
    }), align === 'start' && /*#__PURE__*/ $9pthv$emotion.css({
        marginRight: ($parcel$interopDefault($9pthv$contentfulf36tokens)).spacingM
    }), isExpanded && /*#__PURE__*/ $9pthv$emotion.css({
        name: "4ky835",
        styles: "transform:rotate(180deg);"
    }))
;
const $cc0727a9cc62031c$export$b6b01239d0041103 = (props)=>({
        accordionHeader: $cc0727a9cc62031c$var$getHeaderStyles(props),
        accordionHeaderIcon: $cc0727a9cc62031c$var$getIconStyles(props)
    })
;


const $a14b9c8d0b0cbe0b$export$5e3e5deaaf81ee41 = ({ children: children , onClick: onClick , isExpanded: isExpanded = false , ariaId: ariaId , element: element = 'h2' , align: align = 'end' , testId: testId = 'cf-ui-accordion-header' , ...rest })=>{
    const styles = $cc0727a9cc62031c$export$b6b01239d0041103({
        align: align,
        isExpanded: isExpanded
    });
    return /*#__PURE__*/ ($parcel$interopDefault($9pthv$react)).createElement($9pthv$contentfulf36typography.Subheading, {
        ...rest,
        testId: testId,
        marginBottom: "none",
        as: element
    }, /*#__PURE__*/ ($parcel$interopDefault($9pthv$react)).createElement("button", {
        type: "button",
        "aria-expanded": isExpanded,
        "aria-controls": `accordion-panel--${ariaId}`,
        id: `accordion--${ariaId}`,
        className: styles.accordionHeader,
        onClick: onClick
    }, /*#__PURE__*/ ($parcel$interopDefault($9pthv$react)).createElement($9pthv$contentfulf36icons.ChevronDownTrimmedIcon, {
        className: styles.accordionHeaderIcon,
        variant: "secondary"
    }), children));
};






const $1911a31b860eeb50$export$2db50514b4b2c1ee = ()=>{
    return {
        accordionPanelContent: /*#__PURE__*/ $9pthv$emotion.css({
            width: '100%',
            padding: `${($parcel$interopDefault($9pthv$contentfulf36tokens)).spacingXs} ${($parcel$interopDefault($9pthv$contentfulf36tokens)).spacingM} ${($parcel$interopDefault($9pthv$contentfulf36tokens)).spacingM}`
        })
    };
};


const $dc0312cfa0956395$export$7cad6f17fd6e117b = ({ children: children , isExpanded: isExpanded = false , ariaId: ariaId , testId: testId = 'cf-ui-accordion-panel' , ...otherProps })=>{
    const styles = $1911a31b860eeb50$export$2db50514b4b2c1ee();
    return /*#__PURE__*/ ($parcel$interopDefault($9pthv$react)).createElement($9pthv$contentfulf36collapse.Collapse, {
        "data-test-id": testId,
        "aria-labelledby": `accordion--${ariaId}`,
        isExpanded: isExpanded,
        ...otherProps
    }, /*#__PURE__*/ ($parcel$interopDefault($9pthv$react)).createElement("div", {
        className: styles.accordionPanelContent
    }, children));
};





const $b70a2de4b5faa5c1$export$c4864364a487dfa = ({ className: className  })=>({
        accordionItem: $9pthv$emotion.cx(/*#__PURE__*/ $9pthv$emotion.css({
            padding: '0',
            margin: '0',
            borderBottom: `1px solid ${($parcel$interopDefault($9pthv$contentfulf36tokens)).colorElementMid}`,
            '&:first-child': {
                borderTop: `1px solid ${($parcel$interopDefault($9pthv$contentfulf36tokens)).colorElementMid}`
            }
        }), className)
    })
;


const $b9a3851e41efa019$var$_AccordionItem = ({ title: title = 'Accordion Title' , titleElement: titleElement = 'h2' , testId: testId = 'cf-ui-accordion-item' , onExpand: onExpand , onCollapse: onCollapse , children: children , align: align = 'end' , className: className , isExpanded: isExpanded , ...otherProps }, ref)=>{
    const styles = $b70a2de4b5faa5c1$export$c4864364a487dfa({
        className: className
    });
    const id = $9pthv$contentfulf36core.useId();
    const { isOpen: isOpen , handleOpen: handleOpen , handleClose: handleClose  } = $9pthv$contentfulf36core.useControllableState({
        isOpen: isExpanded,
        onOpen: onExpand,
        onClose: onCollapse
    });
    const handleOnClick = ()=>{
        if (isOpen) handleClose();
        else handleOpen();
    };
    return /*#__PURE__*/ ($parcel$interopDefault($9pthv$react)).createElement($9pthv$contentfulf36core.Box, {
        as: "li",
        className: styles.accordionItem,
        testId: `${testId}-${id}`,
        ...otherProps,
        ref: ref
    }, /*#__PURE__*/ ($parcel$interopDefault($9pthv$react)).createElement($a14b9c8d0b0cbe0b$export$5e3e5deaaf81ee41, {
        onClick: handleOnClick,
        isExpanded: isOpen,
        element: titleElement,
        ariaId: id,
        align: align
    }, title), /*#__PURE__*/ ($parcel$interopDefault($9pthv$react)).createElement($dc0312cfa0956395$export$7cad6f17fd6e117b, {
        ariaId: id,
        isExpanded: isOpen
    }, children));
};
const $b9a3851e41efa019$export$d99097c13d4dac9f = /*#__PURE__*/ ($parcel$interopDefault($9pthv$react)).forwardRef($b9a3851e41efa019$var$_AccordionItem);


const $485e20d95dcb1fa7$export$a766cd26d0d69044 = $6b1aad2dfaf9ce0d$export$a766cd26d0d69044;
$485e20d95dcb1fa7$export$a766cd26d0d69044.Item = $b9a3851e41efa019$export$d99097c13d4dac9f;







//# sourceMappingURL=main.js.map

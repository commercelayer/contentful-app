import $jACei$react from "react";
import {Box as $jACei$Box, useId as $jACei$useId, useControllableState as $jACei$useControllableState} from "@contentful/f36-core";
import {cx as $jACei$cx, css as $jACei$css} from "emotion";
import $jACei$contentfulf36tokens from "@contentful/f36-tokens";
import {Subheading as $jACei$Subheading} from "@contentful/f36-typography";
import {ChevronDownTrimmedIcon as $jACei$ChevronDownTrimmedIcon} from "@contentful/f36-icons";
import {Collapse as $jACei$Collapse} from "@contentful/f36-collapse";






const $d678e0ec669f4067$export$af90c4d6702a6ca7 = ({ className: className  })=>({
        accordion: $jACei$cx(/*#__PURE__*/ $jACei$css({
            boxSizing: 'border-box',
            padding: '0',
            margin: '0',
            listStyle: 'none',
            '&:first-child': {
                borderTop: `1px solid ${$jACei$contentfulf36tokens.gray300}`
            }
        }), className)
    })
;


const $a517c4a963657a24$var$_Accordion = ({ align: align = 'end' , children: children , className: className , testId: testId = 'cf-ui-accordion' , ...otherProps }, ref)=>{
    const styles = $d678e0ec669f4067$export$af90c4d6702a6ca7({
        className: className
    });
    return /*#__PURE__*/ $jACei$react.createElement($jACei$Box, {
        as: "ul",
        className: styles.accordion,
        testId: testId,
        ...otherProps,
        ref: ref
    }, $jACei$react.Children.map(children, (child)=>{
        if (/*#__PURE__*/ $jACei$react.isValidElement(child)) return /*#__PURE__*/ $jACei$react.cloneElement(child, {
            align: align
        });
        return child;
    }));
};
const $a517c4a963657a24$export$a766cd26d0d69044 = /*#__PURE__*/ $jACei$react.forwardRef($a517c4a963657a24$var$_Accordion);










const $d95c2a37e890ef38$var$getHeaderStyles = ({ align: align  })=>$jACei$cx(/*#__PURE__*/ $jACei$css({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        border: '0',
        padding: $jACei$contentfulf36tokens.spacingM,
        backgroundColor: 'transparent',
        fontFamily: $jACei$contentfulf36tokens.fontStackPrimary,
        fontSize: $jACei$contentfulf36tokens.fontSizeL,
        fontWeight: $jACei$contentfulf36tokens.fontWeightDemiBold,
        lineHeight: $jACei$contentfulf36tokens.lineHeightL,
        color: $jACei$contentfulf36tokens.gray800,
        width: '100%',
        minWidth: '9px',
        cursor: 'pointer',
        transition: `background-color ${$jACei$contentfulf36tokens.transitionDurationDefault} ${$jACei$contentfulf36tokens.transitionEasingDefault},
        box-shadow ${$jACei$contentfulf36tokens.transitionDurationShort} ${$jACei$contentfulf36tokens.transitionEasingDefault}`,
        '&:hover': {
            backgroundColor: $jACei$contentfulf36tokens.gray100
        },
        '&:focus': {
            backgroundColor: $jACei$contentfulf36tokens.gray100,
            borderRadius: $jACei$contentfulf36tokens.borderRadiusMedium,
            boxShadow: $jACei$contentfulf36tokens.glowPrimary,
            outline: 'none'
        },
        '&:focus:not(:focus-visible)': {
            backgroundColor: 'transparent',
            borderRadius: 'unset',
            boxShadow: 'unset'
        },
        '&:focus-visible': {
            backgroundColor: $jACei$contentfulf36tokens.gray100,
            borderRadius: $jACei$contentfulf36tokens.borderRadiusMedium,
            boxShadow: $jACei$contentfulf36tokens.glowPrimary
        }
    }), align === 'end' && /*#__PURE__*/ $jACei$css({
        name: "1tvf3d0",
        styles: "flex-direction:row-reverse;justify-content:space-between;"
    }))
;
const $d95c2a37e890ef38$var$getIconStyles = ({ align: align , isExpanded: isExpanded  })=>$jACei$cx(/*#__PURE__*/ $jACei$css({
        transform: 'rotate(0deg)',
        transition: `transform ${$jACei$contentfulf36tokens.transitionDurationDefault} ${$jACei$contentfulf36tokens.transitionEasingDefault}`
    }), align === 'end' && /*#__PURE__*/ $jACei$css({
        marginLeft: $jACei$contentfulf36tokens.spacingM
    }), align === 'start' && /*#__PURE__*/ $jACei$css({
        marginRight: $jACei$contentfulf36tokens.spacingM
    }), isExpanded && /*#__PURE__*/ $jACei$css({
        name: "4ky835",
        styles: "transform:rotate(180deg);"
    }))
;
const $d95c2a37e890ef38$export$b6b01239d0041103 = (props)=>({
        accordionHeader: $d95c2a37e890ef38$var$getHeaderStyles(props),
        accordionHeaderIcon: $d95c2a37e890ef38$var$getIconStyles(props)
    })
;


const $01f1d19e673d71a7$export$5e3e5deaaf81ee41 = ({ children: children , onClick: onClick , isExpanded: isExpanded = false , ariaId: ariaId , element: element = 'h2' , align: align = 'end' , testId: testId = 'cf-ui-accordion-header' , ...rest })=>{
    const styles = $d95c2a37e890ef38$export$b6b01239d0041103({
        align: align,
        isExpanded: isExpanded
    });
    return /*#__PURE__*/ $jACei$react.createElement($jACei$Subheading, {
        ...rest,
        testId: testId,
        marginBottom: "none",
        as: element
    }, /*#__PURE__*/ $jACei$react.createElement("button", {
        type: "button",
        "aria-expanded": isExpanded,
        "aria-controls": `accordion-panel--${ariaId}`,
        id: `accordion--${ariaId}`,
        className: styles.accordionHeader,
        onClick: onClick
    }, /*#__PURE__*/ $jACei$react.createElement($jACei$ChevronDownTrimmedIcon, {
        className: styles.accordionHeaderIcon,
        variant: "secondary"
    }), children));
};






const $3ba27b87c168e14d$export$2db50514b4b2c1ee = ()=>{
    return {
        accordionPanelContent: /*#__PURE__*/ $jACei$css({
            width: '100%',
            padding: `${$jACei$contentfulf36tokens.spacingXs} ${$jACei$contentfulf36tokens.spacingM} ${$jACei$contentfulf36tokens.spacingM}`
        })
    };
};


const $0c5bba33d6cffbcc$export$7cad6f17fd6e117b = ({ children: children , isExpanded: isExpanded = false , ariaId: ariaId , testId: testId = 'cf-ui-accordion-panel' , ...otherProps })=>{
    const styles = $3ba27b87c168e14d$export$2db50514b4b2c1ee();
    return /*#__PURE__*/ $jACei$react.createElement($jACei$Collapse, {
        "data-test-id": testId,
        "aria-labelledby": `accordion--${ariaId}`,
        isExpanded: isExpanded,
        ...otherProps
    }, /*#__PURE__*/ $jACei$react.createElement("div", {
        className: styles.accordionPanelContent
    }, children));
};





const $10647792993fae18$export$c4864364a487dfa = ({ className: className  })=>({
        accordionItem: $jACei$cx(/*#__PURE__*/ $jACei$css({
            padding: '0',
            margin: '0',
            borderBottom: `1px solid ${$jACei$contentfulf36tokens.colorElementMid}`,
            '&:first-child': {
                borderTop: `1px solid ${$jACei$contentfulf36tokens.colorElementMid}`
            }
        }), className)
    })
;


const $b6120c67649da348$var$_AccordionItem = ({ title: title = 'Accordion Title' , titleElement: titleElement = 'h2' , testId: testId = 'cf-ui-accordion-item' , onExpand: onExpand , onCollapse: onCollapse , children: children , align: align = 'end' , className: className , isExpanded: isExpanded , ...otherProps }, ref)=>{
    const styles = $10647792993fae18$export$c4864364a487dfa({
        className: className
    });
    const id = $jACei$useId();
    const { isOpen: isOpen , handleOpen: handleOpen , handleClose: handleClose  } = $jACei$useControllableState({
        isOpen: isExpanded,
        onOpen: onExpand,
        onClose: onCollapse
    });
    const handleOnClick = ()=>{
        if (isOpen) handleClose();
        else handleOpen();
    };
    return /*#__PURE__*/ $jACei$react.createElement($jACei$Box, {
        as: "li",
        className: styles.accordionItem,
        testId: `${testId}-${id}`,
        ...otherProps,
        ref: ref
    }, /*#__PURE__*/ $jACei$react.createElement($01f1d19e673d71a7$export$5e3e5deaaf81ee41, {
        onClick: handleOnClick,
        isExpanded: isOpen,
        element: titleElement,
        ariaId: id,
        align: align
    }, title), /*#__PURE__*/ $jACei$react.createElement($0c5bba33d6cffbcc$export$7cad6f17fd6e117b, {
        ariaId: id,
        isExpanded: isOpen
    }, children));
};
const $b6120c67649da348$export$d99097c13d4dac9f = /*#__PURE__*/ $jACei$react.forwardRef($b6120c67649da348$var$_AccordionItem);


const $9e55ae7143081c67$export$a766cd26d0d69044 = $a517c4a963657a24$export$a766cd26d0d69044;
$9e55ae7143081c67$export$a766cd26d0d69044.Item = $b6120c67649da348$export$d99097c13d4dac9f;







export {$9e55ae7143081c67$export$a766cd26d0d69044 as Accordion, $01f1d19e673d71a7$export$5e3e5deaaf81ee41 as AccordionHeader, $b6120c67649da348$export$d99097c13d4dac9f as AccordionItem, $0c5bba33d6cffbcc$export$7cad6f17fd6e117b as AccordionPanel};
//# sourceMappingURL=module.js.map

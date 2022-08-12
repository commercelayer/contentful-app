import $bRQGI$react from "react";
import {Root as $bRQGI$Root, Trigger as $bRQGI$Trigger, Content as $bRQGI$Content, List as $bRQGI$List} from "@radix-ui/react-tabs";
import {cx as $bRQGI$cx, css as $bRQGI$css} from "emotion";
import $bRQGI$contentfulf36tokens from "@contentful/f36-tokens";



const $e945c042934d1a39$export$b2539bed5023c21c = /*#__PURE__*/ $bRQGI$react.forwardRef((props, ref)=>{
    const { defaultTab: defaultTab , currentTab: currentTab , onTabChange: onTabChange , children: children , testId: testId = 'cf-ui-tabs' , ...otherProps } = props;
    return /*#__PURE__*/ $bRQGI$react.createElement($bRQGI$Root, {
        ...otherProps,
        defaultValue: defaultTab,
        value: currentTab,
        onValueChange: onTabChange,
        "data-test-id": testId,
        ref: ref
    }, children);
});
$e945c042934d1a39$export$b2539bed5023c21c.displayName = 'Tabs';







const $2d211d11b0c380b0$var$styles = {
    tabs: {
        display: 'flex'
    },
    tab: {
        borderRadius: 0,
        whiteSpace: 'nowrap',
        color: $bRQGI$contentfulf36tokens.gray500,
        display: 'flex',
        height: '100%',
        minHeight: $bRQGI$contentfulf36tokens.spacing2Xl,
        position: 'relative',
        padding: `0 ${$bRQGI$contentfulf36tokens.spacingM}`,
        fontFamily: $bRQGI$contentfulf36tokens.fontStackPrimary,
        fontWeight: $bRQGI$contentfulf36tokens.fontWeightDemiBold,
        border: 'none',
        cursor: 'pointer',
        outline: 'none',
        '&:focus-visible': {
            boxShadow: $bRQGI$contentfulf36tokens.glowPrimary
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            background: $bRQGI$contentfulf36tokens.colorPrimary,
            opacity: '0',
            bottom: '0',
            left: '0',
            right: '0',
            height: '2px'
        },
        '&:hover:before, &:hover:focus': {
            opacity: '0.5'
        },
        '&[data-state="active"]': {
            color: $bRQGI$contentfulf36tokens.colorPrimary,
            '&:before, &:hover:before, &:hover:focus': {
                opacity: '1'
            }
        },
        '> span': {
            display: 'flex',
            alignSelf: 'center',
            cursor: 'inherit'
        }
    },
    tabDisabled: {
        opacity: '0.5',
        cursor: 'not-allowed'
    },
    tabDividerVertical: {
        '& > *:not(:first-child)': {
            boxShadow: `inset 1px 0 0px 0px ${$bRQGI$contentfulf36tokens.gray200}`
        }
    },
    tabDividerHorizontal: {
        boxShadow: `inset 0 -2px 0px 0px ${$bRQGI$contentfulf36tokens.gray200}`
    }
};
const $2d211d11b0c380b0$export$916c8b0fccbb37d2 = ({ className: className , isDisabled: isDisabled  })=>({
        tab: $bRQGI$cx(/*#__PURE__*/ $bRQGI$css($2d211d11b0c380b0$var$styles.tab), className, {
            [/*#__PURE__*/ $bRQGI$css($2d211d11b0c380b0$var$styles.tabDisabled)]: isDisabled
        })
    })
;
const $2d211d11b0c380b0$export$dd5afd2190fb792c = ({ className: className , variant: variant  })=>({
        tabList: $bRQGI$cx(/*#__PURE__*/ $bRQGI$css($2d211d11b0c380b0$var$styles.tabs), className, {
            [/*#__PURE__*/ $bRQGI$css($2d211d11b0c380b0$var$styles.tabDividerHorizontal)]: variant === 'horizontal-divider',
            [/*#__PURE__*/ $bRQGI$css($2d211d11b0c380b0$var$styles.tabDividerVertical)]: variant === 'vertical-divider'
        })
    })
;
const $2d211d11b0c380b0$export$647799067ac1ad62 = ({ className: className  })=>({
        tabPanel: $bRQGI$cx(/*#__PURE__*/ $bRQGI$css({
            outline: 'none',
            '&:focus-visible': {
                boxShadow: $bRQGI$contentfulf36tokens.glowPrimary
            }
        }), className)
    })
;


const $195464ecd03ec7f8$export$3e41faf802a29e71 = /*#__PURE__*/ $bRQGI$react.forwardRef((props, ref)=>{
    const { children: children , testId: testId = 'cf-ui-tab' , panelId: panelId , isDisabled: isDisabled , className: className , ...otherProps } = props;
    const styles = $2d211d11b0c380b0$export$916c8b0fccbb37d2({
        className: className,
        isDisabled: isDisabled
    });
    return /*#__PURE__*/ $bRQGI$react.createElement($bRQGI$Trigger, {
        disabled: isDisabled,
        value: panelId,
        "data-test-id": testId,
        asChild: true
    }, /*#__PURE__*/ $bRQGI$react.createElement("div", {
        ...otherProps,
        className: styles.tab,
        ref: ref
    }, /*#__PURE__*/ $bRQGI$react.createElement("span", null, children)));
});
$195464ecd03ec7f8$export$3e41faf802a29e71.displayName = 'Tab';





const $d6d8bf4e9289a98d$export$3d96ec278d3efce4 = /*#__PURE__*/ $bRQGI$react.forwardRef((props, ref)=>{
    const { children: children , testId: testId = 'cf-ui-tab-panel' , id: id , className: className , ...otherProps } = props;
    const styles = $2d211d11b0c380b0$export$647799067ac1ad62({
        className: className
    });
    return /*#__PURE__*/ $bRQGI$react.createElement($bRQGI$Content, {
        "data-test-id": testId,
        value: id,
        asChild: true
    }, /*#__PURE__*/ $bRQGI$react.createElement("div", {
        ...otherProps,
        ref: ref,
        className: styles.tabPanel
    }, children));
});
$d6d8bf4e9289a98d$export$3d96ec278d3efce4.displayName = 'TabPanel';





const $be9278d4857608a1$export$e51a686c67fdaa2d = /*#__PURE__*/ $bRQGI$react.forwardRef((props, ref)=>{
    const { className: className , variant: variant , children: children , testId: testId = 'cf-ui-tab-list' , ...otherProps } = props;
    const styles = $2d211d11b0c380b0$export$dd5afd2190fb792c({
        className: className,
        variant: variant
    });
    return /*#__PURE__*/ $bRQGI$react.createElement($bRQGI$List, {
        ...otherProps,
        "data-test-id": testId,
        className: styles.tabList,
        ref: ref
    }, children);
});
$be9278d4857608a1$export$e51a686c67fdaa2d.displayName = 'TabList';


const $d1cc35bceec6a2de$export$b2539bed5023c21c = $e945c042934d1a39$export$b2539bed5023c21c;
$d1cc35bceec6a2de$export$b2539bed5023c21c.Panel = $d6d8bf4e9289a98d$export$3d96ec278d3efce4;
$d1cc35bceec6a2de$export$b2539bed5023c21c.Tab = $195464ecd03ec7f8$export$3e41faf802a29e71;
$d1cc35bceec6a2de$export$b2539bed5023c21c.List = $be9278d4857608a1$export$e51a686c67fdaa2d;







export {$d1cc35bceec6a2de$export$b2539bed5023c21c as Tabs, $195464ecd03ec7f8$export$3e41faf802a29e71 as Tab, $be9278d4857608a1$export$e51a686c67fdaa2d as TabList, $d6d8bf4e9289a98d$export$3d96ec278d3efce4 as TabPanel};
//# sourceMappingURL=module.js.map

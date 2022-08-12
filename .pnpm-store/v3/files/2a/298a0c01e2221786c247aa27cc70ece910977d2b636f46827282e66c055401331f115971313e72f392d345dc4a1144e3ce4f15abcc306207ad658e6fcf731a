var $i6D7q$react = require("react");
var $i6D7q$radixuireacttabs = require("@radix-ui/react-tabs");
var $i6D7q$emotion = require("emotion");
var $i6D7q$contentfulf36tokens = require("@contentful/f36-tokens");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Tabs", () => $470e8cad6d77736a$export$b2539bed5023c21c);
$parcel$export(module.exports, "Tab", () => $21a6177df3ca9ba9$export$3e41faf802a29e71);
$parcel$export(module.exports, "TabList", () => $b6b9b34af6da3acf$export$e51a686c67fdaa2d);
$parcel$export(module.exports, "TabPanel", () => $80bef30a0866b17b$export$3d96ec278d3efce4);


const $cf29f0cafdabeb7c$export$b2539bed5023c21c = /*#__PURE__*/ ($parcel$interopDefault($i6D7q$react)).forwardRef((props, ref)=>{
    const { defaultTab: defaultTab , currentTab: currentTab , onTabChange: onTabChange , children: children , testId: testId = 'cf-ui-tabs' , ...otherProps } = props;
    return /*#__PURE__*/ ($parcel$interopDefault($i6D7q$react)).createElement($i6D7q$radixuireacttabs.Root, {
        ...otherProps,
        defaultValue: defaultTab,
        value: currentTab,
        onValueChange: onTabChange,
        "data-test-id": testId,
        ref: ref
    }, children);
});
$cf29f0cafdabeb7c$export$b2539bed5023c21c.displayName = 'Tabs';







const $7c6a6125fbb32321$var$styles = {
    tabs: {
        display: 'flex'
    },
    tab: {
        borderRadius: 0,
        whiteSpace: 'nowrap',
        color: ($parcel$interopDefault($i6D7q$contentfulf36tokens)).gray500,
        display: 'flex',
        height: '100%',
        minHeight: ($parcel$interopDefault($i6D7q$contentfulf36tokens)).spacing2Xl,
        position: 'relative',
        padding: `0 ${($parcel$interopDefault($i6D7q$contentfulf36tokens)).spacingM}`,
        fontFamily: ($parcel$interopDefault($i6D7q$contentfulf36tokens)).fontStackPrimary,
        fontWeight: ($parcel$interopDefault($i6D7q$contentfulf36tokens)).fontWeightDemiBold,
        border: 'none',
        cursor: 'pointer',
        outline: 'none',
        '&:focus-visible': {
            boxShadow: ($parcel$interopDefault($i6D7q$contentfulf36tokens)).glowPrimary
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            background: ($parcel$interopDefault($i6D7q$contentfulf36tokens)).colorPrimary,
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
            color: ($parcel$interopDefault($i6D7q$contentfulf36tokens)).colorPrimary,
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
            boxShadow: `inset 1px 0 0px 0px ${($parcel$interopDefault($i6D7q$contentfulf36tokens)).gray200}`
        }
    },
    tabDividerHorizontal: {
        boxShadow: `inset 0 -2px 0px 0px ${($parcel$interopDefault($i6D7q$contentfulf36tokens)).gray200}`
    }
};
const $7c6a6125fbb32321$export$916c8b0fccbb37d2 = ({ className: className , isDisabled: isDisabled  })=>({
        tab: $i6D7q$emotion.cx(/*#__PURE__*/ $i6D7q$emotion.css($7c6a6125fbb32321$var$styles.tab), className, {
            [/*#__PURE__*/ $i6D7q$emotion.css($7c6a6125fbb32321$var$styles.tabDisabled)]: isDisabled
        })
    })
;
const $7c6a6125fbb32321$export$dd5afd2190fb792c = ({ className: className , variant: variant  })=>({
        tabList: $i6D7q$emotion.cx(/*#__PURE__*/ $i6D7q$emotion.css($7c6a6125fbb32321$var$styles.tabs), className, {
            [/*#__PURE__*/ $i6D7q$emotion.css($7c6a6125fbb32321$var$styles.tabDividerHorizontal)]: variant === 'horizontal-divider',
            [/*#__PURE__*/ $i6D7q$emotion.css($7c6a6125fbb32321$var$styles.tabDividerVertical)]: variant === 'vertical-divider'
        })
    })
;
const $7c6a6125fbb32321$export$647799067ac1ad62 = ({ className: className  })=>({
        tabPanel: $i6D7q$emotion.cx(/*#__PURE__*/ $i6D7q$emotion.css({
            outline: 'none',
            '&:focus-visible': {
                boxShadow: ($parcel$interopDefault($i6D7q$contentfulf36tokens)).glowPrimary
            }
        }), className)
    })
;


const $21a6177df3ca9ba9$export$3e41faf802a29e71 = /*#__PURE__*/ ($parcel$interopDefault($i6D7q$react)).forwardRef((props, ref)=>{
    const { children: children , testId: testId = 'cf-ui-tab' , panelId: panelId , isDisabled: isDisabled , className: className , ...otherProps } = props;
    const styles = $7c6a6125fbb32321$export$916c8b0fccbb37d2({
        className: className,
        isDisabled: isDisabled
    });
    return /*#__PURE__*/ ($parcel$interopDefault($i6D7q$react)).createElement($i6D7q$radixuireacttabs.Trigger, {
        disabled: isDisabled,
        value: panelId,
        "data-test-id": testId,
        asChild: true
    }, /*#__PURE__*/ ($parcel$interopDefault($i6D7q$react)).createElement("div", {
        ...otherProps,
        className: styles.tab,
        ref: ref
    }, /*#__PURE__*/ ($parcel$interopDefault($i6D7q$react)).createElement("span", null, children)));
});
$21a6177df3ca9ba9$export$3e41faf802a29e71.displayName = 'Tab';





const $80bef30a0866b17b$export$3d96ec278d3efce4 = /*#__PURE__*/ ($parcel$interopDefault($i6D7q$react)).forwardRef((props, ref)=>{
    const { children: children , testId: testId = 'cf-ui-tab-panel' , id: id , className: className , ...otherProps } = props;
    const styles = $7c6a6125fbb32321$export$647799067ac1ad62({
        className: className
    });
    return /*#__PURE__*/ ($parcel$interopDefault($i6D7q$react)).createElement($i6D7q$radixuireacttabs.Content, {
        "data-test-id": testId,
        value: id,
        asChild: true
    }, /*#__PURE__*/ ($parcel$interopDefault($i6D7q$react)).createElement("div", {
        ...otherProps,
        ref: ref,
        className: styles.tabPanel
    }, children));
});
$80bef30a0866b17b$export$3d96ec278d3efce4.displayName = 'TabPanel';





const $b6b9b34af6da3acf$export$e51a686c67fdaa2d = /*#__PURE__*/ ($parcel$interopDefault($i6D7q$react)).forwardRef((props, ref)=>{
    const { className: className , variant: variant , children: children , testId: testId = 'cf-ui-tab-list' , ...otherProps } = props;
    const styles = $7c6a6125fbb32321$export$dd5afd2190fb792c({
        className: className,
        variant: variant
    });
    return /*#__PURE__*/ ($parcel$interopDefault($i6D7q$react)).createElement($i6D7q$radixuireacttabs.List, {
        ...otherProps,
        "data-test-id": testId,
        className: styles.tabList,
        ref: ref
    }, children);
});
$b6b9b34af6da3acf$export$e51a686c67fdaa2d.displayName = 'TabList';


const $470e8cad6d77736a$export$b2539bed5023c21c = $cf29f0cafdabeb7c$export$b2539bed5023c21c;
$470e8cad6d77736a$export$b2539bed5023c21c.Panel = $80bef30a0866b17b$export$3d96ec278d3efce4;
$470e8cad6d77736a$export$b2539bed5023c21c.Tab = $21a6177df3ca9ba9$export$3e41faf802a29e71;
$470e8cad6d77736a$export$b2539bed5023c21c.List = $b6b9b34af6da3acf$export$e51a686c67fdaa2d;







//# sourceMappingURL=main.js.map

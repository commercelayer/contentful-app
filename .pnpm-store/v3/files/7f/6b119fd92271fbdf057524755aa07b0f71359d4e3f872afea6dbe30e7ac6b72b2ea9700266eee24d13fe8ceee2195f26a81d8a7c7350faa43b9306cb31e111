var $7589n$emotion = require("emotion");
var $7589n$react = require("react");
var $7589n$contentfulf36core = require("@contentful/f36-core");
var $7589n$contentfulf36tokens = require("@contentful/f36-tokens");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Table", () => $782453210d1b79d1$export$54ec01a60f47d33d);
$parcel$export(module.exports, "TableBody", () => $7de4c525c08c095b$export$76ccd210b9029917);
$parcel$export(module.exports, "TableCell", () => $d9e0a2d97e3be93c$export$1e4baea7053fc0e3);
$parcel$export(module.exports, "contextOptions", () => $414cd8e1ff2c69e2$export$5267b9a25ed6f28);
$parcel$export(module.exports, "TableCellContext", () => $414cd8e1ff2c69e2$export$e716cc2e8928701b);
$parcel$export(module.exports, "TableHead", () => $8998e81e05f2e691$export$2f4a7be4f0dcc2);
$parcel$export(module.exports, "TableRow", () => $c0b082786a8b9a39$export$b05581f4e764e162);





const $df369e2a717c33f9$var$getStyles = ()=>{
    return {
        inline: /*#__PURE__*/ $7589n$emotion.css({
            borderRadius: ($parcel$interopDefault($7589n$contentfulf36tokens)).borderRadiusMedium,
            boxShadow: `0 0 0 1px ${($parcel$interopDefault($7589n$contentfulf36tokens)).gray200}`,
            'th:first-child': {
                borderTopLeftRadius: ($parcel$interopDefault($7589n$contentfulf36tokens)).borderRadiusMedium
            },
            'th:last-child': {
                borderTopRightRadius: ($parcel$interopDefault($7589n$contentfulf36tokens)).borderRadiusMedium
            },
            'tr:last-child td:first-child': {
                borderBottomLeftRadius: ($parcel$interopDefault($7589n$contentfulf36tokens)).borderRadiusMedium
            },
            'tr:last-child td:last-child': {
                borderBottomRightRadius: ($parcel$interopDefault($7589n$contentfulf36tokens)).borderRadiusMedium
            }
        }),
        root: /*#__PURE__*/ $7589n$emotion.css({
            name: "8atqhb",
            styles: "width:100%;"
        })
    };
};
const $df369e2a717c33f9$export$54ec01a60f47d33d = /*#__PURE__*/ $7589n$react.forwardRef(({ children: children , className: className , layout: layout = 'inline' , testId: testId = 'cf-ui-table' , ...otherProps }, forwardedRef)=>{
    const styles = $df369e2a717c33f9$var$getStyles();
    return /*#__PURE__*/ ($parcel$interopDefault($7589n$react)).createElement($7589n$contentfulf36core.Box, {
        cellPadding: "0",
        cellSpacing: "0",
        ...otherProps,
        as: "table",
        display: "table",
        ref: forwardedRef,
        className: $7589n$emotion.cx(styles.root, {
            [styles.inline]: layout === 'inline'
        }, className),
        testId: testId
    }, children);
});
$df369e2a717c33f9$export$54ec01a60f47d33d.displayName = 'Table';




function $7de4c525c08c095b$var$_TableBody({ className: className , children: children , testId: testId = 'cf-ui-table-body' , ...otherProps }, forwardedRef) {
    return /*#__PURE__*/ ($parcel$interopDefault($7589n$react)).createElement($7589n$contentfulf36core.Box, {
        ...otherProps,
        as: "tbody",
        className: className,
        ref: forwardedRef,
        testId: testId
    }, children);
}
$7de4c525c08c095b$var$_TableBody.displayName = 'TableBody';
const $7de4c525c08c095b$export$76ccd210b9029917 = /*#__PURE__*/ $7589n$react.forwardRef($7de4c525c08c095b$var$_TableBody);








const $414cd8e1ff2c69e2$export$5267b9a25ed6f28 = {
    body: {
        name: 'body',
        as: 'td',
        offsetTop: 0
    },
    head: {
        name: 'head',
        as: 'th',
        offsetTop: 0
    }
};
const $414cd8e1ff2c69e2$export$e716cc2e8928701b = $7589n$react.createContext($414cd8e1ff2c69e2$export$5267b9a25ed6f28.body);


const $d9e0a2d97e3be93c$export$ef3f74c6dfffb62b = {
    asc: 'asc',
    desc: 'desc'
};
const $d9e0a2d97e3be93c$export$1e4baea7053fc0e3 = /*#__PURE__*/ $7589n$react.forwardRef(({ align: align = 'left' , children: children , className: className , sorting: sorting = false , testId: testId = 'cf-ui-table-cell' , ...otherProps }, forwardedRef)=>{
    return /*#__PURE__*/ ($parcel$interopDefault($7589n$react)).createElement($414cd8e1ff2c69e2$export$e716cc2e8928701b.Consumer, null, ({ as: as , name: context , offsetTop: offsetTop  })=>{
        const isTableHead = context === 'head';
        return /*#__PURE__*/ ($parcel$interopDefault($7589n$react)).createElement($7589n$contentfulf36core.Box, {
            ...otherProps,
            as: as,
            className: $7589n$emotion.cx(/*#__PURE__*/ $7589n$emotion.css({
                backgroundColor: isTableHead ? ($parcel$interopDefault($7589n$contentfulf36tokens)).gray100 : undefined,
                borderBottom: `1px solid ${($parcel$interopDefault($7589n$contentfulf36tokens)).gray200}`,
                color: sorting ? ($parcel$interopDefault($7589n$contentfulf36tokens)).gray900 : ($parcel$interopDefault($7589n$contentfulf36tokens)).gray700,
                fontFamily: ($parcel$interopDefault($7589n$contentfulf36tokens)).fontStackPrimary,
                fontSize: ($parcel$interopDefault($7589n$contentfulf36tokens)).fontSizeM,
                fontWeight: isTableHead ? ($parcel$interopDefault($7589n$contentfulf36tokens)).fontWeightMedium : ($parcel$interopDefault($7589n$contentfulf36tokens)).fontWeightNormal,
                lineHeight: ($parcel$interopDefault($7589n$contentfulf36tokens)).lineHeightL,
                padding: `${($parcel$interopDefault($7589n$contentfulf36tokens)).spacingS} ${($parcel$interopDefault($7589n$contentfulf36tokens)).spacingM}`,
                textAlign: align,
                verticalAlign: 'top'
            }), className),
            ref: forwardedRef,
            style: {
                ...otherProps.style,
                top: offsetTop || undefined
            },
            testId: testId
        }, children);
    });
});
$d9e0a2d97e3be93c$export$1e4baea7053fc0e3.displayName = 'TableCell';








const $8998e81e05f2e691$export$2f4a7be4f0dcc2 = /*#__PURE__*/ $7589n$react.forwardRef(({ children: children , className: className , isSticky: isSticky = false , offsetTop: offsetTop , testId: testId = 'cf-ui-table-head' , ...otherProps }, forwardedRef)=>{
    const classNames = $7589n$emotion.cx(// a variable 🤷
    isSticky ? /*#__PURE__*/ $7589n$emotion.css({
        th: {
            position: 'sticky',
            top: 0,
            zIndex: ($parcel$interopDefault($7589n$contentfulf36tokens)).zIndexDefault
        }
    }) : '', className);
    return /*#__PURE__*/ ($parcel$interopDefault($7589n$react)).createElement($414cd8e1ff2c69e2$export$e716cc2e8928701b.Provider, {
        value: {
            ...$414cd8e1ff2c69e2$export$5267b9a25ed6f28.head,
            offsetTop: offsetTop || 0
        }
    }, /*#__PURE__*/ ($parcel$interopDefault($7589n$react)).createElement($7589n$contentfulf36core.Box, {
        ...otherProps,
        as: "thead",
        className: classNames,
        ref: forwardedRef,
        testId: testId
    }, children));
});
$8998e81e05f2e691$export$2f4a7be4f0dcc2.displayName = 'TableHead';







const $c0b082786a8b9a39$var$getStyles = ()=>{
    return {
        root: /*#__PURE__*/ $7589n$emotion.css({
            '&:last-child td': {
                borderBottom: 'none'
            },
            '&:hover td': {
                backgroundColor: ($parcel$interopDefault($7589n$contentfulf36tokens)).gray100
            }
        }),
        selected: /*#__PURE__*/ $7589n$emotion.css({
            'td, th': {
                backgroundColor: ($parcel$interopDefault($7589n$contentfulf36tokens)).blue100
            },
            'td:last-child': {
                boxShadow: `inset -2px 0 0 ${($parcel$interopDefault($7589n$contentfulf36tokens)).blue500}`
            }
        })
    };
};
const $c0b082786a8b9a39$export$b05581f4e764e162 = /*#__PURE__*/ $7589n$react.forwardRef(({ className: className , children: children , isSelected: isSelected = false , testId: testId = 'cf-ui-table-row' , ...otherProps }, forwardedRef)=>{
    const styles = $c0b082786a8b9a39$var$getStyles();
    return /*#__PURE__*/ ($parcel$interopDefault($7589n$react)).createElement($7589n$contentfulf36core.Box, {
        ...otherProps,
        as: "tr",
        className: $7589n$emotion.cx(styles.root, {
            [styles.selected]: isSelected
        }, className),
        ref: forwardedRef,
        testId: testId
    }, children);
});
$c0b082786a8b9a39$export$b05581f4e764e162.displayName = 'TableRow';


const $782453210d1b79d1$export$54ec01a60f47d33d = $df369e2a717c33f9$export$54ec01a60f47d33d;
$782453210d1b79d1$export$54ec01a60f47d33d.Row = $c0b082786a8b9a39$export$b05581f4e764e162;
$782453210d1b79d1$export$54ec01a60f47d33d.Head = $8998e81e05f2e691$export$2f4a7be4f0dcc2;
$782453210d1b79d1$export$54ec01a60f47d33d.Cell = $d9e0a2d97e3be93c$export$1e4baea7053fc0e3;
$782453210d1b79d1$export$54ec01a60f47d33d.Body = $7de4c525c08c095b$export$76ccd210b9029917;









//# sourceMappingURL=main.js.map

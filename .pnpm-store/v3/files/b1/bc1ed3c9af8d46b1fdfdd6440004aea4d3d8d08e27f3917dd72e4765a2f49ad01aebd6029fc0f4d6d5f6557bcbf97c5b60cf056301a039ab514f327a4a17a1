import {css as $bvisu$css, cx as $bvisu$cx} from "emotion";
import $bvisu$react, {forwardRef as $bvisu$forwardRef, createContext as $bvisu$createContext} from "react";
import {Box as $bvisu$Box} from "@contentful/f36-core";
import $bvisu$contentfulf36tokens from "@contentful/f36-tokens";






const $2f027f0937745b05$var$getStyles = ()=>{
    return {
        inline: /*#__PURE__*/ $bvisu$css({
            borderRadius: $bvisu$contentfulf36tokens.borderRadiusMedium,
            boxShadow: `0 0 0 1px ${$bvisu$contentfulf36tokens.gray200}`,
            'th:first-child': {
                borderTopLeftRadius: $bvisu$contentfulf36tokens.borderRadiusMedium
            },
            'th:last-child': {
                borderTopRightRadius: $bvisu$contentfulf36tokens.borderRadiusMedium
            },
            'tr:last-child td:first-child': {
                borderBottomLeftRadius: $bvisu$contentfulf36tokens.borderRadiusMedium
            },
            'tr:last-child td:last-child': {
                borderBottomRightRadius: $bvisu$contentfulf36tokens.borderRadiusMedium
            }
        }),
        root: /*#__PURE__*/ $bvisu$css({
            name: "8atqhb",
            styles: "width:100%;"
        })
    };
};
const $2f027f0937745b05$export$54ec01a60f47d33d = /*#__PURE__*/ $bvisu$forwardRef(({ children: children , className: className , layout: layout = 'inline' , testId: testId = 'cf-ui-table' , ...otherProps }, forwardedRef)=>{
    const styles = $2f027f0937745b05$var$getStyles();
    return /*#__PURE__*/ $bvisu$react.createElement($bvisu$Box, {
        cellPadding: "0",
        cellSpacing: "0",
        ...otherProps,
        as: "table",
        display: "table",
        ref: forwardedRef,
        className: $bvisu$cx(styles.root, {
            [styles.inline]: layout === 'inline'
        }, className),
        testId: testId
    }, children);
});
$2f027f0937745b05$export$54ec01a60f47d33d.displayName = 'Table';




function $e5a2f88316fa4480$var$_TableBody({ className: className , children: children , testId: testId = 'cf-ui-table-body' , ...otherProps }, forwardedRef) {
    return /*#__PURE__*/ $bvisu$react.createElement($bvisu$Box, {
        ...otherProps,
        as: "tbody",
        className: className,
        ref: forwardedRef,
        testId: testId
    }, children);
}
$e5a2f88316fa4480$var$_TableBody.displayName = 'TableBody';
const $e5a2f88316fa4480$export$76ccd210b9029917 = /*#__PURE__*/ $bvisu$forwardRef($e5a2f88316fa4480$var$_TableBody);








const $538999e725dae443$export$5267b9a25ed6f28 = {
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
const $538999e725dae443$export$e716cc2e8928701b = $bvisu$createContext($538999e725dae443$export$5267b9a25ed6f28.body);


const $44b04afc67d60115$export$ef3f74c6dfffb62b = {
    asc: 'asc',
    desc: 'desc'
};
const $44b04afc67d60115$export$1e4baea7053fc0e3 = /*#__PURE__*/ $bvisu$forwardRef(({ align: align = 'left' , children: children , className: className , sorting: sorting = false , testId: testId = 'cf-ui-table-cell' , ...otherProps }, forwardedRef)=>{
    return /*#__PURE__*/ $bvisu$react.createElement($538999e725dae443$export$e716cc2e8928701b.Consumer, null, ({ as: as , name: context , offsetTop: offsetTop  })=>{
        const isTableHead = context === 'head';
        return /*#__PURE__*/ $bvisu$react.createElement($bvisu$Box, {
            ...otherProps,
            as: as,
            className: $bvisu$cx(/*#__PURE__*/ $bvisu$css({
                backgroundColor: isTableHead ? $bvisu$contentfulf36tokens.gray100 : undefined,
                borderBottom: `1px solid ${$bvisu$contentfulf36tokens.gray200}`,
                color: sorting ? $bvisu$contentfulf36tokens.gray900 : $bvisu$contentfulf36tokens.gray700,
                fontFamily: $bvisu$contentfulf36tokens.fontStackPrimary,
                fontSize: $bvisu$contentfulf36tokens.fontSizeM,
                fontWeight: isTableHead ? $bvisu$contentfulf36tokens.fontWeightMedium : $bvisu$contentfulf36tokens.fontWeightNormal,
                lineHeight: $bvisu$contentfulf36tokens.lineHeightL,
                padding: `${$bvisu$contentfulf36tokens.spacingS} ${$bvisu$contentfulf36tokens.spacingM}`,
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
$44b04afc67d60115$export$1e4baea7053fc0e3.displayName = 'TableCell';








const $d2fad74e189c1a13$export$2f4a7be4f0dcc2 = /*#__PURE__*/ $bvisu$forwardRef(({ children: children , className: className , isSticky: isSticky = false , offsetTop: offsetTop , testId: testId = 'cf-ui-table-head' , ...otherProps }, forwardedRef)=>{
    const classNames = $bvisu$cx(// a variable 🤷
    isSticky ? /*#__PURE__*/ $bvisu$css({
        th: {
            position: 'sticky',
            top: 0,
            zIndex: $bvisu$contentfulf36tokens.zIndexDefault
        }
    }) : '', className);
    return /*#__PURE__*/ $bvisu$react.createElement($538999e725dae443$export$e716cc2e8928701b.Provider, {
        value: {
            ...$538999e725dae443$export$5267b9a25ed6f28.head,
            offsetTop: offsetTop || 0
        }
    }, /*#__PURE__*/ $bvisu$react.createElement($bvisu$Box, {
        ...otherProps,
        as: "thead",
        className: classNames,
        ref: forwardedRef,
        testId: testId
    }, children));
});
$d2fad74e189c1a13$export$2f4a7be4f0dcc2.displayName = 'TableHead';







const $704610ca53e4a8e3$var$getStyles = ()=>{
    return {
        root: /*#__PURE__*/ $bvisu$css({
            '&:last-child td': {
                borderBottom: 'none'
            },
            '&:hover td': {
                backgroundColor: $bvisu$contentfulf36tokens.gray100
            }
        }),
        selected: /*#__PURE__*/ $bvisu$css({
            'td, th': {
                backgroundColor: $bvisu$contentfulf36tokens.blue100
            },
            'td:last-child': {
                boxShadow: `inset -2px 0 0 ${$bvisu$contentfulf36tokens.blue500}`
            }
        })
    };
};
const $704610ca53e4a8e3$export$b05581f4e764e162 = /*#__PURE__*/ $bvisu$forwardRef(({ className: className , children: children , isSelected: isSelected = false , testId: testId = 'cf-ui-table-row' , ...otherProps }, forwardedRef)=>{
    const styles = $704610ca53e4a8e3$var$getStyles();
    return /*#__PURE__*/ $bvisu$react.createElement($bvisu$Box, {
        ...otherProps,
        as: "tr",
        className: $bvisu$cx(styles.root, {
            [styles.selected]: isSelected
        }, className),
        ref: forwardedRef,
        testId: testId
    }, children);
});
$704610ca53e4a8e3$export$b05581f4e764e162.displayName = 'TableRow';


const $9854ac721bd5b367$export$54ec01a60f47d33d = $2f027f0937745b05$export$54ec01a60f47d33d;
$9854ac721bd5b367$export$54ec01a60f47d33d.Row = $704610ca53e4a8e3$export$b05581f4e764e162;
$9854ac721bd5b367$export$54ec01a60f47d33d.Head = $d2fad74e189c1a13$export$2f4a7be4f0dcc2;
$9854ac721bd5b367$export$54ec01a60f47d33d.Cell = $44b04afc67d60115$export$1e4baea7053fc0e3;
$9854ac721bd5b367$export$54ec01a60f47d33d.Body = $e5a2f88316fa4480$export$76ccd210b9029917;









export {$9854ac721bd5b367$export$54ec01a60f47d33d as Table, $e5a2f88316fa4480$export$76ccd210b9029917 as TableBody, $44b04afc67d60115$export$1e4baea7053fc0e3 as TableCell, $538999e725dae443$export$5267b9a25ed6f28 as contextOptions, $538999e725dae443$export$e716cc2e8928701b as TableCellContext, $d2fad74e189c1a13$export$2f4a7be4f0dcc2 as TableHead, $704610ca53e4a8e3$export$b05581f4e764e162 as TableRow};
//# sourceMappingURL=module.js.map

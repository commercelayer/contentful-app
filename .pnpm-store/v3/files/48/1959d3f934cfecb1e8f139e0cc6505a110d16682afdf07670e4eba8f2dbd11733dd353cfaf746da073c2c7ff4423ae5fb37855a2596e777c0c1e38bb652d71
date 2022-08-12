var $jNxpY$react = require("react");
var $jNxpY$contentfulf36button = require("@contentful/f36-button");
var $jNxpY$contentfulf36forms = require("@contentful/f36-forms");
var $jNxpY$contentfulf36core = require("@contentful/f36-core");
var $jNxpY$contentfulf36icons = require("@contentful/f36-icons");
var $jNxpY$contentfulf36typography = require("@contentful/f36-typography");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Pagination", () => $c81ba1e505b4fb29$export$68f5e1453c188a82);
$parcel$export(module.exports, "getRangeText", () => $57e1e340755d718f$export$e7e603fcfe95ef16);






function $57e1e340755d718f$export$e7e603fcfe95ef16({ activePage: activePage , itemsPerPage: itemsPerPage , totalItems: totalItems = 0 , pageLength: pageLength , isLastPage: isLastPage = false  }) {
    const total = totalItems ? `of ${totalItems} items` : '';
    const firstItem = activePage * itemsPerPage + 1;
    if (isLastPage && pageLength) return [
        `${firstItem} - ${firstItem - 1 + pageLength}`,
        total
    ].join(' ');
    if (totalItems) {
        const lastItem = Math.min(firstItem - 1 + itemsPerPage, totalItems);
        return [
            `${firstItem} - ${lastItem}`,
            total
        ].join(' ');
    }
    return [
        `${firstItem} - ${firstItem - 1 + itemsPerPage}`,
        total
    ].join(' ');
}


function $c81ba1e505b4fb29$var$_Pagination(props, ref) {
    const { className: className , onPageChange: onPageChange , testId: testId = 'cf-ui-pagination' , activePage: propsActivePage , itemsPerPage: itemsPerPage = 20 , pageLength: pageLength , isLastPage: propsLastPage = false , activePage: activePage = 0 , viewPerPageOptions: viewPerPageOptions = [
        20,
        100
    ] , showViewPerPage: showViewPerPage = false , totalItems: totalItems , onViewPerPageChange: onViewPerPageChange , ...otherProps } = props;
    const isFirstPage = activePage === 0;
    const isLastPage = propsLastPage || totalItems && (activePage + 1) * itemsPerPage >= totalItems;
    const totalText = $57e1e340755d718f$export$e7e603fcfe95ef16({
        totalItems: totalItems,
        activePage: activePage,
        itemsPerPage: itemsPerPage,
        pageLength: pageLength,
        isLastPage: isLastPage
    });
    return /*#__PURE__*/ ($parcel$interopDefault($jNxpY$react)).createElement($jNxpY$contentfulf36core.Flex, {
        flexDirection: "row",
        justifyContent: "space-between",
        fullWidth: true,
        className: className,
        testId: testId,
        ref: ref,
        ...otherProps
    }, showViewPerPage && /*#__PURE__*/ ($parcel$interopDefault($jNxpY$react)).createElement($jNxpY$contentfulf36core.Stack, null, /*#__PURE__*/ ($parcel$interopDefault($jNxpY$react)).createElement($jNxpY$contentfulf36typography.Text, {
        fontColor: "gray500"
    }, "View"), /*#__PURE__*/ ($parcel$interopDefault($jNxpY$react)).createElement($jNxpY$contentfulf36forms.Select, {
        value: `${itemsPerPage}`,
        onChange: (e)=>onViewPerPageChange && onViewPerPageChange(+e.target.value)
    }, viewPerPageOptions.map((option)=>/*#__PURE__*/ ($parcel$interopDefault($jNxpY$react)).createElement($jNxpY$contentfulf36forms.Select.Option, {
            key: option,
            value: option
        }, option)
    ))), /*#__PURE__*/ ($parcel$interopDefault($jNxpY$react)).createElement($jNxpY$contentfulf36core.Stack, {
        flexGrow: 1,
        justifyContent: "flex-end"
    }, /*#__PURE__*/ ($parcel$interopDefault($jNxpY$react)).createElement($jNxpY$contentfulf36typography.Text, {
        fontColor: "gray500"
    }, totalText), /*#__PURE__*/ ($parcel$interopDefault($jNxpY$react)).createElement($jNxpY$contentfulf36core.Stack, {
        spacing: "spacingS"
    }, !isFirstPage && /*#__PURE__*/ ($parcel$interopDefault($jNxpY$react)).createElement($jNxpY$contentfulf36button.Button, {
        "aria-label": "To previous page",
        startIcon: /*#__PURE__*/ ($parcel$interopDefault($jNxpY$react)).createElement($jNxpY$contentfulf36icons.ChevronLeftIcon, null),
        variant: "secondary",
        onClick: ()=>onPageChange(activePage - 1)
        ,
        testId: "cf-ui-pagination-previous"
    }, "Previous"), !isLastPage && /*#__PURE__*/ ($parcel$interopDefault($jNxpY$react)).createElement($jNxpY$contentfulf36button.Button, {
        "aria-label": "To next page",
        variant: "secondary",
        endIcon: /*#__PURE__*/ ($parcel$interopDefault($jNxpY$react)).createElement($jNxpY$contentfulf36icons.ChevronRightIcon, null),
        onClick: ()=>onPageChange(activePage + 1)
        ,
        testId: "cf-ui-pagination-next"
    }, "Next"))));
}
$c81ba1e505b4fb29$var$_Pagination.displayName = 'Pagination';
const $c81ba1e505b4fb29$export$68f5e1453c188a82 = /*#__PURE__*/ ($parcel$interopDefault($jNxpY$react)).forwardRef($c81ba1e505b4fb29$var$_Pagination);





//# sourceMappingURL=main.js.map

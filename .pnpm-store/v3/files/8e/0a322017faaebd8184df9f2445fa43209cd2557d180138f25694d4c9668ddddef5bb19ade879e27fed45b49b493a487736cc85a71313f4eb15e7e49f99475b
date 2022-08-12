import $fOf7N$react from "react";
import {Button as $fOf7N$Button} from "@contentful/f36-button";
import {Select as $fOf7N$Select} from "@contentful/f36-forms";
import {Flex as $fOf7N$Flex, Stack as $fOf7N$Stack} from "@contentful/f36-core";
import {ChevronLeftIcon as $fOf7N$ChevronLeftIcon, ChevronRightIcon as $fOf7N$ChevronRightIcon} from "@contentful/f36-icons";
import {Text as $fOf7N$Text} from "@contentful/f36-typography";







function $464217508f949703$export$e7e603fcfe95ef16({ activePage: activePage , itemsPerPage: itemsPerPage , totalItems: totalItems = 0 , pageLength: pageLength , isLastPage: isLastPage = false  }) {
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


function $88dc92af410a07e4$var$_Pagination(props, ref) {
    const { className: className , onPageChange: onPageChange , testId: testId = 'cf-ui-pagination' , activePage: propsActivePage , itemsPerPage: itemsPerPage = 20 , pageLength: pageLength , isLastPage: propsLastPage = false , activePage: activePage = 0 , viewPerPageOptions: viewPerPageOptions = [
        20,
        100
    ] , showViewPerPage: showViewPerPage = false , totalItems: totalItems , onViewPerPageChange: onViewPerPageChange , ...otherProps } = props;
    const isFirstPage = activePage === 0;
    const isLastPage = propsLastPage || totalItems && (activePage + 1) * itemsPerPage >= totalItems;
    const totalText = $464217508f949703$export$e7e603fcfe95ef16({
        totalItems: totalItems,
        activePage: activePage,
        itemsPerPage: itemsPerPage,
        pageLength: pageLength,
        isLastPage: isLastPage
    });
    return /*#__PURE__*/ $fOf7N$react.createElement($fOf7N$Flex, {
        flexDirection: "row",
        justifyContent: "space-between",
        fullWidth: true,
        className: className,
        testId: testId,
        ref: ref,
        ...otherProps
    }, showViewPerPage && /*#__PURE__*/ $fOf7N$react.createElement($fOf7N$Stack, null, /*#__PURE__*/ $fOf7N$react.createElement($fOf7N$Text, {
        fontColor: "gray500"
    }, "View"), /*#__PURE__*/ $fOf7N$react.createElement($fOf7N$Select, {
        value: `${itemsPerPage}`,
        onChange: (e)=>onViewPerPageChange && onViewPerPageChange(+e.target.value)
    }, viewPerPageOptions.map((option)=>/*#__PURE__*/ $fOf7N$react.createElement($fOf7N$Select.Option, {
            key: option,
            value: option
        }, option)
    ))), /*#__PURE__*/ $fOf7N$react.createElement($fOf7N$Stack, {
        flexGrow: 1,
        justifyContent: "flex-end"
    }, /*#__PURE__*/ $fOf7N$react.createElement($fOf7N$Text, {
        fontColor: "gray500"
    }, totalText), /*#__PURE__*/ $fOf7N$react.createElement($fOf7N$Stack, {
        spacing: "spacingS"
    }, !isFirstPage && /*#__PURE__*/ $fOf7N$react.createElement($fOf7N$Button, {
        "aria-label": "To previous page",
        startIcon: /*#__PURE__*/ $fOf7N$react.createElement($fOf7N$ChevronLeftIcon, null),
        variant: "secondary",
        onClick: ()=>onPageChange(activePage - 1)
        ,
        testId: "cf-ui-pagination-previous"
    }, "Previous"), !isLastPage && /*#__PURE__*/ $fOf7N$react.createElement($fOf7N$Button, {
        "aria-label": "To next page",
        variant: "secondary",
        endIcon: /*#__PURE__*/ $fOf7N$react.createElement($fOf7N$ChevronRightIcon, null),
        onClick: ()=>onPageChange(activePage + 1)
        ,
        testId: "cf-ui-pagination-next"
    }, "Next"))));
}
$88dc92af410a07e4$var$_Pagination.displayName = 'Pagination';
const $88dc92af410a07e4$export$68f5e1453c188a82 = /*#__PURE__*/ $fOf7N$react.forwardRef($88dc92af410a07e4$var$_Pagination);





export {$88dc92af410a07e4$export$68f5e1453c188a82 as Pagination, $464217508f949703$export$e7e603fcfe95ef16 as getRangeText};
//# sourceMappingURL=module.js.map

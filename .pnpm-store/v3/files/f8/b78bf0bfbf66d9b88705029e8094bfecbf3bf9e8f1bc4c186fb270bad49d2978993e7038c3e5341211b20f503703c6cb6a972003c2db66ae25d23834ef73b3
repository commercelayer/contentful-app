import React from "react";
import { CommonProps } from "@contentful/f36-core";
export function getRangeText({ activePage, itemsPerPage, totalItems, pageLength, isLastPage, }: {
    activePage: number;
    itemsPerPage: number;
    totalItems?: number;
    pageLength?: number;
    isLastPage?: boolean;
}): string;
export interface PaginationProps extends CommonProps {
    /**
     * Sets which page is active on the Pagination
     * @default 0
     */
    activePage?: number;
    /**
     * Sets if the user is on the last page of navigation
     * @default false
     */
    isLastPage?: boolean;
    /**
     * Number of items are actually on the page.
     * If no value is set it defaults to viewPerPage value
     * @default 20
     */
    pageLength?: number;
    /**
     * Total amount of items the pagination is applied to.
     */
    totalItems?: number;
    /**
     * Sets if the View per page selector is shown
     * @default false
     */
    showViewPerPage?: boolean;
    /**
     * Sets how many items are displayed per page.
     * Must be one of the values passed on viewPerPageOptions prop.
     * @default 20
     */
    itemsPerPage?: number;
    /**
     * Array of options to show on the View select
     * @default [20, 100]
     */
    viewPerPageOptions?: number[];
    /**
     * Handler function called when user changes the view per page selector.
     */
    onViewPerPageChange?: (items: number) => void;
    /**
     * Handler function called when user navigates to another page on the pagination.
     */
    onPageChange: (page: number) => void;
}
export const Pagination: React.ForwardRefExoticComponent<PaginationProps & React.RefAttributes<HTMLDivElement>>;

//# sourceMappingURL=types.d.ts.map

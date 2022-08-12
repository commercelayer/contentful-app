import React, { FC } from "react";
import { CommonProps, ExpandProps } from "@contentful/f36-core";
import { HeadingElement } from "@contentful/f36-typography";
export interface AccordionProps extends CommonProps {
    /**
     * Specify the alignment of the chevron inside the accordion header
     * @default end
     */
    align?: 'start' | 'end';
    /**
     * Child nodes to be rendered in the component
     */
    children?: React.ReactNode;
}
declare const _Accordion1: React.ForwardRefExoticComponent<AccordionProps & React.RefAttributes<HTMLUListElement>>;
export interface AccordionHeaderProps extends CommonProps {
    /**
     * Child nodes to be rendered in the component
     */
    children?: React.ReactNode;
    /**
     * The function that will be called once the user clicks on the accordion title
     */
    onClick: VoidFunction;
    /**
     * A boolean that tells if the accordion should be expanded or collapsed
     */
    isExpanded: boolean;
    /**
     * An unique id that is necessary for the aria roles and properties
     */
    ariaId: string;
    /**
     * The heading element that will be used by the Subheading component
     */
    element?: HeadingElement;
    /**
     * Specify the alignment of the chevron inside the accordion header
     */
    align?: 'start' | 'end';
}
export const AccordionHeader: ({ children, onClick, isExpanded, ariaId, element, align, testId, ...rest }: AccordionHeaderProps) => JSX.Element;
export interface AccordionPanelProps extends CommonProps {
    /**
     * Child nodes to be rendered in the component
     */
    children?: React.ReactNode;
    /**
     * A boolean that tells if the accordion should be expanded or collapsed
     */
    isExpanded: boolean;
    /**
     * An unique id that is necessary for the aria roles and properties
     */
    ariaId: string;
}
export const AccordionPanel: FC<ExpandProps<AccordionPanelProps>>;
export interface AccordionItemProps extends CommonProps {
    /**
     * The accordion title
     */
    title?: React.ReactNode;
    /**
     * The heading element that will be used by the AccordionHeader
     */
    titleElement?: HeadingElement;
    /**
     * The children of the AccordionItem are in fact the content of the accordion
     */
    children?: React.ReactNode;
    /**
     * A function to be called when the accordion item is opened
     */
    onExpand?: () => void;
    /**
     * A function to be called when the accordion item is closed
     */
    onCollapse?: () => void;
    /**
     * Specify the alignment of the chevron inside the accordion header
     */
    align?: 'start' | 'end';
    /**
     * By default, the AccordionItem is uncontrolled (manage it's expanded state by itself)
     * But you can make it controlled by providing boolean
     */
    isExpanded?: boolean;
}
export const AccordionItem: React.ForwardRefExoticComponent<AccordionItemProps & React.RefAttributes<HTMLLIElement>>;
type CompoundAccordion = typeof _Accordion1 & {
    Item: typeof AccordionItem;
};
export const Accordion: CompoundAccordion;

//# sourceMappingURL=types.d.ts.map

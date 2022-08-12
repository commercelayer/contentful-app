import React, { MouseEvent, FocusEvent } from "react";
import { Placement } from "@popperjs/core";
import * as CSS from "csstype";
import { CommonProps } from "@contentful/f36-core";
type TooltipPlacement = Placement;
export interface TooltipProps extends CommonProps {
    /**
     * Child nodes to be rendered in the component and that will show the tooltip when they are hovered
     */
    children: React.ReactNode;
    /**
     * HTML element used to wrap the target of the tooltip
     */
    as?: React.ElementType;
    /**
     * Content of the tooltip
     */
    content?: string;
    /**
     * A unique id of the tooltip
     */
    id?: string;
    /**
     * It controls the initial visibility of the tooltip
     */
    isVisible?: boolean;
    /**
     * It sets a max-width for the tooltip
     */
    maxWidth?: number | CSS.Property.MaxWidth;
    /**
     * It sets a delay period for the tooltip
     */
    hideDelay?: number;
    /**
     * Function that will be called when target gets blurred
     */
    onBlur?: (evt: FocusEvent) => void;
    /**
     * Function that will be called when target gets focused
     */
    onFocus?: (evt: FocusEvent) => void;
    /**
     * Function that will be called when the user move the mouse out of the target
     */
    onMouseLeave?: (evt: MouseEvent) => void;
    /**
     * Function that will be called when the user move the mouse over of the target
     */
    onMouseOver?: (evt: MouseEvent) => void;
    /**
     * Function that will be called when the user uses a keyboard key on the target
     */
    onKeyDown?: (evt: KeyboardEvent) => void;
    /**
     * It sets the "preferred" position of the tooltip
     */
    placement?: TooltipPlacement;
    /**
     * Class names to be appended to the className prop of the tooltip’s target
     */
    targetWrapperClassName?: string;
    /**
     * Boolean to control whether or not to render the tooltip in a React Portal.
     * Rendering content inside a Portal allows the tooltip to escape the bounds
     * of its parent while still being positioned correctly. Using a Portal is
     * necessary if an ancestor of the tooltip hides overflow.
     *
     * Defaults to `false`
     */
    usePortal?: boolean;
    /**
     * Prevents showing the tooltip
     * @default false
     */
    isDisabled?: boolean;
}
export const Tooltip: ({ children, className, as: HtmlTag, content, id, isVisible, hideDelay, onBlur, onFocus, onMouseLeave, onMouseOver, onKeyDown, targetWrapperClassName, maxWidth, testId, placement, usePortal, isDisabled, ...otherProps }: TooltipProps) => JSX.Element;

//# sourceMappingURL=types.d.ts.map

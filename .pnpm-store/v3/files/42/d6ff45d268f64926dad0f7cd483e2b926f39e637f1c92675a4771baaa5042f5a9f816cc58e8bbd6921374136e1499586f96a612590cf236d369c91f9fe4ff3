import React from "react";
import { CommonProps } from "@contentful/f36-core";
import { TooltipProps } from "@contentful/f36-tooltip";
export interface CopyButtonProps extends CommonProps {
    /**
     * Function that gets called when the button is clicked
     */
    onCopy?: (string: any) => void;
    /**
     * Text to be shown when the button is clicked
     * @default Copied!
     */
    tooltipCopiedText?: string;
    /**
     * Text to be shown when button is hovered or focused
     * @default Copy to clipboard
     */
    tooltipText?: string;
    /**
     * Props that are passed to the tooltip component
     */
    tooltipProps?: Omit<TooltipProps, 'content' | 'children'>;
    /**
     * Value that will be copied to clipboard when the button is clicked
     */
    value: string;
    /**
     * Label to be used on aria-label for the button
     * @default Copy {value} to clipboard
     */
    label?: string;
    /**
     * Allows to disable the copy button, when true the tooltip would not be shown
     * @default false
     */
    isDisabled?: boolean;
    /**
     * Allows setting size of the copy button to small
     * @default medium
     */
    size?: 'small' | 'medium';
}
export const CopyButton: React.ForwardRefExoticComponent<CopyButtonProps & React.RefAttributes<HTMLDivElement>>;

//# sourceMappingURL=types.d.ts.map

import React from "react";
import { CommonProps, PropsWithHTMLElement } from "@contentful/f36-core";
type SpinnerVariant = 'primary' | 'default' | 'white';
type SpinnerSize = 'large' | 'medium' | 'small';
type SpinnerInternalProps = CommonProps & {
    /**
     * Determines the color that will be used in the `fill` property of the SVG
     */
    variant?: SpinnerVariant;
    /**
     * Allows resizing the spinner with any N value. The final size will be NxN pixels
     */
    customSize?: number;
    /**
     * Controls the size of the spinner. The default `medium` size is 20px wide,
     * the `small` size is 14px wide, and the `large` size is 36px wide
     */
    size?: SpinnerSize;
};
export type SpinnerProps = PropsWithHTMLElement<SpinnerInternalProps, 'div'>;
export const Spinner: React.ForwardRefExoticComponent<Omit<Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>>, never>, keyof CommonProps | "variant" | "customSize" | "size"> & CommonProps & {
    /**
     * Determines the color that will be used in the `fill` property of the SVG
     */
    variant?: SpinnerVariant;
    /**
     * Allows resizing the spinner with any N value. The final size will be NxN pixels
     */
    customSize?: number;
    /**
     * Controls the size of the spinner. The default `medium` size is 20px wide,
     * the `small` size is 14px wide, and the `large` size is 36px wide
     */
    size?: SpinnerSize;
} & React.RefAttributes<HTMLDivElement>>;

//# sourceMappingURL=types.d.ts.map

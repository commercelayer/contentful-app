import React from "react";
import { CommonProps } from "@contentful/f36-core";
type stringOrNumber = string | number;
export interface SkeletonTextProps {
    /**
     * A number of skeleton likes
     */
    numberOfLines?: number;
    /**
     * A distance between top of the container and the first line (in pixels)
     */
    offsetTop?: stringOrNumber;
    /**
     * A distance between left of the container and the beginning of lines (in pixels)
     */
    offsetLeft?: stringOrNumber;
    /**
     * A height of a one line (in pixels)
     */
    lineHeight?: stringOrNumber;
    /**
     * Spacing between lines (in pixels)
     */
    marginBottom?: stringOrNumber;
    /**
     * A width of a line
     */
    width?: stringOrNumber;
}
export const SkeletonText: {
    ({ numberOfLines, offsetLeft, offsetTop, lineHeight, marginBottom, width, }: SkeletonTextProps): JSX.Element;
    displayName: string;
};
export interface SkeletonBodyTextProps extends SkeletonTextProps {
}
export const SkeletonBodyText: ({ lineHeight, marginBottom, numberOfLines, offsetLeft, offsetTop, ...otherProps }: SkeletonBodyTextProps) => JSX.Element;
export interface SkeletonContainerProps extends CommonProps {
    /**
     * Background color of the skeleton
     */
    backgroundColor?: string;
    /**
     * Background opacity of the skeleton
     */
    backgroundOpacity?: number;
    /**
     * Whether skeleton has animation or not
     */
    isAnimated?: boolean;
    /**
     * Speed of the animation
     */
    speed?: number | string;
    /**
     * Color of the foreground skeleton items
     */
    foregroundColor?: string;
    /**
     * Opacity of the foreground skeleton items
     */
    foregroundOpacity?: number;
    /**
     * Width of the SVG element
     */
    svgWidth?: string | number;
    /**
     * Height of the SVG element
     */
    svgHeight?: string | number;
    /**
     * Label attribute
     */
    ariaLabel?: string;
    width?: number | string;
    height?: number | string;
    clipId?: string;
    gradientId?: string;
    animateId?: string;
    preserveAspectRatio?: string;
    children: React.ReactNode;
}
export const SkeletonContainer: {
    ({ children, testId, ariaLabel, width, height, preserveAspectRatio, backgroundColor, backgroundOpacity, isAnimated, speed, foregroundColor, foregroundOpacity, svgWidth, svgHeight, clipId, gradientId, animateId, ...otherProps }: SkeletonContainerProps): JSX.Element;
    displayName: string;
};
export interface SkeletonDisplayTextProps extends SkeletonTextProps {
}
export const SkeletonDisplayText: {
    ({ lineHeight, marginBottom, numberOfLines, offsetLeft, offsetTop, width, ...otherProps }: SkeletonDisplayTextProps): React.ReactElement;
    displayName: string;
};
type _stringOrNumber1 = string | number;
export interface SkeletonImageProps {
    width?: _stringOrNumber1;
    height?: _stringOrNumber1;
    radiusX?: _stringOrNumber1;
    radiusY?: _stringOrNumber1;
    offsetLeft?: _stringOrNumber1;
    offsetTop?: _stringOrNumber1;
    testId?: string;
}
export const SkeletonImage: {
    ({ testId, offsetLeft, offsetTop, width, height, radiusX, radiusY, ...otherProps }: SkeletonImageProps): React.ReactElement;
    displayName: string;
};
export interface SkeletonRowProps {
    /** Defines the number of rows to be rendered */
    rowCount?: number;
    /** Defines the number of columns to be rendered */
    columnCount?: number;
}
export const SkeletonRow: ({ columnCount, rowCount, }: SkeletonRowProps) => JSX.Element;

//# sourceMappingURL=types.d.ts.map

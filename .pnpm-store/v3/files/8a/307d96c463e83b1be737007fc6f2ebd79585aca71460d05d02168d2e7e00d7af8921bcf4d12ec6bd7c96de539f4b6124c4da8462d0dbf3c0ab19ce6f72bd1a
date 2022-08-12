import { SerializedStyles } from "@emotion/core";
import React, { CSSProperties } from "react";
import { SpacingTokens } from "@contentful/f36-tokens";
import * as CSS from "csstype";
export const GlobalStyles: ({ withNormalize, styles, }: {
    /**
     * Determines if CSS reset should be used
     *
     * @default true
     */
    withNormalize?: boolean;
    /**
     * Extend global styles
     *
     * @default undefined
     */
    styles?: SerializedStyles;
}) => JSX.Element;
/**
 * Expand object types to show the contents not the name of the type.
 * Should be used when using React.ForwardRef to show list of props
 */
export type ExpandProps<T> = T;
type Overwrite<T, U> = Omit<T, keyof U> & U;
type PropsWithAs<P, E extends React.ElementType> = P & {
    as?: E;
};
/**
 * Use for wrapping/mirroring a HTML Element.
 *
 * Example with wrapping button:
 *
 * interface ButtonOwnProps {
 *  customProp: string
 * }
 * type ButtonProps = PropsWithHTMLElement<ButtonOwnProps, 'button'>
 *
 * export function Button(props: ButtonProps) {
 *  const { customProp, ...otherProps } = props;
 *
 *  return <button {...otherProps} />;
 * }
 */
export type PropsWithHTMLElement<P, E extends React.ElementType, OmitAdditionalProps extends keyof any = never> = Overwrite<Omit<React.ComponentPropsWithoutRef<E>, OmitAdditionalProps>, P>;
export type PolymorphicProps<P, E extends React.ElementType, OmitAdditionalProps extends keyof any = never> = PropsWithAs<PropsWithHTMLElement<P, E, OmitAdditionalProps>, E>;
type PolymorphicPropsWithRef<P, E extends React.ElementType, OmitAdditionalProps extends keyof any = never> = PropsWithAs<Overwrite<Omit<React.ComponentPropsWithRef<E>, OmitAdditionalProps>, P>, E>;
export type PolymorphicComponent<P, D extends React.ElementType, OmitAdditionalProps extends keyof any = never> = (<E extends React.ElementType = D>(props: PolymorphicPropsWithRef<P, E, OmitAdditionalProps>) => React.ReactElement | null) & {
    displayName?: string;
};
export type CommonProps = {
    /**
     * CSS class to be appended to the root element
     */
    className?: string;
    /**
     * A [data-test-id] attribute used for testing purposes
     */
    testId?: string;
    /** Accepts a JavaScript object with camelCased properties rather than a CSS string */
    style?: CSSProperties;
};
/**
 * Contentful entity status
 */
export type EntityStatus = 'archived' | 'changed' | 'deleted' | 'draft' | 'new' | 'published';
export type Spacing = SpacingTokens | 'none';
export interface MarginProps {
    /**
     * sets margin to one of the corresponding spacing tokens
     */
    margin?: Spacing;
    /**
     * sets margin-top to one of the corresponding spacing tokens
     */
    marginTop?: Spacing;
    /**
     * sets margin-right to one of the corresponding spacing tokens
     */
    marginRight?: Spacing;
    /**
     * sets margin-bottom to one of the corresponding spacing tokens
     */
    marginBottom?: Spacing;
    /**
     * sets margin-left to one of the corresponding spacing tokens */
    marginLeft?: Spacing;
}
export interface PaddingProps {
    /**
     * sets padding to one of the corresponding spacing tokens */
    padding?: Spacing;
    /**
     * sets padding-top to one of the corresponding spacing tokens */
    paddingTop?: Spacing;
    /**
     * sets padding-right to one of the corresponding spacing tokens */
    paddingRight?: Spacing;
    /**
     * sets padding-bottom to one of the corresponding spacing tokens */
    paddingBottom?: Spacing;
    /**
     * sets padding-left to one of the corresponding spacing tokens */
    paddingLeft?: Spacing;
}
export type PickUnion<UnionType, Keys> = Exclude<UnionType, Exclude<UnionType, Keys>>;
declare const BOX_DEFAULT_TAG: React.ElementType;
interface BoxInternalProps extends CommonProps, MarginProps, PaddingProps {
    /**
     * Sets the display behavior of the element
     */
    display?: CSS.Property.Display;
    children?: React.ReactNode;
    as?: React.ElementType<any>;
}
export type BoxProps<E extends React.ElementType = typeof BOX_DEFAULT_TAG> = PolymorphicProps<BoxInternalProps, E>;
export function useBox<E extends React.ElementType = typeof BOX_DEFAULT_TAG>(props: BoxProps<E>): {
    boxProps: {
        className: string;
        "data-test-id": string;
    } & Omit<BoxProps<E>, "display" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "margin" | "padding" | "as" | "className" | "testId">;
    Element: "symbol" | "object" | React.ComponentClass<any, any> | React.FunctionComponent<any> | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "keygen" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "menu" | "menuitem" | "meta" | "meter" | "nav" | "noindex" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "slot" | "script" | "section" | "select" | "small" | "source" | "span" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "template" | "tbody" | "td" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" | "webview" | "svg" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "mpath" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "switch" | "text" | "textPath" | "tspan" | "use" | "view";
};
export const Box: PolymorphicComponent<ExpandProps<BoxInternalProps>, typeof BOX_DEFAULT_TAG>;
interface FlexInternalProps extends CommonProps, MarginProps, PaddingProps {
    /**
     * Child nodes to be rendered in the component */
    children?: React.ReactNode;
    /**
     * Sets width: 100% */
    fullWidth?: boolean;
    /**
     * Sets height: 100% */
    fullHeight?: boolean;
    /**
     * Sets display: inline-flex */
    isInline?: boolean;
    /**
     * A shorthand property for flex-grow, flex-shrink, flex-basis
     */
    flex?: CSS.Property.Flex;
    /**
     * Defines the initial size of a flexbox item.
     * */
    flexBasis?: CSS.Property.FlexBasis;
    /**
     * Defines how much a flexbox item should shrink if there's not enough space available. */
    flexShrink?: CSS.Property.FlexShrink;
    /**
     * Defines if flexbox items appear on a single line or on multiple lines within a flexbox container. */
    flexWrap?: CSS.Property.FlexWrap;
    /**
     * Defines how flexbox items are ordered within a flexbox container. */
    flexDirection?: CSS.Property.FlexDirection;
    /**
     * Defines how much a flexbox item should grow if there's space available. */
    flexGrow?: CSS.Property.FlexGrow;
    /**
     * Defines a gap between flexbox items. */
    gap?: Spacing | string;
    /**
     * Defines how flexbox/grid items are aligned according to the main axis, within a flexbox/grid container. */
    justifyContent?: CSS.Property.JustifyContent;
    /**
     * Defines the default justify-self for all items of the box, giving them all a default way of justifying each box along the appropriate axis. */
    justifyItems?: CSS.Property.JustifyContent;
    /**
     * Sets the way a box is justified inside its alignment container along the appropriate axis. */
    justifySelf?: CSS.Property.JustifySelf;
    /**
     * Defines how flexbox items are aligned according to the cross axis, within a line of a flexbox container.
     */
    alignItems?: CSS.Property.AlignItems;
    /**
     * Works like align-items, but applies only to a single flexbox item, instead of all of them.
     */
    alignSelf?: CSS.Property.AlignItems;
    /**
     * Defines how each line is aligned within a flexbox/grid container.
     */
    alignContent?: CSS.Property.AlignContent;
    /**
     * Defines the order of a flexbox item
     */
    order?: CSS.Property.Order;
}
export type FlexProps<E extends React.ElementType = typeof FLEX_DEFAULT_TAG> = PolymorphicProps<FlexInternalProps, E>;
declare const FLEX_DEFAULT_TAG = "div";
export const Flex: PolymorphicComponent<ExpandProps<FlexInternalProps>, typeof FLEX_DEFAULT_TAG>;
interface GridInternalProps extends CommonProps, MarginProps, PaddingProps {
    /**
     * Child nodes to be rendered in the component */
    children?: React.ReactNode;
    /**
     * Defines how many columns, default is `auto` */
    columns?: number | CSS.Property.GridTemplateColumns;
    /**
     * Defines how many rows, default is `auto` */
    rows?: number | CSS.Property.GridTemplateColumns;
    /**
     * Spaces between rows, corresponds to of spacing tokens values, default is none */
    rowGap?: Spacing;
    /**
     * One of Spacing tokens values, default is 0 */
    columnGap?: Spacing;
    /**
     * One of grid-auto-flow css values */
    flow?: CSS.Property.GridAutoFlow;
    /**
     * Sets display:inline-grid */
    isInline?: boolean;
    /**
     * One of justify-content css values */
    justifyContent?: CSS.Property.JustifyContent;
    /**
     * One of justify-content css values */
    alignContent?: CSS.Property.AlignContent;
}
declare const GRID_DEFAULT_TAG = "div";
export type GridProps<E extends React.ElementType = typeof GRID_DEFAULT_TAG> = PolymorphicProps<GridInternalProps, E>;
declare const _Grid1: PolymorphicComponent<ExpandProps<GridInternalProps>, typeof GRID_DEFAULT_TAG>;
declare const GRID_ITEM_DEFAULT_TAG = "div";
interface GridItemInternalProps extends CommonProps, MarginProps, PaddingProps {
    /**
     * Child nodes to be rendered in the component */
    children?: React.ReactNode;
    /**
     * one of grid-column-start css values */
    columnStart?: CSS.Property.GridColumnStart;
    /**
     * one of grid-column-end css values */
    columnEnd?: CSS.Property.GridColumnEnd;
    /**
     * one of grid-column-start css values */
    rowStart?: CSS.Property.GridRowStart;
    /**
     * one of grid-row-end css values */
    rowEnd?: CSS.Property.GridRowEnd;
    /**
     * one of grid-area css values */
    area?: CSS.Property.GridArea;
    /**
     * order css property */
    order?: number;
}
export type GridItemProps<E extends React.ElementType = typeof GRID_ITEM_DEFAULT_TAG> = PolymorphicProps<GridItemInternalProps, E>;
export const GridItem: PolymorphicComponent<GridItemInternalProps, typeof GRID_ITEM_DEFAULT_TAG>;
type CompoundGrid = typeof _Grid1 & {
    Item: typeof GridItem;
};
export const Grid: CompoundGrid;
interface StackInternalProps extends Omit<FlexInternalProps, 'flexDirection' | 'gap'> {
    /**
     * Defines how flexbox items are ordered within a flexbox container. */
    flexDirection?: 'row' | 'column';
    /**
     * The space between each stack item
     */
    spacing?: Spacing;
}
export type StackProps<E extends React.ElementType = typeof STACK_DEFAULT_TAG> = PolymorphicProps<StackInternalProps, E>;
declare const STACK_DEFAULT_TAG = "div";
export const Stack: PolymorphicComponent<ExpandProps<StackInternalProps>, typeof STACK_DEFAULT_TAG>;
export interface ScreenReaderOnlyProps extends CommonProps {
    children?: React.ReactNode;
    as?: 'div' | 'span';
}
export const ScreenReaderOnly: ({ children, className, testId, as, ...otherProps }: ScreenReaderOnlyProps) => JSX.Element;
/**
 * useId hook provides unique ids for react elements.
 *
 * @param id - an id, provided to a component's props. Can be undefined.
 * @param modifier - a descriptive string, to make ids more readable.
 * @returns a unique id
 */
export function useId(id?: string, modifier?: string): string;
export type UseControllableStateProps = {
    isOpen: boolean;
    defaultIsOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
};
/**
 * Hook that manages the controlled and un-controlled state
 */
export function useControllableState({ isOpen, defaultIsOpen, onOpen, onClose, }: UseControllableStateProps): {
    isOpen: boolean;
    isControlled: boolean;
    handleClose: () => void;
    handleOpen: () => void;
};
type ReactRef<T> = React.Ref<T> | React.MutableRefObject<T>;
export function mergeRefs<T>(...refs: Array<ReactRef<T> | undefined>): React.RefCallback<T>;
export const getEntityStatusStyles: ({ status }: {
    status: EntityStatus;
}) => {
    color: string;
    backgroundColor: string;
} | {
    color?: undefined;
    backgroundColor?: undefined;
};

//# sourceMappingURL=types.d.ts.map

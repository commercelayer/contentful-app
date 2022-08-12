import React, { ComponentType, ExoticComponent, ReactElement, SVGAttributes } from "react";
import { CommonProps, PolymorphicComponent, PolymorphicProps, ExpandProps } from "@contentful/f36-core";
declare const ICON_DEFAULT_TAG = "svg";
export type IconComponent = ExoticComponent<any> | ComponentType<any>;
export type IconSize = 'large' | 'medium' | 'small' | 'tiny';
export type IconVariant = 'negative' | 'positive' | 'primary' | 'secondary' | 'warning' | 'muted' | 'white';
type IconInternalProps = CommonProps & {
    children?: ReactElement | ReactElement[];
    /**
     * Determines the size of the icon
     */
    size?: IconSize;
    /**
     * Whether or not to trim the icon width, i.e. set `width` to `auto`
     */
    trimmed?: boolean;
    /**
     * Determines the fill color used
     */
    variant?: IconVariant;
    /**
     * Custom SVG viewBox attribute to use
     */
    viewBox?: SVGAttributes<SVGSVGElement>['viewBox'];
};
export type IconProps<E extends React.ElementType = IconComponent> = PolymorphicProps<IconInternalProps, E, 'as' | 'children' | 'width' | 'height'>;
export const Icon: PolymorphicComponent<ExpandProps<IconInternalProps>, typeof ICON_DEFAULT_TAG, 'width' | 'height'>;
export type GeneratedIconProps = Omit<IconProps, 'as' | 'children' | 'name' | 'viewBox'> & {
    children?: never;
};
type GenerateIconParameters = {
    /**
     * Icon name is used as the generated icon's component display name
     */
    name?: string;
    /**
     * The SVG path(s) to render in the icon wrapper
     */
    path: ReactElement;
    /**
     * A collection of default props to set on the generated icon
     */
    props?: GeneratedIconProps;
    /**
     * Whether or not to trim the icon width, i.e. set `width` to `auto`
     */
    trimmed?: IconProps['trimmed'];
    /**
     * Custom SVG viewBox attribute to use for the generated icon
     */
    viewBox?: IconProps['viewBox'];
};
export function generateIcon({ name, path, props: defaultProps, trimmed, viewBox, }: GenerateIconParameters): {
    (props: IconProps): JSX.Element;
    displayName: string;
};

//# sourceMappingURL=types.d.ts.map

import { CommonProps, PolymorphicProps, PolymorphicComponent, ExpandProps } from "@contentful/f36-core";
import { SpacingTokens } from "@contentful/f36-tokens";
import React, { ReactElement } from "react";
type ButtonGroupVariants = 'spaced' | 'merged' | 'collapsed';
type ButtonGroupSpacing = SpacingTokens;
interface BaseButtonGroupProps extends CommonProps {
    /**
     * Determines how the Button Group will display the buttons
     * @default merged
     * Note that `collapsed` is a synonym of `merged`
     */
    variant?: ButtonGroupVariants;
    /**
     * Determines if the divider should be rendered between merged buttons
     * @default false
     */
    withDivider?: boolean;
    /**
     * Sets the spacing of the buttons if variant is separate.
     * @default spacingS
     */
    spacing?: ButtonGroupSpacing;
    children: ReactElement | boolean | null | undefined | (ReactElement | boolean | null | undefined)[];
}
interface SpacedButtonGroupProps extends BaseButtonGroupProps {
    variant: 'spaced';
    withDivider?: never;
}
interface MergedButtonGroupProps extends BaseButtonGroupProps {
    variant?: 'merged';
    spacing?: never;
}
/**
 * @deprecated should be removed in v5
 */
interface CollapsedButtonGroupProps extends BaseButtonGroupProps {
    variant?: 'collapsed';
    spacing?: never;
}
export type ButtonGroupProps = SpacedButtonGroupProps | MergedButtonGroupProps | CollapsedButtonGroupProps;
export const ButtonGroup: React.ForwardRefExoticComponent<ButtonGroupProps & React.RefAttributes<HTMLDivElement>>;
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'negative' | 'positive' | 'primary' | 'secondary' | 'transparent';
interface ButtonInternalProps extends CommonProps {
    children?: React.ReactNode;
    /**
     * Determines style variation of Button component
     * @default secondary
     */
    variant?: ButtonVariant;
    /**
     * Determines size variation of Button component
     * @default medium
     */
    size?: ButtonSize;
    /**
     * Applies active styles
     * @default false
     */
    isActive?: boolean;
    /**
     * Disabled interaction and applies disabled styles
     * @default false
     */
    isDisabled?: boolean;
    /**
     * Expects any of the icon components. Renders the icon aligned to the start
     */
    startIcon?: React.ReactElement;
    /**
     * Expects any of the icon components. Renders the icon aligned to the end
     */
    endIcon?: React.ReactElement;
    /**
     * Adds loading indicator icon and disables interactions
     */
    isLoading?: boolean;
    /**
     * Forces button to take 100% of the container
     */
    isFullWidth?: boolean;
    /**
     * The element used for the root node.
     * @default button
     */
    as?: 'a' | 'button';
}
declare const BUTTON_DEFAULT_TAG = "button";
export type ButtonProps<E extends React.ElementType = typeof BUTTON_DEFAULT_TAG> = PolymorphicProps<ButtonInternalProps, E, 'disabled'>;
/**
 * @description: Buttons communicate the action that will occur when the user clicks it
 */
export const Button: PolymorphicComponent<ExpandProps<ButtonInternalProps>, typeof BUTTON_DEFAULT_TAG, 'disabled'>;
export interface ToggleButtonProps extends CommonProps {
    /**
     * Applies active styles
     * @default false
     */
    isActive?: boolean;
    /**
     * Disabled interaction and applies disabled styles
     * @default false
     */
    isDisabled?: boolean;
    /**
     * Expects any of the icon components
     */
    icon?: React.ReactElement;
    /**
     * Function triggered when the toggle button is clicked.
     */
    onToggle: () => void;
    /**
     * Determines size variation of Button component
     * @default medium
     */
    size?: ButtonSize;
    /**
     * Aria label is required when using icon only
     */
    'aria-label'?: string;
    children?: React.ReactNode;
}
export const ToggleButton: React.ForwardRefExoticComponent<ToggleButtonProps & React.RefAttributes<unknown>>;
interface IconButtonInternalProps extends Omit<ButtonInternalProps, 'startIcon' | 'endIcon'> {
    /**
     * Expects any of the icon components
     */
    icon: React.ReactElement;
    /**
     * Aria label is required when using icon only
     */
    'aria-label': string;
}
declare const ICON_BUTTON_DEFAULT_TAG = "button";
export type IconButtonProps<E extends React.ElementType = typeof ICON_BUTTON_DEFAULT_TAG> = PolymorphicProps<IconButtonInternalProps, E, 'disabled'>;
export const IconButton: PolymorphicComponent<ExpandProps<IconButtonInternalProps>, typeof ICON_BUTTON_DEFAULT_TAG, 'disabled'>;

//# sourceMappingURL=types.d.ts.map

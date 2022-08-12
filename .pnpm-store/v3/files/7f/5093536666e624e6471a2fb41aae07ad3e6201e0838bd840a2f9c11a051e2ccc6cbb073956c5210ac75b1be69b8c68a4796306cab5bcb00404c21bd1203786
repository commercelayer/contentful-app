import React from "react";
import { CommonProps, PolymorphicProps, PolymorphicComponent, ExpandProps } from "@contentful/f36-core";
type TextLinkVariant = 'negative' | 'positive' | 'primary' | 'secondary' | 'muted' | 'white';
declare const TEXT_LINK_DEFAULT_TAG = "a";
interface TextLinkInternalProps extends CommonProps {
    children?: React.ReactNode;
    /**
     * Determines style variation of TextLink component
     * @default primary
     */
    variant?: TextLinkVariant;
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
     * Determines the icon position regarding the link text
     * @default start
     */
    alignIcon?: 'start' | 'end';
    /**
     * The element used for the root node.
     * @default a
     */
    as?: 'a' | 'button';
}
export type TextLinkProps<E extends React.ElementType = typeof TEXT_LINK_DEFAULT_TAG> = PolymorphicProps<TextLinkInternalProps, E, 'disabled'>;
export const TextLink: PolymorphicComponent<ExpandProps<TextLinkInternalProps>, typeof TEXT_LINK_DEFAULT_TAG, 'disabled'>;

//# sourceMappingURL=types.d.ts.map

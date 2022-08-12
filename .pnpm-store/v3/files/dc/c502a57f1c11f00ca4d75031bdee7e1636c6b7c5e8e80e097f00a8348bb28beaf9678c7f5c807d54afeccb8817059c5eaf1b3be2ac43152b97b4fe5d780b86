import React from "react";
import { FontSizeTokens, LineHeightTokens, FontWeightTokens, FontStackTokens, ColorTokens } from "@contentful/f36-tokens";
import { PolymorphicComponent, CommonProps, MarginProps, PolymorphicProps, ExpandProps, PropsWithHTMLElement } from "@contentful/f36-core";
interface TextInternalProps extends CommonProps, MarginProps {
    children?: React.ReactNode;
    fontSize?: FontSizeTokens;
    lineHeight?: LineHeightTokens;
    fontStack?: FontStackTokens;
    fontWeight?: FontWeightTokens;
    fontColor?: ColorTokens;
    isTruncated?: boolean;
    isWordBreak?: boolean;
}
declare const TEXT_DEFAULT_TAG = "span";
export type TextProps<E extends React.ElementType = typeof TEXT_DEFAULT_TAG> = PolymorphicProps<TextInternalProps, E>;
export const Text: PolymorphicComponent<ExpandProps<TextInternalProps>, typeof TEXT_DEFAULT_TAG>;
declare const HEADING_DEFAULT_TAG = "h1";
export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
interface HeadingInternalProps extends CommonProps, MarginProps {
    as?: HeadingElement;
    children?: React.ReactNode;
    isTruncated?: boolean;
    isWordBreak?: boolean;
}
export type HeadingProps<E extends React.ElementType = typeof HEADING_DEFAULT_TAG> = PolymorphicProps<HeadingInternalProps, E>;
export const Heading: PolymorphicComponent<ExpandProps<HeadingInternalProps>, typeof HEADING_DEFAULT_TAG>;
declare const SUBHEADING_DEFAULT_TAG = "h3";
interface SubheadingInternalProps extends CommonProps, MarginProps {
    as?: HeadingElement;
    isTruncated?: boolean;
    isWordBreak?: boolean;
}
export type SubheadingProps<E extends React.ElementType = typeof SUBHEADING_DEFAULT_TAG> = PolymorphicProps<SubheadingInternalProps, E>;
export const Subheading: PolymorphicComponent<ExpandProps<SubheadingInternalProps>, typeof SUBHEADING_DEFAULT_TAG>;
export interface TypographyProps {
    children?: React.ReactNode;
}
/**
 * @deprecated
 */
export const Typography: {
    (props: TypographyProps): JSX.Element;
    displayName: string;
};
declare const DISPLAY_TEXT_DEFAULT_TAG = "h2";
interface DisplayTextInternalProps extends CommonProps, MarginProps {
    size?: 'default' | 'large';
    as?: HeadingElement;
    isTruncated?: boolean;
    isWordBreak?: boolean;
}
export type DisplayTextProps<E extends React.ElementType = typeof DISPLAY_TEXT_DEFAULT_TAG> = PolymorphicProps<DisplayTextInternalProps, E>;
export const DisplayText: PolymorphicComponent<ExpandProps<DisplayTextInternalProps>, typeof DISPLAY_TEXT_DEFAULT_TAG>;
declare const SECTION_HEADING_DEFAULT_TAG = "h2";
interface SectionHeadingInternalProps extends CommonProps, MarginProps {
    as?: HeadingElement;
    isTruncated?: boolean;
    isWordBreak?: boolean;
}
export type SectionHeadingProps<E extends React.ElementType = typeof SECTION_HEADING_DEFAULT_TAG> = PolymorphicProps<SectionHeadingInternalProps, E>;
export const SectionHeading: PolymorphicComponent<ExpandProps<SectionHeadingInternalProps>, typeof SECTION_HEADING_DEFAULT_TAG>;
type ParagraphInternalProps = CommonProps & MarginProps & {
    children: React.ReactNode;
    isTruncated?: boolean;
    isWordBreak?: boolean;
};
export type ParagraphProps = PropsWithHTMLElement<ParagraphInternalProps, 'p'>;
export const Paragraph: React.ForwardRefExoticComponent<Omit<Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "key" | keyof React.HTMLAttributes<HTMLParagraphElement>>, never>, "children" | "isTruncated" | "isWordBreak" | keyof CommonProps | keyof MarginProps> & CommonProps & MarginProps & {
    children: React.ReactNode;
    isTruncated?: boolean;
    isWordBreak?: boolean;
} & React.RefAttributes<HTMLParagraphElement>>;

//# sourceMappingURL=types.d.ts.map

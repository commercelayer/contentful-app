import React, { MouseEventHandler, ReactElement, ReactNode } from "react";
import { ButtonProps } from "@contentful/f36-button";
import { CommonProps, MarginProps, PolymorphicComponent, PolymorphicProps, ExpandProps, EntityStatus } from "@contentful/f36-core";
import { AssetStatus, AssetType } from "@contentful/f36-asset";
import { HeadingElement } from "@contentful/f36-typography";
type CardElement = 'a' | 'article' | 'button' | 'div' | 'fieldset';
type BaseCardDragHandleProps = {
    /**
     * Render the component with a drag handle
     */
    withDragHandle?: boolean;
    /**
     * Applies dragging styles to the card and drag handle
     */
    isDragging?: boolean;
    /**
     * Custom drag handle renderer. Useful, when integrating cards with drag-n-drop libraries
     */
    dragHandleRender?: (props: {
        isDragging?: boolean;
        drag: React.ReactElement;
    }) => React.ReactElement;
};
type BaseCardInternalProps = CommonProps & MarginProps & BaseCardDragHandleProps & {
    /**
     * An array of Menu elements used to render an actions menu
     */
    actions?: React.ReactNodeArray;
    /**
     * Handle tag for Card component
     */
    as?: CardElement;
    /**
     * If the card is selectable and has no title, it will need a aria-label to help screen readers identify it
     */
    ariaLabel?: string;
    /**
     * Badge component to show in Card header
     */
    badge?: ReactElement | boolean | null | undefined | (ReactElement | boolean | null | undefined)[];
    /**
     * Passing href into the Card. You need to also add property as="a" to make it rendered as <a />
     */
    href?: string;
    /**
     * Child nodes to be rendered in the component
     */
    children?: ReactNode;
    /**
     * Custom header element to render
     */
    header?: ReactElement;
    /**
     * Icon to show in the Card header
     */
    icon?: React.ReactElement | null;
    /**
     * Props to pass to the action menu button
     */
    actionsButtonProps?: Partial<ButtonProps<'button'>>;
    /**
     * Click event handler
     */
    onClick?: MouseEventHandler<HTMLElement>;
    /**
     * Applies hover styles to the card
     */
    isHovered?: boolean;
    /**
     * Applies selected styles to the element
     */
    isSelected?: boolean;
    /**
     * The title of the entry. It will also be used as aria-label
     */
    title?: string;
    /**
     * Type of the entity represented by the card. Shown in the header of the card
     */
    type?: string;
    /**
     * Loading state for the component - when true will display loading feedback to the user
     */
    isLoading?: boolean;
};
declare const BASE_CARD_DEFAULT_TAG = "article";
interface AssetCardInternalProps extends Omit<BaseCardInternalProps, 'badge' | 'header' | 'padding' | 'ref'> {
    size?: 'small' | 'default';
    src?: string;
    status?: AssetStatus;
    /**
     * Type of the entity represented by the card. Shown in the header of the card
     */
    type?: AssetType;
}
export type AssetCardProps = AssetCardInternalProps;
export const AssetCard: ({ actions, className, icon, isSelected, size, src, status, title, type, withDragHandle, isLoading, testId, ...otherProps }: AssetCardInternalProps) => JSX.Element;
type BaseProps = Omit<BaseCardInternalProps, 'header' | 'withDragHandle' | 'ref' | 'src' | 'type'> & {
    /**
     * Padding size to apply to the component
     *
     * @default default
     */
    padding?: 'default' | 'large' | 'none';
};
type BasePropsWithDragHandle = Omit<BaseProps, 'padding'> & Pick<BaseCardInternalProps, 'withDragHandle'> & {
    padding: 'none';
};
type CardInternalProps = BaseProps | BasePropsWithDragHandle;
export type CardProps<E extends React.ElementType = typeof BASE_CARD_DEFAULT_TAG> = PolymorphicProps<CardInternalProps, E>;
export const Card: PolymorphicComponent<ExpandProps<CardInternalProps>, typeof BASE_CARD_DEFAULT_TAG>;
type EntryCardSize = 'default' | 'small' | 'auto';
type EntryCardInternalProps = Omit<BaseCardInternalProps, 'badge' | 'header' | 'padding' | 'ref' | 'type' | 'title'> & {
    /**
     * The title of the entry, it will be used as the value for the tooltip
     */
    title?: string;
    /**
     * The tag for the title of the entry.
     */
    titleTag?: HeadingElement;
    /**
     * The description of the entry
     */
    description?: string;
    /**
     * The content type of the entry
     */
    contentType?: string;
    /**
     * The publish status of the entry
     */
    status?: EntityStatus;
    /**
     * The thumbnail of the entry
     */
    thumbnailElement?: ReactElement;
    /**
     * Changes the height of the component. When small will also ensure thumbnail and description aren't rendered
     */
    size?: EntryCardSize;
};
declare const ENTRY_CARD_DEFAULT_TAG = "article";
export type EntryCardProps<E extends React.ElementType = typeof ENTRY_CARD_DEFAULT_TAG> = PolymorphicProps<EntryCardInternalProps, E>;
export const EntryCard: PolymorphicComponent<ExpandProps<EntryCardInternalProps>, typeof ENTRY_CARD_DEFAULT_TAG>;
type InlineEntryCardInternalProps = Omit<EntryCardInternalProps, 'icon' | 'ref' | 'src' | 'type' | keyof BaseCardDragHandleProps>;
export type InlineEntryCardProps = InlineEntryCardInternalProps;
export const InlineEntryCard: ({ actions, className, children, status, title, isLoading, testId, ...otherProps }: InlineEntryCardInternalProps) => JSX.Element;

//# sourceMappingURL=types.d.ts.map

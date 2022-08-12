import React, { MouseEventHandler } from "react";
import { CommonProps, EntityStatus, PickUnion } from "@contentful/f36-core";
import { DragHandleProps } from "@contentful/f36-drag-handle";
export interface EntityListProps extends CommonProps {
    children?: React.ReactNode;
}
declare const _EntityList1: React.ForwardRefExoticComponent<EntityListProps & React.RefAttributes<HTMLUListElement>>;
type EntityListItemStatus = PickUnion<EntityStatus, 'archived' | 'changed' | 'draft' | 'published'>;
export interface EntityListItemProps extends CommonProps {
    /**
     * The title of the entity
     */
    title: string;
    /**
     * The description of the entity
     */
    description?: string;
    /**
     * The content type of the entity
     */
    contentType?: string;
    /**
     * The publish status of the entry
     */
    status?: EntityListItemStatus;
    /**
     * A boolean used to render the Thumbnail or not
     */
    withThumbnail?: boolean;
    /**
     * The URL of the entity's preview thumbnail. Use 46px x 46px images for best results
     */
    thumbnailUrl?: string;
    /**
     * The alt text for the thumbnail
     */
    thumbnailAltText?: string;
    /**
     * Menu elements rendered as actions in Menu
     */
    actions?: React.ReactNodeArray;
    /**
     * Renders a drag handle for the component for use in drag and drop contexts
     */
    withDragHandle?: boolean;
    /**
     * Applies styling for when the component is actively being dragged by the user
     */
    isDragActive?: boolean;
    /**
     * Prop to pass a custom CardDragHandle component to for use in drag and drop contexts
     */
    cardDragHandleComponent?: React.ReactNode;
    /**
     * Props to pass down to the default CardDragHandle component (does not work with cardDragHandleComponent prop)
     */
    cardDragHandleProps?: Partial<DragHandleProps>;
    /**
     * An entity can either be an Entry, an Asset or a Release. This prop will apply styling based on if the entity is an asset, a release or an entry
     *
     * Note: 'entry' and 'asset' are @deprecated but supported in v1.x for backwards compatibility
     */
    entityType?: 'Entry' | 'Asset' | 'entry' | 'asset' | 'Release';
    /**
     * Loading state for the component - when true will display loading feedback to the user
     */
    isLoading?: boolean;
    /**
     * The action to be performed on click of the EntryCard
     */
    onClick?: MouseEventHandler;
    /**
     * The href for the component. Will render the card as an `a` element for native browser link handling
     */
    href?: string;
    /**
     * A boolean used to disable the CardActions
     */
    isActionsDisabled?: boolean;
}
export const EntityListItem: {
    ({ className, testId, title, description, contentType, entityType, withThumbnail, thumbnailUrl, thumbnailAltText, status, actions, withDragHandle, isDragActive, isLoading, onClick, href, cardDragHandleProps, cardDragHandleComponent, isActionsDisabled, ...otherProps }: EntityListItemProps): React.ReactElement;
    displayName: string;
};
type CompoundEntityList = typeof _EntityList1 & {
    Item: typeof EntityListItem;
};
export const EntityList: CompoundEntityList;

//# sourceMappingURL=types.d.ts.map

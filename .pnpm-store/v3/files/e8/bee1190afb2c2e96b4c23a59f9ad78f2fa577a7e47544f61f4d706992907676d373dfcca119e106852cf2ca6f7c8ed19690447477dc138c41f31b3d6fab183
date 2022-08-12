import { ElementType } from "react";
import { PolymorphicComponent, PolymorphicProps, CommonProps, ExpandProps } from "@contentful/f36-core";
declare const DRAG_HANDLE_DEFAULT_TAG = "div";
interface DragHandleInternalProps extends CommonProps {
    /**
     * The element used for the root node
     * @default div
     */
    as?: 'button' | 'div';
    /**
     * Applies styling for when the component is actively being dragged by
     * the user
     */
    isActive?: boolean;
    /**
     * Applies focus styling
     */
    isFocused?: boolean;
    /**
     * Applies hover styling
     */
    isHovered?: boolean;
    /**
     * Label rendered in DragHandle - not visible on screen as its purpose
     * is for screen readers only
     */
    label: string;
    /**
     * Set type button for div element
     */
    type?: string;
}
export type DragHandleProps<E extends ElementType = typeof DRAG_HANDLE_DEFAULT_TAG> = PolymorphicProps<DragHandleInternalProps, E>;
export const DragHandle: PolymorphicComponent<ExpandProps<DragHandleInternalProps>, typeof DRAG_HANDLE_DEFAULT_TAG, 'disabled'>;

//# sourceMappingURL=types.d.ts.map

import React from "react";
import { CommonProps, PropsWithHTMLElement } from "@contentful/f36-core";
type PillVariants = 'idle' | 'active' | 'deleted';
type PillInternalProps = CommonProps & {
    /**
     * Text that will be shown on the pill
     */
    label: string;
    /**
     * Function that handles when the close icon is clicked. Close icon visibility depends on if this property is set.
     */
    onClose?: () => void;
    /**
     * Function that handles when the pill is dragged. Drag icon visibility depends on if this property is set.
     */
    onDrag?: () => void;
    /**
     * Custom component to be used as handler for the drag functionality.
     */
    dragHandleComponent?: React.ReactNode;
    /**
     * Determines style variation of Pill component
     * @default idle
     */
    variant?: PillVariants;
};
export type PillProps = PropsWithHTMLElement<PillInternalProps, 'div'>;
export const Pill: React.ForwardRefExoticComponent<Omit<Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>>, never>, "label" | "onDrag" | keyof CommonProps | "onClose" | "dragHandleComponent" | "variant"> & CommonProps & {
    /**
     * Text that will be shown on the pill
     */
    label: string;
    /**
     * Function that handles when the close icon is clicked. Close icon visibility depends on if this property is set.
     */
    onClose?: () => void;
    /**
     * Function that handles when the pill is dragged. Drag icon visibility depends on if this property is set.
     */
    onDrag?: () => void;
    /**
     * Custom component to be used as handler for the drag functionality.
     */
    dragHandleComponent?: React.ReactNode;
    /**
     * Determines style variation of Pill component
     * @default idle
     */
    variant?: PillVariants;
} & React.RefAttributes<HTMLDivElement>>;

//# sourceMappingURL=types.d.ts.map

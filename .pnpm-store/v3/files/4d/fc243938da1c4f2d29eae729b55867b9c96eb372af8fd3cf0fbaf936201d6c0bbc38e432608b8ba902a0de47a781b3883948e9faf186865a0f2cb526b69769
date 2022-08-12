import React from "react";
import { CommonProps, PropsWithHTMLElement, EntityStatus } from "@contentful/f36-core";
type BadgeSize = 'default' | 'small';
export type BadgeVariant = 'negative' | 'positive' | 'primary' | 'secondary' | 'warning' | 'primary-filled' | 'featured';
interface BadgeInternalProps extends CommonProps {
    /**
     * Sets the size of the component
     * @default default
     */
    size?: BadgeSize;
    /**
     * Determines the variation of the component
     * @default primary
     */
    variant?: BadgeVariant;
    children: React.ReactNode;
}
export type BadgeProps = PropsWithHTMLElement<BadgeInternalProps, 'div'>;
export const Badge: React.ForwardRefExoticComponent<Omit<Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>>, never>, keyof BadgeInternalProps> & BadgeInternalProps & React.RefAttributes<HTMLDivElement>>;
export interface EntityStatusBadgeProps extends Omit<BadgeProps, 'variant' | 'children'> {
    size?: BadgeSize;
    entityStatus: EntityStatus;
}
export const EntityStatusBadge: React.ForwardRefExoticComponent<EntityStatusBadgeProps & React.RefAttributes<HTMLDivElement>>;

//# sourceMappingURL=types.d.ts.map

import { PopoverProps } from "@contentful/f36-popover";
import React from "react";
import { CommonProps, PropsWithHTMLElement, ExpandProps, PolymorphicComponent, PolymorphicProps } from "@contentful/f36-core";
import { SectionHeadingProps } from "@contentful/f36-typography";
export interface MenuProps extends Omit<PopoverProps, 'autoFocus' | 'id' | 'closeOnBlur'> {
    /**
     * By default, the Menu is uncontrolled (manage it's expanded state by itself)
     * But you can make it controlled by providing boolean (true/false)
     */
    isOpen?: boolean;
    /**
     * If `true`, the Menu will be initially opened.
     */
    defaultIsOpen?: boolean;
    /**
     * Callback fired when the Menu opens
     */
    onOpen?: () => void;
    /**
     * Callback fired when the Menu closes
     */
    onClose?: () => void;
    /**
     * If `true`, the Menu will close when a menu item is
     * clicked
     *
     * Note: This prop will be propagated to all submenus,
     * unless you will override it with props on submenu itself
     *
     * @default true
     */
    closeOnSelect?: boolean;
    /**
     * If true, the menu will close when you blur out it by clicking outside
     *
     * Note: This prop will be propagated to all submenus,
     * unless you will override it with props on submenu itself
     *
     * @default true
     */
    closeOnBlur?: boolean;
    /**
     * If true, the menu will close when you hit the Esc key
     *
     * Note: This prop will be propagated to all submenus,
     * unless you will override it with props on submenu itself
     *
     * @default true
     */
    closeOnEsc?: boolean;
}
declare function _Menu1(props: MenuProps): JSX.Element;
type MenuListHeaderProps = PropsWithHTMLElement<CommonProps, 'div'>;
declare const MenuListHeader: React.FC<ExpandProps<MenuListHeaderProps>>;
type MenuListFooterProps = PropsWithHTMLElement<CommonProps, 'div'>;
declare const MenuListFooter: React.FC<ExpandProps<MenuListFooterProps>>;
interface MenuListInternalProps extends CommonProps {
    children?: React.ReactNode;
}
export type MenuListProps = PropsWithHTMLElement<MenuListInternalProps, 'div'>;
export const MenuList: React.ForwardRefExoticComponent<Omit<Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>>, never>, keyof MenuListInternalProps> & MenuListInternalProps & React.RefAttributes<HTMLDivElement>>;
declare const MENU_ITEM_DEFAULT_TAG = "button";
interface MenuItemInternalProps extends CommonProps {
    children?: React.ReactNode;
    as?: 'a' | 'button';
    /**
     * Sets focus on item
     */
    isInitiallyFocused?: boolean;
}
export type MenuItemProps<E extends React.ElementType = typeof MENU_ITEM_DEFAULT_TAG> = PolymorphicProps<MenuItemInternalProps, E>;
export const MenuItem: PolymorphicComponent<ExpandProps<MenuItemInternalProps>, typeof MENU_ITEM_DEFAULT_TAG>;
export interface MenuTriggerProps {
    children: React.ReactNode;
}
export const MenuTrigger: (props: ExpandProps<MenuTriggerProps>) => JSX.Element;
export type MenuDividerProps = PropsWithHTMLElement<CommonProps, 'hr'>;
export const MenuDivider: (props: ExpandProps<MenuDividerProps>) => JSX.Element;
export type MenuSectionTitleProps = SectionHeadingProps;
export const MenuSectionTitle: (props: ExpandProps<MenuSectionTitleProps>) => JSX.Element;
export type SubmenuProps = Omit<MenuProps, 'placement' | 'offset' | 'usePortal' | 'isOpen' | 'isAutoalignmentEnabled' | 'defaultIsOpen'>;
export const Submenu: (props: SubmenuProps) => JSX.Element;
export type SubmenuTriggerProps = Omit<MenuItemProps<'button'>, 'isInitiallyFocused' | 'as'>;
export const SubmenuTrigger: React.ForwardRefExoticComponent<SubmenuTriggerProps & React.RefAttributes<HTMLButtonElement>>;
type CompoundMenu = typeof _Menu1 & {
    List: typeof MenuList;
    ListHeader: typeof MenuListHeader;
    ListFooter: typeof MenuListFooter;
    Item: typeof MenuItem;
    Trigger: typeof MenuTrigger;
    Divider: typeof MenuDivider;
    SectionTitle: typeof MenuSectionTitle;
    Submenu: typeof Submenu;
    SubmenuTrigger: typeof SubmenuTrigger;
};
export const Menu: CompoundMenu;

//# sourceMappingURL=types.d.ts.map

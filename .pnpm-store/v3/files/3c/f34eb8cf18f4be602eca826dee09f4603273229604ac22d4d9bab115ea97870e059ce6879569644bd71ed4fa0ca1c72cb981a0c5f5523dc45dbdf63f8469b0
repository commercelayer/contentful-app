import React from "react";
import { CommonProps } from "@contentful/f36-core";
export interface TabsProps extends CommonProps {
    children?: React.ReactNode;
    defaultTab?: string;
    currentTab?: string;
    onTabChange?: (tab: string) => void;
}
declare const _Tabs1: React.ForwardRefExoticComponent<TabsProps & React.RefAttributes<HTMLDivElement>>;
export interface TabProps extends CommonProps {
    /**
     * A unique id that associates the tab with a panel.
     */
    panelId: string;
    /**
     * When true, prevents the user from interacting with the tab.
     */
    isDisabled?: boolean;
    children: React.ReactNode;
}
export const Tab: React.ForwardRefExoticComponent<TabProps & React.RefAttributes<HTMLDivElement>>;
export interface TabPanelProps extends CommonProps {
    id: string;
    children: React.ReactNode;
}
export const TabPanel: React.ForwardRefExoticComponent<TabPanelProps & React.RefAttributes<HTMLDivElement>>;
export interface TabListProps extends CommonProps {
    /**
     * visual variant of TabList
     */
    variant?: 'default' | 'horizontal-divider' | 'vertical-divider';
    /**
     * When true, keyboard navigation will loop from last tab to first, and vice versa.
     * @default true
     */
    loop?: boolean;
    children?: React.ReactNode;
}
export const TabList: React.ForwardRefExoticComponent<TabListProps & React.RefAttributes<HTMLDivElement>>;
type CompoundTabs = typeof _Tabs1 & {
    Panel: typeof TabPanel;
    Tab: typeof Tab;
    List: typeof TabList;
};
export const Tabs: CompoundTabs;

//# sourceMappingURL=types.d.ts.map

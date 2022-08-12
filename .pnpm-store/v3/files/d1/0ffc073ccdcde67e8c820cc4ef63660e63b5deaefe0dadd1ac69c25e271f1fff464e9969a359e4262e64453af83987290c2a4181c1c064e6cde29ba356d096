import React from "react";
import { CommonProps, PolymorphicProps, PolymorphicComponent, ExpandProps, PropsWithHTMLElement } from "@contentful/f36-core";
declare const LIST_DEFAULT_TAG = "ul";
interface ListInternalProps extends CommonProps {
    as?: 'ul' | 'ol';
    children?: React.ReactNode;
}
export type ListProps<E extends React.ElementType = typeof LIST_DEFAULT_TAG> = PolymorphicProps<ListInternalProps, E>;
declare const _List1: PolymorphicComponent<ExpandProps<ListInternalProps>, typeof LIST_DEFAULT_TAG>;
export type ListItemProps = PropsWithHTMLElement<CommonProps & {
    children?: React.ReactNode;
}, 'li'>;
export const ListItem: {
    ({ className, children, testId, ...otherProps }: ListItemProps): React.ReactElement;
    displayName: string;
};
type CompoundList = typeof _List1 & {
    Item: typeof ListItem;
};
export const List: CompoundList;

//# sourceMappingURL=types.d.ts.map

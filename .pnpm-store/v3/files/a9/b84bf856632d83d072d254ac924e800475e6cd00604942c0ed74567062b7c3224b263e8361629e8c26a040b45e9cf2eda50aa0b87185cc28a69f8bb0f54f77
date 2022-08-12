import { GeneratedIconProps } from "@contentful/f36-icon";
import React from "react";
import { EntityStatus, PickUnion, CommonProps } from "@contentful/f36-core";
declare const types: {
    archive: string;
    audio: string;
    code: string;
    image: string;
    markup: string;
    pdf: string;
    plaintext: string;
    presentation: string;
    richtext: string;
    spreadsheet: string;
    video: string;
};
export function isAssetType(type: string): type is AssetType;
export type AssetType = keyof typeof types;
export interface AssetIconProps extends Omit<GeneratedIconProps, 'illustration' | 'ref'> {
    type?: AssetType;
}
/**
 * Renders only the Illustration that would represent this asset's type
 */
export const AssetIcon: {
    ({ type, className, testId, ...otherProps }: AssetIconProps): JSX.Element;
    displayName: string;
};
export type AssetStatus = PickUnion<EntityStatus, 'archived' | 'changed' | 'deleted' | 'draft' | 'published'>;
export interface AssetProps extends CommonProps {
    /**
     * A `src` attribute to use for image assets
     */
    src?: string;
    /**
     * The publish status of the asset
     */
    status?: AssetStatus;
    /**
     * The title of the asset
     */
    title?: string;
    /**
     * The type of asset being represented
     */
    type?: AssetType;
}
export const Asset: React.ForwardRefExoticComponent<AssetProps & React.RefAttributes<any>>;

//# sourceMappingURL=types.d.ts.map

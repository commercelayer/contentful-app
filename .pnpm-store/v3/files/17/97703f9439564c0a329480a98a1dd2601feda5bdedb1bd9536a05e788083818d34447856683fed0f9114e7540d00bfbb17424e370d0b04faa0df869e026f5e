import React from "react";
import { ExpandProps, CommonProps, PropsWithHTMLElement } from "@contentful/f36-core";
import { Placement } from "@popperjs/core";
export interface PopoverProps {
    children: React.ReactNode;
    /**
     * Boolean to determine if the Popover should be the same width as
     * the trigger element
     *
     * @default false
     */
    isFullWidth?: boolean;
    /**
     * Boolean to control whether or not the Popover is open
     *
     * @default false
     */
    isOpen?: boolean;
    /**
     * Callback fired when the popover closes
     */
    onClose?: () => void;
    /**
     * Determines the preferred position of the Popover. This position is not
     * guaranteed, as the Popover might be moved to fit the viewport
     *
     * @default bottom-start
     */
    placement?: Placement;
    /**
     * Boolean to control if popover is allowed to change its placement automatically
     * based on available space in the viewport.
     *
     * For example:
     * If you set placement prop to bottom, but there isn't enough space to position the popover in that direction,
     * it will change the popper placement to top. As soon as enough space is detected, the placement will be reverted to the defined one.
     *
     * If you want the popover to strictly follow the placement prop you should set this prop to false.
     *
     * @default true
     */
    isAutoalignmentEnabled?: boolean;
    /**
     * Boolean to control whether or not to render the Popover in a React Portal.
     * Rendering content inside a Portal allows the Popover to escape the bounds
     * of its parent while still being positioned correctly. Using a Portal is
     * necessary if an ancestor of the Popover hides overflow.
     *
     * @default true
     */
    usePortal?: boolean;
    /**
     * If true, the popover will close when you blur out it by clicking outside or tabbing out
     *
     * @default true
     */
    closeOnBlur?: boolean;
    /**
     * If true, the popover will close when you hit the Esc key
     *
     * @default true
     */
    closeOnEsc?: boolean;
    /**
     * If true, the popover will be focused after opening
     *
     * @default true
     */
    autoFocus?: boolean;
    /**
     * Popover id. Will be used as an `id` attribute on popover
     * and as `aria-controls` attribute on trigger
     *
     * @default true
     */
    id?: string;
    /**
     * The `X-axis` and `Y-axis` offset to position popper element
     * from its trigger element. `[X, Y]`
     *
     * @default [1, 4]
     */
    offset?: [number, number];
    /**
     * Defines if popover should be rendered in the DOM only when it's open
     * or all the time (after the component has been mounted)
     *
     * @default true
     */
    renderOnlyWhenOpen?: boolean;
}
declare function _Popover1(props: ExpandProps<PopoverProps>): JSX.Element;
interface PopoverContentInternalProps extends CommonProps {
    children?: React.ReactNode;
}
export type PopoverContentProps = PropsWithHTMLElement<PopoverContentInternalProps, 'div'>;
export const PopoverContent: React.ForwardRefExoticComponent<Omit<Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>>, never>, keyof PopoverContentInternalProps> & PopoverContentInternalProps & React.RefAttributes<unknown>>;
export interface PopoverTriggerProps {
    children: React.ReactNode;
}
/**
 * PopoverTrigger opens the popover. It must be an interactive element.
 */
export const PopoverTrigger: (props: PopoverTriggerProps) => React.DetailedReactHTMLElement<{
    'aria-haspopup': any;
    accept?: string;
    acceptCharset?: string;
    action?: string;
    allowFullScreen?: boolean;
    allowTransparency?: boolean;
    alt?: string;
    as?: string;
    async?: boolean;
    autoComplete?: string;
    autoFocus?: boolean;
    autoPlay?: boolean;
    capture?: string | boolean;
    cellPadding?: string | number;
    cellSpacing?: string | number;
    charSet?: string;
    challenge?: string;
    checked?: boolean;
    cite?: string;
    classID?: string;
    cols?: number;
    colSpan?: number;
    content?: string;
    controls?: boolean;
    coords?: string;
    crossOrigin?: string;
    data?: string;
    dateTime?: string;
    default?: boolean;
    defer?: boolean;
    disabled?: boolean;
    download?: any;
    encType?: string;
    form?: string;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    frameBorder?: string | number;
    headers?: string;
    height?: string | number;
    high?: number;
    href?: string;
    hrefLang?: string;
    htmlFor?: string;
    httpEquiv?: string;
    integrity?: string;
    keyParams?: string;
    keyType?: string;
    kind?: string;
    label?: string;
    list?: string;
    loop?: boolean;
    low?: number;
    manifest?: string;
    marginHeight?: number;
    marginWidth?: number;
    max?: string | number;
    maxLength?: number;
    media?: string;
    mediaGroup?: string;
    method?: string;
    min?: string | number;
    minLength?: number;
    multiple?: boolean;
    muted?: boolean;
    name?: string;
    nonce?: string;
    noValidate?: boolean;
    open?: boolean;
    optimum?: number;
    pattern?: string;
    placeholder?: string;
    playsInline?: boolean;
    poster?: string;
    preload?: string;
    readOnly?: boolean;
    rel?: string;
    required?: boolean;
    reversed?: boolean;
    rows?: number;
    rowSpan?: number;
    sandbox?: string;
    scope?: string;
    scoped?: boolean;
    scrolling?: string;
    seamless?: boolean;
    selected?: boolean;
    shape?: string;
    size?: number;
    sizes?: string;
    span?: number;
    src?: string;
    srcDoc?: string;
    srcLang?: string;
    srcSet?: string;
    start?: number;
    step?: string | number;
    summary?: string;
    target?: string;
    type?: string;
    useMap?: string;
    value?: string | number | readonly string[];
    width?: string | number;
    wmode?: string;
    wrap?: string;
    defaultChecked?: boolean;
    defaultValue?: string | number | readonly string[];
    suppressContentEditableWarning?: boolean;
    suppressHydrationWarning?: boolean;
    accessKey?: string;
    className?: string;
    contentEditable?: "inherit" | (boolean | "false" | "true");
    contextMenu?: string;
    dir?: string;
    draggable?: boolean | "false" | "true";
    hidden?: boolean;
    id?: string;
    lang?: string;
    slot?: string;
    spellCheck?: boolean | "false" | "true";
    style?: React.CSSProperties;
    tabIndex?: number;
    title?: string;
    translate?: "yes" | "no";
    radioGroup?: string;
    role?: React.AriaRole;
    about?: string;
    datatype?: string;
    inlist?: any;
    prefix?: string;
    property?: string;
    resource?: string;
    typeof?: string;
    vocab?: string;
    autoCapitalize?: string;
    autoCorrect?: string;
    autoSave?: string;
    color?: string;
    itemProp?: string;
    itemScope?: boolean;
    itemType?: string;
    itemID?: string;
    itemRef?: string;
    results?: number;
    security?: string;
    unselectable?: "on" | "off";
    inputMode?: "none" | "text" | "search" | "tel" | "url" | "email" | "numeric" | "decimal";
    is?: string;
    'aria-activedescendant'?: string;
    'aria-atomic'?: boolean | "false" | "true";
    'aria-autocomplete'?: "both" | "none" | "inline" | "list";
    'aria-busy'?: boolean | "false" | "true";
    'aria-checked'?: boolean | "false" | "true" | "mixed";
    'aria-colcount'?: number;
    'aria-colindex'?: number;
    'aria-colspan'?: number;
    'aria-controls'?: string;
    'aria-current'?: boolean | "false" | "true" | "page" | "time" | "step" | "location" | "date";
    'aria-describedby'?: string;
    'aria-details'?: string;
    'aria-disabled'?: boolean | "false" | "true";
    'aria-dropeffect'?: "none" | "copy" | "move" | "link" | "execute" | "popup";
    'aria-errormessage'?: string;
    'aria-expanded'?: boolean | "false" | "true";
    'aria-flowto'?: string;
    'aria-grabbed'?: boolean | "false" | "true";
    'aria-hidden'?: boolean | "false" | "true";
    'aria-invalid'?: boolean | "false" | "true" | "grammar" | "spelling";
    'aria-keyshortcuts'?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-level'?: number;
    'aria-live'?: "off" | "assertive" | "polite";
    'aria-modal'?: boolean | "false" | "true";
    'aria-multiline'?: boolean | "false" | "true";
    'aria-multiselectable'?: boolean | "false" | "true";
    'aria-orientation'?: "horizontal" | "vertical";
    'aria-owns'?: string;
    'aria-placeholder'?: string;
    'aria-posinset'?: number;
    'aria-pressed'?: boolean | "false" | "true" | "mixed";
    'aria-readonly'?: boolean | "false" | "true";
    'aria-relevant'?: "all" | "text" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals";
    'aria-required'?: boolean | "false" | "true";
    'aria-roledescription'?: string;
    'aria-rowcount'?: number;
    'aria-rowindex'?: number;
    'aria-rowspan'?: number;
    'aria-selected'?: boolean | "false" | "true";
    'aria-setsize'?: number;
    'aria-sort'?: "none" | "ascending" | "descending" | "other";
    'aria-valuemax'?: number;
    'aria-valuemin'?: number;
    'aria-valuenow'?: number;
    'aria-valuetext'?: string;
    children?: React.ReactNode;
    dangerouslySetInnerHTML?: {
        __html: string;
    };
    onCopy?: React.ClipboardEventHandler<HTMLElement>;
    onCopyCapture?: React.ClipboardEventHandler<HTMLElement>;
    onCut?: React.ClipboardEventHandler<HTMLElement>;
    onCutCapture?: React.ClipboardEventHandler<HTMLElement>;
    onPaste?: React.ClipboardEventHandler<HTMLElement>;
    onPasteCapture?: React.ClipboardEventHandler<HTMLElement>;
    onCompositionEnd?: React.CompositionEventHandler<HTMLElement>;
    onCompositionEndCapture?: React.CompositionEventHandler<HTMLElement>;
    onCompositionStart?: React.CompositionEventHandler<HTMLElement>;
    onCompositionStartCapture?: React.CompositionEventHandler<HTMLElement>;
    onCompositionUpdate?: React.CompositionEventHandler<HTMLElement>;
    onCompositionUpdateCapture?: React.CompositionEventHandler<HTMLElement>;
    onFocus?: React.FocusEventHandler<HTMLElement>;
    onFocusCapture?: React.FocusEventHandler<HTMLElement>;
    onBlur?: React.FocusEventHandler<HTMLElement>;
    onBlurCapture?: React.FocusEventHandler<HTMLElement>;
    onChange?: React.FormEventHandler<HTMLElement>;
    onChangeCapture?: React.FormEventHandler<HTMLElement>;
    onBeforeInput?: React.FormEventHandler<HTMLElement>;
    onBeforeInputCapture?: React.FormEventHandler<HTMLElement>;
    onInput?: React.FormEventHandler<HTMLElement>;
    onInputCapture?: React.FormEventHandler<HTMLElement>;
    onReset?: React.FormEventHandler<HTMLElement>;
    onResetCapture?: React.FormEventHandler<HTMLElement>;
    onSubmit?: React.FormEventHandler<HTMLElement>;
    onSubmitCapture?: React.FormEventHandler<HTMLElement>;
    onInvalid?: React.FormEventHandler<HTMLElement>;
    onInvalidCapture?: React.FormEventHandler<HTMLElement>;
    onLoad?: React.ReactEventHandler<HTMLElement>;
    onLoadCapture?: React.ReactEventHandler<HTMLElement>;
    onError?: React.ReactEventHandler<HTMLElement>;
    onErrorCapture?: React.ReactEventHandler<HTMLElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
    onKeyDownCapture?: React.KeyboardEventHandler<HTMLElement>;
    onKeyPress?: React.KeyboardEventHandler<HTMLElement>;
    onKeyPressCapture?: React.KeyboardEventHandler<HTMLElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLElement>;
    onKeyUpCapture?: React.KeyboardEventHandler<HTMLElement>;
    onAbort?: React.ReactEventHandler<HTMLElement>;
    onAbortCapture?: React.ReactEventHandler<HTMLElement>;
    onCanPlay?: React.ReactEventHandler<HTMLElement>;
    onCanPlayCapture?: React.ReactEventHandler<HTMLElement>;
    onCanPlayThrough?: React.ReactEventHandler<HTMLElement>;
    onCanPlayThroughCapture?: React.ReactEventHandler<HTMLElement>;
    onDurationChange?: React.ReactEventHandler<HTMLElement>;
    onDurationChangeCapture?: React.ReactEventHandler<HTMLElement>;
    onEmptied?: React.ReactEventHandler<HTMLElement>;
    onEmptiedCapture?: React.ReactEventHandler<HTMLElement>;
    onEncrypted?: React.ReactEventHandler<HTMLElement>;
    onEncryptedCapture?: React.ReactEventHandler<HTMLElement>;
    onEnded?: React.ReactEventHandler<HTMLElement>;
    onEndedCapture?: React.ReactEventHandler<HTMLElement>;
    onLoadedData?: React.ReactEventHandler<HTMLElement>;
    onLoadedDataCapture?: React.ReactEventHandler<HTMLElement>;
    onLoadedMetadata?: React.ReactEventHandler<HTMLElement>;
    onLoadedMetadataCapture?: React.ReactEventHandler<HTMLElement>;
    onLoadStart?: React.ReactEventHandler<HTMLElement>;
    onLoadStartCapture?: React.ReactEventHandler<HTMLElement>;
    onPause?: React.ReactEventHandler<HTMLElement>;
    onPauseCapture?: React.ReactEventHandler<HTMLElement>;
    onPlay?: React.ReactEventHandler<HTMLElement>;
    onPlayCapture?: React.ReactEventHandler<HTMLElement>;
    onPlaying?: React.ReactEventHandler<HTMLElement>;
    onPlayingCapture?: React.ReactEventHandler<HTMLElement>;
    onProgress?: React.ReactEventHandler<HTMLElement>;
    onProgressCapture?: React.ReactEventHandler<HTMLElement>;
    onRateChange?: React.ReactEventHandler<HTMLElement>;
    onRateChangeCapture?: React.ReactEventHandler<HTMLElement>;
    onSeeked?: React.ReactEventHandler<HTMLElement>;
    onSeekedCapture?: React.ReactEventHandler<HTMLElement>;
    onSeeking?: React.ReactEventHandler<HTMLElement>;
    onSeekingCapture?: React.ReactEventHandler<HTMLElement>;
    onStalled?: React.ReactEventHandler<HTMLElement>;
    onStalledCapture?: React.ReactEventHandler<HTMLElement>;
    onSuspend?: React.ReactEventHandler<HTMLElement>;
    onSuspendCapture?: React.ReactEventHandler<HTMLElement>;
    onTimeUpdate?: React.ReactEventHandler<HTMLElement>;
    onTimeUpdateCapture?: React.ReactEventHandler<HTMLElement>;
    onVolumeChange?: React.ReactEventHandler<HTMLElement>;
    onVolumeChangeCapture?: React.ReactEventHandler<HTMLElement>;
    onWaiting?: React.ReactEventHandler<HTMLElement>;
    onWaitingCapture?: React.ReactEventHandler<HTMLElement>;
    onAuxClick?: React.MouseEventHandler<HTMLElement>;
    onAuxClickCapture?: React.MouseEventHandler<HTMLElement>;
    onClick?: React.MouseEventHandler<HTMLElement>;
    onClickCapture?: React.MouseEventHandler<HTMLElement>;
    onContextMenu?: React.MouseEventHandler<HTMLElement>;
    onContextMenuCapture?: React.MouseEventHandler<HTMLElement>;
    onDoubleClick?: React.MouseEventHandler<HTMLElement>;
    onDoubleClickCapture?: React.MouseEventHandler<HTMLElement>;
    onDrag?: React.DragEventHandler<HTMLElement>;
    onDragCapture?: React.DragEventHandler<HTMLElement>;
    onDragEnd?: React.DragEventHandler<HTMLElement>;
    onDragEndCapture?: React.DragEventHandler<HTMLElement>;
    onDragEnter?: React.DragEventHandler<HTMLElement>;
    onDragEnterCapture?: React.DragEventHandler<HTMLElement>;
    onDragExit?: React.DragEventHandler<HTMLElement>;
    onDragExitCapture?: React.DragEventHandler<HTMLElement>;
    onDragLeave?: React.DragEventHandler<HTMLElement>;
    onDragLeaveCapture?: React.DragEventHandler<HTMLElement>;
    onDragOver?: React.DragEventHandler<HTMLElement>;
    onDragOverCapture?: React.DragEventHandler<HTMLElement>;
    onDragStart?: React.DragEventHandler<HTMLElement>;
    onDragStartCapture?: React.DragEventHandler<HTMLElement>;
    onDrop?: React.DragEventHandler<HTMLElement>;
    onDropCapture?: React.DragEventHandler<HTMLElement>;
    onMouseDown?: React.MouseEventHandler<HTMLElement>;
    onMouseDownCapture?: React.MouseEventHandler<HTMLElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLElement>;
    onMouseMove?: React.MouseEventHandler<HTMLElement>;
    onMouseMoveCapture?: React.MouseEventHandler<HTMLElement>;
    onMouseOut?: React.MouseEventHandler<HTMLElement>;
    onMouseOutCapture?: React.MouseEventHandler<HTMLElement>;
    onMouseOver?: React.MouseEventHandler<HTMLElement>;
    onMouseOverCapture?: React.MouseEventHandler<HTMLElement>;
    onMouseUp?: React.MouseEventHandler<HTMLElement>;
    onMouseUpCapture?: React.MouseEventHandler<HTMLElement>;
    onSelect?: React.ReactEventHandler<HTMLElement>;
    onSelectCapture?: React.ReactEventHandler<HTMLElement>;
    onTouchCancel?: React.TouchEventHandler<HTMLElement>;
    onTouchCancelCapture?: React.TouchEventHandler<HTMLElement>;
    onTouchEnd?: React.TouchEventHandler<HTMLElement>;
    onTouchEndCapture?: React.TouchEventHandler<HTMLElement>;
    onTouchMove?: React.TouchEventHandler<HTMLElement>;
    onTouchMoveCapture?: React.TouchEventHandler<HTMLElement>;
    onTouchStart?: React.TouchEventHandler<HTMLElement>;
    onTouchStartCapture?: React.TouchEventHandler<HTMLElement>;
    onPointerDown?: React.PointerEventHandler<HTMLElement>;
    onPointerDownCapture?: React.PointerEventHandler<HTMLElement>;
    onPointerMove?: React.PointerEventHandler<HTMLElement>;
    onPointerMoveCapture?: React.PointerEventHandler<HTMLElement>;
    onPointerUp?: React.PointerEventHandler<HTMLElement>;
    onPointerUpCapture?: React.PointerEventHandler<HTMLElement>;
    onPointerCancel?: React.PointerEventHandler<HTMLElement>;
    onPointerCancelCapture?: React.PointerEventHandler<HTMLElement>;
    onPointerEnter?: React.PointerEventHandler<HTMLElement>;
    onPointerEnterCapture?: React.PointerEventHandler<HTMLElement>;
    onPointerLeave?: React.PointerEventHandler<HTMLElement>;
    onPointerLeaveCapture?: React.PointerEventHandler<HTMLElement>;
    onPointerOver?: React.PointerEventHandler<HTMLElement>;
    onPointerOverCapture?: React.PointerEventHandler<HTMLElement>;
    onPointerOut?: React.PointerEventHandler<HTMLElement>;
    onPointerOutCapture?: React.PointerEventHandler<HTMLElement>;
    onGotPointerCapture?: React.PointerEventHandler<HTMLElement>;
    onGotPointerCaptureCapture?: React.PointerEventHandler<HTMLElement>;
    onLostPointerCapture?: React.PointerEventHandler<HTMLElement>;
    onLostPointerCaptureCapture?: React.PointerEventHandler<HTMLElement>;
    onScroll?: React.UIEventHandler<HTMLElement>;
    onScrollCapture?: React.UIEventHandler<HTMLElement>;
    onWheel?: React.WheelEventHandler<HTMLElement>;
    onWheelCapture?: React.WheelEventHandler<HTMLElement>;
    onAnimationStart?: React.AnimationEventHandler<HTMLElement>;
    onAnimationStartCapture?: React.AnimationEventHandler<HTMLElement>;
    onAnimationEnd?: React.AnimationEventHandler<HTMLElement>;
    onAnimationEndCapture?: React.AnimationEventHandler<HTMLElement>;
    onAnimationIteration?: React.AnimationEventHandler<HTMLElement>;
    onAnimationIterationCapture?: React.AnimationEventHandler<HTMLElement>;
    onTransitionEnd?: React.TransitionEventHandler<HTMLElement>;
    onTransitionEndCapture?: React.TransitionEventHandler<HTMLElement>;
    css?: import("@emotion/core").InterpolationWithTheme<any>;
    ref?: React.LegacyRef<HTMLElement>;
    key?: React.Key;
}, HTMLElement>;
type CompoundPopover = typeof _Popover1 & {
    Content: typeof PopoverContent;
    Trigger: typeof PopoverTrigger;
};
export const Popover: CompoundPopover;

//# sourceMappingURL=types.d.ts.map

import React from "react";
import { PropsWithHTMLElement, CommonProps, ExpandProps } from "@contentful/f36-core";
import ReactModal from "react-modal";
interface ModalHeaderInternalProps extends CommonProps {
    title: string;
    onClose?: Function;
}
export type ModalHeaderProps = PropsWithHTMLElement<ModalHeaderInternalProps, 'div'>;
export const ModalHeader: {
    ({ onClose, title, testId, className, ...otherProps }: ModalHeaderProps): React.ReactElement;
    displayName: string;
};
interface ModalContentInternalProps extends CommonProps {
    children: React.ReactNode;
}
export type ModalContentProps = PropsWithHTMLElement<ModalContentInternalProps, 'div'>;
export const ModalContent: {
    ({ testId, className, children, ...otherProps }: ModalContentProps): JSX.Element;
    displayName: string;
};
type ModalSizeType = 'small' | 'medium' | 'large' | 'fullWidth' | 'zen';
type ModalPositionType = 'center' | 'top';
export interface ModalProps extends CommonProps {
    /**
     * When true, the dialog is shown.
     */
    isShown: boolean;
    /**
     * Function that will be run when the modal is requested to be closed, prior to actually closing.
     */
    onClose: ReactModal.Props['onRequestClose'];
    /**
     * Function that will be run after the modal has opened.
     */
    onAfterOpen?: ReactModal.Props['onAfterOpen'];
    /**
     * Additional aria attributes
     */
    aria?: ReactModal.Props['aria'];
    /**
     * Boolean indicating if clicking the overlay should close the overlay.
     * @default true
     */
    shouldCloseOnOverlayClick?: boolean;
    /**
     * Boolean indicating if pressing the esc key should close the overlay.
     * @default true
     */
    shouldCloseOnEscapePress?: boolean;
    /**
     * Indicating if modal is centered or linked to the top
     * @default center
     */
    position?: ModalPositionType;
    /**
     * Top offset if position is 'top'
     * @default 50px
     */
    topOffset?: number | string;
    /**
     * Modal title that is used in header
     */
    title?: string;
    /**
     * Size of the modal window
     * @default medium
     */
    size?: ModalSizeType | string | number;
    /**
     * Are modals higher than viewport allowed
     * @default false
     */
    allowHeightOverflow?: boolean;
    /**
     * Optional props to override ModalHeader behaviour
     */
    modalHeaderProps?: Partial<ModalHeaderProps>;
    /**
     * Optional props to override ModalContent behaviour
     */
    modalContentProps?: Partial<ModalContentProps>;
    /**
     * Optional property to set initial focus
     */
    initialFocusRef?: React.RefObject<HTMLElement>;
    children: React.ReactNode | RenderModal;
}
type RenderModal = (modalProps: ModalProps) => React.ReactNode;
declare const _Modal1: {
    ({ allowHeightOverflow, position, shouldCloseOnEscapePress, shouldCloseOnOverlayClick, size, testId, topOffset, aria, ...otherProps }: ExpandProps<ModalProps>): JSX.Element;
    displayName: string;
};
interface ModalControlsInternalProps extends CommonProps {
    children: React.ReactElement[] | React.ReactElement;
}
export type ModalControlsProps = PropsWithHTMLElement<ModalControlsInternalProps, 'div'>;
export const ModalControls: {
    ({ testId, className, children, ...otherProps }: ModalControlsProps): React.ReactElement;
    displayName: string;
};
type CompoundModal = typeof _Modal1 & {
    Content: typeof ModalContent;
    Header: typeof ModalHeader;
    Controls: typeof ModalControls;
};
export const Modal: CompoundModal;
export interface ModalConfirmProps {
    /**
     * When true, the dialog is shown.
     */
    isShown: boolean;
    /**
     * Function that will be called when the confirm button is clicked. This does not close the ModalConfirm.
     */
    onConfirm(): void;
    /**
     * Function that will be called when the cancel button is clicked. This does not close the ModalConfirm.
     */
    onCancel: ModalProps['onClose'];
    /**
        Modal title that is used in header
      */
    title?: string;
    /**
     * Label of the confirm button
     */
    confirmLabel?: string | false;
    /**
     * Label of the cancel button
     */
    cancelLabel?: string | false;
    /**
     * The intent of the ModalConfirm. Used for the Button.
     */
    intent?: 'primary' | 'positive' | 'negative';
    /**
     * Size of the modal window
     */
    size?: ModalProps['size'];
    /**
     * Boolean indicating if clicking the overlay should close the overlay.
     */
    shouldCloseOnOverlayClick?: boolean;
    /**
     * Boolean indicating if pressing the esc key should close the overlay.
     */
    shouldCloseOnEscapePress?: boolean;
    /**
     * When true, the confirm button is set to disabled.
     */
    isConfirmDisabled?: boolean;
    /**
     * When true, the confirm button is set to loading.
     */
    isConfirmLoading?: boolean;
    /**
     * Are modals higher than viewport allowed
     */
    allowHeightOverflow?: boolean;
    /**
     * Optional props to override ModalHeader behaviour
     */
    modalHeaderProps?: Partial<ModalHeaderProps>;
    /**
     * Optional props to override ModalContent behaviour
     */
    modalContentProps?: Partial<ModalContentProps>;
    /**
     * Optional props to override ModalControl behaviour
     */
    modalControlsProps?: Partial<ModalControlsProps>;
    /**
     * Optional property to set initial focus
     */
    initialFocusRef?: React.RefObject<HTMLElement>;
    testId?: string;
    confirmTestId?: string;
    cancelTestId?: string;
    children: React.ReactNode;
}
export const ModalConfirm: {
    ({ allowHeightOverflow, cancelLabel, cancelTestId, children, confirmLabel, confirmTestId, intent, isConfirmDisabled, isConfirmLoading, isShown, modalContentProps, modalControlsProps, modalHeaderProps, onCancel, onConfirm, shouldCloseOnEscapePress, shouldCloseOnOverlayClick, size, testId, title, initialFocusRef, }: ModalConfirmProps): JSX.Element;
    displayName: string;
};
interface ModalLauncherComponentRendererProps<T = any> {
    isShown: boolean;
    onClose: (result?: T) => void;
}
interface ModalLauncherOpenOptions {
    /**
     * Unique id to be used as identifier for the modal contianer
     */
    modalId?: string;
    /**
     * ms before removing the component from the tree
     * @default 300
     */
    delay?: number;
}
declare function closeAll(): void;
declare function open<T = any>(componentRenderer: (props: ModalLauncherComponentRendererProps<T>) => JSX.Element, options?: ModalLauncherOpenOptions): Promise<T>;
export const ModalLauncher: {
    open: typeof open;
    closeAll: typeof closeAll;
};

//# sourceMappingURL=types.d.ts.map

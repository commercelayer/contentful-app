import React, { FocusEventHandler, ChangeEventHandler, KeyboardEventHandler, ComponentPropsWithoutRef, ReactNode } from "react";
import { CommonProps, MarginProps, PropsWithHTMLElement, PolymorphicProps, PolymorphicComponent, ExpandProps } from "@contentful/f36-core";
import { SpacingTokens } from "@contentful/f36-tokens";
interface FormControlContextProps {
    id?: string;
    /**
     * If `true` set the form control to the invalid state.
     */
    isInvalid?: boolean;
    /**
     * If `true` set the form control to be required.
     */
    isRequired?: boolean;
    /**
     * If `true` set the form control to the disabled state.
     */
    isDisabled?: boolean;
    /**
     * If `true` set the form control to the read only state.
     */
    isReadOnly?: boolean;
    /**
     * Max length of characters used for the text input and textarea
     */
    maxLength?: number;
    /**
     * value from text input and textarea to used for counting characters
     */
    inputValue?: string;
    /**
     * Set max length function
     */
    setMaxLength?: React.Dispatch<React.SetStateAction<number>>;
    /**
     * Set input value function
     */
    setInputValue?: React.Dispatch<React.SetStateAction<string>>;
}
interface HelpTextInternalProps extends CommonProps, MarginProps {
    children: React.ReactNode;
}
export type HelpTextProps = PropsWithHTMLElement<HelpTextInternalProps, 'p'>;
/**
 * `HelpText` is a styled copy block with guidance, placed in the context of form components.
 */
export const HelpText: React.ForwardRefExoticComponent<Omit<Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "key" | keyof React.HTMLAttributes<HTMLParagraphElement>>, never>, keyof HelpTextInternalProps> & HelpTextInternalProps & React.RefAttributes<HTMLParagraphElement>>;
interface ValidationMessageInternalProps extends CommonProps, MarginProps {
    children: React.ReactNode;
}
export type ValidationMessageProps = PropsWithHTMLElement<ValidationMessageInternalProps, 'div'>;
export const ValidationMessage: React.ForwardRefExoticComponent<Omit<Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>>, never>, keyof ValidationMessageInternalProps> & ValidationMessageInternalProps & React.RefAttributes<HTMLDivElement>>;
interface BaseInputInternalProps extends CommonProps {
    /**
     * Sets the id of the input
     */
    id?: string;
    /**
     * Allows to render input | textarea tag
     */
    as?: 'input' | 'textarea';
    /**
     * Set the value of the input
     */
    value?: string;
    /**
     * Set the name of the input
     */
    name?: string;
    /**
     * Applies disabled styles
     * @default false
     */
    isDisabled?: boolean;
    /**
     * Applies read-only styles
     * @default false
     */
    isReadOnly?: boolean;
    /**
     * Applies invalid styles
     * @default false
     */
    isInvalid?: boolean;
    /**
     * Validate the input
     * @default false
     */
    isRequired?: boolean;
    /**
     * Boolean property that allows to blur on escape
     * @default true
     */
    willBlurOnEsc?: boolean;
    /**
     * Expects any of the icon components
     */
    icon?: React.ReactElement;
    /**
     * Allows to listen to an input’s change in value
     */
    onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    /**
     * Allows to listen to an event when a key is pressed
     */
    onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    /**
     * Allows to listen to an event when an element loses focus
     */
    onBlur?: FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    /**
     * Allows to listen to an event when an element get focused
     */
    onFocus?: FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    /**
     * Defines which size of the input should be rendered
     * @default medium
     */
    size?: 'small' | 'medium';
    /**
     * Sets whether an element is resizable, and if so, in which directions
     * @default vertical
     */
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
}
type checkboxTypes = 'checkbox' | 'radio' | 'switch';
interface BaseCheckboxInternalProps extends Omit<BaseInputInternalProps, 'type' | 'as' | 'placeholder' | 'isReadOnly' | 'icon' | 'label'> {
    /**
     * Defines the type of the input to be rendered
     * @default checkbox
     */
    type?: checkboxTypes;
    /**
     * Defines if the element is checked, onChange will be required
     * @default undefined
     */
    isChecked?: boolean;
    /**
     * Defines initial checked state for an uncontrolled component
     * @default false
     */
    defaultChecked?: boolean;
    /**
     * Defines if the state is indeterminate
     * @default false
     */
    isIndeterminate?: boolean;
    /**
     * Additional props that are passed to the input element
     */
    inputProps?: Partial<ComponentPropsWithoutRef<'input'>> & {
        'data-test-id'?: string;
    };
    /**
     * Value to be set as aria-label if not passing a children
     */
    'aria-label'?: string;
    /**
     * Size of the input, only valid for switch input
     * @default medium
     */
    size?: 'small' | 'medium';
    /**
     * Optional text to be added as help text bellow the label
     */
    helpText?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
type BaseCheckboxProps = PropsWithHTMLElement<BaseCheckboxInternalProps & {
    label?: string;
}, 'label', 'htmlFor'>;
interface BaseCheckboxGroupProps extends CommonProps {
    /**
     * Handler that will be triggered when any checkbox inside the group loses focus
     */
    onBlur?: FocusEventHandler<HTMLInputElement>;
    /**
     * Handler that will be triggered when any checkbox inside the group has their checked state changed
     */
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /**
     * Name that will be assigned to all checkboxes inside the group, unless a different name is passed to the checkbox
     */
    name?: string;
    /**
     * Elements that should be in the group
     */
    children: React.ReactNode;
    /**
     * Type of the inputs used within the group
     */
    type: 'checkbox' | 'radio';
    /**
     * Array of values for checkboxes or single value for radio, that should be checked for uncontrolled inputs
     */
    defaultValue?: Array<string> | string;
    /**
     * Array of values for checkboxes or single value for radio, that should be checked for controlled inputs
     */
    value?: Array<string> | string;
}
export type CheckboxProps = Omit<BaseCheckboxProps, 'type' | 'size'>;
declare const _Checkbox1: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export interface CheckboxGroupProps extends Omit<BaseCheckboxGroupProps, 'type'> {
    /**
     * Array of values of the checkboxes that should be checked for uncontrolled inputs
     */
    defaultValue?: Array<string>;
    /**
     * Array of values of the checkboxes that should be checked for controlled inputs
     */
    value?: Array<string>;
}
declare const CheckboxGroup: React.ForwardRefExoticComponent<CheckboxGroupProps & React.RefAttributes<HTMLDivElement>>;
type CompoundCheckbox = typeof _Checkbox1 & {
    Group: typeof CheckboxGroup;
};
export const Checkbox: CompoundCheckbox;
declare const FORM_CONTROL_DEFAULT_TAG = "div";
export interface FormControlInternalProps extends FormControlContextProps, CommonProps, MarginProps {
    as?: 'div' | 'fieldset';
    children: React.ReactNode;
}
export type FormControlProps<E extends React.ElementType = typeof FORM_CONTROL_DEFAULT_TAG> = PolymorphicProps<FormControlInternalProps, E>;
declare const _FormControl1: PolymorphicComponent<ExpandProps<FormControlInternalProps>, typeof FORM_CONTROL_DEFAULT_TAG>;
export interface FormLabelInternalProps extends CommonProps, MarginProps {
    /**
     * Label value to show
     */
    children: ReactNode;
    /**
     * Whether or not the associated input element is required
     *
     * @default false
     */
    isRequired?: boolean;
    /**
     * Custom text to show in parentheses that gets rendered if the associated
     * input is required
     *
     * @default "required"
     */
    requiredText?: string;
    /**
     * Defines how the element will be rendered
     * @default label
     */
    as?: 'label' | 'legend';
}
declare const FORM_LABEL_DEFAULT_TAG = "label";
export type FormLabelProps<E extends React.ElementType = typeof FORM_LABEL_DEFAULT_TAG> = PolymorphicProps<FormLabelInternalProps, E>;
export const FormLabel: PolymorphicComponent<ExpandProps<FormLabelInternalProps>, typeof FORM_LABEL_DEFAULT_TAG>;
export type CounterProps = PropsWithHTMLElement<CommonProps, 'p'>;
export const Counter: React.ForwardRefExoticComponent<Omit<Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "key" | keyof React.HTMLAttributes<HTMLParagraphElement>>, never>, keyof CommonProps> & CommonProps & React.RefAttributes<HTMLParagraphElement>>;
type CompoundFormControl = typeof _FormControl1 & {
    Label: typeof FormLabel;
    ValidationMessage: typeof ValidationMessage;
    HelpText: typeof HelpText;
    Counter: typeof Counter;
};
export const FormControl: CompoundFormControl;
export type RadioProps = Omit<BaseCheckboxProps, 'type' | 'isIndeterminate' | 'size'>;
declare const _Radio1: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;
export interface RadioGroupProps extends Omit<BaseCheckboxGroupProps, 'type'> {
    /**
     * Value of the radio that should be checked for uncontrolled inputs
     */
    defaultValue?: string;
    /**
     * Value of the radio that should be checked for controlled inputs
     */
    value?: string;
}
declare const RadioGroup: React.ForwardRefExoticComponent<RadioGroupProps & React.RefAttributes<HTMLDivElement>>;
type CompoundRadio = typeof _Radio1 & {
    Group: typeof RadioGroup;
};
export const Radio: CompoundRadio;
declare const INPUT_DEFAULT_TAG = "input";
type BaseInputProps<E extends React.ElementType = typeof INPUT_DEFAULT_TAG> = PolymorphicProps<BaseInputInternalProps, E, 'disabled' | 'required' | 'readOnly'>;
export interface TextInputProps extends Omit<BaseInputProps, 'as' | 'onCopy' | 'resize'> {
    /**
     * Set's default value for text input
     */
    defaultValue?: string;
}
declare const _TextInput1: React.ForwardRefExoticComponent<TextInputProps & React.RefAttributes<HTMLInputElement>>;
type InputGroupSpacing = SpacingTokens | 'none';
export interface InputGroupProps extends CommonProps {
    /**
     * Sets the spacing of the elements if variant is separate.
     * @default spacingS
     */
    spacing?: InputGroupSpacing;
    children: React.ReactNode;
}
declare const InputGroup: React.ForwardRefExoticComponent<InputGroupProps & React.RefAttributes<HTMLDivElement>>;
type CompoundTextInput = typeof _TextInput1 & {
    Group: typeof InputGroup;
};
export const TextInput: CompoundTextInput;
export type SwitchProps = Omit<BaseCheckboxProps, 'type' | 'isIndeterminate'>;
export const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
export interface TextareaProps extends Omit<BaseInputProps<'textarea'>, 'as' | 'type' | 'size'> {
    /**
     * Set's default value for textarea
     */
    defaultValue?: string;
}
/**
 * Textarea is a form component that allows the user to enter a sizeable amount of multi-line plain text.
 */
export const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
type OptionInternalProps = CommonProps & {
    isDisabled?: boolean;
};
export type OptionProps = PropsWithHTMLElement<OptionInternalProps, 'option', 'defaultChecked' | 'defaultValue' | 'selected' | 'disabled'>;
export const Option: ({ testId, isDisabled, ...otherProps }: OptionProps) => JSX.Element;
type SelectSize = 'small' | 'medium';
export type SelectInternalProps = CommonProps & {
    isRequired?: boolean;
    isInvalid?: boolean;
    isDisabled?: boolean;
    onChange?: ChangeEventHandler<HTMLSelectElement>;
    children: ReactNode;
    willBlurOnEsc?: boolean;
    size?: SelectSize;
    value?: string;
    defaultValue?: string;
};
export type SelectProps = PropsWithHTMLElement<SelectInternalProps, 'select', 'disabled' | 'required'>;
declare const _Select1: React.ForwardRefExoticComponent<Omit<Omit<Pick<React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, "key" | keyof React.SelectHTMLAttributes<HTMLSelectElement>>, "disabled" | "required">, "value" | "children" | "isInvalid" | "isRequired" | "isDisabled" | "defaultValue" | "onChange" | "size" | keyof CommonProps | "willBlurOnEsc"> & CommonProps & {
    isRequired?: boolean;
    isInvalid?: boolean;
    isDisabled?: boolean;
    onChange?: ChangeEventHandler<HTMLSelectElement>;
    children: ReactNode;
    willBlurOnEsc?: boolean;
    size?: SelectSize;
    value?: string;
    defaultValue?: string;
} & React.RefAttributes<HTMLSelectElement>>;
type CompoundSelect = typeof _Select1 & {
    Option: typeof Option;
};
export const Select: CompoundSelect;
export type FormProps = PropsWithHTMLElement<CommonProps, 'form'>;
export const Form: React.ForwardRefExoticComponent<Omit<Omit<Pick<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, "key" | keyof React.FormHTMLAttributes<HTMLFormElement>>, never>, keyof CommonProps> & CommonProps & React.RefAttributes<HTMLFormElement>>;

//# sourceMappingURL=types.d.ts.map

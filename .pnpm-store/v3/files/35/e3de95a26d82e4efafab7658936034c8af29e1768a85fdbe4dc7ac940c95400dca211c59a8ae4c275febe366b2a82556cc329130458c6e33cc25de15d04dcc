import $5SKJK$react, {createContext as $5SKJK$createContext, useContext as $5SKJK$useContext, forwardRef as $5SKJK$forwardRef, useRef as $5SKJK$useRef, useEffect as $5SKJK$useEffect, useCallback as $5SKJK$useCallback, useState as $5SKJK$useState} from "react";
import {Text as $5SKJK$Text} from "@contentful/f36-typography";
import {Flex as $5SKJK$Flex, useId as $5SKJK$useId, Stack as $5SKJK$Stack, Box as $5SKJK$Box} from "@contentful/f36-core";
import {ErrorCircleOutlineIcon as $5SKJK$ErrorCircleOutlineIcon, DoneIcon as $5SKJK$DoneIcon, CloseIcon as $5SKJK$CloseIcon, MinusIcon as $5SKJK$MinusIcon, ChevronDownIcon as $5SKJK$ChevronDownIcon} from "@contentful/f36-icons";
import {css as $5SKJK$css, cx as $5SKJK$cx} from "emotion";
import $5SKJK$contentfulf36tokens from "@contentful/f36-tokens";




const $a04dcc4edf71d29a$var$noop = ()=>{};
const $a04dcc4edf71d29a$export$ec4b577c546349f1 = /*#__PURE__*/ $5SKJK$createContext(undefined);
const $a04dcc4edf71d29a$export$97a2352498389516 = ()=>{
    const context = $5SKJK$useContext($a04dcc4edf71d29a$export$ec4b577c546349f1);
    return context;
};
const $a04dcc4edf71d29a$export$62ecd8ad1bbe1a18 = (props)=>{
    const context = $a04dcc4edf71d29a$export$97a2352498389516();
    if (!context) return props;
    var _isDisabled, _isInvalid, _isReadOnly, _isRequired, _id;
    return {
        isDisabled: (_isDisabled = props.isDisabled) !== null && _isDisabled !== void 0 ? _isDisabled : context.isDisabled,
        isInvalid: (_isInvalid = props.isInvalid) !== null && _isInvalid !== void 0 ? _isInvalid : context.isInvalid,
        isReadOnly: (_isReadOnly = props.isReadOnly) !== null && _isReadOnly !== void 0 ? _isReadOnly : context.isReadOnly,
        isRequired: (_isRequired = props.isRequired) !== null && _isRequired !== void 0 ? _isRequired : context.isRequired,
        id: (_id = props.id) !== null && _id !== void 0 ? _id : context.id,
        maxLength: context.maxLength,
        inputValue: context.inputValue,
        setMaxLength: context.setMaxLength || $a04dcc4edf71d29a$var$noop,
        setInputValue: context.setInputValue || $a04dcc4edf71d29a$var$noop
    };
};


const $eecad14f13eadbca$export$a67c0bc59081311a = /*#__PURE__*/ $5SKJK$react.forwardRef(({ testId: testId = 'cf-ui-help-text' , ...otherProps }, ref)=>{
    const { id: id  } = $a04dcc4edf71d29a$export$62ecd8ad1bbe1a18({});
    return /*#__PURE__*/ $5SKJK$react.createElement($5SKJK$Text, {
        as: "p",
        fontColor: "gray500",
        fontSize: "fontSizeM",
        testId: testId,
        id: `${id}-helptext`,
        marginTop: "spacingXs",
        ...otherProps,
        ref: ref
    });
});
$eecad14f13eadbca$export$a67c0bc59081311a.displayName = 'HelpText';








const $a020c9114a884881$export$9973d23b8b5c1744 = /*#__PURE__*/ $5SKJK$forwardRef(({ children: children , testId: testId = 'cf-ui-validation-message' , ...otherProps }, ref)=>{
    const { id: id  } = $a04dcc4edf71d29a$export$62ecd8ad1bbe1a18({});
    return /*#__PURE__*/ $5SKJK$react.createElement($5SKJK$Flex, {
        marginTop: "spacingXs",
        ...otherProps,
        ref: ref,
        testId: testId,
        alignItems: "center",
        id: id ? `${id}-validation` : undefined,
        "aria-live": "assertive"
    }, /*#__PURE__*/ $5SKJK$react.createElement($5SKJK$Flex, {
        marginRight: "spacing2Xs"
    }, /*#__PURE__*/ $5SKJK$react.createElement($5SKJK$ErrorCircleOutlineIcon, {
        size: "small",
        variant: "negative",
        "aria-hidden": "true"
    })), /*#__PURE__*/ $5SKJK$react.createElement($5SKJK$Text, {
        as: "p",
        fontColor: "colorNegative"
    }, children));
});
$a020c9114a884881$export$9973d23b8b5c1744.displayName = 'ValidationMessage';










const $86812a636f307963$var$getBaseGhostStyles = ({ isDisabled: isDisabled  })=>({
        alignItems: 'center',
        background: !isDisabled ? $5SKJK$contentfulf36tokens.colorWhite : $5SKJK$contentfulf36tokens.gray300,
        border: `2px solid ${$5SKJK$contentfulf36tokens.gray300}`,
        boxSizing: 'border-box',
        display: 'inline-flex',
        height: $5SKJK$contentfulf36tokens.spacingM,
        justifyContent: 'center',
        marginRight: $5SKJK$contentfulf36tokens.spacingXs,
        width: $5SKJK$contentfulf36tokens.spacingM
    })
;
const $86812a636f307963$var$getCheckboxStyles = ({ isDisabled: isDisabled  })=>{
    const baseStyle = {
        ...$86812a636f307963$var$getBaseGhostStyles({
            isDisabled: isDisabled
        }),
        backgroundColor: !isDisabled ? $5SKJK$contentfulf36tokens.colorWhite : $5SKJK$contentfulf36tokens.gray300,
        borderRadius: $5SKJK$contentfulf36tokens.borderRadiusSmall,
        '& svg': {
            fill: !isDisabled ? $5SKJK$contentfulf36tokens.colorWhite : $5SKJK$contentfulf36tokens.gray300
        },
        'input:indeterminate + &, input:checked + &': {
            backgroundColor: !isDisabled ? $5SKJK$contentfulf36tokens.blue600 : $5SKJK$contentfulf36tokens.gray300,
            borderColor: !isDisabled ? $5SKJK$contentfulf36tokens.blue600 : $5SKJK$contentfulf36tokens.gray300,
            '& svg': {
                fill: !isDisabled ? $5SKJK$contentfulf36tokens.colorWhite : $5SKJK$contentfulf36tokens.gray600
            }
        }
    };
    return /*#__PURE__*/ $5SKJK$css(baseStyle);
};
const $86812a636f307963$var$getRadioStyles = ({ isDisabled: isDisabled  })=>{
    const baseBefore = {
        content: '""',
        borderRadius: '50%',
        backgroundColor: !isDisabled ? $5SKJK$contentfulf36tokens.colorWhite : $5SKJK$contentfulf36tokens.gray300,
        width: $5SKJK$contentfulf36tokens.borderRadiusMedium,
        height: $5SKJK$contentfulf36tokens.borderRadiusMedium
    };
    const baseStyle = {
        ...$86812a636f307963$var$getBaseGhostStyles({
            isDisabled: isDisabled
        }),
        backgroundColor: !isDisabled ? $5SKJK$contentfulf36tokens.colorWhite : $5SKJK$contentfulf36tokens.gray300,
        borderRadius: '50%',
        '&:before': {
            ...baseBefore
        },
        'input:checked + &': {
            backgroundColor: !isDisabled ? $5SKJK$contentfulf36tokens.blue600 : $5SKJK$contentfulf36tokens.gray300,
            borderColor: !isDisabled ? $5SKJK$contentfulf36tokens.blue600 : $5SKJK$contentfulf36tokens.gray300,
            '&:before': {
                backgroundColor: !isDisabled ? $5SKJK$contentfulf36tokens.colorWhite : $5SKJK$contentfulf36tokens.gray600
            }
        }
    };
    return /*#__PURE__*/ $5SKJK$css(baseStyle);
};
const $86812a636f307963$var$getSwitchStyles = ({ isDisabled: isDisabled , size: size  })=>{
    const sizeStyle = size === 'small' ? {
        height: $5SKJK$contentfulf36tokens.spacingM,
        width: $5SKJK$contentfulf36tokens.spacingXl,
        '&:before': {
            height: $5SKJK$contentfulf36tokens.spacingS,
            width: $5SKJK$contentfulf36tokens.spacingS
        },
        'input:checked + &:before': {
            transform: `translateX(${$5SKJK$contentfulf36tokens.spacingM})`
        }
    } : {
        height: '20px',
        width: '40px',
        '&:before': {
            height: $5SKJK$contentfulf36tokens.spacingM,
            width: $5SKJK$contentfulf36tokens.spacingM
        },
        'input:checked + &:before': {
            transform: `translateX(20px)`
        }
    };
    const baseStyle = {
        ...$86812a636f307963$var$getBaseGhostStyles({
            isDisabled: isDisabled
        }),
        background: $5SKJK$contentfulf36tokens.gray600,
        borderColor: $5SKJK$contentfulf36tokens.gray600,
        borderRadius: $5SKJK$contentfulf36tokens.borderRadiusSmall,
        justifyContent: 'space-around',
        position: 'relative',
        '&:before': {
            background: $5SKJK$contentfulf36tokens.colorWhite,
            borderRadius: `calc(${$5SKJK$contentfulf36tokens.borderRadiusSmall}/2)`,
            content: '""',
            left: 0,
            position: 'absolute',
            transition: `transform ${$5SKJK$contentfulf36tokens.transitionEasingDefault} ${$5SKJK$contentfulf36tokens.transitionDurationDefault}`
        },
        'input:checked + &': {
            background: $5SKJK$contentfulf36tokens.blue600,
            borderColor: $5SKJK$contentfulf36tokens.blue600
        }
    };
    const disabledStyle = {
        '&, input:checked + &': {
            background: $5SKJK$contentfulf36tokens.gray200,
            borderColor: $5SKJK$contentfulf36tokens.gray200
        },
        '&:before': {
            background: $5SKJK$contentfulf36tokens.gray400
        },
        '& svg': {
            fill: $5SKJK$contentfulf36tokens.gray400
        }
    };
    return /*#__PURE__*/ $5SKJK$css([
        baseStyle,
        sizeStyle,
        isDisabled && disabledStyle
    ]);
};
const $86812a636f307963$var$getStyles = (args)=>{
    const { isDisabled: isDisabled , size: size  } = args;
    return {
        radio: $86812a636f307963$var$getRadioStyles({
            isDisabled: isDisabled
        }),
        checkbox: $86812a636f307963$var$getCheckboxStyles({
            isDisabled: isDisabled
        }),
        switch: $86812a636f307963$var$getSwitchStyles({
            isDisabled: isDisabled,
            size: size
        })
    };
};
var $86812a636f307963$export$2e2bcd8739ae039 = $86812a636f307963$var$getStyles;


const $31912166b4c04b2a$export$d83394b8029b7306 = (props)=>{
    const { type: type , isIndeterminate: isIndeterminate , isDisabled: isDisabled , size: size = 'medium'  } = props;
    const styles = $86812a636f307963$export$2e2bcd8739ae039({
        isDisabled: isDisabled,
        size: size
    });
    if (type === 'switch') return /*#__PURE__*/ $5SKJK$react.createElement("span", {
        className: styles.switch
    }, /*#__PURE__*/ $5SKJK$react.createElement($5SKJK$DoneIcon, {
        size: "tiny",
        variant: "white"
    }), /*#__PURE__*/ $5SKJK$react.createElement($5SKJK$CloseIcon, {
        size: "tiny",
        variant: "white"
    }));
    return /*#__PURE__*/ $5SKJK$react.createElement("span", {
        className: styles[type]
    }, type === 'checkbox' && (isIndeterminate ? /*#__PURE__*/ $5SKJK$react.createElement($5SKJK$MinusIcon, {
        size: "tiny",
        variant: "white"
    }) : /*#__PURE__*/ $5SKJK$react.createElement($5SKJK$DoneIcon, {
        size: "tiny",
        variant: "white"
    })));
};




const $45de46a0fc9cad7d$var$sizeToStyle = (size)=>{
    if (size === 'small') return {
        height: $5SKJK$contentfulf36tokens.spacingM,
        width: $5SKJK$contentfulf36tokens.spacingXl
    };
    return {
        height: '20px',
        width: '40px'
    };
};
const $45de46a0fc9cad7d$var$getHelpTextStyle = ({ size: size , type: type  })=>{
    let inputWidth = $5SKJK$contentfulf36tokens.spacingM;
    if (type === 'switch') inputWidth = $45de46a0fc9cad7d$var$sizeToStyle(size).width;
    return {
        marginLeft: `calc(${inputWidth} + ${$5SKJK$contentfulf36tokens.spacingXs})`,
        marginTop: 0
    };
};
const $45de46a0fc9cad7d$var$getStyles = ({ isDisabled: isDisabled , type: type , size: size  })=>({
        wrapper: /*#__PURE__*/ $5SKJK$css({
            name: "1e7h0bt",
            styles: "align-items:center;display:inline-flex;position:relative;margin:0;"
        }),
        input: /*#__PURE__*/ $5SKJK$css([
            {
                cursor: isDisabled ? 'not-allowed' : 'pointer',
                height: $5SKJK$contentfulf36tokens.spacingM,
                margin: 0,
                opacity: 0,
                position: 'absolute',
                width: $5SKJK$contentfulf36tokens.spacingM,
                zIndex: $5SKJK$contentfulf36tokens.zIndexDefault,
                '&:focus': {
                    outline: 'none',
                    '& + span': {
                        boxShadow: $5SKJK$contentfulf36tokens.glowPrimary
                    }
                },
                '&:focus:not(:focus-visible) + span': {
                    boxShadow: 'unset'
                },
                '&:focus-visible + span': {
                    boxShadow: $5SKJK$contentfulf36tokens.glowPrimary
                }
            },
            type === 'switch' && $45de46a0fc9cad7d$var$sizeToStyle(size)
        ]),
        helpText: /*#__PURE__*/ $5SKJK$css($45de46a0fc9cad7d$var$getHelpTextStyle({
            size: size,
            type: type
        }))
    })
;
var $45de46a0fc9cad7d$export$2e2bcd8739ae039 = $45de46a0fc9cad7d$var$getStyles;






function $705d4ecf819cace9$var$_BaseCheckbox(props, ref1) {
    const { isChecked: isChecked , onChange: onChange , onFocus: onFocus , onBlur: onBlur , onKeyDown: onKeyDown , type: type = 'checkbox' , value: value , isDisabled: isDisabled , isIndeterminate: isIndeterminate , isInvalid: isInvalid , isRequired: isRequired = false , id: id , willBlurOnEsc: willBlurOnEsc = true , testId: testId = 'cf-ui-base-checkbox' , className: className = '' , defaultChecked: defaultChecked , name: name , inputProps: inputProps = {} , children: children , 'aria-label': ariaLabel , size: size = 'medium' , helpText: helpText , ...otherProps } = props;
    const inputRef = $5SKJK$useRef(null);
    const finalRef = ref1 || inputRef;
    const { id: formFieldId  } = $a04dcc4edf71d29a$export$62ecd8ad1bbe1a18({});
    $5SKJK$useEffect(()=>{
        if (finalRef.current) finalRef.current.indeterminate = isIndeterminate;
    }, [
        isIndeterminate,
        finalRef
    ]);
    const styles = $45de46a0fc9cad7d$export$2e2bcd8739ae039({
        isDisabled: isDisabled,
        type: type,
        size: size
    });
    const handleFocus = $5SKJK$useCallback((e)=>{
        e.persist();
        if (onFocus) onFocus(e);
    }, [
        onFocus
    ]);
    const handleBlur = $5SKJK$useCallback((e)=>{
        e.persist();
        if (onBlur) onBlur(e);
    }, [
        onBlur
    ]);
    const handleKeyDown = $5SKJK$useCallback((e)=>{
        var ref;
        e.persist();
        if (willBlurOnEsc && e.key === 'Escape') finalRef === null || finalRef === void 0 ? void 0 : (ref = finalRef.current) === null || ref === void 0 ? void 0 : ref.blur();
        if (onKeyDown) onKeyDown(e);
    }, [
        willBlurOnEsc,
        onKeyDown,
        finalRef
    ]);
    const ariaChecked = isChecked;
    const helpTextId = id ? `${id}-helptext` : undefined;
    const ariaDescribedBy = isInvalid ? `${formFieldId}-validation` : helpText ? helpTextId : undefined;
    return /*#__PURE__*/ $5SKJK$react.createElement($5SKJK$Flex, {
        flexDirection: "column",
        className: className
    }, /*#__PURE__*/ $5SKJK$react.createElement($5SKJK$Text, {
        as: "label",
        fontColor: "gray900",
        fontWeight: "fontWeightMedium",
        className: styles.wrapper,
        htmlFor: id,
        testId: testId,
        ...otherProps
    }, /*#__PURE__*/ $5SKJK$react.createElement("input", {
        ...inputProps,
        "aria-label": ariaLabel,
        checked: isChecked,
        defaultChecked: defaultChecked,
        className: styles.input,
        type: type === 'switch' ? 'checkbox' : type,
        onChange: onChange,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onKeyDown: handleKeyDown,
        value: value,
        disabled: isDisabled,
        role: type,
        "aria-checked": isIndeterminate ? 'mixed' : ariaChecked,
        ref: finalRef,
        required: isRequired,
        "aria-required": isRequired ? 'true' : undefined,
        "aria-invalid": isInvalid ? 'true' : undefined,
        "aria-describedby": ariaDescribedBy,
        id: id,
        name: name
    }), /*#__PURE__*/ $5SKJK$react.createElement($31912166b4c04b2a$export$d83394b8029b7306, {
        type: type,
        isDisabled: isDisabled,
        isIndeterminate: isIndeterminate,
        size: size
    }), children), helpText && /*#__PURE__*/ $5SKJK$react.createElement($eecad14f13eadbca$export$a67c0bc59081311a, {
        id: helpTextId,
        className: styles.helpText
    }, helpText));
}
$705d4ecf819cace9$var$_BaseCheckbox.displayName = 'BaseCheckbox';
const $705d4ecf819cace9$export$2148d73965a312db = /*#__PURE__*/ $5SKJK$react.forwardRef($705d4ecf819cace9$var$_BaseCheckbox);





const $515ef2976ef2a86e$export$248e6bb889f1b055 = /*#__PURE__*/ $5SKJK$createContext(undefined);
const $515ef2976ef2a86e$export$b0b3f0f84c9ba12a = ()=>{
    const context = $5SKJK$useContext($515ef2976ef2a86e$export$248e6bb889f1b055);
    return context;
};
const $515ef2976ef2a86e$export$5deffb4172cb7d6b = (props)=>{
    const context = $515ef2976ef2a86e$export$b0b3f0f84c9ba12a();
    if (!context) return props;
    let isChecked, defaultChecked;
    if (context.type === 'checkbox') {
        var ref, ref1;
        isChecked = context.value === undefined ? undefined : (ref = context.value) === null || ref === void 0 ? void 0 : ref.includes(props.value);
        defaultChecked = isChecked !== undefined ? undefined : (ref1 = context.defaultValue) === null || ref1 === void 0 ? void 0 : ref1.includes(props.value);
    }
    if (context.type === 'radio') {
        isChecked = context.value === undefined ? undefined : context.value === props.value;
        defaultChecked = isChecked !== undefined ? undefined : context.defaultValue === props.value;
    }
    const onChange = (event)=>{
        props.onChange && props.onChange(event);
        context.onChange && context.onChange(event);
    };
    const onBlur = (event)=>{
        props.onBlur && props.onBlur(event);
        context.onBlur && context.onBlur(event);
    };
    var _name;
    return {
        defaultChecked: defaultChecked,
        isChecked: isChecked,
        onBlur: onBlur,
        onChange: onChange,
        name: (_name = context.name) !== null && _name !== void 0 ? _name : props.name,
        value: props.value
    };
};


const $1992e2ac38e92a3e$var$_Checkbox = (props, ref)=>{
    const { testId: testId = 'cf-ui-checkbox' , id: id , isDisabled: isDisabled , isRequired: isRequired , isInvalid: isInvalid , children: children , onBlur: onBlur , onChange: onChange , defaultChecked: defaultChecked , isChecked: isChecked , value: value , name: name , ...otherProps } = props;
    const inputId = $5SKJK$useId(id, 'checkbox');
    const groupProps = $515ef2976ef2a86e$export$5deffb4172cb7d6b({
        onBlur: onBlur,
        onChange: onChange,
        value: value,
        defaultChecked: defaultChecked,
        isChecked: isChecked,
        name: name
    }); // Removes the not needed properties that comes from FormControl context.
    const { inputValue: inputValue , setInputValue: setInputValue , maxLength: maxLength , setMaxLength: setMaxLength , isReadOnly: isReadOnly , ...formProps } = $a04dcc4edf71d29a$export$62ecd8ad1bbe1a18({
        id: inputId,
        isDisabled: isDisabled,
        isInvalid: isInvalid,
        isRequired: isRequired
    });
    return /*#__PURE__*/ $5SKJK$react.createElement($705d4ecf819cace9$export$2148d73965a312db, {
        ...formProps,
        ...groupProps,
        ...otherProps,
        type: "checkbox",
        testId: testId,
        ref: ref
    }, children);
};
const $1992e2ac38e92a3e$export$48513f6b9f8ce62d = /*#__PURE__*/ $5SKJK$react.forwardRef($1992e2ac38e92a3e$var$_Checkbox);






const $1146380aa600ade0$export$b6135e488bb36de3 = (props, ref)=>{
    const { children: children , className: className , testId: testId = 'cf-ui-base-checkbox-group' , ...contextProps } = props;
    return /*#__PURE__*/ $5SKJK$react.createElement($515ef2976ef2a86e$export$248e6bb889f1b055.Provider, {
        value: contextProps
    }, /*#__PURE__*/ $5SKJK$react.createElement($5SKJK$Stack, {
        ref: ref,
        testId: testId,
        className: className,
        flexDirection: "column",
        alignItems: "flex-start",
        spacing: "spacingXs"
    }, children));
};
const $1146380aa600ade0$export$fb280f6e4ea4bad = /*#__PURE__*/ $5SKJK$react.forwardRef($1146380aa600ade0$export$b6135e488bb36de3);


const $513ca28eabc496a2$export$fe54259389467a41 = (props, ref)=>{
    const { children: children , testId: testId = 'cf-ui-checkbox-group' , ...otherProps } = props;
    return /*#__PURE__*/ $5SKJK$react.createElement($1146380aa600ade0$export$fb280f6e4ea4bad, {
        ref: ref,
        testId: testId,
        type: "checkbox",
        ...otherProps
    }, children);
};
const $513ca28eabc496a2$export$4aa08d5625cb8ead = /*#__PURE__*/ $5SKJK$react.forwardRef($513ca28eabc496a2$export$fe54259389467a41);


const $e81c2e734dc9e8cd$export$48513f6b9f8ce62d = $1992e2ac38e92a3e$export$48513f6b9f8ce62d;
$e81c2e734dc9e8cd$export$48513f6b9f8ce62d.Group = $513ca28eabc496a2$export$4aa08d5625cb8ead;






const $7adc28bb1c0284f2$var$FORM_CONTROL_DEFAULT_TAG = 'div';
function $7adc28bb1c0284f2$var$_FormControl({ as: as , isInvalid: isInvalid , isRequired: isRequired , isDisabled: isDisabled , isReadOnly: isReadOnly , children: children , marginBottom: marginBottom = 'spacingL' , id: id , testId: testId = 'cf-ui-form-control' , ...otherProps }, ref) {
    const generatedId = $5SKJK$useId(id, 'field-');
    const [inputValue, setInputValue] = $5SKJK$useState('');
    const [maxLength, setMaxLength] = $5SKJK$useState(0);
    const roleAttr = as === 'fieldset' ? undefined : 'group';
    const Element = as || $7adc28bb1c0284f2$var$FORM_CONTROL_DEFAULT_TAG;
    const context = {
        id: generatedId,
        isRequired: isRequired,
        isDisabled: isDisabled,
        isInvalid: isInvalid,
        isReadOnly: isReadOnly,
        inputValue: inputValue,
        setInputValue: setInputValue,
        maxLength: maxLength,
        setMaxLength: setMaxLength
    };
    return /*#__PURE__*/ $5SKJK$react.createElement($a04dcc4edf71d29a$export$ec4b577c546349f1.Provider, {
        value: context
    }, /*#__PURE__*/ $5SKJK$react.createElement($5SKJK$Box, {
        as: Element,
        ref: ref,
        role: roleAttr,
        testId: testId,
        marginBottom: marginBottom,
        ...otherProps
    }, children));
}
$7adc28bb1c0284f2$var$_FormControl.displayName = 'FormControl';
const $7adc28bb1c0284f2$export$fe5d99d8691b3f62 = /*#__PURE__*/ $5SKJK$react.forwardRef($7adc28bb1c0284f2$var$_FormControl);






function $79f9897650dc3618$export$efa286b91d77eee2() {
    return {
        root: /*#__PURE__*/ $5SKJK$css({
            display: 'inline-block',
            fontWeight: $5SKJK$contentfulf36tokens.fontWeightMedium
        }),
        indicator: /*#__PURE__*/ $5SKJK$css({
            color: $5SKJK$contentfulf36tokens.gray500,
            fontWeight: $5SKJK$contentfulf36tokens.fontWeightNormal,
            marginLeft: $5SKJK$contentfulf36tokens.spacing2Xs
        })
    };
}




const $e21686c9a206427b$var$FORM_LABEL_DEFAULT_TAG = 'label';
function $e21686c9a206427b$var$_FormLabel({ as: as , children: children , className: className , isRequired: isRequired , requiredText: requiredText = 'required' , testId: testId = 'cf-ui-form-label' , ...otherProps }, forwardedRef) {
    const styles = $79f9897650dc3618$export$efa286b91d77eee2();
    const formControlProps = $a04dcc4edf71d29a$export$62ecd8ad1bbe1a18({
        isRequired: isRequired
    });
    const id = formControlProps.id ? formControlProps.id + '-label' : undefined;
    const labelProps = as !== 'legend' ? {
        htmlFor: otherProps.htmlFor || formControlProps.id
    } : {};
    const Element = as || $e21686c9a206427b$var$FORM_LABEL_DEFAULT_TAG;
    return /*#__PURE__*/ $5SKJK$react.createElement($5SKJK$Text, {
        as: Element,
        marginBottom: "spacingXs",
        ...otherProps,
        fontColor: "gray900",
        id: id,
        ...labelProps,
        className: $5SKJK$cx(styles.root, className),
        ref: forwardedRef,
        testId: testId
    }, children, formControlProps.isRequired && /*#__PURE__*/ $5SKJK$react.createElement("span", {
        className: styles.indicator
    }, "(", requiredText, ")"));
}
$e21686c9a206427b$var$_FormLabel.displayName = 'FormLabel';
const $e21686c9a206427b$export$842aba50ed0ce9d7 = /*#__PURE__*/ $5SKJK$forwardRef($e21686c9a206427b$var$_FormLabel);










function $86cd0b1214e40259$export$7903ff7c5cc3865c() {
    return {
        root: /*#__PURE__*/ $5SKJK$css({
            flexShrink: 0,
            paddingLeft: $5SKJK$contentfulf36tokens.spacingM,
            textAlign: 'right'
        })
    };
}



const $bf851b1ec9b81cd3$export$1b74141c5fe63a28 = /*#__PURE__*/ $5SKJK$forwardRef(({ testId: testId = 'cf-ui-counter' , className: className , ...otherProps }, ref)=>{
    const { maxLength: maxLength , inputValue: inputValue  } = $a04dcc4edf71d29a$export$62ecd8ad1bbe1a18({});
    const styles = $86cd0b1214e40259$export$7903ff7c5cc3865c();
    return Boolean(maxLength) && /*#__PURE__*/ $5SKJK$react.createElement($5SKJK$Text, {
        as: "p",
        fontColor: "gray700",
        fontSize: "fontSizeM",
        testId: testId,
        marginTop: "spacingXs",
        ...otherProps,
        className: $5SKJK$cx(styles.root, className),
        ref: ref
    }, inputValue.length, " / ", maxLength);
});
$bf851b1ec9b81cd3$export$1b74141c5fe63a28.displayName = 'Counter';



const $3b85d18d278881f2$export$fe5d99d8691b3f62 = $7adc28bb1c0284f2$export$fe5d99d8691b3f62;
$3b85d18d278881f2$export$fe5d99d8691b3f62.Label = $e21686c9a206427b$export$842aba50ed0ce9d7;
$3b85d18d278881f2$export$fe5d99d8691b3f62.ValidationMessage = $a020c9114a884881$export$9973d23b8b5c1744;
$3b85d18d278881f2$export$fe5d99d8691b3f62.HelpText = $eecad14f13eadbca$export$a67c0bc59081311a;
$3b85d18d278881f2$export$fe5d99d8691b3f62.Counter = $bf851b1ec9b81cd3$export$1b74141c5fe63a28;








const $a6cf7ef6d7039a7a$var$_Radio = (props, ref)=>{
    const { testId: testId = 'cf-ui-radio-button' , id: id , isDisabled: isDisabled , isInvalid: isInvalid , isRequired: isRequired , children: children , onBlur: onBlur , onChange: onChange , defaultChecked: defaultChecked , isChecked: isChecked , value: value , name: name , ...otherProps } = props;
    const inputId = $5SKJK$useId(id, 'radio');
    const groupProps = $515ef2976ef2a86e$export$5deffb4172cb7d6b({
        onBlur: onBlur,
        onChange: onChange,
        value: value,
        defaultChecked: defaultChecked,
        isChecked: isChecked,
        name: name
    }); // Removes the not needed properties that comes from FormControl context.
    const { inputValue: inputValue , setInputValue: setInputValue , maxLength: maxLength , setMaxLength: setMaxLength , isReadOnly: isReadOnly , ...formProps } = $a04dcc4edf71d29a$export$62ecd8ad1bbe1a18({
        id: inputId,
        isDisabled: isDisabled,
        isInvalid: isInvalid,
        isRequired: isRequired
    });
    return /*#__PURE__*/ $5SKJK$react.createElement($705d4ecf819cace9$export$2148d73965a312db, {
        ...formProps,
        ...otherProps,
        ...groupProps,
        type: "radio",
        testId: testId,
        ref: ref
    }, children);
};
const $a6cf7ef6d7039a7a$export$d7b12c4107be0d61 = /*#__PURE__*/ $5SKJK$react.forwardRef($a6cf7ef6d7039a7a$var$_Radio);




const $c38d94cdd5dff453$export$2b1f8f0e41b2c916 = (props, ref)=>{
    const { children: children , testId: testId = 'cf-ui-radio-group' , ...groupProps } = props;
    return /*#__PURE__*/ $5SKJK$react.createElement($1146380aa600ade0$export$fb280f6e4ea4bad, {
        ref: ref,
        testId: testId,
        type: "radio",
        ...groupProps
    }, children);
};
const $c38d94cdd5dff453$export$a98f0dcb43a68a25 = /*#__PURE__*/ $5SKJK$react.forwardRef($c38d94cdd5dff453$export$2b1f8f0e41b2c916);


const $106ca24f13097bf1$export$d7b12c4107be0d61 = $a6cf7ef6d7039a7a$export$d7b12c4107be0d61;
$106ca24f13097bf1$export$d7b12c4107be0d61.Group = $c38d94cdd5dff453$export$a98f0dcb43a68a25;








const $4e43a267526e5b21$var$getSizeStyles = ({ size: size  })=>{
    if (size === 'small') return {
        padding: `${$5SKJK$contentfulf36tokens.spacing2Xs} ${$5SKJK$contentfulf36tokens.spacingXs}`,
        height: '32px',
        maxHeight: '32px'
    };
    return {
        height: '40px',
        maxHeight: '40px'
    };
};
const $4e43a267526e5b21$var$getStyles = ({ as: as , isDisabled: isDisabled , isInvalid: isInvalid , size: size , resize: resize  })=>({
        rootComponentWithIcon: /*#__PURE__*/ $5SKJK$css({
            name: "r0bbdu",
            styles: "position:relative;display:flex;width:100%;"
        }),
        input: /*#__PURE__*/ $5SKJK$css({
            outline: 'none',
            boxShadow: $5SKJK$contentfulf36tokens.insetBoxShadowDefault,
            boxSizing: 'border-box',
            backgroundColor: isDisabled ? $5SKJK$contentfulf36tokens.gray100 : $5SKJK$contentfulf36tokens.colorWhite,
            border: `1px solid ${isInvalid ? $5SKJK$contentfulf36tokens.red600 : $5SKJK$contentfulf36tokens.gray300}`,
            borderRadius: $5SKJK$contentfulf36tokens.borderRadiusMedium,
            color: $5SKJK$contentfulf36tokens.gray700,
            fontFamily: $5SKJK$contentfulf36tokens.fontStackPrimary,
            fontSize: $5SKJK$contentfulf36tokens.fontSizeM,
            lineHeight: $5SKJK$contentfulf36tokens.lineHeightM,
            padding: `10px ${$5SKJK$contentfulf36tokens.spacingS}`,
            margin: 0,
            cursor: isDisabled ? 'not-allowed' : 'auto',
            width: '100%',
            // if the input is a textarea, the resize prop is applied and size should be ignored
            ...as === 'textarea' ? {
                resize: resize
            } : $4e43a267526e5b21$var$getSizeStyles({
                size: size
            }),
            '&::placeholder': {
                color: $5SKJK$contentfulf36tokens.gray500
            },
            '&:active, &:active:hover': {
                borderColor: isInvalid ? $5SKJK$contentfulf36tokens.red600 : isDisabled ? $5SKJK$contentfulf36tokens.gray300 : $5SKJK$contentfulf36tokens.blue600,
                boxShadow: isInvalid ? $5SKJK$contentfulf36tokens.glowNegative : isDisabled ? 'none' : $5SKJK$contentfulf36tokens.glowPrimary
            },
            '&:focus': {
                borderColor: isInvalid ? $5SKJK$contentfulf36tokens.red600 : isDisabled ? $5SKJK$contentfulf36tokens.gray300 : $5SKJK$contentfulf36tokens.blue600,
                boxShadow: isInvalid ? $5SKJK$contentfulf36tokens.glowNegative : isDisabled ? 'none' : $5SKJK$contentfulf36tokens.glowPrimary
            }
        }),
        inputWithIcon: /*#__PURE__*/ $5SKJK$css({
            paddingLeft: size === 'small' ? $5SKJK$contentfulf36tokens.spacingXl : '38px'
        }),
        iconPlaceholder: /*#__PURE__*/ $5SKJK$css({
            position: 'absolute',
            pointerEvents: 'none',
            top: 0,
            bottom: 0,
            left: size === 'small' ? $5SKJK$contentfulf36tokens.spacingXs : $5SKJK$contentfulf36tokens.spacingS,
            display: 'flex',
            alignItems: 'center',
            zIndex: $5SKJK$contentfulf36tokens.zIndexDefault
        })
    })
;
var $4e43a267526e5b21$export$2e2bcd8739ae039 = $4e43a267526e5b21$var$getStyles;


const $c3a55451bbe10e9a$var$INPUT_DEFAULT_TAG = 'input';
function $c3a55451bbe10e9a$var$_BaseInput(props, ref) {
    const { as: as = $c3a55451bbe10e9a$var$INPUT_DEFAULT_TAG , className: className , isDisabled: isDisabled , isReadOnly: isReadOnly , isRequired: isRequired , isInvalid: isInvalid , id: id , name: name , onBlur: onBlur , onChange: onChange , onFocus: onFocus , onKeyDown: onKeyDown , testId: testId = 'cf-ui-base-input' , type: type = 'text' , value: value , placeholder: placeholder , willBlurOnEsc: willBlurOnEsc = true , style: style , icon: icon , defaultValue: defaultValue , size: size = 'medium' , resize: resize = 'vertical' , ...otherProps } = props;
    const styles = $4e43a267526e5b21$export$2e2bcd8739ae039({
        as: as,
        isDisabled: isDisabled,
        isInvalid: isInvalid,
        size: size,
        resize: resize
    });
    const handleFocus = $5SKJK$useCallback((e)=>{
        e.persist();
        if (onFocus) onFocus(e);
    }, [
        onFocus
    ]);
    const handleChange = $5SKJK$useCallback((e)=>{
        e.persist();
        if (isDisabled || isReadOnly) return;
        if (onChange) onChange(e);
    }, [
        onChange,
        isDisabled,
        isReadOnly
    ]);
    const handleKeyDown = $5SKJK$useCallback((e)=>{
        e.persist();
        if (onKeyDown) onKeyDown(e);
        if (e.nativeEvent.code === 'Escape' && willBlurOnEsc) e.currentTarget.blur();
    }, [
        willBlurOnEsc,
        onKeyDown
    ]);
    const iconContent = icon && /*#__PURE__*/ $5SKJK$react.createElement($5SKJK$Box, {
        as: "span",
        className: styles.iconPlaceholder
    }, /*#__PURE__*/ $5SKJK$react.cloneElement(icon, {
        size: size === 'small' ? 'tiny' : 'small',
        variant: 'muted',
        'aria-hidden': true
    }));
    const Element = as;
    const inputContent = (iconClassName)=>/*#__PURE__*/ $5SKJK$react.createElement(Element, {
            ...otherProps,
            value: value,
            defaultValue: defaultValue,
            "data-test-id": testId,
            style: style,
            placeholder: placeholder,
            className: $5SKJK$cx(styles.input, iconClassName, className),
            name: name,
            type: type,
            ref: ref,
            id: id,
            readOnly: isReadOnly,
            "aria-readonly": isReadOnly ? 'true' : undefined,
            "aria-required": isRequired ? 'true' : undefined,
            "aria-invalid": isInvalid ? 'true' : undefined,
            "aria-describedby": id ? `${id}-${isInvalid ? `validation` : `helptext`}` : undefined,
            disabled: isDisabled,
            required: isRequired,
            onChange: handleChange,
            onBlur: onBlur,
            onKeyDown: handleKeyDown,
            onFocus: handleFocus,
            size: size
        })
    ;
    if (icon) return /*#__PURE__*/ $5SKJK$react.createElement($5SKJK$Box, {
        as: "div",
        className: styles.rootComponentWithIcon
    }, inputContent(styles.inputWithIcon), iconContent);
    return inputContent();
}
$c3a55451bbe10e9a$var$_BaseInput.displayName = 'BaseInput';
const $c3a55451bbe10e9a$export$e1f706e5673fef9e = /*#__PURE__*/ $5SKJK$react.forwardRef($c3a55451bbe10e9a$var$_BaseInput);




const $d61acb8831231552$export$95a6787ec05e4d80 = ({ className: className , testId: testId = 'cf-ui-text-input' , id: id , value: value , defaultValue: defaultValue , onChange: onChange , onFocus: onFocus , isInvalid: isInvalid , isDisabled: isDisabled , isRequired: isRequired , isReadOnly: isReadOnly , size: size = 'medium' , maxLength: maxLength , ...otherProps }, ref1)=>{
    const { setMaxLength: setMaxLength , maxLength: contextMaxLength , setInputValue: setInputValue , inputValue: contextInputValue , ...formProps } = $a04dcc4edf71d29a$export$62ecd8ad1bbe1a18({
        id: id,
        isInvalid: isInvalid,
        isDisabled: isDisabled,
        isRequired: isRequired,
        isReadOnly: isReadOnly
    });
    $5SKJK$useEffect(()=>{
        if (maxLength !== undefined && typeof setMaxLength === 'function') {
            setMaxLength(maxLength);
            var ref;
            setInputValue((ref = value !== null && value !== void 0 ? value : defaultValue) !== null && ref !== void 0 ? ref : '');
        }
    }, [
        maxLength,
        setMaxLength,
        setInputValue,
        defaultValue,
        value
    ]);
    const handleOnChange = (event)=>{
        if (typeof setInputValue === 'function') setInputValue(event.target.value);
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    };
    const inputRef = $5SKJK$useRef(null);
    const finalRef = ref1 || inputRef;
    return /*#__PURE__*/ $5SKJK$react.createElement($c3a55451bbe10e9a$export$e1f706e5673fef9e, {
        type: "text",
        ...otherProps,
        ...formProps,
        testId: testId,
        ref: finalRef,
        onChange: maxLength ? handleOnChange : onChange,
        onFocus: onFocus,
        as: "input",
        className: className,
        value: value,
        defaultValue: defaultValue,
        size: size,
        maxLength: maxLength
    });
};
const $d61acb8831231552$export$c86715117507e8e5 = /*#__PURE__*/ $5SKJK$react.forwardRef($d61acb8831231552$export$95a6787ec05e4d80);







const $7cab5274cc96be84$var$getInputGroupStyle = ({ spacing: spacing  })=>{
    if (spacing !== 'none') return;
    return /*#__PURE__*/ $5SKJK$css({
        position: 'relative',
        '& button, & input': {
            borderRadius: '0 !important'
        },
        '& > *': {
            marginRight: '-1px !important',
            zIndex: $5SKJK$contentfulf36tokens.zIndexDefault,
            '&:not(:focus), & button:not(:focus)': {
                boxShadow: 'none !important'
            },
            '&:first-child, &:first-child > input, &:first-child button': {
                borderBottomLeftRadius: `${$5SKJK$contentfulf36tokens.borderRadiusMedium} !important`,
                borderTopLeftRadius: `${$5SKJK$contentfulf36tokens.borderRadiusMedium} !important`
            },
            '&:last-child, &:last-child > input, &:last-child button': {
                borderBottomRightRadius: `${$5SKJK$contentfulf36tokens.borderRadiusMedium} !important`,
                borderTopRightRadius: `${$5SKJK$contentfulf36tokens.borderRadiusMedium} !important`,
                marginRight: '0 !important'
            },
            '&:focus, &:focus-within': {
                zIndex: $5SKJK$contentfulf36tokens.zIndexDefault + 1
            }
        }
    });
};
var $7cab5274cc96be84$export$2e2bcd8739ae039 = ({ spacing: spacing  })=>({
        inputGroup: $7cab5274cc96be84$var$getInputGroupStyle({
            spacing: spacing
        })
    })
;


const $591e2dfb6270138e$var$_InputGroup = (props, ref)=>{
    const { children: children , className: className , spacing: spacing = 'none' , ...otherProps } = props;
    const styles = $7cab5274cc96be84$export$2e2bcd8739ae039({
        spacing: spacing
    });
    return /*#__PURE__*/ $5SKJK$react.createElement($5SKJK$Stack, {
        ...otherProps,
        spacing: spacing,
        ref: ref,
        fullWidth: true,
        className: $5SKJK$cx(styles.inputGroup, className)
    }, children);
};
const $591e2dfb6270138e$export$6e5a9cd40e0c9b97 = /*#__PURE__*/ $5SKJK$react.forwardRef($591e2dfb6270138e$var$_InputGroup);


const $8ccca48c990cb695$export$c86715117507e8e5 = $d61acb8831231552$export$c86715117507e8e5;
$8ccca48c990cb695$export$c86715117507e8e5.Group = $591e2dfb6270138e$export$6e5a9cd40e0c9b97;





const $4612587440c9cdee$var$_Switch = (props, ref)=>{
    const { testId: testId = 'cf-ui-switch' , id: id , isDisabled: isDisabled , isInvalid: isInvalid , isRequired: isRequired , children: children , ...otherProps } = props; // Removes the not needed properties that comes from FormControl context.
    const { inputValue: inputValue , setInputValue: setInputValue , maxLength: maxLength , setMaxLength: setMaxLength , isReadOnly: isReadOnly , ...formProps } = $a04dcc4edf71d29a$export$62ecd8ad1bbe1a18({
        id: id,
        isDisabled: isDisabled,
        isInvalid: isInvalid,
        isRequired: isRequired
    });
    return /*#__PURE__*/ $5SKJK$react.createElement($705d4ecf819cace9$export$2148d73965a312db, {
        ...formProps,
        ...otherProps,
        testId: testId,
        type: "switch",
        ref: ref
    }, children);
};
const $4612587440c9cdee$export$b5d5cf8927ab7262 = /*#__PURE__*/ $5SKJK$react.forwardRef($4612587440c9cdee$var$_Switch);









const $968fc6fb752a15b7$export$ffd58b7f6f099a57 = ()=>{
    return {
        error: /*#__PURE__*/ $5SKJK$css({
            '&:focus': {
                borderColor: $5SKJK$contentfulf36tokens.colorNegative,
                boxShadow: $5SKJK$contentfulf36tokens.glowNegative
            }
        }),
        disabled: /*#__PURE__*/ $5SKJK$css({
            '&:focus': {
                borderColor: $5SKJK$contentfulf36tokens.gray300,
                boxShadow: 'none'
            }
        })
    };
};


const $f65df8f6f423a926$var$_Textarea = ({ className: className , isDisabled: isDisabled , isInvalid: isInvalid , isRequired: isRequired , isReadOnly: isReadOnly , onChange: onChange , testId: testId = 'cf-ui-textarea' , id: id , resize: resize = 'vertical' , maxLength: maxLength , value: value , defaultValue: defaultValue , ...otherProps }, ref1)=>{
    const styles = $968fc6fb752a15b7$export$ffd58b7f6f099a57();
    const { setMaxLength: setMaxLength , maxLength: contextMaxLength , setInputValue: setInputValue , inputValue: contextInputValue , ...formProps } = $a04dcc4edf71d29a$export$62ecd8ad1bbe1a18({
        id: id,
        isInvalid: isInvalid,
        isDisabled: isDisabled,
        isRequired: isRequired,
        isReadOnly: isReadOnly
    });
    $5SKJK$useEffect(()=>{
        if (maxLength !== undefined && typeof setMaxLength === 'function') {
            setMaxLength(maxLength);
            var ref;
            setInputValue((ref = value !== null && value !== void 0 ? value : defaultValue) !== null && ref !== void 0 ? ref : '');
        }
    }, [
        defaultValue,
        maxLength,
        setInputValue,
        setMaxLength,
        value
    ]);
    const handleOnChange = (event)=>{
        if (typeof setInputValue === 'function') setInputValue(event.target.value);
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    };
    return /*#__PURE__*/ $5SKJK$react.createElement($c3a55451bbe10e9a$export$e1f706e5673fef9e, {
        ...otherProps,
        ...formProps,
        defaultValue: defaultValue,
        value: value,
        testId: testId,
        as: "textarea",
        ref: ref1,
        className: $5SKJK$cx(className, {
            [styles.disabled]: isDisabled,
            [styles.error]: isInvalid
        }),
        maxLength: maxLength,
        resize: resize,
        onChange: maxLength ? handleOnChange : onChange
    });
};
const $f65df8f6f423a926$export$379139ebc1c2b235 = /*#__PURE__*/ $5SKJK$react.forwardRef($f65df8f6f423a926$var$_Textarea);




const $4881b9d9201e487d$export$36d18380658d5d20 = ({ testId: testId = 'cf-ui-select-option' , isDisabled: isDisabled , ...otherProps })=>{
    return /*#__PURE__*/ $5SKJK$react.createElement("option", {
        "data-test-id": testId,
        ...otherProps,
        disabled: isDisabled
    });
};








function $2dbac3212471ffee$export$e07f46a9d03f38db({ isInvalid: isInvalid , isDisabled: isDisabled , size: size  }) {
    const sizeStyles = size === 'small' ? {
        padding: `${$5SKJK$contentfulf36tokens.spacing2Xs} ${$5SKJK$contentfulf36tokens.spacingXs}`,
        height: '32px'
    } : {
        padding: `10px ${$5SKJK$contentfulf36tokens.spacingL} 10px ${$5SKJK$contentfulf36tokens.spacingS}`,
        height: '40px'
    };
    const select = /*#__PURE__*/ $5SKJK$css({
        width: '100%',
        display: 'block',
        appearance: 'none',
        backgroundColor: $5SKJK$contentfulf36tokens.colorWhite,
        color: $5SKJK$contentfulf36tokens.gray700,
        fontSize: $5SKJK$contentfulf36tokens.fontSizeM,
        lineHeight: $5SKJK$contentfulf36tokens.lineHeightM,
        fontFamily: $5SKJK$contentfulf36tokens.fontStackPrimary,
        borderRadius: $5SKJK$contentfulf36tokens.borderRadiusMedium,
        boxShadow: $5SKJK$contentfulf36tokens.insetBoxShadowDefault,
        outline: 'none',
        border: `1px solid ${$5SKJK$contentfulf36tokens.gray300}`,
        cursor: 'pointer',
        '&::placeholder': {
            color: $5SKJK$contentfulf36tokens.gray500
        },
        '&:focus': {
            outline: 'none',
            boxShadow: $5SKJK$contentfulf36tokens.glowPrimary,
            borderColor: $5SKJK$contentfulf36tokens.colorPrimary
        },
        '&:-moz-focusring': {
            color: 'transparent',
            textShadow: '0 0 0 #000'
        },
        '&::-ms-expand': {
            display: 'none'
        }
    });
    const disabled = /*#__PURE__*/ $5SKJK$css({
        backgroundColor: $5SKJK$contentfulf36tokens.gray100,
        cursor: 'not-allowed',
        color: $5SKJK$contentfulf36tokens.gray600,
        '&:focus, &:active': {
            borderColor: $5SKJK$contentfulf36tokens.gray300
        }
    });
    const invalid = /*#__PURE__*/ $5SKJK$css({
        borderColor: isDisabled ? $5SKJK$contentfulf36tokens.red300 : $5SKJK$contentfulf36tokens.red600,
        '&:focus': {
            borderColor: $5SKJK$contentfulf36tokens.red600,
            boxShadow: $5SKJK$contentfulf36tokens.glowNegative
        }
    });
    return {
        wrapper: /*#__PURE__*/ $5SKJK$css({
            name: "1jmxdak",
            styles: "position:relative;display:block;width:auto;"
        }),
        select: /*#__PURE__*/ $5SKJK$css([
            select,
            sizeStyles,
            isDisabled && disabled,
            isInvalid && invalid
        ]),
        icon: /*#__PURE__*/ $5SKJK$css({
            position: 'absolute',
            right: $5SKJK$contentfulf36tokens.spacingXs,
            top: '50%',
            marginTop: '-8px',
            pointerEvents: 'none'
        })
    };
}


const $d116a3c694bd00bb$var$_Select = ({ id: id , children: children , className: className , isInvalid: isInvalid , isDisabled: isDisabled , isRequired: isRequired , testId: testId = 'cf-ui-select' , willBlurOnEsc: willBlurOnEsc = true , onKeyDown: onKeyDown , size: size = 'medium' , value: value , defaultValue: defaultValue , ...otherProps }, ref)=>{
    const formProps = $a04dcc4edf71d29a$export$62ecd8ad1bbe1a18({
        isDisabled: isDisabled,
        isInvalid: isInvalid,
        isRequired: isRequired,
        id: id
    });
    const styles = $2dbac3212471ffee$export$e07f46a9d03f38db({
        isDisabled: formProps.isDisabled,
        isInvalid: formProps.isInvalid,
        size: size
    });
    const handleKeyDown = $5SKJK$useCallback((e)=>{
        if (e.nativeEvent.code === 'Escape' && willBlurOnEsc) e.currentTarget.blur();
        if (onKeyDown) onKeyDown(e);
    }, [
        onKeyDown,
        willBlurOnEsc
    ]);
    return /*#__PURE__*/ $5SKJK$react.createElement("div", {
        className: $5SKJK$cx(styles.wrapper, className)
    }, /*#__PURE__*/ $5SKJK$react.createElement("select", {
        ...otherProps,
        id: formProps.id,
        "data-test-id": testId,
        className: styles.select,
        onKeyDown: handleKeyDown,
        required: formProps.isRequired,
        "aria-required": formProps.isRequired ? 'true' : undefined,
        "aria-invalid": formProps.isInvalid ? true : undefined,
        "aria-describedby": formProps.id ? `${formProps.id}-${formProps.isInvalid ? `validation` : `helptext`}` : undefined,
        disabled: formProps.isDisabled,
        defaultValue: defaultValue,
        value: value,
        ref: ref
    }, children), /*#__PURE__*/ $5SKJK$react.createElement($5SKJK$ChevronDownIcon, {
        className: styles.icon,
        variant: "muted"
    }));
};
const $d116a3c694bd00bb$export$ef9b1a59e592288f = /*#__PURE__*/ $5SKJK$react.forwardRef($d116a3c694bd00bb$var$_Select);



const $0a2cbf689de6d850$export$ef9b1a59e592288f = $d116a3c694bd00bb$export$ef9b1a59e592288f;
$0a2cbf689de6d850$export$ef9b1a59e592288f.Option = $4881b9d9201e487d$export$36d18380658d5d20;



function $29311c0aca12aabb$var$_Form({ children: children , onSubmit: onSubmit , testId: testId = 'cf-ui-form-label' , ...otherProps }, ref) {
    const handleSubmit = $5SKJK$useCallback((event)=>{
        event.preventDefault();
        if (onSubmit) onSubmit(event);
    }, [
        onSubmit
    ]);
    return /*#__PURE__*/ $5SKJK$react.createElement("form", {
        ref: ref,
        "data-test-id": testId,
        onSubmit: handleSubmit,
        ...otherProps
    }, children);
}
$29311c0aca12aabb$var$_Form.displayName = 'Form';
const $29311c0aca12aabb$export$a7fed597f4b8afd8 = /*#__PURE__*/ $5SKJK$forwardRef($29311c0aca12aabb$var$_Form);






export {$eecad14f13eadbca$export$a67c0bc59081311a as HelpText, $a020c9114a884881$export$9973d23b8b5c1744 as ValidationMessage, $e81c2e734dc9e8cd$export$48513f6b9f8ce62d as Checkbox, $3b85d18d278881f2$export$fe5d99d8691b3f62 as FormControl, $e21686c9a206427b$export$842aba50ed0ce9d7 as FormLabel, $106ca24f13097bf1$export$d7b12c4107be0d61 as Radio, $8ccca48c990cb695$export$c86715117507e8e5 as TextInput, $4612587440c9cdee$export$b5d5cf8927ab7262 as Switch, $f65df8f6f423a926$export$379139ebc1c2b235 as Textarea, $4881b9d9201e487d$export$36d18380658d5d20 as Option, $0a2cbf689de6d850$export$ef9b1a59e592288f as Select, $29311c0aca12aabb$export$a7fed597f4b8afd8 as Form, $bf851b1ec9b81cd3$export$1b74141c5fe63a28 as Counter};
//# sourceMappingURL=module.js.map

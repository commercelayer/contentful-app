import {cx as $h9ky7$cx, css as $h9ky7$css} from "emotion";
import $h9ky7$react from "react";
import {Stack as $h9ky7$Stack, Box as $h9ky7$Box, Flex as $h9ky7$Flex} from "@contentful/f36-core";
import $h9ky7$contentfulf36tokens from "@contentful/f36-tokens";
import {Spinner as $h9ky7$Spinner} from "@contentful/f36-spinner";






const $13a66a66600c252c$var$getGroupContentStyle = ({ withDivider: withDivider  })=>{
    const dividerStyle = $13a66a66600c252c$var$getDividerStyle(withDivider);
    return {
        borderRadius: '0 !important',
        marginRight: '-1px',
        zIndex: $h9ky7$contentfulf36tokens.zIndexDefault,
        '&:first-child': {
            borderBottomLeftRadius: `${$h9ky7$contentfulf36tokens.borderRadiusMedium} !important`,
            borderTopLeftRadius: `${$h9ky7$contentfulf36tokens.borderRadiusMedium} !important`
        },
        '&:last-child': {
            borderBottomRightRadius: `${$h9ky7$contentfulf36tokens.borderRadiusMedium} !important`,
            borderTopRightRadius: `${$h9ky7$contentfulf36tokens.borderRadiusMedium} !important`,
            marginRight: 0
        },
        '&:focus': {
            zIndex: $h9ky7$contentfulf36tokens.zIndexDefault + 1
        },
        ...dividerStyle
    };
};
const $13a66a66600c252c$var$getDividerStyle = (withDivider)=>{
    if (!withDivider) return {};
    return {
        position: 'relative',
        '&:before': {
            content: '""',
            width: '1px',
            opacity: '20%',
            backgroundColor: $h9ky7$contentfulf36tokens.colorWhite,
            height: '60%',
            left: '0',
            position: 'absolute'
        },
        '&:first-child, &:focus': {
            '&:before': {
                display: 'none'
            }
        },
        '&:hover, &:hover + &': {
            '&:before': {
                display: 'none'
            }
        }
    };
};
var $13a66a66600c252c$export$2e2bcd8739ae039 = ({ withDivider: withDivider  })=>({
        buttonGroup: /*#__PURE__*/ $h9ky7$css({
            name: "115actz",
            styles: "display:inline-flex;position:relative;"
        }),
        groupContent: /*#__PURE__*/ $h9ky7$css($13a66a66600c252c$var$getGroupContentStyle({
            withDivider: withDivider
        }))
    })
;


function $426db6624f3e2b08$var$_ButtonGroup(props, ref) {
    const { variant: variant = 'merged' , withDivider: withDivider , testId: testId = 'cf-ui-button-group' , children: children , className: className , spacing: spacing  } = props;
    const styles = $13a66a66600c252c$export$2e2bcd8739ae039({
        withDivider: withDivider
    });
    if (variant === 'spaced') return /*#__PURE__*/ $h9ky7$react.createElement($h9ky7$Stack, {
        className: className,
        isInline: true,
        flexDirection: "row",
        testId: testId,
        ref: ref,
        spacing: spacing
    }, children);
    return /*#__PURE__*/ $h9ky7$react.createElement($h9ky7$Box, {
        testId: testId,
        ref: ref,
        className: $h9ky7$cx(styles.buttonGroup, className)
    }, $h9ky7$react.Children.map(children, (child, key)=>{
        if (!child) return null;
        return /*#__PURE__*/ $h9ky7$react.cloneElement(child, {
            key: key,
            className: $h9ky7$cx(styles.groupContent, child.props.className)
        });
    }));
}
$426db6624f3e2b08$var$_ButtonGroup.displayName = 'ButtonGroup';
const $426db6624f3e2b08$export$69b1032f2ecdf404 = /*#__PURE__*/ $h9ky7$react.forwardRef($426db6624f3e2b08$var$_ButtonGroup);











const $3c1a0072c140f7aa$var$variantActiveStyles = (variant)=>{
    switch(variant){
        case 'primary':
            return {
                backgroundColor: $h9ky7$contentfulf36tokens.blue700,
                borderColor: $h9ky7$contentfulf36tokens.blue700
            };
        case 'secondary':
            return {
                backgroundColor: $h9ky7$contentfulf36tokens.gray200
            };
        case 'positive':
            return {
                backgroundColor: $h9ky7$contentfulf36tokens.green700,
                borderColor: $h9ky7$contentfulf36tokens.green700
            };
        case 'negative':
            return {
                backgroundColor: $h9ky7$contentfulf36tokens.red800,
                borderColor: $h9ky7$contentfulf36tokens.red800
            };
        case 'transparent':
            return {
                backgroundColor: $h9ky7$contentfulf36tokens.gray100,
                borderColor: $h9ky7$contentfulf36tokens.gray100
            };
        default:
            return {};
    }
};
const $3c1a0072c140f7aa$var$variantToStyles = (variant)=>{
    switch(variant){
        case 'primary':
            return {
                color: $h9ky7$contentfulf36tokens.colorWhite,
                backgroundColor: $h9ky7$contentfulf36tokens.blue500,
                borderColor: $h9ky7$contentfulf36tokens.blue500,
                '&:hover': {
                    backgroundColor: $h9ky7$contentfulf36tokens.blue600,
                    borderColor: $h9ky7$contentfulf36tokens.blue600,
                    color: $h9ky7$contentfulf36tokens.colorWhite
                },
                '&:active': $3c1a0072c140f7aa$var$variantActiveStyles(variant),
                '&:focus': {
                    borderColor: $h9ky7$contentfulf36tokens.blue600,
                    boxShadow: $h9ky7$contentfulf36tokens.glowPrimary
                },
                '&:focus:not(:focus-visible)': {
                    borderColor: $h9ky7$contentfulf36tokens.blue500,
                    boxShadow: 'unset'
                },
                '&:focus-visible': {
                    borderColor: $h9ky7$contentfulf36tokens.blue600,
                    boxShadow: $h9ky7$contentfulf36tokens.glowPrimary
                }
            };
        case 'secondary':
            return {
                color: $h9ky7$contentfulf36tokens.gray900,
                backgroundColor: $h9ky7$contentfulf36tokens.colorWhite,
                borderColor: $h9ky7$contentfulf36tokens.gray300,
                '&:hover': {
                    backgroundColor: $h9ky7$contentfulf36tokens.gray100,
                    color: $h9ky7$contentfulf36tokens.gray900
                },
                '&:active': $3c1a0072c140f7aa$var$variantActiveStyles(variant),
                '&:focus': {
                    boxShadow: $h9ky7$contentfulf36tokens.glowPrimary
                },
                '&:focus:not(:focus-visible)': {
                    boxShadow: 'unset'
                },
                '&:focus-visible': {
                    boxShadow: $h9ky7$contentfulf36tokens.glowPrimary
                }
            };
        case 'positive':
            return {
                color: $h9ky7$contentfulf36tokens.colorWhite,
                backgroundColor: $h9ky7$contentfulf36tokens.colorPositive,
                borderColor: $h9ky7$contentfulf36tokens.colorPositive,
                '&:hover': {
                    backgroundColor: $h9ky7$contentfulf36tokens.green600,
                    borderColor: $h9ky7$contentfulf36tokens.green600,
                    color: $h9ky7$contentfulf36tokens.colorWhite
                },
                '&:active': $3c1a0072c140f7aa$var$variantActiveStyles(variant),
                '&:focus': {
                    borderColor: $h9ky7$contentfulf36tokens.green600,
                    boxShadow: $h9ky7$contentfulf36tokens.glowPositive
                },
                '&:focus:not(:focus-visible)': {
                    borderColor: $h9ky7$contentfulf36tokens.colorPositive,
                    boxShadow: 'unset'
                },
                '&:focus-visible': {
                    borderColor: $h9ky7$contentfulf36tokens.green600,
                    boxShadow: $h9ky7$contentfulf36tokens.glowPositive
                }
            };
        case 'negative':
            return {
                color: $h9ky7$contentfulf36tokens.colorWhite,
                backgroundColor: $h9ky7$contentfulf36tokens.red600,
                borderColor: $h9ky7$contentfulf36tokens.red600,
                '&:hover': {
                    backgroundColor: $h9ky7$contentfulf36tokens.red700,
                    borderColor: $h9ky7$contentfulf36tokens.red700,
                    color: $h9ky7$contentfulf36tokens.colorWhite
                },
                '&:active': $3c1a0072c140f7aa$var$variantActiveStyles(variant),
                '&:focus': {
                    borderColor: $h9ky7$contentfulf36tokens.red700,
                    boxShadow: $h9ky7$contentfulf36tokens.glowNegative
                },
                '&:focus:not(:focus-visible)': {
                    borderColor: $h9ky7$contentfulf36tokens.red600,
                    boxShadow: 'unset'
                },
                '&:focus-visible': {
                    borderColor: $h9ky7$contentfulf36tokens.red700,
                    boxShadow: $h9ky7$contentfulf36tokens.glowNegative
                }
            };
        case 'transparent':
            return {
                color: $h9ky7$contentfulf36tokens.gray800,
                background: 'none',
                borderColor: 'transparent',
                boxShadow: 'none',
                '&:hover': {
                    backgroundColor: $h9ky7$contentfulf36tokens.gray100,
                    color: $h9ky7$contentfulf36tokens.gray900
                },
                '&:active': $3c1a0072c140f7aa$var$variantActiveStyles(variant),
                '&:focus': {
                    backgroundColor: 'transparent',
                    boxShadow: $h9ky7$contentfulf36tokens.glowPrimary
                },
                '&:focus:not(:focus-visible)': {
                    boxShadow: 'unset'
                },
                '&:focus-visible': {
                    boxShadow: $h9ky7$contentfulf36tokens.glowPrimary
                }
            };
        default:
            return {};
    }
};
const $3c1a0072c140f7aa$var$sizeToStyles = (size)=>{
    switch(size){
        case 'small':
            return {
                fontSize: $h9ky7$contentfulf36tokens.fontSizeM,
                lineHeight: $h9ky7$contentfulf36tokens.lineHeightCondensed,
                padding: `${$h9ky7$contentfulf36tokens.spacing2Xs} ${$h9ky7$contentfulf36tokens.spacingS}`,
                minHeight: '32px'
            };
        case 'medium':
            return {
                fontSize: $h9ky7$contentfulf36tokens.fontSizeM,
                lineHeight: $h9ky7$contentfulf36tokens.lineHeightCondensed,
                padding: `${$h9ky7$contentfulf36tokens.spacingXs} ${$h9ky7$contentfulf36tokens.spacingM}`,
                minHeight: '40px'
            };
        case 'large':
            return {
                fontSize: $h9ky7$contentfulf36tokens.fontSizeXl,
                lineHeight: $h9ky7$contentfulf36tokens.lineHeightXl,
                padding: `${$h9ky7$contentfulf36tokens.spacingXs} ${$h9ky7$contentfulf36tokens.spacingM}`,
                minHeight: '48px'
            };
        default:
            return {};
    }
};
const $3c1a0072c140f7aa$var$getButtonIconStyle = ({ hasChildren: hasChildren , variant: variant  })=>{
    const align = {
        '&:first-child': {
            marginRight: $h9ky7$contentfulf36tokens.spacing2Xs
        },
        '&:last-child': {
            marginLeft: $h9ky7$contentfulf36tokens.spacing2Xs
        }
    };
    const margin = hasChildren ? align : {};
    return /*#__PURE__*/ $h9ky7$css([
        margin,
        variant !== 'transparent' && hasChildren && {
            '& svg': {
                fill: 'currentColor'
            }
        }
    ]);
};
const $3c1a0072c140f7aa$export$ffd58b7f6f099a57 = ()=>({
        button: ({ variant: variant , size: size , isActive: isActive , isDisabled: isDisabled , isFullWidth: isFullWidth  })=>/*#__PURE__*/ $h9ky7$css({
                boxSizing: 'border-box',
                border: `1px solid`,
                boxShadow: '0px 1px 0px rgb(25, 37, 50, 0.08)',
                borderRadius: $h9ky7$contentfulf36tokens.borderRadiusMedium,
                cursor: isDisabled ? 'not-allowed' : 'pointer',
                fontFamily: $h9ky7$contentfulf36tokens.fontStackPrimary,
                opacity: isDisabled ? 0.5 : 1,
                display: isFullWidth ? 'flex' : 'inline-flex',
                minWidth: isFullWidth ? '100%' : 'auto',
                maxWidth: isFullWidth ? '100%' : '240px',
                overflow: 'hidden',
                flexShrink: 0,
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: $h9ky7$contentfulf36tokens.fontWeightMedium,
                outline: 'none',
                textDecoration: 'none',
                transition: `background ${$h9ky7$contentfulf36tokens.transitionDurationShort} ${$h9ky7$contentfulf36tokens.transitionEasingDefault},
        opacity ${$h9ky7$contentfulf36tokens.transitionDurationDefault} ${$h9ky7$contentfulf36tokens.transitionEasingDefault},
        border-color ${$h9ky7$contentfulf36tokens.transitionDurationDefault} ${$h9ky7$contentfulf36tokens.transitionEasingDefault}`,
                ...$3c1a0072c140f7aa$var$variantToStyles(variant),
                ...$3c1a0072c140f7aa$var$sizeToStyles(size),
                ...isActive ? {
                    transition: 'none',
                    '&, &:hover': $3c1a0072c140f7aa$var$variantActiveStyles(variant)
                } : {}
            })
        ,
        buttonIcon: $3c1a0072c140f7aa$var$getButtonIconStyle,
        buttonContent: /*#__PURE__*/ $h9ky7$css({
            name: "1h2ruwl",
            styles: "white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
        })
    })
;


const $7ee6f20577274c1c$var$BUTTON_DEFAULT_TAG = 'button';
function $7ee6f20577274c1c$var$_Button(props, ref) {
    const styles = $3c1a0072c140f7aa$export$ffd58b7f6f099a57();
    const { as: as = $7ee6f20577274c1c$var$BUTTON_DEFAULT_TAG , children: children , className: className , testId: testId = 'cf-ui-button' , variant: variant = 'secondary' , size: size = 'medium' , startIcon: startIcon , endIcon: endIcon , isActive: isActive , isDisabled: isDisabled , isLoading: isLoading , isFullWidth: isFullWidth , style: style , ...otherProps } = props;
    const rootClassNames = $h9ky7$cx(styles.button({
        variant: variant,
        size: size,
        isActive: isActive,
        isDisabled: isDisabled,
        isFullWidth: isFullWidth
    }), className);
    const iconContent = (icon)=>{
        const defaultIconColor = {
            primary: 'white',
            secondary: 'secondary',
            positive: 'white',
            negative: 'white',
            transparent: 'secondary'
        };
        var _size;
        return !isLoading && /*#__PURE__*/ $h9ky7$react.createElement($h9ky7$Flex, {
            as: "span",
            className: styles.buttonIcon({
                hasChildren: !!children,
                variant: variant
            })
        }, /*#__PURE__*/ $h9ky7$react.cloneElement(icon, {
            size: (_size = icon.props.size) !== null && _size !== void 0 ? _size : `${size === 'large' ? 'medium' : 'small'}`,
            // we want to allow variants for icons, only for the transparent IconButton
            variant: !children && icon.props.variant || defaultIconColor[variant]
        }));
    };
    const commonContent = /*#__PURE__*/ $h9ky7$react.createElement($h9ky7$react.Fragment, null, startIcon && iconContent(startIcon), children && /*#__PURE__*/ $h9ky7$react.createElement($h9ky7$Box, {
        as: "span",
        display: "block",
        className: styles.buttonContent
    }, children), endIcon && iconContent(endIcon), isLoading && /*#__PURE__*/ $h9ky7$react.createElement($h9ky7$Box, {
        as: "span",
        marginLeft: children || !isLoading ? 'spacingXs' : 'none'
    }, /*#__PURE__*/ $h9ky7$react.createElement($h9ky7$Spinner, {
        customSize: 18,
        variant: variant === 'secondary' ? 'default' : 'white'
    })));
    const commonProps = {
        ['data-test-id']: testId,
        className: rootClassNames,
        ref: ref,
        style: style
    };
    if (as === 'a') return /*#__PURE__*/ $h9ky7$react.createElement("a", {
        ...otherProps,
        ...commonProps,
        disabled: isDisabled
    }, commonContent);
    return /*#__PURE__*/ $h9ky7$react.createElement("button", {
        type: "button",
        ...otherProps,
        ...commonProps,
        disabled: isDisabled
    }, commonContent);
}
$7ee6f20577274c1c$var$_Button.displayName = 'Button';
const $7ee6f20577274c1c$export$353f5b6fc5456de1 = /*#__PURE__*/ $h9ky7$react.forwardRef($7ee6f20577274c1c$var$_Button);





const $ef89ba0ef49c1430$var$getToggleButtonStyle = ({ isActive: isActive , isDisabled: isDisabled  })=>{
    const activeStyle = {
        background: $h9ky7$contentfulf36tokens.blue100,
        borderColor: $h9ky7$contentfulf36tokens.blue600,
        '&': {
            zIndex: $h9ky7$contentfulf36tokens.zIndexDefault + 1
        },
        '&:hover': {
            background: $h9ky7$contentfulf36tokens.blue100
        }
    };
    const baseStyle = {
        background: $h9ky7$contentfulf36tokens.colorWhite,
        '&:hover': {
            background: $h9ky7$contentfulf36tokens.colorWhite,
            borderColor: isDisabled ? $h9ky7$contentfulf36tokens.gray300 : $h9ky7$contentfulf36tokens.blue600,
            zIndex: $h9ky7$contentfulf36tokens.zIndexDefault + 1
        },
        '&:focus': {
            boxShadow: $h9ky7$contentfulf36tokens.glowPrimary,
            zIndex: $h9ky7$contentfulf36tokens.zIndexDefault + 2
        },
        '&:active, &:active:hover': isDisabled ? {
            background: $h9ky7$contentfulf36tokens.colorWhite,
            borderColor: $h9ky7$contentfulf36tokens.gray300,
            zIndex: $h9ky7$contentfulf36tokens.zIndexDefault + 1
        } : {
            background: $h9ky7$contentfulf36tokens.blue100,
            borderColor: $h9ky7$contentfulf36tokens.blue600,
            zIndex: $h9ky7$contentfulf36tokens.zIndexDefault + 1
        }
    };
    if (isActive) return {
        ...baseStyle,
        ...activeStyle
    };
    return baseStyle;
};
var $ef89ba0ef49c1430$export$2e2bcd8739ae039 = ({ isActive: isActive , isDisabled: isDisabled  })=>({
        toggleButton: /*#__PURE__*/ $h9ky7$css($ef89ba0ef49c1430$var$getToggleButtonStyle({
            isActive: isActive,
            isDisabled: isDisabled
        }))
    })
;


function $ef40dd3135345ad0$var$_ToggleButton(props, ref) {
    const { testId: testId = 'cf-ui-toggle-button' , children: children , className: className , isDisabled: isDisabled = false , isActive: isActive = false , icon: icon , onToggle: onToggle , size: size = 'medium' , ...otherProps } = props;
    const styles = $ef89ba0ef49c1430$export$2e2bcd8739ae039({
        isActive: isActive,
        isDisabled: isDisabled
    });
    const handleToggle = ()=>{
        if (!isDisabled && onToggle) onToggle();
    };
    return /*#__PURE__*/ $h9ky7$react.createElement($7ee6f20577274c1c$export$353f5b6fc5456de1, {
        testId: testId,
        type: "button",
        ref: ref,
        size: size,
        onClick: handleToggle,
        className: $h9ky7$cx(styles.toggleButton, className),
        startIcon: icon,
        isDisabled: isDisabled,
        "aria-pressed": isActive,
        "data-state": isActive ? 'on' : 'off',
        ...otherProps
    }, children);
}
$ef40dd3135345ad0$var$_ToggleButton.displayName = 'ToggleButton';
const $ef40dd3135345ad0$export$d2b052e7b4be1756 = /*#__PURE__*/ $h9ky7$react.forwardRef($ef40dd3135345ad0$var$_ToggleButton);






const $11085ab10d832c25$var$ICON_BUTTON_DEFAULT_TAG = 'button';
function $11085ab10d832c25$var$_IconButton(props, ref) {
    const { testId: testId = 'cf-ui-icon-button' , variant: variant = 'transparent' , icon: icon , ...otherProps } = props;
    return /*#__PURE__*/ $h9ky7$react.createElement($7ee6f20577274c1c$export$353f5b6fc5456de1, {
        testId: testId,
        ref: ref,
        variant: variant,
        ...otherProps,
        startIcon: icon
    });
}
$11085ab10d832c25$var$_IconButton.displayName = 'IconButton';
const $11085ab10d832c25$export$c25acd513dcc8062 = /*#__PURE__*/ $h9ky7$react.forwardRef($11085ab10d832c25$var$_IconButton);





export {$426db6624f3e2b08$export$69b1032f2ecdf404 as ButtonGroup, $ef40dd3135345ad0$export$d2b052e7b4be1756 as ToggleButton, $7ee6f20577274c1c$export$353f5b6fc5456de1 as Button, $11085ab10d832c25$export$c25acd513dcc8062 as IconButton};
//# sourceMappingURL=module.js.map

var $cb4Id$emotion = require("emotion");
var $cb4Id$react = require("react");
var $cb4Id$contentfulf36core = require("@contentful/f36-core");
var $cb4Id$contentfulf36tokens = require("@contentful/f36-tokens");
var $cb4Id$contentfulf36spinner = require("@contentful/f36-spinner");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "ButtonGroup", () => $b9a254f26aa5843a$export$69b1032f2ecdf404);
$parcel$export(module.exports, "ToggleButton", () => $b7ebb16856a059a7$export$d2b052e7b4be1756);
$parcel$export(module.exports, "Button", () => $af17fa27257cf90a$export$353f5b6fc5456de1);
$parcel$export(module.exports, "IconButton", () => $8fa058ece9e0fdf8$export$c25acd513dcc8062);





const $1da03ce74ef43026$var$getGroupContentStyle = ({ withDivider: withDivider  })=>{
    const dividerStyle = $1da03ce74ef43026$var$getDividerStyle(withDivider);
    return {
        borderRadius: '0 !important',
        marginRight: '-1px',
        zIndex: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).zIndexDefault,
        '&:first-child': {
            borderBottomLeftRadius: `${($parcel$interopDefault($cb4Id$contentfulf36tokens)).borderRadiusMedium} !important`,
            borderTopLeftRadius: `${($parcel$interopDefault($cb4Id$contentfulf36tokens)).borderRadiusMedium} !important`
        },
        '&:last-child': {
            borderBottomRightRadius: `${($parcel$interopDefault($cb4Id$contentfulf36tokens)).borderRadiusMedium} !important`,
            borderTopRightRadius: `${($parcel$interopDefault($cb4Id$contentfulf36tokens)).borderRadiusMedium} !important`,
            marginRight: 0
        },
        '&:focus': {
            zIndex: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).zIndexDefault + 1
        },
        ...dividerStyle
    };
};
const $1da03ce74ef43026$var$getDividerStyle = (withDivider)=>{
    if (!withDivider) return {};
    return {
        position: 'relative',
        '&:before': {
            content: '""',
            width: '1px',
            opacity: '20%',
            backgroundColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).colorWhite,
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
var $1da03ce74ef43026$export$2e2bcd8739ae039 = ({ withDivider: withDivider  })=>({
        buttonGroup: /*#__PURE__*/ $cb4Id$emotion.css({
            name: "115actz",
            styles: "display:inline-flex;position:relative;"
        }),
        groupContent: /*#__PURE__*/ $cb4Id$emotion.css($1da03ce74ef43026$var$getGroupContentStyle({
            withDivider: withDivider
        }))
    })
;


function $b9a254f26aa5843a$var$_ButtonGroup(props, ref) {
    const { variant: variant = 'merged' , withDivider: withDivider , testId: testId = 'cf-ui-button-group' , children: children , className: className , spacing: spacing  } = props;
    const styles = $1da03ce74ef43026$export$2e2bcd8739ae039({
        withDivider: withDivider
    });
    if (variant === 'spaced') return /*#__PURE__*/ ($parcel$interopDefault($cb4Id$react)).createElement($cb4Id$contentfulf36core.Stack, {
        className: className,
        isInline: true,
        flexDirection: "row",
        testId: testId,
        ref: ref,
        spacing: spacing
    }, children);
    return /*#__PURE__*/ ($parcel$interopDefault($cb4Id$react)).createElement($cb4Id$contentfulf36core.Box, {
        testId: testId,
        ref: ref,
        className: $cb4Id$emotion.cx(styles.buttonGroup, className)
    }, ($parcel$interopDefault($cb4Id$react)).Children.map(children, (child, key)=>{
        if (!child) return null;
        return /*#__PURE__*/ ($parcel$interopDefault($cb4Id$react)).cloneElement(child, {
            key: key,
            className: $cb4Id$emotion.cx(styles.groupContent, child.props.className)
        });
    }));
}
$b9a254f26aa5843a$var$_ButtonGroup.displayName = 'ButtonGroup';
const $b9a254f26aa5843a$export$69b1032f2ecdf404 = /*#__PURE__*/ ($parcel$interopDefault($cb4Id$react)).forwardRef($b9a254f26aa5843a$var$_ButtonGroup);











const $8cc316abbb2f82b0$var$variantActiveStyles = (variant)=>{
    switch(variant){
        case 'primary':
            return {
                backgroundColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).blue700,
                borderColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).blue700
            };
        case 'secondary':
            return {
                backgroundColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).gray200
            };
        case 'positive':
            return {
                backgroundColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).green700,
                borderColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).green700
            };
        case 'negative':
            return {
                backgroundColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).red800,
                borderColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).red800
            };
        case 'transparent':
            return {
                backgroundColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).gray100,
                borderColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).gray100
            };
        default:
            return {};
    }
};
const $8cc316abbb2f82b0$var$variantToStyles = (variant)=>{
    switch(variant){
        case 'primary':
            return {
                color: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).colorWhite,
                backgroundColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).blue500,
                borderColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).blue500,
                '&:hover': {
                    backgroundColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).blue600,
                    borderColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).blue600,
                    color: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).colorWhite
                },
                '&:active': $8cc316abbb2f82b0$var$variantActiveStyles(variant),
                '&:focus': {
                    borderColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).blue600,
                    boxShadow: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).glowPrimary
                },
                '&:focus:not(:focus-visible)': {
                    borderColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).blue500,
                    boxShadow: 'unset'
                },
                '&:focus-visible': {
                    borderColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).blue600,
                    boxShadow: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).glowPrimary
                }
            };
        case 'secondary':
            return {
                color: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).gray900,
                backgroundColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).colorWhite,
                borderColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).gray300,
                '&:hover': {
                    backgroundColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).gray100,
                    color: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).gray900
                },
                '&:active': $8cc316abbb2f82b0$var$variantActiveStyles(variant),
                '&:focus': {
                    boxShadow: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).glowPrimary
                },
                '&:focus:not(:focus-visible)': {
                    boxShadow: 'unset'
                },
                '&:focus-visible': {
                    boxShadow: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).glowPrimary
                }
            };
        case 'positive':
            return {
                color: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).colorWhite,
                backgroundColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).colorPositive,
                borderColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).colorPositive,
                '&:hover': {
                    backgroundColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).green600,
                    borderColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).green600,
                    color: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).colorWhite
                },
                '&:active': $8cc316abbb2f82b0$var$variantActiveStyles(variant),
                '&:focus': {
                    borderColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).green600,
                    boxShadow: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).glowPositive
                },
                '&:focus:not(:focus-visible)': {
                    borderColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).colorPositive,
                    boxShadow: 'unset'
                },
                '&:focus-visible': {
                    borderColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).green600,
                    boxShadow: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).glowPositive
                }
            };
        case 'negative':
            return {
                color: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).colorWhite,
                backgroundColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).red600,
                borderColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).red600,
                '&:hover': {
                    backgroundColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).red700,
                    borderColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).red700,
                    color: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).colorWhite
                },
                '&:active': $8cc316abbb2f82b0$var$variantActiveStyles(variant),
                '&:focus': {
                    borderColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).red700,
                    boxShadow: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).glowNegative
                },
                '&:focus:not(:focus-visible)': {
                    borderColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).red600,
                    boxShadow: 'unset'
                },
                '&:focus-visible': {
                    borderColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).red700,
                    boxShadow: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).glowNegative
                }
            };
        case 'transparent':
            return {
                color: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).gray800,
                background: 'none',
                borderColor: 'transparent',
                boxShadow: 'none',
                '&:hover': {
                    backgroundColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).gray100,
                    color: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).gray900
                },
                '&:active': $8cc316abbb2f82b0$var$variantActiveStyles(variant),
                '&:focus': {
                    backgroundColor: 'transparent',
                    boxShadow: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).glowPrimary
                },
                '&:focus:not(:focus-visible)': {
                    boxShadow: 'unset'
                },
                '&:focus-visible': {
                    boxShadow: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).glowPrimary
                }
            };
        default:
            return {};
    }
};
const $8cc316abbb2f82b0$var$sizeToStyles = (size)=>{
    switch(size){
        case 'small':
            return {
                fontSize: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).fontSizeM,
                lineHeight: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).lineHeightCondensed,
                padding: `${($parcel$interopDefault($cb4Id$contentfulf36tokens)).spacing2Xs} ${($parcel$interopDefault($cb4Id$contentfulf36tokens)).spacingS}`,
                minHeight: '32px'
            };
        case 'medium':
            return {
                fontSize: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).fontSizeM,
                lineHeight: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).lineHeightCondensed,
                padding: `${($parcel$interopDefault($cb4Id$contentfulf36tokens)).spacingXs} ${($parcel$interopDefault($cb4Id$contentfulf36tokens)).spacingM}`,
                minHeight: '40px'
            };
        case 'large':
            return {
                fontSize: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).fontSizeXl,
                lineHeight: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).lineHeightXl,
                padding: `${($parcel$interopDefault($cb4Id$contentfulf36tokens)).spacingXs} ${($parcel$interopDefault($cb4Id$contentfulf36tokens)).spacingM}`,
                minHeight: '48px'
            };
        default:
            return {};
    }
};
const $8cc316abbb2f82b0$var$getButtonIconStyle = ({ hasChildren: hasChildren , variant: variant  })=>{
    const align = {
        '&:first-child': {
            marginRight: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).spacing2Xs
        },
        '&:last-child': {
            marginLeft: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).spacing2Xs
        }
    };
    const margin = hasChildren ? align : {};
    return /*#__PURE__*/ $cb4Id$emotion.css([
        margin,
        variant !== 'transparent' && hasChildren && {
            '& svg': {
                fill: 'currentColor'
            }
        }
    ]);
};
const $8cc316abbb2f82b0$export$ffd58b7f6f099a57 = ()=>({
        button: ({ variant: variant , size: size , isActive: isActive , isDisabled: isDisabled , isFullWidth: isFullWidth  })=>/*#__PURE__*/ $cb4Id$emotion.css({
                boxSizing: 'border-box',
                border: `1px solid`,
                boxShadow: '0px 1px 0px rgb(25, 37, 50, 0.08)',
                borderRadius: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).borderRadiusMedium,
                cursor: isDisabled ? 'not-allowed' : 'pointer',
                fontFamily: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).fontStackPrimary,
                opacity: isDisabled ? 0.5 : 1,
                display: isFullWidth ? 'flex' : 'inline-flex',
                minWidth: isFullWidth ? '100%' : 'auto',
                maxWidth: isFullWidth ? '100%' : '240px',
                overflow: 'hidden',
                flexShrink: 0,
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).fontWeightMedium,
                outline: 'none',
                textDecoration: 'none',
                transition: `background ${($parcel$interopDefault($cb4Id$contentfulf36tokens)).transitionDurationShort} ${($parcel$interopDefault($cb4Id$contentfulf36tokens)).transitionEasingDefault},
        opacity ${($parcel$interopDefault($cb4Id$contentfulf36tokens)).transitionDurationDefault} ${($parcel$interopDefault($cb4Id$contentfulf36tokens)).transitionEasingDefault},
        border-color ${($parcel$interopDefault($cb4Id$contentfulf36tokens)).transitionDurationDefault} ${($parcel$interopDefault($cb4Id$contentfulf36tokens)).transitionEasingDefault}`,
                ...$8cc316abbb2f82b0$var$variantToStyles(variant),
                ...$8cc316abbb2f82b0$var$sizeToStyles(size),
                ...isActive ? {
                    transition: 'none',
                    '&, &:hover': $8cc316abbb2f82b0$var$variantActiveStyles(variant)
                } : {}
            })
        ,
        buttonIcon: $8cc316abbb2f82b0$var$getButtonIconStyle,
        buttonContent: /*#__PURE__*/ $cb4Id$emotion.css({
            name: "1h2ruwl",
            styles: "white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
        })
    })
;


const $af17fa27257cf90a$var$BUTTON_DEFAULT_TAG = 'button';
function $af17fa27257cf90a$var$_Button(props, ref) {
    const styles = $8cc316abbb2f82b0$export$ffd58b7f6f099a57();
    const { as: as = $af17fa27257cf90a$var$BUTTON_DEFAULT_TAG , children: children , className: className , testId: testId = 'cf-ui-button' , variant: variant = 'secondary' , size: size = 'medium' , startIcon: startIcon , endIcon: endIcon , isActive: isActive , isDisabled: isDisabled , isLoading: isLoading , isFullWidth: isFullWidth , style: style , ...otherProps } = props;
    const rootClassNames = $cb4Id$emotion.cx(styles.button({
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
        return !isLoading && /*#__PURE__*/ ($parcel$interopDefault($cb4Id$react)).createElement($cb4Id$contentfulf36core.Flex, {
            as: "span",
            className: styles.buttonIcon({
                hasChildren: !!children,
                variant: variant
            })
        }, /*#__PURE__*/ ($parcel$interopDefault($cb4Id$react)).cloneElement(icon, {
            size: (_size = icon.props.size) !== null && _size !== void 0 ? _size : `${size === 'large' ? 'medium' : 'small'}`,
            // we want to allow variants for icons, only for the transparent IconButton
            variant: !children && icon.props.variant || defaultIconColor[variant]
        }));
    };
    const commonContent = /*#__PURE__*/ ($parcel$interopDefault($cb4Id$react)).createElement(($parcel$interopDefault($cb4Id$react)).Fragment, null, startIcon && iconContent(startIcon), children && /*#__PURE__*/ ($parcel$interopDefault($cb4Id$react)).createElement($cb4Id$contentfulf36core.Box, {
        as: "span",
        display: "block",
        className: styles.buttonContent
    }, children), endIcon && iconContent(endIcon), isLoading && /*#__PURE__*/ ($parcel$interopDefault($cb4Id$react)).createElement($cb4Id$contentfulf36core.Box, {
        as: "span",
        marginLeft: children || !isLoading ? 'spacingXs' : 'none'
    }, /*#__PURE__*/ ($parcel$interopDefault($cb4Id$react)).createElement($cb4Id$contentfulf36spinner.Spinner, {
        customSize: 18,
        variant: variant === 'secondary' ? 'default' : 'white'
    })));
    const commonProps = {
        ['data-test-id']: testId,
        className: rootClassNames,
        ref: ref,
        style: style
    };
    if (as === 'a') return /*#__PURE__*/ ($parcel$interopDefault($cb4Id$react)).createElement("a", {
        ...otherProps,
        ...commonProps,
        disabled: isDisabled
    }, commonContent);
    return /*#__PURE__*/ ($parcel$interopDefault($cb4Id$react)).createElement("button", {
        type: "button",
        ...otherProps,
        ...commonProps,
        disabled: isDisabled
    }, commonContent);
}
$af17fa27257cf90a$var$_Button.displayName = 'Button';
const $af17fa27257cf90a$export$353f5b6fc5456de1 = /*#__PURE__*/ ($parcel$interopDefault($cb4Id$react)).forwardRef($af17fa27257cf90a$var$_Button);





const $428146c7c41c87b2$var$getToggleButtonStyle = ({ isActive: isActive , isDisabled: isDisabled  })=>{
    const activeStyle = {
        background: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).blue100,
        borderColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).blue600,
        '&': {
            zIndex: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).zIndexDefault + 1
        },
        '&:hover': {
            background: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).blue100
        }
    };
    const baseStyle = {
        background: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).colorWhite,
        '&:hover': {
            background: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).colorWhite,
            borderColor: isDisabled ? ($parcel$interopDefault($cb4Id$contentfulf36tokens)).gray300 : ($parcel$interopDefault($cb4Id$contentfulf36tokens)).blue600,
            zIndex: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).zIndexDefault + 1
        },
        '&:focus': {
            boxShadow: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).glowPrimary,
            zIndex: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).zIndexDefault + 2
        },
        '&:active, &:active:hover': isDisabled ? {
            background: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).colorWhite,
            borderColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).gray300,
            zIndex: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).zIndexDefault + 1
        } : {
            background: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).blue100,
            borderColor: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).blue600,
            zIndex: ($parcel$interopDefault($cb4Id$contentfulf36tokens)).zIndexDefault + 1
        }
    };
    if (isActive) return {
        ...baseStyle,
        ...activeStyle
    };
    return baseStyle;
};
var $428146c7c41c87b2$export$2e2bcd8739ae039 = ({ isActive: isActive , isDisabled: isDisabled  })=>({
        toggleButton: /*#__PURE__*/ $cb4Id$emotion.css($428146c7c41c87b2$var$getToggleButtonStyle({
            isActive: isActive,
            isDisabled: isDisabled
        }))
    })
;


function $b7ebb16856a059a7$var$_ToggleButton(props, ref) {
    const { testId: testId = 'cf-ui-toggle-button' , children: children , className: className , isDisabled: isDisabled = false , isActive: isActive = false , icon: icon , onToggle: onToggle , size: size = 'medium' , ...otherProps } = props;
    const styles = $428146c7c41c87b2$export$2e2bcd8739ae039({
        isActive: isActive,
        isDisabled: isDisabled
    });
    const handleToggle = ()=>{
        if (!isDisabled && onToggle) onToggle();
    };
    return /*#__PURE__*/ ($parcel$interopDefault($cb4Id$react)).createElement($af17fa27257cf90a$export$353f5b6fc5456de1, {
        testId: testId,
        type: "button",
        ref: ref,
        size: size,
        onClick: handleToggle,
        className: $cb4Id$emotion.cx(styles.toggleButton, className),
        startIcon: icon,
        isDisabled: isDisabled,
        "aria-pressed": isActive,
        "data-state": isActive ? 'on' : 'off',
        ...otherProps
    }, children);
}
$b7ebb16856a059a7$var$_ToggleButton.displayName = 'ToggleButton';
const $b7ebb16856a059a7$export$d2b052e7b4be1756 = /*#__PURE__*/ ($parcel$interopDefault($cb4Id$react)).forwardRef($b7ebb16856a059a7$var$_ToggleButton);






const $8fa058ece9e0fdf8$var$ICON_BUTTON_DEFAULT_TAG = 'button';
function $8fa058ece9e0fdf8$var$_IconButton(props, ref) {
    const { testId: testId = 'cf-ui-icon-button' , variant: variant = 'transparent' , icon: icon , ...otherProps } = props;
    return /*#__PURE__*/ ($parcel$interopDefault($cb4Id$react)).createElement($af17fa27257cf90a$export$353f5b6fc5456de1, {
        testId: testId,
        ref: ref,
        variant: variant,
        ...otherProps,
        startIcon: icon
    });
}
$8fa058ece9e0fdf8$var$_IconButton.displayName = 'IconButton';
const $8fa058ece9e0fdf8$export$c25acd513dcc8062 = /*#__PURE__*/ ($parcel$interopDefault($cb4Id$react)).forwardRef($8fa058ece9e0fdf8$var$_IconButton);





//# sourceMappingURL=main.js.map

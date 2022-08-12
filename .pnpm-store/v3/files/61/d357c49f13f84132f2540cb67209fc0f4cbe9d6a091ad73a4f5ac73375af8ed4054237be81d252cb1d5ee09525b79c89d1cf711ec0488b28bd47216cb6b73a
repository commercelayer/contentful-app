import {cx as $dtSHR$cx, css as $dtSHR$css} from "emotion";
import $dtSHR$react from "react";
import {Text as $dtSHR$Text} from "@contentful/f36-typography";
import {Box as $dtSHR$Box, Flex as $dtSHR$Flex} from "@contentful/f36-core";
import {AudioIcon as $dtSHR$AudioIcon, CodeIllustrationIcon as $dtSHR$CodeIllustrationIcon, ImageIcon as $dtSHR$ImageIcon, MarkupIcon as $dtSHR$MarkupIcon, PdfIcon as $dtSHR$PdfIcon, PlaintextIcon as $dtSHR$PlaintextIcon, PresentationIcon as $dtSHR$PresentationIcon, RichtextIcon as $dtSHR$RichtextIcon, SpreadsheetIcon as $dtSHR$SpreadsheetIcon, VideoIcon as $dtSHR$VideoIcon, ArchiveIcon as $dtSHR$ArchiveIcon} from "@contentful/f36-icons";
import $dtSHR$contentfulf36tokens from "@contentful/f36-tokens";










function $6f9c5a7cc9575f3b$export$d4130e73e2e8f9dd() {
    return {
        root: /*#__PURE__*/ $dtSHR$css({
            display: 'inline-block',
            width: '39px',
            height: '39px',
            'g, path': {
                fill: $dtSHR$contentfulf36tokens.gray600
            }
        })
    };
}


const $294bba6cf7661148$export$de8d5274b07acfbd = ({ type: type = 'archive' , className: className , testId: testId = 'cf-ui-asset-icon' , ...otherProps })=>{
    const styles = $6f9c5a7cc9575f3b$export$d4130e73e2e8f9dd();
    const props = {
        ...otherProps,
        testId: testId,
        className: $dtSHR$cx(styles.root, className)
    };
    switch(type){
        case 'audio':
            return /*#__PURE__*/ $dtSHR$react.createElement($dtSHR$AudioIcon, props);
        case 'code':
            return /*#__PURE__*/ $dtSHR$react.createElement($dtSHR$CodeIllustrationIcon, props);
        case 'image':
            return /*#__PURE__*/ $dtSHR$react.createElement($dtSHR$ImageIcon, props);
        case 'markup':
            return /*#__PURE__*/ $dtSHR$react.createElement($dtSHR$MarkupIcon, props);
        case 'pdf':
            return /*#__PURE__*/ $dtSHR$react.createElement($dtSHR$PdfIcon, props);
        case 'plaintext':
            return /*#__PURE__*/ $dtSHR$react.createElement($dtSHR$PlaintextIcon, props);
        case 'presentation':
            return /*#__PURE__*/ $dtSHR$react.createElement($dtSHR$PresentationIcon, props);
        case 'richtext':
            return /*#__PURE__*/ $dtSHR$react.createElement($dtSHR$RichtextIcon, props);
        case 'spreadsheet':
            return /*#__PURE__*/ $dtSHR$react.createElement($dtSHR$SpreadsheetIcon, props);
        case 'video':
            return /*#__PURE__*/ $dtSHR$react.createElement($dtSHR$VideoIcon, props);
        case 'archive':
        default:
            return /*#__PURE__*/ $dtSHR$react.createElement($dtSHR$ArchiveIcon, props);
    }
};
$294bba6cf7661148$export$de8d5274b07acfbd.displayName = 'AssetIcon';




function $dc8375c31ef26a6b$export$fa02bd03531e2fe() {
    return {
        relative: /*#__PURE__*/ $dtSHR$css({
            name: "79elbk",
            styles: "position:relative;"
        }),
        height100: /*#__PURE__*/ $dtSHR$css({
            name: "10klw3m",
            styles: "height:100%;"
        }),
        image: /*#__PURE__*/ $dtSHR$css({
            name: "1ylrs5",
            styles: "width:auto;max-width:100%;max-height:100%;"
        }),
        titleContainer: /*#__PURE__*/ $dtSHR$css({
            opacity: 0,
            transition: `opacity ${$dtSHR$contentfulf36tokens.transitionDurationDefault} ${$dtSHR$contentfulf36tokens.transitionEasingDefault}`,
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            height: '100%',
            display: 'flex',
            overflow: 'hidden',
            alignItems: 'flex-end',
            boxSizing: 'border-box',
            background: `linear-gradient(0deg, ${$dtSHR$contentfulf36tokens.gray900} 0%, transparent calc(1rem * (100 / ${$dtSHR$contentfulf36tokens.fontBaseDefault})), transparent 100% )`,
            ':hover': {
                opacity: 1
            }
        }),
        title: /*#__PURE__*/ $dtSHR$css({
            name: "4gk4ib",
            styles: "bottom:0;left:0;right:0;position:absolute;"
        })
    };
}


function $4a170a6eb7674988$var$_Asset({ className: className , src: src , status: status , testId: testId = 'cf-ui-asset' , title: title , type: type = 'image' , ...otherProps }, ref) {
    const styles = $dc8375c31ef26a6b$export$fa02bd03531e2fe();
    const isImage = src && src !== '' && type === 'image'; // Do not show image previews when publish status is archived
    const showPreview = isImage && status !== 'archived';
    return /*#__PURE__*/ $dtSHR$react.createElement($dtSHR$Box, {
        className: $dtSHR$cx(styles.relative, className),
        testId: testId,
        ref: ref,
        ...otherProps
    }, showPreview ? /*#__PURE__*/ $dtSHR$react.createElement($dtSHR$react.Fragment, null, /*#__PURE__*/ $dtSHR$react.createElement($dtSHR$Flex, {
        alignItems: "center",
        justifyContent: "center",
        className: styles.height100
    }, /*#__PURE__*/ $dtSHR$react.createElement("img", {
        className: styles.image,
        src: src,
        alt: title
    })), title && /*#__PURE__*/ $dtSHR$react.createElement("div", {
        className: styles.titleContainer
    }, /*#__PURE__*/ $dtSHR$react.createElement($dtSHR$Text, {
        className: styles.title,
        fontColor: "colorWhite",
        margin: "spacingS",
        isTruncated: true
    }, title))) : /*#__PURE__*/ $dtSHR$react.createElement($dtSHR$Flex, {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: "spacingS",
        paddingRight: "spacingS",
        className: styles.height100
    }, /*#__PURE__*/ $dtSHR$react.createElement($dtSHR$Flex, {
        marginBottom: "spacingM",
        marginTop: "spacingM",
        justifyContent: "center"
    }, /*#__PURE__*/ $dtSHR$react.createElement($294bba6cf7661148$export$de8d5274b07acfbd, {
        type: type
    })), /*#__PURE__*/ $dtSHR$react.createElement($dtSHR$Text, {
        isTruncated: true,
        marginBottom: "spacingM",
        fontColor: "gray600"
    }, title)));
}
$4a170a6eb7674988$var$_Asset.displayName = 'Asset';
const $4a170a6eb7674988$export$c413dd039085b182 = /*#__PURE__*/ $dtSHR$react.forwardRef($4a170a6eb7674988$var$_Asset);



const $c14cae86e9d474fd$export$b14ad400b1d09e0f = {
    archive: 'archive',
    audio: 'audio',
    code: 'code',
    image: 'image',
    markup: 'markup',
    pdf: 'pdf',
    plaintext: 'plaintext',
    presentation: 'presentation',
    richtext: 'richtext',
    spreadsheet: 'spreadsheet',
    video: 'video'
};
function $c14cae86e9d474fd$export$3ccaa71e0816392d(type) {
    return Object.keys($c14cae86e9d474fd$export$b14ad400b1d09e0f).includes(type);
}




export {$4a170a6eb7674988$export$c413dd039085b182 as Asset, $294bba6cf7661148$export$de8d5274b07acfbd as AssetIcon, $c14cae86e9d474fd$export$3ccaa71e0816392d as isAssetType};
//# sourceMappingURL=module.js.map

var $goRX5$emotion = require("emotion");
var $goRX5$react = require("react");
var $goRX5$contentfulf36typography = require("@contentful/f36-typography");
var $goRX5$contentfulf36core = require("@contentful/f36-core");
var $goRX5$contentfulf36icons = require("@contentful/f36-icons");
var $goRX5$contentfulf36tokens = require("@contentful/f36-tokens");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Asset", () => $ee511d6a9591eb62$export$c413dd039085b182);
$parcel$export(module.exports, "AssetIcon", () => $bdfac71418b2e6eb$export$de8d5274b07acfbd);
$parcel$export(module.exports, "isAssetType", () => $ecfcb790f927d565$export$3ccaa71e0816392d);









function $a7f01243e6d07e2f$export$d4130e73e2e8f9dd() {
    return {
        root: /*#__PURE__*/ $goRX5$emotion.css({
            display: 'inline-block',
            width: '39px',
            height: '39px',
            'g, path': {
                fill: ($parcel$interopDefault($goRX5$contentfulf36tokens)).gray600
            }
        })
    };
}


const $bdfac71418b2e6eb$export$de8d5274b07acfbd = ({ type: type = 'archive' , className: className , testId: testId = 'cf-ui-asset-icon' , ...otherProps })=>{
    const styles = $a7f01243e6d07e2f$export$d4130e73e2e8f9dd();
    const props = {
        ...otherProps,
        testId: testId,
        className: $goRX5$emotion.cx(styles.root, className)
    };
    switch(type){
        case 'audio':
            return /*#__PURE__*/ ($parcel$interopDefault($goRX5$react)).createElement($goRX5$contentfulf36icons.AudioIcon, props);
        case 'code':
            return /*#__PURE__*/ ($parcel$interopDefault($goRX5$react)).createElement($goRX5$contentfulf36icons.CodeIllustrationIcon, props);
        case 'image':
            return /*#__PURE__*/ ($parcel$interopDefault($goRX5$react)).createElement($goRX5$contentfulf36icons.ImageIcon, props);
        case 'markup':
            return /*#__PURE__*/ ($parcel$interopDefault($goRX5$react)).createElement($goRX5$contentfulf36icons.MarkupIcon, props);
        case 'pdf':
            return /*#__PURE__*/ ($parcel$interopDefault($goRX5$react)).createElement($goRX5$contentfulf36icons.PdfIcon, props);
        case 'plaintext':
            return /*#__PURE__*/ ($parcel$interopDefault($goRX5$react)).createElement($goRX5$contentfulf36icons.PlaintextIcon, props);
        case 'presentation':
            return /*#__PURE__*/ ($parcel$interopDefault($goRX5$react)).createElement($goRX5$contentfulf36icons.PresentationIcon, props);
        case 'richtext':
            return /*#__PURE__*/ ($parcel$interopDefault($goRX5$react)).createElement($goRX5$contentfulf36icons.RichtextIcon, props);
        case 'spreadsheet':
            return /*#__PURE__*/ ($parcel$interopDefault($goRX5$react)).createElement($goRX5$contentfulf36icons.SpreadsheetIcon, props);
        case 'video':
            return /*#__PURE__*/ ($parcel$interopDefault($goRX5$react)).createElement($goRX5$contentfulf36icons.VideoIcon, props);
        case 'archive':
        default:
            return /*#__PURE__*/ ($parcel$interopDefault($goRX5$react)).createElement($goRX5$contentfulf36icons.ArchiveIcon, props);
    }
};
$bdfac71418b2e6eb$export$de8d5274b07acfbd.displayName = 'AssetIcon';




function $757deda98165af5b$export$fa02bd03531e2fe() {
    return {
        relative: /*#__PURE__*/ $goRX5$emotion.css({
            name: "79elbk",
            styles: "position:relative;"
        }),
        height100: /*#__PURE__*/ $goRX5$emotion.css({
            name: "10klw3m",
            styles: "height:100%;"
        }),
        image: /*#__PURE__*/ $goRX5$emotion.css({
            name: "1ylrs5",
            styles: "width:auto;max-width:100%;max-height:100%;"
        }),
        titleContainer: /*#__PURE__*/ $goRX5$emotion.css({
            opacity: 0,
            transition: `opacity ${($parcel$interopDefault($goRX5$contentfulf36tokens)).transitionDurationDefault} ${($parcel$interopDefault($goRX5$contentfulf36tokens)).transitionEasingDefault}`,
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            height: '100%',
            display: 'flex',
            overflow: 'hidden',
            alignItems: 'flex-end',
            boxSizing: 'border-box',
            background: `linear-gradient(0deg, ${($parcel$interopDefault($goRX5$contentfulf36tokens)).gray900} 0%, transparent calc(1rem * (100 / ${($parcel$interopDefault($goRX5$contentfulf36tokens)).fontBaseDefault})), transparent 100% )`,
            ':hover': {
                opacity: 1
            }
        }),
        title: /*#__PURE__*/ $goRX5$emotion.css({
            name: "4gk4ib",
            styles: "bottom:0;left:0;right:0;position:absolute;"
        })
    };
}


function $ee511d6a9591eb62$var$_Asset({ className: className , src: src , status: status , testId: testId = 'cf-ui-asset' , title: title , type: type = 'image' , ...otherProps }, ref) {
    const styles = $757deda98165af5b$export$fa02bd03531e2fe();
    const isImage = src && src !== '' && type === 'image'; // Do not show image previews when publish status is archived
    const showPreview = isImage && status !== 'archived';
    return /*#__PURE__*/ ($parcel$interopDefault($goRX5$react)).createElement($goRX5$contentfulf36core.Box, {
        className: $goRX5$emotion.cx(styles.relative, className),
        testId: testId,
        ref: ref,
        ...otherProps
    }, showPreview ? /*#__PURE__*/ ($parcel$interopDefault($goRX5$react)).createElement(($parcel$interopDefault($goRX5$react)).Fragment, null, /*#__PURE__*/ ($parcel$interopDefault($goRX5$react)).createElement($goRX5$contentfulf36core.Flex, {
        alignItems: "center",
        justifyContent: "center",
        className: styles.height100
    }, /*#__PURE__*/ ($parcel$interopDefault($goRX5$react)).createElement("img", {
        className: styles.image,
        src: src,
        alt: title
    })), title && /*#__PURE__*/ ($parcel$interopDefault($goRX5$react)).createElement("div", {
        className: styles.titleContainer
    }, /*#__PURE__*/ ($parcel$interopDefault($goRX5$react)).createElement($goRX5$contentfulf36typography.Text, {
        className: styles.title,
        fontColor: "colorWhite",
        margin: "spacingS",
        isTruncated: true
    }, title))) : /*#__PURE__*/ ($parcel$interopDefault($goRX5$react)).createElement($goRX5$contentfulf36core.Flex, {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: "spacingS",
        paddingRight: "spacingS",
        className: styles.height100
    }, /*#__PURE__*/ ($parcel$interopDefault($goRX5$react)).createElement($goRX5$contentfulf36core.Flex, {
        marginBottom: "spacingM",
        marginTop: "spacingM",
        justifyContent: "center"
    }, /*#__PURE__*/ ($parcel$interopDefault($goRX5$react)).createElement($bdfac71418b2e6eb$export$de8d5274b07acfbd, {
        type: type
    })), /*#__PURE__*/ ($parcel$interopDefault($goRX5$react)).createElement($goRX5$contentfulf36typography.Text, {
        isTruncated: true,
        marginBottom: "spacingM",
        fontColor: "gray600"
    }, title)));
}
$ee511d6a9591eb62$var$_Asset.displayName = 'Asset';
const $ee511d6a9591eb62$export$c413dd039085b182 = /*#__PURE__*/ ($parcel$interopDefault($goRX5$react)).forwardRef($ee511d6a9591eb62$var$_Asset);



const $ecfcb790f927d565$export$b14ad400b1d09e0f = {
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
function $ecfcb790f927d565$export$3ccaa71e0816392d(type) {
    return Object.keys($ecfcb790f927d565$export$b14ad400b1d09e0f).includes(type);
}




//# sourceMappingURL=main.js.map

var $gbt2b$react = require("react");
var $gbt2b$contentfulf36core = require("@contentful/f36-core");
var $gbt2b$contentfulf36table = require("@contentful/f36-table");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "SkeletonBodyText", () => $b73b2a08349178b5$export$919fca0c481496d5);
$parcel$export(module.exports, "SkeletonContainer", () => $8e88ffccb54a3f30$export$66b8cea0c448285);
$parcel$export(module.exports, "SkeletonDisplayText", () => $43f386fc7c923d82$export$406e2958a1a2b65d);
$parcel$export(module.exports, "SkeletonImage", () => $e6046a5136031fdb$export$d72bf888bd1ed2bc);
$parcel$export(module.exports, "SkeletonRow", () => $78eceaa2147bc1c7$export$8bbcb87f63697989);
$parcel$export(module.exports, "SkeletonText", () => $041187023cd1b680$export$cb6ddd830302c2a8);


const $041187023cd1b680$export$cb6ddd830302c2a8 = ({ numberOfLines: numberOfLines = 1 , offsetLeft: offsetLeft = 0 , offsetTop: offsetTop = 0 , lineHeight: lineHeight = 21 , marginBottom: marginBottom = 20 , width: width  })=>{
    const getLineWidth = $gbt2b$react.useCallback((lastLine)=>{
        if (width) return width;
        return lastLine ? '80%' : '100%';
    }, [
        width
    ]);
    return /*#__PURE__*/ ($parcel$interopDefault($gbt2b$react)).createElement(($parcel$interopDefault($gbt2b$react)).Fragment, null, Array.from(Array(numberOfLines)).map((_, index)=>/*#__PURE__*/ ($parcel$interopDefault($gbt2b$react)).createElement("rect", {
            key: `skeleton-display-text-${index}`,
            x: offsetLeft,
            y: index * (+lineHeight + +marginBottom) + +offsetTop // eslint-disable-line @typescript-eslint/no-non-null-assertion
            ,
            rx: "0",
            ry: "0",
            width: getLineWidth(numberOfLines > 1 && numberOfLines - index === 1 // eslint-disable-line @typescript-eslint/no-non-null-assertion
            ),
            height: lineHeight
        })
    ));
};
$041187023cd1b680$export$cb6ddd830302c2a8.displayName = 'SkeletonText';


const $b73b2a08349178b5$export$919fca0c481496d5 = ({ lineHeight: lineHeight = 16 , marginBottom: marginBottom = 8 , numberOfLines: numberOfLines = 2 , offsetLeft: offsetLeft = 0 , offsetTop: offsetTop = 0 , ...otherProps })=>{
    return /*#__PURE__*/ ($parcel$interopDefault($gbt2b$react)).createElement($041187023cd1b680$export$cb6ddd830302c2a8, {
        lineHeight: lineHeight,
        marginBottom: marginBottom,
        numberOfLines: numberOfLines > 0 // eslint-disable-line @typescript-eslint/no-non-null-assertion
         ? numberOfLines : 1,
        offsetLeft: offsetLeft,
        offsetTop: offsetTop,
        ...otherProps
    });
};




const $8e88ffccb54a3f30$export$66b8cea0c448285 = ({ children: children , testId: testId = 'cf-ui-skeleton-form' , ariaLabel: ariaLabel = 'Loading component...' , width: width = '100%' , height: height = '100%' , preserveAspectRatio: preserveAspectRatio , backgroundColor: backgroundColor = '#e5ebed' , backgroundOpacity: backgroundOpacity = 1 , isAnimated: isAnimated = true , speed: speed = 2 , foregroundColor: foregroundColor = '#f7f9fa' , foregroundOpacity: foregroundOpacity = 1 , svgWidth: svgWidth = '100%' , svgHeight: svgHeight = '100%' , clipId: clipId , gradientId: gradientId , animateId: animateId , ...otherProps })=>{
    const uniqueClipId = $gbt2b$contentfulf36core.useId(clipId, 'cf-ui-skeleton-clip');
    const uniqueGradientId = $gbt2b$contentfulf36core.useId(gradientId, 'cf-ui-skeleton-clip-gradient');
    const randomAnimateId = $gbt2b$contentfulf36core.useId(undefined, 'animation');
    const uniqueAnimateId = animateId || randomAnimateId;
    return /*#__PURE__*/ ($parcel$interopDefault($gbt2b$react)).createElement($gbt2b$contentfulf36core.Box, {
        as: "svg",
        display: "block",
        role: "img",
        "aria-label": ariaLabel,
        preserveAspectRatio: preserveAspectRatio,
        width: svgWidth,
        height: svgHeight,
        testId: testId,
        ...otherProps
    }, ariaLabel ? /*#__PURE__*/ ($parcel$interopDefault($gbt2b$react)).createElement("title", null, ariaLabel) : null, /*#__PURE__*/ ($parcel$interopDefault($gbt2b$react)).createElement("rect", {
        x: "0",
        y: "0",
        width: width,
        height: height,
        clipPath: `url(#${uniqueClipId})`,
        style: {
            fill: `url(#${uniqueGradientId})`
        }
    }), /*#__PURE__*/ ($parcel$interopDefault($gbt2b$react)).createElement("defs", null, /*#__PURE__*/ ($parcel$interopDefault($gbt2b$react)).createElement("clipPath", {
        id: uniqueClipId
    }, children), /*#__PURE__*/ ($parcel$interopDefault($gbt2b$react)).createElement("linearGradient", {
        id: uniqueGradientId
    }, /*#__PURE__*/ ($parcel$interopDefault($gbt2b$react)).createElement("stop", {
        offset: "0%",
        stopColor: backgroundColor,
        stopOpacity: backgroundOpacity
    }, isAnimated && /*#__PURE__*/ ($parcel$interopDefault($gbt2b$react)).createElement("animate", {
        id: uniqueAnimateId,
        attributeName: "stop-color",
        values: `${backgroundColor}; ${foregroundColor}; ${backgroundColor}`,
        dur: `${speed}s`,
        repeatCount: "indefinite"
    })), /*#__PURE__*/ ($parcel$interopDefault($gbt2b$react)).createElement("stop", {
        offset: "50%",
        stopColor: foregroundColor,
        stopOpacity: foregroundOpacity
    }, isAnimated && /*#__PURE__*/ ($parcel$interopDefault($gbt2b$react)).createElement("animate", {
        attributeName: "stop-color",
        values: `${backgroundColor}; ${foregroundColor}; ${backgroundColor}`,
        begin: `${uniqueAnimateId}.begin+0.25s`,
        dur: `${speed}s`,
        repeatCount: "indefinite"
    })), /*#__PURE__*/ ($parcel$interopDefault($gbt2b$react)).createElement("stop", {
        offset: "100%",
        stopColor: backgroundColor,
        stopOpacity: backgroundOpacity
    }, isAnimated && /*#__PURE__*/ ($parcel$interopDefault($gbt2b$react)).createElement("animate", {
        attributeName: "stop-color",
        begin: `${uniqueAnimateId}.begin+0.5s`,
        values: `${backgroundColor}; ${foregroundColor}; ${backgroundColor}`,
        dur: `${speed}s`,
        repeatCount: "indefinite"
    })))));
};
$8e88ffccb54a3f30$export$66b8cea0c448285.displayName = 'SkeletonContainer';




const $43f386fc7c923d82$export$406e2958a1a2b65d = ({ lineHeight: lineHeight = 21 , marginBottom: marginBottom = 20 , numberOfLines: numberOfLines = 1 , offsetLeft: offsetLeft = 0 , offsetTop: offsetTop = 0 , width: width = 100 , ...otherProps })=>{
    return /*#__PURE__*/ ($parcel$interopDefault($gbt2b$react)).createElement($041187023cd1b680$export$cb6ddd830302c2a8, {
        lineHeight: lineHeight,
        marginBottom: marginBottom,
        numberOfLines: numberOfLines,
        offsetLeft: offsetLeft,
        offsetTop: offsetTop,
        width: width,
        ...otherProps
    });
};
$43f386fc7c923d82$export$406e2958a1a2b65d.displayName = 'SkeletonDisplayText';



const $e6046a5136031fdb$export$d72bf888bd1ed2bc = ({ testId: testId = 'cf-ui-skeleton-image' , offsetLeft: offsetLeft , offsetTop: offsetTop , width: width = 70 , height: height = 70 , radiusX: radiusX = 0 , radiusY: radiusY = 0 , ...otherProps })=>{
    return /*#__PURE__*/ ($parcel$interopDefault($gbt2b$react)).createElement("rect", {
        x: offsetLeft,
        y: offsetTop,
        rx: radiusX,
        ry: radiusY,
        width: width,
        height: height,
        "data-test-id": testId,
        ...otherProps
    });
};
$e6046a5136031fdb$export$d72bf888bd1ed2bc.displayName = 'SkeletonImage';








const $ce475dd116a738bd$export$46c6672a9bd39b51 = ()=>{
    return /*#__PURE__*/ ($parcel$interopDefault($gbt2b$react)).createElement($gbt2b$contentfulf36table.TableCell, null, /*#__PURE__*/ ($parcel$interopDefault($gbt2b$react)).createElement($8e88ffccb54a3f30$export$66b8cea0c448285, {
        svgHeight: 16
    }, /*#__PURE__*/ ($parcel$interopDefault($gbt2b$react)).createElement($b73b2a08349178b5$export$919fca0c481496d5, {
        numberOfLines: 1
    })));
};


const $78eceaa2147bc1c7$export$8bbcb87f63697989 = ({ columnCount: columnCount = 5 , rowCount: rowCount = 1  })=>{
    return /*#__PURE__*/ ($parcel$interopDefault($gbt2b$react)).createElement(($parcel$interopDefault($gbt2b$react)).Fragment, null, Array.from(Array(rowCount)).map((_, rowIndex)=>/*#__PURE__*/ ($parcel$interopDefault($gbt2b$react)).createElement($gbt2b$contentfulf36table.TableRow, {
            key: rowIndex
        }, Array.from(Array(columnCount)).map((_, cellIndex)=>/*#__PURE__*/ ($parcel$interopDefault($gbt2b$react)).createElement($ce475dd116a738bd$export$46c6672a9bd39b51, {
                key: cellIndex
            })
        ))
    ));
};





//# sourceMappingURL=main.js.map

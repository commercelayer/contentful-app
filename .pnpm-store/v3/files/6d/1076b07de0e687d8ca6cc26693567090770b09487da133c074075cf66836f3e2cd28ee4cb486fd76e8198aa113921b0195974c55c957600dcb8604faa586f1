import $59JSH$react, {useCallback as $59JSH$useCallback} from "react";
import {useId as $59JSH$useId, Box as $59JSH$Box} from "@contentful/f36-core";
import {TableRow as $59JSH$TableRow, TableCell as $59JSH$TableCell} from "@contentful/f36-table";



const $00f6bdd671a67129$export$cb6ddd830302c2a8 = ({ numberOfLines: numberOfLines = 1 , offsetLeft: offsetLeft = 0 , offsetTop: offsetTop = 0 , lineHeight: lineHeight = 21 , marginBottom: marginBottom = 20 , width: width  })=>{
    const getLineWidth = $59JSH$useCallback((lastLine)=>{
        if (width) return width;
        return lastLine ? '80%' : '100%';
    }, [
        width
    ]);
    return /*#__PURE__*/ $59JSH$react.createElement($59JSH$react.Fragment, null, Array.from(Array(numberOfLines)).map((_, index)=>/*#__PURE__*/ $59JSH$react.createElement("rect", {
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
$00f6bdd671a67129$export$cb6ddd830302c2a8.displayName = 'SkeletonText';


const $20cd7b984354214c$export$919fca0c481496d5 = ({ lineHeight: lineHeight = 16 , marginBottom: marginBottom = 8 , numberOfLines: numberOfLines = 2 , offsetLeft: offsetLeft = 0 , offsetTop: offsetTop = 0 , ...otherProps })=>{
    return /*#__PURE__*/ $59JSH$react.createElement($00f6bdd671a67129$export$cb6ddd830302c2a8, {
        lineHeight: lineHeight,
        marginBottom: marginBottom,
        numberOfLines: numberOfLines > 0 // eslint-disable-line @typescript-eslint/no-non-null-assertion
         ? numberOfLines : 1,
        offsetLeft: offsetLeft,
        offsetTop: offsetTop,
        ...otherProps
    });
};




const $5ce6df81e0e6093a$export$66b8cea0c448285 = ({ children: children , testId: testId = 'cf-ui-skeleton-form' , ariaLabel: ariaLabel = 'Loading component...' , width: width = '100%' , height: height = '100%' , preserveAspectRatio: preserveAspectRatio , backgroundColor: backgroundColor = '#e5ebed' , backgroundOpacity: backgroundOpacity = 1 , isAnimated: isAnimated = true , speed: speed = 2 , foregroundColor: foregroundColor = '#f7f9fa' , foregroundOpacity: foregroundOpacity = 1 , svgWidth: svgWidth = '100%' , svgHeight: svgHeight = '100%' , clipId: clipId , gradientId: gradientId , animateId: animateId , ...otherProps })=>{
    const uniqueClipId = $59JSH$useId(clipId, 'cf-ui-skeleton-clip');
    const uniqueGradientId = $59JSH$useId(gradientId, 'cf-ui-skeleton-clip-gradient');
    const randomAnimateId = $59JSH$useId(undefined, 'animation');
    const uniqueAnimateId = animateId || randomAnimateId;
    return /*#__PURE__*/ $59JSH$react.createElement($59JSH$Box, {
        as: "svg",
        display: "block",
        role: "img",
        "aria-label": ariaLabel,
        preserveAspectRatio: preserveAspectRatio,
        width: svgWidth,
        height: svgHeight,
        testId: testId,
        ...otherProps
    }, ariaLabel ? /*#__PURE__*/ $59JSH$react.createElement("title", null, ariaLabel) : null, /*#__PURE__*/ $59JSH$react.createElement("rect", {
        x: "0",
        y: "0",
        width: width,
        height: height,
        clipPath: `url(#${uniqueClipId})`,
        style: {
            fill: `url(#${uniqueGradientId})`
        }
    }), /*#__PURE__*/ $59JSH$react.createElement("defs", null, /*#__PURE__*/ $59JSH$react.createElement("clipPath", {
        id: uniqueClipId
    }, children), /*#__PURE__*/ $59JSH$react.createElement("linearGradient", {
        id: uniqueGradientId
    }, /*#__PURE__*/ $59JSH$react.createElement("stop", {
        offset: "0%",
        stopColor: backgroundColor,
        stopOpacity: backgroundOpacity
    }, isAnimated && /*#__PURE__*/ $59JSH$react.createElement("animate", {
        id: uniqueAnimateId,
        attributeName: "stop-color",
        values: `${backgroundColor}; ${foregroundColor}; ${backgroundColor}`,
        dur: `${speed}s`,
        repeatCount: "indefinite"
    })), /*#__PURE__*/ $59JSH$react.createElement("stop", {
        offset: "50%",
        stopColor: foregroundColor,
        stopOpacity: foregroundOpacity
    }, isAnimated && /*#__PURE__*/ $59JSH$react.createElement("animate", {
        attributeName: "stop-color",
        values: `${backgroundColor}; ${foregroundColor}; ${backgroundColor}`,
        begin: `${uniqueAnimateId}.begin+0.25s`,
        dur: `${speed}s`,
        repeatCount: "indefinite"
    })), /*#__PURE__*/ $59JSH$react.createElement("stop", {
        offset: "100%",
        stopColor: backgroundColor,
        stopOpacity: backgroundOpacity
    }, isAnimated && /*#__PURE__*/ $59JSH$react.createElement("animate", {
        attributeName: "stop-color",
        begin: `${uniqueAnimateId}.begin+0.5s`,
        values: `${backgroundColor}; ${foregroundColor}; ${backgroundColor}`,
        dur: `${speed}s`,
        repeatCount: "indefinite"
    })))));
};
$5ce6df81e0e6093a$export$66b8cea0c448285.displayName = 'SkeletonContainer';




const $8d8b0c86f35f77bf$export$406e2958a1a2b65d = ({ lineHeight: lineHeight = 21 , marginBottom: marginBottom = 20 , numberOfLines: numberOfLines = 1 , offsetLeft: offsetLeft = 0 , offsetTop: offsetTop = 0 , width: width = 100 , ...otherProps })=>{
    return /*#__PURE__*/ $59JSH$react.createElement($00f6bdd671a67129$export$cb6ddd830302c2a8, {
        lineHeight: lineHeight,
        marginBottom: marginBottom,
        numberOfLines: numberOfLines,
        offsetLeft: offsetLeft,
        offsetTop: offsetTop,
        width: width,
        ...otherProps
    });
};
$8d8b0c86f35f77bf$export$406e2958a1a2b65d.displayName = 'SkeletonDisplayText';



const $fb0ca3c3a071df41$export$d72bf888bd1ed2bc = ({ testId: testId = 'cf-ui-skeleton-image' , offsetLeft: offsetLeft , offsetTop: offsetTop , width: width = 70 , height: height = 70 , radiusX: radiusX = 0 , radiusY: radiusY = 0 , ...otherProps })=>{
    return /*#__PURE__*/ $59JSH$react.createElement("rect", {
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
$fb0ca3c3a071df41$export$d72bf888bd1ed2bc.displayName = 'SkeletonImage';








const $30c71ab4212f826c$export$46c6672a9bd39b51 = ()=>{
    return /*#__PURE__*/ $59JSH$react.createElement($59JSH$TableCell, null, /*#__PURE__*/ $59JSH$react.createElement($5ce6df81e0e6093a$export$66b8cea0c448285, {
        svgHeight: 16
    }, /*#__PURE__*/ $59JSH$react.createElement($20cd7b984354214c$export$919fca0c481496d5, {
        numberOfLines: 1
    })));
};


const $e08101ed77535408$export$8bbcb87f63697989 = ({ columnCount: columnCount = 5 , rowCount: rowCount = 1  })=>{
    return /*#__PURE__*/ $59JSH$react.createElement($59JSH$react.Fragment, null, Array.from(Array(rowCount)).map((_, rowIndex)=>/*#__PURE__*/ $59JSH$react.createElement($59JSH$TableRow, {
            key: rowIndex
        }, Array.from(Array(columnCount)).map((_, cellIndex)=>/*#__PURE__*/ $59JSH$react.createElement($30c71ab4212f826c$export$46c6672a9bd39b51, {
                key: cellIndex
            })
        ))
    ));
};





export {$20cd7b984354214c$export$919fca0c481496d5 as SkeletonBodyText, $5ce6df81e0e6093a$export$66b8cea0c448285 as SkeletonContainer, $8d8b0c86f35f77bf$export$406e2958a1a2b65d as SkeletonDisplayText, $fb0ca3c3a071df41$export$d72bf888bd1ed2bc as SkeletonImage, $e08101ed77535408$export$8bbcb87f63697989 as SkeletonRow, $00f6bdd671a67129$export$cb6ddd830302c2a8 as SkeletonText};
//# sourceMappingURL=module.js.map

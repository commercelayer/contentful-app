import {useRef as $6KSAN$useRef, useEffect as $6KSAN$useEffect, useCallback as $6KSAN$useCallback} from "react";
import {createPortal as $6KSAN$createPortal} from "react-dom";



function $ff31c9f35937f52f$export$602eac185826482c({ children: children , container: containerElement  }) {
    const container = $6KSAN$useRef(containerElement);
    const portal = $6KSAN$useRef(document.createElement('div'));
    $6KSAN$useEffect(()=>{
        if (!container.current) container.current = document.body;
        const portalContainer = portal.current;
        portalContainer.setAttribute('data-cf-ui-portal', '');
        container.current.appendChild(portalContainer);
        return ()=>{
            if (container.current) container.current.removeChild(portalContainer);
        };
    }, []);
    return portal.current ? /*#__PURE__*/ $6KSAN$createPortal(children, portal.current) : null;
}



const $95440ece1fedb657$export$8f71654801c2f7cd = (props)=>{
    const { ref: ref , keys: keys , event: event = 'keydown'  } = props;
    let element = document;
    const handleKeyEvent = $6KSAN$useCallback((e)=>{
        const isKey = Object.prototype.hasOwnProperty.call(keys, e.key);
        if (isKey) keys[e.key](e);
    }, [
        keys
    ]);
    $6KSAN$useEffect(()=>{
        if (ref && ref.current) element = ref.current;
        element.addEventListener(event, handleKeyEvent);
        return ()=>{
            element.removeEventListener(event, handleKeyEvent);
        };
    }, [
        event,
        handleKeyEvent
    ]);
};


function $cc3d205d0a9a62a1$export$eff4f407bb3643a(base, match) {
    const matchResult = {
        before: '',
        match: '',
        after: ''
    };
    const regex = new RegExp(`(?<before>.*?)(?<match>${match})(?<after>.*)`, 'i');
    const matches = base.match(regex);
    if (matches) {
        matchResult.before = matches.groups.before;
        matchResult.match = matches.groups.match;
        matchResult.after = matches.groups.after;
    }
    return matchResult;
}




export {$ff31c9f35937f52f$export$602eac185826482c as Portal, $95440ece1fedb657$export$8f71654801c2f7cd as useKeyboard, $cc3d205d0a9a62a1$export$eff4f407bb3643a as getStringMatch};
//# sourceMappingURL=module.js.map

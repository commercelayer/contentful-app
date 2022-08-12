var $jeJr1$react = require("react");
var $jeJr1$reactdom = require("react-dom");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Portal", () => $b2f7c328a8bc89c1$export$602eac185826482c);
$parcel$export(module.exports, "useKeyboard", () => $7d270255de91b51a$export$8f71654801c2f7cd);
$parcel$export(module.exports, "getStringMatch", () => $31ff73dfaff741ad$export$eff4f407bb3643a);


function $b2f7c328a8bc89c1$export$602eac185826482c({ children: children , container: containerElement  }) {
    const container = $jeJr1$react.useRef(containerElement);
    const portal = $jeJr1$react.useRef(document.createElement('div'));
    $jeJr1$react.useEffect(()=>{
        if (!container.current) container.current = document.body;
        const portalContainer = portal.current;
        portalContainer.setAttribute('data-cf-ui-portal', '');
        container.current.appendChild(portalContainer);
        return ()=>{
            if (container.current) container.current.removeChild(portalContainer);
        };
    }, []);
    return portal.current ? /*#__PURE__*/ $jeJr1$reactdom.createPortal(children, portal.current) : null;
}



const $7d270255de91b51a$export$8f71654801c2f7cd = (props)=>{
    const { ref: ref , keys: keys , event: event = 'keydown'  } = props;
    let element = document;
    const handleKeyEvent = $jeJr1$react.useCallback((e)=>{
        const isKey = Object.prototype.hasOwnProperty.call(keys, e.key);
        if (isKey) keys[e.key](e);
    }, [
        keys
    ]);
    $jeJr1$react.useEffect(()=>{
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


function $31ff73dfaff741ad$export$eff4f407bb3643a(base, match) {
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




//# sourceMappingURL=main.js.map

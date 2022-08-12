import { MutableRefObject } from "react";
export interface PortalProps {
    children: React.ReactElement;
    /**
     * Container element for Portal
     */
    container?: Document | HTMLElement;
}
export function Portal({ children, container: containerElement, }: PortalProps): React.ReactPortal | null;
export interface UseKeyboardProps {
    /**
     * Object of key names and handlers defines which key to look for i.e. `ArrowUp`, `Escape`, `Shift`
     * value is a callback function to be called when key matches
     */
    keys: {
        [key: string]: (e: KeyboardEvent) => void;
    };
    /**
     * Defines the attached event type
     * @default 'keydown'
     */
    event?: 'keyup' | 'keypress' | 'keydown';
    /**
     * React reference to attach the event to its current element
     */
    ref?: MutableRefObject<HTMLElement>;
}
/**
 *
 * @description hook to attach a handler keyboard event listener to `document` or `HTMLElements` with garbage collection
 * @example
 * useKeyboard({
 *  event: 'keydown', // Optional, default is `keydown`
 *  ref: yourReactRef, // Optional, by default event is attached to document
 *  keys: {
 *    ArrowUp: (e) => handleArrowUp(e),
 *    Tab: (e) => handleTab(e)
 *  }
 * })
 */
export const useKeyboard: (props: UseKeyboardProps) => void;
interface MatchObj {
    before: string;
    match: string;
    after: string;
}
/**
 * Function that can be used to find a substring inside another string.
 * It needs two strings, the second one will be used in a Regex expression
 * to be matched to the first one.
 * The function will return an object containing the match, what comes before the match,
 * and what comes after the match in the base string
 *
 * @param base
 * @param match
 */
export function getStringMatch(base: string, match: string): MatchObj;

//# sourceMappingURL=types.d.ts.map

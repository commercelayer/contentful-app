import { ConnectMessage, KnownSDK } from './types';
import { Channel } from './channel';
export declare function createInitializer(currentGlobal: typeof globalThis, apiCreator: (channel: Channel, data: ConnectMessage, currentGlobal: typeof globalThis) => KnownSDK): (initCb: (sdk: KnownSDK, customSdk: any) => any, { makeCustomApi, supressIframeWarning, }?: {
    makeCustomApi?: Function | undefined;
    supressIframeWarning?: boolean | undefined;
}) => void;

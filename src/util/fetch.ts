import * as ponyfill from 'cross-fetch';

export const HAS_NATIVE_FETCH = typeof globalThis.fetch !== 'undefined';

export const fetch = HAS_NATIVE_FETCH ? globalThis.fetch : ponyfill.default;
export const Request = HAS_NATIVE_FETCH ? globalThis.Request : ponyfill.Request;

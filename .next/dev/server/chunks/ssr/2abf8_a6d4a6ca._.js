module.exports = [
"[project]/Desktop/MedRelief/medrelief.com/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"); //# sourceMappingURL=server-reference.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/applicationIn.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ApplicationInSerializer = void 0;
exports.ApplicationInSerializer = {
    _fromJsonObject (object) {
        return {
            metadata: object["metadata"],
            name: object["name"],
            rateLimit: object["rateLimit"],
            uid: object["uid"]
        };
    },
    _toJsonObject (self) {
        return {
            metadata: self.metadata,
            name: self.name,
            rateLimit: self.rateLimit,
            uid: self.uid
        };
    }
}; //# sourceMappingURL=applicationIn.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/applicationOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ApplicationOutSerializer = void 0;
exports.ApplicationOutSerializer = {
    _fromJsonObject (object) {
        return {
            createdAt: new Date(object["createdAt"]),
            id: object["id"],
            metadata: object["metadata"],
            name: object["name"],
            rateLimit: object["rateLimit"],
            uid: object["uid"],
            updatedAt: new Date(object["updatedAt"])
        };
    },
    _toJsonObject (self) {
        return {
            createdAt: self.createdAt,
            id: self.id,
            metadata: self.metadata,
            name: self.name,
            rateLimit: self.rateLimit,
            uid: self.uid,
            updatedAt: self.updatedAt
        };
    }
}; //# sourceMappingURL=applicationOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/applicationPatch.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ApplicationPatchSerializer = void 0;
exports.ApplicationPatchSerializer = {
    _fromJsonObject (object) {
        return {
            metadata: object["metadata"],
            name: object["name"],
            rateLimit: object["rateLimit"],
            uid: object["uid"]
        };
    },
    _toJsonObject (self) {
        return {
            metadata: self.metadata,
            name: self.name,
            rateLimit: self.rateLimit,
            uid: self.uid
        };
    }
}; //# sourceMappingURL=applicationPatch.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/listResponseApplicationOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListResponseApplicationOutSerializer = void 0;
const applicationOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/applicationOut.js [app-rsc] (ecmascript)");
exports.ListResponseApplicationOutSerializer = {
    _fromJsonObject (object) {
        return {
            data: object["data"].map((item)=>applicationOut_1.ApplicationOutSerializer._fromJsonObject(item)),
            done: object["done"],
            iterator: object["iterator"],
            prevIterator: object["prevIterator"]
        };
    },
    _toJsonObject (self) {
        return {
            data: self.data.map((item)=>applicationOut_1.ApplicationOutSerializer._toJsonObject(item)),
            done: self.done,
            iterator: self.iterator,
            prevIterator: self.prevIterator
        };
    }
}; //# sourceMappingURL=listResponseApplicationOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/util.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ApiException = void 0;
class ApiException extends Error {
    constructor(code, body, headers){
        super(`HTTP-Code: ${code}\nHeaders: ${JSON.stringify(headers)}`);
        this.code = code;
        this.body = body;
        this.headers = {};
        headers.forEach((value, name)=>{
            this.headers[name] = value;
        });
    }
}
exports.ApiException = ApiException; //# sourceMappingURL=util.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/max.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = 'ffffffff-ffff-ffff-ffff-ffffffffffff';
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/nil.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = '00000000-0000-0000-0000-000000000000';
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/regex.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/validate.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/regex.js [app-rsc] (ecmascript)");
;
function validate(uuid) {
    return typeof uuid === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].test(uuid);
}
const __TURBOPACK__default__export__ = validate;
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/parse.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/validate.js [app-rsc] (ecmascript)");
;
function parse(uuid) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Invalid UUID');
    }
    let v;
    const arr = new Uint8Array(16);
    // Parse ########-....-....-....-............
    arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
    arr[1] = v >>> 16 & 0xff;
    arr[2] = v >>> 8 & 0xff;
    arr[3] = v & 0xff;
    // Parse ........-####-....-....-............
    arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
    arr[5] = v & 0xff;
    // Parse ........-....-####-....-............
    arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
    arr[7] = v & 0xff;
    // Parse ........-....-....-####-............
    arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
    arr[9] = v & 0xff;
    // Parse ........-....-....-....-############
    // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)
    arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
    arr[11] = v / 0x100000000 & 0xff;
    arr[12] = v >>> 24 & 0xff;
    arr[13] = v >>> 16 & 0xff;
    arr[14] = v >>> 8 & 0xff;
    arr[15] = v & 0xff;
    return arr;
}
const __TURBOPACK__default__export__ = parse;
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "unsafeStringify",
    ()=>unsafeStringify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/validate.js [app-rsc] (ecmascript)");
;
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i){
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    //
    // Note to future-self: No, you can't remove the `toLowerCase()` call.
    // REF: https://github.com/uuidjs/uuid/pull/677#issuecomment-1757351351
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
const __TURBOPACK__default__export__ = stringify;
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/rng.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>rng
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate
let poolPtr = rnds8Pool.length;
function rng() {
    if (poolPtr > rnds8Pool.length - 16) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].randomFillSync(rnds8Pool);
        poolPtr = 0;
    }
    return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/v1.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/rng.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript)");
;
;
// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;
let _clockseq;
// Previous uuid creation time
let _lastMSecs = 0;
let _lastNSecs = 0;
// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
    let i = buf && offset || 0;
    const b = buf || new Array(16);
    options = options || {};
    let node = options.node;
    let clockseq = options.clockseq;
    // v1 only: Use cached `node` and `clockseq` values
    if (!options._v6) {
        if (!node) {
            node = _nodeId;
        }
        if (clockseq == null) {
            clockseq = _clockseq;
        }
    }
    // Handle cases where we need entropy.  We do this lazily to minimize issues
    // related to insufficient system entropy.  See #189
    if (node == null || clockseq == null) {
        const seedBytes = options.random || (options.rng || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        // Randomize node
        if (node == null) {
            node = [
                seedBytes[0],
                seedBytes[1],
                seedBytes[2],
                seedBytes[3],
                seedBytes[4],
                seedBytes[5]
            ];
            // v1 only: cache node value for reuse
            if (!_nodeId && !options._v6) {
                // per RFC4122 4.5: Set MAC multicast bit (v1 only)
                node[0] |= 0x01; // Set multicast bit
                _nodeId = node;
            }
        }
        // Randomize clockseq
        if (clockseq == null) {
            // Per 4.2.2, randomize (14 bit) clockseq
            clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
            if (_clockseq === undefined && !options._v6) {
                _clockseq = clockseq;
            }
        }
    }
    // v1 & v6 timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so time is
    // handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    let msecs = options.msecs !== undefined ? options.msecs : Date.now();
    // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;
    // Time since last uuid creation (in msecs)
    const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000;
    // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq === undefined) {
        clockseq = clockseq + 1 & 0x3fff;
    }
    // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
        nsecs = 0;
    }
    // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) {
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    }
    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq;
    // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000;
    // `time_low`
    const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff;
    // `time_mid`
    const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff;
    // `time_high_and_version`
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff;
    // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 0x80;
    // `clock_seq_low`
    b[i++] = clockseq & 0xff;
    // `node`
    for(let n = 0; n < 6; ++n){
        b[i + n] = node[n];
    }
    return buf || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unsafeStringify"])(b);
}
const __TURBOPACK__default__export__ = v1;
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/v1ToV6.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>v1ToV6
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/parse.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript)");
;
;
function v1ToV6(uuid) {
    const v1Bytes = typeof uuid === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(uuid) : uuid;
    const v6Bytes = _v1ToV6(v1Bytes);
    return typeof uuid === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unsafeStringify"])(v6Bytes) : v6Bytes;
}
// Do the field transformation needed for v1 -> v6
function _v1ToV6(v1Bytes, randomize = false) {
    return Uint8Array.of((v1Bytes[6] & 0x0f) << 4 | v1Bytes[7] >> 4 & 0x0f, (v1Bytes[7] & 0x0f) << 4 | (v1Bytes[4] & 0xf0) >> 4, (v1Bytes[4] & 0x0f) << 4 | (v1Bytes[5] & 0xf0) >> 4, (v1Bytes[5] & 0x0f) << 4 | (v1Bytes[0] & 0xf0) >> 4, (v1Bytes[0] & 0x0f) << 4 | (v1Bytes[1] & 0xf0) >> 4, (v1Bytes[1] & 0x0f) << 4 | (v1Bytes[2] & 0xf0) >> 4, 0x60 | v1Bytes[2] & 0x0f, v1Bytes[3], v1Bytes[8], v1Bytes[9], v1Bytes[10], v1Bytes[11], v1Bytes[12], v1Bytes[13], v1Bytes[14], v1Bytes[15]);
}
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/v35.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DNS",
    ()=>DNS,
    "URL",
    ()=>URL,
    "default",
    ()=>v35
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/parse.js [app-rsc] (ecmascript)");
;
;
function stringToBytes(str) {
    str = unescape(encodeURIComponent(str)); // UTF8 escape
    const bytes = [];
    for(let i = 0; i < str.length; ++i){
        bytes.push(str.charCodeAt(i));
    }
    return bytes;
}
const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function v35(name, version, hashfunc) {
    function generateUUID(value, namespace, buf, offset) {
        var _namespace;
        if (typeof value === 'string') {
            value = stringToBytes(value);
        }
        if (typeof namespace === 'string') {
            namespace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(namespace);
        }
        if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
            throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
        }
        // Compute hash of namespace and value, Per 4.3
        // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
        // hashfunc([...namespace, ... value])`
        let bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 0x0f | version;
        bytes[8] = bytes[8] & 0x3f | 0x80;
        if (buf) {
            offset = offset || 0;
            for(let i = 0; i < 16; ++i){
                buf[offset + i] = bytes[i];
            }
            return buf;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unsafeStringify"])(bytes);
    }
    // Function#name is not settable on some platforms (#270)
    try {
        generateUUID.name = name;
    } catch (err) {}
    // For CommonJS default export support
    generateUUID.DNS = DNS;
    generateUUID.URL = URL;
    return generateUUID;
}
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/md5.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
function md5(bytes) {
    if (Array.isArray(bytes)) {
        bytes = Buffer.from(bytes);
    } else if (typeof bytes === 'string') {
        bytes = Buffer.from(bytes, 'utf8');
    }
    return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].createHash('md5').update(bytes).digest();
}
const __TURBOPACK__default__export__ = md5;
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/v3.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v35$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/v35.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$md5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/md5.js [app-rsc] (ecmascript)");
;
;
const v3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v35$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])('v3', 0x30, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$md5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = v3;
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/native.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
const __TURBOPACK__default__export__ = {
    randomUUID: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].randomUUID
};
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/v4.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$native$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/native.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/rng.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript)");
;
;
;
function v4(options, buf, offset) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$native$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].randomUUID && !buf && !options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$native$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].randomUUID();
    }
    options = options || {};
    const rnds = options.random || (options.rng || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80;
    // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i){
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unsafeStringify"])(rnds);
}
const __TURBOPACK__default__export__ = v4;
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/sha1.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
function sha1(bytes) {
    if (Array.isArray(bytes)) {
        bytes = Buffer.from(bytes);
    } else if (typeof bytes === 'string') {
        bytes = Buffer.from(bytes, 'utf8');
    }
    return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].createHash('sha1').update(bytes).digest();
}
const __TURBOPACK__default__export__ = sha1;
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/v5.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v35$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/v35.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$sha1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/sha1.js [app-rsc] (ecmascript)");
;
;
const v5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v35$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])('v5', 0x50, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$sha1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = v5;
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/v6.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>v6
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/v1.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v1ToV6$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/v1ToV6.js [app-rsc] (ecmascript)");
;
;
;
function v6(options = {}, buf, offset = 0) {
    // v6 is v1 with different field layout, so we start with a v1 UUID, albeit
    // with slightly different behavior around how the clock_seq and node fields
    // are randomized, which is why we call v1 with _v6: true.
    let bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
        ...options,
        _v6: true
    }, new Uint8Array(16));
    // Reorder the fields to v6 layout.
    bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v1ToV6$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(bytes);
    // Return as a byte array if requested
    if (buf) {
        for(let i = 0; i < 16; i++){
            buf[offset + i] = bytes[i];
        }
        return buf;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unsafeStringify"])(bytes);
}
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/v6ToV1.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>v6ToV1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/parse.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript)");
;
;
function v6ToV1(uuid) {
    const v6Bytes = typeof uuid === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(uuid) : uuid;
    const v1Bytes = _v6ToV1(v6Bytes);
    return typeof uuid === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unsafeStringify"])(v1Bytes) : v1Bytes;
}
// Do the field transformation needed for v6 -> v1
function _v6ToV1(v6Bytes) {
    return Uint8Array.of((v6Bytes[3] & 0x0f) << 4 | v6Bytes[4] >> 4 & 0x0f, (v6Bytes[4] & 0x0f) << 4 | (v6Bytes[5] & 0xf0) >> 4, (v6Bytes[5] & 0x0f) << 4 | v6Bytes[6] & 0x0f, v6Bytes[7], (v6Bytes[1] & 0x0f) << 4 | (v6Bytes[2] & 0xf0) >> 4, (v6Bytes[2] & 0x0f) << 4 | (v6Bytes[3] & 0xf0) >> 4, 0x10 | (v6Bytes[0] & 0xf0) >> 4, (v6Bytes[0] & 0x0f) << 4 | (v6Bytes[1] & 0xf0) >> 4, v6Bytes[8], v6Bytes[9], v6Bytes[10], v6Bytes[11], v6Bytes[12], v6Bytes[13], v6Bytes[14], v6Bytes[15]);
}
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/v7.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/rng.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript)");
;
;
/**
 * UUID V7 - Unix Epoch time-based UUID
 *
 * The IETF has published RFC9562, introducing 3 new UUID versions (6,7,8). This
 * implementation of V7 is based on the accepted, though not yet approved,
 * revisions.
 *
 * RFC 9562:https://www.rfc-editor.org/rfc/rfc9562.html Universally Unique
 * IDentifiers (UUIDs)

 *
 * Sample V7 value:
 * https://www.rfc-editor.org/rfc/rfc9562.html#name-example-of-a-uuidv7-value
 *
 * Monotonic Bit Layout: RFC rfc9562.6.2 Method 1, Dedicated Counter Bits ref:
 *     https://www.rfc-editor.org/rfc/rfc9562.html#section-6.2-5.1
 *
 *   0                   1                   2                   3 0 1 2 3 4 5 6
 *   7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  |                          unix_ts_ms                           |
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  |          unix_ts_ms           |  ver  |        seq_hi         |
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  |var|               seq_low               |        rand         |
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  |                             rand                              |
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *
 * seq is a 31 bit serialized counter; comprised of 12 bit seq_hi and 19 bit
 * seq_low, and randomly initialized upon timestamp change. 31 bit counter size
 * was selected as any bitwise operations in node are done as _signed_ 32 bit
 * ints. we exclude the sign bit.
 */ let _seqLow = null;
let _seqHigh = null;
let _msecs = 0;
function v7(options, buf, offset) {
    options = options || {};
    // initialize buffer and pointer
    let i = buf && offset || 0;
    const b = buf || new Uint8Array(16);
    // rnds is Uint8Array(16) filled with random bytes
    const rnds = options.random || (options.rng || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    // milliseconds since unix epoch, 1970-01-01 00:00
    const msecs = options.msecs !== undefined ? options.msecs : Date.now();
    // seq is user provided 31 bit counter
    let seq = options.seq !== undefined ? options.seq : null;
    // initialize local seq high/low parts
    let seqHigh = _seqHigh;
    let seqLow = _seqLow;
    // check if clock has advanced and user has not provided msecs
    if (msecs > _msecs && options.msecs === undefined) {
        _msecs = msecs;
        // unless user provided seq, reset seq parts
        if (seq !== null) {
            seqHigh = null;
            seqLow = null;
        }
    }
    // if we have a user provided seq
    if (seq !== null) {
        // trim provided seq to 31 bits of value, avoiding overflow
        if (seq > 0x7fffffff) {
            seq = 0x7fffffff;
        }
        // split provided seq into high/low parts
        seqHigh = seq >>> 19 & 0xfff;
        seqLow = seq & 0x7ffff;
    }
    // randomly initialize seq
    if (seqHigh === null || seqLow === null) {
        seqHigh = rnds[6] & 0x7f;
        seqHigh = seqHigh << 8 | rnds[7];
        seqLow = rnds[8] & 0x3f; // pad for var
        seqLow = seqLow << 8 | rnds[9];
        seqLow = seqLow << 5 | rnds[10] >>> 3;
    }
    // increment seq if within msecs window
    if (msecs + 10000 > _msecs && seq === null) {
        if (++seqLow > 0x7ffff) {
            seqLow = 0;
            if (++seqHigh > 0xfff) {
                seqHigh = 0;
                // increment internal _msecs. this allows us to continue incrementing
                // while staying monotonic. Note, once we hit 10k milliseconds beyond system
                // clock, we will reset breaking monotonicity (after (2^31)*10000 generations)
                _msecs++;
            }
        }
    } else {
        // resetting; we have advanced more than
        // 10k milliseconds beyond system clock
        _msecs = msecs;
    }
    _seqHigh = seqHigh;
    _seqLow = seqLow;
    // [bytes 0-5] 48 bits of local timestamp
    b[i++] = _msecs / 0x10000000000 & 0xff;
    b[i++] = _msecs / 0x100000000 & 0xff;
    b[i++] = _msecs / 0x1000000 & 0xff;
    b[i++] = _msecs / 0x10000 & 0xff;
    b[i++] = _msecs / 0x100 & 0xff;
    b[i++] = _msecs & 0xff;
    // [byte 6] - set 4 bits of version (7) with first 4 bits seq_hi
    b[i++] = seqHigh >>> 4 & 0x0f | 0x70;
    // [byte 7] remaining 8 bits of seq_hi
    b[i++] = seqHigh & 0xff;
    // [byte 8] - variant (2 bits), first 6 bits seq_low
    b[i++] = seqLow >>> 13 & 0x3f | 0x80;
    // [byte 9] 8 bits seq_low
    b[i++] = seqLow >>> 5 & 0xff;
    // [byte 10] remaining 5 bits seq_low, 3 bits random
    b[i++] = seqLow << 3 & 0xff | rnds[10] & 0x07;
    // [bytes 11-15] always random
    b[i++] = rnds[11];
    b[i++] = rnds[12];
    b[i++] = rnds[13];
    b[i++] = rnds[14];
    b[i++] = rnds[15];
    return buf || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unsafeStringify"])(b);
}
const __TURBOPACK__default__export__ = v7;
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/version.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/validate.js [app-rsc] (ecmascript)");
;
function version(uuid) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Invalid UUID');
    }
    return parseInt(uuid.slice(14, 15), 16);
}
const __TURBOPACK__default__export__ = version;
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAX",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$max$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "NIL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$nil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "parse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "stringify",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "v1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "v1ToV6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v1ToV6$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "v3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v3$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "v4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "v5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "v6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v6$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "v6ToV1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v6ToV1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "v7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v7$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "validate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "version",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$max$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/max.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$nil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/nil.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/parse.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/v1.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v1ToV6$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/v1ToV6.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v3$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/v3.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/v4.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/v5.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v6$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/v6.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v6ToV1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/v6ToV1.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v7$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/v7.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/validate.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/version.js [app-rsc] (ecmascript)");
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/request.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __awaiter = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SvixRequest = exports.HttpMethod = exports.LIB_VERSION = void 0;
const util_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/util.js [app-rsc] (ecmascript)");
const uuid_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/uuid/dist/esm-node/index.js [app-rsc] (ecmascript)");
exports.LIB_VERSION = "1.76.1";
const USER_AGENT = `svix-libs/${exports.LIB_VERSION}/javascript`;
var HttpMethod;
(function(HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["HEAD"] = "HEAD";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["DELETE"] = "DELETE";
    HttpMethod["CONNECT"] = "CONNECT";
    HttpMethod["OPTIONS"] = "OPTIONS";
    HttpMethod["TRACE"] = "TRACE";
    HttpMethod["PATCH"] = "PATCH";
})(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));
class SvixRequest {
    constructor(method, path){
        this.method = method;
        this.path = path;
        this.queryParams = {};
        this.headerParams = {};
    }
    setPathParam(name, value) {
        const newPath = this.path.replace(`{${name}}`, encodeURIComponent(value));
        if (this.path === newPath) {
            throw new Error(`path parameter ${name} not found`);
        }
        this.path = newPath;
    }
    setQueryParam(name, value) {
        if (value === undefined || value === null) {
            return;
        }
        if (typeof value === "string") {
            this.queryParams[name] = value;
        } else if (typeof value === "boolean" || typeof value === "number") {
            this.queryParams[name] = value.toString();
        } else if (value instanceof Date) {
            this.queryParams[name] = value.toISOString();
        } else if (value instanceof Array) {
            if (value.length > 0) {
                this.queryParams[name] = value.join(",");
            }
        } else {
            const _assert_unreachable = value;
            throw new Error(`query parameter ${name} has unsupported type`);
        }
    }
    setHeaderParam(name, value) {
        if (value === undefined) {
            return;
        }
        this.headerParams[name] = value;
    }
    setBody(value) {
        this.body = JSON.stringify(value);
    }
    send(ctx, parseResponseBody) {
        return __awaiter(this, void 0, void 0, function*() {
            const response = yield this.sendInner(ctx);
            if (response.status == 204) {
                return null;
            }
            const responseBody = yield response.text();
            return parseResponseBody(JSON.parse(responseBody));
        });
    }
    sendNoResponseBody(ctx) {
        return __awaiter(this, void 0, void 0, function*() {
            yield this.sendInner(ctx);
        });
    }
    sendInner(ctx) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function*() {
            const url = new URL(ctx.baseUrl + this.path);
            for (const [name, value] of Object.entries(this.queryParams)){
                url.searchParams.set(name, value);
            }
            if (this.headerParams["idempotency-key"] === undefined && this.method.toUpperCase() === "POST") {
                this.headerParams["idempotency-key"] = "auto_" + (0, uuid_1.v4)();
            }
            const randomId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
            if (this.body != null) {
                this.headerParams["content-type"] = "application/json";
            }
            const isCredentialsSupported = "credentials" in Request.prototype;
            const response = yield sendWithRetry(url, {
                method: this.method.toString(),
                body: this.body,
                headers: Object.assign({
                    accept: "application/json, */*;q=0.8",
                    authorization: `Bearer ${ctx.token}`,
                    "user-agent": USER_AGENT,
                    "svix-req-id": randomId.toString()
                }, this.headerParams),
                credentials: isCredentialsSupported ? "same-origin" : undefined,
                signal: ctx.timeout !== undefined ? AbortSignal.timeout(ctx.timeout) : undefined
            }, ctx.retryScheduleInMs, (_a = ctx.retryScheduleInMs) === null || _a === void 0 ? void 0 : _a[0], ((_b = ctx.retryScheduleInMs) === null || _b === void 0 ? void 0 : _b.length) || ctx.numRetries);
            return filterResponseForErrors(response);
        });
    }
}
exports.SvixRequest = SvixRequest;
function filterResponseForErrors(response) {
    return __awaiter(this, void 0, void 0, function*() {
        if (response.status < 300) {
            return response;
        }
        const responseBody = yield response.text();
        if (response.status === 422) {
            throw new util_1.ApiException(response.status, JSON.parse(responseBody), response.headers);
        }
        if (response.status >= 400 && response.status <= 499) {
            throw new util_1.ApiException(response.status, JSON.parse(responseBody), response.headers);
        }
        throw new util_1.ApiException(response.status, responseBody, response.headers);
    });
}
function sendWithRetry(url, init, retryScheduleInMs, nextInterval = 50, triesLeft = 2, retryCount = 1) {
    return __awaiter(this, void 0, void 0, function*() {
        const sleep = (interval)=>new Promise((resolve)=>setTimeout(resolve, interval));
        try {
            const response = yield fetch(url, init);
            if (triesLeft <= 0 || response.status < 500) {
                return response;
            }
        } catch (e) {
            if (triesLeft <= 0) {
                throw e;
            }
        }
        yield sleep(nextInterval);
        init.headers["svix-retry-count"] = retryCount.toString();
        nextInterval = (retryScheduleInMs === null || retryScheduleInMs === void 0 ? void 0 : retryScheduleInMs[retryCount]) || nextInterval * 2;
        return yield sendWithRetry(url, init, retryScheduleInMs, nextInterval, --triesLeft, ++retryCount);
    });
} //# sourceMappingURL=request.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/application.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Application = void 0;
const applicationIn_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/applicationIn.js [app-rsc] (ecmascript)");
const applicationOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/applicationOut.js [app-rsc] (ecmascript)");
const applicationPatch_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/applicationPatch.js [app-rsc] (ecmascript)");
const listResponseApplicationOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/listResponseApplicationOut.js [app-rsc] (ecmascript)");
const request_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/request.js [app-rsc] (ecmascript)");
class Application {
    constructor(requestCtx){
        this.requestCtx = requestCtx;
    }
    list(options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app");
        request.setQueryParam("limit", options === null || options === void 0 ? void 0 : options.limit);
        request.setQueryParam("iterator", options === null || options === void 0 ? void 0 : options.iterator);
        request.setQueryParam("order", options === null || options === void 0 ? void 0 : options.order);
        return request.send(this.requestCtx, listResponseApplicationOut_1.ListResponseApplicationOutSerializer._fromJsonObject);
    }
    create(applicationIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/app");
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(applicationIn_1.ApplicationInSerializer._toJsonObject(applicationIn));
        return request.send(this.requestCtx, applicationOut_1.ApplicationOutSerializer._fromJsonObject);
    }
    getOrCreate(applicationIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/app");
        request.setQueryParam("get_if_exists", true);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(applicationIn_1.ApplicationInSerializer._toJsonObject(applicationIn));
        return request.send(this.requestCtx, applicationOut_1.ApplicationOutSerializer._fromJsonObject);
    }
    get(appId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}");
        request.setPathParam("app_id", appId);
        return request.send(this.requestCtx, applicationOut_1.ApplicationOutSerializer._fromJsonObject);
    }
    update(appId, applicationIn) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PUT, "/api/v1/app/{app_id}");
        request.setPathParam("app_id", appId);
        request.setBody(applicationIn_1.ApplicationInSerializer._toJsonObject(applicationIn));
        return request.send(this.requestCtx, applicationOut_1.ApplicationOutSerializer._fromJsonObject);
    }
    delete(appId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.DELETE, "/api/v1/app/{app_id}");
        request.setPathParam("app_id", appId);
        return request.sendNoResponseBody(this.requestCtx);
    }
    patch(appId, applicationPatch) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PATCH, "/api/v1/app/{app_id}");
        request.setPathParam("app_id", appId);
        request.setBody(applicationPatch_1.ApplicationPatchSerializer._toJsonObject(applicationPatch));
        return request.send(this.requestCtx, applicationOut_1.ApplicationOutSerializer._fromJsonObject);
    }
}
exports.Application = Application; //# sourceMappingURL=application.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/appPortalCapability.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AppPortalCapabilitySerializer = exports.AppPortalCapability = void 0;
var AppPortalCapability;
(function(AppPortalCapability) {
    AppPortalCapability["ViewBase"] = "ViewBase";
    AppPortalCapability["ViewEndpointSecret"] = "ViewEndpointSecret";
    AppPortalCapability["ManageEndpointSecret"] = "ManageEndpointSecret";
    AppPortalCapability["ManageTransformations"] = "ManageTransformations";
    AppPortalCapability["CreateAttempts"] = "CreateAttempts";
    AppPortalCapability["ManageEndpoint"] = "ManageEndpoint";
})(AppPortalCapability = exports.AppPortalCapability || (exports.AppPortalCapability = {}));
exports.AppPortalCapabilitySerializer = {
    _fromJsonObject (object) {
        return object;
    },
    _toJsonObject (self) {
        return self;
    }
}; //# sourceMappingURL=appPortalCapability.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/appPortalAccessIn.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AppPortalAccessInSerializer = void 0;
const appPortalCapability_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/appPortalCapability.js [app-rsc] (ecmascript)");
const applicationIn_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/applicationIn.js [app-rsc] (ecmascript)");
exports.AppPortalAccessInSerializer = {
    _fromJsonObject (object) {
        var _a;
        return {
            application: object["application"] ? applicationIn_1.ApplicationInSerializer._fromJsonObject(object["application"]) : undefined,
            capabilities: (_a = object["capabilities"]) === null || _a === void 0 ? void 0 : _a.map((item)=>appPortalCapability_1.AppPortalCapabilitySerializer._fromJsonObject(item)),
            expiry: object["expiry"],
            featureFlags: object["featureFlags"],
            readOnly: object["readOnly"],
            sessionId: object["sessionId"]
        };
    },
    _toJsonObject (self) {
        var _a;
        return {
            application: self.application ? applicationIn_1.ApplicationInSerializer._toJsonObject(self.application) : undefined,
            capabilities: (_a = self.capabilities) === null || _a === void 0 ? void 0 : _a.map((item)=>appPortalCapability_1.AppPortalCapabilitySerializer._toJsonObject(item)),
            expiry: self.expiry,
            featureFlags: self.featureFlags,
            readOnly: self.readOnly,
            sessionId: self.sessionId
        };
    }
}; //# sourceMappingURL=appPortalAccessIn.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/appPortalAccessOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AppPortalAccessOutSerializer = void 0;
exports.AppPortalAccessOutSerializer = {
    _fromJsonObject (object) {
        return {
            token: object["token"],
            url: object["url"]
        };
    },
    _toJsonObject (self) {
        return {
            token: self.token,
            url: self.url
        };
    }
}; //# sourceMappingURL=appPortalAccessOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/applicationTokenExpireIn.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ApplicationTokenExpireInSerializer = void 0;
exports.ApplicationTokenExpireInSerializer = {
    _fromJsonObject (object) {
        return {
            expiry: object["expiry"],
            sessionIds: object["sessionIds"]
        };
    },
    _toJsonObject (self) {
        return {
            expiry: self.expiry,
            sessionIds: self.sessionIds
        };
    }
}; //# sourceMappingURL=applicationTokenExpireIn.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/dashboardAccessOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DashboardAccessOutSerializer = void 0;
exports.DashboardAccessOutSerializer = {
    _fromJsonObject (object) {
        return {
            token: object["token"],
            url: object["url"]
        };
    },
    _toJsonObject (self) {
        return {
            token: self.token,
            url: self.url
        };
    }
}; //# sourceMappingURL=dashboardAccessOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/authentication.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Authentication = void 0;
const appPortalAccessIn_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/appPortalAccessIn.js [app-rsc] (ecmascript)");
const appPortalAccessOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/appPortalAccessOut.js [app-rsc] (ecmascript)");
const applicationTokenExpireIn_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/applicationTokenExpireIn.js [app-rsc] (ecmascript)");
const dashboardAccessOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/dashboardAccessOut.js [app-rsc] (ecmascript)");
const request_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/request.js [app-rsc] (ecmascript)");
class Authentication {
    constructor(requestCtx){
        this.requestCtx = requestCtx;
    }
    appPortalAccess(appId, appPortalAccessIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/auth/app-portal-access/{app_id}");
        request.setPathParam("app_id", appId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(appPortalAccessIn_1.AppPortalAccessInSerializer._toJsonObject(appPortalAccessIn));
        return request.send(this.requestCtx, appPortalAccessOut_1.AppPortalAccessOutSerializer._fromJsonObject);
    }
    expireAll(appId, applicationTokenExpireIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/auth/app/{app_id}/expire-all");
        request.setPathParam("app_id", appId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(applicationTokenExpireIn_1.ApplicationTokenExpireInSerializer._toJsonObject(applicationTokenExpireIn));
        return request.sendNoResponseBody(this.requestCtx);
    }
    dashboardAccess(appId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/auth/dashboard-access/{app_id}");
        request.setPathParam("app_id", appId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        return request.send(this.requestCtx, dashboardAccessOut_1.DashboardAccessOutSerializer._fromJsonObject);
    }
    logout(options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/auth/logout");
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        return request.sendNoResponseBody(this.requestCtx);
    }
}
exports.Authentication = Authentication; //# sourceMappingURL=authentication.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/backgroundTaskStatus.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BackgroundTaskStatusSerializer = exports.BackgroundTaskStatus = void 0;
var BackgroundTaskStatus;
(function(BackgroundTaskStatus) {
    BackgroundTaskStatus["Running"] = "running";
    BackgroundTaskStatus["Finished"] = "finished";
    BackgroundTaskStatus["Failed"] = "failed";
})(BackgroundTaskStatus = exports.BackgroundTaskStatus || (exports.BackgroundTaskStatus = {}));
exports.BackgroundTaskStatusSerializer = {
    _fromJsonObject (object) {
        return object;
    },
    _toJsonObject (self) {
        return self;
    }
}; //# sourceMappingURL=backgroundTaskStatus.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/backgroundTaskType.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BackgroundTaskTypeSerializer = exports.BackgroundTaskType = void 0;
var BackgroundTaskType;
(function(BackgroundTaskType) {
    BackgroundTaskType["EndpointReplay"] = "endpoint.replay";
    BackgroundTaskType["EndpointRecover"] = "endpoint.recover";
    BackgroundTaskType["ApplicationStats"] = "application.stats";
    BackgroundTaskType["MessageBroadcast"] = "message.broadcast";
    BackgroundTaskType["SdkGenerate"] = "sdk.generate";
    BackgroundTaskType["EventTypeAggregate"] = "event-type.aggregate";
    BackgroundTaskType["ApplicationPurgeContent"] = "application.purge_content";
})(BackgroundTaskType = exports.BackgroundTaskType || (exports.BackgroundTaskType = {}));
exports.BackgroundTaskTypeSerializer = {
    _fromJsonObject (object) {
        return object;
    },
    _toJsonObject (self) {
        return self;
    }
}; //# sourceMappingURL=backgroundTaskType.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/backgroundTaskOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BackgroundTaskOutSerializer = void 0;
const backgroundTaskStatus_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/backgroundTaskStatus.js [app-rsc] (ecmascript)");
const backgroundTaskType_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/backgroundTaskType.js [app-rsc] (ecmascript)");
exports.BackgroundTaskOutSerializer = {
    _fromJsonObject (object) {
        return {
            data: object["data"],
            id: object["id"],
            status: backgroundTaskStatus_1.BackgroundTaskStatusSerializer._fromJsonObject(object["status"]),
            task: backgroundTaskType_1.BackgroundTaskTypeSerializer._fromJsonObject(object["task"])
        };
    },
    _toJsonObject (self) {
        return {
            data: self.data,
            id: self.id,
            status: backgroundTaskStatus_1.BackgroundTaskStatusSerializer._toJsonObject(self.status),
            task: backgroundTaskType_1.BackgroundTaskTypeSerializer._toJsonObject(self.task)
        };
    }
}; //# sourceMappingURL=backgroundTaskOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/listResponseBackgroundTaskOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListResponseBackgroundTaskOutSerializer = void 0;
const backgroundTaskOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/backgroundTaskOut.js [app-rsc] (ecmascript)");
exports.ListResponseBackgroundTaskOutSerializer = {
    _fromJsonObject (object) {
        return {
            data: object["data"].map((item)=>backgroundTaskOut_1.BackgroundTaskOutSerializer._fromJsonObject(item)),
            done: object["done"],
            iterator: object["iterator"],
            prevIterator: object["prevIterator"]
        };
    },
    _toJsonObject (self) {
        return {
            data: self.data.map((item)=>backgroundTaskOut_1.BackgroundTaskOutSerializer._toJsonObject(item)),
            done: self.done,
            iterator: self.iterator,
            prevIterator: self.prevIterator
        };
    }
}; //# sourceMappingURL=listResponseBackgroundTaskOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/backgroundTask.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BackgroundTask = void 0;
const backgroundTaskOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/backgroundTaskOut.js [app-rsc] (ecmascript)");
const listResponseBackgroundTaskOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/listResponseBackgroundTaskOut.js [app-rsc] (ecmascript)");
const request_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/request.js [app-rsc] (ecmascript)");
class BackgroundTask {
    constructor(requestCtx){
        this.requestCtx = requestCtx;
    }
    list(options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/background-task");
        request.setQueryParam("status", options === null || options === void 0 ? void 0 : options.status);
        request.setQueryParam("task", options === null || options === void 0 ? void 0 : options.task);
        request.setQueryParam("limit", options === null || options === void 0 ? void 0 : options.limit);
        request.setQueryParam("iterator", options === null || options === void 0 ? void 0 : options.iterator);
        request.setQueryParam("order", options === null || options === void 0 ? void 0 : options.order);
        return request.send(this.requestCtx, listResponseBackgroundTaskOut_1.ListResponseBackgroundTaskOutSerializer._fromJsonObject);
    }
    listByEndpoint(options) {
        return this.list(options);
    }
    get(taskId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/background-task/{task_id}");
        request.setPathParam("task_id", taskId);
        return request.send(this.requestCtx, backgroundTaskOut_1.BackgroundTaskOutSerializer._fromJsonObject);
    }
}
exports.BackgroundTask = BackgroundTask; //# sourceMappingURL=backgroundTask.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/endpointHeadersIn.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointHeadersInSerializer = void 0;
exports.EndpointHeadersInSerializer = {
    _fromJsonObject (object) {
        return {
            headers: object["headers"]
        };
    },
    _toJsonObject (self) {
        return {
            headers: self.headers
        };
    }
}; //# sourceMappingURL=endpointHeadersIn.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/endpointHeadersOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointHeadersOutSerializer = void 0;
exports.EndpointHeadersOutSerializer = {
    _fromJsonObject (object) {
        return {
            headers: object["headers"],
            sensitive: object["sensitive"]
        };
    },
    _toJsonObject (self) {
        return {
            headers: self.headers,
            sensitive: self.sensitive
        };
    }
}; //# sourceMappingURL=endpointHeadersOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/endpointHeadersPatchIn.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointHeadersPatchInSerializer = void 0;
exports.EndpointHeadersPatchInSerializer = {
    _fromJsonObject (object) {
        return {
            deleteHeaders: object["deleteHeaders"],
            headers: object["headers"]
        };
    },
    _toJsonObject (self) {
        return {
            deleteHeaders: self.deleteHeaders,
            headers: self.headers
        };
    }
}; //# sourceMappingURL=endpointHeadersPatchIn.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/endpointIn.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointInSerializer = void 0;
exports.EndpointInSerializer = {
    _fromJsonObject (object) {
        return {
            channels: object["channels"],
            description: object["description"],
            disabled: object["disabled"],
            filterTypes: object["filterTypes"],
            headers: object["headers"],
            metadata: object["metadata"],
            rateLimit: object["rateLimit"],
            secret: object["secret"],
            uid: object["uid"],
            url: object["url"],
            version: object["version"]
        };
    },
    _toJsonObject (self) {
        return {
            channels: self.channels,
            description: self.description,
            disabled: self.disabled,
            filterTypes: self.filterTypes,
            headers: self.headers,
            metadata: self.metadata,
            rateLimit: self.rateLimit,
            secret: self.secret,
            uid: self.uid,
            url: self.url,
            version: self.version
        };
    }
}; //# sourceMappingURL=endpointIn.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/endpointOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointOutSerializer = void 0;
exports.EndpointOutSerializer = {
    _fromJsonObject (object) {
        return {
            channels: object["channels"],
            createdAt: new Date(object["createdAt"]),
            description: object["description"],
            disabled: object["disabled"],
            filterTypes: object["filterTypes"],
            id: object["id"],
            metadata: object["metadata"],
            rateLimit: object["rateLimit"],
            uid: object["uid"],
            updatedAt: new Date(object["updatedAt"]),
            url: object["url"],
            version: object["version"]
        };
    },
    _toJsonObject (self) {
        return {
            channels: self.channels,
            createdAt: self.createdAt,
            description: self.description,
            disabled: self.disabled,
            filterTypes: self.filterTypes,
            id: self.id,
            metadata: self.metadata,
            rateLimit: self.rateLimit,
            uid: self.uid,
            updatedAt: self.updatedAt,
            url: self.url,
            version: self.version
        };
    }
}; //# sourceMappingURL=endpointOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/endpointPatch.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointPatchSerializer = void 0;
exports.EndpointPatchSerializer = {
    _fromJsonObject (object) {
        return {
            channels: object["channels"],
            description: object["description"],
            disabled: object["disabled"],
            filterTypes: object["filterTypes"],
            metadata: object["metadata"],
            rateLimit: object["rateLimit"],
            secret: object["secret"],
            uid: object["uid"],
            url: object["url"],
            version: object["version"]
        };
    },
    _toJsonObject (self) {
        return {
            channels: self.channels,
            description: self.description,
            disabled: self.disabled,
            filterTypes: self.filterTypes,
            metadata: self.metadata,
            rateLimit: self.rateLimit,
            secret: self.secret,
            uid: self.uid,
            url: self.url,
            version: self.version
        };
    }
}; //# sourceMappingURL=endpointPatch.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/endpointSecretOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointSecretOutSerializer = void 0;
exports.EndpointSecretOutSerializer = {
    _fromJsonObject (object) {
        return {
            key: object["key"]
        };
    },
    _toJsonObject (self) {
        return {
            key: self.key
        };
    }
}; //# sourceMappingURL=endpointSecretOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/endpointSecretRotateIn.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointSecretRotateInSerializer = void 0;
exports.EndpointSecretRotateInSerializer = {
    _fromJsonObject (object) {
        return {
            key: object["key"]
        };
    },
    _toJsonObject (self) {
        return {
            key: self.key
        };
    }
}; //# sourceMappingURL=endpointSecretRotateIn.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/endpointStats.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointStatsSerializer = void 0;
exports.EndpointStatsSerializer = {
    _fromJsonObject (object) {
        return {
            fail: object["fail"],
            pending: object["pending"],
            sending: object["sending"],
            success: object["success"]
        };
    },
    _toJsonObject (self) {
        return {
            fail: self.fail,
            pending: self.pending,
            sending: self.sending,
            success: self.success
        };
    }
}; //# sourceMappingURL=endpointStats.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/endpointTransformationIn.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointTransformationInSerializer = void 0;
exports.EndpointTransformationInSerializer = {
    _fromJsonObject (object) {
        return {
            code: object["code"],
            enabled: object["enabled"]
        };
    },
    _toJsonObject (self) {
        return {
            code: self.code,
            enabled: self.enabled
        };
    }
}; //# sourceMappingURL=endpointTransformationIn.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/endpointTransformationOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointTransformationOutSerializer = void 0;
exports.EndpointTransformationOutSerializer = {
    _fromJsonObject (object) {
        return {
            code: object["code"],
            enabled: object["enabled"]
        };
    },
    _toJsonObject (self) {
        return {
            code: self.code,
            enabled: self.enabled
        };
    }
}; //# sourceMappingURL=endpointTransformationOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/endpointTransformationPatch.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointTransformationPatchSerializer = void 0;
exports.EndpointTransformationPatchSerializer = {
    _fromJsonObject (object) {
        return {
            code: object["code"],
            enabled: object["enabled"]
        };
    },
    _toJsonObject (self) {
        return {
            code: self.code,
            enabled: self.enabled
        };
    }
}; //# sourceMappingURL=endpointTransformationPatch.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/endpointUpdate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointUpdateSerializer = void 0;
exports.EndpointUpdateSerializer = {
    _fromJsonObject (object) {
        return {
            channels: object["channels"],
            description: object["description"],
            disabled: object["disabled"],
            filterTypes: object["filterTypes"],
            metadata: object["metadata"],
            rateLimit: object["rateLimit"],
            uid: object["uid"],
            url: object["url"],
            version: object["version"]
        };
    },
    _toJsonObject (self) {
        return {
            channels: self.channels,
            description: self.description,
            disabled: self.disabled,
            filterTypes: self.filterTypes,
            metadata: self.metadata,
            rateLimit: self.rateLimit,
            uid: self.uid,
            url: self.url,
            version: self.version
        };
    }
}; //# sourceMappingURL=endpointUpdate.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/eventExampleIn.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventExampleInSerializer = void 0;
exports.EventExampleInSerializer = {
    _fromJsonObject (object) {
        return {
            eventType: object["eventType"],
            exampleIndex: object["exampleIndex"]
        };
    },
    _toJsonObject (self) {
        return {
            eventType: self.eventType,
            exampleIndex: self.exampleIndex
        };
    }
}; //# sourceMappingURL=eventExampleIn.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/listResponseEndpointOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListResponseEndpointOutSerializer = void 0;
const endpointOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/endpointOut.js [app-rsc] (ecmascript)");
exports.ListResponseEndpointOutSerializer = {
    _fromJsonObject (object) {
        return {
            data: object["data"].map((item)=>endpointOut_1.EndpointOutSerializer._fromJsonObject(item)),
            done: object["done"],
            iterator: object["iterator"],
            prevIterator: object["prevIterator"]
        };
    },
    _toJsonObject (self) {
        return {
            data: self.data.map((item)=>endpointOut_1.EndpointOutSerializer._toJsonObject(item)),
            done: self.done,
            iterator: self.iterator,
            prevIterator: self.prevIterator
        };
    }
}; //# sourceMappingURL=listResponseEndpointOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/messageOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageOutSerializer = void 0;
exports.MessageOutSerializer = {
    _fromJsonObject (object) {
        return {
            channels: object["channels"],
            eventId: object["eventId"],
            eventType: object["eventType"],
            id: object["id"],
            payload: object["payload"],
            tags: object["tags"],
            timestamp: new Date(object["timestamp"])
        };
    },
    _toJsonObject (self) {
        return {
            channels: self.channels,
            eventId: self.eventId,
            eventType: self.eventType,
            id: self.id,
            payload: self.payload,
            tags: self.tags,
            timestamp: self.timestamp
        };
    }
}; //# sourceMappingURL=messageOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/recoverIn.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RecoverInSerializer = void 0;
exports.RecoverInSerializer = {
    _fromJsonObject (object) {
        return {
            since: new Date(object["since"]),
            until: object["until"] ? new Date(object["until"]) : null
        };
    },
    _toJsonObject (self) {
        return {
            since: self.since,
            until: self.until
        };
    }
}; //# sourceMappingURL=recoverIn.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/recoverOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RecoverOutSerializer = void 0;
const backgroundTaskStatus_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/backgroundTaskStatus.js [app-rsc] (ecmascript)");
const backgroundTaskType_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/backgroundTaskType.js [app-rsc] (ecmascript)");
exports.RecoverOutSerializer = {
    _fromJsonObject (object) {
        return {
            id: object["id"],
            status: backgroundTaskStatus_1.BackgroundTaskStatusSerializer._fromJsonObject(object["status"]),
            task: backgroundTaskType_1.BackgroundTaskTypeSerializer._fromJsonObject(object["task"])
        };
    },
    _toJsonObject (self) {
        return {
            id: self.id,
            status: backgroundTaskStatus_1.BackgroundTaskStatusSerializer._toJsonObject(self.status),
            task: backgroundTaskType_1.BackgroundTaskTypeSerializer._toJsonObject(self.task)
        };
    }
}; //# sourceMappingURL=recoverOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/replayIn.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReplayInSerializer = void 0;
exports.ReplayInSerializer = {
    _fromJsonObject (object) {
        return {
            since: new Date(object["since"]),
            until: object["until"] ? new Date(object["until"]) : null
        };
    },
    _toJsonObject (self) {
        return {
            since: self.since,
            until: self.until
        };
    }
}; //# sourceMappingURL=replayIn.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/replayOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReplayOutSerializer = void 0;
const backgroundTaskStatus_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/backgroundTaskStatus.js [app-rsc] (ecmascript)");
const backgroundTaskType_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/backgroundTaskType.js [app-rsc] (ecmascript)");
exports.ReplayOutSerializer = {
    _fromJsonObject (object) {
        return {
            id: object["id"],
            status: backgroundTaskStatus_1.BackgroundTaskStatusSerializer._fromJsonObject(object["status"]),
            task: backgroundTaskType_1.BackgroundTaskTypeSerializer._fromJsonObject(object["task"])
        };
    },
    _toJsonObject (self) {
        return {
            id: self.id,
            status: backgroundTaskStatus_1.BackgroundTaskStatusSerializer._toJsonObject(self.status),
            task: backgroundTaskType_1.BackgroundTaskTypeSerializer._toJsonObject(self.task)
        };
    }
}; //# sourceMappingURL=replayOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/endpoint.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Endpoint = void 0;
const endpointHeadersIn_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/endpointHeadersIn.js [app-rsc] (ecmascript)");
const endpointHeadersOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/endpointHeadersOut.js [app-rsc] (ecmascript)");
const endpointHeadersPatchIn_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/endpointHeadersPatchIn.js [app-rsc] (ecmascript)");
const endpointIn_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/endpointIn.js [app-rsc] (ecmascript)");
const endpointOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/endpointOut.js [app-rsc] (ecmascript)");
const endpointPatch_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/endpointPatch.js [app-rsc] (ecmascript)");
const endpointSecretOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/endpointSecretOut.js [app-rsc] (ecmascript)");
const endpointSecretRotateIn_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/endpointSecretRotateIn.js [app-rsc] (ecmascript)");
const endpointStats_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/endpointStats.js [app-rsc] (ecmascript)");
const endpointTransformationIn_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/endpointTransformationIn.js [app-rsc] (ecmascript)");
const endpointTransformationOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/endpointTransformationOut.js [app-rsc] (ecmascript)");
const endpointTransformationPatch_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/endpointTransformationPatch.js [app-rsc] (ecmascript)");
const endpointUpdate_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/endpointUpdate.js [app-rsc] (ecmascript)");
const eventExampleIn_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/eventExampleIn.js [app-rsc] (ecmascript)");
const listResponseEndpointOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/listResponseEndpointOut.js [app-rsc] (ecmascript)");
const messageOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/messageOut.js [app-rsc] (ecmascript)");
const recoverIn_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/recoverIn.js [app-rsc] (ecmascript)");
const recoverOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/recoverOut.js [app-rsc] (ecmascript)");
const replayIn_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/replayIn.js [app-rsc] (ecmascript)");
const replayOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/replayOut.js [app-rsc] (ecmascript)");
const request_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/request.js [app-rsc] (ecmascript)");
class Endpoint {
    constructor(requestCtx){
        this.requestCtx = requestCtx;
    }
    list(appId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/endpoint");
        request.setPathParam("app_id", appId);
        request.setQueryParam("limit", options === null || options === void 0 ? void 0 : options.limit);
        request.setQueryParam("iterator", options === null || options === void 0 ? void 0 : options.iterator);
        request.setQueryParam("order", options === null || options === void 0 ? void 0 : options.order);
        return request.send(this.requestCtx, listResponseEndpointOut_1.ListResponseEndpointOutSerializer._fromJsonObject);
    }
    create(appId, endpointIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/app/{app_id}/endpoint");
        request.setPathParam("app_id", appId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(endpointIn_1.EndpointInSerializer._toJsonObject(endpointIn));
        return request.send(this.requestCtx, endpointOut_1.EndpointOutSerializer._fromJsonObject);
    }
    get(appId, endpointId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/endpoint/{endpoint_id}");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        return request.send(this.requestCtx, endpointOut_1.EndpointOutSerializer._fromJsonObject);
    }
    update(appId, endpointId, endpointUpdate) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PUT, "/api/v1/app/{app_id}/endpoint/{endpoint_id}");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        request.setBody(endpointUpdate_1.EndpointUpdateSerializer._toJsonObject(endpointUpdate));
        return request.send(this.requestCtx, endpointOut_1.EndpointOutSerializer._fromJsonObject);
    }
    delete(appId, endpointId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.DELETE, "/api/v1/app/{app_id}/endpoint/{endpoint_id}");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        return request.sendNoResponseBody(this.requestCtx);
    }
    patch(appId, endpointId, endpointPatch) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PATCH, "/api/v1/app/{app_id}/endpoint/{endpoint_id}");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        request.setBody(endpointPatch_1.EndpointPatchSerializer._toJsonObject(endpointPatch));
        return request.send(this.requestCtx, endpointOut_1.EndpointOutSerializer._fromJsonObject);
    }
    getHeaders(appId, endpointId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/endpoint/{endpoint_id}/headers");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        return request.send(this.requestCtx, endpointHeadersOut_1.EndpointHeadersOutSerializer._fromJsonObject);
    }
    updateHeaders(appId, endpointId, endpointHeadersIn) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PUT, "/api/v1/app/{app_id}/endpoint/{endpoint_id}/headers");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        request.setBody(endpointHeadersIn_1.EndpointHeadersInSerializer._toJsonObject(endpointHeadersIn));
        return request.sendNoResponseBody(this.requestCtx);
    }
    headersUpdate(appId, endpointId, endpointHeadersIn) {
        return this.updateHeaders(appId, endpointId, endpointHeadersIn);
    }
    patchHeaders(appId, endpointId, endpointHeadersPatchIn) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PATCH, "/api/v1/app/{app_id}/endpoint/{endpoint_id}/headers");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        request.setBody(endpointHeadersPatchIn_1.EndpointHeadersPatchInSerializer._toJsonObject(endpointHeadersPatchIn));
        return request.sendNoResponseBody(this.requestCtx);
    }
    headersPatch(appId, endpointId, endpointHeadersPatchIn) {
        return this.patchHeaders(appId, endpointId, endpointHeadersPatchIn);
    }
    recover(appId, endpointId, recoverIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/app/{app_id}/endpoint/{endpoint_id}/recover");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(recoverIn_1.RecoverInSerializer._toJsonObject(recoverIn));
        return request.send(this.requestCtx, recoverOut_1.RecoverOutSerializer._fromJsonObject);
    }
    replayMissing(appId, endpointId, replayIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/app/{app_id}/endpoint/{endpoint_id}/replay-missing");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(replayIn_1.ReplayInSerializer._toJsonObject(replayIn));
        return request.send(this.requestCtx, replayOut_1.ReplayOutSerializer._fromJsonObject);
    }
    getSecret(appId, endpointId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/endpoint/{endpoint_id}/secret");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        return request.send(this.requestCtx, endpointSecretOut_1.EndpointSecretOutSerializer._fromJsonObject);
    }
    rotateSecret(appId, endpointId, endpointSecretRotateIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/app/{app_id}/endpoint/{endpoint_id}/secret/rotate");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(endpointSecretRotateIn_1.EndpointSecretRotateInSerializer._toJsonObject(endpointSecretRotateIn));
        return request.sendNoResponseBody(this.requestCtx);
    }
    sendExample(appId, endpointId, eventExampleIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/app/{app_id}/endpoint/{endpoint_id}/send-example");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(eventExampleIn_1.EventExampleInSerializer._toJsonObject(eventExampleIn));
        return request.send(this.requestCtx, messageOut_1.MessageOutSerializer._fromJsonObject);
    }
    getStats(appId, endpointId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/endpoint/{endpoint_id}/stats");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        request.setQueryParam("since", options === null || options === void 0 ? void 0 : options.since);
        request.setQueryParam("until", options === null || options === void 0 ? void 0 : options.until);
        return request.send(this.requestCtx, endpointStats_1.EndpointStatsSerializer._fromJsonObject);
    }
    transformationGet(appId, endpointId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/endpoint/{endpoint_id}/transformation");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        return request.send(this.requestCtx, endpointTransformationOut_1.EndpointTransformationOutSerializer._fromJsonObject);
    }
    patchTransformation(appId, endpointId, endpointTransformationPatch) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PATCH, "/api/v1/app/{app_id}/endpoint/{endpoint_id}/transformation");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        request.setBody(endpointTransformationPatch_1.EndpointTransformationPatchSerializer._toJsonObject(endpointTransformationPatch));
        return request.sendNoResponseBody(this.requestCtx);
    }
    transformationPartialUpdate(appId, endpointId, endpointTransformationIn) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PATCH, "/api/v1/app/{app_id}/endpoint/{endpoint_id}/transformation");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        request.setBody(endpointTransformationIn_1.EndpointTransformationInSerializer._toJsonObject(endpointTransformationIn));
        return request.sendNoResponseBody(this.requestCtx);
    }
}
exports.Endpoint = Endpoint; //# sourceMappingURL=endpoint.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/connectorKind.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConnectorKindSerializer = exports.ConnectorKind = void 0;
var ConnectorKind;
(function(ConnectorKind) {
    ConnectorKind["Custom"] = "Custom";
    ConnectorKind["CloseCrm"] = "CloseCRM";
    ConnectorKind["CustomerIo"] = "CustomerIO";
    ConnectorKind["Discord"] = "Discord";
    ConnectorKind["Hubspot"] = "Hubspot";
    ConnectorKind["Inngest"] = "Inngest";
    ConnectorKind["Loops"] = "Loops";
    ConnectorKind["Resend"] = "Resend";
    ConnectorKind["Salesforce"] = "Salesforce";
    ConnectorKind["Segment"] = "Segment";
    ConnectorKind["Sendgrid"] = "Sendgrid";
    ConnectorKind["Slack"] = "Slack";
    ConnectorKind["Teams"] = "Teams";
    ConnectorKind["TriggerDev"] = "TriggerDev";
    ConnectorKind["Windmill"] = "Windmill";
    ConnectorKind["Zapier"] = "Zapier";
})(ConnectorKind = exports.ConnectorKind || (exports.ConnectorKind = {}));
exports.ConnectorKindSerializer = {
    _fromJsonObject (object) {
        return object;
    },
    _toJsonObject (self) {
        return self;
    }
}; //# sourceMappingURL=connectorKind.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/connectorIn.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConnectorInSerializer = void 0;
const connectorKind_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/connectorKind.js [app-rsc] (ecmascript)");
exports.ConnectorInSerializer = {
    _fromJsonObject (object) {
        return {
            description: object["description"],
            featureFlag: object["featureFlag"],
            featureFlags: object["featureFlags"],
            filterTypes: object["filterTypes"],
            instructions: object["instructions"],
            instructionsLink: object["instructionsLink"],
            kind: object["kind"] ? connectorKind_1.ConnectorKindSerializer._fromJsonObject(object["kind"]) : undefined,
            logo: object["logo"],
            name: object["name"],
            transformation: object["transformation"]
        };
    },
    _toJsonObject (self) {
        return {
            description: self.description,
            featureFlag: self.featureFlag,
            featureFlags: self.featureFlags,
            filterTypes: self.filterTypes,
            instructions: self.instructions,
            instructionsLink: self.instructionsLink,
            kind: self.kind ? connectorKind_1.ConnectorKindSerializer._toJsonObject(self.kind) : undefined,
            logo: self.logo,
            name: self.name,
            transformation: self.transformation
        };
    }
}; //# sourceMappingURL=connectorIn.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/eventTypeIn.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventTypeInSerializer = void 0;
exports.EventTypeInSerializer = {
    _fromJsonObject (object) {
        return {
            archived: object["archived"],
            deprecated: object["deprecated"],
            description: object["description"],
            featureFlag: object["featureFlag"],
            featureFlags: object["featureFlags"],
            groupName: object["groupName"],
            name: object["name"],
            schemas: object["schemas"]
        };
    },
    _toJsonObject (self) {
        return {
            archived: self.archived,
            deprecated: self.deprecated,
            description: self.description,
            featureFlag: self.featureFlag,
            featureFlags: self.featureFlags,
            groupName: self.groupName,
            name: self.name,
            schemas: self.schemas
        };
    }
}; //# sourceMappingURL=eventTypeIn.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/environmentIn.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EnvironmentInSerializer = void 0;
const connectorIn_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/connectorIn.js [app-rsc] (ecmascript)");
const eventTypeIn_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/eventTypeIn.js [app-rsc] (ecmascript)");
exports.EnvironmentInSerializer = {
    _fromJsonObject (object) {
        var _a, _b;
        return {
            connectors: (_a = object["connectors"]) === null || _a === void 0 ? void 0 : _a.map((item)=>connectorIn_1.ConnectorInSerializer._fromJsonObject(item)),
            eventTypes: (_b = object["eventTypes"]) === null || _b === void 0 ? void 0 : _b.map((item)=>eventTypeIn_1.EventTypeInSerializer._fromJsonObject(item)),
            settings: object["settings"]
        };
    },
    _toJsonObject (self) {
        var _a, _b;
        return {
            connectors: (_a = self.connectors) === null || _a === void 0 ? void 0 : _a.map((item)=>connectorIn_1.ConnectorInSerializer._toJsonObject(item)),
            eventTypes: (_b = self.eventTypes) === null || _b === void 0 ? void 0 : _b.map((item)=>eventTypeIn_1.EventTypeInSerializer._toJsonObject(item)),
            settings: self.settings
        };
    }
}; //# sourceMappingURL=environmentIn.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/connectorOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConnectorOutSerializer = void 0;
const connectorKind_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/connectorKind.js [app-rsc] (ecmascript)");
exports.ConnectorOutSerializer = {
    _fromJsonObject (object) {
        return {
            createdAt: new Date(object["createdAt"]),
            description: object["description"],
            featureFlag: object["featureFlag"],
            featureFlags: object["featureFlags"],
            filterTypes: object["filterTypes"],
            id: object["id"],
            instructions: object["instructions"],
            instructionsLink: object["instructionsLink"],
            kind: connectorKind_1.ConnectorKindSerializer._fromJsonObject(object["kind"]),
            logo: object["logo"],
            name: object["name"],
            orgId: object["orgId"],
            transformation: object["transformation"],
            updatedAt: new Date(object["updatedAt"])
        };
    },
    _toJsonObject (self) {
        return {
            createdAt: self.createdAt,
            description: self.description,
            featureFlag: self.featureFlag,
            featureFlags: self.featureFlags,
            filterTypes: self.filterTypes,
            id: self.id,
            instructions: self.instructions,
            instructionsLink: self.instructionsLink,
            kind: connectorKind_1.ConnectorKindSerializer._toJsonObject(self.kind),
            logo: self.logo,
            name: self.name,
            orgId: self.orgId,
            transformation: self.transformation,
            updatedAt: self.updatedAt
        };
    }
}; //# sourceMappingURL=connectorOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/eventTypeOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventTypeOutSerializer = void 0;
exports.EventTypeOutSerializer = {
    _fromJsonObject (object) {
        return {
            archived: object["archived"],
            createdAt: new Date(object["createdAt"]),
            deprecated: object["deprecated"],
            description: object["description"],
            featureFlag: object["featureFlag"],
            featureFlags: object["featureFlags"],
            groupName: object["groupName"],
            name: object["name"],
            schemas: object["schemas"],
            updatedAt: new Date(object["updatedAt"])
        };
    },
    _toJsonObject (self) {
        return {
            archived: self.archived,
            createdAt: self.createdAt,
            deprecated: self.deprecated,
            description: self.description,
            featureFlag: self.featureFlag,
            featureFlags: self.featureFlags,
            groupName: self.groupName,
            name: self.name,
            schemas: self.schemas,
            updatedAt: self.updatedAt
        };
    }
}; //# sourceMappingURL=eventTypeOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/environmentOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EnvironmentOutSerializer = void 0;
const connectorOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/connectorOut.js [app-rsc] (ecmascript)");
const eventTypeOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/eventTypeOut.js [app-rsc] (ecmascript)");
exports.EnvironmentOutSerializer = {
    _fromJsonObject (object) {
        return {
            createdAt: new Date(object["createdAt"]),
            eventTypes: object["eventTypes"].map((item)=>eventTypeOut_1.EventTypeOutSerializer._fromJsonObject(item)),
            settings: object["settings"],
            transformationTemplates: object["transformationTemplates"].map((item)=>connectorOut_1.ConnectorOutSerializer._fromJsonObject(item)),
            version: object["version"]
        };
    },
    _toJsonObject (self) {
        return {
            createdAt: self.createdAt,
            eventTypes: self.eventTypes.map((item)=>eventTypeOut_1.EventTypeOutSerializer._toJsonObject(item)),
            settings: self.settings,
            transformationTemplates: self.transformationTemplates.map((item)=>connectorOut_1.ConnectorOutSerializer._toJsonObject(item)),
            version: self.version
        };
    }
}; //# sourceMappingURL=environmentOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/environment.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Environment = void 0;
const environmentIn_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/environmentIn.js [app-rsc] (ecmascript)");
const environmentOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/environmentOut.js [app-rsc] (ecmascript)");
const request_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/request.js [app-rsc] (ecmascript)");
class Environment {
    constructor(requestCtx){
        this.requestCtx = requestCtx;
    }
    export(options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/environment/export");
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        return request.send(this.requestCtx, environmentOut_1.EnvironmentOutSerializer._fromJsonObject);
    }
    import(environmentIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/environment/import");
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(environmentIn_1.EnvironmentInSerializer._toJsonObject(environmentIn));
        return request.sendNoResponseBody(this.requestCtx);
    }
}
exports.Environment = Environment; //# sourceMappingURL=environment.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/eventTypeImportOpenApiIn.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventTypeImportOpenApiInSerializer = void 0;
exports.EventTypeImportOpenApiInSerializer = {
    _fromJsonObject (object) {
        return {
            dryRun: object["dryRun"],
            replaceAll: object["replaceAll"],
            spec: object["spec"],
            specRaw: object["specRaw"]
        };
    },
    _toJsonObject (self) {
        return {
            dryRun: self.dryRun,
            replaceAll: self.replaceAll,
            spec: self.spec,
            specRaw: self.specRaw
        };
    }
}; //# sourceMappingURL=eventTypeImportOpenApiIn.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/eventTypeFromOpenApi.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventTypeFromOpenApiSerializer = void 0;
exports.EventTypeFromOpenApiSerializer = {
    _fromJsonObject (object) {
        return {
            deprecated: object["deprecated"],
            description: object["description"],
            featureFlag: object["featureFlag"],
            featureFlags: object["featureFlags"],
            groupName: object["groupName"],
            name: object["name"],
            schemas: object["schemas"]
        };
    },
    _toJsonObject (self) {
        return {
            deprecated: self.deprecated,
            description: self.description,
            featureFlag: self.featureFlag,
            featureFlags: self.featureFlags,
            groupName: self.groupName,
            name: self.name,
            schemas: self.schemas
        };
    }
}; //# sourceMappingURL=eventTypeFromOpenApi.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/eventTypeImportOpenApiOutData.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventTypeImportOpenApiOutDataSerializer = void 0;
const eventTypeFromOpenApi_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/eventTypeFromOpenApi.js [app-rsc] (ecmascript)");
exports.EventTypeImportOpenApiOutDataSerializer = {
    _fromJsonObject (object) {
        var _a;
        return {
            modified: object["modified"],
            toModify: (_a = object["to_modify"]) === null || _a === void 0 ? void 0 : _a.map((item)=>eventTypeFromOpenApi_1.EventTypeFromOpenApiSerializer._fromJsonObject(item))
        };
    },
    _toJsonObject (self) {
        var _a;
        return {
            modified: self.modified,
            to_modify: (_a = self.toModify) === null || _a === void 0 ? void 0 : _a.map((item)=>eventTypeFromOpenApi_1.EventTypeFromOpenApiSerializer._toJsonObject(item))
        };
    }
}; //# sourceMappingURL=eventTypeImportOpenApiOutData.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/eventTypeImportOpenApiOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventTypeImportOpenApiOutSerializer = void 0;
const eventTypeImportOpenApiOutData_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/eventTypeImportOpenApiOutData.js [app-rsc] (ecmascript)");
exports.EventTypeImportOpenApiOutSerializer = {
    _fromJsonObject (object) {
        return {
            data: eventTypeImportOpenApiOutData_1.EventTypeImportOpenApiOutDataSerializer._fromJsonObject(object["data"])
        };
    },
    _toJsonObject (self) {
        return {
            data: eventTypeImportOpenApiOutData_1.EventTypeImportOpenApiOutDataSerializer._toJsonObject(self.data)
        };
    }
}; //# sourceMappingURL=eventTypeImportOpenApiOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/eventTypePatch.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventTypePatchSerializer = void 0;
exports.EventTypePatchSerializer = {
    _fromJsonObject (object) {
        return {
            archived: object["archived"],
            deprecated: object["deprecated"],
            description: object["description"],
            featureFlag: object["featureFlag"],
            featureFlags: object["featureFlags"],
            groupName: object["groupName"],
            schemas: object["schemas"]
        };
    },
    _toJsonObject (self) {
        return {
            archived: self.archived,
            deprecated: self.deprecated,
            description: self.description,
            featureFlag: self.featureFlag,
            featureFlags: self.featureFlags,
            groupName: self.groupName,
            schemas: self.schemas
        };
    }
}; //# sourceMappingURL=eventTypePatch.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/eventTypeUpdate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventTypeUpdateSerializer = void 0;
exports.EventTypeUpdateSerializer = {
    _fromJsonObject (object) {
        return {
            archived: object["archived"],
            deprecated: object["deprecated"],
            description: object["description"],
            featureFlag: object["featureFlag"],
            featureFlags: object["featureFlags"],
            groupName: object["groupName"],
            schemas: object["schemas"]
        };
    },
    _toJsonObject (self) {
        return {
            archived: self.archived,
            deprecated: self.deprecated,
            description: self.description,
            featureFlag: self.featureFlag,
            featureFlags: self.featureFlags,
            groupName: self.groupName,
            schemas: self.schemas
        };
    }
}; //# sourceMappingURL=eventTypeUpdate.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/listResponseEventTypeOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListResponseEventTypeOutSerializer = void 0;
const eventTypeOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/eventTypeOut.js [app-rsc] (ecmascript)");
exports.ListResponseEventTypeOutSerializer = {
    _fromJsonObject (object) {
        return {
            data: object["data"].map((item)=>eventTypeOut_1.EventTypeOutSerializer._fromJsonObject(item)),
            done: object["done"],
            iterator: object["iterator"],
            prevIterator: object["prevIterator"]
        };
    },
    _toJsonObject (self) {
        return {
            data: self.data.map((item)=>eventTypeOut_1.EventTypeOutSerializer._toJsonObject(item)),
            done: self.done,
            iterator: self.iterator,
            prevIterator: self.prevIterator
        };
    }
}; //# sourceMappingURL=listResponseEventTypeOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/eventType.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventType = void 0;
const eventTypeImportOpenApiIn_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/eventTypeImportOpenApiIn.js [app-rsc] (ecmascript)");
const eventTypeImportOpenApiOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/eventTypeImportOpenApiOut.js [app-rsc] (ecmascript)");
const eventTypeIn_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/eventTypeIn.js [app-rsc] (ecmascript)");
const eventTypeOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/eventTypeOut.js [app-rsc] (ecmascript)");
const eventTypePatch_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/eventTypePatch.js [app-rsc] (ecmascript)");
const eventTypeUpdate_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/eventTypeUpdate.js [app-rsc] (ecmascript)");
const listResponseEventTypeOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/listResponseEventTypeOut.js [app-rsc] (ecmascript)");
const request_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/request.js [app-rsc] (ecmascript)");
class EventType {
    constructor(requestCtx){
        this.requestCtx = requestCtx;
    }
    list(options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/event-type");
        request.setQueryParam("limit", options === null || options === void 0 ? void 0 : options.limit);
        request.setQueryParam("iterator", options === null || options === void 0 ? void 0 : options.iterator);
        request.setQueryParam("order", options === null || options === void 0 ? void 0 : options.order);
        request.setQueryParam("include_archived", options === null || options === void 0 ? void 0 : options.includeArchived);
        request.setQueryParam("with_content", options === null || options === void 0 ? void 0 : options.withContent);
        return request.send(this.requestCtx, listResponseEventTypeOut_1.ListResponseEventTypeOutSerializer._fromJsonObject);
    }
    create(eventTypeIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/event-type");
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(eventTypeIn_1.EventTypeInSerializer._toJsonObject(eventTypeIn));
        return request.send(this.requestCtx, eventTypeOut_1.EventTypeOutSerializer._fromJsonObject);
    }
    importOpenapi(eventTypeImportOpenApiIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/event-type/import/openapi");
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(eventTypeImportOpenApiIn_1.EventTypeImportOpenApiInSerializer._toJsonObject(eventTypeImportOpenApiIn));
        return request.send(this.requestCtx, eventTypeImportOpenApiOut_1.EventTypeImportOpenApiOutSerializer._fromJsonObject);
    }
    get(eventTypeName) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/event-type/{event_type_name}");
        request.setPathParam("event_type_name", eventTypeName);
        return request.send(this.requestCtx, eventTypeOut_1.EventTypeOutSerializer._fromJsonObject);
    }
    update(eventTypeName, eventTypeUpdate) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PUT, "/api/v1/event-type/{event_type_name}");
        request.setPathParam("event_type_name", eventTypeName);
        request.setBody(eventTypeUpdate_1.EventTypeUpdateSerializer._toJsonObject(eventTypeUpdate));
        return request.send(this.requestCtx, eventTypeOut_1.EventTypeOutSerializer._fromJsonObject);
    }
    delete(eventTypeName, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.DELETE, "/api/v1/event-type/{event_type_name}");
        request.setPathParam("event_type_name", eventTypeName);
        request.setQueryParam("expunge", options === null || options === void 0 ? void 0 : options.expunge);
        return request.sendNoResponseBody(this.requestCtx);
    }
    patch(eventTypeName, eventTypePatch) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PATCH, "/api/v1/event-type/{event_type_name}");
        request.setPathParam("event_type_name", eventTypeName);
        request.setBody(eventTypePatch_1.EventTypePatchSerializer._toJsonObject(eventTypePatch));
        return request.send(this.requestCtx, eventTypeOut_1.EventTypeOutSerializer._fromJsonObject);
    }
}
exports.EventType = EventType; //# sourceMappingURL=eventType.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/health.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Health = void 0;
const request_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/request.js [app-rsc] (ecmascript)");
class Health {
    constructor(requestCtx){
        this.requestCtx = requestCtx;
    }
    get() {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/health");
        return request.sendNoResponseBody(this.requestCtx);
    }
}
exports.Health = Health; //# sourceMappingURL=health.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/ingestSourceConsumerPortalAccessIn.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IngestSourceConsumerPortalAccessInSerializer = void 0;
exports.IngestSourceConsumerPortalAccessInSerializer = {
    _fromJsonObject (object) {
        return {
            expiry: object["expiry"],
            readOnly: object["readOnly"]
        };
    },
    _toJsonObject (self) {
        return {
            expiry: self.expiry,
            readOnly: self.readOnly
        };
    }
}; //# sourceMappingURL=ingestSourceConsumerPortalAccessIn.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/ingestEndpointHeadersIn.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IngestEndpointHeadersInSerializer = void 0;
exports.IngestEndpointHeadersInSerializer = {
    _fromJsonObject (object) {
        return {
            headers: object["headers"]
        };
    },
    _toJsonObject (self) {
        return {
            headers: self.headers
        };
    }
}; //# sourceMappingURL=ingestEndpointHeadersIn.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/ingestEndpointHeadersOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IngestEndpointHeadersOutSerializer = void 0;
exports.IngestEndpointHeadersOutSerializer = {
    _fromJsonObject (object) {
        return {
            headers: object["headers"],
            sensitive: object["sensitive"]
        };
    },
    _toJsonObject (self) {
        return {
            headers: self.headers,
            sensitive: self.sensitive
        };
    }
}; //# sourceMappingURL=ingestEndpointHeadersOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/ingestEndpointIn.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IngestEndpointInSerializer = void 0;
exports.IngestEndpointInSerializer = {
    _fromJsonObject (object) {
        return {
            description: object["description"],
            disabled: object["disabled"],
            metadata: object["metadata"],
            rateLimit: object["rateLimit"],
            secret: object["secret"],
            uid: object["uid"],
            url: object["url"]
        };
    },
    _toJsonObject (self) {
        return {
            description: self.description,
            disabled: self.disabled,
            metadata: self.metadata,
            rateLimit: self.rateLimit,
            secret: self.secret,
            uid: self.uid,
            url: self.url
        };
    }
}; //# sourceMappingURL=ingestEndpointIn.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/ingestEndpointOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IngestEndpointOutSerializer = void 0;
exports.IngestEndpointOutSerializer = {
    _fromJsonObject (object) {
        return {
            createdAt: new Date(object["createdAt"]),
            description: object["description"],
            disabled: object["disabled"],
            id: object["id"],
            metadata: object["metadata"],
            rateLimit: object["rateLimit"],
            uid: object["uid"],
            updatedAt: new Date(object["updatedAt"]),
            url: object["url"]
        };
    },
    _toJsonObject (self) {
        return {
            createdAt: self.createdAt,
            description: self.description,
            disabled: self.disabled,
            id: self.id,
            metadata: self.metadata,
            rateLimit: self.rateLimit,
            uid: self.uid,
            updatedAt: self.updatedAt,
            url: self.url
        };
    }
}; //# sourceMappingURL=ingestEndpointOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/ingestEndpointSecretIn.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IngestEndpointSecretInSerializer = void 0;
exports.IngestEndpointSecretInSerializer = {
    _fromJsonObject (object) {
        return {
            key: object["key"]
        };
    },
    _toJsonObject (self) {
        return {
            key: self.key
        };
    }
}; //# sourceMappingURL=ingestEndpointSecretIn.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/ingestEndpointSecretOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IngestEndpointSecretOutSerializer = void 0;
exports.IngestEndpointSecretOutSerializer = {
    _fromJsonObject (object) {
        return {
            key: object["key"]
        };
    },
    _toJsonObject (self) {
        return {
            key: self.key
        };
    }
}; //# sourceMappingURL=ingestEndpointSecretOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/ingestEndpointTransformationOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IngestEndpointTransformationOutSerializer = void 0;
exports.IngestEndpointTransformationOutSerializer = {
    _fromJsonObject (object) {
        return {
            code: object["code"],
            enabled: object["enabled"]
        };
    },
    _toJsonObject (self) {
        return {
            code: self.code,
            enabled: self.enabled
        };
    }
}; //# sourceMappingURL=ingestEndpointTransformationOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/ingestEndpointTransformationPatch.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IngestEndpointTransformationPatchSerializer = void 0;
exports.IngestEndpointTransformationPatchSerializer = {
    _fromJsonObject (object) {
        return {
            code: object["code"],
            enabled: object["enabled"]
        };
    },
    _toJsonObject (self) {
        return {
            code: self.code,
            enabled: self.enabled
        };
    }
}; //# sourceMappingURL=ingestEndpointTransformationPatch.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/ingestEndpointUpdate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IngestEndpointUpdateSerializer = void 0;
exports.IngestEndpointUpdateSerializer = {
    _fromJsonObject (object) {
        return {
            description: object["description"],
            disabled: object["disabled"],
            metadata: object["metadata"],
            rateLimit: object["rateLimit"],
            uid: object["uid"],
            url: object["url"]
        };
    },
    _toJsonObject (self) {
        return {
            description: self.description,
            disabled: self.disabled,
            metadata: self.metadata,
            rateLimit: self.rateLimit,
            uid: self.uid,
            url: self.url
        };
    }
}; //# sourceMappingURL=ingestEndpointUpdate.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/listResponseIngestEndpointOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListResponseIngestEndpointOutSerializer = void 0;
const ingestEndpointOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/ingestEndpointOut.js [app-rsc] (ecmascript)");
exports.ListResponseIngestEndpointOutSerializer = {
    _fromJsonObject (object) {
        return {
            data: object["data"].map((item)=>ingestEndpointOut_1.IngestEndpointOutSerializer._fromJsonObject(item)),
            done: object["done"],
            iterator: object["iterator"],
            prevIterator: object["prevIterator"]
        };
    },
    _toJsonObject (self) {
        return {
            data: self.data.map((item)=>ingestEndpointOut_1.IngestEndpointOutSerializer._toJsonObject(item)),
            done: self.done,
            iterator: self.iterator,
            prevIterator: self.prevIterator
        };
    }
}; //# sourceMappingURL=listResponseIngestEndpointOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/ingestEndpoint.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IngestEndpoint = void 0;
const ingestEndpointHeadersIn_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/ingestEndpointHeadersIn.js [app-rsc] (ecmascript)");
const ingestEndpointHeadersOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/ingestEndpointHeadersOut.js [app-rsc] (ecmascript)");
const ingestEndpointIn_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/ingestEndpointIn.js [app-rsc] (ecmascript)");
const ingestEndpointOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/ingestEndpointOut.js [app-rsc] (ecmascript)");
const ingestEndpointSecretIn_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/ingestEndpointSecretIn.js [app-rsc] (ecmascript)");
const ingestEndpointSecretOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/ingestEndpointSecretOut.js [app-rsc] (ecmascript)");
const ingestEndpointTransformationOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/ingestEndpointTransformationOut.js [app-rsc] (ecmascript)");
const ingestEndpointTransformationPatch_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/ingestEndpointTransformationPatch.js [app-rsc] (ecmascript)");
const ingestEndpointUpdate_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/ingestEndpointUpdate.js [app-rsc] (ecmascript)");
const listResponseIngestEndpointOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/listResponseIngestEndpointOut.js [app-rsc] (ecmascript)");
const request_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/request.js [app-rsc] (ecmascript)");
class IngestEndpoint {
    constructor(requestCtx){
        this.requestCtx = requestCtx;
    }
    list(sourceId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/ingest/api/v1/source/{source_id}/endpoint");
        request.setPathParam("source_id", sourceId);
        request.setQueryParam("limit", options === null || options === void 0 ? void 0 : options.limit);
        request.setQueryParam("iterator", options === null || options === void 0 ? void 0 : options.iterator);
        request.setQueryParam("order", options === null || options === void 0 ? void 0 : options.order);
        return request.send(this.requestCtx, listResponseIngestEndpointOut_1.ListResponseIngestEndpointOutSerializer._fromJsonObject);
    }
    create(sourceId, ingestEndpointIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/ingest/api/v1/source/{source_id}/endpoint");
        request.setPathParam("source_id", sourceId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(ingestEndpointIn_1.IngestEndpointInSerializer._toJsonObject(ingestEndpointIn));
        return request.send(this.requestCtx, ingestEndpointOut_1.IngestEndpointOutSerializer._fromJsonObject);
    }
    get(sourceId, endpointId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/ingest/api/v1/source/{source_id}/endpoint/{endpoint_id}");
        request.setPathParam("source_id", sourceId);
        request.setPathParam("endpoint_id", endpointId);
        return request.send(this.requestCtx, ingestEndpointOut_1.IngestEndpointOutSerializer._fromJsonObject);
    }
    update(sourceId, endpointId, ingestEndpointUpdate) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PUT, "/ingest/api/v1/source/{source_id}/endpoint/{endpoint_id}");
        request.setPathParam("source_id", sourceId);
        request.setPathParam("endpoint_id", endpointId);
        request.setBody(ingestEndpointUpdate_1.IngestEndpointUpdateSerializer._toJsonObject(ingestEndpointUpdate));
        return request.send(this.requestCtx, ingestEndpointOut_1.IngestEndpointOutSerializer._fromJsonObject);
    }
    delete(sourceId, endpointId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.DELETE, "/ingest/api/v1/source/{source_id}/endpoint/{endpoint_id}");
        request.setPathParam("source_id", sourceId);
        request.setPathParam("endpoint_id", endpointId);
        return request.sendNoResponseBody(this.requestCtx);
    }
    getHeaders(sourceId, endpointId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/ingest/api/v1/source/{source_id}/endpoint/{endpoint_id}/headers");
        request.setPathParam("source_id", sourceId);
        request.setPathParam("endpoint_id", endpointId);
        return request.send(this.requestCtx, ingestEndpointHeadersOut_1.IngestEndpointHeadersOutSerializer._fromJsonObject);
    }
    updateHeaders(sourceId, endpointId, ingestEndpointHeadersIn) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PUT, "/ingest/api/v1/source/{source_id}/endpoint/{endpoint_id}/headers");
        request.setPathParam("source_id", sourceId);
        request.setPathParam("endpoint_id", endpointId);
        request.setBody(ingestEndpointHeadersIn_1.IngestEndpointHeadersInSerializer._toJsonObject(ingestEndpointHeadersIn));
        return request.sendNoResponseBody(this.requestCtx);
    }
    getSecret(sourceId, endpointId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/ingest/api/v1/source/{source_id}/endpoint/{endpoint_id}/secret");
        request.setPathParam("source_id", sourceId);
        request.setPathParam("endpoint_id", endpointId);
        return request.send(this.requestCtx, ingestEndpointSecretOut_1.IngestEndpointSecretOutSerializer._fromJsonObject);
    }
    rotateSecret(sourceId, endpointId, ingestEndpointSecretIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/ingest/api/v1/source/{source_id}/endpoint/{endpoint_id}/secret/rotate");
        request.setPathParam("source_id", sourceId);
        request.setPathParam("endpoint_id", endpointId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(ingestEndpointSecretIn_1.IngestEndpointSecretInSerializer._toJsonObject(ingestEndpointSecretIn));
        return request.sendNoResponseBody(this.requestCtx);
    }
    getTransformation(sourceId, endpointId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/ingest/api/v1/source/{source_id}/endpoint/{endpoint_id}/transformation");
        request.setPathParam("source_id", sourceId);
        request.setPathParam("endpoint_id", endpointId);
        return request.send(this.requestCtx, ingestEndpointTransformationOut_1.IngestEndpointTransformationOutSerializer._fromJsonObject);
    }
    setTransformation(sourceId, endpointId, ingestEndpointTransformationPatch) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PATCH, "/ingest/api/v1/source/{source_id}/endpoint/{endpoint_id}/transformation");
        request.setPathParam("source_id", sourceId);
        request.setPathParam("endpoint_id", endpointId);
        request.setBody(ingestEndpointTransformationPatch_1.IngestEndpointTransformationPatchSerializer._toJsonObject(ingestEndpointTransformationPatch));
        return request.sendNoResponseBody(this.requestCtx);
    }
}
exports.IngestEndpoint = IngestEndpoint; //# sourceMappingURL=ingestEndpoint.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/adobeSignConfig.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AdobeSignConfigSerializer = void 0;
exports.AdobeSignConfigSerializer = {
    _fromJsonObject (object) {
        return {
            clientId: object["clientId"]
        };
    },
    _toJsonObject (self) {
        return {
            clientId: self.clientId
        };
    }
}; //# sourceMappingURL=adobeSignConfig.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/airwallexConfig.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AirwallexConfigSerializer = void 0;
exports.AirwallexConfigSerializer = {
    _fromJsonObject (object) {
        return {
            secret: object["secret"]
        };
    },
    _toJsonObject (self) {
        return {
            secret: self.secret
        };
    }
}; //# sourceMappingURL=airwallexConfig.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/checkbookConfig.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CheckbookConfigSerializer = void 0;
exports.CheckbookConfigSerializer = {
    _fromJsonObject (object) {
        return {
            secret: object["secret"]
        };
    },
    _toJsonObject (self) {
        return {
            secret: self.secret
        };
    }
}; //# sourceMappingURL=checkbookConfig.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/cronConfig.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CronConfigSerializer = void 0;
exports.CronConfigSerializer = {
    _fromJsonObject (object) {
        return {
            contentType: object["contentType"],
            payload: object["payload"],
            schedule: object["schedule"]
        };
    },
    _toJsonObject (self) {
        return {
            contentType: self.contentType,
            payload: self.payload,
            schedule: self.schedule
        };
    }
}; //# sourceMappingURL=cronConfig.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/docusignConfig.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DocusignConfigSerializer = void 0;
exports.DocusignConfigSerializer = {
    _fromJsonObject (object) {
        return {
            secret: object["secret"]
        };
    },
    _toJsonObject (self) {
        return {
            secret: self.secret
        };
    }
}; //# sourceMappingURL=docusignConfig.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/easypostConfig.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EasypostConfigSerializer = void 0;
exports.EasypostConfigSerializer = {
    _fromJsonObject (object) {
        return {
            secret: object["secret"]
        };
    },
    _toJsonObject (self) {
        return {
            secret: self.secret
        };
    }
}; //# sourceMappingURL=easypostConfig.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/githubConfig.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GithubConfigSerializer = void 0;
exports.GithubConfigSerializer = {
    _fromJsonObject (object) {
        return {
            secret: object["secret"]
        };
    },
    _toJsonObject (self) {
        return {
            secret: self.secret
        };
    }
}; //# sourceMappingURL=githubConfig.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/hubspotConfig.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HubspotConfigSerializer = void 0;
exports.HubspotConfigSerializer = {
    _fromJsonObject (object) {
        return {
            secret: object["secret"]
        };
    },
    _toJsonObject (self) {
        return {
            secret: self.secret
        };
    }
}; //# sourceMappingURL=hubspotConfig.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/orumIoConfig.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OrumIoConfigSerializer = void 0;
exports.OrumIoConfigSerializer = {
    _fromJsonObject (object) {
        return {
            publicKey: object["publicKey"]
        };
    },
    _toJsonObject (self) {
        return {
            publicKey: self.publicKey
        };
    }
}; //# sourceMappingURL=orumIoConfig.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/pandaDocConfig.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PandaDocConfigSerializer = void 0;
exports.PandaDocConfigSerializer = {
    _fromJsonObject (object) {
        return {
            secret: object["secret"]
        };
    },
    _toJsonObject (self) {
        return {
            secret: self.secret
        };
    }
}; //# sourceMappingURL=pandaDocConfig.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/portIoConfig.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PortIoConfigSerializer = void 0;
exports.PortIoConfigSerializer = {
    _fromJsonObject (object) {
        return {
            secret: object["secret"]
        };
    },
    _toJsonObject (self) {
        return {
            secret: self.secret
        };
    }
}; //# sourceMappingURL=portIoConfig.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/rutterConfig.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RutterConfigSerializer = void 0;
exports.RutterConfigSerializer = {
    _fromJsonObject (object) {
        return {
            secret: object["secret"]
        };
    },
    _toJsonObject (self) {
        return {
            secret: self.secret
        };
    }
}; //# sourceMappingURL=rutterConfig.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/segmentConfig.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SegmentConfigSerializer = void 0;
exports.SegmentConfigSerializer = {
    _fromJsonObject (object) {
        return {
            secret: object["secret"]
        };
    },
    _toJsonObject (self) {
        return {
            secret: self.secret
        };
    }
}; //# sourceMappingURL=segmentConfig.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/shopifyConfig.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ShopifyConfigSerializer = void 0;
exports.ShopifyConfigSerializer = {
    _fromJsonObject (object) {
        return {
            secret: object["secret"]
        };
    },
    _toJsonObject (self) {
        return {
            secret: self.secret
        };
    }
}; //# sourceMappingURL=shopifyConfig.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/slackConfig.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SlackConfigSerializer = void 0;
exports.SlackConfigSerializer = {
    _fromJsonObject (object) {
        return {
            secret: object["secret"]
        };
    },
    _toJsonObject (self) {
        return {
            secret: self.secret
        };
    }
}; //# sourceMappingURL=slackConfig.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/stripeConfig.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StripeConfigSerializer = void 0;
exports.StripeConfigSerializer = {
    _fromJsonObject (object) {
        return {
            secret: object["secret"]
        };
    },
    _toJsonObject (self) {
        return {
            secret: self.secret
        };
    }
}; //# sourceMappingURL=stripeConfig.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/svixConfig.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SvixConfigSerializer = void 0;
exports.SvixConfigSerializer = {
    _fromJsonObject (object) {
        return {
            secret: object["secret"]
        };
    },
    _toJsonObject (self) {
        return {
            secret: self.secret
        };
    }
}; //# sourceMappingURL=svixConfig.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/telnyxConfig.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TelnyxConfigSerializer = void 0;
exports.TelnyxConfigSerializer = {
    _fromJsonObject (object) {
        return {
            publicKey: object["publicKey"]
        };
    },
    _toJsonObject (self) {
        return {
            publicKey: self.publicKey
        };
    }
}; //# sourceMappingURL=telnyxConfig.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/vapiConfig.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VapiConfigSerializer = void 0;
exports.VapiConfigSerializer = {
    _fromJsonObject (object) {
        return {
            secret: object["secret"]
        };
    },
    _toJsonObject (self) {
        return {
            secret: self.secret
        };
    }
}; //# sourceMappingURL=vapiConfig.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/veriffConfig.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VeriffConfigSerializer = void 0;
exports.VeriffConfigSerializer = {
    _fromJsonObject (object) {
        return {
            secret: object["secret"]
        };
    },
    _toJsonObject (self) {
        return {
            secret: self.secret
        };
    }
}; //# sourceMappingURL=veriffConfig.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/zoomConfig.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ZoomConfigSerializer = void 0;
exports.ZoomConfigSerializer = {
    _fromJsonObject (object) {
        return {
            secret: object["secret"]
        };
    },
    _toJsonObject (self) {
        return {
            secret: self.secret
        };
    }
}; //# sourceMappingURL=zoomConfig.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/ingestSourceIn.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IngestSourceInSerializer = void 0;
const adobeSignConfig_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/adobeSignConfig.js [app-rsc] (ecmascript)");
const airwallexConfig_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/airwallexConfig.js [app-rsc] (ecmascript)");
const checkbookConfig_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/checkbookConfig.js [app-rsc] (ecmascript)");
const cronConfig_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/cronConfig.js [app-rsc] (ecmascript)");
const docusignConfig_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/docusignConfig.js [app-rsc] (ecmascript)");
const easypostConfig_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/easypostConfig.js [app-rsc] (ecmascript)");
const githubConfig_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/githubConfig.js [app-rsc] (ecmascript)");
const hubspotConfig_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/hubspotConfig.js [app-rsc] (ecmascript)");
const orumIoConfig_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/orumIoConfig.js [app-rsc] (ecmascript)");
const pandaDocConfig_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/pandaDocConfig.js [app-rsc] (ecmascript)");
const portIoConfig_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/portIoConfig.js [app-rsc] (ecmascript)");
const rutterConfig_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/rutterConfig.js [app-rsc] (ecmascript)");
const segmentConfig_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/segmentConfig.js [app-rsc] (ecmascript)");
const shopifyConfig_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/shopifyConfig.js [app-rsc] (ecmascript)");
const slackConfig_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/slackConfig.js [app-rsc] (ecmascript)");
const stripeConfig_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/stripeConfig.js [app-rsc] (ecmascript)");
const svixConfig_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/svixConfig.js [app-rsc] (ecmascript)");
const telnyxConfig_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/telnyxConfig.js [app-rsc] (ecmascript)");
const vapiConfig_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/vapiConfig.js [app-rsc] (ecmascript)");
const veriffConfig_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/veriffConfig.js [app-rsc] (ecmascript)");
const zoomConfig_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/zoomConfig.js [app-rsc] (ecmascript)");
exports.IngestSourceInSerializer = {
    _fromJsonObject (object) {
        const type = object["type"];
        function getConfig(type) {
            switch(type){
                case "generic-webhook":
                    return {};
                case "cron":
                    return cronConfig_1.CronConfigSerializer._fromJsonObject(object["config"]);
                case "adobe-sign":
                    return adobeSignConfig_1.AdobeSignConfigSerializer._fromJsonObject(object["config"]);
                case "beehiiv":
                    return svixConfig_1.SvixConfigSerializer._fromJsonObject(object["config"]);
                case "brex":
                    return svixConfig_1.SvixConfigSerializer._fromJsonObject(object["config"]);
                case "checkbook":
                    return checkbookConfig_1.CheckbookConfigSerializer._fromJsonObject(object["config"]);
                case "clerk":
                    return svixConfig_1.SvixConfigSerializer._fromJsonObject(object["config"]);
                case "docusign":
                    return docusignConfig_1.DocusignConfigSerializer._fromJsonObject(object["config"]);
                case "easypost":
                    return easypostConfig_1.EasypostConfigSerializer._fromJsonObject(object["config"]);
                case "github":
                    return githubConfig_1.GithubConfigSerializer._fromJsonObject(object["config"]);
                case "guesty":
                    return svixConfig_1.SvixConfigSerializer._fromJsonObject(object["config"]);
                case "hubspot":
                    return hubspotConfig_1.HubspotConfigSerializer._fromJsonObject(object["config"]);
                case "incident-io":
                    return svixConfig_1.SvixConfigSerializer._fromJsonObject(object["config"]);
                case "lithic":
                    return svixConfig_1.SvixConfigSerializer._fromJsonObject(object["config"]);
                case "nash":
                    return svixConfig_1.SvixConfigSerializer._fromJsonObject(object["config"]);
                case "orum-io":
                    return orumIoConfig_1.OrumIoConfigSerializer._fromJsonObject(object["config"]);
                case "panda-doc":
                    return pandaDocConfig_1.PandaDocConfigSerializer._fromJsonObject(object["config"]);
                case "port-io":
                    return portIoConfig_1.PortIoConfigSerializer._fromJsonObject(object["config"]);
                case "pleo":
                    return svixConfig_1.SvixConfigSerializer._fromJsonObject(object["config"]);
                case "replicate":
                    return svixConfig_1.SvixConfigSerializer._fromJsonObject(object["config"]);
                case "resend":
                    return svixConfig_1.SvixConfigSerializer._fromJsonObject(object["config"]);
                case "rutter":
                    return rutterConfig_1.RutterConfigSerializer._fromJsonObject(object["config"]);
                case "safebase":
                    return svixConfig_1.SvixConfigSerializer._fromJsonObject(object["config"]);
                case "sardine":
                    return svixConfig_1.SvixConfigSerializer._fromJsonObject(object["config"]);
                case "segment":
                    return segmentConfig_1.SegmentConfigSerializer._fromJsonObject(object["config"]);
                case "shopify":
                    return shopifyConfig_1.ShopifyConfigSerializer._fromJsonObject(object["config"]);
                case "slack":
                    return slackConfig_1.SlackConfigSerializer._fromJsonObject(object["config"]);
                case "stripe":
                    return stripeConfig_1.StripeConfigSerializer._fromJsonObject(object["config"]);
                case "stych":
                    return svixConfig_1.SvixConfigSerializer._fromJsonObject(object["config"]);
                case "svix":
                    return svixConfig_1.SvixConfigSerializer._fromJsonObject(object["config"]);
                case "zoom":
                    return zoomConfig_1.ZoomConfigSerializer._fromJsonObject(object["config"]);
                case "telnyx":
                    return telnyxConfig_1.TelnyxConfigSerializer._fromJsonObject(object["config"]);
                case "vapi":
                    return vapiConfig_1.VapiConfigSerializer._fromJsonObject(object["config"]);
                case "open-ai":
                    return svixConfig_1.SvixConfigSerializer._fromJsonObject(object["config"]);
                case "render":
                    return svixConfig_1.SvixConfigSerializer._fromJsonObject(object["config"]);
                case "veriff":
                    return veriffConfig_1.VeriffConfigSerializer._fromJsonObject(object["config"]);
                case "airwallex":
                    return airwallexConfig_1.AirwallexConfigSerializer._fromJsonObject(object["config"]);
                default:
                    throw new Error(`Unexpected type: ${type}`);
            }
        }
        return {
            type,
            config: getConfig(type),
            metadata: object["metadata"],
            name: object["name"],
            uid: object["uid"]
        };
    },
    _toJsonObject (self) {
        let config;
        switch(self.type){
            case "generic-webhook":
                config = {};
                break;
            case "cron":
                config = cronConfig_1.CronConfigSerializer._toJsonObject(self.config);
                break;
            case "adobe-sign":
                config = adobeSignConfig_1.AdobeSignConfigSerializer._toJsonObject(self.config);
                break;
            case "beehiiv":
                config = svixConfig_1.SvixConfigSerializer._toJsonObject(self.config);
                break;
            case "brex":
                config = svixConfig_1.SvixConfigSerializer._toJsonObject(self.config);
                break;
            case "checkbook":
                config = checkbookConfig_1.CheckbookConfigSerializer._toJsonObject(self.config);
                break;
            case "clerk":
                config = svixConfig_1.SvixConfigSerializer._toJsonObject(self.config);
                break;
            case "docusign":
                config = docusignConfig_1.DocusignConfigSerializer._toJsonObject(self.config);
                break;
            case "easypost":
                config = easypostConfig_1.EasypostConfigSerializer._toJsonObject(self.config);
                break;
            case "github":
                config = githubConfig_1.GithubConfigSerializer._toJsonObject(self.config);
                break;
            case "guesty":
                config = svixConfig_1.SvixConfigSerializer._toJsonObject(self.config);
                break;
            case "hubspot":
                config = hubspotConfig_1.HubspotConfigSerializer._toJsonObject(self.config);
                break;
            case "incident-io":
                config = svixConfig_1.SvixConfigSerializer._toJsonObject(self.config);
                break;
            case "lithic":
                config = svixConfig_1.SvixConfigSerializer._toJsonObject(self.config);
                break;
            case "nash":
                config = svixConfig_1.SvixConfigSerializer._toJsonObject(self.config);
                break;
            case "orum-io":
                config = orumIoConfig_1.OrumIoConfigSerializer._toJsonObject(self.config);
                break;
            case "panda-doc":
                config = pandaDocConfig_1.PandaDocConfigSerializer._toJsonObject(self.config);
                break;
            case "port-io":
                config = portIoConfig_1.PortIoConfigSerializer._toJsonObject(self.config);
                break;
            case "pleo":
                config = svixConfig_1.SvixConfigSerializer._toJsonObject(self.config);
                break;
            case "replicate":
                config = svixConfig_1.SvixConfigSerializer._toJsonObject(self.config);
                break;
            case "resend":
                config = svixConfig_1.SvixConfigSerializer._toJsonObject(self.config);
                break;
            case "rutter":
                config = rutterConfig_1.RutterConfigSerializer._toJsonObject(self.config);
                break;
            case "safebase":
                config = svixConfig_1.SvixConfigSerializer._toJsonObject(self.config);
                break;
            case "sardine":
                config = svixConfig_1.SvixConfigSerializer._toJsonObject(self.config);
                break;
            case "segment":
                config = segmentConfig_1.SegmentConfigSerializer._toJsonObject(self.config);
                break;
            case "shopify":
                config = shopifyConfig_1.ShopifyConfigSerializer._toJsonObject(self.config);
                break;
            case "slack":
                config = slackConfig_1.SlackConfigSerializer._toJsonObject(self.config);
                break;
            case "stripe":
                config = stripeConfig_1.StripeConfigSerializer._toJsonObject(self.config);
                break;
            case "stych":
                config = svixConfig_1.SvixConfigSerializer._toJsonObject(self.config);
                break;
            case "svix":
                config = svixConfig_1.SvixConfigSerializer._toJsonObject(self.config);
                break;
            case "zoom":
                config = zoomConfig_1.ZoomConfigSerializer._toJsonObject(self.config);
                break;
            case "telnyx":
                config = telnyxConfig_1.TelnyxConfigSerializer._toJsonObject(self.config);
                break;
            case "vapi":
                config = vapiConfig_1.VapiConfigSerializer._toJsonObject(self.config);
                break;
            case "open-ai":
                config = svixConfig_1.SvixConfigSerializer._toJsonObject(self.config);
                break;
            case "render":
                config = svixConfig_1.SvixConfigSerializer._toJsonObject(self.config);
                break;
            case "veriff":
                config = veriffConfig_1.VeriffConfigSerializer._toJsonObject(self.config);
                break;
            case "airwallex":
                config = airwallexConfig_1.AirwallexConfigSerializer._toJsonObject(self.config);
                break;
        }
        return {
            type: self.type,
            config: config,
            metadata: self.metadata,
            name: self.name,
            uid: self.uid
        };
    }
}; //# sourceMappingURL=ingestSourceIn.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/adobeSignConfigOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AdobeSignConfigOutSerializer = void 0;
exports.AdobeSignConfigOutSerializer = {
    _fromJsonObject (object) {
        return {};
    },
    _toJsonObject (self) {
        return {};
    }
}; //# sourceMappingURL=adobeSignConfigOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/airwallexConfigOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AirwallexConfigOutSerializer = void 0;
exports.AirwallexConfigOutSerializer = {
    _fromJsonObject (object) {
        return {};
    },
    _toJsonObject (self) {
        return {};
    }
}; //# sourceMappingURL=airwallexConfigOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/checkbookConfigOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CheckbookConfigOutSerializer = void 0;
exports.CheckbookConfigOutSerializer = {
    _fromJsonObject (object) {
        return {};
    },
    _toJsonObject (self) {
        return {};
    }
}; //# sourceMappingURL=checkbookConfigOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/docusignConfigOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DocusignConfigOutSerializer = void 0;
exports.DocusignConfigOutSerializer = {
    _fromJsonObject (object) {
        return {};
    },
    _toJsonObject (self) {
        return {};
    }
}; //# sourceMappingURL=docusignConfigOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/easypostConfigOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EasypostConfigOutSerializer = void 0;
exports.EasypostConfigOutSerializer = {
    _fromJsonObject (object) {
        return {};
    },
    _toJsonObject (self) {
        return {};
    }
}; //# sourceMappingURL=easypostConfigOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/githubConfigOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GithubConfigOutSerializer = void 0;
exports.GithubConfigOutSerializer = {
    _fromJsonObject (object) {
        return {};
    },
    _toJsonObject (self) {
        return {};
    }
}; //# sourceMappingURL=githubConfigOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/hubspotConfigOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HubspotConfigOutSerializer = void 0;
exports.HubspotConfigOutSerializer = {
    _fromJsonObject (object) {
        return {};
    },
    _toJsonObject (self) {
        return {};
    }
}; //# sourceMappingURL=hubspotConfigOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/orumIoConfigOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OrumIoConfigOutSerializer = void 0;
exports.OrumIoConfigOutSerializer = {
    _fromJsonObject (object) {
        return {
            publicKey: object["publicKey"]
        };
    },
    _toJsonObject (self) {
        return {
            publicKey: self.publicKey
        };
    }
}; //# sourceMappingURL=orumIoConfigOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/pandaDocConfigOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PandaDocConfigOutSerializer = void 0;
exports.PandaDocConfigOutSerializer = {
    _fromJsonObject (object) {
        return {};
    },
    _toJsonObject (self) {
        return {};
    }
}; //# sourceMappingURL=pandaDocConfigOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/portIoConfigOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PortIoConfigOutSerializer = void 0;
exports.PortIoConfigOutSerializer = {
    _fromJsonObject (object) {
        return {};
    },
    _toJsonObject (self) {
        return {};
    }
}; //# sourceMappingURL=portIoConfigOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/rutterConfigOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RutterConfigOutSerializer = void 0;
exports.RutterConfigOutSerializer = {
    _fromJsonObject (object) {
        return {};
    },
    _toJsonObject (self) {
        return {};
    }
}; //# sourceMappingURL=rutterConfigOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/segmentConfigOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SegmentConfigOutSerializer = void 0;
exports.SegmentConfigOutSerializer = {
    _fromJsonObject (object) {
        return {};
    },
    _toJsonObject (self) {
        return {};
    }
}; //# sourceMappingURL=segmentConfigOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/shopifyConfigOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ShopifyConfigOutSerializer = void 0;
exports.ShopifyConfigOutSerializer = {
    _fromJsonObject (object) {
        return {};
    },
    _toJsonObject (self) {
        return {};
    }
}; //# sourceMappingURL=shopifyConfigOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/slackConfigOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SlackConfigOutSerializer = void 0;
exports.SlackConfigOutSerializer = {
    _fromJsonObject (object) {
        return {};
    },
    _toJsonObject (self) {
        return {};
    }
}; //# sourceMappingURL=slackConfigOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/stripeConfigOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StripeConfigOutSerializer = void 0;
exports.StripeConfigOutSerializer = {
    _fromJsonObject (object) {
        return {};
    },
    _toJsonObject (self) {
        return {};
    }
}; //# sourceMappingURL=stripeConfigOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/svixConfigOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SvixConfigOutSerializer = void 0;
exports.SvixConfigOutSerializer = {
    _fromJsonObject (object) {
        return {};
    },
    _toJsonObject (self) {
        return {};
    }
}; //# sourceMappingURL=svixConfigOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/telnyxConfigOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TelnyxConfigOutSerializer = void 0;
exports.TelnyxConfigOutSerializer = {
    _fromJsonObject (object) {
        return {
            publicKey: object["publicKey"]
        };
    },
    _toJsonObject (self) {
        return {
            publicKey: self.publicKey
        };
    }
}; //# sourceMappingURL=telnyxConfigOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/vapiConfigOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VapiConfigOutSerializer = void 0;
exports.VapiConfigOutSerializer = {
    _fromJsonObject (object) {
        return {};
    },
    _toJsonObject (self) {
        return {};
    }
}; //# sourceMappingURL=vapiConfigOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/veriffConfigOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VeriffConfigOutSerializer = void 0;
exports.VeriffConfigOutSerializer = {
    _fromJsonObject (object) {
        return {};
    },
    _toJsonObject (self) {
        return {};
    }
}; //# sourceMappingURL=veriffConfigOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/zoomConfigOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ZoomConfigOutSerializer = void 0;
exports.ZoomConfigOutSerializer = {
    _fromJsonObject (object) {
        return {};
    },
    _toJsonObject (self) {
        return {};
    }
}; //# sourceMappingURL=zoomConfigOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/ingestSourceOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IngestSourceOutSerializer = void 0;
const adobeSignConfigOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/adobeSignConfigOut.js [app-rsc] (ecmascript)");
const airwallexConfigOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/airwallexConfigOut.js [app-rsc] (ecmascript)");
const checkbookConfigOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/checkbookConfigOut.js [app-rsc] (ecmascript)");
const cronConfig_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/cronConfig.js [app-rsc] (ecmascript)");
const docusignConfigOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/docusignConfigOut.js [app-rsc] (ecmascript)");
const easypostConfigOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/easypostConfigOut.js [app-rsc] (ecmascript)");
const githubConfigOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/githubConfigOut.js [app-rsc] (ecmascript)");
const hubspotConfigOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/hubspotConfigOut.js [app-rsc] (ecmascript)");
const orumIoConfigOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/orumIoConfigOut.js [app-rsc] (ecmascript)");
const pandaDocConfigOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/pandaDocConfigOut.js [app-rsc] (ecmascript)");
const portIoConfigOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/portIoConfigOut.js [app-rsc] (ecmascript)");
const rutterConfigOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/rutterConfigOut.js [app-rsc] (ecmascript)");
const segmentConfigOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/segmentConfigOut.js [app-rsc] (ecmascript)");
const shopifyConfigOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/shopifyConfigOut.js [app-rsc] (ecmascript)");
const slackConfigOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/slackConfigOut.js [app-rsc] (ecmascript)");
const stripeConfigOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/stripeConfigOut.js [app-rsc] (ecmascript)");
const svixConfigOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/svixConfigOut.js [app-rsc] (ecmascript)");
const telnyxConfigOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/telnyxConfigOut.js [app-rsc] (ecmascript)");
const vapiConfigOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/vapiConfigOut.js [app-rsc] (ecmascript)");
const veriffConfigOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/veriffConfigOut.js [app-rsc] (ecmascript)");
const zoomConfigOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/zoomConfigOut.js [app-rsc] (ecmascript)");
exports.IngestSourceOutSerializer = {
    _fromJsonObject (object) {
        const type = object["type"];
        function getConfig(type) {
            switch(type){
                case "generic-webhook":
                    return {};
                case "cron":
                    return cronConfig_1.CronConfigSerializer._fromJsonObject(object["config"]);
                case "adobe-sign":
                    return adobeSignConfigOut_1.AdobeSignConfigOutSerializer._fromJsonObject(object["config"]);
                case "beehiiv":
                    return svixConfigOut_1.SvixConfigOutSerializer._fromJsonObject(object["config"]);
                case "brex":
                    return svixConfigOut_1.SvixConfigOutSerializer._fromJsonObject(object["config"]);
                case "checkbook":
                    return checkbookConfigOut_1.CheckbookConfigOutSerializer._fromJsonObject(object["config"]);
                case "clerk":
                    return svixConfigOut_1.SvixConfigOutSerializer._fromJsonObject(object["config"]);
                case "docusign":
                    return docusignConfigOut_1.DocusignConfigOutSerializer._fromJsonObject(object["config"]);
                case "easypost":
                    return easypostConfigOut_1.EasypostConfigOutSerializer._fromJsonObject(object["config"]);
                case "github":
                    return githubConfigOut_1.GithubConfigOutSerializer._fromJsonObject(object["config"]);
                case "guesty":
                    return svixConfigOut_1.SvixConfigOutSerializer._fromJsonObject(object["config"]);
                case "hubspot":
                    return hubspotConfigOut_1.HubspotConfigOutSerializer._fromJsonObject(object["config"]);
                case "incident-io":
                    return svixConfigOut_1.SvixConfigOutSerializer._fromJsonObject(object["config"]);
                case "lithic":
                    return svixConfigOut_1.SvixConfigOutSerializer._fromJsonObject(object["config"]);
                case "nash":
                    return svixConfigOut_1.SvixConfigOutSerializer._fromJsonObject(object["config"]);
                case "orum-io":
                    return orumIoConfigOut_1.OrumIoConfigOutSerializer._fromJsonObject(object["config"]);
                case "panda-doc":
                    return pandaDocConfigOut_1.PandaDocConfigOutSerializer._fromJsonObject(object["config"]);
                case "port-io":
                    return portIoConfigOut_1.PortIoConfigOutSerializer._fromJsonObject(object["config"]);
                case "pleo":
                    return svixConfigOut_1.SvixConfigOutSerializer._fromJsonObject(object["config"]);
                case "replicate":
                    return svixConfigOut_1.SvixConfigOutSerializer._fromJsonObject(object["config"]);
                case "resend":
                    return svixConfigOut_1.SvixConfigOutSerializer._fromJsonObject(object["config"]);
                case "rutter":
                    return rutterConfigOut_1.RutterConfigOutSerializer._fromJsonObject(object["config"]);
                case "safebase":
                    return svixConfigOut_1.SvixConfigOutSerializer._fromJsonObject(object["config"]);
                case "sardine":
                    return svixConfigOut_1.SvixConfigOutSerializer._fromJsonObject(object["config"]);
                case "segment":
                    return segmentConfigOut_1.SegmentConfigOutSerializer._fromJsonObject(object["config"]);
                case "shopify":
                    return shopifyConfigOut_1.ShopifyConfigOutSerializer._fromJsonObject(object["config"]);
                case "slack":
                    return slackConfigOut_1.SlackConfigOutSerializer._fromJsonObject(object["config"]);
                case "stripe":
                    return stripeConfigOut_1.StripeConfigOutSerializer._fromJsonObject(object["config"]);
                case "stych":
                    return svixConfigOut_1.SvixConfigOutSerializer._fromJsonObject(object["config"]);
                case "svix":
                    return svixConfigOut_1.SvixConfigOutSerializer._fromJsonObject(object["config"]);
                case "zoom":
                    return zoomConfigOut_1.ZoomConfigOutSerializer._fromJsonObject(object["config"]);
                case "telnyx":
                    return telnyxConfigOut_1.TelnyxConfigOutSerializer._fromJsonObject(object["config"]);
                case "vapi":
                    return vapiConfigOut_1.VapiConfigOutSerializer._fromJsonObject(object["config"]);
                case "open-ai":
                    return svixConfigOut_1.SvixConfigOutSerializer._fromJsonObject(object["config"]);
                case "render":
                    return svixConfigOut_1.SvixConfigOutSerializer._fromJsonObject(object["config"]);
                case "veriff":
                    return veriffConfigOut_1.VeriffConfigOutSerializer._fromJsonObject(object["config"]);
                case "airwallex":
                    return airwallexConfigOut_1.AirwallexConfigOutSerializer._fromJsonObject(object["config"]);
                default:
                    throw new Error(`Unexpected type: ${type}`);
            }
        }
        return {
            type,
            config: getConfig(type),
            createdAt: new Date(object["createdAt"]),
            id: object["id"],
            ingestUrl: object["ingestUrl"],
            metadata: object["metadata"],
            name: object["name"],
            uid: object["uid"],
            updatedAt: new Date(object["updatedAt"])
        };
    },
    _toJsonObject (self) {
        let config;
        switch(self.type){
            case "generic-webhook":
                config = {};
                break;
            case "cron":
                config = cronConfig_1.CronConfigSerializer._toJsonObject(self.config);
                break;
            case "adobe-sign":
                config = adobeSignConfigOut_1.AdobeSignConfigOutSerializer._toJsonObject(self.config);
                break;
            case "beehiiv":
                config = svixConfigOut_1.SvixConfigOutSerializer._toJsonObject(self.config);
                break;
            case "brex":
                config = svixConfigOut_1.SvixConfigOutSerializer._toJsonObject(self.config);
                break;
            case "checkbook":
                config = checkbookConfigOut_1.CheckbookConfigOutSerializer._toJsonObject(self.config);
                break;
            case "clerk":
                config = svixConfigOut_1.SvixConfigOutSerializer._toJsonObject(self.config);
                break;
            case "docusign":
                config = docusignConfigOut_1.DocusignConfigOutSerializer._toJsonObject(self.config);
                break;
            case "easypost":
                config = easypostConfigOut_1.EasypostConfigOutSerializer._toJsonObject(self.config);
                break;
            case "github":
                config = githubConfigOut_1.GithubConfigOutSerializer._toJsonObject(self.config);
                break;
            case "guesty":
                config = svixConfigOut_1.SvixConfigOutSerializer._toJsonObject(self.config);
                break;
            case "hubspot":
                config = hubspotConfigOut_1.HubspotConfigOutSerializer._toJsonObject(self.config);
                break;
            case "incident-io":
                config = svixConfigOut_1.SvixConfigOutSerializer._toJsonObject(self.config);
                break;
            case "lithic":
                config = svixConfigOut_1.SvixConfigOutSerializer._toJsonObject(self.config);
                break;
            case "nash":
                config = svixConfigOut_1.SvixConfigOutSerializer._toJsonObject(self.config);
                break;
            case "orum-io":
                config = orumIoConfigOut_1.OrumIoConfigOutSerializer._toJsonObject(self.config);
                break;
            case "panda-doc":
                config = pandaDocConfigOut_1.PandaDocConfigOutSerializer._toJsonObject(self.config);
                break;
            case "port-io":
                config = portIoConfigOut_1.PortIoConfigOutSerializer._toJsonObject(self.config);
                break;
            case "pleo":
                config = svixConfigOut_1.SvixConfigOutSerializer._toJsonObject(self.config);
                break;
            case "replicate":
                config = svixConfigOut_1.SvixConfigOutSerializer._toJsonObject(self.config);
                break;
            case "resend":
                config = svixConfigOut_1.SvixConfigOutSerializer._toJsonObject(self.config);
                break;
            case "rutter":
                config = rutterConfigOut_1.RutterConfigOutSerializer._toJsonObject(self.config);
                break;
            case "safebase":
                config = svixConfigOut_1.SvixConfigOutSerializer._toJsonObject(self.config);
                break;
            case "sardine":
                config = svixConfigOut_1.SvixConfigOutSerializer._toJsonObject(self.config);
                break;
            case "segment":
                config = segmentConfigOut_1.SegmentConfigOutSerializer._toJsonObject(self.config);
                break;
            case "shopify":
                config = shopifyConfigOut_1.ShopifyConfigOutSerializer._toJsonObject(self.config);
                break;
            case "slack":
                config = slackConfigOut_1.SlackConfigOutSerializer._toJsonObject(self.config);
                break;
            case "stripe":
                config = stripeConfigOut_1.StripeConfigOutSerializer._toJsonObject(self.config);
                break;
            case "stych":
                config = svixConfigOut_1.SvixConfigOutSerializer._toJsonObject(self.config);
                break;
            case "svix":
                config = svixConfigOut_1.SvixConfigOutSerializer._toJsonObject(self.config);
                break;
            case "zoom":
                config = zoomConfigOut_1.ZoomConfigOutSerializer._toJsonObject(self.config);
                break;
            case "telnyx":
                config = telnyxConfigOut_1.TelnyxConfigOutSerializer._toJsonObject(self.config);
                break;
            case "vapi":
                config = vapiConfigOut_1.VapiConfigOutSerializer._toJsonObject(self.config);
                break;
            case "open-ai":
                config = svixConfigOut_1.SvixConfigOutSerializer._toJsonObject(self.config);
                break;
            case "render":
                config = svixConfigOut_1.SvixConfigOutSerializer._toJsonObject(self.config);
                break;
            case "veriff":
                config = veriffConfigOut_1.VeriffConfigOutSerializer._toJsonObject(self.config);
                break;
            case "airwallex":
                config = airwallexConfigOut_1.AirwallexConfigOutSerializer._toJsonObject(self.config);
                break;
        }
        return {
            type: self.type,
            config: config,
            createdAt: self.createdAt,
            id: self.id,
            ingestUrl: self.ingestUrl,
            metadata: self.metadata,
            name: self.name,
            uid: self.uid,
            updatedAt: self.updatedAt
        };
    }
}; //# sourceMappingURL=ingestSourceOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/listResponseIngestSourceOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListResponseIngestSourceOutSerializer = void 0;
const ingestSourceOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/ingestSourceOut.js [app-rsc] (ecmascript)");
exports.ListResponseIngestSourceOutSerializer = {
    _fromJsonObject (object) {
        return {
            data: object["data"].map((item)=>ingestSourceOut_1.IngestSourceOutSerializer._fromJsonObject(item)),
            done: object["done"],
            iterator: object["iterator"],
            prevIterator: object["prevIterator"]
        };
    },
    _toJsonObject (self) {
        return {
            data: self.data.map((item)=>ingestSourceOut_1.IngestSourceOutSerializer._toJsonObject(item)),
            done: self.done,
            iterator: self.iterator,
            prevIterator: self.prevIterator
        };
    }
}; //# sourceMappingURL=listResponseIngestSourceOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/rotateTokenOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RotateTokenOutSerializer = void 0;
exports.RotateTokenOutSerializer = {
    _fromJsonObject (object) {
        return {
            ingestUrl: object["ingestUrl"]
        };
    },
    _toJsonObject (self) {
        return {
            ingestUrl: self.ingestUrl
        };
    }
}; //# sourceMappingURL=rotateTokenOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/ingestSource.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IngestSource = void 0;
const ingestSourceIn_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/ingestSourceIn.js [app-rsc] (ecmascript)");
const ingestSourceOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/ingestSourceOut.js [app-rsc] (ecmascript)");
const listResponseIngestSourceOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/listResponseIngestSourceOut.js [app-rsc] (ecmascript)");
const rotateTokenOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/rotateTokenOut.js [app-rsc] (ecmascript)");
const request_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/request.js [app-rsc] (ecmascript)");
class IngestSource {
    constructor(requestCtx){
        this.requestCtx = requestCtx;
    }
    list(options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/ingest/api/v1/source");
        request.setQueryParam("limit", options === null || options === void 0 ? void 0 : options.limit);
        request.setQueryParam("iterator", options === null || options === void 0 ? void 0 : options.iterator);
        request.setQueryParam("order", options === null || options === void 0 ? void 0 : options.order);
        return request.send(this.requestCtx, listResponseIngestSourceOut_1.ListResponseIngestSourceOutSerializer._fromJsonObject);
    }
    create(ingestSourceIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/ingest/api/v1/source");
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(ingestSourceIn_1.IngestSourceInSerializer._toJsonObject(ingestSourceIn));
        return request.send(this.requestCtx, ingestSourceOut_1.IngestSourceOutSerializer._fromJsonObject);
    }
    get(sourceId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/ingest/api/v1/source/{source_id}");
        request.setPathParam("source_id", sourceId);
        return request.send(this.requestCtx, ingestSourceOut_1.IngestSourceOutSerializer._fromJsonObject);
    }
    update(sourceId, ingestSourceIn) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PUT, "/ingest/api/v1/source/{source_id}");
        request.setPathParam("source_id", sourceId);
        request.setBody(ingestSourceIn_1.IngestSourceInSerializer._toJsonObject(ingestSourceIn));
        return request.send(this.requestCtx, ingestSourceOut_1.IngestSourceOutSerializer._fromJsonObject);
    }
    delete(sourceId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.DELETE, "/ingest/api/v1/source/{source_id}");
        request.setPathParam("source_id", sourceId);
        return request.sendNoResponseBody(this.requestCtx);
    }
    rotateToken(sourceId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/ingest/api/v1/source/{source_id}/token/rotate");
        request.setPathParam("source_id", sourceId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        return request.send(this.requestCtx, rotateTokenOut_1.RotateTokenOutSerializer._fromJsonObject);
    }
}
exports.IngestSource = IngestSource; //# sourceMappingURL=ingestSource.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/ingest.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ingest = void 0;
const dashboardAccessOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/dashboardAccessOut.js [app-rsc] (ecmascript)");
const ingestSourceConsumerPortalAccessIn_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/ingestSourceConsumerPortalAccessIn.js [app-rsc] (ecmascript)");
const ingestEndpoint_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/ingestEndpoint.js [app-rsc] (ecmascript)");
const ingestSource_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/ingestSource.js [app-rsc] (ecmascript)");
const request_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/request.js [app-rsc] (ecmascript)");
class Ingest {
    constructor(requestCtx){
        this.requestCtx = requestCtx;
    }
    get endpoint() {
        return new ingestEndpoint_1.IngestEndpoint(this.requestCtx);
    }
    get source() {
        return new ingestSource_1.IngestSource(this.requestCtx);
    }
    dashboard(sourceId, ingestSourceConsumerPortalAccessIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/ingest/api/v1/source/{source_id}/dashboard");
        request.setPathParam("source_id", sourceId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(ingestSourceConsumerPortalAccessIn_1.IngestSourceConsumerPortalAccessInSerializer._toJsonObject(ingestSourceConsumerPortalAccessIn));
        return request.send(this.requestCtx, dashboardAccessOut_1.DashboardAccessOutSerializer._fromJsonObject);
    }
}
exports.Ingest = Ingest; //# sourceMappingURL=ingest.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/integrationIn.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IntegrationInSerializer = void 0;
exports.IntegrationInSerializer = {
    _fromJsonObject (object) {
        return {
            featureFlags: object["featureFlags"],
            name: object["name"]
        };
    },
    _toJsonObject (self) {
        return {
            featureFlags: self.featureFlags,
            name: self.name
        };
    }
}; //# sourceMappingURL=integrationIn.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/integrationKeyOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IntegrationKeyOutSerializer = void 0;
exports.IntegrationKeyOutSerializer = {
    _fromJsonObject (object) {
        return {
            key: object["key"]
        };
    },
    _toJsonObject (self) {
        return {
            key: self.key
        };
    }
}; //# sourceMappingURL=integrationKeyOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/integrationOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IntegrationOutSerializer = void 0;
exports.IntegrationOutSerializer = {
    _fromJsonObject (object) {
        return {
            createdAt: new Date(object["createdAt"]),
            featureFlags: object["featureFlags"],
            id: object["id"],
            name: object["name"],
            updatedAt: new Date(object["updatedAt"])
        };
    },
    _toJsonObject (self) {
        return {
            createdAt: self.createdAt,
            featureFlags: self.featureFlags,
            id: self.id,
            name: self.name,
            updatedAt: self.updatedAt
        };
    }
}; //# sourceMappingURL=integrationOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/integrationUpdate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IntegrationUpdateSerializer = void 0;
exports.IntegrationUpdateSerializer = {
    _fromJsonObject (object) {
        return {
            featureFlags: object["featureFlags"],
            name: object["name"]
        };
    },
    _toJsonObject (self) {
        return {
            featureFlags: self.featureFlags,
            name: self.name
        };
    }
}; //# sourceMappingURL=integrationUpdate.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/listResponseIntegrationOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListResponseIntegrationOutSerializer = void 0;
const integrationOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/integrationOut.js [app-rsc] (ecmascript)");
exports.ListResponseIntegrationOutSerializer = {
    _fromJsonObject (object) {
        return {
            data: object["data"].map((item)=>integrationOut_1.IntegrationOutSerializer._fromJsonObject(item)),
            done: object["done"],
            iterator: object["iterator"],
            prevIterator: object["prevIterator"]
        };
    },
    _toJsonObject (self) {
        return {
            data: self.data.map((item)=>integrationOut_1.IntegrationOutSerializer._toJsonObject(item)),
            done: self.done,
            iterator: self.iterator,
            prevIterator: self.prevIterator
        };
    }
}; //# sourceMappingURL=listResponseIntegrationOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/integration.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Integration = void 0;
const integrationIn_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/integrationIn.js [app-rsc] (ecmascript)");
const integrationKeyOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/integrationKeyOut.js [app-rsc] (ecmascript)");
const integrationOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/integrationOut.js [app-rsc] (ecmascript)");
const integrationUpdate_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/integrationUpdate.js [app-rsc] (ecmascript)");
const listResponseIntegrationOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/listResponseIntegrationOut.js [app-rsc] (ecmascript)");
const request_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/request.js [app-rsc] (ecmascript)");
class Integration {
    constructor(requestCtx){
        this.requestCtx = requestCtx;
    }
    list(appId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/integration");
        request.setPathParam("app_id", appId);
        request.setQueryParam("limit", options === null || options === void 0 ? void 0 : options.limit);
        request.setQueryParam("iterator", options === null || options === void 0 ? void 0 : options.iterator);
        request.setQueryParam("order", options === null || options === void 0 ? void 0 : options.order);
        return request.send(this.requestCtx, listResponseIntegrationOut_1.ListResponseIntegrationOutSerializer._fromJsonObject);
    }
    create(appId, integrationIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/app/{app_id}/integration");
        request.setPathParam("app_id", appId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(integrationIn_1.IntegrationInSerializer._toJsonObject(integrationIn));
        return request.send(this.requestCtx, integrationOut_1.IntegrationOutSerializer._fromJsonObject);
    }
    get(appId, integId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/integration/{integ_id}");
        request.setPathParam("app_id", appId);
        request.setPathParam("integ_id", integId);
        return request.send(this.requestCtx, integrationOut_1.IntegrationOutSerializer._fromJsonObject);
    }
    update(appId, integId, integrationUpdate) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PUT, "/api/v1/app/{app_id}/integration/{integ_id}");
        request.setPathParam("app_id", appId);
        request.setPathParam("integ_id", integId);
        request.setBody(integrationUpdate_1.IntegrationUpdateSerializer._toJsonObject(integrationUpdate));
        return request.send(this.requestCtx, integrationOut_1.IntegrationOutSerializer._fromJsonObject);
    }
    delete(appId, integId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.DELETE, "/api/v1/app/{app_id}/integration/{integ_id}");
        request.setPathParam("app_id", appId);
        request.setPathParam("integ_id", integId);
        return request.sendNoResponseBody(this.requestCtx);
    }
    getKey(appId, integId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/integration/{integ_id}/key");
        request.setPathParam("app_id", appId);
        request.setPathParam("integ_id", integId);
        return request.send(this.requestCtx, integrationKeyOut_1.IntegrationKeyOutSerializer._fromJsonObject);
    }
    rotateKey(appId, integId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/app/{app_id}/integration/{integ_id}/key/rotate");
        request.setPathParam("app_id", appId);
        request.setPathParam("integ_id", integId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        return request.send(this.requestCtx, integrationKeyOut_1.IntegrationKeyOutSerializer._fromJsonObject);
    }
}
exports.Integration = Integration; //# sourceMappingURL=integration.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/expungeAllContentsOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ExpungeAllContentsOutSerializer = void 0;
const backgroundTaskStatus_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/backgroundTaskStatus.js [app-rsc] (ecmascript)");
const backgroundTaskType_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/backgroundTaskType.js [app-rsc] (ecmascript)");
exports.ExpungeAllContentsOutSerializer = {
    _fromJsonObject (object) {
        return {
            id: object["id"],
            status: backgroundTaskStatus_1.BackgroundTaskStatusSerializer._fromJsonObject(object["status"]),
            task: backgroundTaskType_1.BackgroundTaskTypeSerializer._fromJsonObject(object["task"])
        };
    },
    _toJsonObject (self) {
        return {
            id: self.id,
            status: backgroundTaskStatus_1.BackgroundTaskStatusSerializer._toJsonObject(self.status),
            task: backgroundTaskType_1.BackgroundTaskTypeSerializer._toJsonObject(self.task)
        };
    }
}; //# sourceMappingURL=expungeAllContentsOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/listResponseMessageOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListResponseMessageOutSerializer = void 0;
const messageOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/messageOut.js [app-rsc] (ecmascript)");
exports.ListResponseMessageOutSerializer = {
    _fromJsonObject (object) {
        return {
            data: object["data"].map((item)=>messageOut_1.MessageOutSerializer._fromJsonObject(item)),
            done: object["done"],
            iterator: object["iterator"],
            prevIterator: object["prevIterator"]
        };
    },
    _toJsonObject (self) {
        return {
            data: self.data.map((item)=>messageOut_1.MessageOutSerializer._toJsonObject(item)),
            done: self.done,
            iterator: self.iterator,
            prevIterator: self.prevIterator
        };
    }
}; //# sourceMappingURL=listResponseMessageOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/pollingEndpointConsumerSeekIn.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PollingEndpointConsumerSeekInSerializer = void 0;
exports.PollingEndpointConsumerSeekInSerializer = {
    _fromJsonObject (object) {
        return {
            after: new Date(object["after"])
        };
    },
    _toJsonObject (self) {
        return {
            after: self.after
        };
    }
}; //# sourceMappingURL=pollingEndpointConsumerSeekIn.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/pollingEndpointConsumerSeekOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PollingEndpointConsumerSeekOutSerializer = void 0;
exports.PollingEndpointConsumerSeekOutSerializer = {
    _fromJsonObject (object) {
        return {
            iterator: object["iterator"]
        };
    },
    _toJsonObject (self) {
        return {
            iterator: self.iterator
        };
    }
}; //# sourceMappingURL=pollingEndpointConsumerSeekOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/pollingEndpointMessageOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PollingEndpointMessageOutSerializer = void 0;
exports.PollingEndpointMessageOutSerializer = {
    _fromJsonObject (object) {
        return {
            channels: object["channels"],
            eventId: object["eventId"],
            eventType: object["eventType"],
            headers: object["headers"],
            id: object["id"],
            payload: object["payload"],
            tags: object["tags"],
            timestamp: new Date(object["timestamp"])
        };
    },
    _toJsonObject (self) {
        return {
            channels: self.channels,
            eventId: self.eventId,
            eventType: self.eventType,
            headers: self.headers,
            id: self.id,
            payload: self.payload,
            tags: self.tags,
            timestamp: self.timestamp
        };
    }
}; //# sourceMappingURL=pollingEndpointMessageOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/pollingEndpointOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PollingEndpointOutSerializer = void 0;
const pollingEndpointMessageOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/pollingEndpointMessageOut.js [app-rsc] (ecmascript)");
exports.PollingEndpointOutSerializer = {
    _fromJsonObject (object) {
        return {
            data: object["data"].map((item)=>pollingEndpointMessageOut_1.PollingEndpointMessageOutSerializer._fromJsonObject(item)),
            done: object["done"],
            iterator: object["iterator"]
        };
    },
    _toJsonObject (self) {
        return {
            data: self.data.map((item)=>pollingEndpointMessageOut_1.PollingEndpointMessageOutSerializer._toJsonObject(item)),
            done: self.done,
            iterator: self.iterator
        };
    }
}; //# sourceMappingURL=pollingEndpointOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/messagePoller.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessagePoller = void 0;
const pollingEndpointConsumerSeekIn_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/pollingEndpointConsumerSeekIn.js [app-rsc] (ecmascript)");
const pollingEndpointConsumerSeekOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/pollingEndpointConsumerSeekOut.js [app-rsc] (ecmascript)");
const pollingEndpointOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/pollingEndpointOut.js [app-rsc] (ecmascript)");
const request_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/request.js [app-rsc] (ecmascript)");
class MessagePoller {
    constructor(requestCtx){
        this.requestCtx = requestCtx;
    }
    poll(appId, sinkId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/poller/{sink_id}");
        request.setPathParam("app_id", appId);
        request.setPathParam("sink_id", sinkId);
        request.setQueryParam("limit", options === null || options === void 0 ? void 0 : options.limit);
        request.setQueryParam("iterator", options === null || options === void 0 ? void 0 : options.iterator);
        request.setQueryParam("event_type", options === null || options === void 0 ? void 0 : options.eventType);
        request.setQueryParam("channel", options === null || options === void 0 ? void 0 : options.channel);
        request.setQueryParam("after", options === null || options === void 0 ? void 0 : options.after);
        return request.send(this.requestCtx, pollingEndpointOut_1.PollingEndpointOutSerializer._fromJsonObject);
    }
    consumerPoll(appId, sinkId, consumerId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/poller/{sink_id}/consumer/{consumer_id}");
        request.setPathParam("app_id", appId);
        request.setPathParam("sink_id", sinkId);
        request.setPathParam("consumer_id", consumerId);
        request.setQueryParam("limit", options === null || options === void 0 ? void 0 : options.limit);
        request.setQueryParam("iterator", options === null || options === void 0 ? void 0 : options.iterator);
        return request.send(this.requestCtx, pollingEndpointOut_1.PollingEndpointOutSerializer._fromJsonObject);
    }
    consumerSeek(appId, sinkId, consumerId, pollingEndpointConsumerSeekIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/app/{app_id}/poller/{sink_id}/consumer/{consumer_id}/seek");
        request.setPathParam("app_id", appId);
        request.setPathParam("sink_id", sinkId);
        request.setPathParam("consumer_id", consumerId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(pollingEndpointConsumerSeekIn_1.PollingEndpointConsumerSeekInSerializer._toJsonObject(pollingEndpointConsumerSeekIn));
        return request.send(this.requestCtx, pollingEndpointConsumerSeekOut_1.PollingEndpointConsumerSeekOutSerializer._fromJsonObject);
    }
}
exports.MessagePoller = MessagePoller; //# sourceMappingURL=messagePoller.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/messageIn.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageInSerializer = void 0;
const applicationIn_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/applicationIn.js [app-rsc] (ecmascript)");
exports.MessageInSerializer = {
    _fromJsonObject (object) {
        return {
            application: object["application"] ? applicationIn_1.ApplicationInSerializer._fromJsonObject(object["application"]) : undefined,
            channels: object["channels"],
            eventId: object["eventId"],
            eventType: object["eventType"],
            payload: object["payload"],
            payloadRetentionHours: object["payloadRetentionHours"],
            payloadRetentionPeriod: object["payloadRetentionPeriod"],
            tags: object["tags"],
            transformationsParams: object["transformationsParams"]
        };
    },
    _toJsonObject (self) {
        return {
            application: self.application ? applicationIn_1.ApplicationInSerializer._toJsonObject(self.application) : undefined,
            channels: self.channels,
            eventId: self.eventId,
            eventType: self.eventType,
            payload: self.payload,
            payloadRetentionHours: self.payloadRetentionHours,
            payloadRetentionPeriod: self.payloadRetentionPeriod,
            tags: self.tags,
            transformationsParams: self.transformationsParams
        };
    }
}; //# sourceMappingURL=messageIn.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/message.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.messageInRaw = exports.Message = void 0;
const expungeAllContentsOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/expungeAllContentsOut.js [app-rsc] (ecmascript)");
const listResponseMessageOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/listResponseMessageOut.js [app-rsc] (ecmascript)");
const messageOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/messageOut.js [app-rsc] (ecmascript)");
const messagePoller_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/messagePoller.js [app-rsc] (ecmascript)");
const request_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/request.js [app-rsc] (ecmascript)");
const messageIn_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/messageIn.js [app-rsc] (ecmascript)");
class Message {
    constructor(requestCtx){
        this.requestCtx = requestCtx;
    }
    get poller() {
        return new messagePoller_1.MessagePoller(this.requestCtx);
    }
    list(appId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/msg");
        request.setPathParam("app_id", appId);
        request.setQueryParam("limit", options === null || options === void 0 ? void 0 : options.limit);
        request.setQueryParam("iterator", options === null || options === void 0 ? void 0 : options.iterator);
        request.setQueryParam("channel", options === null || options === void 0 ? void 0 : options.channel);
        request.setQueryParam("before", options === null || options === void 0 ? void 0 : options.before);
        request.setQueryParam("after", options === null || options === void 0 ? void 0 : options.after);
        request.setQueryParam("with_content", options === null || options === void 0 ? void 0 : options.withContent);
        request.setQueryParam("tag", options === null || options === void 0 ? void 0 : options.tag);
        request.setQueryParam("event_types", options === null || options === void 0 ? void 0 : options.eventTypes);
        return request.send(this.requestCtx, listResponseMessageOut_1.ListResponseMessageOutSerializer._fromJsonObject);
    }
    create(appId, messageIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/app/{app_id}/msg");
        request.setPathParam("app_id", appId);
        request.setQueryParam("with_content", options === null || options === void 0 ? void 0 : options.withContent);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(messageIn_1.MessageInSerializer._toJsonObject(messageIn));
        return request.send(this.requestCtx, messageOut_1.MessageOutSerializer._fromJsonObject);
    }
    expungeAllContents(appId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/app/{app_id}/msg/expunge-all-contents");
        request.setPathParam("app_id", appId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        return request.send(this.requestCtx, expungeAllContentsOut_1.ExpungeAllContentsOutSerializer._fromJsonObject);
    }
    get(appId, msgId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/msg/{msg_id}");
        request.setPathParam("app_id", appId);
        request.setPathParam("msg_id", msgId);
        request.setQueryParam("with_content", options === null || options === void 0 ? void 0 : options.withContent);
        return request.send(this.requestCtx, messageOut_1.MessageOutSerializer._fromJsonObject);
    }
    expungeContent(appId, msgId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.DELETE, "/api/v1/app/{app_id}/msg/{msg_id}/content");
        request.setPathParam("app_id", appId);
        request.setPathParam("msg_id", msgId);
        return request.sendNoResponseBody(this.requestCtx);
    }
}
exports.Message = Message;
function messageInRaw(eventType, payload, contentType) {
    const headers = contentType ? {
        "content-type": contentType
    } : undefined;
    return {
        eventType,
        payload: {},
        transformationsParams: {
            rawPayload: payload,
            headers
        }
    };
}
exports.messageInRaw = messageInRaw; //# sourceMappingURL=message.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/messageStatus.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageStatusSerializer = exports.MessageStatus = void 0;
var MessageStatus;
(function(MessageStatus) {
    MessageStatus[MessageStatus["Success"] = 0] = "Success";
    MessageStatus[MessageStatus["Pending"] = 1] = "Pending";
    MessageStatus[MessageStatus["Fail"] = 2] = "Fail";
    MessageStatus[MessageStatus["Sending"] = 3] = "Sending";
})(MessageStatus = exports.MessageStatus || (exports.MessageStatus = {}));
exports.MessageStatusSerializer = {
    _fromJsonObject (object) {
        return object;
    },
    _toJsonObject (self) {
        return self;
    }
}; //# sourceMappingURL=messageStatus.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/messageStatusText.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageStatusTextSerializer = exports.MessageStatusText = void 0;
var MessageStatusText;
(function(MessageStatusText) {
    MessageStatusText["Success"] = "success";
    MessageStatusText["Pending"] = "pending";
    MessageStatusText["Fail"] = "fail";
    MessageStatusText["Sending"] = "sending";
})(MessageStatusText = exports.MessageStatusText || (exports.MessageStatusText = {}));
exports.MessageStatusTextSerializer = {
    _fromJsonObject (object) {
        return object;
    },
    _toJsonObject (self) {
        return self;
    }
}; //# sourceMappingURL=messageStatusText.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/endpointMessageOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointMessageOutSerializer = void 0;
const messageStatus_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/messageStatus.js [app-rsc] (ecmascript)");
const messageStatusText_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/messageStatusText.js [app-rsc] (ecmascript)");
exports.EndpointMessageOutSerializer = {
    _fromJsonObject (object) {
        return {
            channels: object["channels"],
            eventId: object["eventId"],
            eventType: object["eventType"],
            id: object["id"],
            nextAttempt: object["nextAttempt"] ? new Date(object["nextAttempt"]) : null,
            payload: object["payload"],
            status: messageStatus_1.MessageStatusSerializer._fromJsonObject(object["status"]),
            statusText: messageStatusText_1.MessageStatusTextSerializer._fromJsonObject(object["statusText"]),
            tags: object["tags"],
            timestamp: new Date(object["timestamp"])
        };
    },
    _toJsonObject (self) {
        return {
            channels: self.channels,
            eventId: self.eventId,
            eventType: self.eventType,
            id: self.id,
            nextAttempt: self.nextAttempt,
            payload: self.payload,
            status: messageStatus_1.MessageStatusSerializer._toJsonObject(self.status),
            statusText: messageStatusText_1.MessageStatusTextSerializer._toJsonObject(self.statusText),
            tags: self.tags,
            timestamp: self.timestamp
        };
    }
}; //# sourceMappingURL=endpointMessageOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/listResponseEndpointMessageOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListResponseEndpointMessageOutSerializer = void 0;
const endpointMessageOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/endpointMessageOut.js [app-rsc] (ecmascript)");
exports.ListResponseEndpointMessageOutSerializer = {
    _fromJsonObject (object) {
        return {
            data: object["data"].map((item)=>endpointMessageOut_1.EndpointMessageOutSerializer._fromJsonObject(item)),
            done: object["done"],
            iterator: object["iterator"],
            prevIterator: object["prevIterator"]
        };
    },
    _toJsonObject (self) {
        return {
            data: self.data.map((item)=>endpointMessageOut_1.EndpointMessageOutSerializer._toJsonObject(item)),
            done: self.done,
            iterator: self.iterator,
            prevIterator: self.prevIterator
        };
    }
}; //# sourceMappingURL=listResponseEndpointMessageOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/messageAttemptTriggerType.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageAttemptTriggerTypeSerializer = exports.MessageAttemptTriggerType = void 0;
var MessageAttemptTriggerType;
(function(MessageAttemptTriggerType) {
    MessageAttemptTriggerType[MessageAttemptTriggerType["Scheduled"] = 0] = "Scheduled";
    MessageAttemptTriggerType[MessageAttemptTriggerType["Manual"] = 1] = "Manual";
})(MessageAttemptTriggerType = exports.MessageAttemptTriggerType || (exports.MessageAttemptTriggerType = {}));
exports.MessageAttemptTriggerTypeSerializer = {
    _fromJsonObject (object) {
        return object;
    },
    _toJsonObject (self) {
        return self;
    }
}; //# sourceMappingURL=messageAttemptTriggerType.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/messageAttemptOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageAttemptOutSerializer = void 0;
const messageAttemptTriggerType_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/messageAttemptTriggerType.js [app-rsc] (ecmascript)");
const messageOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/messageOut.js [app-rsc] (ecmascript)");
const messageStatus_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/messageStatus.js [app-rsc] (ecmascript)");
const messageStatusText_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/messageStatusText.js [app-rsc] (ecmascript)");
exports.MessageAttemptOutSerializer = {
    _fromJsonObject (object) {
        return {
            endpointId: object["endpointId"],
            id: object["id"],
            msg: object["msg"] ? messageOut_1.MessageOutSerializer._fromJsonObject(object["msg"]) : undefined,
            msgId: object["msgId"],
            response: object["response"],
            responseDurationMs: object["responseDurationMs"],
            responseStatusCode: object["responseStatusCode"],
            status: messageStatus_1.MessageStatusSerializer._fromJsonObject(object["status"]),
            statusText: messageStatusText_1.MessageStatusTextSerializer._fromJsonObject(object["statusText"]),
            timestamp: new Date(object["timestamp"]),
            triggerType: messageAttemptTriggerType_1.MessageAttemptTriggerTypeSerializer._fromJsonObject(object["triggerType"]),
            url: object["url"]
        };
    },
    _toJsonObject (self) {
        return {
            endpointId: self.endpointId,
            id: self.id,
            msg: self.msg ? messageOut_1.MessageOutSerializer._toJsonObject(self.msg) : undefined,
            msgId: self.msgId,
            response: self.response,
            responseDurationMs: self.responseDurationMs,
            responseStatusCode: self.responseStatusCode,
            status: messageStatus_1.MessageStatusSerializer._toJsonObject(self.status),
            statusText: messageStatusText_1.MessageStatusTextSerializer._toJsonObject(self.statusText),
            timestamp: self.timestamp,
            triggerType: messageAttemptTriggerType_1.MessageAttemptTriggerTypeSerializer._toJsonObject(self.triggerType),
            url: self.url
        };
    }
}; //# sourceMappingURL=messageAttemptOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/listResponseMessageAttemptOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListResponseMessageAttemptOutSerializer = void 0;
const messageAttemptOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/messageAttemptOut.js [app-rsc] (ecmascript)");
exports.ListResponseMessageAttemptOutSerializer = {
    _fromJsonObject (object) {
        return {
            data: object["data"].map((item)=>messageAttemptOut_1.MessageAttemptOutSerializer._fromJsonObject(item)),
            done: object["done"],
            iterator: object["iterator"],
            prevIterator: object["prevIterator"]
        };
    },
    _toJsonObject (self) {
        return {
            data: self.data.map((item)=>messageAttemptOut_1.MessageAttemptOutSerializer._toJsonObject(item)),
            done: self.done,
            iterator: self.iterator,
            prevIterator: self.prevIterator
        };
    }
}; //# sourceMappingURL=listResponseMessageAttemptOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/messageEndpointOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageEndpointOutSerializer = void 0;
const messageStatus_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/messageStatus.js [app-rsc] (ecmascript)");
const messageStatusText_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/messageStatusText.js [app-rsc] (ecmascript)");
exports.MessageEndpointOutSerializer = {
    _fromJsonObject (object) {
        return {
            channels: object["channels"],
            createdAt: new Date(object["createdAt"]),
            description: object["description"],
            disabled: object["disabled"],
            filterTypes: object["filterTypes"],
            id: object["id"],
            nextAttempt: object["nextAttempt"] ? new Date(object["nextAttempt"]) : null,
            rateLimit: object["rateLimit"],
            status: messageStatus_1.MessageStatusSerializer._fromJsonObject(object["status"]),
            statusText: messageStatusText_1.MessageStatusTextSerializer._fromJsonObject(object["statusText"]),
            uid: object["uid"],
            updatedAt: new Date(object["updatedAt"]),
            url: object["url"],
            version: object["version"]
        };
    },
    _toJsonObject (self) {
        return {
            channels: self.channels,
            createdAt: self.createdAt,
            description: self.description,
            disabled: self.disabled,
            filterTypes: self.filterTypes,
            id: self.id,
            nextAttempt: self.nextAttempt,
            rateLimit: self.rateLimit,
            status: messageStatus_1.MessageStatusSerializer._toJsonObject(self.status),
            statusText: messageStatusText_1.MessageStatusTextSerializer._toJsonObject(self.statusText),
            uid: self.uid,
            updatedAt: self.updatedAt,
            url: self.url,
            version: self.version
        };
    }
}; //# sourceMappingURL=messageEndpointOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/listResponseMessageEndpointOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListResponseMessageEndpointOutSerializer = void 0;
const messageEndpointOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/messageEndpointOut.js [app-rsc] (ecmascript)");
exports.ListResponseMessageEndpointOutSerializer = {
    _fromJsonObject (object) {
        return {
            data: object["data"].map((item)=>messageEndpointOut_1.MessageEndpointOutSerializer._fromJsonObject(item)),
            done: object["done"],
            iterator: object["iterator"],
            prevIterator: object["prevIterator"]
        };
    },
    _toJsonObject (self) {
        return {
            data: self.data.map((item)=>messageEndpointOut_1.MessageEndpointOutSerializer._toJsonObject(item)),
            done: self.done,
            iterator: self.iterator,
            prevIterator: self.prevIterator
        };
    }
}; //# sourceMappingURL=listResponseMessageEndpointOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/messageAttempt.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageAttempt = void 0;
const listResponseEndpointMessageOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/listResponseEndpointMessageOut.js [app-rsc] (ecmascript)");
const listResponseMessageAttemptOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/listResponseMessageAttemptOut.js [app-rsc] (ecmascript)");
const listResponseMessageEndpointOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/listResponseMessageEndpointOut.js [app-rsc] (ecmascript)");
const messageAttemptOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/messageAttemptOut.js [app-rsc] (ecmascript)");
const request_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/request.js [app-rsc] (ecmascript)");
class MessageAttempt {
    constructor(requestCtx){
        this.requestCtx = requestCtx;
    }
    listByEndpoint(appId, endpointId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/attempt/endpoint/{endpoint_id}");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        request.setQueryParam("limit", options === null || options === void 0 ? void 0 : options.limit);
        request.setQueryParam("iterator", options === null || options === void 0 ? void 0 : options.iterator);
        request.setQueryParam("status", options === null || options === void 0 ? void 0 : options.status);
        request.setQueryParam("status_code_class", options === null || options === void 0 ? void 0 : options.statusCodeClass);
        request.setQueryParam("channel", options === null || options === void 0 ? void 0 : options.channel);
        request.setQueryParam("tag", options === null || options === void 0 ? void 0 : options.tag);
        request.setQueryParam("before", options === null || options === void 0 ? void 0 : options.before);
        request.setQueryParam("after", options === null || options === void 0 ? void 0 : options.after);
        request.setQueryParam("with_content", options === null || options === void 0 ? void 0 : options.withContent);
        request.setQueryParam("with_msg", options === null || options === void 0 ? void 0 : options.withMsg);
        request.setQueryParam("event_types", options === null || options === void 0 ? void 0 : options.eventTypes);
        return request.send(this.requestCtx, listResponseMessageAttemptOut_1.ListResponseMessageAttemptOutSerializer._fromJsonObject);
    }
    listByMsg(appId, msgId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/attempt/msg/{msg_id}");
        request.setPathParam("app_id", appId);
        request.setPathParam("msg_id", msgId);
        request.setQueryParam("limit", options === null || options === void 0 ? void 0 : options.limit);
        request.setQueryParam("iterator", options === null || options === void 0 ? void 0 : options.iterator);
        request.setQueryParam("status", options === null || options === void 0 ? void 0 : options.status);
        request.setQueryParam("status_code_class", options === null || options === void 0 ? void 0 : options.statusCodeClass);
        request.setQueryParam("channel", options === null || options === void 0 ? void 0 : options.channel);
        request.setQueryParam("tag", options === null || options === void 0 ? void 0 : options.tag);
        request.setQueryParam("endpoint_id", options === null || options === void 0 ? void 0 : options.endpointId);
        request.setQueryParam("before", options === null || options === void 0 ? void 0 : options.before);
        request.setQueryParam("after", options === null || options === void 0 ? void 0 : options.after);
        request.setQueryParam("with_content", options === null || options === void 0 ? void 0 : options.withContent);
        request.setQueryParam("event_types", options === null || options === void 0 ? void 0 : options.eventTypes);
        return request.send(this.requestCtx, listResponseMessageAttemptOut_1.ListResponseMessageAttemptOutSerializer._fromJsonObject);
    }
    listAttemptedMessages(appId, endpointId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/endpoint/{endpoint_id}/msg");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        request.setQueryParam("limit", options === null || options === void 0 ? void 0 : options.limit);
        request.setQueryParam("iterator", options === null || options === void 0 ? void 0 : options.iterator);
        request.setQueryParam("channel", options === null || options === void 0 ? void 0 : options.channel);
        request.setQueryParam("tag", options === null || options === void 0 ? void 0 : options.tag);
        request.setQueryParam("status", options === null || options === void 0 ? void 0 : options.status);
        request.setQueryParam("before", options === null || options === void 0 ? void 0 : options.before);
        request.setQueryParam("after", options === null || options === void 0 ? void 0 : options.after);
        request.setQueryParam("with_content", options === null || options === void 0 ? void 0 : options.withContent);
        request.setQueryParam("event_types", options === null || options === void 0 ? void 0 : options.eventTypes);
        return request.send(this.requestCtx, listResponseEndpointMessageOut_1.ListResponseEndpointMessageOutSerializer._fromJsonObject);
    }
    get(appId, msgId, attemptId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/msg/{msg_id}/attempt/{attempt_id}");
        request.setPathParam("app_id", appId);
        request.setPathParam("msg_id", msgId);
        request.setPathParam("attempt_id", attemptId);
        return request.send(this.requestCtx, messageAttemptOut_1.MessageAttemptOutSerializer._fromJsonObject);
    }
    expungeContent(appId, msgId, attemptId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.DELETE, "/api/v1/app/{app_id}/msg/{msg_id}/attempt/{attempt_id}/content");
        request.setPathParam("app_id", appId);
        request.setPathParam("msg_id", msgId);
        request.setPathParam("attempt_id", attemptId);
        return request.sendNoResponseBody(this.requestCtx);
    }
    listAttemptedDestinations(appId, msgId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/msg/{msg_id}/endpoint");
        request.setPathParam("app_id", appId);
        request.setPathParam("msg_id", msgId);
        request.setQueryParam("limit", options === null || options === void 0 ? void 0 : options.limit);
        request.setQueryParam("iterator", options === null || options === void 0 ? void 0 : options.iterator);
        return request.send(this.requestCtx, listResponseMessageEndpointOut_1.ListResponseMessageEndpointOutSerializer._fromJsonObject);
    }
    resend(appId, msgId, endpointId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/app/{app_id}/msg/{msg_id}/endpoint/{endpoint_id}/resend");
        request.setPathParam("app_id", appId);
        request.setPathParam("msg_id", msgId);
        request.setPathParam("endpoint_id", endpointId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        return request.sendNoResponseBody(this.requestCtx);
    }
}
exports.MessageAttempt = MessageAttempt; //# sourceMappingURL=messageAttempt.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/operationalWebhookEndpointOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OperationalWebhookEndpointOutSerializer = void 0;
exports.OperationalWebhookEndpointOutSerializer = {
    _fromJsonObject (object) {
        return {
            createdAt: new Date(object["createdAt"]),
            description: object["description"],
            disabled: object["disabled"],
            filterTypes: object["filterTypes"],
            id: object["id"],
            metadata: object["metadata"],
            rateLimit: object["rateLimit"],
            uid: object["uid"],
            updatedAt: new Date(object["updatedAt"]),
            url: object["url"]
        };
    },
    _toJsonObject (self) {
        return {
            createdAt: self.createdAt,
            description: self.description,
            disabled: self.disabled,
            filterTypes: self.filterTypes,
            id: self.id,
            metadata: self.metadata,
            rateLimit: self.rateLimit,
            uid: self.uid,
            updatedAt: self.updatedAt,
            url: self.url
        };
    }
}; //# sourceMappingURL=operationalWebhookEndpointOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/listResponseOperationalWebhookEndpointOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListResponseOperationalWebhookEndpointOutSerializer = void 0;
const operationalWebhookEndpointOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/operationalWebhookEndpointOut.js [app-rsc] (ecmascript)");
exports.ListResponseOperationalWebhookEndpointOutSerializer = {
    _fromJsonObject (object) {
        return {
            data: object["data"].map((item)=>operationalWebhookEndpointOut_1.OperationalWebhookEndpointOutSerializer._fromJsonObject(item)),
            done: object["done"],
            iterator: object["iterator"],
            prevIterator: object["prevIterator"]
        };
    },
    _toJsonObject (self) {
        return {
            data: self.data.map((item)=>operationalWebhookEndpointOut_1.OperationalWebhookEndpointOutSerializer._toJsonObject(item)),
            done: self.done,
            iterator: self.iterator,
            prevIterator: self.prevIterator
        };
    }
}; //# sourceMappingURL=listResponseOperationalWebhookEndpointOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/operationalWebhookEndpointHeadersIn.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OperationalWebhookEndpointHeadersInSerializer = void 0;
exports.OperationalWebhookEndpointHeadersInSerializer = {
    _fromJsonObject (object) {
        return {
            headers: object["headers"]
        };
    },
    _toJsonObject (self) {
        return {
            headers: self.headers
        };
    }
}; //# sourceMappingURL=operationalWebhookEndpointHeadersIn.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/operationalWebhookEndpointHeadersOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OperationalWebhookEndpointHeadersOutSerializer = void 0;
exports.OperationalWebhookEndpointHeadersOutSerializer = {
    _fromJsonObject (object) {
        return {
            headers: object["headers"],
            sensitive: object["sensitive"]
        };
    },
    _toJsonObject (self) {
        return {
            headers: self.headers,
            sensitive: self.sensitive
        };
    }
}; //# sourceMappingURL=operationalWebhookEndpointHeadersOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/operationalWebhookEndpointIn.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OperationalWebhookEndpointInSerializer = void 0;
exports.OperationalWebhookEndpointInSerializer = {
    _fromJsonObject (object) {
        return {
            description: object["description"],
            disabled: object["disabled"],
            filterTypes: object["filterTypes"],
            metadata: object["metadata"],
            rateLimit: object["rateLimit"],
            secret: object["secret"],
            uid: object["uid"],
            url: object["url"]
        };
    },
    _toJsonObject (self) {
        return {
            description: self.description,
            disabled: self.disabled,
            filterTypes: self.filterTypes,
            metadata: self.metadata,
            rateLimit: self.rateLimit,
            secret: self.secret,
            uid: self.uid,
            url: self.url
        };
    }
}; //# sourceMappingURL=operationalWebhookEndpointIn.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/operationalWebhookEndpointSecretIn.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OperationalWebhookEndpointSecretInSerializer = void 0;
exports.OperationalWebhookEndpointSecretInSerializer = {
    _fromJsonObject (object) {
        return {
            key: object["key"]
        };
    },
    _toJsonObject (self) {
        return {
            key: self.key
        };
    }
}; //# sourceMappingURL=operationalWebhookEndpointSecretIn.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/operationalWebhookEndpointSecretOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OperationalWebhookEndpointSecretOutSerializer = void 0;
exports.OperationalWebhookEndpointSecretOutSerializer = {
    _fromJsonObject (object) {
        return {
            key: object["key"]
        };
    },
    _toJsonObject (self) {
        return {
            key: self.key
        };
    }
}; //# sourceMappingURL=operationalWebhookEndpointSecretOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/operationalWebhookEndpointUpdate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OperationalWebhookEndpointUpdateSerializer = void 0;
exports.OperationalWebhookEndpointUpdateSerializer = {
    _fromJsonObject (object) {
        return {
            description: object["description"],
            disabled: object["disabled"],
            filterTypes: object["filterTypes"],
            metadata: object["metadata"],
            rateLimit: object["rateLimit"],
            uid: object["uid"],
            url: object["url"]
        };
    },
    _toJsonObject (self) {
        return {
            description: self.description,
            disabled: self.disabled,
            filterTypes: self.filterTypes,
            metadata: self.metadata,
            rateLimit: self.rateLimit,
            uid: self.uid,
            url: self.url
        };
    }
}; //# sourceMappingURL=operationalWebhookEndpointUpdate.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/operationalWebhookEndpoint.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OperationalWebhookEndpoint = void 0;
const listResponseOperationalWebhookEndpointOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/listResponseOperationalWebhookEndpointOut.js [app-rsc] (ecmascript)");
const operationalWebhookEndpointHeadersIn_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/operationalWebhookEndpointHeadersIn.js [app-rsc] (ecmascript)");
const operationalWebhookEndpointHeadersOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/operationalWebhookEndpointHeadersOut.js [app-rsc] (ecmascript)");
const operationalWebhookEndpointIn_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/operationalWebhookEndpointIn.js [app-rsc] (ecmascript)");
const operationalWebhookEndpointOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/operationalWebhookEndpointOut.js [app-rsc] (ecmascript)");
const operationalWebhookEndpointSecretIn_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/operationalWebhookEndpointSecretIn.js [app-rsc] (ecmascript)");
const operationalWebhookEndpointSecretOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/operationalWebhookEndpointSecretOut.js [app-rsc] (ecmascript)");
const operationalWebhookEndpointUpdate_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/operationalWebhookEndpointUpdate.js [app-rsc] (ecmascript)");
const request_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/request.js [app-rsc] (ecmascript)");
class OperationalWebhookEndpoint {
    constructor(requestCtx){
        this.requestCtx = requestCtx;
    }
    list(options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/operational-webhook/endpoint");
        request.setQueryParam("limit", options === null || options === void 0 ? void 0 : options.limit);
        request.setQueryParam("iterator", options === null || options === void 0 ? void 0 : options.iterator);
        request.setQueryParam("order", options === null || options === void 0 ? void 0 : options.order);
        return request.send(this.requestCtx, listResponseOperationalWebhookEndpointOut_1.ListResponseOperationalWebhookEndpointOutSerializer._fromJsonObject);
    }
    create(operationalWebhookEndpointIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/operational-webhook/endpoint");
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(operationalWebhookEndpointIn_1.OperationalWebhookEndpointInSerializer._toJsonObject(operationalWebhookEndpointIn));
        return request.send(this.requestCtx, operationalWebhookEndpointOut_1.OperationalWebhookEndpointOutSerializer._fromJsonObject);
    }
    get(endpointId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/operational-webhook/endpoint/{endpoint_id}");
        request.setPathParam("endpoint_id", endpointId);
        return request.send(this.requestCtx, operationalWebhookEndpointOut_1.OperationalWebhookEndpointOutSerializer._fromJsonObject);
    }
    update(endpointId, operationalWebhookEndpointUpdate) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PUT, "/api/v1/operational-webhook/endpoint/{endpoint_id}");
        request.setPathParam("endpoint_id", endpointId);
        request.setBody(operationalWebhookEndpointUpdate_1.OperationalWebhookEndpointUpdateSerializer._toJsonObject(operationalWebhookEndpointUpdate));
        return request.send(this.requestCtx, operationalWebhookEndpointOut_1.OperationalWebhookEndpointOutSerializer._fromJsonObject);
    }
    delete(endpointId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.DELETE, "/api/v1/operational-webhook/endpoint/{endpoint_id}");
        request.setPathParam("endpoint_id", endpointId);
        return request.sendNoResponseBody(this.requestCtx);
    }
    getHeaders(endpointId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/operational-webhook/endpoint/{endpoint_id}/headers");
        request.setPathParam("endpoint_id", endpointId);
        return request.send(this.requestCtx, operationalWebhookEndpointHeadersOut_1.OperationalWebhookEndpointHeadersOutSerializer._fromJsonObject);
    }
    updateHeaders(endpointId, operationalWebhookEndpointHeadersIn) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PUT, "/api/v1/operational-webhook/endpoint/{endpoint_id}/headers");
        request.setPathParam("endpoint_id", endpointId);
        request.setBody(operationalWebhookEndpointHeadersIn_1.OperationalWebhookEndpointHeadersInSerializer._toJsonObject(operationalWebhookEndpointHeadersIn));
        return request.sendNoResponseBody(this.requestCtx);
    }
    getSecret(endpointId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/operational-webhook/endpoint/{endpoint_id}/secret");
        request.setPathParam("endpoint_id", endpointId);
        return request.send(this.requestCtx, operationalWebhookEndpointSecretOut_1.OperationalWebhookEndpointSecretOutSerializer._fromJsonObject);
    }
    rotateSecret(endpointId, operationalWebhookEndpointSecretIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/operational-webhook/endpoint/{endpoint_id}/secret/rotate");
        request.setPathParam("endpoint_id", endpointId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(operationalWebhookEndpointSecretIn_1.OperationalWebhookEndpointSecretInSerializer._toJsonObject(operationalWebhookEndpointSecretIn));
        return request.sendNoResponseBody(this.requestCtx);
    }
}
exports.OperationalWebhookEndpoint = OperationalWebhookEndpoint; //# sourceMappingURL=operationalWebhookEndpoint.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/operationalWebhook.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OperationalWebhook = void 0;
const operationalWebhookEndpoint_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/operationalWebhookEndpoint.js [app-rsc] (ecmascript)");
class OperationalWebhook {
    constructor(requestCtx){
        this.requestCtx = requestCtx;
    }
    get endpoint() {
        return new operationalWebhookEndpoint_1.OperationalWebhookEndpoint(this.requestCtx);
    }
}
exports.OperationalWebhook = OperationalWebhook; //# sourceMappingURL=operationalWebhook.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/aggregateEventTypesOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AggregateEventTypesOutSerializer = void 0;
const backgroundTaskStatus_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/backgroundTaskStatus.js [app-rsc] (ecmascript)");
const backgroundTaskType_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/backgroundTaskType.js [app-rsc] (ecmascript)");
exports.AggregateEventTypesOutSerializer = {
    _fromJsonObject (object) {
        return {
            id: object["id"],
            status: backgroundTaskStatus_1.BackgroundTaskStatusSerializer._fromJsonObject(object["status"]),
            task: backgroundTaskType_1.BackgroundTaskTypeSerializer._fromJsonObject(object["task"])
        };
    },
    _toJsonObject (self) {
        return {
            id: self.id,
            status: backgroundTaskStatus_1.BackgroundTaskStatusSerializer._toJsonObject(self.status),
            task: backgroundTaskType_1.BackgroundTaskTypeSerializer._toJsonObject(self.task)
        };
    }
}; //# sourceMappingURL=aggregateEventTypesOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/appUsageStatsIn.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AppUsageStatsInSerializer = void 0;
exports.AppUsageStatsInSerializer = {
    _fromJsonObject (object) {
        return {
            appIds: object["appIds"],
            since: new Date(object["since"]),
            until: new Date(object["until"])
        };
    },
    _toJsonObject (self) {
        return {
            appIds: self.appIds,
            since: self.since,
            until: self.until
        };
    }
}; //# sourceMappingURL=appUsageStatsIn.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/appUsageStatsOut.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AppUsageStatsOutSerializer = void 0;
const backgroundTaskStatus_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/backgroundTaskStatus.js [app-rsc] (ecmascript)");
const backgroundTaskType_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/backgroundTaskType.js [app-rsc] (ecmascript)");
exports.AppUsageStatsOutSerializer = {
    _fromJsonObject (object) {
        return {
            id: object["id"],
            status: backgroundTaskStatus_1.BackgroundTaskStatusSerializer._fromJsonObject(object["status"]),
            task: backgroundTaskType_1.BackgroundTaskTypeSerializer._fromJsonObject(object["task"]),
            unresolvedAppIds: object["unresolvedAppIds"]
        };
    },
    _toJsonObject (self) {
        return {
            id: self.id,
            status: backgroundTaskStatus_1.BackgroundTaskStatusSerializer._toJsonObject(self.status),
            task: backgroundTaskType_1.BackgroundTaskTypeSerializer._toJsonObject(self.task),
            unresolvedAppIds: self.unresolvedAppIds
        };
    }
}; //# sourceMappingURL=appUsageStatsOut.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/statistics.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Statistics = void 0;
const aggregateEventTypesOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/aggregateEventTypesOut.js [app-rsc] (ecmascript)");
const appUsageStatsIn_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/appUsageStatsIn.js [app-rsc] (ecmascript)");
const appUsageStatsOut_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/appUsageStatsOut.js [app-rsc] (ecmascript)");
const request_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/request.js [app-rsc] (ecmascript)");
class Statistics {
    constructor(requestCtx){
        this.requestCtx = requestCtx;
    }
    aggregateAppStats(appUsageStatsIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/stats/usage/app");
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(appUsageStatsIn_1.AppUsageStatsInSerializer._toJsonObject(appUsageStatsIn));
        return request.send(this.requestCtx, appUsageStatsOut_1.AppUsageStatsOutSerializer._fromJsonObject);
    }
    aggregateEventTypes() {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PUT, "/api/v1/stats/usage/event-types");
        return request.send(this.requestCtx, aggregateEventTypesOut_1.AggregateEventTypesOutSerializer._fromJsonObject);
    }
}
exports.Statistics = Statistics; //# sourceMappingURL=statistics.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/HttpErrors.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HTTPValidationError = exports.ValidationError = exports.HttpErrorOut = void 0;
class HttpErrorOut {
    static getAttributeTypeMap() {
        return HttpErrorOut.attributeTypeMap;
    }
}
exports.HttpErrorOut = HttpErrorOut;
HttpErrorOut.discriminator = undefined;
HttpErrorOut.mapping = undefined;
HttpErrorOut.attributeTypeMap = [
    {
        name: "code",
        baseName: "code",
        type: "string",
        format: ""
    },
    {
        name: "detail",
        baseName: "detail",
        type: "string",
        format: ""
    }
];
class ValidationError {
    static getAttributeTypeMap() {
        return ValidationError.attributeTypeMap;
    }
}
exports.ValidationError = ValidationError;
ValidationError.discriminator = undefined;
ValidationError.mapping = undefined;
ValidationError.attributeTypeMap = [
    {
        name: "loc",
        baseName: "loc",
        type: "Array<string>",
        format: ""
    },
    {
        name: "msg",
        baseName: "msg",
        type: "string",
        format: ""
    },
    {
        name: "type",
        baseName: "type",
        type: "string",
        format: ""
    }
];
class HTTPValidationError {
    static getAttributeTypeMap() {
        return HTTPValidationError.attributeTypeMap;
    }
}
exports.HTTPValidationError = HTTPValidationError;
HTTPValidationError.discriminator = undefined;
HTTPValidationError.mapping = undefined;
HTTPValidationError.attributeTypeMap = [
    {
        name: "detail",
        baseName: "detail",
        type: "Array<ValidationError>",
        format: ""
    }
]; //# sourceMappingURL=HttpErrors.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/timing_safe_equal.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.timingSafeEqual = void 0;
function assert(expr, msg = "") {
    if (!expr) {
        throw new Error(msg);
    }
}
function timingSafeEqual(a, b) {
    if (a.byteLength !== b.byteLength) {
        return false;
    }
    if (!(a instanceof DataView)) {
        a = new DataView(ArrayBuffer.isView(a) ? a.buffer : a);
    }
    if (!(b instanceof DataView)) {
        b = new DataView(ArrayBuffer.isView(b) ? b.buffer : b);
    }
    assert(a instanceof DataView);
    assert(b instanceof DataView);
    const length = a.byteLength;
    let out = 0;
    let i = -1;
    while(++i < length){
        out |= a.getUint8(i) ^ b.getUint8(i);
    }
    return out === 0;
}
exports.timingSafeEqual = timingSafeEqual; //# sourceMappingURL=timing_safe_equal.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/@stablelib/base64/lib/base64.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
var __extends = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Package base64 implements Base64 encoding and decoding.
 */ // Invalid character used in decoding to indicate
// that the character to decode is out of range of
// alphabet and cannot be decoded.
var INVALID_BYTE = 256;
/**
 * Implements standard Base64 encoding.
 *
 * Operates in constant time.
 */ var Coder = function() {
    // TODO(dchest): methods to encode chunk-by-chunk.
    function Coder(_paddingCharacter) {
        if (_paddingCharacter === void 0) {
            _paddingCharacter = "=";
        }
        this._paddingCharacter = _paddingCharacter;
    }
    Coder.prototype.encodedLength = function(length) {
        if (!this._paddingCharacter) {
            return (length * 8 + 5) / 6 | 0;
        }
        return (length + 2) / 3 * 4 | 0;
    };
    Coder.prototype.encode = function(data) {
        var out = "";
        var i = 0;
        for(; i < data.length - 2; i += 3){
            var c = data[i] << 16 | data[i + 1] << 8 | data[i + 2];
            out += this._encodeByte(c >>> 3 * 6 & 63);
            out += this._encodeByte(c >>> 2 * 6 & 63);
            out += this._encodeByte(c >>> 1 * 6 & 63);
            out += this._encodeByte(c >>> 0 * 6 & 63);
        }
        var left = data.length - i;
        if (left > 0) {
            var c = data[i] << 16 | (left === 2 ? data[i + 1] << 8 : 0);
            out += this._encodeByte(c >>> 3 * 6 & 63);
            out += this._encodeByte(c >>> 2 * 6 & 63);
            if (left === 2) {
                out += this._encodeByte(c >>> 1 * 6 & 63);
            } else {
                out += this._paddingCharacter || "";
            }
            out += this._paddingCharacter || "";
        }
        return out;
    };
    Coder.prototype.maxDecodedLength = function(length) {
        if (!this._paddingCharacter) {
            return (length * 6 + 7) / 8 | 0;
        }
        return length / 4 * 3 | 0;
    };
    Coder.prototype.decodedLength = function(s) {
        return this.maxDecodedLength(s.length - this._getPaddingLength(s));
    };
    Coder.prototype.decode = function(s) {
        if (s.length === 0) {
            return new Uint8Array(0);
        }
        var paddingLength = this._getPaddingLength(s);
        var length = s.length - paddingLength;
        var out = new Uint8Array(this.maxDecodedLength(length));
        var op = 0;
        var i = 0;
        var haveBad = 0;
        var v0 = 0, v1 = 0, v2 = 0, v3 = 0;
        for(; i < length - 4; i += 4){
            v0 = this._decodeChar(s.charCodeAt(i + 0));
            v1 = this._decodeChar(s.charCodeAt(i + 1));
            v2 = this._decodeChar(s.charCodeAt(i + 2));
            v3 = this._decodeChar(s.charCodeAt(i + 3));
            out[op++] = v0 << 2 | v1 >>> 4;
            out[op++] = v1 << 4 | v2 >>> 2;
            out[op++] = v2 << 6 | v3;
            haveBad |= v0 & INVALID_BYTE;
            haveBad |= v1 & INVALID_BYTE;
            haveBad |= v2 & INVALID_BYTE;
            haveBad |= v3 & INVALID_BYTE;
        }
        if (i < length - 1) {
            v0 = this._decodeChar(s.charCodeAt(i));
            v1 = this._decodeChar(s.charCodeAt(i + 1));
            out[op++] = v0 << 2 | v1 >>> 4;
            haveBad |= v0 & INVALID_BYTE;
            haveBad |= v1 & INVALID_BYTE;
        }
        if (i < length - 2) {
            v2 = this._decodeChar(s.charCodeAt(i + 2));
            out[op++] = v1 << 4 | v2 >>> 2;
            haveBad |= v2 & INVALID_BYTE;
        }
        if (i < length - 3) {
            v3 = this._decodeChar(s.charCodeAt(i + 3));
            out[op++] = v2 << 6 | v3;
            haveBad |= v3 & INVALID_BYTE;
        }
        if (haveBad !== 0) {
            throw new Error("Base64Coder: incorrect characters for decoding");
        }
        return out;
    };
    // Standard encoding have the following encoded/decoded ranges,
    // which we need to convert between.
    //
    // ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789  +   /
    // Index:   0 - 25                    26 - 51              52 - 61   62  63
    // ASCII:  65 - 90                    97 - 122             48 - 57   43  47
    //
    // Encode 6 bits in b into a new character.
    Coder.prototype._encodeByte = function(b) {
        // Encoding uses constant time operations as follows:
        //
        // 1. Define comparison of A with B using (A - B) >>> 8:
        //          if A > B, then result is positive integer
        //          if A <= B, then result is 0
        //
        // 2. Define selection of C or 0 using bitwise AND: X & C:
        //          if X == 0, then result is 0
        //          if X != 0, then result is C
        //
        // 3. Start with the smallest comparison (b >= 0), which is always
        //    true, so set the result to the starting ASCII value (65).
        //
        // 4. Continue comparing b to higher ASCII values, and selecting
        //    zero if comparison isn't true, otherwise selecting a value
        //    to add to result, which:
        //
        //          a) undoes the previous addition
        //          b) provides new value to add
        //
        var result = b;
        // b >= 0
        result += 65;
        // b > 25
        result += 25 - b >>> 8 & 0 - 65 - 26 + 97;
        // b > 51
        result += 51 - b >>> 8 & 26 - 97 - 52 + 48;
        // b > 61
        result += 61 - b >>> 8 & 52 - 48 - 62 + 43;
        // b > 62
        result += 62 - b >>> 8 & 62 - 43 - 63 + 47;
        return String.fromCharCode(result);
    };
    // Decode a character code into a byte.
    // Must return 256 if character is out of alphabet range.
    Coder.prototype._decodeChar = function(c) {
        // Decoding works similar to encoding: using the same comparison
        // function, but now it works on ranges: result is always incremented
        // by value, but this value becomes zero if the range is not
        // satisfied.
        //
        // Decoding starts with invalid value, 256, which is then
        // subtracted when the range is satisfied. If none of the ranges
        // apply, the function returns 256, which is then checked by
        // the caller to throw error.
        var result = INVALID_BYTE; // start with invalid character
        // c == 43 (c > 42 and c < 44)
        result += (42 - c & c - 44) >>> 8 & -INVALID_BYTE + c - 43 + 62;
        // c == 47 (c > 46 and c < 48)
        result += (46 - c & c - 48) >>> 8 & -INVALID_BYTE + c - 47 + 63;
        // c > 47 and c < 58
        result += (47 - c & c - 58) >>> 8 & -INVALID_BYTE + c - 48 + 52;
        // c > 64 and c < 91
        result += (64 - c & c - 91) >>> 8 & -INVALID_BYTE + c - 65 + 0;
        // c > 96 and c < 123
        result += (96 - c & c - 123) >>> 8 & -INVALID_BYTE + c - 97 + 26;
        return result;
    };
    Coder.prototype._getPaddingLength = function(s) {
        var paddingLength = 0;
        if (this._paddingCharacter) {
            for(var i = s.length - 1; i >= 0; i--){
                if (s[i] !== this._paddingCharacter) {
                    break;
                }
                paddingLength++;
            }
            if (s.length < 4 || paddingLength > 2) {
                throw new Error("Base64Coder: incorrect padding");
            }
        }
        return paddingLength;
    };
    return Coder;
}();
exports.Coder = Coder;
var stdCoder = new Coder();
function encode(data) {
    return stdCoder.encode(data);
}
exports.encode = encode;
function decode(s) {
    return stdCoder.decode(s);
}
exports.decode = decode;
/**
 * Implements URL-safe Base64 encoding.
 * (Same as Base64, but '+' is replaced with '-', and '/' with '_').
 *
 * Operates in constant time.
 */ var URLSafeCoder = function(_super) {
    __extends(URLSafeCoder, _super);
    function URLSafeCoder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // URL-safe encoding have the following encoded/decoded ranges:
    //
    // ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789  -   _
    // Index:   0 - 25                    26 - 51              52 - 61   62  63
    // ASCII:  65 - 90                    97 - 122             48 - 57   45  95
    //
    URLSafeCoder.prototype._encodeByte = function(b) {
        var result = b;
        // b >= 0
        result += 65;
        // b > 25
        result += 25 - b >>> 8 & 0 - 65 - 26 + 97;
        // b > 51
        result += 51 - b >>> 8 & 26 - 97 - 52 + 48;
        // b > 61
        result += 61 - b >>> 8 & 52 - 48 - 62 + 45;
        // b > 62
        result += 62 - b >>> 8 & 62 - 45 - 63 + 95;
        return String.fromCharCode(result);
    };
    URLSafeCoder.prototype._decodeChar = function(c) {
        var result = INVALID_BYTE;
        // c == 45 (c > 44 and c < 46)
        result += (44 - c & c - 46) >>> 8 & -INVALID_BYTE + c - 45 + 62;
        // c == 95 (c > 94 and c < 96)
        result += (94 - c & c - 96) >>> 8 & -INVALID_BYTE + c - 95 + 63;
        // c > 47 and c < 58
        result += (47 - c & c - 58) >>> 8 & -INVALID_BYTE + c - 48 + 52;
        // c > 64 and c < 91
        result += (64 - c & c - 91) >>> 8 & -INVALID_BYTE + c - 65 + 0;
        // c > 96 and c < 123
        result += (96 - c & c - 123) >>> 8 & -INVALID_BYTE + c - 97 + 26;
        return result;
    };
    return URLSafeCoder;
}(Coder);
exports.URLSafeCoder = URLSafeCoder;
var urlSafeCoder = new URLSafeCoder();
function encodeURLSafe(data) {
    return urlSafeCoder.encode(data);
}
exports.encodeURLSafe = encodeURLSafe;
function decodeURLSafe(s) {
    return urlSafeCoder.decode(s);
}
exports.decodeURLSafe = decodeURLSafe;
exports.encodedLength = function(length) {
    return stdCoder.encodedLength(length);
};
exports.maxDecodedLength = function(length) {
    return stdCoder.maxDecodedLength(length);
};
exports.decodedLength = function(s) {
    return stdCoder.decodedLength(s);
}; //# sourceMappingURL=base64.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/fast-sha256/sha256.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function(root, factory) {
    // Hack to make all exports of this module sha256 function object properties.
    var exports = {};
    factory(exports);
    var sha256 = exports["default"];
    for(var k in exports){
        sha256[k] = exports[k];
    }
    if (("TURBOPACK compile-time value", "object") === 'object' && typeof module.exports === 'object') {
        module.exports = sha256;
    } else if (typeof define === 'function' && define.amd) {
        ((r)=>r !== undefined && __turbopack_context__.v(r))(function() {
            return sha256;
        }(__turbopack_context__.r, exports, module));
    } else {
        root.sha256 = sha256;
    }
})(/*TURBOPACK member replacement*/ __turbopack_context__.e, function(exports) {
    "use strict";
    exports.__esModule = true;
    // SHA-256 (+ HMAC and PBKDF2) for JavaScript.
    //
    // Written in 2014-2016 by Dmitry Chestnykh.
    // Public domain, no warranty.
    //
    // Functions (accept and return Uint8Arrays):
    //
    //   sha256(message) -> hash
    //   sha256.hmac(key, message) -> mac
    //   sha256.pbkdf2(password, salt, rounds, dkLen) -> dk
    //
    //  Classes:
    //
    //   new sha256.Hash()
    //   new sha256.HMAC(key)
    //
    exports.digestLength = 32;
    exports.blockSize = 64;
    // SHA-256 constants
    var K = new Uint32Array([
        0x428a2f98,
        0x71374491,
        0xb5c0fbcf,
        0xe9b5dba5,
        0x3956c25b,
        0x59f111f1,
        0x923f82a4,
        0xab1c5ed5,
        0xd807aa98,
        0x12835b01,
        0x243185be,
        0x550c7dc3,
        0x72be5d74,
        0x80deb1fe,
        0x9bdc06a7,
        0xc19bf174,
        0xe49b69c1,
        0xefbe4786,
        0x0fc19dc6,
        0x240ca1cc,
        0x2de92c6f,
        0x4a7484aa,
        0x5cb0a9dc,
        0x76f988da,
        0x983e5152,
        0xa831c66d,
        0xb00327c8,
        0xbf597fc7,
        0xc6e00bf3,
        0xd5a79147,
        0x06ca6351,
        0x14292967,
        0x27b70a85,
        0x2e1b2138,
        0x4d2c6dfc,
        0x53380d13,
        0x650a7354,
        0x766a0abb,
        0x81c2c92e,
        0x92722c85,
        0xa2bfe8a1,
        0xa81a664b,
        0xc24b8b70,
        0xc76c51a3,
        0xd192e819,
        0xd6990624,
        0xf40e3585,
        0x106aa070,
        0x19a4c116,
        0x1e376c08,
        0x2748774c,
        0x34b0bcb5,
        0x391c0cb3,
        0x4ed8aa4a,
        0x5b9cca4f,
        0x682e6ff3,
        0x748f82ee,
        0x78a5636f,
        0x84c87814,
        0x8cc70208,
        0x90befffa,
        0xa4506ceb,
        0xbef9a3f7,
        0xc67178f2
    ]);
    function hashBlocks(w, v, p, pos, len) {
        var a, b, c, d, e, f, g, h, u, i, j, t1, t2;
        while(len >= 64){
            a = v[0];
            b = v[1];
            c = v[2];
            d = v[3];
            e = v[4];
            f = v[5];
            g = v[6];
            h = v[7];
            for(i = 0; i < 16; i++){
                j = pos + i * 4;
                w[i] = (p[j] & 0xff) << 24 | (p[j + 1] & 0xff) << 16 | (p[j + 2] & 0xff) << 8 | p[j + 3] & 0xff;
            }
            for(i = 16; i < 64; i++){
                u = w[i - 2];
                t1 = (u >>> 17 | u << 32 - 17) ^ (u >>> 19 | u << 32 - 19) ^ u >>> 10;
                u = w[i - 15];
                t2 = (u >>> 7 | u << 32 - 7) ^ (u >>> 18 | u << 32 - 18) ^ u >>> 3;
                w[i] = (t1 + w[i - 7] | 0) + (t2 + w[i - 16] | 0);
            }
            for(i = 0; i < 64; i++){
                t1 = (((e >>> 6 | e << 32 - 6) ^ (e >>> 11 | e << 32 - 11) ^ (e >>> 25 | e << 32 - 25)) + (e & f ^ ~e & g) | 0) + (h + (K[i] + w[i] | 0) | 0) | 0;
                t2 = ((a >>> 2 | a << 32 - 2) ^ (a >>> 13 | a << 32 - 13) ^ (a >>> 22 | a << 32 - 22)) + (a & b ^ a & c ^ b & c) | 0;
                h = g;
                g = f;
                f = e;
                e = d + t1 | 0;
                d = c;
                c = b;
                b = a;
                a = t1 + t2 | 0;
            }
            v[0] += a;
            v[1] += b;
            v[2] += c;
            v[3] += d;
            v[4] += e;
            v[5] += f;
            v[6] += g;
            v[7] += h;
            pos += 64;
            len -= 64;
        }
        return pos;
    }
    // Hash implements SHA256 hash algorithm.
    var Hash = function() {
        function Hash() {
            this.digestLength = exports.digestLength;
            this.blockSize = exports.blockSize;
            // Note: Int32Array is used instead of Uint32Array for performance reasons.
            this.state = new Int32Array(8); // hash state
            this.temp = new Int32Array(64); // temporary state
            this.buffer = new Uint8Array(128); // buffer for data to hash
            this.bufferLength = 0; // number of bytes in buffer
            this.bytesHashed = 0; // number of total bytes hashed
            this.finished = false; // indicates whether the hash was finalized
            this.reset();
        }
        // Resets hash state making it possible
        // to re-use this instance to hash other data.
        Hash.prototype.reset = function() {
            this.state[0] = 0x6a09e667;
            this.state[1] = 0xbb67ae85;
            this.state[2] = 0x3c6ef372;
            this.state[3] = 0xa54ff53a;
            this.state[4] = 0x510e527f;
            this.state[5] = 0x9b05688c;
            this.state[6] = 0x1f83d9ab;
            this.state[7] = 0x5be0cd19;
            this.bufferLength = 0;
            this.bytesHashed = 0;
            this.finished = false;
            return this;
        };
        // Cleans internal buffers and re-initializes hash state.
        Hash.prototype.clean = function() {
            for(var i = 0; i < this.buffer.length; i++){
                this.buffer[i] = 0;
            }
            for(var i = 0; i < this.temp.length; i++){
                this.temp[i] = 0;
            }
            this.reset();
        };
        // Updates hash state with the given data.
        //
        // Optionally, length of the data can be specified to hash
        // fewer bytes than data.length.
        //
        // Throws error when trying to update already finalized hash:
        // instance must be reset to use it again.
        Hash.prototype.update = function(data, dataLength) {
            if (dataLength === void 0) {
                dataLength = data.length;
            }
            if (this.finished) {
                throw new Error("SHA256: can't update because hash was finished.");
            }
            var dataPos = 0;
            this.bytesHashed += dataLength;
            if (this.bufferLength > 0) {
                while(this.bufferLength < 64 && dataLength > 0){
                    this.buffer[this.bufferLength++] = data[dataPos++];
                    dataLength--;
                }
                if (this.bufferLength === 64) {
                    hashBlocks(this.temp, this.state, this.buffer, 0, 64);
                    this.bufferLength = 0;
                }
            }
            if (dataLength >= 64) {
                dataPos = hashBlocks(this.temp, this.state, data, dataPos, dataLength);
                dataLength %= 64;
            }
            while(dataLength > 0){
                this.buffer[this.bufferLength++] = data[dataPos++];
                dataLength--;
            }
            return this;
        };
        // Finalizes hash state and puts hash into out.
        //
        // If hash was already finalized, puts the same value.
        Hash.prototype.finish = function(out) {
            if (!this.finished) {
                var bytesHashed = this.bytesHashed;
                var left = this.bufferLength;
                var bitLenHi = bytesHashed / 0x20000000 | 0;
                var bitLenLo = bytesHashed << 3;
                var padLength = bytesHashed % 64 < 56 ? 64 : 128;
                this.buffer[left] = 0x80;
                for(var i = left + 1; i < padLength - 8; i++){
                    this.buffer[i] = 0;
                }
                this.buffer[padLength - 8] = bitLenHi >>> 24 & 0xff;
                this.buffer[padLength - 7] = bitLenHi >>> 16 & 0xff;
                this.buffer[padLength - 6] = bitLenHi >>> 8 & 0xff;
                this.buffer[padLength - 5] = bitLenHi >>> 0 & 0xff;
                this.buffer[padLength - 4] = bitLenLo >>> 24 & 0xff;
                this.buffer[padLength - 3] = bitLenLo >>> 16 & 0xff;
                this.buffer[padLength - 2] = bitLenLo >>> 8 & 0xff;
                this.buffer[padLength - 1] = bitLenLo >>> 0 & 0xff;
                hashBlocks(this.temp, this.state, this.buffer, 0, padLength);
                this.finished = true;
            }
            for(var i = 0; i < 8; i++){
                out[i * 4 + 0] = this.state[i] >>> 24 & 0xff;
                out[i * 4 + 1] = this.state[i] >>> 16 & 0xff;
                out[i * 4 + 2] = this.state[i] >>> 8 & 0xff;
                out[i * 4 + 3] = this.state[i] >>> 0 & 0xff;
            }
            return this;
        };
        // Returns the final hash digest.
        Hash.prototype.digest = function() {
            var out = new Uint8Array(this.digestLength);
            this.finish(out);
            return out;
        };
        // Internal function for use in HMAC for optimization.
        Hash.prototype._saveState = function(out) {
            for(var i = 0; i < this.state.length; i++){
                out[i] = this.state[i];
            }
        };
        // Internal function for use in HMAC for optimization.
        Hash.prototype._restoreState = function(from, bytesHashed) {
            for(var i = 0; i < this.state.length; i++){
                this.state[i] = from[i];
            }
            this.bytesHashed = bytesHashed;
            this.finished = false;
            this.bufferLength = 0;
        };
        return Hash;
    }();
    exports.Hash = Hash;
    // HMAC implements HMAC-SHA256 message authentication algorithm.
    var HMAC = function() {
        function HMAC(key) {
            this.inner = new Hash();
            this.outer = new Hash();
            this.blockSize = this.inner.blockSize;
            this.digestLength = this.inner.digestLength;
            var pad = new Uint8Array(this.blockSize);
            if (key.length > this.blockSize) {
                new Hash().update(key).finish(pad).clean();
            } else {
                for(var i = 0; i < key.length; i++){
                    pad[i] = key[i];
                }
            }
            for(var i = 0; i < pad.length; i++){
                pad[i] ^= 0x36;
            }
            this.inner.update(pad);
            for(var i = 0; i < pad.length; i++){
                pad[i] ^= 0x36 ^ 0x5c;
            }
            this.outer.update(pad);
            this.istate = new Uint32Array(8);
            this.ostate = new Uint32Array(8);
            this.inner._saveState(this.istate);
            this.outer._saveState(this.ostate);
            for(var i = 0; i < pad.length; i++){
                pad[i] = 0;
            }
        }
        // Returns HMAC state to the state initialized with key
        // to make it possible to run HMAC over the other data with the same
        // key without creating a new instance.
        HMAC.prototype.reset = function() {
            this.inner._restoreState(this.istate, this.inner.blockSize);
            this.outer._restoreState(this.ostate, this.outer.blockSize);
            return this;
        };
        // Cleans HMAC state.
        HMAC.prototype.clean = function() {
            for(var i = 0; i < this.istate.length; i++){
                this.ostate[i] = this.istate[i] = 0;
            }
            this.inner.clean();
            this.outer.clean();
        };
        // Updates state with provided data.
        HMAC.prototype.update = function(data) {
            this.inner.update(data);
            return this;
        };
        // Finalizes HMAC and puts the result in out.
        HMAC.prototype.finish = function(out) {
            if (this.outer.finished) {
                this.outer.finish(out);
            } else {
                this.inner.finish(out);
                this.outer.update(out, this.digestLength).finish(out);
            }
            return this;
        };
        // Returns message authentication code.
        HMAC.prototype.digest = function() {
            var out = new Uint8Array(this.digestLength);
            this.finish(out);
            return out;
        };
        return HMAC;
    }();
    exports.HMAC = HMAC;
    // Returns SHA256 hash of data.
    function hash(data) {
        var h = new Hash().update(data);
        var digest = h.digest();
        h.clean();
        return digest;
    }
    exports.hash = hash;
    // Function hash is both available as module.hash and as default export.
    exports["default"] = hash;
    // Returns HMAC-SHA256 of data under the key.
    function hmac(key, data) {
        var h = new HMAC(key).update(data);
        var digest = h.digest();
        h.clean();
        return digest;
    }
    exports.hmac = hmac;
    // Fills hkdf buffer like this:
    // T(1) = HMAC-Hash(PRK, T(0) | info | 0x01)
    function fillBuffer(buffer, hmac, info, counter) {
        // Counter is a byte value: check if it overflowed.
        var num = counter[0];
        if (num === 0) {
            throw new Error("hkdf: cannot expand more");
        }
        // Prepare HMAC instance for new data with old key.
        hmac.reset();
        // Hash in previous output if it was generated
        // (i.e. counter is greater than 1).
        if (num > 1) {
            hmac.update(buffer);
        }
        // Hash in info if it exists.
        if (info) {
            hmac.update(info);
        }
        // Hash in the counter.
        hmac.update(counter);
        // Output result to buffer and clean HMAC instance.
        hmac.finish(buffer);
        // Increment counter inside typed array, this works properly.
        counter[0]++;
    }
    var hkdfSalt = new Uint8Array(exports.digestLength); // Filled with zeroes.
    function hkdf(key, salt, info, length) {
        if (salt === void 0) {
            salt = hkdfSalt;
        }
        if (length === void 0) {
            length = 32;
        }
        var counter = new Uint8Array([
            1
        ]);
        // HKDF-Extract uses salt as HMAC key, and key as data.
        var okm = hmac(salt, key);
        // Initialize HMAC for expanding with extracted key.
        // Ensure no collisions with `hmac` function.
        var hmac_ = new HMAC(okm);
        // Allocate buffer.
        var buffer = new Uint8Array(hmac_.digestLength);
        var bufpos = buffer.length;
        var out = new Uint8Array(length);
        for(var i = 0; i < length; i++){
            if (bufpos === buffer.length) {
                fillBuffer(buffer, hmac_, info, counter);
                bufpos = 0;
            }
            out[i] = buffer[bufpos++];
        }
        hmac_.clean();
        buffer.fill(0);
        counter.fill(0);
        return out;
    }
    exports.hkdf = hkdf;
    // Derives a key from password and salt using PBKDF2-HMAC-SHA256
    // with the given number of iterations.
    //
    // The number of bytes returned is equal to dkLen.
    //
    // (For better security, avoid dkLen greater than hash length - 32 bytes).
    function pbkdf2(password, salt, iterations, dkLen) {
        var prf = new HMAC(password);
        var len = prf.digestLength;
        var ctr = new Uint8Array(4);
        var t = new Uint8Array(len);
        var u = new Uint8Array(len);
        var dk = new Uint8Array(dkLen);
        for(var i = 0; i * len < dkLen; i++){
            var c = i + 1;
            ctr[0] = c >>> 24 & 0xff;
            ctr[1] = c >>> 16 & 0xff;
            ctr[2] = c >>> 8 & 0xff;
            ctr[3] = c >>> 0 & 0xff;
            prf.reset();
            prf.update(salt);
            prf.update(ctr);
            prf.finish(u);
            for(var j = 0; j < len; j++){
                t[j] = u[j];
            }
            for(var j = 2; j <= iterations; j++){
                prf.reset();
                prf.update(u).finish(u);
                for(var k = 0; k < len; k++){
                    t[k] ^= u[k];
                }
            }
            for(var j = 0; j < len && i * len + j < dkLen; j++){
                dk[i * len + j] = t[j];
            }
        }
        for(var i = 0; i < len; i++){
            t[i] = u[i] = 0;
        }
        for(var i = 0; i < 4; i++){
            ctr[i] = 0;
        }
        prf.clean();
        return dk;
    }
    exports.pbkdf2 = pbkdf2;
});
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/webhook.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Webhook = exports.WebhookVerificationError = void 0;
const timing_safe_equal_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/timing_safe_equal.js [app-rsc] (ecmascript)");
const base64 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/@stablelib/base64/lib/base64.js [app-rsc] (ecmascript)");
const sha256 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/fast-sha256/sha256.js [app-rsc] (ecmascript)");
const WEBHOOK_TOLERANCE_IN_SECONDS = 5 * 60;
class ExtendableError extends Error {
    constructor(message){
        super(message);
        Object.setPrototypeOf(this, ExtendableError.prototype);
        this.name = "ExtendableError";
        this.stack = new Error(message).stack;
    }
}
class WebhookVerificationError extends ExtendableError {
    constructor(message){
        super(message);
        Object.setPrototypeOf(this, WebhookVerificationError.prototype);
        this.name = "WebhookVerificationError";
    }
}
exports.WebhookVerificationError = WebhookVerificationError;
class Webhook {
    constructor(secret, options){
        if (!secret) {
            throw new Error("Secret can't be empty.");
        }
        if ((options === null || options === void 0 ? void 0 : options.format) === "raw") {
            if (secret instanceof Uint8Array) {
                this.key = secret;
            } else {
                this.key = Uint8Array.from(secret, (c)=>c.charCodeAt(0));
            }
        } else {
            if (typeof secret !== "string") {
                throw new Error("Expected secret to be of type string");
            }
            if (secret.startsWith(Webhook.prefix)) {
                secret = secret.substring(Webhook.prefix.length);
            }
            this.key = base64.decode(secret);
        }
    }
    verify(payload, headers_) {
        const headers = {};
        for (const key of Object.keys(headers_)){
            headers[key.toLowerCase()] = headers_[key];
        }
        let msgId = headers["svix-id"];
        let msgSignature = headers["svix-signature"];
        let msgTimestamp = headers["svix-timestamp"];
        if (!msgSignature || !msgId || !msgTimestamp) {
            msgId = headers["webhook-id"];
            msgSignature = headers["webhook-signature"];
            msgTimestamp = headers["webhook-timestamp"];
            if (!msgSignature || !msgId || !msgTimestamp) {
                throw new WebhookVerificationError("Missing required headers");
            }
        }
        const timestamp = this.verifyTimestamp(msgTimestamp);
        const computedSignature = this.sign(msgId, timestamp, payload);
        const expectedSignature = computedSignature.split(",")[1];
        const passedSignatures = msgSignature.split(" ");
        const encoder = new globalThis.TextEncoder();
        for (const versionedSignature of passedSignatures){
            const [version, signature] = versionedSignature.split(",");
            if (version !== "v1") {
                continue;
            }
            if ((0, timing_safe_equal_1.timingSafeEqual)(encoder.encode(signature), encoder.encode(expectedSignature))) {
                return JSON.parse(payload.toString());
            }
        }
        throw new WebhookVerificationError("No matching signature found");
    }
    sign(msgId, timestamp, payload) {
        if (typeof payload === "string") {} else if (payload.constructor.name === "Buffer") {
            payload = payload.toString();
        } else {
            throw new Error("Expected payload to be of type string or Buffer. Please refer to https://docs.svix.com/receiving/verifying-payloads/how for more information.");
        }
        const encoder = new TextEncoder();
        const timestampNumber = Math.floor(timestamp.getTime() / 1000);
        const toSign = encoder.encode(`${msgId}.${timestampNumber}.${payload}`);
        const expectedSignature = base64.encode(sha256.hmac(this.key, toSign));
        return `v1,${expectedSignature}`;
    }
    verifyTimestamp(timestampHeader) {
        const now = Math.floor(Date.now() / 1000);
        const timestamp = parseInt(timestampHeader, 10);
        if (isNaN(timestamp)) {
            throw new WebhookVerificationError("Invalid Signature Headers");
        }
        if (now - timestamp > WEBHOOK_TOLERANCE_IN_SECONDS) {
            throw new WebhookVerificationError("Message timestamp too old");
        }
        if (timestamp > now + WEBHOOK_TOLERANCE_IN_SECONDS) {
            throw new WebhookVerificationError("Message timestamp too new");
        }
        return new Date(timestamp * 1000);
    }
}
exports.Webhook = Webhook;
Webhook.prefix = "whsec_"; //# sourceMappingURL=webhook.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/endpointDisabledTrigger.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointDisabledTriggerSerializer = exports.EndpointDisabledTrigger = void 0;
var EndpointDisabledTrigger;
(function(EndpointDisabledTrigger) {
    EndpointDisabledTrigger["Manual"] = "manual";
    EndpointDisabledTrigger["Automatic"] = "automatic";
})(EndpointDisabledTrigger = exports.EndpointDisabledTrigger || (exports.EndpointDisabledTrigger = {}));
exports.EndpointDisabledTriggerSerializer = {
    _fromJsonObject (object) {
        return object;
    },
    _toJsonObject (self) {
        return self;
    }
}; //# sourceMappingURL=endpointDisabledTrigger.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/ordering.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OrderingSerializer = exports.Ordering = void 0;
var Ordering;
(function(Ordering) {
    Ordering["Ascending"] = "ascending";
    Ordering["Descending"] = "descending";
})(Ordering = exports.Ordering || (exports.Ordering = {}));
exports.OrderingSerializer = {
    _fromJsonObject (object) {
        return object;
    },
    _toJsonObject (self) {
        return self;
    }
}; //# sourceMappingURL=ordering.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/statusCodeClass.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StatusCodeClassSerializer = exports.StatusCodeClass = void 0;
var StatusCodeClass;
(function(StatusCodeClass) {
    StatusCodeClass[StatusCodeClass["CodeNone"] = 0] = "CodeNone";
    StatusCodeClass[StatusCodeClass["Code1xx"] = 100] = "Code1xx";
    StatusCodeClass[StatusCodeClass["Code2xx"] = 200] = "Code2xx";
    StatusCodeClass[StatusCodeClass["Code3xx"] = 300] = "Code3xx";
    StatusCodeClass[StatusCodeClass["Code4xx"] = 400] = "Code4xx";
    StatusCodeClass[StatusCodeClass["Code5xx"] = 500] = "Code5xx";
})(StatusCodeClass = exports.StatusCodeClass || (exports.StatusCodeClass = {}));
exports.StatusCodeClassSerializer = {
    _fromJsonObject (object) {
        return object;
    },
    _toJsonObject (self) {
        return self;
    }
}; //# sourceMappingURL=statusCodeClass.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StatusCodeClass = exports.Ordering = exports.MessageStatusText = exports.MessageStatus = exports.MessageAttemptTriggerType = exports.EndpointDisabledTrigger = exports.ConnectorKind = exports.BackgroundTaskType = exports.BackgroundTaskStatus = exports.AppPortalCapability = void 0;
var appPortalCapability_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/appPortalCapability.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "AppPortalCapability", {
    enumerable: true,
    get: function() {
        return appPortalCapability_1.AppPortalCapability;
    }
});
var backgroundTaskStatus_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/backgroundTaskStatus.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "BackgroundTaskStatus", {
    enumerable: true,
    get: function() {
        return backgroundTaskStatus_1.BackgroundTaskStatus;
    }
});
var backgroundTaskType_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/backgroundTaskType.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "BackgroundTaskType", {
    enumerable: true,
    get: function() {
        return backgroundTaskType_1.BackgroundTaskType;
    }
});
var connectorKind_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/connectorKind.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "ConnectorKind", {
    enumerable: true,
    get: function() {
        return connectorKind_1.ConnectorKind;
    }
});
var endpointDisabledTrigger_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/endpointDisabledTrigger.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "EndpointDisabledTrigger", {
    enumerable: true,
    get: function() {
        return endpointDisabledTrigger_1.EndpointDisabledTrigger;
    }
});
var messageAttemptTriggerType_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/messageAttemptTriggerType.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "MessageAttemptTriggerType", {
    enumerable: true,
    get: function() {
        return messageAttemptTriggerType_1.MessageAttemptTriggerType;
    }
});
var messageStatus_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/messageStatus.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "MessageStatus", {
    enumerable: true,
    get: function() {
        return messageStatus_1.MessageStatus;
    }
});
var messageStatusText_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/messageStatusText.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "MessageStatusText", {
    enumerable: true,
    get: function() {
        return messageStatusText_1.MessageStatusText;
    }
});
var ordering_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/ordering.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "Ordering", {
    enumerable: true,
    get: function() {
        return ordering_1.Ordering;
    }
});
var statusCodeClass_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/statusCodeClass.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "StatusCodeClass", {
    enumerable: true,
    get: function() {
        return statusCodeClass_1.StatusCodeClass;
    }
}); //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Svix = exports.messageInRaw = exports.ValidationError = exports.HttpErrorOut = exports.HTTPValidationError = exports.ApiException = void 0;
const application_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/application.js [app-rsc] (ecmascript)");
const authentication_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/authentication.js [app-rsc] (ecmascript)");
const backgroundTask_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/backgroundTask.js [app-rsc] (ecmascript)");
const endpoint_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/endpoint.js [app-rsc] (ecmascript)");
const environment_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/environment.js [app-rsc] (ecmascript)");
const eventType_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/eventType.js [app-rsc] (ecmascript)");
const health_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/health.js [app-rsc] (ecmascript)");
const ingest_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/ingest.js [app-rsc] (ecmascript)");
const integration_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/integration.js [app-rsc] (ecmascript)");
const message_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/message.js [app-rsc] (ecmascript)");
const messageAttempt_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/messageAttempt.js [app-rsc] (ecmascript)");
const operationalWebhook_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/operationalWebhook.js [app-rsc] (ecmascript)");
const statistics_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/statistics.js [app-rsc] (ecmascript)");
const operationalWebhookEndpoint_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/operationalWebhookEndpoint.js [app-rsc] (ecmascript)");
var util_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/util.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "ApiException", {
    enumerable: true,
    get: function() {
        return util_1.ApiException;
    }
});
var HttpErrors_1 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/HttpErrors.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "HTTPValidationError", {
    enumerable: true,
    get: function() {
        return HttpErrors_1.HTTPValidationError;
    }
});
Object.defineProperty(exports, "HttpErrorOut", {
    enumerable: true,
    get: function() {
        return HttpErrors_1.HttpErrorOut;
    }
});
Object.defineProperty(exports, "ValidationError", {
    enumerable: true,
    get: function() {
        return HttpErrors_1.ValidationError;
    }
});
__exportStar(__turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/webhook.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/models/index.js [app-rsc] (ecmascript)"), exports);
var message_2 = __turbopack_context__.r("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/api/message.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "messageInRaw", {
    enumerable: true,
    get: function() {
        return message_2.messageInRaw;
    }
});
const REGIONS = [
    {
        region: "us",
        url: "https://api.us.svix.com"
    },
    {
        region: "eu",
        url: "https://api.eu.svix.com"
    },
    {
        region: "in",
        url: "https://api.in.svix.com"
    },
    {
        region: "ca",
        url: "https://api.ca.svix.com"
    },
    {
        region: "au",
        url: "https://api.au.svix.com"
    }
];
class Svix {
    constructor(token, options = {}){
        var _a, _b, _c;
        const regionalUrl = (_a = REGIONS.find((x)=>x.region === token.split(".")[1])) === null || _a === void 0 ? void 0 : _a.url;
        const baseUrl = (_c = (_b = options.serverUrl) !== null && _b !== void 0 ? _b : regionalUrl) !== null && _c !== void 0 ? _c : "https://api.svix.com";
        if (options.retryScheduleInMs) {
            this.requestCtx = {
                baseUrl,
                token,
                timeout: options.requestTimeout,
                retryScheduleInMs: options.retryScheduleInMs
            };
            return;
        }
        if (options.numRetries) {
            this.requestCtx = {
                baseUrl,
                token,
                timeout: options.requestTimeout,
                numRetries: options.numRetries
            };
            return;
        }
        this.requestCtx = {
            baseUrl,
            token,
            timeout: options.requestTimeout
        };
    }
    get application() {
        return new application_1.Application(this.requestCtx);
    }
    get authentication() {
        return new authentication_1.Authentication(this.requestCtx);
    }
    get backgroundTask() {
        return new backgroundTask_1.BackgroundTask(this.requestCtx);
    }
    get endpoint() {
        return new endpoint_1.Endpoint(this.requestCtx);
    }
    get environment() {
        return new environment_1.Environment(this.requestCtx);
    }
    get eventType() {
        return new eventType_1.EventType(this.requestCtx);
    }
    get health() {
        return new health_1.Health(this.requestCtx);
    }
    get ingest() {
        return new ingest_1.Ingest(this.requestCtx);
    }
    get integration() {
        return new integration_1.Integration(this.requestCtx);
    }
    get message() {
        return new message_1.Message(this.requestCtx);
    }
    get messageAttempt() {
        return new messageAttempt_1.MessageAttempt(this.requestCtx);
    }
    get operationalWebhook() {
        return new operationalWebhook_1.OperationalWebhook(this.requestCtx);
    }
    get statistics() {
        return new statistics_1.Statistics(this.requestCtx);
    }
    get operationalWebhookEndpoint() {
        return new operationalWebhookEndpoint_1.OperationalWebhookEndpoint(this.requestCtx);
    }
}
exports.Svix = Svix; //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/resend/dist/index.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Resend",
    ()=>Resend
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$svix$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/svix/dist/index.js [app-rsc] (ecmascript)");
;
//#region package.json
var version = "6.6.0";
//#endregion
//#region src/common/utils/build-pagination-query.ts
/**
* Builds a query string from pagination options
* @param options - Pagination options containing limit and either after or before (but not both)
* @returns Query string (without leading '?') or empty string if no options
*/ function buildPaginationQuery(options) {
    const searchParams = new URLSearchParams();
    if (options.limit !== void 0) searchParams.set("limit", options.limit.toString());
    if ("after" in options && options.after !== void 0) searchParams.set("after", options.after);
    if ("before" in options && options.before !== void 0) searchParams.set("before", options.before);
    return searchParams.toString();
}
//#endregion
//#region src/api-keys/api-keys.ts
var ApiKeys = class {
    constructor(resend){
        this.resend = resend;
    }
    async create(payload, options = {}) {
        return await this.resend.post("/api-keys", payload, options);
    }
    async list(options = {}) {
        const queryString = buildPaginationQuery(options);
        const url = queryString ? `/api-keys?${queryString}` : "/api-keys";
        return await this.resend.get(url);
    }
    async remove(id) {
        return await this.resend.delete(`/api-keys/${id}`);
    }
};
//#endregion
//#region src/common/utils/parse-email-to-api-options.ts
function parseAttachments(attachments) {
    return attachments?.map((attachment)=>({
            content: attachment.content,
            filename: attachment.filename,
            path: attachment.path,
            content_type: attachment.contentType,
            content_id: attachment.contentId
        }));
}
function parseEmailToApiOptions(email) {
    return {
        attachments: parseAttachments(email.attachments),
        bcc: email.bcc,
        cc: email.cc,
        from: email.from,
        headers: email.headers,
        html: email.html,
        reply_to: email.replyTo,
        scheduled_at: email.scheduledAt,
        subject: email.subject,
        tags: email.tags,
        text: email.text,
        to: email.to,
        template: email.template ? {
            id: email.template.id,
            variables: email.template.variables
        } : void 0,
        topic_id: email.topicId
    };
}
//#endregion
//#region src/render.ts
async function render(node) {
    let render$1;
    try {
        ({ render: render$1 } = await __turbopack_context__.A("[project]/Desktop/MedRelief/medrelief.com/node_modules/@react-email/render/dist/node/index.mjs [app-rsc] (ecmascript, async loader)"));
    } catch  {
        throw new Error("Failed to render React component. Make sure to install `@react-email/render` or `@react-email/components`.");
    }
    return render$1(node);
}
//#endregion
//#region src/batch/batch.ts
var Batch = class {
    constructor(resend){
        this.resend = resend;
    }
    async send(payload, options) {
        return this.create(payload, options);
    }
    async create(payload, options) {
        const emails = [];
        for (const email of payload){
            if (email.react) {
                email.html = await render(email.react);
                email.react = void 0;
            }
            emails.push(parseEmailToApiOptions(email));
        }
        return await this.resend.post("/emails/batch", emails, {
            ...options,
            headers: {
                "x-batch-validation": options?.batchValidation ?? "strict",
                ...options?.headers
            }
        });
    }
};
//#endregion
//#region src/broadcasts/broadcasts.ts
var Broadcasts = class {
    constructor(resend){
        this.resend = resend;
    }
    async create(payload, options = {}) {
        if (payload.react) payload.html = await render(payload.react);
        return await this.resend.post("/broadcasts", {
            name: payload.name,
            segment_id: payload.segmentId,
            audience_id: payload.audienceId,
            preview_text: payload.previewText,
            from: payload.from,
            html: payload.html,
            reply_to: payload.replyTo,
            subject: payload.subject,
            text: payload.text,
            topic_id: payload.topicId
        }, options);
    }
    async send(id, payload) {
        return await this.resend.post(`/broadcasts/${id}/send`, {
            scheduled_at: payload?.scheduledAt
        });
    }
    async list(options = {}) {
        const queryString = buildPaginationQuery(options);
        const url = queryString ? `/broadcasts?${queryString}` : "/broadcasts";
        return await this.resend.get(url);
    }
    async get(id) {
        return await this.resend.get(`/broadcasts/${id}`);
    }
    async remove(id) {
        return await this.resend.delete(`/broadcasts/${id}`);
    }
    async update(id, payload) {
        if (payload.react) payload.html = await render(payload.react);
        return await this.resend.patch(`/broadcasts/${id}`, {
            name: payload.name,
            segment_id: payload.segmentId,
            audience_id: payload.audienceId,
            from: payload.from,
            html: payload.html,
            text: payload.text,
            subject: payload.subject,
            reply_to: payload.replyTo,
            preview_text: payload.previewText,
            topic_id: payload.topicId
        });
    }
};
//#endregion
//#region src/common/utils/parse-contact-properties-to-api-options.ts
function parseContactPropertyFromApi(contactProperty) {
    return {
        id: contactProperty.id,
        key: contactProperty.key,
        createdAt: contactProperty.created_at,
        type: contactProperty.type,
        fallbackValue: contactProperty.fallback_value
    };
}
function parseContactPropertyToApiOptions(contactProperty) {
    if ("key" in contactProperty) return {
        key: contactProperty.key,
        type: contactProperty.type,
        fallback_value: contactProperty.fallbackValue
    };
    return {
        fallback_value: contactProperty.fallbackValue
    };
}
//#endregion
//#region src/contact-properties/contact-properties.ts
var ContactProperties = class {
    constructor(resend){
        this.resend = resend;
    }
    async create(options) {
        const apiOptions = parseContactPropertyToApiOptions(options);
        return await this.resend.post("/contact-properties", apiOptions);
    }
    async list(options = {}) {
        const queryString = buildPaginationQuery(options);
        const url = queryString ? `/contact-properties?${queryString}` : "/contact-properties";
        const response = await this.resend.get(url);
        if (response.data) return {
            data: {
                ...response.data,
                data: response.data.data.map((apiContactProperty)=>parseContactPropertyFromApi(apiContactProperty))
            },
            headers: response.headers,
            error: null
        };
        return response;
    }
    async get(id) {
        if (!id) return {
            data: null,
            headers: null,
            error: {
                message: "Missing `id` field.",
                statusCode: null,
                name: "missing_required_field"
            }
        };
        const response = await this.resend.get(`/contact-properties/${id}`);
        if (response.data) return {
            data: {
                object: "contact_property",
                ...parseContactPropertyFromApi(response.data)
            },
            headers: response.headers,
            error: null
        };
        return response;
    }
    async update(payload) {
        if (!payload.id) return {
            data: null,
            headers: null,
            error: {
                message: "Missing `id` field.",
                statusCode: null,
                name: "missing_required_field"
            }
        };
        const apiOptions = parseContactPropertyToApiOptions(payload);
        return await this.resend.patch(`/contact-properties/${payload.id}`, apiOptions);
    }
    async remove(id) {
        if (!id) return {
            data: null,
            headers: null,
            error: {
                message: "Missing `id` field.",
                statusCode: null,
                name: "missing_required_field"
            }
        };
        return await this.resend.delete(`/contact-properties/${id}`);
    }
};
//#endregion
//#region src/contacts/segments/contact-segments.ts
var ContactSegments = class {
    constructor(resend){
        this.resend = resend;
    }
    async list(options) {
        if (!options.contactId && !options.email) return {
            data: null,
            headers: null,
            error: {
                message: "Missing `id` or `email` field.",
                statusCode: null,
                name: "missing_required_field"
            }
        };
        const identifier = options.email ? options.email : options.contactId;
        const queryString = buildPaginationQuery(options);
        const url = queryString ? `/contacts/${identifier}/segments?${queryString}` : `/contacts/${identifier}/segments`;
        return await this.resend.get(url);
    }
    async add(options) {
        if (!options.contactId && !options.email) return {
            data: null,
            headers: null,
            error: {
                message: "Missing `id` or `email` field.",
                statusCode: null,
                name: "missing_required_field"
            }
        };
        const identifier = options.email ? options.email : options.contactId;
        return this.resend.post(`/contacts/${identifier}/segments/${options.segmentId}`);
    }
    async remove(options) {
        if (!options.contactId && !options.email) return {
            data: null,
            headers: null,
            error: {
                message: "Missing `id` or `email` field.",
                statusCode: null,
                name: "missing_required_field"
            }
        };
        const identifier = options.email ? options.email : options.contactId;
        return this.resend.delete(`/contacts/${identifier}/segments/${options.segmentId}`);
    }
};
//#endregion
//#region src/contacts/topics/contact-topics.ts
var ContactTopics = class {
    constructor(resend){
        this.resend = resend;
    }
    async update(payload) {
        if (!payload.id && !payload.email) return {
            data: null,
            headers: null,
            error: {
                message: "Missing `id` or `email` field.",
                statusCode: null,
                name: "missing_required_field"
            }
        };
        const identifier = payload.email ? payload.email : payload.id;
        return this.resend.patch(`/contacts/${identifier}/topics`, payload.topics);
    }
    async list(options) {
        if (!options.id && !options.email) return {
            data: null,
            headers: null,
            error: {
                message: "Missing `id` or `email` field.",
                statusCode: null,
                name: "missing_required_field"
            }
        };
        const identifier = options.email ? options.email : options.id;
        const queryString = buildPaginationQuery(options);
        const url = queryString ? `/contacts/${identifier}/topics?${queryString}` : `/contacts/${identifier}/topics`;
        return this.resend.get(url);
    }
};
//#endregion
//#region src/contacts/contacts.ts
var Contacts = class {
    constructor(resend){
        this.resend = resend;
        this.topics = new ContactTopics(this.resend);
        this.segments = new ContactSegments(this.resend);
    }
    async create(payload, options = {}) {
        if (!payload.audienceId) return await this.resend.post("/contacts", {
            unsubscribed: payload.unsubscribed,
            email: payload.email,
            first_name: payload.firstName,
            last_name: payload.lastName,
            properties: payload.properties
        }, options);
        return await this.resend.post(`/audiences/${payload.audienceId}/contacts`, {
            unsubscribed: payload.unsubscribed,
            email: payload.email,
            first_name: payload.firstName,
            last_name: payload.lastName,
            properties: payload.properties
        }, options);
    }
    async list(options = {}) {
        const segmentId = options.segmentId ?? options.audienceId;
        if (!segmentId) {
            const queryString$1 = buildPaginationQuery(options);
            const url$1 = queryString$1 ? `/contacts?${queryString$1}` : "/contacts";
            return await this.resend.get(url$1);
        }
        const queryString = buildPaginationQuery(options);
        const url = queryString ? `/segments/${segmentId}/contacts?${queryString}` : `/segments/${segmentId}/contacts`;
        return await this.resend.get(url);
    }
    async get(options) {
        if (typeof options === "string") return this.resend.get(`/contacts/${options}`);
        if (!options.id && !options.email) return {
            data: null,
            headers: null,
            error: {
                message: "Missing `id` or `email` field.",
                statusCode: null,
                name: "missing_required_field"
            }
        };
        if (!options.audienceId) return this.resend.get(`/contacts/${options?.email ? options?.email : options?.id}`);
        return this.resend.get(`/audiences/${options.audienceId}/contacts/${options?.email ? options?.email : options?.id}`);
    }
    async update(options) {
        if (!options.id && !options.email) return {
            data: null,
            headers: null,
            error: {
                message: "Missing `id` or `email` field.",
                statusCode: null,
                name: "missing_required_field"
            }
        };
        if (!options.audienceId) return await this.resend.patch(`/contacts/${options?.email ? options?.email : options?.id}`, {
            unsubscribed: options.unsubscribed,
            first_name: options.firstName,
            last_name: options.lastName,
            properties: options.properties
        });
        return await this.resend.patch(`/audiences/${options.audienceId}/contacts/${options?.email ? options?.email : options?.id}`, {
            unsubscribed: options.unsubscribed,
            first_name: options.firstName,
            last_name: options.lastName,
            properties: options.properties
        });
    }
    async remove(payload) {
        if (typeof payload === "string") return this.resend.delete(`/contacts/${payload}`);
        if (!payload.id && !payload.email) return {
            data: null,
            headers: null,
            error: {
                message: "Missing `id` or `email` field.",
                statusCode: null,
                name: "missing_required_field"
            }
        };
        if (!payload.audienceId) return this.resend.delete(`/contacts/${payload?.email ? payload?.email : payload?.id}`);
        return this.resend.delete(`/audiences/${payload.audienceId}/contacts/${payload?.email ? payload?.email : payload?.id}`);
    }
};
//#endregion
//#region src/common/utils/parse-domain-to-api-options.ts
function parseDomainToApiOptions(domain) {
    return {
        name: domain.name,
        region: domain.region,
        custom_return_path: domain.customReturnPath,
        capabilities: domain.capabilities,
        open_tracking: domain.openTracking,
        click_tracking: domain.clickTracking,
        tls: domain.tls
    };
}
//#endregion
//#region src/domains/domains.ts
var Domains = class {
    constructor(resend){
        this.resend = resend;
    }
    async create(payload, options = {}) {
        return await this.resend.post("/domains", parseDomainToApiOptions(payload), options);
    }
    async list(options = {}) {
        const queryString = buildPaginationQuery(options);
        const url = queryString ? `/domains?${queryString}` : "/domains";
        return await this.resend.get(url);
    }
    async get(id) {
        return await this.resend.get(`/domains/${id}`);
    }
    async update(payload) {
        return await this.resend.patch(`/domains/${payload.id}`, {
            click_tracking: payload.clickTracking,
            open_tracking: payload.openTracking,
            tls: payload.tls,
            capabilities: payload.capabilities
        });
    }
    async remove(id) {
        return await this.resend.delete(`/domains/${id}`);
    }
    async verify(id) {
        return await this.resend.post(`/domains/${id}/verify`);
    }
};
//#endregion
//#region src/emails/attachments/attachments.ts
var Attachments = class {
    constructor(resend){
        this.resend = resend;
    }
    async get(options) {
        const { emailId, id } = options;
        return await this.resend.get(`/emails/${emailId}/attachments/${id}`);
    }
    async list(options) {
        const { emailId } = options;
        const queryString = buildPaginationQuery(options);
        const url = queryString ? `/emails/${emailId}/attachments?${queryString}` : `/emails/${emailId}/attachments`;
        return await this.resend.get(url);
    }
};
//#endregion
//#region src/emails/receiving/attachments/attachments.ts
var Attachments$1 = class {
    constructor(resend){
        this.resend = resend;
    }
    async get(options) {
        const { emailId, id } = options;
        return await this.resend.get(`/emails/receiving/${emailId}/attachments/${id}`);
    }
    async list(options) {
        const { emailId } = options;
        const queryString = buildPaginationQuery(options);
        const url = queryString ? `/emails/receiving/${emailId}/attachments?${queryString}` : `/emails/receiving/${emailId}/attachments`;
        return await this.resend.get(url);
    }
};
//#endregion
//#region src/emails/receiving/receiving.ts
var Receiving = class {
    constructor(resend){
        this.resend = resend;
        this.attachments = new Attachments$1(resend);
    }
    async get(id) {
        return await this.resend.get(`/emails/receiving/${id}`);
    }
    async list(options = {}) {
        const queryString = buildPaginationQuery(options);
        const url = queryString ? `/emails/receiving?${queryString}` : "/emails/receiving";
        return await this.resend.get(url);
    }
};
//#endregion
//#region src/emails/emails.ts
var Emails = class {
    constructor(resend){
        this.resend = resend;
        this.attachments = new Attachments(resend);
        this.receiving = new Receiving(resend);
    }
    async send(payload, options = {}) {
        return this.create(payload, options);
    }
    async create(payload, options = {}) {
        if (payload.react) payload.html = await render(payload.react);
        return await this.resend.post("/emails", parseEmailToApiOptions(payload), options);
    }
    async get(id) {
        return await this.resend.get(`/emails/${id}`);
    }
    async list(options = {}) {
        const queryString = buildPaginationQuery(options);
        const url = queryString ? `/emails?${queryString}` : "/emails";
        return await this.resend.get(url);
    }
    async update(payload) {
        return await this.resend.patch(`/emails/${payload.id}`, {
            scheduled_at: payload.scheduledAt
        });
    }
    async cancel(id) {
        return await this.resend.post(`/emails/${id}/cancel`);
    }
};
//#endregion
//#region src/segments/segments.ts
var Segments = class {
    constructor(resend){
        this.resend = resend;
    }
    async create(payload, options = {}) {
        return await this.resend.post("/segments", payload, options);
    }
    async list(options = {}) {
        const queryString = buildPaginationQuery(options);
        const url = queryString ? `/segments?${queryString}` : "/segments";
        return await this.resend.get(url);
    }
    async get(id) {
        return await this.resend.get(`/segments/${id}`);
    }
    async remove(id) {
        return await this.resend.delete(`/segments/${id}`);
    }
};
//#endregion
//#region src/common/utils/get-pagination-query-properties.ts
function getPaginationQueryProperties(options = {}) {
    const query = new URLSearchParams();
    if (options.before) query.set("before", options.before);
    if (options.after) query.set("after", options.after);
    if (options.limit) query.set("limit", options.limit.toString());
    return query.size > 0 ? `?${query.toString()}` : "";
}
//#endregion
//#region src/common/utils/parse-template-to-api-options.ts
function parseVariables(variables) {
    return variables?.map((variable)=>({
            key: variable.key,
            type: variable.type,
            fallback_value: variable.fallbackValue
        }));
}
function parseTemplateToApiOptions(template) {
    return {
        name: "name" in template ? template.name : void 0,
        subject: template.subject,
        html: template.html,
        text: template.text,
        alias: template.alias,
        from: template.from,
        reply_to: template.replyTo,
        variables: parseVariables(template.variables)
    };
}
//#endregion
//#region src/templates/chainable-template-result.ts
var ChainableTemplateResult = class {
    constructor(promise, publishFn){
        this.promise = promise;
        this.publishFn = publishFn;
    }
    then(onfulfilled, onrejected) {
        return this.promise.then(onfulfilled, onrejected);
    }
    async publish() {
        const { data, error } = await this.promise;
        if (error) return {
            data: null,
            headers: null,
            error
        };
        return this.publishFn(data.id);
    }
};
//#endregion
//#region src/templates/templates.ts
var Templates = class {
    constructor(resend){
        this.resend = resend;
    }
    create(payload) {
        return new ChainableTemplateResult(this.performCreate(payload), this.publish.bind(this));
    }
    async performCreate(payload) {
        if (payload.react) {
            if (!this.renderAsync) try {
                const { renderAsync } = await __turbopack_context__.A("[project]/Desktop/MedRelief/medrelief.com/node_modules/@react-email/render/dist/node/index.mjs [app-rsc] (ecmascript, async loader)");
                this.renderAsync = renderAsync;
            } catch  {
                throw new Error("Failed to render React component. Make sure to install `@react-email/render`");
            }
            payload.html = await this.renderAsync(payload.react);
        }
        return this.resend.post("/templates", parseTemplateToApiOptions(payload));
    }
    async remove(identifier) {
        return await this.resend.delete(`/templates/${identifier}`);
    }
    async get(identifier) {
        return await this.resend.get(`/templates/${identifier}`);
    }
    async list(options = {}) {
        return this.resend.get(`/templates${getPaginationQueryProperties(options)}`);
    }
    duplicate(identifier) {
        return new ChainableTemplateResult(this.resend.post(`/templates/${identifier}/duplicate`), this.publish.bind(this));
    }
    async publish(identifier) {
        return await this.resend.post(`/templates/${identifier}/publish`);
    }
    async update(identifier, payload) {
        return await this.resend.patch(`/templates/${identifier}`, parseTemplateToApiOptions(payload));
    }
};
//#endregion
//#region src/topics/topics.ts
var Topics = class {
    constructor(resend){
        this.resend = resend;
    }
    async create(payload) {
        const { defaultSubscription, ...body } = payload;
        return await this.resend.post("/topics", {
            ...body,
            default_subscription: defaultSubscription
        });
    }
    async list() {
        return await this.resend.get("/topics");
    }
    async get(id) {
        if (!id) return {
            data: null,
            headers: null,
            error: {
                message: "Missing `id` field.",
                statusCode: null,
                name: "missing_required_field"
            }
        };
        return await this.resend.get(`/topics/${id}`);
    }
    async update(payload) {
        if (!payload.id) return {
            data: null,
            headers: null,
            error: {
                message: "Missing `id` field.",
                statusCode: null,
                name: "missing_required_field"
            }
        };
        return await this.resend.patch(`/topics/${payload.id}`, payload);
    }
    async remove(id) {
        if (!id) return {
            data: null,
            headers: null,
            error: {
                message: "Missing `id` field.",
                statusCode: null,
                name: "missing_required_field"
            }
        };
        return await this.resend.delete(`/topics/${id}`);
    }
};
//#endregion
//#region src/webhooks/webhooks.ts
var Webhooks = class {
    constructor(resend){
        this.resend = resend;
    }
    async create(payload, options = {}) {
        return await this.resend.post("/webhooks", payload, options);
    }
    async get(id) {
        return await this.resend.get(`/webhooks/${id}`);
    }
    async list(options = {}) {
        const queryString = buildPaginationQuery(options);
        const url = queryString ? `/webhooks?${queryString}` : "/webhooks";
        return await this.resend.get(url);
    }
    async update(id, payload) {
        return await this.resend.patch(`/webhooks/${id}`, payload);
    }
    async remove(id) {
        return await this.resend.delete(`/webhooks/${id}`);
    }
    verify(payload) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$svix$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Webhook"](payload.webhookSecret).verify(payload.payload, {
            "svix-id": payload.headers.id,
            "svix-timestamp": payload.headers.timestamp,
            "svix-signature": payload.headers.signature
        });
    }
};
//#endregion
//#region src/resend.ts
const defaultBaseUrl = "https://api.resend.com";
const defaultUserAgent = `resend-node:${version}`;
const baseUrl = typeof process !== "undefined" && process.env ? process.env.RESEND_BASE_URL || defaultBaseUrl : defaultBaseUrl;
const userAgent = typeof process !== "undefined" && process.env ? process.env.RESEND_USER_AGENT || defaultUserAgent : defaultUserAgent;
var Resend = class {
    constructor(key){
        this.key = key;
        this.apiKeys = new ApiKeys(this);
        this.segments = new Segments(this);
        this.audiences = this.segments;
        this.batch = new Batch(this);
        this.broadcasts = new Broadcasts(this);
        this.contacts = new Contacts(this);
        this.contactProperties = new ContactProperties(this);
        this.domains = new Domains(this);
        this.emails = new Emails(this);
        this.webhooks = new Webhooks(this);
        this.templates = new Templates(this);
        this.topics = new Topics(this);
        if (!key) {
            if (typeof process !== "undefined" && process.env) this.key = process.env.RESEND_API_KEY;
            if (!this.key) throw new Error("Missing API key. Pass it to the constructor `new Resend(\"re_123\")`");
        }
        this.headers = new Headers({
            Authorization: `Bearer ${this.key}`,
            "User-Agent": userAgent,
            "Content-Type": "application/json"
        });
    }
    async fetchRequest(path, options = {}) {
        try {
            const response = await fetch(`${baseUrl}${path}`, options);
            if (!response.ok) try {
                const rawError = await response.text();
                return {
                    data: null,
                    error: JSON.parse(rawError),
                    headers: Object.fromEntries(response.headers.entries())
                };
            } catch (err) {
                if (err instanceof SyntaxError) return {
                    data: null,
                    error: {
                        name: "application_error",
                        statusCode: response.status,
                        message: "Internal server error. We are unable to process your request right now, please try again later."
                    },
                    headers: Object.fromEntries(response.headers.entries())
                };
                const error = {
                    message: response.statusText,
                    statusCode: response.status,
                    name: "application_error"
                };
                if (err instanceof Error) return {
                    data: null,
                    error: {
                        ...error,
                        message: err.message
                    },
                    headers: Object.fromEntries(response.headers.entries())
                };
                return {
                    data: null,
                    error,
                    headers: Object.fromEntries(response.headers.entries())
                };
            }
            return {
                data: await response.json(),
                error: null,
                headers: Object.fromEntries(response.headers.entries())
            };
        } catch  {
            return {
                data: null,
                error: {
                    name: "application_error",
                    statusCode: null,
                    message: "Unable to fetch data. The request could not be resolved."
                },
                headers: null
            };
        }
    }
    async post(path, entity, options = {}) {
        const headers = new Headers(this.headers);
        if (options.headers) for (const [key, value] of new Headers(options.headers).entries())headers.set(key, value);
        if (options.idempotencyKey) headers.set("Idempotency-Key", options.idempotencyKey);
        const requestOptions = {
            method: "POST",
            body: JSON.stringify(entity),
            ...options,
            headers
        };
        return this.fetchRequest(path, requestOptions);
    }
    async get(path, options = {}) {
        const headers = new Headers(this.headers);
        if (options.headers) for (const [key, value] of new Headers(options.headers).entries())headers.set(key, value);
        const requestOptions = {
            method: "GET",
            ...options,
            headers
        };
        return this.fetchRequest(path, requestOptions);
    }
    async put(path, entity, options = {}) {
        const headers = new Headers(this.headers);
        if (options.headers) for (const [key, value] of new Headers(options.headers).entries())headers.set(key, value);
        const requestOptions = {
            method: "PUT",
            body: JSON.stringify(entity),
            ...options,
            headers
        };
        return this.fetchRequest(path, requestOptions);
    }
    async patch(path, entity, options = {}) {
        const headers = new Headers(this.headers);
        if (options.headers) for (const [key, value] of new Headers(options.headers).entries())headers.set(key, value);
        const requestOptions = {
            method: "PATCH",
            body: JSON.stringify(entity),
            ...options,
            headers
        };
        return this.fetchRequest(path, requestOptions);
    }
    async delete(path, query) {
        const requestOptions = {
            method: "DELETE",
            body: JSON.stringify(query),
            headers: this.headers
        };
        return this.fetchRequest(path, requestOptions);
    }
};
;
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
;
;
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/helpers/util.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ZodParsedType",
    ()=>ZodParsedType,
    "getParsedType",
    ()=>getParsedType,
    "objectUtil",
    ()=>objectUtil,
    "util",
    ()=>util
]);
var util;
(function(util) {
    util.assertEqual = (_)=>{};
    function assertIs(_arg) {}
    util.assertIs = assertIs;
    function assertNever(_x) {
        throw new Error();
    }
    util.assertNever = assertNever;
    util.arrayToEnum = (items)=>{
        const obj = {};
        for (const item of items){
            obj[item] = item;
        }
        return obj;
    };
    util.getValidEnumValues = (obj)=>{
        const validKeys = util.objectKeys(obj).filter((k)=>typeof obj[obj[k]] !== "number");
        const filtered = {};
        for (const k of validKeys){
            filtered[k] = obj[k];
        }
        return util.objectValues(filtered);
    };
    util.objectValues = (obj)=>{
        return util.objectKeys(obj).map(function(e) {
            return obj[e];
        });
    };
    util.objectKeys = typeof Object.keys === "function" // eslint-disable-line ban/ban
     ? (obj)=>Object.keys(obj) // eslint-disable-line ban/ban
     : (object)=>{
        const keys = [];
        for(const key in object){
            if (Object.prototype.hasOwnProperty.call(object, key)) {
                keys.push(key);
            }
        }
        return keys;
    };
    util.find = (arr, checker)=>{
        for (const item of arr){
            if (checker(item)) return item;
        }
        return undefined;
    };
    util.isInteger = typeof Number.isInteger === "function" ? (val)=>Number.isInteger(val) // eslint-disable-line ban/ban
     : (val)=>typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
    function joinValues(array, separator = " | ") {
        return array.map((val)=>typeof val === "string" ? `'${val}'` : val).join(separator);
    }
    util.joinValues = joinValues;
    util.jsonStringifyReplacer = (_, value)=>{
        if (typeof value === "bigint") {
            return value.toString();
        }
        return value;
    };
})(util || (util = {}));
var objectUtil;
(function(objectUtil) {
    objectUtil.mergeShapes = (first, second)=>{
        return {
            ...first,
            ...second
        };
    };
})(objectUtil || (objectUtil = {}));
const ZodParsedType = util.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set"
]);
const getParsedType = (data)=>{
    const t = typeof data;
    switch(t){
        case "undefined":
            return ZodParsedType.undefined;
        case "string":
            return ZodParsedType.string;
        case "number":
            return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
        case "boolean":
            return ZodParsedType.boolean;
        case "function":
            return ZodParsedType.function;
        case "bigint":
            return ZodParsedType.bigint;
        case "symbol":
            return ZodParsedType.symbol;
        case "object":
            if (Array.isArray(data)) {
                return ZodParsedType.array;
            }
            if (data === null) {
                return ZodParsedType.null;
            }
            if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
                return ZodParsedType.promise;
            }
            if (typeof Map !== "undefined" && data instanceof Map) {
                return ZodParsedType.map;
            }
            if (typeof Set !== "undefined" && data instanceof Set) {
                return ZodParsedType.set;
            }
            if (typeof Date !== "undefined" && data instanceof Date) {
                return ZodParsedType.date;
            }
            return ZodParsedType.object;
        default:
            return ZodParsedType.unknown;
    }
};
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/ZodError.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ZodError",
    ()=>ZodError,
    "ZodIssueCode",
    ()=>ZodIssueCode,
    "quotelessJson",
    ()=>quotelessJson
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/helpers/util.js [app-rsc] (ecmascript)");
;
const ZodIssueCode = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite"
]);
const quotelessJson = (obj)=>{
    const json = JSON.stringify(obj, null, 2);
    return json.replace(/"([^"]+)":/g, "$1:");
};
class ZodError extends Error {
    get errors() {
        return this.issues;
    }
    constructor(issues){
        super();
        this.issues = [];
        this.addIssue = (sub)=>{
            this.issues = [
                ...this.issues,
                sub
            ];
        };
        this.addIssues = (subs = [])=>{
            this.issues = [
                ...this.issues,
                ...subs
            ];
        };
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) {
            // eslint-disable-next-line ban/ban
            Object.setPrototypeOf(this, actualProto);
        } else {
            this.__proto__ = actualProto;
        }
        this.name = "ZodError";
        this.issues = issues;
    }
    format(_mapper) {
        const mapper = _mapper || function(issue) {
            return issue.message;
        };
        const fieldErrors = {
            _errors: []
        };
        const processError = (error)=>{
            for (const issue of error.issues){
                if (issue.code === "invalid_union") {
                    issue.unionErrors.map(processError);
                } else if (issue.code === "invalid_return_type") {
                    processError(issue.returnTypeError);
                } else if (issue.code === "invalid_arguments") {
                    processError(issue.argumentsError);
                } else if (issue.path.length === 0) {
                    fieldErrors._errors.push(mapper(issue));
                } else {
                    let curr = fieldErrors;
                    let i = 0;
                    while(i < issue.path.length){
                        const el = issue.path[i];
                        const terminal = i === issue.path.length - 1;
                        if (!terminal) {
                            curr[el] = curr[el] || {
                                _errors: []
                            };
                        // if (typeof el === "string") {
                        //   curr[el] = curr[el] || { _errors: [] };
                        // } else if (typeof el === "number") {
                        //   const errorArray: any = [];
                        //   errorArray._errors = [];
                        //   curr[el] = curr[el] || errorArray;
                        // }
                        } else {
                            curr[el] = curr[el] || {
                                _errors: []
                            };
                            curr[el]._errors.push(mapper(issue));
                        }
                        curr = curr[el];
                        i++;
                    }
                }
            }
        };
        processError(this);
        return fieldErrors;
    }
    static assert(value) {
        if (!(value instanceof ZodError)) {
            throw new Error(`Not a ZodError: ${value}`);
        }
    }
    toString() {
        return this.message;
    }
    get message() {
        return JSON.stringify(this.issues, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].jsonStringifyReplacer, 2);
    }
    get isEmpty() {
        return this.issues.length === 0;
    }
    flatten(mapper = (issue)=>issue.message) {
        const fieldErrors = {};
        const formErrors = [];
        for (const sub of this.issues){
            if (sub.path.length > 0) {
                const firstEl = sub.path[0];
                fieldErrors[firstEl] = fieldErrors[firstEl] || [];
                fieldErrors[firstEl].push(mapper(sub));
            } else {
                formErrors.push(mapper(sub));
            }
        }
        return {
            formErrors,
            fieldErrors
        };
    }
    get formErrors() {
        return this.flatten();
    }
}
ZodError.create = (issues)=>{
    const error = new ZodError(issues);
    return error;
};
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/locales/en.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/ZodError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/helpers/util.js [app-rsc] (ecmascript)");
;
;
const errorMap = (issue, _ctx)=>{
    let message;
    switch(issue.code){
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type:
            if (issue.received === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].undefined) {
                message = "Required";
            } else {
                message = `Expected ${issue.expected}, received ${issue.received}`;
            }
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_literal:
            message = `Invalid literal value, expected ${JSON.stringify(issue.expected, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].jsonStringifyReplacer)}`;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].unrecognized_keys:
            message = `Unrecognized key(s) in object: ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].joinValues(issue.keys, ", ")}`;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_union:
            message = `Invalid input`;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_union_discriminator:
            message = `Invalid discriminator value. Expected ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].joinValues(issue.options)}`;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_enum_value:
            message = `Invalid enum value. Expected ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].joinValues(issue.options)}, received '${issue.received}'`;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_arguments:
            message = `Invalid function arguments`;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_return_type:
            message = `Invalid function return type`;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_date:
            message = `Invalid date`;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string:
            if (typeof issue.validation === "object") {
                if ("includes" in issue.validation) {
                    message = `Invalid input: must include "${issue.validation.includes}"`;
                    if (typeof issue.validation.position === "number") {
                        message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
                    }
                } else if ("startsWith" in issue.validation) {
                    message = `Invalid input: must start with "${issue.validation.startsWith}"`;
                } else if ("endsWith" in issue.validation) {
                    message = `Invalid input: must end with "${issue.validation.endsWith}"`;
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].assertNever(issue.validation);
                }
            } else if (issue.validation !== "regex") {
                message = `Invalid ${issue.validation}`;
            } else {
                message = "Invalid";
            }
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_small:
            if (issue.type === "array") message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
            else if (issue.type === "string") message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
            else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
            else if (issue.type === "bigint") message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
            else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
            else message = "Invalid input";
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_big:
            if (issue.type === "array") message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
            else if (issue.type === "string") message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
            else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
            else if (issue.type === "bigint") message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
            else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
            else message = "Invalid input";
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].custom:
            message = `Invalid input`;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_intersection_types:
            message = `Intersection results could not be merged`;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].not_multiple_of:
            message = `Number must be a multiple of ${issue.multipleOf}`;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].not_finite:
            message = "Number must be finite";
            break;
        default:
            message = _ctx.defaultError;
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].assertNever(issue);
    }
    return {
        message
    };
};
const __TURBOPACK__default__export__ = errorMap;
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/errors.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getErrorMap",
    ()=>getErrorMap,
    "setErrorMap",
    ()=>setErrorMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/locales/en.js [app-rsc] (ecmascript)");
;
let overrideErrorMap = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
;
function setErrorMap(map) {
    overrideErrorMap = map;
}
function getErrorMap() {
    return overrideErrorMap;
}
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/errors.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultErrorMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "getErrorMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getErrorMap"],
    "setErrorMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setErrorMap"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/errors.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/locales/en.js [app-rsc] (ecmascript)");
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/helpers/parseUtil.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DIRTY",
    ()=>DIRTY,
    "EMPTY_PATH",
    ()=>EMPTY_PATH,
    "INVALID",
    ()=>INVALID,
    "OK",
    ()=>OK,
    "ParseStatus",
    ()=>ParseStatus,
    "addIssueToContext",
    ()=>addIssueToContext,
    "isAborted",
    ()=>isAborted,
    "isAsync",
    ()=>isAsync,
    "isDirty",
    ()=>isDirty,
    "isValid",
    ()=>isValid,
    "makeIssue",
    ()=>makeIssue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/errors.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/locales/en.js [app-rsc] (ecmascript)");
;
;
const makeIssue = (params)=>{
    const { data, path, errorMaps, issueData } = params;
    const fullPath = [
        ...path,
        ...issueData.path || []
    ];
    const fullIssue = {
        ...issueData,
        path: fullPath
    };
    if (issueData.message !== undefined) {
        return {
            ...issueData,
            path: fullPath,
            message: issueData.message
        };
    }
    let errorMessage = "";
    const maps = errorMaps.filter((m)=>!!m).slice().reverse();
    for (const map of maps){
        errorMessage = map(fullIssue, {
            data,
            defaultError: errorMessage
        }).message;
    }
    return {
        ...issueData,
        path: fullPath,
        message: errorMessage
    };
};
const EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
    const overrideMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getErrorMap"])();
    const issue = makeIssue({
        issueData: issueData,
        data: ctx.data,
        path: ctx.path,
        errorMaps: [
            ctx.common.contextualErrorMap,
            ctx.schemaErrorMap,
            overrideMap,
            overrideMap === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] ? undefined : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
        ].filter((x)=>!!x)
    });
    ctx.common.issues.push(issue);
}
class ParseStatus {
    constructor(){
        this.value = "valid";
    }
    dirty() {
        if (this.value === "valid") this.value = "dirty";
    }
    abort() {
        if (this.value !== "aborted") this.value = "aborted";
    }
    static mergeArray(status, results) {
        const arrayValue = [];
        for (const s of results){
            if (s.status === "aborted") return INVALID;
            if (s.status === "dirty") status.dirty();
            arrayValue.push(s.value);
        }
        return {
            status: status.value,
            value: arrayValue
        };
    }
    static async mergeObjectAsync(status, pairs) {
        const syncPairs = [];
        for (const pair of pairs){
            const key = await pair.key;
            const value = await pair.value;
            syncPairs.push({
                key,
                value
            });
        }
        return ParseStatus.mergeObjectSync(status, syncPairs);
    }
    static mergeObjectSync(status, pairs) {
        const finalObject = {};
        for (const pair of pairs){
            const { key, value } = pair;
            if (key.status === "aborted") return INVALID;
            if (value.status === "aborted") return INVALID;
            if (key.status === "dirty") status.dirty();
            if (value.status === "dirty") status.dirty();
            if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
                finalObject[key.value] = value.value;
            }
        }
        return {
            status: status.value,
            value: finalObject
        };
    }
}
const INVALID = Object.freeze({
    status: "aborted"
});
const DIRTY = (value)=>({
        status: "dirty",
        value
    });
const OK = (value)=>({
        status: "valid",
        value
    });
const isAborted = (x)=>x.status === "aborted";
const isDirty = (x)=>x.status === "dirty";
const isValid = (x)=>x.status === "valid";
const isAsync = (x)=>typeof Promise !== "undefined" && x instanceof Promise;
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/helpers/typeAliases.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/locales/en.js [app-rsc] (ecmascript) <export default as defaultErrorMap>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultErrorMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/locales/en.js [app-rsc] (ecmascript)");
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/helpers/errorUtil.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "errorUtil",
    ()=>errorUtil
]);
var errorUtil;
(function(errorUtil) {
    errorUtil.errToObj = (message)=>typeof message === "string" ? {
            message
        } : message || {};
    // biome-ignore lint:
    errorUtil.toString = (message)=>typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/types.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BRAND",
    ()=>BRAND,
    "NEVER",
    ()=>NEVER,
    "Schema",
    ()=>ZodType,
    "ZodAny",
    ()=>ZodAny,
    "ZodArray",
    ()=>ZodArray,
    "ZodBigInt",
    ()=>ZodBigInt,
    "ZodBoolean",
    ()=>ZodBoolean,
    "ZodBranded",
    ()=>ZodBranded,
    "ZodCatch",
    ()=>ZodCatch,
    "ZodDate",
    ()=>ZodDate,
    "ZodDefault",
    ()=>ZodDefault,
    "ZodDiscriminatedUnion",
    ()=>ZodDiscriminatedUnion,
    "ZodEffects",
    ()=>ZodEffects,
    "ZodEnum",
    ()=>ZodEnum,
    "ZodFirstPartyTypeKind",
    ()=>ZodFirstPartyTypeKind,
    "ZodFunction",
    ()=>ZodFunction,
    "ZodIntersection",
    ()=>ZodIntersection,
    "ZodLazy",
    ()=>ZodLazy,
    "ZodLiteral",
    ()=>ZodLiteral,
    "ZodMap",
    ()=>ZodMap,
    "ZodNaN",
    ()=>ZodNaN,
    "ZodNativeEnum",
    ()=>ZodNativeEnum,
    "ZodNever",
    ()=>ZodNever,
    "ZodNull",
    ()=>ZodNull,
    "ZodNullable",
    ()=>ZodNullable,
    "ZodNumber",
    ()=>ZodNumber,
    "ZodObject",
    ()=>ZodObject,
    "ZodOptional",
    ()=>ZodOptional,
    "ZodPipeline",
    ()=>ZodPipeline,
    "ZodPromise",
    ()=>ZodPromise,
    "ZodReadonly",
    ()=>ZodReadonly,
    "ZodRecord",
    ()=>ZodRecord,
    "ZodSchema",
    ()=>ZodType,
    "ZodSet",
    ()=>ZodSet,
    "ZodString",
    ()=>ZodString,
    "ZodSymbol",
    ()=>ZodSymbol,
    "ZodTransformer",
    ()=>ZodEffects,
    "ZodTuple",
    ()=>ZodTuple,
    "ZodType",
    ()=>ZodType,
    "ZodUndefined",
    ()=>ZodUndefined,
    "ZodUnion",
    ()=>ZodUnion,
    "ZodUnknown",
    ()=>ZodUnknown,
    "ZodVoid",
    ()=>ZodVoid,
    "any",
    ()=>anyType,
    "array",
    ()=>arrayType,
    "bigint",
    ()=>bigIntType,
    "boolean",
    ()=>booleanType,
    "coerce",
    ()=>coerce,
    "custom",
    ()=>custom,
    "date",
    ()=>dateType,
    "datetimeRegex",
    ()=>datetimeRegex,
    "discriminatedUnion",
    ()=>discriminatedUnionType,
    "effect",
    ()=>effectsType,
    "enum",
    ()=>enumType,
    "function",
    ()=>functionType,
    "instanceof",
    ()=>instanceOfType,
    "intersection",
    ()=>intersectionType,
    "late",
    ()=>late,
    "lazy",
    ()=>lazyType,
    "literal",
    ()=>literalType,
    "map",
    ()=>mapType,
    "nan",
    ()=>nanType,
    "nativeEnum",
    ()=>nativeEnumType,
    "never",
    ()=>neverType,
    "null",
    ()=>nullType,
    "nullable",
    ()=>nullableType,
    "number",
    ()=>numberType,
    "object",
    ()=>objectType,
    "oboolean",
    ()=>oboolean,
    "onumber",
    ()=>onumber,
    "optional",
    ()=>optionalType,
    "ostring",
    ()=>ostring,
    "pipeline",
    ()=>pipelineType,
    "preprocess",
    ()=>preprocessType,
    "promise",
    ()=>promiseType,
    "record",
    ()=>recordType,
    "set",
    ()=>setType,
    "strictObject",
    ()=>strictObjectType,
    "string",
    ()=>stringType,
    "symbol",
    ()=>symbolType,
    "transformer",
    ()=>effectsType,
    "tuple",
    ()=>tupleType,
    "undefined",
    ()=>undefinedType,
    "union",
    ()=>unionType,
    "unknown",
    ()=>unknownType,
    "void",
    ()=>voidType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/ZodError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__defaultErrorMap$3e$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/locales/en.js [app-rsc] (ecmascript) <export default as defaultErrorMap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/errors.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/helpers/errorUtil.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/helpers/parseUtil.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/helpers/util.js [app-rsc] (ecmascript)");
;
;
;
;
;
class ParseInputLazyPath {
    constructor(parent, value, path, key){
        this._cachedPath = [];
        this.parent = parent;
        this.data = value;
        this._path = path;
        this._key = key;
    }
    get path() {
        if (!this._cachedPath.length) {
            if (Array.isArray(this._key)) {
                this._cachedPath.push(...this._path, ...this._key);
            } else {
                this._cachedPath.push(...this._path, this._key);
            }
        }
        return this._cachedPath;
    }
}
const handleResult = (ctx, result)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValid"])(result)) {
        return {
            success: true,
            data: result.value
        };
    } else {
        if (!ctx.common.issues.length) {
            throw new Error("Validation failed but no issues detected.");
        }
        return {
            success: false,
            get error () {
                if (this._error) return this._error;
                const error = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodError"](ctx.common.issues);
                this._error = error;
                return this._error;
            }
        };
    }
};
function processCreateParams(params) {
    if (!params) return {};
    const { errorMap, invalid_type_error, required_error, description } = params;
    if (errorMap && (invalid_type_error || required_error)) {
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    }
    if (errorMap) return {
        errorMap: errorMap,
        description
    };
    const customMap = (iss, ctx)=>{
        const { message } = params;
        if (iss.code === "invalid_enum_value") {
            return {
                message: message ?? ctx.defaultError
            };
        }
        if (typeof ctx.data === "undefined") {
            return {
                message: message ?? required_error ?? ctx.defaultError
            };
        }
        if (iss.code !== "invalid_type") return {
            message: ctx.defaultError
        };
        return {
            message: message ?? invalid_type_error ?? ctx.defaultError
        };
    };
    return {
        errorMap: customMap,
        description
    };
}
class ZodType {
    get description() {
        return this._def.description;
    }
    _getType(input) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getParsedType"])(input.data);
    }
    _getOrReturnCtx(input, ctx) {
        return ctx || {
            common: input.parent.common,
            data: input.data,
            parsedType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getParsedType"])(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent
        };
    }
    _processInputParams(input) {
        return {
            status: new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseStatus"](),
            ctx: {
                common: input.parent.common,
                data: input.data,
                parsedType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getParsedType"])(input.data),
                schemaErrorMap: this._def.errorMap,
                path: input.path,
                parent: input.parent
            }
        };
    }
    _parseSync(input) {
        const result = this._parse(input);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAsync"])(result)) {
            throw new Error("Synchronous parse encountered promise.");
        }
        return result;
    }
    _parseAsync(input) {
        const result = this._parse(input);
        return Promise.resolve(result);
    }
    parse(data, params) {
        const result = this.safeParse(data, params);
        if (result.success) return result.data;
        throw result.error;
    }
    safeParse(data, params) {
        const ctx = {
            common: {
                issues: [],
                async: params?.async ?? false,
                contextualErrorMap: params?.errorMap
            },
            path: params?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getParsedType"])(data)
        };
        const result = this._parseSync({
            data,
            path: ctx.path,
            parent: ctx
        });
        return handleResult(ctx, result);
    }
    "~validate"(data) {
        const ctx = {
            common: {
                issues: [],
                async: !!this["~standard"].async
            },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getParsedType"])(data)
        };
        if (!this["~standard"].async) {
            try {
                const result = this._parseSync({
                    data,
                    path: [],
                    parent: ctx
                });
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValid"])(result) ? {
                    value: result.value
                } : {
                    issues: ctx.common.issues
                };
            } catch (err) {
                if (err?.message?.toLowerCase()?.includes("encountered")) {
                    this["~standard"].async = true;
                }
                ctx.common = {
                    issues: [],
                    async: true
                };
            }
        }
        return this._parseAsync({
            data,
            path: [],
            parent: ctx
        }).then((result)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValid"])(result) ? {
                value: result.value
            } : {
                issues: ctx.common.issues
            });
    }
    async parseAsync(data, params) {
        const result = await this.safeParseAsync(data, params);
        if (result.success) return result.data;
        throw result.error;
    }
    async safeParseAsync(data, params) {
        const ctx = {
            common: {
                issues: [],
                contextualErrorMap: params?.errorMap,
                async: true
            },
            path: params?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getParsedType"])(data)
        };
        const maybeAsyncResult = this._parse({
            data,
            path: ctx.path,
            parent: ctx
        });
        const result = await ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAsync"])(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
        return handleResult(ctx, result);
    }
    refine(check, message) {
        const getIssueProperties = (val)=>{
            if (typeof message === "string" || typeof message === "undefined") {
                return {
                    message
                };
            } else if (typeof message === "function") {
                return message(val);
            } else {
                return message;
            }
        };
        return this._refinement((val, ctx)=>{
            const result = check(val);
            const setError = ()=>ctx.addIssue({
                    code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].custom,
                    ...getIssueProperties(val)
                });
            if (typeof Promise !== "undefined" && result instanceof Promise) {
                return result.then((data)=>{
                    if (!data) {
                        setError();
                        return false;
                    } else {
                        return true;
                    }
                });
            }
            if (!result) {
                setError();
                return false;
            } else {
                return true;
            }
        });
    }
    refinement(check, refinementData) {
        return this._refinement((val, ctx)=>{
            if (!check(val)) {
                ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
                return false;
            } else {
                return true;
            }
        });
    }
    _refinement(refinement) {
        return new ZodEffects({
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: {
                type: "refinement",
                refinement
            }
        });
    }
    superRefine(refinement) {
        return this._refinement(refinement);
    }
    constructor(def){
        /** Alias of safeParseAsync */ this.spa = this.safeParseAsync;
        this._def = def;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.brand = this.brand.bind(this);
        this.default = this.default.bind(this);
        this.catch = this.catch.bind(this);
        this.describe = this.describe.bind(this);
        this.pipe = this.pipe.bind(this);
        this.readonly = this.readonly.bind(this);
        this.isNullable = this.isNullable.bind(this);
        this.isOptional = this.isOptional.bind(this);
        this["~standard"] = {
            version: 1,
            vendor: "zod",
            validate: (data)=>this["~validate"](data)
        };
    }
    optional() {
        return ZodOptional.create(this, this._def);
    }
    nullable() {
        return ZodNullable.create(this, this._def);
    }
    nullish() {
        return this.nullable().optional();
    }
    array() {
        return ZodArray.create(this);
    }
    promise() {
        return ZodPromise.create(this, this._def);
    }
    or(option) {
        return ZodUnion.create([
            this,
            option
        ], this._def);
    }
    and(incoming) {
        return ZodIntersection.create(this, incoming, this._def);
    }
    transform(transform) {
        return new ZodEffects({
            ...processCreateParams(this._def),
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: {
                type: "transform",
                transform
            }
        });
    }
    default(def) {
        const defaultValueFunc = typeof def === "function" ? def : ()=>def;
        return new ZodDefault({
            ...processCreateParams(this._def),
            innerType: this,
            defaultValue: defaultValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodDefault
        });
    }
    brand() {
        return new ZodBranded({
            typeName: ZodFirstPartyTypeKind.ZodBranded,
            type: this,
            ...processCreateParams(this._def)
        });
    }
    catch(def) {
        const catchValueFunc = typeof def === "function" ? def : ()=>def;
        return new ZodCatch({
            ...processCreateParams(this._def),
            innerType: this,
            catchValue: catchValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodCatch
        });
    }
    describe(description) {
        const This = this.constructor;
        return new This({
            ...this._def,
            description
        });
    }
    pipe(target) {
        return ZodPipeline.create(this, target);
    }
    readonly() {
        return ZodReadonly.create(this);
    }
    isOptional() {
        return this.safeParse(undefined).success;
    }
    isNullable() {
        return this.safeParse(null).success;
    }
}
const cuidRegex = /^c[^\s-]{8,}$/i;
const cuid2Regex = /^[0-9a-z]+$/;
const ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
// const uuidRegex =
//   /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
const uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
const nanoidRegex = /^[a-z0-9_-]{21}$/i;
const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
const durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
// from https://stackoverflow.com/a/46181/1550155
// old version: too slow, didn't support unicode
// const emailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
//old email regex
// const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((?!-)([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{1,})[^-<>()[\].,;:\s@"]$/i;
// eslint-disable-next-line
// const emailRegex =
//   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/;
// const emailRegex =
//   /^[a-zA-Z0-9\.\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
// const emailRegex =
//   /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
const emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
// const emailRegex =
//   /^[a-z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9\-]+)*$/i;
// from https://thekevinscott.com/emojis-in-javascript/#writing-a-regular-expression
const _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
let emojiRegex;
// faster, simpler, safer
const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
// const ipv6Regex =
// /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
const ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
const ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
// https://stackoverflow.com/questions/7860392/determine-if-string-is-in-base64-using-javascript
const base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
// https://base64.guru/standards/base64url
const base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
// simple
// const dateRegexSource = `\\d{4}-\\d{2}-\\d{2}`;
// no leap year validation
// const dateRegexSource = `\\d{4}-((0[13578]|10|12)-31|(0[13-9]|1[0-2])-30|(0[1-9]|1[0-2])-(0[1-9]|1\\d|2\\d))`;
// with leap year validation
const dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
const dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
    let secondsRegexSource = `[0-5]\\d`;
    if (args.precision) {
        secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
    } else if (args.precision == null) {
        secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
    }
    const secondsQuantifier = args.precision ? "+" : "?"; // require seconds if precision is nonzero
    return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
    return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
    let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
    const opts = [];
    opts.push(args.local ? `Z?` : `Z`);
    if (args.offset) opts.push(`([+-]\\d{2}:?\\d{2})`);
    regex = `${regex}(${opts.join("|")})`;
    return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
    if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
        return true;
    }
    if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
        return true;
    }
    return false;
}
function isValidJWT(jwt, alg) {
    if (!jwtRegex.test(jwt)) return false;
    try {
        const [header] = jwt.split(".");
        if (!header) return false;
        // Convert base64url to base64
        const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
        const decoded = JSON.parse(atob(base64));
        if (typeof decoded !== "object" || decoded === null) return false;
        if ("typ" in decoded && decoded?.typ !== "JWT") return false;
        if (!decoded.alg) return false;
        if (alg && decoded.alg !== alg) return false;
        return true;
    } catch  {
        return false;
    }
}
function isValidCidr(ip, version) {
    if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
        return true;
    }
    if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
        return true;
    }
    return false;
}
class ZodString extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = String(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].string) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].string,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        const status = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseStatus"]();
        let ctx = undefined;
        for (const check of this._def.checks){
            if (check.kind === "min") {
                if (input.data.length < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_small,
                        minimum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                if (input.data.length > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_big,
                        maximum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "length") {
                const tooBig = input.data.length > check.value;
                const tooSmall = input.data.length < check.value;
                if (tooBig || tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    if (tooBig) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                            code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_big,
                            maximum: check.value,
                            type: "string",
                            inclusive: true,
                            exact: true,
                            message: check.message
                        });
                    } else if (tooSmall) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                            code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_small,
                            minimum: check.value,
                            type: "string",
                            inclusive: true,
                            exact: true,
                            message: check.message
                        });
                    }
                    status.dirty();
                }
            } else if (check.kind === "email") {
                if (!emailRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "email",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "emoji") {
                if (!emojiRegex) {
                    emojiRegex = new RegExp(_emojiRegex, "u");
                }
                if (!emojiRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "emoji",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "uuid") {
                if (!uuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "uuid",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "nanoid") {
                if (!nanoidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "nanoid",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "cuid") {
                if (!cuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "cuid",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "cuid2") {
                if (!cuid2Regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "cuid2",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "ulid") {
                if (!ulidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "ulid",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "url") {
                try {
                    new URL(input.data);
                } catch  {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "url",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "regex") {
                check.regex.lastIndex = 0;
                const testResult = check.regex.test(input.data);
                if (!testResult) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "regex",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "trim") {
                input.data = input.data.trim();
            } else if (check.kind === "includes") {
                if (!input.data.includes(check.value, check.position)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        validation: {
                            includes: check.value,
                            position: check.position
                        },
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "toLowerCase") {
                input.data = input.data.toLowerCase();
            } else if (check.kind === "toUpperCase") {
                input.data = input.data.toUpperCase();
            } else if (check.kind === "startsWith") {
                if (!input.data.startsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        validation: {
                            startsWith: check.value
                        },
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "endsWith") {
                if (!input.data.endsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        validation: {
                            endsWith: check.value
                        },
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "datetime") {
                const regex = datetimeRegex(check);
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        validation: "datetime",
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "date") {
                const regex = dateRegex;
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        validation: "date",
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "time") {
                const regex = timeRegex(check);
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        validation: "time",
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "duration") {
                if (!durationRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "duration",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "ip") {
                if (!isValidIP(input.data, check.version)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "ip",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "jwt") {
                if (!isValidJWT(input.data, check.alg)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "jwt",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "cidr") {
                if (!isValidCidr(input.data, check.version)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "cidr",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "base64") {
                if (!base64Regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "base64",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "base64url") {
                if (!base64urlRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "base64url",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].assertNever(check);
            }
        }
        return {
            status: status.value,
            value: input.data
        };
    }
    _regex(regex, validation, message) {
        return this.refinement((data)=>regex.test(data), {
            validation,
            code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    _addCheck(check) {
        return new ZodString({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    email(message) {
        return this._addCheck({
            kind: "email",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    url(message) {
        return this._addCheck({
            kind: "url",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    emoji(message) {
        return this._addCheck({
            kind: "emoji",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    uuid(message) {
        return this._addCheck({
            kind: "uuid",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    nanoid(message) {
        return this._addCheck({
            kind: "nanoid",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    cuid(message) {
        return this._addCheck({
            kind: "cuid",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    cuid2(message) {
        return this._addCheck({
            kind: "cuid2",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    ulid(message) {
        return this._addCheck({
            kind: "ulid",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    base64(message) {
        return this._addCheck({
            kind: "base64",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    base64url(message) {
        // base64url encoding is a modification of base64 that can safely be used in URLs and filenames
        return this._addCheck({
            kind: "base64url",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    jwt(options) {
        return this._addCheck({
            kind: "jwt",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(options)
        });
    }
    ip(options) {
        return this._addCheck({
            kind: "ip",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(options)
        });
    }
    cidr(options) {
        return this._addCheck({
            kind: "cidr",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(options)
        });
    }
    datetime(options) {
        if (typeof options === "string") {
            return this._addCheck({
                kind: "datetime",
                precision: null,
                offset: false,
                local: false,
                message: options
            });
        }
        return this._addCheck({
            kind: "datetime",
            precision: typeof options?.precision === "undefined" ? null : options?.precision,
            offset: options?.offset ?? false,
            local: options?.local ?? false,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(options?.message)
        });
    }
    date(message) {
        return this._addCheck({
            kind: "date",
            message
        });
    }
    time(options) {
        if (typeof options === "string") {
            return this._addCheck({
                kind: "time",
                precision: null,
                message: options
            });
        }
        return this._addCheck({
            kind: "time",
            precision: typeof options?.precision === "undefined" ? null : options?.precision,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(options?.message)
        });
    }
    duration(message) {
        return this._addCheck({
            kind: "duration",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    regex(regex, message) {
        return this._addCheck({
            kind: "regex",
            regex: regex,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    includes(value, options) {
        return this._addCheck({
            kind: "includes",
            value: value,
            position: options?.position,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(options?.message)
        });
    }
    startsWith(value, message) {
        return this._addCheck({
            kind: "startsWith",
            value: value,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    endsWith(value, message) {
        return this._addCheck({
            kind: "endsWith",
            value: value,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    min(minLength, message) {
        return this._addCheck({
            kind: "min",
            value: minLength,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    max(maxLength, message) {
        return this._addCheck({
            kind: "max",
            value: maxLength,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    length(len, message) {
        return this._addCheck({
            kind: "length",
            value: len,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    /**
     * Equivalent to `.min(1)`
     */ nonempty(message) {
        return this.min(1, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message));
    }
    trim() {
        return new ZodString({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: "trim"
                }
            ]
        });
    }
    toLowerCase() {
        return new ZodString({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: "toLowerCase"
                }
            ]
        });
    }
    toUpperCase() {
        return new ZodString({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: "toUpperCase"
                }
            ]
        });
    }
    get isDatetime() {
        return !!this._def.checks.find((ch)=>ch.kind === "datetime");
    }
    get isDate() {
        return !!this._def.checks.find((ch)=>ch.kind === "date");
    }
    get isTime() {
        return !!this._def.checks.find((ch)=>ch.kind === "time");
    }
    get isDuration() {
        return !!this._def.checks.find((ch)=>ch.kind === "duration");
    }
    get isEmail() {
        return !!this._def.checks.find((ch)=>ch.kind === "email");
    }
    get isURL() {
        return !!this._def.checks.find((ch)=>ch.kind === "url");
    }
    get isEmoji() {
        return !!this._def.checks.find((ch)=>ch.kind === "emoji");
    }
    get isUUID() {
        return !!this._def.checks.find((ch)=>ch.kind === "uuid");
    }
    get isNANOID() {
        return !!this._def.checks.find((ch)=>ch.kind === "nanoid");
    }
    get isCUID() {
        return !!this._def.checks.find((ch)=>ch.kind === "cuid");
    }
    get isCUID2() {
        return !!this._def.checks.find((ch)=>ch.kind === "cuid2");
    }
    get isULID() {
        return !!this._def.checks.find((ch)=>ch.kind === "ulid");
    }
    get isIP() {
        return !!this._def.checks.find((ch)=>ch.kind === "ip");
    }
    get isCIDR() {
        return !!this._def.checks.find((ch)=>ch.kind === "cidr");
    }
    get isBase64() {
        return !!this._def.checks.find((ch)=>ch.kind === "base64");
    }
    get isBase64url() {
        // base64url encoding is a modification of base64 that can safely be used in URLs and filenames
        return !!this._def.checks.find((ch)=>ch.kind === "base64url");
    }
    get minLength() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min;
    }
    get maxLength() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max;
    }
}
ZodString.create = (params)=>{
    return new ZodString({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodString,
        coerce: params?.coerce ?? false,
        ...processCreateParams(params)
    });
};
// https://stackoverflow.com/questions/3966484/why-does-modulus-operator-return-fractional-number-in-javascript/31711034#31711034
function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
    return valInt % stepInt / 10 ** decCount;
}
class ZodNumber extends ZodType {
    constructor(){
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
        this.step = this.multipleOf;
    }
    _parse(input) {
        if (this._def.coerce) {
            input.data = Number(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].number) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].number,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        let ctx = undefined;
        const status = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseStatus"]();
        for (const check of this._def.checks){
            if (check.kind === "int") {
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].isInteger(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                        expected: "integer",
                        received: "float",
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "min") {
                const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_small,
                        minimum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_big,
                        maximum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "multipleOf") {
                if (floatSafeRemainder(input.data, check.value) !== 0) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].not_multiple_of,
                        multipleOf: check.value,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "finite") {
                if (!Number.isFinite(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].not_finite,
                        message: check.message
                    });
                    status.dirty();
                }
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].assertNever(check);
            }
        }
        return {
            status: status.value,
            value: input.data
        };
    }
    gte(value, message) {
        return this.setLimit("min", value, true, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new ZodNumber({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind,
                    value,
                    inclusive,
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
                }
            ]
        });
    }
    _addCheck(check) {
        return new ZodNumber({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    int(message) {
        return this._addCheck({
            kind: "int",
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: false,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: false,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: true,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: true,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value: value,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    finite(message) {
        return this._addCheck({
            kind: "finite",
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    safe(message) {
        return this._addCheck({
            kind: "min",
            inclusive: true,
            value: Number.MIN_SAFE_INTEGER,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        })._addCheck({
            kind: "max",
            inclusive: true,
            value: Number.MAX_SAFE_INTEGER,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max;
    }
    get isInt() {
        return !!this._def.checks.find((ch)=>ch.kind === "int" || ch.kind === "multipleOf" && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].isInteger(ch.value));
    }
    get isFinite() {
        let max = null;
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
                return true;
            } else if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            } else if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return Number.isFinite(min) && Number.isFinite(max);
    }
}
ZodNumber.create = (params)=>{
    return new ZodNumber({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodNumber,
        coerce: params?.coerce || false,
        ...processCreateParams(params)
    });
};
class ZodBigInt extends ZodType {
    constructor(){
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
    }
    _parse(input) {
        if (this._def.coerce) {
            try {
                input.data = BigInt(input.data);
            } catch  {
                return this._getInvalidInput(input);
            }
        }
        const parsedType = this._getType(input);
        if (parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].bigint) {
            return this._getInvalidInput(input);
        }
        let ctx = undefined;
        const status = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseStatus"]();
        for (const check of this._def.checks){
            if (check.kind === "min") {
                const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_small,
                        type: "bigint",
                        minimum: check.value,
                        inclusive: check.inclusive,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_big,
                        type: "bigint",
                        maximum: check.value,
                        inclusive: check.inclusive,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "multipleOf") {
                if (input.data % check.value !== BigInt(0)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].not_multiple_of,
                        multipleOf: check.value,
                        message: check.message
                    });
                    status.dirty();
                }
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].assertNever(check);
            }
        }
        return {
            status: status.value,
            value: input.data
        };
    }
    _getInvalidInput(input) {
        const ctx = this._getOrReturnCtx(input);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
            code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
            expected: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].bigint,
            received: ctx.parsedType
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
    }
    gte(value, message) {
        return this.setLimit("min", value, true, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new ZodBigInt({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind,
                    value,
                    inclusive,
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
                }
            ]
        });
    }
    _addCheck(check) {
        return new ZodBigInt({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: false,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: false,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: true,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: true,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max;
    }
}
ZodBigInt.create = (params)=>{
    return new ZodBigInt({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodBigInt,
        coerce: params?.coerce ?? false,
        ...processCreateParams(params)
    });
};
class ZodBoolean extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = Boolean(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].boolean) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].boolean,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OK"])(input.data);
    }
}
ZodBoolean.create = (params)=>{
    return new ZodBoolean({
        typeName: ZodFirstPartyTypeKind.ZodBoolean,
        coerce: params?.coerce || false,
        ...processCreateParams(params)
    });
};
class ZodDate extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = new Date(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].date) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].date,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        if (Number.isNaN(input.data.getTime())) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_date
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        const status = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseStatus"]();
        let ctx = undefined;
        for (const check of this._def.checks){
            if (check.kind === "min") {
                if (input.data.getTime() < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_small,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        minimum: check.value,
                        type: "date"
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                if (input.data.getTime() > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_big,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        maximum: check.value,
                        type: "date"
                    });
                    status.dirty();
                }
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].assertNever(check);
            }
        }
        return {
            status: status.value,
            value: new Date(input.data.getTime())
        };
    }
    _addCheck(check) {
        return new ZodDate({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    min(minDate, message) {
        return this._addCheck({
            kind: "min",
            value: minDate.getTime(),
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    max(maxDate, message) {
        return this._addCheck({
            kind: "max",
            value: maxDate.getTime(),
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    get minDate() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min != null ? new Date(min) : null;
    }
    get maxDate() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max != null ? new Date(max) : null;
    }
}
ZodDate.create = (params)=>{
    return new ZodDate({
        checks: [],
        coerce: params?.coerce || false,
        typeName: ZodFirstPartyTypeKind.ZodDate,
        ...processCreateParams(params)
    });
};
class ZodSymbol extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].symbol) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].symbol,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OK"])(input.data);
    }
}
ZodSymbol.create = (params)=>{
    return new ZodSymbol({
        typeName: ZodFirstPartyTypeKind.ZodSymbol,
        ...processCreateParams(params)
    });
};
class ZodUndefined extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].undefined) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].undefined,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OK"])(input.data);
    }
}
ZodUndefined.create = (params)=>{
    return new ZodUndefined({
        typeName: ZodFirstPartyTypeKind.ZodUndefined,
        ...processCreateParams(params)
    });
};
class ZodNull extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].null) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].null,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OK"])(input.data);
    }
}
ZodNull.create = (params)=>{
    return new ZodNull({
        typeName: ZodFirstPartyTypeKind.ZodNull,
        ...processCreateParams(params)
    });
};
class ZodAny extends ZodType {
    constructor(){
        super(...arguments);
        // to prevent instances of other classes from extending ZodAny. this causes issues with catchall in ZodObject.
        this._any = true;
    }
    _parse(input) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OK"])(input.data);
    }
}
ZodAny.create = (params)=>{
    return new ZodAny({
        typeName: ZodFirstPartyTypeKind.ZodAny,
        ...processCreateParams(params)
    });
};
class ZodUnknown extends ZodType {
    constructor(){
        super(...arguments);
        // required
        this._unknown = true;
    }
    _parse(input) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OK"])(input.data);
    }
}
ZodUnknown.create = (params)=>{
    return new ZodUnknown({
        typeName: ZodFirstPartyTypeKind.ZodUnknown,
        ...processCreateParams(params)
    });
};
class ZodNever extends ZodType {
    _parse(input) {
        const ctx = this._getOrReturnCtx(input);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
            code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
            expected: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].never,
            received: ctx.parsedType
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
    }
}
ZodNever.create = (params)=>{
    return new ZodNever({
        typeName: ZodFirstPartyTypeKind.ZodNever,
        ...processCreateParams(params)
    });
};
class ZodVoid extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].undefined) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].void,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OK"])(input.data);
    }
}
ZodVoid.create = (params)=>{
    return new ZodVoid({
        typeName: ZodFirstPartyTypeKind.ZodVoid,
        ...processCreateParams(params)
    });
};
class ZodArray extends ZodType {
    _parse(input) {
        const { ctx, status } = this._processInputParams(input);
        const def = this._def;
        if (ctx.parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].array) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].array,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        if (def.exactLength !== null) {
            const tooBig = ctx.data.length > def.exactLength.value;
            const tooSmall = ctx.data.length < def.exactLength.value;
            if (tooBig || tooSmall) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                    code: tooBig ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_big : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_small,
                    minimum: tooSmall ? def.exactLength.value : undefined,
                    maximum: tooBig ? def.exactLength.value : undefined,
                    type: "array",
                    inclusive: true,
                    exact: true,
                    message: def.exactLength.message
                });
                status.dirty();
            }
        }
        if (def.minLength !== null) {
            if (ctx.data.length < def.minLength.value) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                    code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_small,
                    minimum: def.minLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.minLength.message
                });
                status.dirty();
            }
        }
        if (def.maxLength !== null) {
            if (ctx.data.length > def.maxLength.value) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                    code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_big,
                    maximum: def.maxLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.maxLength.message
                });
                status.dirty();
            }
        }
        if (ctx.common.async) {
            return Promise.all([
                ...ctx.data
            ].map((item, i)=>{
                return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
            })).then((result)=>{
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseStatus"].mergeArray(status, result);
            });
        }
        const result = [
            ...ctx.data
        ].map((item, i)=>{
            return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseStatus"].mergeArray(status, result);
    }
    get element() {
        return this._def.type;
    }
    min(minLength, message) {
        return new ZodArray({
            ...this._def,
            minLength: {
                value: minLength,
                message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
            }
        });
    }
    max(maxLength, message) {
        return new ZodArray({
            ...this._def,
            maxLength: {
                value: maxLength,
                message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
            }
        });
    }
    length(len, message) {
        return new ZodArray({
            ...this._def,
            exactLength: {
                value: len,
                message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
            }
        });
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
ZodArray.create = (schema, params)=>{
    return new ZodArray({
        type: schema,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: ZodFirstPartyTypeKind.ZodArray,
        ...processCreateParams(params)
    });
};
function deepPartialify(schema) {
    if (schema instanceof ZodObject) {
        const newShape = {};
        for(const key in schema.shape){
            const fieldSchema = schema.shape[key];
            newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
        }
        return new ZodObject({
            ...schema._def,
            shape: ()=>newShape
        });
    } else if (schema instanceof ZodArray) {
        return new ZodArray({
            ...schema._def,
            type: deepPartialify(schema.element)
        });
    } else if (schema instanceof ZodOptional) {
        return ZodOptional.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodNullable) {
        return ZodNullable.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodTuple) {
        return ZodTuple.create(schema.items.map((item)=>deepPartialify(item)));
    } else {
        return schema;
    }
}
class ZodObject extends ZodType {
    constructor(){
        super(...arguments);
        this._cached = null;
        /**
         * @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
         * If you want to pass through unknown properties, use `.passthrough()` instead.
         */ this.nonstrict = this.passthrough;
        // extend<
        //   Augmentation extends ZodRawShape,
        //   NewOutput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
        //       ? Augmentation[k]["_output"]
        //       : k extends keyof Output
        //       ? Output[k]
        //       : never;
        //   }>,
        //   NewInput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
        //       ? Augmentation[k]["_input"]
        //       : k extends keyof Input
        //       ? Input[k]
        //       : never;
        //   }>
        // >(
        //   augmentation: Augmentation
        // ): ZodObject<
        //   extendShape<T, Augmentation>,
        //   UnknownKeys,
        //   Catchall,
        //   NewOutput,
        //   NewInput
        // > {
        //   return new ZodObject({
        //     ...this._def,
        //     shape: () => ({
        //       ...this._def.shape(),
        //       ...augmentation,
        //     }),
        //   }) as any;
        // }
        /**
         * @deprecated Use `.extend` instead
         *  */ this.augment = this.extend;
    }
    _getCached() {
        if (this._cached !== null) return this._cached;
        const shape = this._def.shape();
        const keys = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].objectKeys(shape);
        this._cached = {
            shape,
            keys
        };
        return this._cached;
    }
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].object) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].object,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        const { status, ctx } = this._processInputParams(input);
        const { shape, keys: shapeKeys } = this._getCached();
        const extraKeys = [];
        if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
            for(const key in ctx.data){
                if (!shapeKeys.includes(key)) {
                    extraKeys.push(key);
                }
            }
        }
        const pairs = [];
        for (const key of shapeKeys){
            const keyValidator = shape[key];
            const value = ctx.data[key];
            pairs.push({
                key: {
                    status: "valid",
                    value: key
                },
                value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
                alwaysSet: key in ctx.data
            });
        }
        if (this._def.catchall instanceof ZodNever) {
            const unknownKeys = this._def.unknownKeys;
            if (unknownKeys === "passthrough") {
                for (const key of extraKeys){
                    pairs.push({
                        key: {
                            status: "valid",
                            value: key
                        },
                        value: {
                            status: "valid",
                            value: ctx.data[key]
                        }
                    });
                }
            } else if (unknownKeys === "strict") {
                if (extraKeys.length > 0) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].unrecognized_keys,
                        keys: extraKeys
                    });
                    status.dirty();
                }
            } else if (unknownKeys === "strip") {} else {
                throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
            }
        } else {
            // run catchall validation
            const catchall = this._def.catchall;
            for (const key of extraKeys){
                const value = ctx.data[key];
                pairs.push({
                    key: {
                        status: "valid",
                        value: key
                    },
                    value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key) //, ctx.child(key), value, getParsedType(value)
                    ),
                    alwaysSet: key in ctx.data
                });
            }
        }
        if (ctx.common.async) {
            return Promise.resolve().then(async ()=>{
                const syncPairs = [];
                for (const pair of pairs){
                    const key = await pair.key;
                    const value = await pair.value;
                    syncPairs.push({
                        key,
                        value,
                        alwaysSet: pair.alwaysSet
                    });
                }
                return syncPairs;
            }).then((syncPairs)=>{
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseStatus"].mergeObjectSync(status, syncPairs);
            });
        } else {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseStatus"].mergeObjectSync(status, pairs);
        }
    }
    get shape() {
        return this._def.shape();
    }
    strict(message) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj;
        return new ZodObject({
            ...this._def,
            unknownKeys: "strict",
            ...message !== undefined ? {
                errorMap: (issue, ctx)=>{
                    const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
                    if (issue.code === "unrecognized_keys") return {
                        message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message).message ?? defaultError
                    };
                    return {
                        message: defaultError
                    };
                }
            } : {}
        });
    }
    strip() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "strip"
        });
    }
    passthrough() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "passthrough"
        });
    }
    // const AugmentFactory =
    //   <Def extends ZodObjectDef>(def: Def) =>
    //   <Augmentation extends ZodRawShape>(
    //     augmentation: Augmentation
    //   ): ZodObject<
    //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
    //     Def["unknownKeys"],
    //     Def["catchall"]
    //   > => {
    //     return new ZodObject({
    //       ...def,
    //       shape: () => ({
    //         ...def.shape(),
    //         ...augmentation,
    //       }),
    //     }) as any;
    //   };
    extend(augmentation) {
        return new ZodObject({
            ...this._def,
            shape: ()=>({
                    ...this._def.shape(),
                    ...augmentation
                })
        });
    }
    /**
     * Prior to zod@1.0.12 there was a bug in the
     * inferred type of merged objects. Please
     * upgrade if you are experiencing issues.
     */ merge(merging) {
        const merged = new ZodObject({
            unknownKeys: merging._def.unknownKeys,
            catchall: merging._def.catchall,
            shape: ()=>({
                    ...this._def.shape(),
                    ...merging._def.shape()
                }),
            typeName: ZodFirstPartyTypeKind.ZodObject
        });
        return merged;
    }
    // merge<
    //   Incoming extends AnyZodObject,
    //   Augmentation extends Incoming["shape"],
    //   NewOutput extends {
    //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
    //       ? Augmentation[k]["_output"]
    //       : k extends keyof Output
    //       ? Output[k]
    //       : never;
    //   },
    //   NewInput extends {
    //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
    //       ? Augmentation[k]["_input"]
    //       : k extends keyof Input
    //       ? Input[k]
    //       : never;
    //   }
    // >(
    //   merging: Incoming
    // ): ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"],
    //   NewOutput,
    //   NewInput
    // > {
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    setKey(key, schema) {
        return this.augment({
            [key]: schema
        });
    }
    // merge<Incoming extends AnyZodObject>(
    //   merging: Incoming
    // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
    // ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"]
    // > {
    //   // const mergedShape = objectUtil.mergeShapes(
    //   //   this._def.shape(),
    //   //   merging._def.shape()
    //   // );
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    catchall(index) {
        return new ZodObject({
            ...this._def,
            catchall: index
        });
    }
    pick(mask) {
        const shape = {};
        for (const key of __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].objectKeys(mask)){
            if (mask[key] && this.shape[key]) {
                shape[key] = this.shape[key];
            }
        }
        return new ZodObject({
            ...this._def,
            shape: ()=>shape
        });
    }
    omit(mask) {
        const shape = {};
        for (const key of __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].objectKeys(this.shape)){
            if (!mask[key]) {
                shape[key] = this.shape[key];
            }
        }
        return new ZodObject({
            ...this._def,
            shape: ()=>shape
        });
    }
    /**
     * @deprecated
     */ deepPartial() {
        return deepPartialify(this);
    }
    partial(mask) {
        const newShape = {};
        for (const key of __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].objectKeys(this.shape)){
            const fieldSchema = this.shape[key];
            if (mask && !mask[key]) {
                newShape[key] = fieldSchema;
            } else {
                newShape[key] = fieldSchema.optional();
            }
        }
        return new ZodObject({
            ...this._def,
            shape: ()=>newShape
        });
    }
    required(mask) {
        const newShape = {};
        for (const key of __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].objectKeys(this.shape)){
            if (mask && !mask[key]) {
                newShape[key] = this.shape[key];
            } else {
                const fieldSchema = this.shape[key];
                let newField = fieldSchema;
                while(newField instanceof ZodOptional){
                    newField = newField._def.innerType;
                }
                newShape[key] = newField;
            }
        }
        return new ZodObject({
            ...this._def,
            shape: ()=>newShape
        });
    }
    keyof() {
        return createZodEnum(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].objectKeys(this.shape));
    }
}
ZodObject.create = (shape, params)=>{
    return new ZodObject({
        shape: ()=>shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
    });
};
ZodObject.strictCreate = (shape, params)=>{
    return new ZodObject({
        shape: ()=>shape,
        unknownKeys: "strict",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
    });
};
ZodObject.lazycreate = (shape, params)=>{
    return new ZodObject({
        shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
    });
};
class ZodUnion extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const options = this._def.options;
        function handleResults(results) {
            // return first issue-free validation if it exists
            for (const result of results){
                if (result.result.status === "valid") {
                    return result.result;
                }
            }
            for (const result of results){
                if (result.result.status === "dirty") {
                    // add issues from dirty option
                    ctx.common.issues.push(...result.ctx.common.issues);
                    return result.result;
                }
            }
            // return invalid
            const unionErrors = results.map((result)=>new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodError"](result.ctx.common.issues));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_union,
                unionErrors
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        if (ctx.common.async) {
            return Promise.all(options.map(async (option)=>{
                const childCtx = {
                    ...ctx,
                    common: {
                        ...ctx.common,
                        issues: []
                    },
                    parent: null
                };
                return {
                    result: await option._parseAsync({
                        data: ctx.data,
                        path: ctx.path,
                        parent: childCtx
                    }),
                    ctx: childCtx
                };
            })).then(handleResults);
        } else {
            let dirty = undefined;
            const issues = [];
            for (const option of options){
                const childCtx = {
                    ...ctx,
                    common: {
                        ...ctx.common,
                        issues: []
                    },
                    parent: null
                };
                const result = option._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: childCtx
                });
                if (result.status === "valid") {
                    return result;
                } else if (result.status === "dirty" && !dirty) {
                    dirty = {
                        result,
                        ctx: childCtx
                    };
                }
                if (childCtx.common.issues.length) {
                    issues.push(childCtx.common.issues);
                }
            }
            if (dirty) {
                ctx.common.issues.push(...dirty.ctx.common.issues);
                return dirty.result;
            }
            const unionErrors = issues.map((issues)=>new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodError"](issues));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_union,
                unionErrors
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
    }
    get options() {
        return this._def.options;
    }
}
ZodUnion.create = (types, params)=>{
    return new ZodUnion({
        options: types,
        typeName: ZodFirstPartyTypeKind.ZodUnion,
        ...processCreateParams(params)
    });
};
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//////////                                 //////////
//////////      ZodDiscriminatedUnion      //////////
//////////                                 //////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
const getDiscriminator = (type)=>{
    if (type instanceof ZodLazy) {
        return getDiscriminator(type.schema);
    } else if (type instanceof ZodEffects) {
        return getDiscriminator(type.innerType());
    } else if (type instanceof ZodLiteral) {
        return [
            type.value
        ];
    } else if (type instanceof ZodEnum) {
        return type.options;
    } else if (type instanceof ZodNativeEnum) {
        // eslint-disable-next-line ban/ban
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].objectValues(type.enum);
    } else if (type instanceof ZodDefault) {
        return getDiscriminator(type._def.innerType);
    } else if (type instanceof ZodUndefined) {
        return [
            undefined
        ];
    } else if (type instanceof ZodNull) {
        return [
            null
        ];
    } else if (type instanceof ZodOptional) {
        return [
            undefined,
            ...getDiscriminator(type.unwrap())
        ];
    } else if (type instanceof ZodNullable) {
        return [
            null,
            ...getDiscriminator(type.unwrap())
        ];
    } else if (type instanceof ZodBranded) {
        return getDiscriminator(type.unwrap());
    } else if (type instanceof ZodReadonly) {
        return getDiscriminator(type.unwrap());
    } else if (type instanceof ZodCatch) {
        return getDiscriminator(type._def.innerType);
    } else {
        return [];
    }
};
class ZodDiscriminatedUnion extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].object) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].object,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        const discriminator = this.discriminator;
        const discriminatorValue = ctx.data[discriminator];
        const option = this.optionsMap.get(discriminatorValue);
        if (!option) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [
                    discriminator
                ]
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        if (ctx.common.async) {
            return option._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            });
        } else {
            return option._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            });
        }
    }
    get discriminator() {
        return this._def.discriminator;
    }
    get options() {
        return this._def.options;
    }
    get optionsMap() {
        return this._def.optionsMap;
    }
    /**
     * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
     * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
     * have a different value for each object in the union.
     * @param discriminator the name of the discriminator property
     * @param types an array of object schemas
     * @param params
     */ static create(discriminator, options, params) {
        // Get all the valid discriminator values
        const optionsMap = new Map();
        // try {
        for (const type of options){
            const discriminatorValues = getDiscriminator(type.shape[discriminator]);
            if (!discriminatorValues.length) {
                throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
            }
            for (const value of discriminatorValues){
                if (optionsMap.has(value)) {
                    throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
                }
                optionsMap.set(value, type);
            }
        }
        return new ZodDiscriminatedUnion({
            typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
            discriminator,
            options,
            optionsMap,
            ...processCreateParams(params)
        });
    }
}
function mergeValues(a, b) {
    const aType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getParsedType"])(a);
    const bType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getParsedType"])(b);
    if (a === b) {
        return {
            valid: true,
            data: a
        };
    } else if (aType === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].object && bType === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].object) {
        const bKeys = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].objectKeys(b);
        const sharedKeys = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].objectKeys(a).filter((key)=>bKeys.indexOf(key) !== -1);
        const newObj = {
            ...a,
            ...b
        };
        for (const key of sharedKeys){
            const sharedValue = mergeValues(a[key], b[key]);
            if (!sharedValue.valid) {
                return {
                    valid: false
                };
            }
            newObj[key] = sharedValue.data;
        }
        return {
            valid: true,
            data: newObj
        };
    } else if (aType === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].array && bType === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].array) {
        if (a.length !== b.length) {
            return {
                valid: false
            };
        }
        const newArray = [];
        for(let index = 0; index < a.length; index++){
            const itemA = a[index];
            const itemB = b[index];
            const sharedValue = mergeValues(itemA, itemB);
            if (!sharedValue.valid) {
                return {
                    valid: false
                };
            }
            newArray.push(sharedValue.data);
        }
        return {
            valid: true,
            data: newArray
        };
    } else if (aType === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].date && bType === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].date && +a === +b) {
        return {
            valid: true,
            data: a
        };
    } else {
        return {
            valid: false
        };
    }
}
class ZodIntersection extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const handleParsed = (parsedLeft, parsedRight)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAborted"])(parsedLeft) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAborted"])(parsedRight)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
            }
            const merged = mergeValues(parsedLeft.value, parsedRight.value);
            if (!merged.valid) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                    code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_intersection_types
                });
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDirty"])(parsedLeft) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDirty"])(parsedRight)) {
                status.dirty();
            }
            return {
                status: status.value,
                value: merged.data
            };
        };
        if (ctx.common.async) {
            return Promise.all([
                this._def.left._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                }),
                this._def.right._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                })
            ]).then(([left, right])=>handleParsed(left, right));
        } else {
            return handleParsed(this._def.left._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            }), this._def.right._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            }));
        }
    }
}
ZodIntersection.create = (left, right, params)=>{
    return new ZodIntersection({
        left: left,
        right: right,
        typeName: ZodFirstPartyTypeKind.ZodIntersection,
        ...processCreateParams(params)
    });
};
class ZodTuple extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].array) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].array,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        if (ctx.data.length < this._def.items.length) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_small,
                minimum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array"
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        const rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_big,
                maximum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array"
            });
            status.dirty();
        }
        const items = [
            ...ctx.data
        ].map((item, itemIndex)=>{
            const schema = this._def.items[itemIndex] || this._def.rest;
            if (!schema) return null;
            return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
        }).filter((x)=>!!x); // filter nulls
        if (ctx.common.async) {
            return Promise.all(items).then((results)=>{
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseStatus"].mergeArray(status, results);
            });
        } else {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseStatus"].mergeArray(status, items);
        }
    }
    get items() {
        return this._def.items;
    }
    rest(rest) {
        return new ZodTuple({
            ...this._def,
            rest
        });
    }
}
ZodTuple.create = (schemas, params)=>{
    if (!Array.isArray(schemas)) {
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    }
    return new ZodTuple({
        items: schemas,
        typeName: ZodFirstPartyTypeKind.ZodTuple,
        rest: null,
        ...processCreateParams(params)
    });
};
class ZodRecord extends ZodType {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].object) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].object,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        const pairs = [];
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        for(const key in ctx.data){
            pairs.push({
                key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
                value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
                alwaysSet: key in ctx.data
            });
        }
        if (ctx.common.async) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseStatus"].mergeObjectAsync(status, pairs);
        } else {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseStatus"].mergeObjectSync(status, pairs);
        }
    }
    get element() {
        return this._def.valueType;
    }
    static create(first, second, third) {
        if (second instanceof ZodType) {
            return new ZodRecord({
                keyType: first,
                valueType: second,
                typeName: ZodFirstPartyTypeKind.ZodRecord,
                ...processCreateParams(third)
            });
        }
        return new ZodRecord({
            keyType: ZodString.create(),
            valueType: first,
            typeName: ZodFirstPartyTypeKind.ZodRecord,
            ...processCreateParams(second)
        });
    }
}
class ZodMap extends ZodType {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].map) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].map,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        const pairs = [
            ...ctx.data.entries()
        ].map(([key, value], index)=>{
            return {
                key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [
                    index,
                    "key"
                ])),
                value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [
                    index,
                    "value"
                ]))
            };
        });
        if (ctx.common.async) {
            const finalMap = new Map();
            return Promise.resolve().then(async ()=>{
                for (const pair of pairs){
                    const key = await pair.key;
                    const value = await pair.value;
                    if (key.status === "aborted" || value.status === "aborted") {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
                    }
                    if (key.status === "dirty" || value.status === "dirty") {
                        status.dirty();
                    }
                    finalMap.set(key.value, value.value);
                }
                return {
                    status: status.value,
                    value: finalMap
                };
            });
        } else {
            const finalMap = new Map();
            for (const pair of pairs){
                const key = pair.key;
                const value = pair.value;
                if (key.status === "aborted" || value.status === "aborted") {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
                }
                if (key.status === "dirty" || value.status === "dirty") {
                    status.dirty();
                }
                finalMap.set(key.value, value.value);
            }
            return {
                status: status.value,
                value: finalMap
            };
        }
    }
}
ZodMap.create = (keyType, valueType, params)=>{
    return new ZodMap({
        valueType,
        keyType,
        typeName: ZodFirstPartyTypeKind.ZodMap,
        ...processCreateParams(params)
    });
};
class ZodSet extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].set) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].set,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        const def = this._def;
        if (def.minSize !== null) {
            if (ctx.data.size < def.minSize.value) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                    code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_small,
                    minimum: def.minSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.minSize.message
                });
                status.dirty();
            }
        }
        if (def.maxSize !== null) {
            if (ctx.data.size > def.maxSize.value) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                    code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_big,
                    maximum: def.maxSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.maxSize.message
                });
                status.dirty();
            }
        }
        const valueType = this._def.valueType;
        function finalizeSet(elements) {
            const parsedSet = new Set();
            for (const element of elements){
                if (element.status === "aborted") return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
                if (element.status === "dirty") status.dirty();
                parsedSet.add(element.value);
            }
            return {
                status: status.value,
                value: parsedSet
            };
        }
        const elements = [
            ...ctx.data.values()
        ].map((item, i)=>valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
        if (ctx.common.async) {
            return Promise.all(elements).then((elements)=>finalizeSet(elements));
        } else {
            return finalizeSet(elements);
        }
    }
    min(minSize, message) {
        return new ZodSet({
            ...this._def,
            minSize: {
                value: minSize,
                message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
            }
        });
    }
    max(maxSize, message) {
        return new ZodSet({
            ...this._def,
            maxSize: {
                value: maxSize,
                message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
            }
        });
    }
    size(size, message) {
        return this.min(size, message).max(size, message);
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
ZodSet.create = (valueType, params)=>{
    return new ZodSet({
        valueType,
        minSize: null,
        maxSize: null,
        typeName: ZodFirstPartyTypeKind.ZodSet,
        ...processCreateParams(params)
    });
};
class ZodFunction extends ZodType {
    constructor(){
        super(...arguments);
        this.validate = this.implement;
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].function) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].function,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        function makeArgsIssue(args, error) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeIssue"])({
                data: args,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getErrorMap"])(),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__defaultErrorMap$3e$__["defaultErrorMap"]
                ].filter((x)=>!!x),
                issueData: {
                    code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_arguments,
                    argumentsError: error
                }
            });
        }
        function makeReturnsIssue(returns, error) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeIssue"])({
                data: returns,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getErrorMap"])(),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__defaultErrorMap$3e$__["defaultErrorMap"]
                ].filter((x)=>!!x),
                issueData: {
                    code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_return_type,
                    returnTypeError: error
                }
            });
        }
        const params = {
            errorMap: ctx.common.contextualErrorMap
        };
        const fn = ctx.data;
        if (this._def.returns instanceof ZodPromise) {
            // Would love a way to avoid disabling this rule, but we need
            // an alias (using an arrow function was what caused 2651).
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const me = this;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OK"])(async function(...args) {
                const error = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodError"]([]);
                const parsedArgs = await me._def.args.parseAsync(args, params).catch((e)=>{
                    error.addIssue(makeArgsIssue(args, e));
                    throw error;
                });
                const result = await Reflect.apply(fn, this, parsedArgs);
                const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e)=>{
                    error.addIssue(makeReturnsIssue(result, e));
                    throw error;
                });
                return parsedReturns;
            });
        } else {
            // Would love a way to avoid disabling this rule, but we need
            // an alias (using an arrow function was what caused 2651).
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const me = this;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OK"])(function(...args) {
                const parsedArgs = me._def.args.safeParse(args, params);
                if (!parsedArgs.success) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodError"]([
                        makeArgsIssue(args, parsedArgs.error)
                    ]);
                }
                const result = Reflect.apply(fn, this, parsedArgs.data);
                const parsedReturns = me._def.returns.safeParse(result, params);
                if (!parsedReturns.success) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodError"]([
                        makeReturnsIssue(result, parsedReturns.error)
                    ]);
                }
                return parsedReturns.data;
            });
        }
    }
    parameters() {
        return this._def.args;
    }
    returnType() {
        return this._def.returns;
    }
    args(...items) {
        return new ZodFunction({
            ...this._def,
            args: ZodTuple.create(items).rest(ZodUnknown.create())
        });
    }
    returns(returnType) {
        return new ZodFunction({
            ...this._def,
            returns: returnType
        });
    }
    implement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    strictImplement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    static create(args, returns, params) {
        return new ZodFunction({
            args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
            returns: returns || ZodUnknown.create(),
            typeName: ZodFirstPartyTypeKind.ZodFunction,
            ...processCreateParams(params)
        });
    }
}
class ZodLazy extends ZodType {
    get schema() {
        return this._def.getter();
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const lazySchema = this._def.getter();
        return lazySchema._parse({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
        });
    }
}
ZodLazy.create = (getter, params)=>{
    return new ZodLazy({
        getter: getter,
        typeName: ZodFirstPartyTypeKind.ZodLazy,
        ...processCreateParams(params)
    });
};
class ZodLiteral extends ZodType {
    _parse(input) {
        if (input.data !== this._def.value) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                received: ctx.data,
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_literal,
                expected: this._def.value
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        return {
            status: "valid",
            value: input.data
        };
    }
    get value() {
        return this._def.value;
    }
}
ZodLiteral.create = (value, params)=>{
    return new ZodLiteral({
        value: value,
        typeName: ZodFirstPartyTypeKind.ZodLiteral,
        ...processCreateParams(params)
    });
};
function createZodEnum(values, params) {
    return new ZodEnum({
        values,
        typeName: ZodFirstPartyTypeKind.ZodEnum,
        ...processCreateParams(params)
    });
}
class ZodEnum extends ZodType {
    _parse(input) {
        if (typeof input.data !== "string") {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].joinValues(expectedValues),
                received: ctx.parsedType,
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        if (!this._cache) {
            this._cache = new Set(this._def.values);
        }
        if (!this._cache.has(input.data)) {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                received: ctx.data,
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_enum_value,
                options: expectedValues
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OK"])(input.data);
    }
    get options() {
        return this._def.values;
    }
    get enum() {
        const enumValues = {};
        for (const val of this._def.values){
            enumValues[val] = val;
        }
        return enumValues;
    }
    get Values() {
        const enumValues = {};
        for (const val of this._def.values){
            enumValues[val] = val;
        }
        return enumValues;
    }
    get Enum() {
        const enumValues = {};
        for (const val of this._def.values){
            enumValues[val] = val;
        }
        return enumValues;
    }
    extract(values, newDef = this._def) {
        return ZodEnum.create(values, {
            ...this._def,
            ...newDef
        });
    }
    exclude(values, newDef = this._def) {
        return ZodEnum.create(this.options.filter((opt)=>!values.includes(opt)), {
            ...this._def,
            ...newDef
        });
    }
}
ZodEnum.create = createZodEnum;
class ZodNativeEnum extends ZodType {
    _parse(input) {
        const nativeEnumValues = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].getValidEnumValues(this._def.values);
        const ctx = this._getOrReturnCtx(input);
        if (ctx.parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].string && ctx.parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].number) {
            const expectedValues = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].objectValues(nativeEnumValues);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].joinValues(expectedValues),
                received: ctx.parsedType,
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        if (!this._cache) {
            this._cache = new Set(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].getValidEnumValues(this._def.values));
        }
        if (!this._cache.has(input.data)) {
            const expectedValues = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].objectValues(nativeEnumValues);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                received: ctx.data,
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_enum_value,
                options: expectedValues
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OK"])(input.data);
    }
    get enum() {
        return this._def.values;
    }
}
ZodNativeEnum.create = (values, params)=>{
    return new ZodNativeEnum({
        values: values,
        typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
        ...processCreateParams(params)
    });
};
class ZodPromise extends ZodType {
    unwrap() {
        return this._def.type;
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].promise && ctx.common.async === false) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].promise,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        const promisified = ctx.parsedType === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].promise ? ctx.data : Promise.resolve(ctx.data);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OK"])(promisified.then((data)=>{
            return this._def.type.parseAsync(data, {
                path: ctx.path,
                errorMap: ctx.common.contextualErrorMap
            });
        }));
    }
}
ZodPromise.create = (schema, params)=>{
    return new ZodPromise({
        type: schema,
        typeName: ZodFirstPartyTypeKind.ZodPromise,
        ...processCreateParams(params)
    });
};
class ZodEffects extends ZodType {
    innerType() {
        return this._def.schema;
    }
    sourceType() {
        return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const effect = this._def.effect || null;
        const checkCtx = {
            addIssue: (arg)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, arg);
                if (arg.fatal) {
                    status.abort();
                } else {
                    status.dirty();
                }
            },
            get path () {
                return ctx.path;
            }
        };
        checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
        if (effect.type === "preprocess") {
            const processed = effect.transform(ctx.data, checkCtx);
            if (ctx.common.async) {
                return Promise.resolve(processed).then(async (processed)=>{
                    if (status.value === "aborted") return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
                    const result = await this._def.schema._parseAsync({
                        data: processed,
                        path: ctx.path,
                        parent: ctx
                    });
                    if (result.status === "aborted") return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
                    if (result.status === "dirty") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DIRTY"])(result.value);
                    if (status.value === "dirty") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DIRTY"])(result.value);
                    return result;
                });
            } else {
                if (status.value === "aborted") return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
                const result = this._def.schema._parseSync({
                    data: processed,
                    path: ctx.path,
                    parent: ctx
                });
                if (result.status === "aborted") return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
                if (result.status === "dirty") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DIRTY"])(result.value);
                if (status.value === "dirty") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DIRTY"])(result.value);
                return result;
            }
        }
        if (effect.type === "refinement") {
            const executeRefinement = (acc)=>{
                const result = effect.refinement(acc, checkCtx);
                if (ctx.common.async) {
                    return Promise.resolve(result);
                }
                if (result instanceof Promise) {
                    throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                }
                return acc;
            };
            if (ctx.common.async === false) {
                const inner = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                });
                if (inner.status === "aborted") return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
                if (inner.status === "dirty") status.dirty();
                // return value is ignored
                executeRefinement(inner.value);
                return {
                    status: status.value,
                    value: inner.value
                };
            } else {
                return this._def.schema._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                }).then((inner)=>{
                    if (inner.status === "aborted") return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
                    if (inner.status === "dirty") status.dirty();
                    return executeRefinement(inner.value).then(()=>{
                        return {
                            status: status.value,
                            value: inner.value
                        };
                    });
                });
            }
        }
        if (effect.type === "transform") {
            if (ctx.common.async === false) {
                const base = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                });
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValid"])(base)) return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
                const result = effect.transform(base.value, checkCtx);
                if (result instanceof Promise) {
                    throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
                }
                return {
                    status: status.value,
                    value: result
                };
            } else {
                return this._def.schema._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                }).then((base)=>{
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValid"])(base)) return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
                    return Promise.resolve(effect.transform(base.value, checkCtx)).then((result)=>({
                            status: status.value,
                            value: result
                        }));
                });
            }
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].assertNever(effect);
    }
}
ZodEffects.create = (schema, effect, params)=>{
    return new ZodEffects({
        schema,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect,
        ...processCreateParams(params)
    });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params)=>{
    return new ZodEffects({
        schema,
        effect: {
            type: "preprocess",
            transform: preprocess
        },
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        ...processCreateParams(params)
    });
};
;
class ZodOptional extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].undefined) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OK"])(undefined);
        }
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodOptional.create = (type, params)=>{
    return new ZodOptional({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodOptional,
        ...processCreateParams(params)
    });
};
class ZodNullable extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].null) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OK"])(null);
        }
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodNullable.create = (type, params)=>{
    return new ZodNullable({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodNullable,
        ...processCreateParams(params)
    });
};
class ZodDefault extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        let data = ctx.data;
        if (ctx.parsedType === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].undefined) {
            data = this._def.defaultValue();
        }
        return this._def.innerType._parse({
            data,
            path: ctx.path,
            parent: ctx
        });
    }
    removeDefault() {
        return this._def.innerType;
    }
}
ZodDefault.create = (type, params)=>{
    return new ZodDefault({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodDefault,
        defaultValue: typeof params.default === "function" ? params.default : ()=>params.default,
        ...processCreateParams(params)
    });
};
class ZodCatch extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        // newCtx is used to not collect issues from inner types in ctx
        const newCtx = {
            ...ctx,
            common: {
                ...ctx.common,
                issues: []
            }
        };
        const result = this._def.innerType._parse({
            data: newCtx.data,
            path: newCtx.path,
            parent: {
                ...newCtx
            }
        });
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAsync"])(result)) {
            return result.then((result)=>{
                return {
                    status: "valid",
                    value: result.status === "valid" ? result.value : this._def.catchValue({
                        get error () {
                            return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodError"](newCtx.common.issues);
                        },
                        input: newCtx.data
                    })
                };
            });
        } else {
            return {
                status: "valid",
                value: result.status === "valid" ? result.value : this._def.catchValue({
                    get error () {
                        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodError"](newCtx.common.issues);
                    },
                    input: newCtx.data
                })
            };
        }
    }
    removeCatch() {
        return this._def.innerType;
    }
}
ZodCatch.create = (type, params)=>{
    return new ZodCatch({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodCatch,
        catchValue: typeof params.catch === "function" ? params.catch : ()=>params.catch,
        ...processCreateParams(params)
    });
};
class ZodNaN extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].nan) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].nan,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        return {
            status: "valid",
            value: input.data
        };
    }
}
ZodNaN.create = (params)=>{
    return new ZodNaN({
        typeName: ZodFirstPartyTypeKind.ZodNaN,
        ...processCreateParams(params)
    });
};
const BRAND = Symbol("zod_brand");
class ZodBranded extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const data = ctx.data;
        return this._def.type._parse({
            data,
            path: ctx.path,
            parent: ctx
        });
    }
    unwrap() {
        return this._def.type;
    }
}
class ZodPipeline extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.common.async) {
            const handleAsync = async ()=>{
                const inResult = await this._def.in._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                });
                if (inResult.status === "aborted") return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
                if (inResult.status === "dirty") {
                    status.dirty();
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DIRTY"])(inResult.value);
                } else {
                    return this._def.out._parseAsync({
                        data: inResult.value,
                        path: ctx.path,
                        parent: ctx
                    });
                }
            };
            return handleAsync();
        } else {
            const inResult = this._def.in._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            });
            if (inResult.status === "aborted") return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
            if (inResult.status === "dirty") {
                status.dirty();
                return {
                    status: "dirty",
                    value: inResult.value
                };
            } else {
                return this._def.out._parseSync({
                    data: inResult.value,
                    path: ctx.path,
                    parent: ctx
                });
            }
        }
    }
    static create(a, b) {
        return new ZodPipeline({
            in: a,
            out: b,
            typeName: ZodFirstPartyTypeKind.ZodPipeline
        });
    }
}
class ZodReadonly extends ZodType {
    _parse(input) {
        const result = this._def.innerType._parse(input);
        const freeze = (data)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValid"])(data)) {
                data.value = Object.freeze(data.value);
            }
            return data;
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAsync"])(result) ? result.then((data)=>freeze(data)) : freeze(result);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodReadonly.create = (type, params)=>{
    return new ZodReadonly({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodReadonly,
        ...processCreateParams(params)
    });
};
////////////////////////////////////////
////////////////////////////////////////
//////////                    //////////
//////////      z.custom      //////////
//////////                    //////////
////////////////////////////////////////
////////////////////////////////////////
function cleanParams(params, data) {
    const p = typeof params === "function" ? params(data) : typeof params === "string" ? {
        message: params
    } : params;
    const p2 = typeof p === "string" ? {
        message: p
    } : p;
    return p2;
}
function custom(check, _params = {}, /**
 * @deprecated
 *
 * Pass `fatal` into the params object instead:
 *
 * ```ts
 * z.string().custom((val) => val.length > 5, { fatal: false })
 * ```
 *
 */ fatal) {
    if (check) return ZodAny.create().superRefine((data, ctx)=>{
        const r = check(data);
        if (r instanceof Promise) {
            return r.then((r)=>{
                if (!r) {
                    const params = cleanParams(_params, data);
                    const _fatal = params.fatal ?? fatal ?? true;
                    ctx.addIssue({
                        code: "custom",
                        ...params,
                        fatal: _fatal
                    });
                }
            });
        }
        if (!r) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({
                code: "custom",
                ...params,
                fatal: _fatal
            });
        }
        return;
    });
    return ZodAny.create();
}
;
const late = {
    object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind) {
    ZodFirstPartyTypeKind["ZodString"] = "ZodString";
    ZodFirstPartyTypeKind["ZodNumber"] = "ZodNumber";
    ZodFirstPartyTypeKind["ZodNaN"] = "ZodNaN";
    ZodFirstPartyTypeKind["ZodBigInt"] = "ZodBigInt";
    ZodFirstPartyTypeKind["ZodBoolean"] = "ZodBoolean";
    ZodFirstPartyTypeKind["ZodDate"] = "ZodDate";
    ZodFirstPartyTypeKind["ZodSymbol"] = "ZodSymbol";
    ZodFirstPartyTypeKind["ZodUndefined"] = "ZodUndefined";
    ZodFirstPartyTypeKind["ZodNull"] = "ZodNull";
    ZodFirstPartyTypeKind["ZodAny"] = "ZodAny";
    ZodFirstPartyTypeKind["ZodUnknown"] = "ZodUnknown";
    ZodFirstPartyTypeKind["ZodNever"] = "ZodNever";
    ZodFirstPartyTypeKind["ZodVoid"] = "ZodVoid";
    ZodFirstPartyTypeKind["ZodArray"] = "ZodArray";
    ZodFirstPartyTypeKind["ZodObject"] = "ZodObject";
    ZodFirstPartyTypeKind["ZodUnion"] = "ZodUnion";
    ZodFirstPartyTypeKind["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
    ZodFirstPartyTypeKind["ZodIntersection"] = "ZodIntersection";
    ZodFirstPartyTypeKind["ZodTuple"] = "ZodTuple";
    ZodFirstPartyTypeKind["ZodRecord"] = "ZodRecord";
    ZodFirstPartyTypeKind["ZodMap"] = "ZodMap";
    ZodFirstPartyTypeKind["ZodSet"] = "ZodSet";
    ZodFirstPartyTypeKind["ZodFunction"] = "ZodFunction";
    ZodFirstPartyTypeKind["ZodLazy"] = "ZodLazy";
    ZodFirstPartyTypeKind["ZodLiteral"] = "ZodLiteral";
    ZodFirstPartyTypeKind["ZodEnum"] = "ZodEnum";
    ZodFirstPartyTypeKind["ZodEffects"] = "ZodEffects";
    ZodFirstPartyTypeKind["ZodNativeEnum"] = "ZodNativeEnum";
    ZodFirstPartyTypeKind["ZodOptional"] = "ZodOptional";
    ZodFirstPartyTypeKind["ZodNullable"] = "ZodNullable";
    ZodFirstPartyTypeKind["ZodDefault"] = "ZodDefault";
    ZodFirstPartyTypeKind["ZodCatch"] = "ZodCatch";
    ZodFirstPartyTypeKind["ZodPromise"] = "ZodPromise";
    ZodFirstPartyTypeKind["ZodBranded"] = "ZodBranded";
    ZodFirstPartyTypeKind["ZodPipeline"] = "ZodPipeline";
    ZodFirstPartyTypeKind["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
// requires TS 4.4+
class Class {
    constructor(..._){}
}
const instanceOfType = (// const instanceOfType = <T extends new (...args: any[]) => any>(
cls, params = {
    message: `Input not instance of ${cls.name}`
})=>custom((data)=>data instanceof cls, params);
const stringType = ZodString.create;
const numberType = ZodNumber.create;
const nanType = ZodNaN.create;
const bigIntType = ZodBigInt.create;
const booleanType = ZodBoolean.create;
const dateType = ZodDate.create;
const symbolType = ZodSymbol.create;
const undefinedType = ZodUndefined.create;
const nullType = ZodNull.create;
const anyType = ZodAny.create;
const unknownType = ZodUnknown.create;
const neverType = ZodNever.create;
const voidType = ZodVoid.create;
const arrayType = ZodArray.create;
const objectType = ZodObject.create;
const strictObjectType = ZodObject.strictCreate;
const unionType = ZodUnion.create;
const discriminatedUnionType = ZodDiscriminatedUnion.create;
const intersectionType = ZodIntersection.create;
const tupleType = ZodTuple.create;
const recordType = ZodRecord.create;
const mapType = ZodMap.create;
const setType = ZodSet.create;
const functionType = ZodFunction.create;
const lazyType = ZodLazy.create;
const literalType = ZodLiteral.create;
const enumType = ZodEnum.create;
const nativeEnumType = ZodNativeEnum.create;
const promiseType = ZodPromise.create;
const effectsType = ZodEffects.create;
const optionalType = ZodOptional.create;
const nullableType = ZodNullable.create;
const preprocessType = ZodEffects.createWithPreprocess;
const pipelineType = ZodPipeline.create;
const ostring = ()=>stringType().optional();
const onumber = ()=>numberType().optional();
const oboolean = ()=>booleanType().optional();
const coerce = {
    string: (arg)=>ZodString.create({
            ...arg,
            coerce: true
        }),
    number: (arg)=>ZodNumber.create({
            ...arg,
            coerce: true
        }),
    boolean: (arg)=>ZodBoolean.create({
            ...arg,
            coerce: true
        }),
    bigint: (arg)=>ZodBigInt.create({
            ...arg,
            coerce: true
        }),
    date: (arg)=>ZodDate.create({
            ...arg,
            coerce: true
        })
};
;
const NEVER = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/external.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BRAND",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BRAND"],
    "DIRTY",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DIRTY"],
    "EMPTY_PATH",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EMPTY_PATH"],
    "INVALID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"],
    "NEVER",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEVER"],
    "OK",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OK"],
    "ParseStatus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseStatus"],
    "Schema",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Schema"],
    "ZodAny",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodAny"],
    "ZodArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodArray"],
    "ZodBigInt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodBigInt"],
    "ZodBoolean",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodBoolean"],
    "ZodBranded",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodBranded"],
    "ZodCatch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodCatch"],
    "ZodDate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodDate"],
    "ZodDefault",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodDefault"],
    "ZodDiscriminatedUnion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodDiscriminatedUnion"],
    "ZodEffects",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodEffects"],
    "ZodEnum",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodEnum"],
    "ZodError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodError"],
    "ZodFirstPartyTypeKind",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"],
    "ZodFunction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFunction"],
    "ZodIntersection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIntersection"],
    "ZodIssueCode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"],
    "ZodLazy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodLazy"],
    "ZodLiteral",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodLiteral"],
    "ZodMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodMap"],
    "ZodNaN",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodNaN"],
    "ZodNativeEnum",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodNativeEnum"],
    "ZodNever",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodNever"],
    "ZodNull",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodNull"],
    "ZodNullable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodNullable"],
    "ZodNumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodNumber"],
    "ZodObject",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodObject"],
    "ZodOptional",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodOptional"],
    "ZodParsedType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"],
    "ZodPipeline",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodPipeline"],
    "ZodPromise",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodPromise"],
    "ZodReadonly",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodReadonly"],
    "ZodRecord",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodRecord"],
    "ZodSchema",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodSchema"],
    "ZodSet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodSet"],
    "ZodString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodString"],
    "ZodSymbol",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodSymbol"],
    "ZodTransformer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodTransformer"],
    "ZodTuple",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodTuple"],
    "ZodType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodType"],
    "ZodUndefined",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodUndefined"],
    "ZodUnion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodUnion"],
    "ZodUnknown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodUnknown"],
    "ZodVoid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodVoid"],
    "addIssueToContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"],
    "any",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["any"],
    "array",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["array"],
    "bigint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bigint"],
    "boolean",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["boolean"],
    "coerce",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["coerce"],
    "custom",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["custom"],
    "date",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["date"],
    "datetimeRegex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["datetimeRegex"],
    "defaultErrorMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultErrorMap"],
    "discriminatedUnion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["discriminatedUnion"],
    "effect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["effect"],
    "enum",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["enum"],
    "function",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["function"],
    "getErrorMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getErrorMap"],
    "getParsedType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getParsedType"],
    "instanceof",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["instanceof"],
    "intersection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["intersection"],
    "isAborted",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAborted"],
    "isAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAsync"],
    "isDirty",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDirty"],
    "isValid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValid"],
    "late",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["late"],
    "lazy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lazy"],
    "literal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["literal"],
    "makeIssue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeIssue"],
    "map",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["map"],
    "nan",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nan"],
    "nativeEnum",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nativeEnum"],
    "never",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["never"],
    "null",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["null"],
    "nullable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nullable"],
    "number",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["number"],
    "object",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"],
    "objectUtil",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["objectUtil"],
    "oboolean",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oboolean"],
    "onumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["onumber"],
    "optional",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["optional"],
    "ostring",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ostring"],
    "pipeline",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pipeline"],
    "preprocess",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["preprocess"],
    "promise",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["promise"],
    "quotelessJson",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quotelessJson"],
    "record",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["record"],
    "set",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["set"],
    "setErrorMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setErrorMap"],
    "strictObject",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["strictObject"],
    "string",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"],
    "symbol",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["symbol"],
    "transformer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformer"],
    "tuple",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tuple"],
    "undefined",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["undefined"],
    "union",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["union"],
    "unknown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unknown"],
    "util",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"],
    "void",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["void"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/helpers/parseUtil.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$typeAliases$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/helpers/typeAliases.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/helpers/util.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/ZodError.js [app-rsc] (ecmascript)");
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "z",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/external.js [app-rsc] (ecmascript)");
}),
"[project]/Desktop/MedRelief/medrelief.com/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
} //# sourceMappingURL=action-validate.js.map
}),
];

//# sourceMappingURL=2abf8_a6d4a6ca._.js.map
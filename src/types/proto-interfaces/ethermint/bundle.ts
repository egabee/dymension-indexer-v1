import * as _260 from "./crypto/v1/ethsecp256k1/keys";
import * as _261 from "./evm/v1/events";
import * as _262 from "./evm/v1/evm";
import * as _263 from "./evm/v1/genesis";
import * as _264 from "./evm/v1/tx";
import * as _265 from "./feemarket/v1/events";
import * as _266 from "./feemarket/v1/feemarket";
import * as _267 from "./feemarket/v1/genesis";
import * as _268 from "./feemarket/v1/tx";
import * as _269 from "./types/v1/account";
import * as _270 from "./types/v1/dynamic_fee";
import * as _271 from "./types/v1/indexer";
import * as _272 from "./types/v1/web3";
export namespace ethermint {
  export namespace crypto {
    export namespace v1 {
      export const ethsecp256k1 = {
        ..._260
      };
    }
  }
  export namespace evm {
    export const v1 = {
      ..._261,
      ..._262,
      ..._263,
      ..._264
    };
  }
  export namespace feemarket {
    export const v1 = {
      ..._265,
      ..._266,
      ..._267,
      ..._268
    };
  }
  export namespace types {
    export const v1 = {
      ..._269,
      ..._270,
      ..._271,
      ..._272
    };
  }
}
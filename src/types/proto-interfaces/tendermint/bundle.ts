import * as _114 from "../cosmos/tendermint/abci/types";
import * as _115 from "./abci/types";
import * as _116 from "../cosmos/tendermint/crypto/keys";
import * as _117 from "../cosmos/tendermint/crypto/proof";
import * as _118 from "./crypto/keys";
import * as _119 from "./crypto/proof";
import * as _120 from "../cosmos/tendermint/libs/bits/types";
import * as _121 from "./libs/bits/types";
import * as _122 from "../cosmos/tendermint/p2p/types";
import * as _123 from "./p2p/types";
import * as _124 from "../cosmos/tendermint/types/block";
import * as _125 from "../cosmos/tendermint/types/evidence";
import * as _126 from "../cosmos/tendermint/types/params";
import * as _127 from "../cosmos/tendermint/types/types";
import * as _128 from "../cosmos/tendermint/types/validator";
import * as _129 from "./types/block";
import * as _130 from "./types/evidence";
import * as _131 from "./types/params";
import * as _132 from "./types/types";
import * as _133 from "./types/validator";
import * as _134 from "../cosmos/tendermint/version/types";
import * as _135 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._114,
    ..._115
  };
  export const crypto = {
    ..._116,
    ..._117,
    ..._118,
    ..._119
  };
  export namespace libs {
    export const bits = {
      ..._120,
      ..._121
    };
  }
  export const p2p = {
    ..._122,
    ..._123
  };
  export const types = {
    ..._124,
    ..._125,
    ..._126,
    ..._127,
    ..._128,
    ..._129,
    ..._130,
    ..._131,
    ..._132,
    ..._133
  };
  export const version = {
    ..._134,
    ..._135
  };
}
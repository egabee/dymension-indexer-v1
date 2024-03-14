import * as _172 from "../dymension/gamm/poolmodels/balancer/v1beta1/tx";
import * as _173 from "./gamm/poolmodels/balancer/v1beta1/tx";
import * as _174 from "../dymension/gamm/poolmodels/stableswap/v1beta1/stableswap_pool";
import * as _175 from "../dymension/gamm/poolmodels/stableswap/v1beta1/tx";
import * as _176 from "./gamm/poolmodels/stableswap/v1beta1/stableswap_pool";
import * as _177 from "./gamm/poolmodels/stableswap/v1beta1/tx";
import * as _178 from "../dymension/gamm/v1beta1/balancerPool";
import * as _179 from "../dymension/gamm/v1beta1/genesis";
import * as _180 from "../dymension/gamm/v1beta1/gov";
import * as _181 from "../dymension/gamm/v1beta1/shared";
import * as _182 from "../dymension/gamm/v1beta1/tx";
import * as _183 from "./gamm/v1beta1/balancerPool";
import * as _184 from "./gamm/v1beta1/genesis";
import * as _185 from "./gamm/v1beta1/gov";
import * as _186 from "./gamm/v1beta1/shared";
import * as _187 from "./gamm/v1beta1/tx";
import * as _188 from "../dymension/lockup/genesis";
import * as _189 from "../dymension/lockup/lock";
import * as _190 from "../dymension/lockup/params";
import * as _191 from "../dymension/lockup/tx";
import * as _192 from "./lockup/genesis";
import * as _193 from "./lockup/lock";
import * as _194 from "./lockup/params";
import * as _195 from "./lockup/tx";
import * as _196 from "./accum/v1beta1/accum";
import * as _197 from "./bridge/v1beta1/bridge";
import * as _198 from "./bridge/v1beta1/events";
import * as _199 from "./bridge/v1beta1/genesis";
import * as _200 from "./bridge/v1beta1/tx";
import * as _201 from "./concentratedliquidity/params";
import * as _202 from "./cosmwasmpool/v1beta1/genesis";
import * as _203 from "./cosmwasmpool/v1beta1/gov";
import * as _204 from "./cosmwasmpool/v1beta1/model/instantiate_msg";
import * as _205 from "./cosmwasmpool/v1beta1/model/module_query_msg";
import * as _206 from "./cosmwasmpool/v1beta1/model/module_sudo_msg";
import * as _207 from "./cosmwasmpool/v1beta1/model/pool_query_msg";
import * as _208 from "./cosmwasmpool/v1beta1/model/pool";
import * as _209 from "./cosmwasmpool/v1beta1/model/transmuter_msgs";
import * as _210 from "./cosmwasmpool/v1beta1/model/tx";
import * as _211 from "./cosmwasmpool/v1beta1/params";
import * as _212 from "./cosmwasmpool/v1beta1/tx";
import * as _213 from "./downtimedetector/v1beta1/downtime_duration";
import * as _214 from "./downtimedetector/v1beta1/genesis";
import * as _215 from "./epochs/v1beta1/genesis";
import * as _216 from "./ibchooks/genesis";
import * as _217 from "./ibchooks/params";
import * as _218 from "./ibchooks/tx";
import * as _219 from "./ibcratelimit/v1beta1/genesis";
import * as _220 from "./ibcratelimit/v1beta1/params";
import * as _221 from "./incentives/gauge";
import * as _222 from "./incentives/genesis";
import * as _223 from "./incentives/gov";
import * as _224 from "./incentives/group";
import * as _225 from "./incentives/params";
import * as _226 from "./incentives/tx";
import * as _227 from "./mint/v1beta1/genesis";
import * as _228 from "./mint/v1beta1/mint";
import * as _229 from "./poolincentives/v1beta1/genesis";
import * as _230 from "./poolincentives/v1beta1/gov";
import * as _231 from "./poolincentives/v1beta1/incentives";
import * as _232 from "./poolincentives/v1beta1/shared";
import * as _233 from "./poolmanager/v1beta1/genesis";
import * as _234 from "./poolmanager/v1beta1/gov";
import * as _235 from "./poolmanager/v1beta1/module_route";
import * as _236 from "./poolmanager/v1beta1/swap_route";
import * as _237 from "./poolmanager/v1beta1/tracked_volume";
import * as _238 from "./poolmanager/v1beta1/tx";
import * as _239 from "./protorev/v1beta1/genesis";
import * as _240 from "./protorev/v1beta1/gov";
import * as _241 from "./protorev/v1beta1/params";
import * as _242 from "./protorev/v1beta1/protorev";
import * as _243 from "./protorev/v1beta1/tx";
import * as _244 from "./store/v1beta1/tree";
import * as _245 from "./superfluid/genesis";
import * as _246 from "./superfluid/params";
import * as _247 from "./superfluid/superfluid";
import * as _248 from "./superfluid/tx";
import * as _249 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _250 from "./tokenfactory/v1beta1/genesis";
import * as _251 from "./tokenfactory/v1beta1/params";
import * as _252 from "./tokenfactory/v1beta1/tx";
import * as _253 from "./twap/v1beta1/genesis";
import * as _254 from "./twap/v1beta1/twap_record";
import * as _255 from "./txfees/v1beta1/feetoken";
import * as _256 from "./txfees/v1beta1/genesis";
import * as _257 from "./txfees/v1beta1/gov";
import * as _258 from "./valsetpref/v1beta1/state";
import * as _259 from "./valsetpref/v1beta1/tx";
export namespace osmosis {
  export namespace gamm {
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._172,
          ..._173
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._174,
          ..._175,
          ..._176,
          ..._177
        };
      }
    }
    export const v1beta1 = {
      ..._178,
      ..._179,
      ..._180,
      ..._181,
      ..._182,
      ..._183,
      ..._184,
      ..._185,
      ..._186,
      ..._187
    };
  }
  export const lockup = {
    ..._188,
    ..._189,
    ..._190,
    ..._191,
    ..._192,
    ..._193,
    ..._194,
    ..._195
  };
  export namespace accum {
    export const v1beta1 = {
      ..._196
    };
  }
  export namespace bridge {
    export const v1beta1 = {
      ..._197,
      ..._198,
      ..._199,
      ..._200
    };
  }
  export const concentratedliquidity = {
    ..._201
  };
  export namespace cosmwasmpool {
    export const v1beta1 = {
      ..._202,
      ..._203,
      ..._204,
      ..._205,
      ..._206,
      ..._207,
      ..._208,
      ..._209,
      ..._210,
      ..._211,
      ..._212
    };
  }
  export namespace downtimedetector {
    export const v1beta1 = {
      ..._213,
      ..._214
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._215
    };
  }
  export const ibchooks = {
    ..._216,
    ..._217,
    ..._218
  };
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._219,
      ..._220
    };
  }
  export const incentives = {
    ..._221,
    ..._222,
    ..._223,
    ..._224,
    ..._225,
    ..._226
  };
  export namespace mint {
    export const v1beta1 = {
      ..._227,
      ..._228
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._229,
      ..._230,
      ..._231,
      ..._232
    };
  }
  export namespace poolmanager {
    export const v1beta1 = {
      ..._233,
      ..._234,
      ..._235,
      ..._236,
      ..._237,
      ..._238
    };
  }
  export namespace protorev {
    export const v1beta1 = {
      ..._239,
      ..._240,
      ..._241,
      ..._242,
      ..._243
    };
  }
  export namespace store {
    export const v1beta1 = {
      ..._244
    };
  }
  export const superfluid = {
    ..._245,
    ..._246,
    ..._247,
    ..._248
  };
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._249,
      ..._250,
      ..._251,
      ..._252
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._253,
      ..._254
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._255,
      ..._256,
      ..._257
    };
  }
  export namespace valsetpref {
    export const v1beta1 = {
      ..._258,
      ..._259
    };
  }
}
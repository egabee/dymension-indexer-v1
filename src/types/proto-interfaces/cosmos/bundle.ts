import * as _2 from "./app/runtime/v1alpha1/module";
import * as _3 from "./app/v1alpha1/config";
import * as _4 from "./app/v1alpha1/module";
import * as _5 from "./auth/module/v1/module";
import * as _6 from "./auth/v1beta1/auth";
import * as _7 from "./auth/v1beta1/genesis";
import * as _8 from "./auth/v1beta1/tx";
import * as _9 from "./authz/module/v1/module";
import * as _10 from "./authz/v1beta1/authz";
import * as _11 from "./authz/v1beta1/event";
import * as _12 from "./authz/v1beta1/genesis";
import * as _13 from "./authz/v1beta1/tx";
import * as _14 from "./autocli/v1/options";
import * as _15 from "./bank/module/v1/module";
import * as _16 from "./bank/v1beta1/authz";
import * as _17 from "./bank/v1beta1/bank";
import * as _18 from "./bank/v1beta1/genesis";
import * as _19 from "./bank/v1beta1/tx";
import * as _20 from "./base/abci/v1beta1/abci";
import * as _21 from "./base/kv/v1beta1/kv";
import * as _22 from "./base/query/v1beta1/pagination";
import * as _23 from "./base/reflection/v1beta1/reflection";
import * as _24 from "./base/reflection/v2alpha1/reflection";
import * as _25 from "./base/snapshots/v1beta1/snapshot";
import * as _26 from "./base/store/v1beta1/commit_info";
import * as _27 from "./base/store/v1beta1/listening";
import * as _28 from "./base/tendermint/v1beta1/types";
import * as _29 from "./base/v1beta1/coin";
import * as _30 from "./capability/v1beta1/capability";
import * as _31 from "./capability/v1beta1/genesis";
import * as _32 from "./circuit/module/v1/module";
import * as _33 from "./circuit/v1/tx";
import * as _34 from "./circuit/v1/types";
import * as _35 from "./consensus/module/v1/module";
import * as _36 from "./consensus/v1/tx";
import * as _37 from "./crisis/module/v1/module";
import * as _38 from "./crisis/v1beta1/genesis";
import * as _39 from "./crisis/v1beta1/tx";
import * as _40 from "./crypto/ed25519/keys";
import * as _41 from "./crypto/hd/v1/hd";
import * as _42 from "./crypto/keyring/v1/record";
import * as _43 from "./crypto/multisig/keys";
import * as _44 from "./crypto/secp256k1/keys";
import * as _45 from "./crypto/secp256r1/keys";
import * as _46 from "./distribution/module/v1/module";
import * as _47 from "./distribution/v1beta1/distribution";
import * as _48 from "./distribution/v1beta1/genesis";
import * as _49 from "./distribution/v1beta1/tx";
import * as _50 from "./evidence/module/v1/module";
import * as _51 from "./evidence/v1beta1/evidence";
import * as _52 from "./evidence/v1beta1/genesis";
import * as _53 from "./evidence/v1beta1/tx";
import * as _54 from "./feegrant/module/v1/module";
import * as _55 from "./feegrant/v1beta1/feegrant";
import * as _56 from "./feegrant/v1beta1/genesis";
import * as _57 from "./feegrant/v1beta1/tx";
import * as _58 from "./genutil/module/v1/module";
import * as _59 from "./genutil/v1beta1/genesis";
import * as _60 from "./gov/module/v1/module";
import * as _61 from "./gov/v1/genesis";
import * as _62 from "./gov/v1/gov";
import * as _63 from "./gov/v1/tx";
import * as _64 from "./gov/v1beta1/genesis";
import * as _65 from "./gov/v1beta1/gov";
import * as _66 from "./gov/v1beta1/tx";
import * as _67 from "./group/module/v1/module";
import * as _68 from "./group/v1/events";
import * as _69 from "./group/v1/genesis";
import * as _70 from "./group/v1/tx";
import * as _71 from "./group/v1/types";
import * as _72 from "./ics23/v1/proofs";
import * as _73 from "./mint/module/v1/module";
import * as _74 from "./mint/v1beta1/genesis";
import * as _75 from "./mint/v1beta1/mint";
import * as _76 from "./mint/v1beta1/tx";
import * as _77 from "./msg/textual/v1/textual";
import * as _78 from "./msg/v1/msg";
import * as _79 from "./nft/module/v1/module";
import * as _80 from "./nft/v1beta1/event";
import * as _81 from "./nft/v1beta1/genesis";
import * as _82 from "./nft/v1beta1/nft";
import * as _83 from "./nft/v1beta1/tx";
import * as _84 from "./orm/module/v1alpha1/module";
import * as _85 from "./orm/v1/orm";
import * as _86 from "./orm/v1alpha1/schema";
import * as _87 from "./params/module/v1/module";
import * as _88 from "./params/v1beta1/params";
import * as _89 from "./reflection/v1/reflection";
import * as _90 from "./slashing/module/v1/module";
import * as _91 from "./slashing/v1beta1/genesis";
import * as _92 from "./slashing/v1beta1/slashing";
import * as _93 from "./slashing/v1beta1/tx";
import * as _94 from "./staking/module/v1/module";
import * as _95 from "./staking/v1beta1/authz";
import * as _96 from "./staking/v1beta1/genesis";
import * as _97 from "./staking/v1beta1/staking";
import * as _98 from "./staking/v1beta1/tx";
import * as _99 from "./store/internal/kv/v1beta1/kv";
import * as _100 from "./store/snapshots/v1/snapshot";
import * as _101 from "./store/streaming/abci/grpc";
import * as _102 from "./store/v1beta1/commit_info";
import * as _103 from "./store/v1beta1/listening";
import * as _104 from "./tx/config/v1/config";
import * as _105 from "./tx/signing/v1beta1/signing";
import * as _106 from "./tx/v1beta1/service";
import * as _107 from "./tx/v1beta1/tx";
import * as _108 from "./upgrade/module/v1/module";
import * as _109 from "./upgrade/v1beta1/tx";
import * as _110 from "./upgrade/v1beta1/upgrade";
import * as _111 from "./vesting/module/v1/module";
import * as _112 from "./vesting/v1beta1/tx";
import * as _113 from "./vesting/v1beta1/vesting";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._2
      };
    }
    export const v1alpha1 = {
      ..._3,
      ..._4
    };
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._5
      };
    }
    export const v1beta1 = {
      ..._6,
      ..._7,
      ..._8
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._9
      };
    }
    export const v1beta1 = {
      ..._10,
      ..._11,
      ..._12,
      ..._13
    };
  }
  export namespace autocli {
    export const v1 = {
      ..._14
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._15
      };
    }
    export const v1beta1 = {
      ..._16,
      ..._17,
      ..._18,
      ..._19
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._20
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._21
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._22
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._23
      };
      export const v2alpha1 = {
        ..._24
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._25
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._26,
        ..._27
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._28
      };
    }
    export const v1beta1 = {
      ..._29
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._30,
      ..._31
    };
  }
  export namespace circuit {
    export namespace module {
      export const v1 = {
        ..._32
      };
    }
    export const v1 = {
      ..._33,
      ..._34
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._35
      };
    }
    export const v1 = {
      ..._36
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._37
      };
    }
    export const v1beta1 = {
      ..._38,
      ..._39
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._40
    };
    export namespace hd {
      export const v1 = {
        ..._41
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._42
      };
    }
    export const multisig = {
      ..._43
    };
    export const secp256k1 = {
      ..._44
    };
    export const secp256r1 = {
      ..._45
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._46
      };
    }
    export const v1beta1 = {
      ..._47,
      ..._48,
      ..._49
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._50
      };
    }
    export const v1beta1 = {
      ..._51,
      ..._52,
      ..._53
    };
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._54
      };
    }
    export const v1beta1 = {
      ..._55,
      ..._56,
      ..._57
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._58
      };
    }
    export const v1beta1 = {
      ..._59
    };
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._60
      };
    }
    export const v1 = {
      ..._61,
      ..._62,
      ..._63
    };
    export const v1beta1 = {
      ..._64,
      ..._65,
      ..._66
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._67
      };
    }
    export const v1 = {
      ..._68,
      ..._69,
      ..._70,
      ..._71
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._72
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._73
      };
    }
    export const v1beta1 = {
      ..._74,
      ..._75,
      ..._76
    };
  }
  export namespace msg {
    export namespace textual {
      export const v1 = {
        ..._77
      };
    }
    export const v1 = {
      ..._78
    };
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._79
      };
    }
    export const v1beta1 = {
      ..._80,
      ..._81,
      ..._82,
      ..._83
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._84
      };
    }
    export const v1 = {
      ..._85
    };
    export const v1alpha1 = {
      ..._86
    };
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._87
      };
    }
    export const v1beta1 = {
      ..._88
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._89
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._90
      };
    }
    export const v1beta1 = {
      ..._91,
      ..._92,
      ..._93
    };
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._94
      };
    }
    export const v1beta1 = {
      ..._95,
      ..._96,
      ..._97,
      ..._98
    };
  }
  export namespace store {
    export namespace internal {
      export namespace kv {
        export const v1beta1 = {
          ..._99
        };
      }
    }
    export namespace snapshots {
      export const v1 = {
        ..._100
      };
    }
    export namespace streaming {
      export const abci = {
        ..._101
      };
    }
    export const v1beta1 = {
      ..._102,
      ..._103
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._104
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._105
      };
    }
    export const v1beta1 = {
      ..._106,
      ..._107
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._108
      };
    }
    export const v1beta1 = {
      ..._109,
      ..._110
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._111
      };
    }
    export const v1beta1 = {
      ..._112,
      ..._113
    };
  }
}
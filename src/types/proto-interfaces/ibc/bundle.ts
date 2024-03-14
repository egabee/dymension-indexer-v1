import * as _281 from "./applications/fee/v1/ack";
import * as _282 from "./applications/fee/v1/fee";
import * as _283 from "./applications/fee/v1/genesis";
import * as _284 from "./applications/fee/v1/metadata";
import * as _285 from "./applications/fee/v1/tx";
import * as _286 from "./applications/interchain_accounts/controller/v1/controller";
import * as _287 from "./applications/interchain_accounts/controller/v1/tx";
import * as _288 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _289 from "./applications/interchain_accounts/host/v1/host";
import * as _290 from "./applications/interchain_accounts/host/v1/tx";
import * as _291 from "./applications/interchain_accounts/v1/account";
import * as _292 from "./applications/interchain_accounts/v1/metadata";
import * as _293 from "./applications/interchain_accounts/v1/packet";
import * as _294 from "./applications/transfer/v1/authz";
import * as _295 from "./applications/transfer/v1/genesis";
import * as _296 from "./applications/transfer/v1/transfer";
import * as _297 from "./applications/transfer/v1/tx";
import * as _298 from "./applications/transfer/v2/packet";
import * as _299 from "./core/channel/v1/channel";
import * as _300 from "./core/channel/v1/genesis";
import * as _301 from "./core/channel/v1/tx";
import * as _302 from "./core/client/v1/client";
import * as _303 from "./core/client/v1/genesis";
import * as _304 from "./core/client/v1/tx";
import * as _305 from "./core/commitment/v1/commitment";
import * as _306 from "./core/connection/v1/connection";
import * as _307 from "./core/connection/v1/genesis";
import * as _308 from "./core/connection/v1/tx";
import * as _309 from "./core/types/v1/genesis";
import * as _310 from "./lightclients/localhost/v1/localhost";
import * as _311 from "./lightclients/localhost/v2/localhost";
import * as _312 from "./lightclients/solomachine/v1/solomachine";
import * as _313 from "./lightclients/solomachine/v2/solomachine";
import * as _314 from "./lightclients/solomachine/v3/solomachine";
import * as _315 from "./lightclients/tendermint/v1/tendermint";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._281,
        ..._282,
        ..._283,
        ..._284,
        ..._285
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._286,
          ..._287
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._288
        };
      }
      export namespace host {
        export const v1 = {
          ..._289,
          ..._290
        };
      }
      export const v1 = {
        ..._291,
        ..._292,
        ..._293
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._294,
        ..._295,
        ..._296,
        ..._297
      };
      export const v2 = {
        ..._298
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._299,
        ..._300,
        ..._301
      };
    }
    export namespace client {
      export const v1 = {
        ..._302,
        ..._303,
        ..._304
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._305
      };
    }
    export namespace connection {
      export const v1 = {
        ..._306,
        ..._307,
        ..._308
      };
    }
    export namespace types {
      export const v1 = {
        ..._309
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._310
      };
      export const v2 = {
        ..._311
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._312
      };
      export const v2 = {
        ..._313
      };
      export const v3 = {
        ..._314
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._315
      };
    }
  }
}
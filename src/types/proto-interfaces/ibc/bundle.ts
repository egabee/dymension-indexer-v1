import * as _150 from "./applications/fee/v1/ack";
import * as _151 from "./applications/fee/v1/fee";
import * as _152 from "./applications/fee/v1/genesis";
import * as _153 from "./applications/fee/v1/metadata";
import * as _154 from "./applications/fee/v1/tx";
import * as _155 from "./applications/interchain_accounts/controller/v1/controller";
import * as _156 from "./applications/interchain_accounts/controller/v1/tx";
import * as _157 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _158 from "./applications/interchain_accounts/host/v1/host";
import * as _159 from "./applications/interchain_accounts/host/v1/tx";
import * as _160 from "./applications/interchain_accounts/v1/account";
import * as _161 from "./applications/interchain_accounts/v1/metadata";
import * as _162 from "./applications/interchain_accounts/v1/packet";
import * as _163 from "./applications/transfer/v1/authz";
import * as _164 from "./applications/transfer/v1/genesis";
import * as _165 from "./applications/transfer/v1/transfer";
import * as _166 from "./applications/transfer/v1/tx";
import * as _167 from "./applications/transfer/v2/packet";
import * as _168 from "./core/channel/v1/channel";
import * as _169 from "./core/channel/v1/genesis";
import * as _170 from "./core/channel/v1/tx";
import * as _171 from "./core/client/v1/client";
import * as _172 from "./core/client/v1/genesis";
import * as _173 from "./core/client/v1/tx";
import * as _174 from "./core/commitment/v1/commitment";
import * as _175 from "./core/connection/v1/connection";
import * as _176 from "./core/connection/v1/genesis";
import * as _177 from "./core/connection/v1/tx";
import * as _178 from "./core/types/v1/genesis";
import * as _179 from "./lightclients/localhost/v1/localhost";
import * as _180 from "./lightclients/localhost/v2/localhost";
import * as _181 from "./lightclients/solomachine/v1/solomachine";
import * as _182 from "./lightclients/solomachine/v2/solomachine";
import * as _183 from "./lightclients/solomachine/v3/solomachine";
import * as _184 from "./lightclients/tendermint/v1/tendermint";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._150,
        ..._151,
        ..._152,
        ..._153,
        ..._154
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._155,
          ..._156
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._157
        };
      }
      export namespace host {
        export const v1 = {
          ..._158,
          ..._159
        };
      }
      export const v1 = {
        ..._160,
        ..._161,
        ..._162
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._163,
        ..._164,
        ..._165,
        ..._166
      };
      export const v2 = {
        ..._167
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._168,
        ..._169,
        ..._170
      };
    }
    export namespace client {
      export const v1 = {
        ..._171,
        ..._172,
        ..._173
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._174
      };
    }
    export namespace connection {
      export const v1 = {
        ..._175,
        ..._176,
        ..._177
      };
    }
    export namespace types {
      export const v1 = {
        ..._178
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._179
      };
      export const v2 = {
        ..._180
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._181
      };
      export const v2 = {
        ..._182
      };
      export const v3 = {
        ..._183
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._184
      };
    }
  }
}
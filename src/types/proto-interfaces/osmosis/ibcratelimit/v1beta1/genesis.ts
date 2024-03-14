import { Params, ParamsAmino, ParamsSDKType } from "./params";
/** GenesisState defines the ibc-rate-limit module's genesis state. */
export interface GenesisState {
  /** params are all the parameters of the module */
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.ibcratelimit.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the ibc-rate-limit module's genesis state. */
export interface GenesisStateAmino {
  /** params are all the parameters of the module */
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "osmosis/ibcratelimit/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the ibc-rate-limit module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
}
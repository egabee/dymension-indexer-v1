import { Params, ParamsAmino, ParamsSDKType } from "./bridge";
/** GenesisState defines the mint module's genesis state. */
export interface GenesisState {
  /** Params defines params for x/bridge module. */
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the mint module's genesis state. */
export interface GenesisStateAmino {
  /** Params defines params for x/bridge module. */
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "osmosis/bridge/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the mint module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
}
import { Params, ParamsAmino, ParamsSDKType } from "./params";
export interface GenesisState {
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.ibchooks.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "osmosis/ibchooks/genesis-state";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  params: ParamsSDKType;
}
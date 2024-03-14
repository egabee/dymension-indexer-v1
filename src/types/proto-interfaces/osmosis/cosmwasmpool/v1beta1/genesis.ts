import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
/** GenesisState defines the cosmwasmpool module's genesis state. */
export interface GenesisState {
  /** params is the container of cosmwasmpool parameters. */
  params: Params;
  pools: Any[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the cosmwasmpool module's genesis state. */
export interface GenesisStateAmino {
  /** params is the container of cosmwasmpool parameters. */
  params?: ParamsAmino;
  pools: AnyAmino[];
}
export interface GenesisStateAminoMsg {
  type: "osmosis/cosmwasmpool/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the cosmwasmpool module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  pools: AnySDKType[];
}
import { Minter, MinterAmino, MinterSDKType, Params, ParamsAmino, ParamsSDKType } from "./mint";
import { Long } from "../../../helpers";
/** GenesisState defines the mint module's genesis state. */
export interface GenesisState {
  /** minter is an abstraction for holding current rewards information. */
  minter: Minter;
  /** params defines all the parameters of the mint module. */
  params: Params;
  /**
   * reduction_started_epoch is the first epoch in which the reduction of mint
   * begins.
   */
  reductionStartedEpoch: Long;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.mint.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the mint module's genesis state. */
export interface GenesisStateAmino {
  /** minter is an abstraction for holding current rewards information. */
  minter?: MinterAmino;
  /** params defines all the parameters of the mint module. */
  params?: ParamsAmino;
  /**
   * reduction_started_epoch is the first epoch in which the reduction of mint
   * begins.
   */
  reduction_started_epoch: string;
}
export interface GenesisStateAminoMsg {
  type: "osmosis/mint/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the mint module's genesis state. */
export interface GenesisStateSDKType {
  minter: MinterSDKType;
  params: ParamsSDKType;
  reduction_started_epoch: Long;
}
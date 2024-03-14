import { Params, ParamsAmino, ParamsSDKType } from "./feemarket";
import { Long } from "../../../helpers";
/** GenesisState defines the feemarket module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the feemarket module. */
  params: Params;
  /**
   * block_gas is the amount of gas wanted on the last block before the upgrade.
   * Zero by default.
   */
  blockGas: Long;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/ethermint.feemarket.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the feemarket module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of the feemarket module. */
  params?: ParamsAmino;
  /**
   * block_gas is the amount of gas wanted on the last block before the upgrade.
   * Zero by default.
   */
  block_gas: string;
}
export interface GenesisStateAminoMsg {
  type: "/ethermint.feemarket.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the feemarket module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  block_gas: Long;
}
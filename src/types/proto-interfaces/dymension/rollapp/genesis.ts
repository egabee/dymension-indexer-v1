import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Rollapp, RollappAmino, RollappSDKType } from "./rollapp";
import { StateInfo, StateInfoAmino, StateInfoSDKType, StateInfoIndex, StateInfoIndexAmino, StateInfoIndexSDKType, BlockHeightToFinalizationQueue, BlockHeightToFinalizationQueueAmino, BlockHeightToFinalizationQueueSDKType } from "./state_info";
/** GenesisState defines the rollapp module's genesis state. */
export interface GenesisState {
  params: Params;
  rollappList: Rollapp[];
  stateInfoList: StateInfo[];
  latestStateInfoIndexList: StateInfoIndex[];
  latestFinalizedStateIndexList: StateInfoIndex[];
  blockHeightToFinalizationQueueList: BlockHeightToFinalizationQueue[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the rollapp module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  rollappList: RollappAmino[];
  stateInfoList: StateInfoAmino[];
  latestStateInfoIndexList: StateInfoIndexAmino[];
  latestFinalizedStateIndexList: StateInfoIndexAmino[];
  blockHeightToFinalizationQueueList: BlockHeightToFinalizationQueueAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the rollapp module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  rollappList: RollappSDKType[];
  stateInfoList: StateInfoSDKType[];
  latestStateInfoIndexList: StateInfoIndexSDKType[];
  latestFinalizedStateIndexList: StateInfoIndexSDKType[];
  blockHeightToFinalizationQueueList: BlockHeightToFinalizationQueueSDKType[];
}
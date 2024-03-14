import { Status } from "../common/status";
import { BlockDescriptors, BlockDescriptorsAmino, BlockDescriptorsSDKType } from "./block_descriptor";
import { Long } from "../../helpers";
/**
 * StateInfoIndex is the data used for indexing and retrieving a StateInfo
 * it updated and saved with every UpdateState in StateInfo.
 * We use the this structure also for:
 * 1. LatestStateInfoIndex which defines the rollapps' current (latest) index of the last UpdateState
 * 2. LatestFinalizedStateIndex which defines the rollapps' current (latest) index of the latest StateInfo that was finalized
 */
export interface StateInfoIndex {
  /**
   * rollappId is the rollapp that the sequencer belongs to and asking to update
   * it used to identify the what rollapp a StateInfo belongs
   * The rollappId follows the same standard as cosmos chain_id
   */
  rollappId: string;
  /**
   * index is a sequential increasing number, updating on each
   * state update used for indexing to a specific state info, the first index is 1
   */
  index: Long;
}
export interface StateInfoIndexProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.StateInfoIndex";
  value: Uint8Array;
}
/**
 * StateInfoIndex is the data used for indexing and retrieving a StateInfo
 * it updated and saved with every UpdateState in StateInfo.
 * We use the this structure also for:
 * 1. LatestStateInfoIndex which defines the rollapps' current (latest) index of the last UpdateState
 * 2. LatestFinalizedStateIndex which defines the rollapps' current (latest) index of the latest StateInfo that was finalized
 */
export interface StateInfoIndexAmino {
  /**
   * rollappId is the rollapp that the sequencer belongs to and asking to update
   * it used to identify the what rollapp a StateInfo belongs
   * The rollappId follows the same standard as cosmos chain_id
   */
  rollappId: string;
  /**
   * index is a sequential increasing number, updating on each
   * state update used for indexing to a specific state info, the first index is 1
   */
  index: string;
}
export interface StateInfoIndexAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.StateInfoIndex";
  value: StateInfoIndexAmino;
}
/**
 * StateInfoIndex is the data used for indexing and retrieving a StateInfo
 * it updated and saved with every UpdateState in StateInfo.
 * We use the this structure also for:
 * 1. LatestStateInfoIndex which defines the rollapps' current (latest) index of the last UpdateState
 * 2. LatestFinalizedStateIndex which defines the rollapps' current (latest) index of the latest StateInfo that was finalized
 */
export interface StateInfoIndexSDKType {
  rollappId: string;
  index: Long;
}
/** StateInfo defines a rollapps' state. */
export interface StateInfo {
  /**
   * stateInfoIndex defines what rollapp the state belongs to
   * and in which index it can be referenced
   */
  stateInfoIndex: StateInfoIndex;
  /** sequencer is the bech32-encoded address of the sequencer sent the update */
  sequencer: string;
  /** startHeight is the block height of the first block in the batch */
  startHeight: Long;
  /** numBlocks is the number of blocks included in this batch update */
  numBlocks: Long;
  /** DAPath is the description of the location on the DA layer */
  DAPath: string;
  /** version is the version of the rollapp */
  version: Long;
  /** creationHeight is the height at which the UpdateState took place */
  creationHeight: Long;
  /** status is the status of the state update */
  status: Status;
  /**
   * BDs is a list of block description objects (one per block)
   * the list must be ordered by height, starting from startHeight to startHeight+numBlocks-1
   */
  BDs: BlockDescriptors;
}
export interface StateInfoProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.StateInfo";
  value: Uint8Array;
}
/** StateInfo defines a rollapps' state. */
export interface StateInfoAmino {
  /**
   * stateInfoIndex defines what rollapp the state belongs to
   * and in which index it can be referenced
   */
  stateInfoIndex?: StateInfoIndexAmino;
  /** sequencer is the bech32-encoded address of the sequencer sent the update */
  sequencer: string;
  /** startHeight is the block height of the first block in the batch */
  startHeight: string;
  /** numBlocks is the number of blocks included in this batch update */
  numBlocks: string;
  /** DAPath is the description of the location on the DA layer */
  DAPath: string;
  /** version is the version of the rollapp */
  version: string;
  /** creationHeight is the height at which the UpdateState took place */
  creationHeight: string;
  /** status is the status of the state update */
  status: Status;
  /**
   * BDs is a list of block description objects (one per block)
   * the list must be ordered by height, starting from startHeight to startHeight+numBlocks-1
   */
  BDs?: BlockDescriptorsAmino;
}
export interface StateInfoAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.StateInfo";
  value: StateInfoAmino;
}
/** StateInfo defines a rollapps' state. */
export interface StateInfoSDKType {
  stateInfoIndex: StateInfoIndexSDKType;
  sequencer: string;
  startHeight: Long;
  numBlocks: Long;
  DAPath: string;
  version: Long;
  creationHeight: Long;
  status: Status;
  BDs: BlockDescriptorsSDKType;
}
/** StateInfoSummary is a compact representation of StateInfo */
export interface StateInfoSummary {
  /**
   * stateInfoIndex defines what rollapp the state belongs to
   * and in which index it can be referenced
   */
  stateInfoIndex: StateInfoIndex;
  /** status is the status of the state update */
  status: Status;
  /** creationHeight is the height at which the UpdateState took place */
  creationHeight: Long;
}
export interface StateInfoSummaryProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.StateInfoSummary";
  value: Uint8Array;
}
/** StateInfoSummary is a compact representation of StateInfo */
export interface StateInfoSummaryAmino {
  /**
   * stateInfoIndex defines what rollapp the state belongs to
   * and in which index it can be referenced
   */
  stateInfoIndex?: StateInfoIndexAmino;
  /** status is the status of the state update */
  status: Status;
  /** creationHeight is the height at which the UpdateState took place */
  creationHeight: string;
}
export interface StateInfoSummaryAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.StateInfoSummary";
  value: StateInfoSummaryAmino;
}
/** StateInfoSummary is a compact representation of StateInfo */
export interface StateInfoSummarySDKType {
  stateInfoIndex: StateInfoIndexSDKType;
  status: Status;
  creationHeight: Long;
}
/** BlockHeightToFinalizationQueue defines a map from block height to list of states to finalized */
export interface BlockHeightToFinalizationQueue {
  /** creationHeight is the block height that the state should be finalized */
  creationHeight: Long;
  /**
   * finalizationQueue is a list of states that are waiting to be finalized
   * when the block height becomes creationHeight
   */
  finalizationQueue: StateInfoIndex[];
}
export interface BlockHeightToFinalizationQueueProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.BlockHeightToFinalizationQueue";
  value: Uint8Array;
}
/** BlockHeightToFinalizationQueue defines a map from block height to list of states to finalized */
export interface BlockHeightToFinalizationQueueAmino {
  /** creationHeight is the block height that the state should be finalized */
  creationHeight: string;
  /**
   * finalizationQueue is a list of states that are waiting to be finalized
   * when the block height becomes creationHeight
   */
  finalizationQueue: StateInfoIndexAmino[];
}
export interface BlockHeightToFinalizationQueueAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.BlockHeightToFinalizationQueue";
  value: BlockHeightToFinalizationQueueAmino;
}
/** BlockHeightToFinalizationQueue defines a map from block height to list of states to finalized */
export interface BlockHeightToFinalizationQueueSDKType {
  creationHeight: Long;
  finalizationQueue: StateInfoIndexSDKType[];
}
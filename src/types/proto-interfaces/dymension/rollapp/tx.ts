import { TokenMetadata, TokenMetadataAmino, TokenMetadataSDKType } from "./bank";
import { GenesisAccount, GenesisAccountAmino, GenesisAccountSDKType } from "./rollapp";
import { BlockDescriptors, BlockDescriptorsAmino, BlockDescriptorsSDKType } from "./block_descriptor";
import { Long } from "../../helpers";
/** MsgCreateRollapp creates a new rollapp chain on the hub. */
export interface MsgCreateRollapp {
  /** creator is the bech32-encoded address of the rollapp creator */
  creator: string;
  /**
   * rollappId is the unique identifier of the rollapp chain.
   * The rollappId follows the same standard as cosmos chain_id
   */
  rollappId: string;
  /** @deprecated */
  codeStamp: string;
  /** genesisPath is the description of the genesis file location on the DA */
  /** @deprecated */
  genesisPath: string;
  /**
   * maxWithholdingBlocks is the maximum number of blocks for
   * an active sequencer to send a state update (MsgUpdateState)
   */
  /** @deprecated */
  maxWithholdingBlocks: Long;
  /** maxSequencers is the maximum number of sequencers */
  maxSequencers: Long;
  /**
   * permissionedAddresses is a bech32-encoded address list of the
   * sequencers that are allowed to serve this rollappId.
   * In the case of an empty list, the rollapp is considered permissionless
   */
  permissionedAddresses: string[];
  /** metadata provides the client information for all the registered tokens. */
  metadatas: TokenMetadata[];
  /** genesis_accounts for the rollapp on the hub */
  genesisAccounts: GenesisAccount[];
}
export interface MsgCreateRollappProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.MsgCreateRollapp";
  value: Uint8Array;
}
/** MsgCreateRollapp creates a new rollapp chain on the hub. */
export interface MsgCreateRollappAmino {
  /** creator is the bech32-encoded address of the rollapp creator */
  creator: string;
  /**
   * rollappId is the unique identifier of the rollapp chain.
   * The rollappId follows the same standard as cosmos chain_id
   */
  rollappId: string;
  /** @deprecated */
  codeStamp: string;
  /** genesisPath is the description of the genesis file location on the DA */
  /** @deprecated */
  genesisPath: string;
  /**
   * maxWithholdingBlocks is the maximum number of blocks for
   * an active sequencer to send a state update (MsgUpdateState)
   */
  /** @deprecated */
  maxWithholdingBlocks: string;
  /** maxSequencers is the maximum number of sequencers */
  maxSequencers: string;
  /**
   * permissionedAddresses is a bech32-encoded address list of the
   * sequencers that are allowed to serve this rollappId.
   * In the case of an empty list, the rollapp is considered permissionless
   */
  permissionedAddresses: string[];
  /** metadata provides the client information for all the registered tokens. */
  metadatas: TokenMetadataAmino[];
  /** genesis_accounts for the rollapp on the hub */
  genesis_accounts: GenesisAccountAmino[];
}
export interface MsgCreateRollappAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.MsgCreateRollapp";
  value: MsgCreateRollappAmino;
}
/** MsgCreateRollapp creates a new rollapp chain on the hub. */
export interface MsgCreateRollappSDKType {
  creator: string;
  rollappId: string;
  /** @deprecated */
  codeStamp: string;
  /** @deprecated */
  genesisPath: string;
  /** @deprecated */
  maxWithholdingBlocks: Long;
  maxSequencers: Long;
  permissionedAddresses: string[];
  metadatas: TokenMetadataSDKType[];
  genesis_accounts: GenesisAccountSDKType[];
}
export interface MsgCreateRollappResponse {}
export interface MsgCreateRollappResponseProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.MsgCreateRollappResponse";
  value: Uint8Array;
}
export interface MsgCreateRollappResponseAmino {}
export interface MsgCreateRollappResponseAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.MsgCreateRollappResponse";
  value: MsgCreateRollappResponseAmino;
}
export interface MsgCreateRollappResponseSDKType {}
/**
 * MsgUpdateState updates a rollapp state with a block batch.
 * a block batch is a list of ordered blocks (by height)
 */
export interface MsgUpdateState {
  /** creator is the bech32-encoded address of the sequencer sending the update */
  creator: string;
  /**
   * rollappId is the rollapp that the sequencer belongs to and asking to update
   * The rollappId follows the same standard as cosmos chain_id
   */
  rollappId: string;
  /** startHeight is the block height of the first block in the batch */
  startHeight: Long;
  /** numBlocks is the number of blocks included in this batch update */
  numBlocks: Long;
  /** DAPath is the description of the location on the DA layer */
  DAPath: string;
  /** version is the version of the rollapp */
  version: Long;
  /**
   * BDs is a list of block description objects (one per block)
   * the list must be ordered by height, starting from startHeight to startHeight+numBlocks-1
   */
  BDs: BlockDescriptors;
}
export interface MsgUpdateStateProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.MsgUpdateState";
  value: Uint8Array;
}
/**
 * MsgUpdateState updates a rollapp state with a block batch.
 * a block batch is a list of ordered blocks (by height)
 */
export interface MsgUpdateStateAmino {
  /** creator is the bech32-encoded address of the sequencer sending the update */
  creator: string;
  /**
   * rollappId is the rollapp that the sequencer belongs to and asking to update
   * The rollappId follows the same standard as cosmos chain_id
   */
  rollappId: string;
  /** startHeight is the block height of the first block in the batch */
  startHeight: string;
  /** numBlocks is the number of blocks included in this batch update */
  numBlocks: string;
  /** DAPath is the description of the location on the DA layer */
  DAPath: string;
  /** version is the version of the rollapp */
  version: string;
  /**
   * BDs is a list of block description objects (one per block)
   * the list must be ordered by height, starting from startHeight to startHeight+numBlocks-1
   */
  BDs?: BlockDescriptorsAmino;
}
export interface MsgUpdateStateAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.MsgUpdateState";
  value: MsgUpdateStateAmino;
}
/**
 * MsgUpdateState updates a rollapp state with a block batch.
 * a block batch is a list of ordered blocks (by height)
 */
export interface MsgUpdateStateSDKType {
  creator: string;
  rollappId: string;
  startHeight: Long;
  numBlocks: Long;
  DAPath: string;
  version: Long;
  BDs: BlockDescriptorsSDKType;
}
export interface MsgUpdateStateResponse {}
export interface MsgUpdateStateResponseProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.MsgUpdateStateResponse";
  value: Uint8Array;
}
export interface MsgUpdateStateResponseAmino {}
export interface MsgUpdateStateResponseAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.MsgUpdateStateResponse";
  value: MsgUpdateStateResponseAmino;
}
export interface MsgUpdateStateResponseSDKType {}
/** MsgRollappGenesisEvent is the message type for triggering the genesis event of the rollapp */
export interface MsgRollappGenesisEvent {
  /** address is the bech32-encoded address of the sender */
  address: string;
  /** channel_id is the rollapp channel id on the hub */
  channelId: string;
  /**
   * rollapp_id is the rollapp id we want to mint tokens on the hub.
   * Used for validation against channel_id to reduce error surface.
   */
  rollappId: string;
}
export interface MsgRollappGenesisEventProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.MsgRollappGenesisEvent";
  value: Uint8Array;
}
/** MsgRollappGenesisEvent is the message type for triggering the genesis event of the rollapp */
export interface MsgRollappGenesisEventAmino {
  /** address is the bech32-encoded address of the sender */
  address: string;
  /** channel_id is the rollapp channel id on the hub */
  channel_id: string;
  /**
   * rollapp_id is the rollapp id we want to mint tokens on the hub.
   * Used for validation against channel_id to reduce error surface.
   */
  rollapp_id: string;
}
export interface MsgRollappGenesisEventAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.MsgRollappGenesisEvent";
  value: MsgRollappGenesisEventAmino;
}
/** MsgRollappGenesisEvent is the message type for triggering the genesis event of the rollapp */
export interface MsgRollappGenesisEventSDKType {
  address: string;
  channel_id: string;
  rollapp_id: string;
}
export interface MsgRollappGenesisEventResponse {}
export interface MsgRollappGenesisEventResponseProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.MsgRollappGenesisEventResponse";
  value: Uint8Array;
}
export interface MsgRollappGenesisEventResponseAmino {}
export interface MsgRollappGenesisEventResponseAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.MsgRollappGenesisEventResponse";
  value: MsgRollappGenesisEventResponseAmino;
}
export interface MsgRollappGenesisEventResponseSDKType {}
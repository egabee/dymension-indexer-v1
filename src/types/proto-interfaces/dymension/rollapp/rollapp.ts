import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { TokenMetadata, TokenMetadataAmino, TokenMetadataSDKType } from "./bank";
import { StateInfoIndex, StateInfoIndexAmino, StateInfoIndexSDKType } from "./state_info";
import { Long } from "../../helpers";
/** GenesisAccount is a struct for the genesis account for the rollapp */
export interface GenesisAccount {
  /** amount of coins to be sent to the genesis address */
  amount: Coin;
  /** address is a bech-32 address of the genesis account */
  address: string;
}
export interface GenesisAccountProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.GenesisAccount";
  value: Uint8Array;
}
/** GenesisAccount is a struct for the genesis account for the rollapp */
export interface GenesisAccountAmino {
  /** amount of coins to be sent to the genesis address */
  amount?: CoinAmino;
  /** address is a bech-32 address of the genesis account */
  address: string;
}
export interface GenesisAccountAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.GenesisAccount";
  value: GenesisAccountAmino;
}
/** GenesisAccount is a struct for the genesis account for the rollapp */
export interface GenesisAccountSDKType {
  amount: CoinSDKType;
  address: string;
}
/** RollappGenesisState is a partial repr of the state the hub can expect the rollapp to be in upon genesis */
export interface RollappGenesisState {
  /** genesis_accounts is a list of token allocations */
  genesisAccounts: GenesisAccount[];
  /** is_genesis_event is a boolean that indicates if the genesis event has occured */
  isGenesisEvent: boolean;
}
export interface RollappGenesisStateProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.RollappGenesisState";
  value: Uint8Array;
}
/** RollappGenesisState is a partial repr of the state the hub can expect the rollapp to be in upon genesis */
export interface RollappGenesisStateAmino {
  /** genesis_accounts is a list of token allocations */
  genesis_accounts: GenesisAccountAmino[];
  /** is_genesis_event is a boolean that indicates if the genesis event has occured */
  is_genesis_event: boolean;
}
export interface RollappGenesisStateAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.RollappGenesisState";
  value: RollappGenesisStateAmino;
}
/** RollappGenesisState is a partial repr of the state the hub can expect the rollapp to be in upon genesis */
export interface RollappGenesisStateSDKType {
  genesis_accounts: GenesisAccountSDKType[];
  is_genesis_event: boolean;
}
/**
 * Rollapp defines a rollapp object. First the RollApp is created and then
 * sequencers can be created and attached. The RollApp is identified by rollappId
 */
export interface Rollapp {
  /**
   * The unique identifier of the rollapp chain.
   * The rollappId follows the same standard as cosmos chain_id.
   */
  rollappId: string;
  /** creator is the bech32-encoded address of the rollapp creator. */
  creator: string;
  /**
   * version is the software and configuration version.
   * starts from 1 and increases by one on every MsgUpdateState
   */
  version: Long;
  /** codeStamp is a generated hash for unique identification of the rollapp code. */
  /** @deprecated */
  codeStamp: string;
  /** genesisPath is the description of the genesis file location on the DA. */
  /** @deprecated */
  genesisPath: string;
  /**
   * maxWithholdingBlocks is the maximum number of blocks for
   * an active sequencer to send a state update (MsgUpdateState).
   */
  /** @deprecated */
  maxWithholdingBlocks: Long;
  /** maxSequencers is the maximum number of sequencers. */
  maxSequencers: Long;
  /**
   * permissionedAddresses is a bech32-encoded address list of the sequencers that are allowed to serve this rollappId.
   * In the case of an empty list, the rollapp is considered permissionless.
   */
  permissionedAddresses: string[];
  /** tokenMetadata is a list of TokenMetadata that are registered on this rollapp */
  tokenMetadata: TokenMetadata[];
  /** genesis_state is a partial repr of the state the hub can expect the rollapp to be in upon genesis */
  genesisState: RollappGenesisState;
  /** channel_id will be set to the canonical IBC channel of the rollapp. */
  channelId: string;
  /** frozen is a boolean that indicates if the rollapp is frozen. */
  frozen: boolean;
}
export interface RollappProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.Rollapp";
  value: Uint8Array;
}
/**
 * Rollapp defines a rollapp object. First the RollApp is created and then
 * sequencers can be created and attached. The RollApp is identified by rollappId
 */
export interface RollappAmino {
  /**
   * The unique identifier of the rollapp chain.
   * The rollappId follows the same standard as cosmos chain_id.
   */
  rollappId: string;
  /** creator is the bech32-encoded address of the rollapp creator. */
  creator: string;
  /**
   * version is the software and configuration version.
   * starts from 1 and increases by one on every MsgUpdateState
   */
  version: string;
  /** codeStamp is a generated hash for unique identification of the rollapp code. */
  /** @deprecated */
  codeStamp: string;
  /** genesisPath is the description of the genesis file location on the DA. */
  /** @deprecated */
  genesisPath: string;
  /**
   * maxWithholdingBlocks is the maximum number of blocks for
   * an active sequencer to send a state update (MsgUpdateState).
   */
  /** @deprecated */
  maxWithholdingBlocks: string;
  /** maxSequencers is the maximum number of sequencers. */
  maxSequencers: string;
  /**
   * permissionedAddresses is a bech32-encoded address list of the sequencers that are allowed to serve this rollappId.
   * In the case of an empty list, the rollapp is considered permissionless.
   */
  permissionedAddresses: string[];
  /** tokenMetadata is a list of TokenMetadata that are registered on this rollapp */
  tokenMetadata: TokenMetadataAmino[];
  /** genesis_state is a partial repr of the state the hub can expect the rollapp to be in upon genesis */
  genesis_state?: RollappGenesisStateAmino;
  /** channel_id will be set to the canonical IBC channel of the rollapp. */
  channel_id: string;
  /** frozen is a boolean that indicates if the rollapp is frozen. */
  frozen: boolean;
}
export interface RollappAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.Rollapp";
  value: RollappAmino;
}
/**
 * Rollapp defines a rollapp object. First the RollApp is created and then
 * sequencers can be created and attached. The RollApp is identified by rollappId
 */
export interface RollappSDKType {
  rollappId: string;
  creator: string;
  version: Long;
  /** @deprecated */
  codeStamp: string;
  /** @deprecated */
  genesisPath: string;
  /** @deprecated */
  maxWithholdingBlocks: Long;
  maxSequencers: Long;
  permissionedAddresses: string[];
  tokenMetadata: TokenMetadataSDKType[];
  genesis_state: RollappGenesisStateSDKType;
  channel_id: string;
  frozen: boolean;
}
/** Rollapp summary is a compact representation of Rollapp */
export interface RollappSummary {
  /**
   * The unique identifier of the rollapp chain.
   * The rollappId follows the same standard as cosmos chain_id.
   */
  rollappId: string;
  /** Defines the index of the last rollapp UpdateState. */
  latestStateIndex: StateInfoIndex;
  /** Defines the index of the last rollapp UpdateState that was finalized. */
  latestFinalizedStateIndex: StateInfoIndex;
}
export interface RollappSummaryProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.RollappSummary";
  value: Uint8Array;
}
/** Rollapp summary is a compact representation of Rollapp */
export interface RollappSummaryAmino {
  /**
   * The unique identifier of the rollapp chain.
   * The rollappId follows the same standard as cosmos chain_id.
   */
  rollappId: string;
  /** Defines the index of the last rollapp UpdateState. */
  latestStateIndex?: StateInfoIndexAmino;
  /** Defines the index of the last rollapp UpdateState that was finalized. */
  latestFinalizedStateIndex?: StateInfoIndexAmino;
}
export interface RollappSummaryAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.RollappSummary";
  value: RollappSummaryAmino;
}
/** Rollapp summary is a compact representation of Rollapp */
export interface RollappSummarySDKType {
  rollappId: string;
  latestStateIndex: StateInfoIndexSDKType;
  latestFinalizedStateIndex: StateInfoIndexSDKType;
}
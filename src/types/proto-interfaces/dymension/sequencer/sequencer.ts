import { Any, AnyAmino, AnySDKType } from "../../google/protobuf/any";
import { Description, DescriptionAmino, DescriptionSDKType } from "./description";
import { OperatingStatus } from "./operating_status";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long } from "../../helpers";
/**
 * Sequencer defines a sequencer identified by its' address (sequencerAddress).
 * The sequencer could be attached to only one rollapp (rollappId).
 */
export interface Sequencer {
  /** sequencerAddress is the bech32-encoded address of the sequencer account which is the account that the message was sent from. */
  sequencerAddress: string;
  /** pubkey is the public key of the sequencers' dymint client, as a Protobuf Any. */
  dymintPubKey: Any;
  /** rollappId defines the rollapp to which the sequencer belongs. */
  rollappId: string;
  /** description defines the descriptive terms for the sequencer. */
  description: Description;
  /** jailed defined whether the sequencer has been jailed from bonded status or not. */
  jailed: boolean;
  /** proposer defines whether the sequencer is a proposer or not. */
  proposer: boolean;
  /** status is the sequencer status (bonded/unbonding/unbonded). */
  status: OperatingStatus;
  /** tokens define the delegated tokens (incl. self-delegation). */
  tokens: Coin[];
  /** unbonding_height defines, if unbonding, the height at which this sequencer has begun unbonding. */
  unbondingHeight: Long;
  /** unbond_time defines, if unbonding, the min time for the sequencer to complete unbonding. */
  unbondTime: Date;
}
export interface SequencerProtoMsg {
  typeUrl: "/dymensionxyz.dymension.sequencer.Sequencer";
  value: Uint8Array;
}
/**
 * Sequencer defines a sequencer identified by its' address (sequencerAddress).
 * The sequencer could be attached to only one rollapp (rollappId).
 */
export interface SequencerAmino {
  /** sequencerAddress is the bech32-encoded address of the sequencer account which is the account that the message was sent from. */
  sequencerAddress: string;
  /** pubkey is the public key of the sequencers' dymint client, as a Protobuf Any. */
  dymintPubKey?: AnyAmino;
  /** rollappId defines the rollapp to which the sequencer belongs. */
  rollappId: string;
  /** description defines the descriptive terms for the sequencer. */
  description?: DescriptionAmino;
  /** jailed defined whether the sequencer has been jailed from bonded status or not. */
  jailed: boolean;
  /** proposer defines whether the sequencer is a proposer or not. */
  proposer: boolean;
  /** status is the sequencer status (bonded/unbonding/unbonded). */
  status: OperatingStatus;
  /** tokens define the delegated tokens (incl. self-delegation). */
  tokens: CoinAmino[];
  /** unbonding_height defines, if unbonding, the height at which this sequencer has begun unbonding. */
  unbonding_height: string;
  /** unbond_time defines, if unbonding, the min time for the sequencer to complete unbonding. */
  unbond_time?: Date;
}
export interface SequencerAminoMsg {
  type: "/dymensionxyz.dymension.sequencer.Sequencer";
  value: SequencerAmino;
}
/**
 * Sequencer defines a sequencer identified by its' address (sequencerAddress).
 * The sequencer could be attached to only one rollapp (rollappId).
 */
export interface SequencerSDKType {
  sequencerAddress: string;
  dymintPubKey: AnySDKType;
  rollappId: string;
  description: DescriptionSDKType;
  jailed: boolean;
  proposer: boolean;
  status: OperatingStatus;
  tokens: CoinSDKType[];
  unbonding_height: Long;
  unbond_time: Date;
}
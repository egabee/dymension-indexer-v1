import { Any, AnyAmino, AnySDKType } from "../../google/protobuf/any";
import { Description, DescriptionAmino, DescriptionSDKType } from "./description";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
/** MsgCreateSequencer defines a SDK message for creating a new sequencer. */
export interface MsgCreateSequencer {
  /** creator is the bech32-encoded address of the sequencer account which is the account that the message was sent from. */
  creator: string;
  /** pubkey is the public key of the sequencers' dymint client, as a Protobuf Any. */
  dymintPubKey: Any;
  /** rollappId defines the rollapp to which the sequencer belongs. */
  rollappId: string;
  /** description defines the descriptive terms for the sequencer. */
  description: Description;
  bond: Coin;
}
export interface MsgCreateSequencerProtoMsg {
  typeUrl: "/dymensionxyz.dymension.sequencer.MsgCreateSequencer";
  value: Uint8Array;
}
/** MsgCreateSequencer defines a SDK message for creating a new sequencer. */
export interface MsgCreateSequencerAmino {
  /** creator is the bech32-encoded address of the sequencer account which is the account that the message was sent from. */
  creator: string;
  /** pubkey is the public key of the sequencers' dymint client, as a Protobuf Any. */
  dymintPubKey?: AnyAmino;
  /** rollappId defines the rollapp to which the sequencer belongs. */
  rollappId: string;
  /** description defines the descriptive terms for the sequencer. */
  description?: DescriptionAmino;
  bond?: CoinAmino;
}
export interface MsgCreateSequencerAminoMsg {
  type: "/dymensionxyz.dymension.sequencer.MsgCreateSequencer";
  value: MsgCreateSequencerAmino;
}
/** MsgCreateSequencer defines a SDK message for creating a new sequencer. */
export interface MsgCreateSequencerSDKType {
  creator: string;
  dymintPubKey: AnySDKType;
  rollappId: string;
  description: DescriptionSDKType;
  bond: CoinSDKType;
}
export interface MsgCreateSequencerResponse {}
export interface MsgCreateSequencerResponseProtoMsg {
  typeUrl: "/dymensionxyz.dymension.sequencer.MsgCreateSequencerResponse";
  value: Uint8Array;
}
export interface MsgCreateSequencerResponseAmino {}
export interface MsgCreateSequencerResponseAminoMsg {
  type: "/dymensionxyz.dymension.sequencer.MsgCreateSequencerResponse";
  value: MsgCreateSequencerResponseAmino;
}
export interface MsgCreateSequencerResponseSDKType {}
/**
 * MsgUnbond defines a SDK message for performing an undelegation from a
 * bond and a sequencer.
 */
export interface MsgUnbond {
  creator: string;
}
export interface MsgUnbondProtoMsg {
  typeUrl: "/dymensionxyz.dymension.sequencer.MsgUnbond";
  value: Uint8Array;
}
/**
 * MsgUnbond defines a SDK message for performing an undelegation from a
 * bond and a sequencer.
 */
export interface MsgUnbondAmino {
  creator: string;
}
export interface MsgUnbondAminoMsg {
  type: "/dymensionxyz.dymension.sequencer.MsgUnbond";
  value: MsgUnbondAmino;
}
/**
 * MsgUnbond defines a SDK message for performing an undelegation from a
 * bond and a sequencer.
 */
export interface MsgUnbondSDKType {
  creator: string;
}
/** MsgUnbondResponse defines the Msg/Unbond response type. */
export interface MsgUnbondResponse {
  completionTime: Date;
}
export interface MsgUnbondResponseProtoMsg {
  typeUrl: "/dymensionxyz.dymension.sequencer.MsgUnbondResponse";
  value: Uint8Array;
}
/** MsgUnbondResponse defines the Msg/Unbond response type. */
export interface MsgUnbondResponseAmino {
  completion_time?: Date;
}
export interface MsgUnbondResponseAminoMsg {
  type: "/dymensionxyz.dymension.sequencer.MsgUnbondResponse";
  value: MsgUnbondResponseAmino;
}
/** MsgUnbondResponse defines the Msg/Unbond response type. */
export interface MsgUnbondResponseSDKType {
  completion_time: Date;
}
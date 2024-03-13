import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { Input, InputAmino, InputSDKType, Output, OutputAmino, OutputSDKType, Params, ParamsAmino, ParamsSDKType, SendEnabled, SendEnabledAmino, SendEnabledSDKType } from "./bank";
/** MsgSend represents a message to send coins from one account to another. */
export interface MsgSend {
  fromAddress: string;
  toAddress: string;
  amount: Coin[];
}
export interface MsgSendProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.MsgSend";
  value: Uint8Array;
}
/** MsgSend represents a message to send coins from one account to another. */
export interface MsgSendAmino {
  from_address: string;
  to_address: string;
  amount: CoinAmino[];
}
export interface MsgSendAminoMsg {
  type: "cosmos-sdk/MsgSend";
  value: MsgSendAmino;
}
/** MsgSend represents a message to send coins from one account to another. */
export interface MsgSendSDKType {
  from_address: string;
  to_address: string;
  amount: CoinSDKType[];
}
/** MsgSendResponse defines the Msg/Send response type. */
export interface MsgSendResponse {}
export interface MsgSendResponseProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.MsgSendResponse";
  value: Uint8Array;
}
/** MsgSendResponse defines the Msg/Send response type. */
export interface MsgSendResponseAmino {}
export interface MsgSendResponseAminoMsg {
  type: "cosmos-sdk/MsgSendResponse";
  value: MsgSendResponseAmino;
}
/** MsgSendResponse defines the Msg/Send response type. */
export interface MsgSendResponseSDKType {}
/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */
export interface MsgMultiSend {
  /**
   * Inputs, despite being `repeated`, only allows one sender input. This is
   * checked in MsgMultiSend's ValidateBasic.
   */
  inputs: Input[];
  outputs: Output[];
}
export interface MsgMultiSendProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend";
  value: Uint8Array;
}
/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */
export interface MsgMultiSendAmino {
  /**
   * Inputs, despite being `repeated`, only allows one sender input. This is
   * checked in MsgMultiSend's ValidateBasic.
   */
  inputs: InputAmino[];
  outputs: OutputAmino[];
}
export interface MsgMultiSendAminoMsg {
  type: "cosmos-sdk/MsgMultiSend";
  value: MsgMultiSendAmino;
}
/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */
export interface MsgMultiSendSDKType {
  inputs: InputSDKType[];
  outputs: OutputSDKType[];
}
/** MsgMultiSendResponse defines the Msg/MultiSend response type. */
export interface MsgMultiSendResponse {}
export interface MsgMultiSendResponseProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.MsgMultiSendResponse";
  value: Uint8Array;
}
/** MsgMultiSendResponse defines the Msg/MultiSend response type. */
export interface MsgMultiSendResponseAmino {}
export interface MsgMultiSendResponseAminoMsg {
  type: "cosmos-sdk/MsgMultiSendResponse";
  value: MsgMultiSendResponseAmino;
}
/** MsgMultiSendResponse defines the Msg/MultiSend response type. */
export interface MsgMultiSendResponseSDKType {}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/bank parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsAmino {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/bank parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "cosmos-sdk/x/bank/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseSDKType {}
/**
 * MsgSetSendEnabled is the Msg/SetSendEnabled request type.
 * 
 * Only entries to add/update/delete need to be included.
 * Existing SendEnabled entries that are not included in this
 * message are left unchanged.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgSetSendEnabled {
  /** authority is the address that controls the module. */
  authority: string;
  /** send_enabled is the list of entries to add or update. */
  sendEnabled: SendEnabled[];
  /**
   * use_default_for is a list of denoms that should use the params.default_send_enabled value.
   * Denoms listed here will have their SendEnabled entries deleted.
   * If a denom is included that doesn't have a SendEnabled entry,
   * it will be ignored.
   */
  useDefaultFor: string[];
}
export interface MsgSetSendEnabledProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.MsgSetSendEnabled";
  value: Uint8Array;
}
/**
 * MsgSetSendEnabled is the Msg/SetSendEnabled request type.
 * 
 * Only entries to add/update/delete need to be included.
 * Existing SendEnabled entries that are not included in this
 * message are left unchanged.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgSetSendEnabledAmino {
  /** authority is the address that controls the module. */
  authority: string;
  /** send_enabled is the list of entries to add or update. */
  send_enabled: SendEnabledAmino[];
  /**
   * use_default_for is a list of denoms that should use the params.default_send_enabled value.
   * Denoms listed here will have their SendEnabled entries deleted.
   * If a denom is included that doesn't have a SendEnabled entry,
   * it will be ignored.
   */
  use_default_for: string[];
}
export interface MsgSetSendEnabledAminoMsg {
  type: "cosmos-sdk/MsgSetSendEnabled";
  value: MsgSetSendEnabledAmino;
}
/**
 * MsgSetSendEnabled is the Msg/SetSendEnabled request type.
 * 
 * Only entries to add/update/delete need to be included.
 * Existing SendEnabled entries that are not included in this
 * message are left unchanged.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgSetSendEnabledSDKType {
  authority: string;
  send_enabled: SendEnabledSDKType[];
  use_default_for: string[];
}
/**
 * MsgSetSendEnabledResponse defines the Msg/SetSendEnabled response type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgSetSendEnabledResponse {}
export interface MsgSetSendEnabledResponseProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.MsgSetSendEnabledResponse";
  value: Uint8Array;
}
/**
 * MsgSetSendEnabledResponse defines the Msg/SetSendEnabled response type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgSetSendEnabledResponseAmino {}
export interface MsgSetSendEnabledResponseAminoMsg {
  type: "cosmos-sdk/MsgSetSendEnabledResponse";
  value: MsgSetSendEnabledResponseAmino;
}
/**
 * MsgSetSendEnabledResponse defines the Msg/SetSendEnabled response type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgSetSendEnabledResponseSDKType {}
/**
 * MsgBurn defines a message for burning coins.
 * 
 * Since: cosmos-sdk 0.51
 */
export interface MsgBurn {
  fromAddress: string;
  amount: Coin[];
}
export interface MsgBurnProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.MsgBurn";
  value: Uint8Array;
}
/**
 * MsgBurn defines a message for burning coins.
 * 
 * Since: cosmos-sdk 0.51
 */
export interface MsgBurnAmino {
  from_address: string;
  amount: CoinAmino[];
}
export interface MsgBurnAminoMsg {
  type: "cosmos-sdk/MsgBurn";
  value: MsgBurnAmino;
}
/**
 * MsgBurn defines a message for burning coins.
 * 
 * Since: cosmos-sdk 0.51
 */
export interface MsgBurnSDKType {
  from_address: string;
  amount: CoinSDKType[];
}
/**
 * MsgBurnResponse defines the Msg/Burn response type.
 * 
 * Since: cosmos-sdk 0.51
 */
export interface MsgBurnResponse {}
export interface MsgBurnResponseProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.MsgBurnResponse";
  value: Uint8Array;
}
/**
 * MsgBurnResponse defines the Msg/Burn response type.
 * 
 * Since: cosmos-sdk 0.51
 */
export interface MsgBurnResponseAmino {}
export interface MsgBurnResponseAminoMsg {
  type: "cosmos-sdk/MsgBurnResponse";
  value: MsgBurnResponseAmino;
}
/**
 * MsgBurnResponse defines the Msg/Burn response type.
 * 
 * Since: cosmos-sdk 0.51
 */
export interface MsgBurnResponseSDKType {}
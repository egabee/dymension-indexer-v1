import { Params, ParamsAmino, ParamsSDKType } from "./feemarket";
/** MsgUpdateParams defines a Msg for updating the x/feemarket module parameters. */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the x/feemarket parameters to update.
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/ethermint.feemarket.v1.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams defines a Msg for updating the x/feemarket module parameters. */
export interface MsgUpdateParamsAmino {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the x/feemarket parameters to update.
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/ethermint.feemarket.v1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams defines a Msg for updating the x/feemarket module parameters. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/ethermint.feemarket.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/ethermint.feemarket.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
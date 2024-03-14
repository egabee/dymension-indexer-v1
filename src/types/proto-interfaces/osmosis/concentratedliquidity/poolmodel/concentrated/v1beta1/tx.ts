import { Long } from "../../../../../helpers";
/** ===================== MsgCreateConcentratedPool */
export interface MsgCreateConcentratedPool {
  sender: string;
  denom0: string;
  denom1: string;
  tickSpacing: Long;
  spreadFactor: string;
}
export interface MsgCreateConcentratedPoolProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool";
  value: Uint8Array;
}
/** ===================== MsgCreateConcentratedPool */
export interface MsgCreateConcentratedPoolAmino {
  sender: string;
  denom0: string;
  denom1: string;
  tick_spacing: string;
  spread_factor: string;
}
export interface MsgCreateConcentratedPoolAminoMsg {
  type: "osmosis/concentratedliquidity/poolmodel/concentrated/create-concentrated-pool";
  value: MsgCreateConcentratedPoolAmino;
}
/** ===================== MsgCreateConcentratedPool */
export interface MsgCreateConcentratedPoolSDKType {
  sender: string;
  denom0: string;
  denom1: string;
  tick_spacing: Long;
  spread_factor: string;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateConcentratedPoolResponse {
  poolId: Long;
}
export interface MsgCreateConcentratedPoolResponseProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPoolResponse";
  value: Uint8Array;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateConcentratedPoolResponseAmino {
  pool_id: string;
}
export interface MsgCreateConcentratedPoolResponseAminoMsg {
  type: "osmosis/concentratedliquidity/poolmodel/concentrated/create-concentrated-pool-response";
  value: MsgCreateConcentratedPoolResponseAmino;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateConcentratedPoolResponseSDKType {
  pool_id: Long;
}
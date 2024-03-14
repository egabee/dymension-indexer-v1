import { Long } from "../../../../helpers";
/** ===================== MsgCreateCosmwasmPool */
export interface MsgCreateCosmWasmPool {
  codeId: Long;
  instantiateMsg: Uint8Array;
  sender: string;
}
export interface MsgCreateCosmWasmPoolProtoMsg {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.MsgCreateCosmWasmPool";
  value: Uint8Array;
}
/** ===================== MsgCreateCosmwasmPool */
export interface MsgCreateCosmWasmPoolAmino {
  code_id: string;
  instantiate_msg: Uint8Array;
  sender: string;
}
export interface MsgCreateCosmWasmPoolAminoMsg {
  type: "osmosis/cosmwasmpool/create-cosm-wasm-pool";
  value: MsgCreateCosmWasmPoolAmino;
}
/** ===================== MsgCreateCosmwasmPool */
export interface MsgCreateCosmWasmPoolSDKType {
  code_id: Long;
  instantiate_msg: Uint8Array;
  sender: string;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateCosmWasmPoolResponse {
  poolId: Long;
}
export interface MsgCreateCosmWasmPoolResponseProtoMsg {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.MsgCreateCosmWasmPoolResponse";
  value: Uint8Array;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateCosmWasmPoolResponseAmino {
  pool_id: string;
}
export interface MsgCreateCosmWasmPoolResponseAminoMsg {
  type: "osmosis/cosmwasmpool/create-cosm-wasm-pool-response";
  value: MsgCreateCosmWasmPoolResponseAmino;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateCosmWasmPoolResponseSDKType {
  pool_id: Long;
}
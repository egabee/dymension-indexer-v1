export interface Params {
  allowedAsyncAckContracts: string[];
}
export interface ParamsProtoMsg {
  typeUrl: "/osmosis.ibchooks.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  allowed_async_ack_contracts: string[];
}
export interface ParamsAminoMsg {
  type: "osmosis/ibchooks/params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  allowed_async_ack_contracts: string[];
}
import { Long } from "../../../helpers";
export interface SwapAmountInRoute {
  poolId: Long;
  tokenOutDenom: string;
}
export interface SwapAmountInRouteProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.SwapAmountInRoute";
  value: Uint8Array;
}
export interface SwapAmountInRouteAmino {
  pool_id: string;
  token_out_denom: string;
}
export interface SwapAmountInRouteAminoMsg {
  type: "osmosis/poolmanager/swap-amount-in-route";
  value: SwapAmountInRouteAmino;
}
export interface SwapAmountInRouteSDKType {
  pool_id: Long;
  token_out_denom: string;
}
export interface SwapAmountOutRoute {
  poolId: Long;
  tokenInDenom: string;
}
export interface SwapAmountOutRouteProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.SwapAmountOutRoute";
  value: Uint8Array;
}
export interface SwapAmountOutRouteAmino {
  pool_id: string;
  token_in_denom: string;
}
export interface SwapAmountOutRouteAminoMsg {
  type: "osmosis/poolmanager/swap-amount-out-route";
  value: SwapAmountOutRouteAmino;
}
export interface SwapAmountOutRouteSDKType {
  pool_id: Long;
  token_in_denom: string;
}
export interface SwapAmountInSplitRoute {
  pools: SwapAmountInRoute[];
  tokenInAmount: string;
}
export interface SwapAmountInSplitRouteProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.SwapAmountInSplitRoute";
  value: Uint8Array;
}
export interface SwapAmountInSplitRouteAmino {
  pools: SwapAmountInRouteAmino[];
  token_in_amount: string;
}
export interface SwapAmountInSplitRouteAminoMsg {
  type: "osmosis/poolmanager/swap-amount-in-split-route";
  value: SwapAmountInSplitRouteAmino;
}
export interface SwapAmountInSplitRouteSDKType {
  pools: SwapAmountInRouteSDKType[];
  token_in_amount: string;
}
export interface SwapAmountOutSplitRoute {
  pools: SwapAmountOutRoute[];
  tokenOutAmount: string;
}
export interface SwapAmountOutSplitRouteProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.SwapAmountOutSplitRoute";
  value: Uint8Array;
}
export interface SwapAmountOutSplitRouteAmino {
  pools: SwapAmountOutRouteAmino[];
  token_out_amount: string;
}
export interface SwapAmountOutSplitRouteAminoMsg {
  type: "osmosis/poolmanager/swap-amount-out-split-route";
  value: SwapAmountOutSplitRouteAmino;
}
export interface SwapAmountOutSplitRouteSDKType {
  pools: SwapAmountOutRouteSDKType[];
  token_out_amount: string;
}
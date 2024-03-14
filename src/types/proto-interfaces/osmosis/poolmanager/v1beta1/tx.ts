import { SwapAmountInRoute, SwapAmountInRouteAmino, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteAmino, SwapAmountOutRouteSDKType, SwapAmountInSplitRoute, SwapAmountInSplitRouteAmino, SwapAmountInSplitRouteSDKType, SwapAmountOutSplitRoute, SwapAmountOutSplitRouteAmino, SwapAmountOutSplitRouteSDKType } from "./swap_route";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
/** ===================== MsgSwapExactAmountIn */
export interface MsgSwapExactAmountIn {
  sender: string;
  routes: SwapAmountInRoute[];
  tokenIn: Coin;
  tokenOutMinAmount: string;
}
export interface MsgSwapExactAmountInProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn";
  value: Uint8Array;
}
/** ===================== MsgSwapExactAmountIn */
export interface MsgSwapExactAmountInAmino {
  sender: string;
  routes: SwapAmountInRouteAmino[];
  token_in?: CoinAmino;
  token_out_min_amount: string;
}
export interface MsgSwapExactAmountInAminoMsg {
  type: "osmosis/poolmanager/swap-exact-amount-in";
  value: MsgSwapExactAmountInAmino;
}
/** ===================== MsgSwapExactAmountIn */
export interface MsgSwapExactAmountInSDKType {
  sender: string;
  routes: SwapAmountInRouteSDKType[];
  token_in: CoinSDKType;
  token_out_min_amount: string;
}
export interface MsgSwapExactAmountInResponse {
  tokenOutAmount: string;
}
export interface MsgSwapExactAmountInResponseProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountInResponse";
  value: Uint8Array;
}
export interface MsgSwapExactAmountInResponseAmino {
  token_out_amount: string;
}
export interface MsgSwapExactAmountInResponseAminoMsg {
  type: "osmosis/poolmanager/swap-exact-amount-in-response";
  value: MsgSwapExactAmountInResponseAmino;
}
export interface MsgSwapExactAmountInResponseSDKType {
  token_out_amount: string;
}
/** ===================== MsgSplitRouteSwapExactAmountIn */
export interface MsgSplitRouteSwapExactAmountIn {
  sender: string;
  routes: SwapAmountInSplitRoute[];
  tokenInDenom: string;
  tokenOutMinAmount: string;
}
export interface MsgSplitRouteSwapExactAmountInProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn";
  value: Uint8Array;
}
/** ===================== MsgSplitRouteSwapExactAmountIn */
export interface MsgSplitRouteSwapExactAmountInAmino {
  sender: string;
  routes: SwapAmountInSplitRouteAmino[];
  token_in_denom: string;
  token_out_min_amount: string;
}
export interface MsgSplitRouteSwapExactAmountInAminoMsg {
  type: "osmosis/poolmanager/split-amount-in";
  value: MsgSplitRouteSwapExactAmountInAmino;
}
/** ===================== MsgSplitRouteSwapExactAmountIn */
export interface MsgSplitRouteSwapExactAmountInSDKType {
  sender: string;
  routes: SwapAmountInSplitRouteSDKType[];
  token_in_denom: string;
  token_out_min_amount: string;
}
export interface MsgSplitRouteSwapExactAmountInResponse {
  tokenOutAmount: string;
}
export interface MsgSplitRouteSwapExactAmountInResponseProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountInResponse";
  value: Uint8Array;
}
export interface MsgSplitRouteSwapExactAmountInResponseAmino {
  token_out_amount: string;
}
export interface MsgSplitRouteSwapExactAmountInResponseAminoMsg {
  type: "osmosis/poolmanager/split-route-swap-exact-amount-in-response";
  value: MsgSplitRouteSwapExactAmountInResponseAmino;
}
export interface MsgSplitRouteSwapExactAmountInResponseSDKType {
  token_out_amount: string;
}
/** ===================== MsgSwapExactAmountOut */
export interface MsgSwapExactAmountOut {
  sender: string;
  routes: SwapAmountOutRoute[];
  tokenInMaxAmount: string;
  tokenOut: Coin;
}
export interface MsgSwapExactAmountOutProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut";
  value: Uint8Array;
}
/** ===================== MsgSwapExactAmountOut */
export interface MsgSwapExactAmountOutAmino {
  sender: string;
  routes: SwapAmountOutRouteAmino[];
  token_in_max_amount: string;
  token_out?: CoinAmino;
}
export interface MsgSwapExactAmountOutAminoMsg {
  type: "osmosis/poolmanager/swap-exact-amount-out";
  value: MsgSwapExactAmountOutAmino;
}
/** ===================== MsgSwapExactAmountOut */
export interface MsgSwapExactAmountOutSDKType {
  sender: string;
  routes: SwapAmountOutRouteSDKType[];
  token_in_max_amount: string;
  token_out: CoinSDKType;
}
export interface MsgSwapExactAmountOutResponse {
  tokenInAmount: string;
}
export interface MsgSwapExactAmountOutResponseProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOutResponse";
  value: Uint8Array;
}
export interface MsgSwapExactAmountOutResponseAmino {
  token_in_amount: string;
}
export interface MsgSwapExactAmountOutResponseAminoMsg {
  type: "osmosis/poolmanager/swap-exact-amount-out-response";
  value: MsgSwapExactAmountOutResponseAmino;
}
export interface MsgSwapExactAmountOutResponseSDKType {
  token_in_amount: string;
}
/** ===================== MsgSplitRouteSwapExactAmountOut */
export interface MsgSplitRouteSwapExactAmountOut {
  sender: string;
  routes: SwapAmountOutSplitRoute[];
  tokenOutDenom: string;
  tokenInMaxAmount: string;
}
export interface MsgSplitRouteSwapExactAmountOutProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut";
  value: Uint8Array;
}
/** ===================== MsgSplitRouteSwapExactAmountOut */
export interface MsgSplitRouteSwapExactAmountOutAmino {
  sender: string;
  routes: SwapAmountOutSplitRouteAmino[];
  token_out_denom: string;
  token_in_max_amount: string;
}
export interface MsgSplitRouteSwapExactAmountOutAminoMsg {
  type: "osmosis/poolmanager/split-amount-out";
  value: MsgSplitRouteSwapExactAmountOutAmino;
}
/** ===================== MsgSplitRouteSwapExactAmountOut */
export interface MsgSplitRouteSwapExactAmountOutSDKType {
  sender: string;
  routes: SwapAmountOutSplitRouteSDKType[];
  token_out_denom: string;
  token_in_max_amount: string;
}
export interface MsgSplitRouteSwapExactAmountOutResponse {
  tokenInAmount: string;
}
export interface MsgSplitRouteSwapExactAmountOutResponseProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOutResponse";
  value: Uint8Array;
}
export interface MsgSplitRouteSwapExactAmountOutResponseAmino {
  token_in_amount: string;
}
export interface MsgSplitRouteSwapExactAmountOutResponseAminoMsg {
  type: "osmosis/poolmanager/split-route-swap-exact-amount-out-response";
  value: MsgSplitRouteSwapExactAmountOutResponseAmino;
}
export interface MsgSplitRouteSwapExactAmountOutResponseSDKType {
  token_in_amount: string;
}
/** ===================== MsgSetDenomPairTakerFee */
export interface MsgSetDenomPairTakerFee {
  sender: string;
  denomPairTakerFee: DenomPairTakerFee[];
}
export interface MsgSetDenomPairTakerFeeProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFee";
  value: Uint8Array;
}
/** ===================== MsgSetDenomPairTakerFee */
export interface MsgSetDenomPairTakerFeeAmino {
  sender: string;
  denom_pair_taker_fee: DenomPairTakerFeeAmino[];
}
export interface MsgSetDenomPairTakerFeeAminoMsg {
  type: "osmosis/poolmanager/set-denom-pair-taker-fee";
  value: MsgSetDenomPairTakerFeeAmino;
}
/** ===================== MsgSetDenomPairTakerFee */
export interface MsgSetDenomPairTakerFeeSDKType {
  sender: string;
  denom_pair_taker_fee: DenomPairTakerFeeSDKType[];
}
export interface MsgSetDenomPairTakerFeeResponse {
  success: boolean;
}
export interface MsgSetDenomPairTakerFeeResponseProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFeeResponse";
  value: Uint8Array;
}
export interface MsgSetDenomPairTakerFeeResponseAmino {
  success: boolean;
}
export interface MsgSetDenomPairTakerFeeResponseAminoMsg {
  type: "osmosis/poolmanager/set-denom-pair-taker-fee-response";
  value: MsgSetDenomPairTakerFeeResponseAmino;
}
export interface MsgSetDenomPairTakerFeeResponseSDKType {
  success: boolean;
}
export interface DenomPairTakerFee {
  /**
   * denom0 and denom1 get automatically lexigographically sorted
   * when being stored, so the order of input here does not matter.
   */
  denom0: string;
  denom1: string;
  takerFee: string;
}
export interface DenomPairTakerFeeProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.DenomPairTakerFee";
  value: Uint8Array;
}
export interface DenomPairTakerFeeAmino {
  /**
   * denom0 and denom1 get automatically lexigographically sorted
   * when being stored, so the order of input here does not matter.
   */
  denom0: string;
  denom1: string;
  taker_fee: string;
}
export interface DenomPairTakerFeeAminoMsg {
  type: "osmosis/poolmanager/denom-pair-taker-fee";
  value: DenomPairTakerFeeAmino;
}
export interface DenomPairTakerFeeSDKType {
  denom0: string;
  denom1: string;
  taker_fee: string;
}
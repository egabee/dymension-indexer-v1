import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
/** ===================== SwapExactAmountIn */
export interface SwapExactAmountIn {
  sender: string;
  /** token_in is the token to be sent to the pool. */
  tokenIn: Coin;
  /** token_out_denom is the token denom to be received from the pool. */
  tokenOutDenom: string;
  /**
   * token_out_min_amount is the minimum amount of token_out to be received from
   * the pool.
   */
  tokenOutMinAmount: string;
  /** swap_fee is the swap fee for this swap estimate. */
  swapFee: string;
}
export interface SwapExactAmountInProtoMsg {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.SwapExactAmountIn";
  value: Uint8Array;
}
/** ===================== SwapExactAmountIn */
export interface SwapExactAmountInAmino {
  sender: string;
  /** token_in is the token to be sent to the pool. */
  token_in?: CoinAmino;
  /** token_out_denom is the token denom to be received from the pool. */
  token_out_denom: string;
  /**
   * token_out_min_amount is the minimum amount of token_out to be received from
   * the pool.
   */
  token_out_min_amount: string;
  /** swap_fee is the swap fee for this swap estimate. */
  swap_fee: string;
}
export interface SwapExactAmountInAminoMsg {
  type: "osmosis/cosmwasmpool/swap-exact-amount-in";
  value: SwapExactAmountInAmino;
}
/** ===================== SwapExactAmountIn */
export interface SwapExactAmountInSDKType {
  sender: string;
  token_in: CoinSDKType;
  token_out_denom: string;
  token_out_min_amount: string;
  swap_fee: string;
}
export interface SwapExactAmountInSudoMsg {
  /**
   * swap_exact_amount_in is the structure containing all the request
   * information for this message.
   */
  swapExactAmountIn: SwapExactAmountIn;
}
export interface SwapExactAmountInSudoMsgProtoMsg {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.SwapExactAmountInSudoMsg";
  value: Uint8Array;
}
export interface SwapExactAmountInSudoMsgAmino {
  /**
   * swap_exact_amount_in is the structure containing all the request
   * information for this message.
   */
  swap_exact_amount_in?: SwapExactAmountInAmino;
}
export interface SwapExactAmountInSudoMsgAminoMsg {
  type: "osmosis/cosmwasmpool/swap-exact-amount-in-sudo-msg";
  value: SwapExactAmountInSudoMsgAmino;
}
export interface SwapExactAmountInSudoMsgSDKType {
  swap_exact_amount_in: SwapExactAmountInSDKType;
}
export interface SwapExactAmountInSudoMsgResponse {
  /** token_out_amount is the token out computed from this swap estimate call. */
  tokenOutAmount: string;
}
export interface SwapExactAmountInSudoMsgResponseProtoMsg {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.SwapExactAmountInSudoMsgResponse";
  value: Uint8Array;
}
export interface SwapExactAmountInSudoMsgResponseAmino {
  /** token_out_amount is the token out computed from this swap estimate call. */
  token_out_amount: string;
}
export interface SwapExactAmountInSudoMsgResponseAminoMsg {
  type: "osmosis/cosmwasmpool/swap-exact-amount-in-sudo-msg-response";
  value: SwapExactAmountInSudoMsgResponseAmino;
}
export interface SwapExactAmountInSudoMsgResponseSDKType {
  token_out_amount: string;
}
/** ===================== SwapExactAmountOut */
export interface SwapExactAmountOut {
  sender: string;
  /** token_out is the token to be sent out of the pool. */
  tokenOut: Coin;
  /** token_in_denom is the token denom to be sent too the pool. */
  tokenInDenom: string;
  /**
   * token_in_max_amount is the maximum amount of token_in to be sent to the
   * pool.
   */
  tokenInMaxAmount: string;
  /** swap_fee is the swap fee for this swap estimate. */
  swapFee: string;
}
export interface SwapExactAmountOutProtoMsg {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.SwapExactAmountOut";
  value: Uint8Array;
}
/** ===================== SwapExactAmountOut */
export interface SwapExactAmountOutAmino {
  sender: string;
  /** token_out is the token to be sent out of the pool. */
  token_out?: CoinAmino;
  /** token_in_denom is the token denom to be sent too the pool. */
  token_in_denom: string;
  /**
   * token_in_max_amount is the maximum amount of token_in to be sent to the
   * pool.
   */
  token_in_max_amount: string;
  /** swap_fee is the swap fee for this swap estimate. */
  swap_fee: string;
}
export interface SwapExactAmountOutAminoMsg {
  type: "osmosis/cosmwasmpool/swap-exact-amount-out";
  value: SwapExactAmountOutAmino;
}
/** ===================== SwapExactAmountOut */
export interface SwapExactAmountOutSDKType {
  sender: string;
  token_out: CoinSDKType;
  token_in_denom: string;
  token_in_max_amount: string;
  swap_fee: string;
}
export interface SwapExactAmountOutSudoMsg {
  /**
   * swap_exact_amount_out is the structure containing all the request
   * information for this message.
   */
  swapExactAmountOut: SwapExactAmountOut;
}
export interface SwapExactAmountOutSudoMsgProtoMsg {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.SwapExactAmountOutSudoMsg";
  value: Uint8Array;
}
export interface SwapExactAmountOutSudoMsgAmino {
  /**
   * swap_exact_amount_out is the structure containing all the request
   * information for this message.
   */
  swap_exact_amount_out?: SwapExactAmountOutAmino;
}
export interface SwapExactAmountOutSudoMsgAminoMsg {
  type: "osmosis/cosmwasmpool/swap-exact-amount-out-sudo-msg";
  value: SwapExactAmountOutSudoMsgAmino;
}
export interface SwapExactAmountOutSudoMsgSDKType {
  swap_exact_amount_out: SwapExactAmountOutSDKType;
}
export interface SwapExactAmountOutSudoMsgResponse {
  /** token_in_amount is the token in computed from this swap estimate call. */
  tokenInAmount: string;
}
export interface SwapExactAmountOutSudoMsgResponseProtoMsg {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.SwapExactAmountOutSudoMsgResponse";
  value: Uint8Array;
}
export interface SwapExactAmountOutSudoMsgResponseAmino {
  /** token_in_amount is the token in computed from this swap estimate call. */
  token_in_amount: string;
}
export interface SwapExactAmountOutSudoMsgResponseAminoMsg {
  type: "osmosis/cosmwasmpool/swap-exact-amount-out-sudo-msg-response";
  value: SwapExactAmountOutSudoMsgResponseAmino;
}
export interface SwapExactAmountOutSudoMsgResponseSDKType {
  token_in_amount: string;
}
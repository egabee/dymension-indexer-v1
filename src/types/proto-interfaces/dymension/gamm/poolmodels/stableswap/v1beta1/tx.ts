import { PoolParams, PoolParamsAmino, PoolParamsSDKType } from "../../../../../osmosis/gamm/poolmodels/stableswap/v1beta1/stableswap_pool";
import { Coin, CoinAmino, CoinSDKType } from "../../../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../../../helpers";
/** ===================== MsgCreatePool */
export interface MsgCreateStableswapPool {
  sender: string;
  poolParams: PoolParams;
  initialPoolLiquidity: Coin[];
  scalingFactors: Long[];
  futurePoolGovernor: string;
  scalingFactorController: string;
}
export interface MsgCreateStableswapPoolProtoMsg {
  typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool";
  value: Uint8Array;
}
/** ===================== MsgCreatePool */
export interface MsgCreateStableswapPoolAmino {
  sender: string;
  pool_params?: PoolParamsAmino;
  initial_pool_liquidity: CoinAmino[];
  scaling_factors: string[];
  future_pool_governor: string;
  scaling_factor_controller: string;
}
export interface MsgCreateStableswapPoolAminoMsg {
  type: "osmosis/gamm/create-stableswap-pool";
  value: MsgCreateStableswapPoolAmino;
}
/** ===================== MsgCreatePool */
export interface MsgCreateStableswapPoolSDKType {
  sender: string;
  pool_params: PoolParamsSDKType;
  initial_pool_liquidity: CoinSDKType[];
  scaling_factors: Long[];
  future_pool_governor: string;
  scaling_factor_controller: string;
}
/** Returns a poolID with custom poolName. */
export interface MsgCreateStableswapPoolResponse {
  poolId: Long;
}
export interface MsgCreateStableswapPoolResponseProtoMsg {
  typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPoolResponse";
  value: Uint8Array;
}
/** Returns a poolID with custom poolName. */
export interface MsgCreateStableswapPoolResponseAmino {
  pool_id: string;
}
export interface MsgCreateStableswapPoolResponseAminoMsg {
  type: "osmosis/gamm/create-stableswap-pool-response";
  value: MsgCreateStableswapPoolResponseAmino;
}
/** Returns a poolID with custom poolName. */
export interface MsgCreateStableswapPoolResponseSDKType {
  pool_id: Long;
}
/**
 * Sender must be the pool's scaling_factor_governor in order for the tx to
 * succeed. Adjusts stableswap scaling factors.
 */
export interface MsgStableSwapAdjustScalingFactors {
  sender: string;
  poolId: Long;
  scalingFactors: Long[];
}
export interface MsgStableSwapAdjustScalingFactorsProtoMsg {
  typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors";
  value: Uint8Array;
}
/**
 * Sender must be the pool's scaling_factor_governor in order for the tx to
 * succeed. Adjusts stableswap scaling factors.
 */
export interface MsgStableSwapAdjustScalingFactorsAmino {
  sender: string;
  pool_id: string;
  scaling_factors: string[];
}
export interface MsgStableSwapAdjustScalingFactorsAminoMsg {
  type: "osmosis/gamm/stableswap-adjust-scaling-factors";
  value: MsgStableSwapAdjustScalingFactorsAmino;
}
/**
 * Sender must be the pool's scaling_factor_governor in order for the tx to
 * succeed. Adjusts stableswap scaling factors.
 */
export interface MsgStableSwapAdjustScalingFactorsSDKType {
  sender: string;
  pool_id: Long;
  scaling_factors: Long[];
}
export interface MsgStableSwapAdjustScalingFactorsResponse {}
export interface MsgStableSwapAdjustScalingFactorsResponseProtoMsg {
  typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactorsResponse";
  value: Uint8Array;
}
export interface MsgStableSwapAdjustScalingFactorsResponseAmino {}
export interface MsgStableSwapAdjustScalingFactorsResponseAminoMsg {
  type: "osmosis/gamm/stable-swap-adjust-scaling-factors-response";
  value: MsgStableSwapAdjustScalingFactorsResponseAmino;
}
export interface MsgStableSwapAdjustScalingFactorsResponseSDKType {}
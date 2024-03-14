import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockAmino, PeriodLockSDKType } from "../../lockup/lock";
import { Long } from "../../../helpers";
/**
 * Position contains position's id, address, pool id, lower tick, upper tick
 * join time, and liquidity.
 */
export interface Position {
  positionId: Long;
  address: string;
  poolId: Long;
  lowerTick: Long;
  upperTick: Long;
  joinTime: Date;
  liquidity: string;
}
export interface PositionProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.Position";
  value: Uint8Array;
}
/**
 * Position contains position's id, address, pool id, lower tick, upper tick
 * join time, and liquidity.
 */
export interface PositionAmino {
  position_id: string;
  address: string;
  pool_id: string;
  lower_tick: string;
  upper_tick: string;
  join_time?: Date;
  liquidity: string;
}
export interface PositionAminoMsg {
  type: "osmosis/concentratedliquidity/position";
  value: PositionAmino;
}
/**
 * Position contains position's id, address, pool id, lower tick, upper tick
 * join time, and liquidity.
 */
export interface PositionSDKType {
  position_id: Long;
  address: string;
  pool_id: Long;
  lower_tick: Long;
  upper_tick: Long;
  join_time: Date;
  liquidity: string;
}
/**
 * FullPositionBreakdown returns:
 * - the position itself
 * - the amount the position translates in terms of asset0 and asset1
 * - the amount of claimable fees
 * - the amount of claimable incentives
 * - the amount of incentives that would be forfeited if the position was closed
 * now
 */
export interface FullPositionBreakdown {
  position: Position;
  asset0: Coin;
  asset1: Coin;
  claimableSpreadRewards: Coin[];
  claimableIncentives: Coin[];
  forfeitedIncentives: Coin[];
}
export interface FullPositionBreakdownProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.FullPositionBreakdown";
  value: Uint8Array;
}
/**
 * FullPositionBreakdown returns:
 * - the position itself
 * - the amount the position translates in terms of asset0 and asset1
 * - the amount of claimable fees
 * - the amount of claimable incentives
 * - the amount of incentives that would be forfeited if the position was closed
 * now
 */
export interface FullPositionBreakdownAmino {
  position?: PositionAmino;
  asset0?: CoinAmino;
  asset1?: CoinAmino;
  claimable_spread_rewards: CoinAmino[];
  claimable_incentives: CoinAmino[];
  forfeited_incentives: CoinAmino[];
}
export interface FullPositionBreakdownAminoMsg {
  type: "osmosis/concentratedliquidity/full-position-breakdown";
  value: FullPositionBreakdownAmino;
}
/**
 * FullPositionBreakdown returns:
 * - the position itself
 * - the amount the position translates in terms of asset0 and asset1
 * - the amount of claimable fees
 * - the amount of claimable incentives
 * - the amount of incentives that would be forfeited if the position was closed
 * now
 */
export interface FullPositionBreakdownSDKType {
  position: PositionSDKType;
  asset0: CoinSDKType;
  asset1: CoinSDKType;
  claimable_spread_rewards: CoinSDKType[];
  claimable_incentives: CoinSDKType[];
  forfeited_incentives: CoinSDKType[];
}
export interface PositionWithPeriodLock {
  position: Position;
  locks: PeriodLock;
}
export interface PositionWithPeriodLockProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionWithPeriodLock";
  value: Uint8Array;
}
export interface PositionWithPeriodLockAmino {
  position?: PositionAmino;
  locks?: PeriodLockAmino;
}
export interface PositionWithPeriodLockAminoMsg {
  type: "osmosis/concentratedliquidity/position-with-period-lock";
  value: PositionWithPeriodLockAmino;
}
export interface PositionWithPeriodLockSDKType {
  position: PositionSDKType;
  locks: PeriodLockSDKType;
}
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
/** ===================== MsgCreatePosition */
export interface MsgCreatePosition {
  poolId: Long;
  sender: string;
  lowerTick: Long;
  upperTick: Long;
  /**
   * tokens_provided is the amount of tokens provided for the position.
   * It must at a minimum be of length 1 (for a single sided position)
   * and at a maximum be of length 2 (for a position that straddles the current
   * tick).
   */
  tokensProvided: Coin[];
  tokenMinAmount0: string;
  tokenMinAmount1: string;
}
export interface MsgCreatePositionProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition";
  value: Uint8Array;
}
/** ===================== MsgCreatePosition */
export interface MsgCreatePositionAmino {
  pool_id: string;
  sender: string;
  lower_tick: string;
  upper_tick: string;
  /**
   * tokens_provided is the amount of tokens provided for the position.
   * It must at a minimum be of length 1 (for a single sided position)
   * and at a maximum be of length 2 (for a position that straddles the current
   * tick).
   */
  tokens_provided: CoinAmino[];
  token_min_amount0: string;
  token_min_amount1: string;
}
export interface MsgCreatePositionAminoMsg {
  type: "osmosis/cl-create-position";
  value: MsgCreatePositionAmino;
}
/** ===================== MsgCreatePosition */
export interface MsgCreatePositionSDKType {
  pool_id: Long;
  sender: string;
  lower_tick: Long;
  upper_tick: Long;
  tokens_provided: CoinSDKType[];
  token_min_amount0: string;
  token_min_amount1: string;
}
export interface MsgCreatePositionResponse {
  positionId: Long;
  amount0: string;
  amount1: string;
  liquidityCreated: string;
  /**
   * the lower and upper tick are in the response because there are
   * instances in which multiple ticks represent the same price, so
   * we may move their provided tick to the canonical tick that represents
   * the same price.
   */
  lowerTick: Long;
  upperTick: Long;
}
export interface MsgCreatePositionResponseProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCreatePositionResponse";
  value: Uint8Array;
}
export interface MsgCreatePositionResponseAmino {
  position_id: string;
  amount0: string;
  amount1: string;
  liquidity_created: string;
  /**
   * the lower and upper tick are in the response because there are
   * instances in which multiple ticks represent the same price, so
   * we may move their provided tick to the canonical tick that represents
   * the same price.
   */
  lower_tick: string;
  upper_tick: string;
}
export interface MsgCreatePositionResponseAminoMsg {
  type: "osmosis/concentratedliquidity/create-position-response";
  value: MsgCreatePositionResponseAmino;
}
export interface MsgCreatePositionResponseSDKType {
  position_id: Long;
  amount0: string;
  amount1: string;
  liquidity_created: string;
  lower_tick: Long;
  upper_tick: Long;
}
/** ===================== MsgAddToPosition */
export interface MsgAddToPosition {
  positionId: Long;
  sender: string;
  /** amount0 represents the amount of token0 willing to put in. */
  amount0: string;
  /** amount1 represents the amount of token1 willing to put in. */
  amount1: string;
  /**
   * token_min_amount0 represents the minimum amount of token0 desired from the
   * new position being created. Note that this field indicates the min amount0
   * corresponding to the liquidity that is being added, not the total
   * liquidity of the position.
   */
  tokenMinAmount0: string;
  /**
   * token_min_amount1 represents the minimum amount of token1 desired from the
   * new position being created. Note that this field indicates the min amount1
   * corresponding to the liquidity that is being added, not the total
   * liquidity of the position.
   */
  tokenMinAmount1: string;
}
export interface MsgAddToPositionProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgAddToPosition";
  value: Uint8Array;
}
/** ===================== MsgAddToPosition */
export interface MsgAddToPositionAmino {
  position_id: string;
  sender: string;
  /** amount0 represents the amount of token0 willing to put in. */
  amount0: string;
  /** amount1 represents the amount of token1 willing to put in. */
  amount1: string;
  /**
   * token_min_amount0 represents the minimum amount of token0 desired from the
   * new position being created. Note that this field indicates the min amount0
   * corresponding to the liquidity that is being added, not the total
   * liquidity of the position.
   */
  token_min_amount0: string;
  /**
   * token_min_amount1 represents the minimum amount of token1 desired from the
   * new position being created. Note that this field indicates the min amount1
   * corresponding to the liquidity that is being added, not the total
   * liquidity of the position.
   */
  token_min_amount1: string;
}
export interface MsgAddToPositionAminoMsg {
  type: "osmosis/cl-add-to-position";
  value: MsgAddToPositionAmino;
}
/** ===================== MsgAddToPosition */
export interface MsgAddToPositionSDKType {
  position_id: Long;
  sender: string;
  amount0: string;
  amount1: string;
  token_min_amount0: string;
  token_min_amount1: string;
}
export interface MsgAddToPositionResponse {
  positionId: Long;
  amount0: string;
  amount1: string;
}
export interface MsgAddToPositionResponseProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgAddToPositionResponse";
  value: Uint8Array;
}
export interface MsgAddToPositionResponseAmino {
  position_id: string;
  amount0: string;
  amount1: string;
}
export interface MsgAddToPositionResponseAminoMsg {
  type: "osmosis/concentratedliquidity/add-to-position-response";
  value: MsgAddToPositionResponseAmino;
}
export interface MsgAddToPositionResponseSDKType {
  position_id: Long;
  amount0: string;
  amount1: string;
}
/** ===================== MsgWithdrawPosition */
export interface MsgWithdrawPosition {
  positionId: Long;
  sender: string;
  liquidityAmount: string;
}
export interface MsgWithdrawPositionProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition";
  value: Uint8Array;
}
/** ===================== MsgWithdrawPosition */
export interface MsgWithdrawPositionAmino {
  position_id: string;
  sender: string;
  liquidity_amount: string;
}
export interface MsgWithdrawPositionAminoMsg {
  type: "osmosis/cl-withdraw-position";
  value: MsgWithdrawPositionAmino;
}
/** ===================== MsgWithdrawPosition */
export interface MsgWithdrawPositionSDKType {
  position_id: Long;
  sender: string;
  liquidity_amount: string;
}
export interface MsgWithdrawPositionResponse {
  amount0: string;
  amount1: string;
}
export interface MsgWithdrawPositionResponseProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPositionResponse";
  value: Uint8Array;
}
export interface MsgWithdrawPositionResponseAmino {
  amount0: string;
  amount1: string;
}
export interface MsgWithdrawPositionResponseAminoMsg {
  type: "osmosis/concentratedliquidity/withdraw-position-response";
  value: MsgWithdrawPositionResponseAmino;
}
export interface MsgWithdrawPositionResponseSDKType {
  amount0: string;
  amount1: string;
}
/** ===================== MsgCollectSpreadRewards */
export interface MsgCollectSpreadRewards {
  positionIds: Long[];
  sender: string;
}
export interface MsgCollectSpreadRewardsProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards";
  value: Uint8Array;
}
/** ===================== MsgCollectSpreadRewards */
export interface MsgCollectSpreadRewardsAmino {
  position_ids: string[];
  sender: string;
}
export interface MsgCollectSpreadRewardsAminoMsg {
  type: "osmosis/cl-col-sp-rewards";
  value: MsgCollectSpreadRewardsAmino;
}
/** ===================== MsgCollectSpreadRewards */
export interface MsgCollectSpreadRewardsSDKType {
  position_ids: Long[];
  sender: string;
}
export interface MsgCollectSpreadRewardsResponse {
  collectedSpreadRewards: Coin[];
}
export interface MsgCollectSpreadRewardsResponseProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewardsResponse";
  value: Uint8Array;
}
export interface MsgCollectSpreadRewardsResponseAmino {
  collected_spread_rewards: CoinAmino[];
}
export interface MsgCollectSpreadRewardsResponseAminoMsg {
  type: "osmosis/concentratedliquidity/collect-spread-rewards-response";
  value: MsgCollectSpreadRewardsResponseAmino;
}
export interface MsgCollectSpreadRewardsResponseSDKType {
  collected_spread_rewards: CoinSDKType[];
}
/** ===================== MsgCollectIncentives */
export interface MsgCollectIncentives {
  positionIds: Long[];
  sender: string;
}
export interface MsgCollectIncentivesProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives";
  value: Uint8Array;
}
/** ===================== MsgCollectIncentives */
export interface MsgCollectIncentivesAmino {
  position_ids: string[];
  sender: string;
}
export interface MsgCollectIncentivesAminoMsg {
  type: "osmosis/cl-collect-incentives";
  value: MsgCollectIncentivesAmino;
}
/** ===================== MsgCollectIncentives */
export interface MsgCollectIncentivesSDKType {
  position_ids: Long[];
  sender: string;
}
export interface MsgCollectIncentivesResponse {
  collectedIncentives: Coin[];
  forfeitedIncentives: Coin[];
}
export interface MsgCollectIncentivesResponseProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentivesResponse";
  value: Uint8Array;
}
export interface MsgCollectIncentivesResponseAmino {
  collected_incentives: CoinAmino[];
  forfeited_incentives: CoinAmino[];
}
export interface MsgCollectIncentivesResponseAminoMsg {
  type: "osmosis/concentratedliquidity/collect-incentives-response";
  value: MsgCollectIncentivesResponseAmino;
}
export interface MsgCollectIncentivesResponseSDKType {
  collected_incentives: CoinSDKType[];
  forfeited_incentives: CoinSDKType[];
}
/** ===================== MsgFungifyChargedPositions */
export interface MsgFungifyChargedPositions {
  positionIds: Long[];
  sender: string;
}
export interface MsgFungifyChargedPositionsProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgFungifyChargedPositions";
  value: Uint8Array;
}
/** ===================== MsgFungifyChargedPositions */
export interface MsgFungifyChargedPositionsAmino {
  position_ids: string[];
  sender: string;
}
export interface MsgFungifyChargedPositionsAminoMsg {
  type: "osmosis/cl-fungify-charged-positions";
  value: MsgFungifyChargedPositionsAmino;
}
/** ===================== MsgFungifyChargedPositions */
export interface MsgFungifyChargedPositionsSDKType {
  position_ids: Long[];
  sender: string;
}
export interface MsgFungifyChargedPositionsResponse {
  newPositionId: Long;
}
export interface MsgFungifyChargedPositionsResponseProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgFungifyChargedPositionsResponse";
  value: Uint8Array;
}
export interface MsgFungifyChargedPositionsResponseAmino {
  new_position_id: string;
}
export interface MsgFungifyChargedPositionsResponseAminoMsg {
  type: "osmosis/concentratedliquidity/fungify-charged-positions-response";
  value: MsgFungifyChargedPositionsResponseAmino;
}
export interface MsgFungifyChargedPositionsResponseSDKType {
  new_position_id: Long;
}
/** ===================== MsgTransferPositions */
export interface MsgTransferPositions {
  positionIds: Long[];
  sender: string;
  newOwner: string;
}
export interface MsgTransferPositionsProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgTransferPositions";
  value: Uint8Array;
}
/** ===================== MsgTransferPositions */
export interface MsgTransferPositionsAmino {
  position_ids: string[];
  sender: string;
  new_owner: string;
}
export interface MsgTransferPositionsAminoMsg {
  type: "osmosis/cl-transfer-positions";
  value: MsgTransferPositionsAmino;
}
/** ===================== MsgTransferPositions */
export interface MsgTransferPositionsSDKType {
  position_ids: Long[];
  sender: string;
  new_owner: string;
}
export interface MsgTransferPositionsResponse {}
export interface MsgTransferPositionsResponseProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgTransferPositionsResponse";
  value: Uint8Array;
}
export interface MsgTransferPositionsResponseAmino {}
export interface MsgTransferPositionsResponseAminoMsg {
  type: "osmosis/concentratedliquidity/transfer-positions-response";
  value: MsgTransferPositionsResponseAmino;
}
export interface MsgTransferPositionsResponseSDKType {}
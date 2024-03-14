import { Long } from "../../../helpers";
/**
 * CreateConcentratedLiquidityPoolsProposal is a gov Content type for creating
 * concentrated liquidity pools. If a CreateConcentratedLiquidityPoolsProposal
 * passes, the pools are created via pool manager module account.
 */
export interface CreateConcentratedLiquidityPoolsProposal {
  title: string;
  description: string;
  poolRecords: PoolRecord[];
}
export interface CreateConcentratedLiquidityPoolsProposalProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.CreateConcentratedLiquidityPoolsProposal";
  value: Uint8Array;
}
/**
 * CreateConcentratedLiquidityPoolsProposal is a gov Content type for creating
 * concentrated liquidity pools. If a CreateConcentratedLiquidityPoolsProposal
 * passes, the pools are created via pool manager module account.
 */
export interface CreateConcentratedLiquidityPoolsProposalAmino {
  title: string;
  description: string;
  pool_records: PoolRecordAmino[];
}
export interface CreateConcentratedLiquidityPoolsProposalAminoMsg {
  type: "osmosis/concentratedliquidity/create-concentrated-liquidity-pools-proposal";
  value: CreateConcentratedLiquidityPoolsProposalAmino;
}
/**
 * CreateConcentratedLiquidityPoolsProposal is a gov Content type for creating
 * concentrated liquidity pools. If a CreateConcentratedLiquidityPoolsProposal
 * passes, the pools are created via pool manager module account.
 */
export interface CreateConcentratedLiquidityPoolsProposalSDKType {
  title: string;
  description: string;
  pool_records: PoolRecordSDKType[];
}
/**
 * TickSpacingDecreaseProposal is a gov Content type for proposing a tick
 * spacing decrease for a pool. The proposal will fail if one of the pools do
 * not exist, or if the new tick spacing is not less than the current tick
 * spacing.
 */
export interface TickSpacingDecreaseProposal {
  title: string;
  description: string;
  poolIdToTickSpacingRecords: PoolIdToTickSpacingRecord[];
}
export interface TickSpacingDecreaseProposalProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickSpacingDecreaseProposal";
  value: Uint8Array;
}
/**
 * TickSpacingDecreaseProposal is a gov Content type for proposing a tick
 * spacing decrease for a pool. The proposal will fail if one of the pools do
 * not exist, or if the new tick spacing is not less than the current tick
 * spacing.
 */
export interface TickSpacingDecreaseProposalAmino {
  title: string;
  description: string;
  pool_id_to_tick_spacing_records: PoolIdToTickSpacingRecordAmino[];
}
export interface TickSpacingDecreaseProposalAminoMsg {
  type: "osmosis/concentratedliquidity/tick-spacing-decrease-proposal";
  value: TickSpacingDecreaseProposalAmino;
}
/**
 * TickSpacingDecreaseProposal is a gov Content type for proposing a tick
 * spacing decrease for a pool. The proposal will fail if one of the pools do
 * not exist, or if the new tick spacing is not less than the current tick
 * spacing.
 */
export interface TickSpacingDecreaseProposalSDKType {
  title: string;
  description: string;
  pool_id_to_tick_spacing_records: PoolIdToTickSpacingRecordSDKType[];
}
/**
 * PoolIdToTickSpacingRecord is a struct that contains a pool id to new tick
 * spacing pair.
 */
export interface PoolIdToTickSpacingRecord {
  poolId: Long;
  newTickSpacing: Long;
}
export interface PoolIdToTickSpacingRecordProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolIdToTickSpacingRecord";
  value: Uint8Array;
}
/**
 * PoolIdToTickSpacingRecord is a struct that contains a pool id to new tick
 * spacing pair.
 */
export interface PoolIdToTickSpacingRecordAmino {
  pool_id: string;
  new_tick_spacing: string;
}
export interface PoolIdToTickSpacingRecordAminoMsg {
  type: "osmosis/concentratedliquidity/pool-id-to-tick-spacing-record";
  value: PoolIdToTickSpacingRecordAmino;
}
/**
 * PoolIdToTickSpacingRecord is a struct that contains a pool id to new tick
 * spacing pair.
 */
export interface PoolIdToTickSpacingRecordSDKType {
  pool_id: Long;
  new_tick_spacing: Long;
}
export interface PoolRecord {
  denom0: string;
  denom1: string;
  tickSpacing: Long;
  spreadFactor: string;
}
export interface PoolRecordProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolRecord";
  value: Uint8Array;
}
export interface PoolRecordAmino {
  denom0: string;
  denom1: string;
  tick_spacing: string;
  spread_factor: string;
}
export interface PoolRecordAminoMsg {
  type: "osmosis/concentratedliquidity/pool-record";
  value: PoolRecordAmino;
}
export interface PoolRecordSDKType {
  denom0: string;
  denom1: string;
  tick_spacing: Long;
  spread_factor: string;
}
import { TickInfo, TickInfoAmino, TickInfoSDKType } from "./tick_info";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { IncentiveRecord, IncentiveRecordAmino, IncentiveRecordSDKType } from "./incentive_record";
import { Position, PositionAmino, PositionSDKType } from "./position";
import { Record, RecordAmino, RecordSDKType, AccumulatorContent, AccumulatorContentAmino, AccumulatorContentSDKType } from "../../accum/v1beta1/accum";
import { Params, ParamsAmino, ParamsSDKType } from "../params";
import { Long } from "../../../helpers";
/**
 * FullTick contains tick index and pool id along with other tick model
 * information.
 */
export interface FullTick {
  /** pool id associated with the tick. */
  poolId: Long;
  /** tick's index. */
  tickIndex: Long;
  /** tick's info. */
  info: TickInfo;
}
export interface FullTickProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.FullTick";
  value: Uint8Array;
}
/**
 * FullTick contains tick index and pool id along with other tick model
 * information.
 */
export interface FullTickAmino {
  /** pool id associated with the tick. */
  pool_id: string;
  /** tick's index. */
  tick_index: string;
  /** tick's info. */
  info?: TickInfoAmino;
}
export interface FullTickAminoMsg {
  type: "osmosis/concentratedliquidity/full-tick";
  value: FullTickAmino;
}
/**
 * FullTick contains tick index and pool id along with other tick model
 * information.
 */
export interface FullTickSDKType {
  pool_id: Long;
  tick_index: Long;
  info: TickInfoSDKType;
}
/**
 * PoolData represents a serialized pool along with its ticks
 * for genesis state.
 */
export interface PoolData {
  /** pool struct */
  pool: Any;
  /** pool's ticks */
  ticks: FullTick[];
  spreadRewardAccumulator: AccumObject;
  incentivesAccumulators: AccumObject[];
  /** incentive records to be set */
  incentiveRecords: IncentiveRecord[];
}
export interface PoolDataProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolData";
  value: Uint8Array;
}
/**
 * PoolData represents a serialized pool along with its ticks
 * for genesis state.
 */
export interface PoolDataAmino {
  /** pool struct */
  pool?: AnyAmino;
  /** pool's ticks */
  ticks: FullTickAmino[];
  spread_reward_accumulator?: AccumObjectAmino;
  incentives_accumulators: AccumObjectAmino[];
  /** incentive records to be set */
  incentive_records: IncentiveRecordAmino[];
}
export interface PoolDataAminoMsg {
  type: "osmosis/concentratedliquidity/pool-data";
  value: PoolDataAmino;
}
/**
 * PoolData represents a serialized pool along with its ticks
 * for genesis state.
 */
export interface PoolDataSDKType {
  pool: AnySDKType;
  ticks: FullTickSDKType[];
  spread_reward_accumulator: AccumObjectSDKType;
  incentives_accumulators: AccumObjectSDKType[];
  incentive_records: IncentiveRecordSDKType[];
}
export interface PositionData {
  position: Position;
  lockId: Long;
  spreadRewardAccumRecord: Record;
  uptimeAccumRecords: Record[];
}
export interface PositionDataProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionData";
  value: Uint8Array;
}
export interface PositionDataAmino {
  position?: PositionAmino;
  lock_id: string;
  spread_reward_accum_record?: RecordAmino;
  uptime_accum_records: RecordAmino[];
}
export interface PositionDataAminoMsg {
  type: "osmosis/concentratedliquidity/position-data";
  value: PositionDataAmino;
}
export interface PositionDataSDKType {
  position: PositionSDKType;
  lock_id: Long;
  spread_reward_accum_record: RecordSDKType;
  uptime_accum_records: RecordSDKType[];
}
/** GenesisState defines the concentrated liquidity module's genesis state. */
export interface GenesisState {
  /** params are all the parameters of the module */
  params: Params;
  /** pool data containing serialized pool struct and ticks. */
  poolData: PoolData[];
  positionData: PositionData[];
  nextPositionId: Long;
  nextIncentiveRecordId: Long;
  incentivesAccumulatorPoolIdMigrationThreshold: Long;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the concentrated liquidity module's genesis state. */
export interface GenesisStateAmino {
  /** params are all the parameters of the module */
  params?: ParamsAmino;
  /** pool data containing serialized pool struct and ticks. */
  pool_data: PoolDataAmino[];
  position_data: PositionDataAmino[];
  next_position_id: string;
  next_incentive_record_id: string;
  incentives_accumulator_pool_id_migration_threshold: string;
}
export interface GenesisStateAminoMsg {
  type: "osmosis/concentratedliquidity/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the concentrated liquidity module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  pool_data: PoolDataSDKType[];
  position_data: PositionDataSDKType[];
  next_position_id: Long;
  next_incentive_record_id: Long;
  incentives_accumulator_pool_id_migration_threshold: Long;
}
export interface AccumObject {
  /** Accumulator's name (pulled from AccumulatorContent) */
  name: string;
  accumContent: AccumulatorContent;
}
export interface AccumObjectProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.AccumObject";
  value: Uint8Array;
}
export interface AccumObjectAmino {
  /** Accumulator's name (pulled from AccumulatorContent) */
  name: string;
  accum_content?: AccumulatorContentAmino;
}
export interface AccumObjectAminoMsg {
  type: "osmosis/concentratedliquidity/accum-object";
  value: AccumObjectAmino;
}
export interface AccumObjectSDKType {
  name: string;
  accum_content: AccumulatorContentSDKType;
}
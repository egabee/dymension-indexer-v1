import { Long } from "../../../helpers";
/**
 * A TWAP record should be indexed in state by pool_id, (asset pair), timestamp
 * The asset pair assets should be lexicographically sorted.
 * Technically (pool_id, asset_0_denom, asset_1_denom, height) do not need to
 * appear in the struct however we view this as the wrong performance tradeoff
 * given SDK today. Would rather we optimize for readability and correctness,
 * than an optimal state storage format. The system bottleneck is elsewhere for
 * now.
 */
export interface TwapRecord {
  poolId: Long;
  /** Lexicographically smaller denom of the pair */
  asset0Denom: string;
  /** Lexicographically larger denom of the pair */
  asset1Denom: string;
  /** height this record corresponds to, for debugging purposes */
  height: Long;
  /**
   * This field should only exist until we have a global registry in the state
   * machine, mapping prior block heights within {TIME RANGE} to times.
   */
  time: Date;
  /**
   * We store the last spot prices in the struct, so that we can interpolate
   * accumulator values for times between when accumulator records are stored.
   */
  p0LastSpotPrice: string;
  p1LastSpotPrice: string;
  p0ArithmeticTwapAccumulator: string;
  p1ArithmeticTwapAccumulator: string;
  geometricTwapAccumulator: string;
  /**
   * This field contains the time in which the last spot price error occurred.
   * It is used to alert the caller if they are getting a potentially erroneous
   * TWAP, due to an unforeseen underlying error.
   */
  lastErrorTime: Date;
}
export interface TwapRecordProtoMsg {
  typeUrl: "/osmosis.twap.v1beta1.TwapRecord";
  value: Uint8Array;
}
/**
 * A TWAP record should be indexed in state by pool_id, (asset pair), timestamp
 * The asset pair assets should be lexicographically sorted.
 * Technically (pool_id, asset_0_denom, asset_1_denom, height) do not need to
 * appear in the struct however we view this as the wrong performance tradeoff
 * given SDK today. Would rather we optimize for readability and correctness,
 * than an optimal state storage format. The system bottleneck is elsewhere for
 * now.
 */
export interface TwapRecordAmino {
  pool_id: string;
  /** Lexicographically smaller denom of the pair */
  asset0_denom: string;
  /** Lexicographically larger denom of the pair */
  asset1_denom: string;
  /** height this record corresponds to, for debugging purposes */
  height: string;
  /**
   * This field should only exist until we have a global registry in the state
   * machine, mapping prior block heights within {TIME RANGE} to times.
   */
  time?: Date;
  /**
   * We store the last spot prices in the struct, so that we can interpolate
   * accumulator values for times between when accumulator records are stored.
   */
  p0_last_spot_price: string;
  p1_last_spot_price: string;
  p0_arithmetic_twap_accumulator: string;
  p1_arithmetic_twap_accumulator: string;
  geometric_twap_accumulator: string;
  /**
   * This field contains the time in which the last spot price error occurred.
   * It is used to alert the caller if they are getting a potentially erroneous
   * TWAP, due to an unforeseen underlying error.
   */
  last_error_time?: Date;
}
export interface TwapRecordAminoMsg {
  type: "osmosis/twap/twap-record";
  value: TwapRecordAmino;
}
/**
 * A TWAP record should be indexed in state by pool_id, (asset pair), timestamp
 * The asset pair assets should be lexicographically sorted.
 * Technically (pool_id, asset_0_denom, asset_1_denom, height) do not need to
 * appear in the struct however we view this as the wrong performance tradeoff
 * given SDK today. Would rather we optimize for readability and correctness,
 * than an optimal state storage format. The system bottleneck is elsewhere for
 * now.
 */
export interface TwapRecordSDKType {
  pool_id: Long;
  asset0_denom: string;
  asset1_denom: string;
  height: Long;
  time: Date;
  p0_last_spot_price: string;
  p1_last_spot_price: string;
  p0_arithmetic_twap_accumulator: string;
  p1_arithmetic_twap_accumulator: string;
  geometric_twap_accumulator: string;
  last_error_time: Date;
}
/**
 * PruningState allows us to spread out the pruning of TWAP records over time,
 * instead of pruning all at once at the end of the epoch.
 */
export interface PruningState {
  /**
   * is_pruning is true if the pruning process is ongoing.
   * This tells the module to continue pruning the TWAP records
   * at the EndBlock.
   */
  isPruning: boolean;
  /**
   * last_kept_time is the time of the last kept TWAP record.
   * This is used to determine all TWAP records that are older than
   * last_kept_time and should be pruned.
   */
  lastKeptTime: Date;
  /** Deprecated: This field is deprecated. */
  /** @deprecated */
  lastKeySeen: Uint8Array;
  /**
   * last_seen_pool_id is the pool_id that we will begin pruning in the next
   * block. This value starts at the highest pool_id at time of epoch, and
   * decreases until it reaches 1. When it reaches 1, the pruning
   * process is complete.
   */
  lastSeenPoolId: Long;
}
export interface PruningStateProtoMsg {
  typeUrl: "/osmosis.twap.v1beta1.PruningState";
  value: Uint8Array;
}
/**
 * PruningState allows us to spread out the pruning of TWAP records over time,
 * instead of pruning all at once at the end of the epoch.
 */
export interface PruningStateAmino {
  /**
   * is_pruning is true if the pruning process is ongoing.
   * This tells the module to continue pruning the TWAP records
   * at the EndBlock.
   */
  is_pruning: boolean;
  /**
   * last_kept_time is the time of the last kept TWAP record.
   * This is used to determine all TWAP records that are older than
   * last_kept_time and should be pruned.
   */
  last_kept_time?: Date;
  /** Deprecated: This field is deprecated. */
  /** @deprecated */
  last_key_seen: Uint8Array;
  /**
   * last_seen_pool_id is the pool_id that we will begin pruning in the next
   * block. This value starts at the highest pool_id at time of epoch, and
   * decreases until it reaches 1. When it reaches 1, the pruning
   * process is complete.
   */
  last_seen_pool_id: string;
}
export interface PruningStateAminoMsg {
  type: "osmosis/twap/pruning-state";
  value: PruningStateAmino;
}
/**
 * PruningState allows us to spread out the pruning of TWAP records over time,
 * instead of pruning all at once at the end of the epoch.
 */
export interface PruningStateSDKType {
  is_pruning: boolean;
  last_kept_time: Date;
  /** @deprecated */
  last_key_seen: Uint8Array;
  last_seen_pool_id: Long;
}
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
/**
 * IncentiveRecord is the high-level struct we use to deal with an independent
 * incentive being distributed on a pool. Note that PoolId, Denom, and MinUptime
 * are included in the key so we avoid storing them in state, hence the
 * distinction between IncentiveRecord and IncentiveRecordBody.
 */
export interface IncentiveRecord {
  /** incentive_id is the id uniquely identifying this incentive record. */
  incentiveId: Long;
  poolId: Long;
  /** incentive record body holds necessary */
  incentiveRecordBody: IncentiveRecordBody;
  /**
   * min_uptime is the minimum uptime required for liquidity to qualify for this
   * incentive. It should be always be one of the supported uptimes in
   * types.SupportedUptimes
   */
  minUptime: Duration;
}
export interface IncentiveRecordProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecord";
  value: Uint8Array;
}
/**
 * IncentiveRecord is the high-level struct we use to deal with an independent
 * incentive being distributed on a pool. Note that PoolId, Denom, and MinUptime
 * are included in the key so we avoid storing them in state, hence the
 * distinction between IncentiveRecord and IncentiveRecordBody.
 */
export interface IncentiveRecordAmino {
  /** incentive_id is the id uniquely identifying this incentive record. */
  incentive_id: string;
  pool_id: string;
  /** incentive record body holds necessary */
  incentive_record_body?: IncentiveRecordBodyAmino;
  /**
   * min_uptime is the minimum uptime required for liquidity to qualify for this
   * incentive. It should be always be one of the supported uptimes in
   * types.SupportedUptimes
   */
  min_uptime?: DurationAmino;
}
export interface IncentiveRecordAminoMsg {
  type: "osmosis/concentratedliquidity/incentive-record";
  value: IncentiveRecordAmino;
}
/**
 * IncentiveRecord is the high-level struct we use to deal with an independent
 * incentive being distributed on a pool. Note that PoolId, Denom, and MinUptime
 * are included in the key so we avoid storing them in state, hence the
 * distinction between IncentiveRecord and IncentiveRecordBody.
 */
export interface IncentiveRecordSDKType {
  incentive_id: Long;
  pool_id: Long;
  incentive_record_body: IncentiveRecordBodySDKType;
  min_uptime: DurationSDKType;
}
/**
 * IncentiveRecordBody represents the body stored in state for each individual
 * record.
 */
export interface IncentiveRecordBody {
  /** remaining_coin is the total amount of incentives to be distributed */
  remainingCoin: DecCoin;
  /** emission_rate is the incentive emission rate per second */
  emissionRate: string;
  /** start_time is the time when the incentive starts distributing */
  startTime: Date;
}
export interface IncentiveRecordBodyProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecordBody";
  value: Uint8Array;
}
/**
 * IncentiveRecordBody represents the body stored in state for each individual
 * record.
 */
export interface IncentiveRecordBodyAmino {
  /** remaining_coin is the total amount of incentives to be distributed */
  remaining_coin?: DecCoinAmino;
  /** emission_rate is the incentive emission rate per second */
  emission_rate: string;
  /** start_time is the time when the incentive starts distributing */
  start_time?: Date;
}
export interface IncentiveRecordBodyAminoMsg {
  type: "osmosis/concentratedliquidity/incentive-record-body";
  value: IncentiveRecordBodyAmino;
}
/**
 * IncentiveRecordBody represents the body stored in state for each individual
 * record.
 */
export interface IncentiveRecordBodySDKType {
  remaining_coin: DecCoinSDKType;
  emission_rate: string;
  start_time: Date;
}
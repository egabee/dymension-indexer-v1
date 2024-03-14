import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Long } from "../../../helpers";
export interface Params {
  /**
   * minted_denom is the denomination of the coin expected to be minted by the
   * minting module. Pool-incentives module doesn’t actually mint the coin
   * itself, but rather manages the distribution of coins that matches the
   * defined minted_denom.
   */
  mintedDenom: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  /**
   * minted_denom is the denomination of the coin expected to be minted by the
   * minting module. Pool-incentives module doesn’t actually mint the coin
   * itself, but rather manages the distribution of coins that matches the
   * defined minted_denom.
   */
  minted_denom: string;
}
export interface ParamsAminoMsg {
  type: "osmosis/poolincentives/params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  minted_denom: string;
}
export interface LockableDurationsInfo {
  lockableDurations: Duration[];
}
export interface LockableDurationsInfoProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.LockableDurationsInfo";
  value: Uint8Array;
}
export interface LockableDurationsInfoAmino {
  lockable_durations: DurationAmino[];
}
export interface LockableDurationsInfoAminoMsg {
  type: "osmosis/poolincentives/lockable-durations-info";
  value: LockableDurationsInfoAmino;
}
export interface LockableDurationsInfoSDKType {
  lockable_durations: DurationSDKType[];
}
export interface DistrInfo {
  totalWeight: string;
  records: DistrRecord[];
}
export interface DistrInfoProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.DistrInfo";
  value: Uint8Array;
}
export interface DistrInfoAmino {
  total_weight: string;
  records: DistrRecordAmino[];
}
export interface DistrInfoAminoMsg {
  type: "osmosis/poolincentives/distr-info";
  value: DistrInfoAmino;
}
export interface DistrInfoSDKType {
  total_weight: string;
  records: DistrRecordSDKType[];
}
export interface DistrRecord {
  gaugeId: Long;
  weight: string;
}
export interface DistrRecordProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.DistrRecord";
  value: Uint8Array;
}
export interface DistrRecordAmino {
  gauge_id: string;
  weight: string;
}
export interface DistrRecordAminoMsg {
  type: "osmosis/poolincentives/distr-record";
  value: DistrRecordAmino;
}
export interface DistrRecordSDKType {
  gauge_id: Long;
  weight: string;
}
export interface PoolToGauge {
  poolId: Long;
  gaugeId: Long;
  duration: Duration;
}
export interface PoolToGaugeProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.PoolToGauge";
  value: Uint8Array;
}
export interface PoolToGaugeAmino {
  pool_id: string;
  gauge_id: string;
  duration?: DurationAmino;
}
export interface PoolToGaugeAminoMsg {
  type: "osmosis/poolincentives/pool-to-gauge";
  value: PoolToGaugeAmino;
}
export interface PoolToGaugeSDKType {
  pool_id: Long;
  gauge_id: Long;
  duration: DurationSDKType;
}
export interface AnyPoolToInternalGauges {
  poolToGauge: PoolToGauge[];
}
export interface AnyPoolToInternalGaugesProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.AnyPoolToInternalGauges";
  value: Uint8Array;
}
export interface AnyPoolToInternalGaugesAmino {
  pool_to_gauge: PoolToGaugeAmino[];
}
export interface AnyPoolToInternalGaugesAminoMsg {
  type: "osmosis/poolincentives/any-pool-to-internal-gauges";
  value: AnyPoolToInternalGaugesAmino;
}
export interface AnyPoolToInternalGaugesSDKType {
  pool_to_gauge: PoolToGaugeSDKType[];
}
export interface ConcentratedPoolToNoLockGauges {
  poolToGauge: PoolToGauge[];
}
export interface ConcentratedPoolToNoLockGaugesProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.ConcentratedPoolToNoLockGauges";
  value: Uint8Array;
}
export interface ConcentratedPoolToNoLockGaugesAmino {
  pool_to_gauge: PoolToGaugeAmino[];
}
export interface ConcentratedPoolToNoLockGaugesAminoMsg {
  type: "osmosis/poolincentives/concentrated-pool-to-no-lock-gauges";
  value: ConcentratedPoolToNoLockGaugesAmino;
}
export interface ConcentratedPoolToNoLockGaugesSDKType {
  pool_to_gauge: PoolToGaugeSDKType[];
}
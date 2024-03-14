import { Gauge, GaugeAmino, GaugeSDKType } from "./gauge";
import { Long } from "../../helpers";
/** SplittingPolicy determines the way we want to split incentives in groupGauges */
export enum SplittingPolicy {
  ByVolume = 0,
  UNRECOGNIZED = -1,
}
export const SplittingPolicySDKType = SplittingPolicy;
export const SplittingPolicyAmino = SplittingPolicy;
export function splittingPolicyFromJSON(object: any): SplittingPolicy {
  switch (object) {
    case 0:
    case "ByVolume":
      return SplittingPolicy.ByVolume;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SplittingPolicy.UNRECOGNIZED;
  }
}
export function splittingPolicyToJSON(object: SplittingPolicy): string {
  switch (object) {
    case SplittingPolicy.ByVolume:
      return "ByVolume";
    case SplittingPolicy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Note that while both InternalGaugeInfo and InternalGaugeRecord could
 * technically be replaced by DistrInfo and DistrRecord from the pool-incentives
 * module, we create separate types here to keep our abstractions clean and
 * readable (pool-incentives distribution abstractions are used in a very
 * specific way that does not directly relate to gauge logic). This also helps
 * us sidestep a refactor to avoid an import cycle.
 */
export interface InternalGaugeInfo {
  totalWeight: string;
  gaugeRecords: InternalGaugeRecord[];
}
export interface InternalGaugeInfoProtoMsg {
  typeUrl: "/osmosis.incentives.InternalGaugeInfo";
  value: Uint8Array;
}
/**
 * Note that while both InternalGaugeInfo and InternalGaugeRecord could
 * technically be replaced by DistrInfo and DistrRecord from the pool-incentives
 * module, we create separate types here to keep our abstractions clean and
 * readable (pool-incentives distribution abstractions are used in a very
 * specific way that does not directly relate to gauge logic). This also helps
 * us sidestep a refactor to avoid an import cycle.
 */
export interface InternalGaugeInfoAmino {
  total_weight: string;
  gauge_records: InternalGaugeRecordAmino[];
}
export interface InternalGaugeInfoAminoMsg {
  type: "osmosis/incentives/internal-gauge-info";
  value: InternalGaugeInfoAmino;
}
/**
 * Note that while both InternalGaugeInfo and InternalGaugeRecord could
 * technically be replaced by DistrInfo and DistrRecord from the pool-incentives
 * module, we create separate types here to keep our abstractions clean and
 * readable (pool-incentives distribution abstractions are used in a very
 * specific way that does not directly relate to gauge logic). This also helps
 * us sidestep a refactor to avoid an import cycle.
 */
export interface InternalGaugeInfoSDKType {
  total_weight: string;
  gauge_records: InternalGaugeRecordSDKType[];
}
export interface InternalGaugeRecord {
  gaugeId: Long;
  /**
   * CurrentWeight is the current weight of this gauge being distributed to for
   * this epoch. For instance, for volume splitting policy, this stores the
   * volume generated in the last epoch of the linked pool.
   */
  currentWeight: string;
  /**
   * CumulativeWeight serves as a snapshot of the accumulator being tracked
   * based on splitting policy. For instance, for volume splitting policy, this
   * stores the cumulative volume for the linked pool at time of last update.
   */
  cumulativeWeight: string;
}
export interface InternalGaugeRecordProtoMsg {
  typeUrl: "/osmosis.incentives.InternalGaugeRecord";
  value: Uint8Array;
}
export interface InternalGaugeRecordAmino {
  gauge_id: string;
  /**
   * CurrentWeight is the current weight of this gauge being distributed to for
   * this epoch. For instance, for volume splitting policy, this stores the
   * volume generated in the last epoch of the linked pool.
   */
  current_weight: string;
  /**
   * CumulativeWeight serves as a snapshot of the accumulator being tracked
   * based on splitting policy. For instance, for volume splitting policy, this
   * stores the cumulative volume for the linked pool at time of last update.
   */
  cumulative_weight: string;
}
export interface InternalGaugeRecordAminoMsg {
  type: "osmosis/incentives/internal-gauge-record";
  value: InternalGaugeRecordAmino;
}
export interface InternalGaugeRecordSDKType {
  gauge_id: Long;
  current_weight: string;
  cumulative_weight: string;
}
/**
 * Group is an object that stores a 1:1 mapped gauge ID, a list of pool gauge
 * info, and a splitting policy. These are grouped into a single abstraction to
 * allow for distribution of group incentives to internal gauges according to
 * the specified splitting policy.
 */
export interface Group {
  groupGaugeId: Long;
  internalGaugeInfo: InternalGaugeInfo;
  splittingPolicy: SplittingPolicy;
}
export interface GroupProtoMsg {
  typeUrl: "/osmosis.incentives.Group";
  value: Uint8Array;
}
/**
 * Group is an object that stores a 1:1 mapped gauge ID, a list of pool gauge
 * info, and a splitting policy. These are grouped into a single abstraction to
 * allow for distribution of group incentives to internal gauges according to
 * the specified splitting policy.
 */
export interface GroupAmino {
  group_gauge_id: string;
  internal_gauge_info?: InternalGaugeInfoAmino;
  splitting_policy: SplittingPolicy;
}
export interface GroupAminoMsg {
  type: "osmosis/incentives/group";
  value: GroupAmino;
}
/**
 * Group is an object that stores a 1:1 mapped gauge ID, a list of pool gauge
 * info, and a splitting policy. These are grouped into a single abstraction to
 * allow for distribution of group incentives to internal gauges according to
 * the specified splitting policy.
 */
export interface GroupSDKType {
  group_gauge_id: Long;
  internal_gauge_info: InternalGaugeInfoSDKType;
  splitting_policy: SplittingPolicy;
}
/**
 * CreateGroup is called via governance to create a new group.
 * It takes an array of pool IDs to split the incentives across.
 */
export interface CreateGroup {
  /**
   * CreateGroup is called via governance to create a new group.
   * It takes an array of pool IDs to split the incentives across.
   */
  poolIds: Long[];
}
export interface CreateGroupProtoMsg {
  typeUrl: "/osmosis.incentives.CreateGroup";
  value: Uint8Array;
}
/**
 * CreateGroup is called via governance to create a new group.
 * It takes an array of pool IDs to split the incentives across.
 */
export interface CreateGroupAmino {
  /**
   * CreateGroup is called via governance to create a new group.
   * It takes an array of pool IDs to split the incentives across.
   */
  pool_ids: string[];
}
export interface CreateGroupAminoMsg {
  type: "osmosis/incentives/create-group";
  value: CreateGroupAmino;
}
/**
 * CreateGroup is called via governance to create a new group.
 * It takes an array of pool IDs to split the incentives across.
 */
export interface CreateGroupSDKType {
  pool_ids: Long[];
}
/**
 * GroupsWithGauge is a helper struct that stores a group and its
 * associated gauge.
 */
export interface GroupsWithGauge {
  group: Group;
  gauge: Gauge;
}
export interface GroupsWithGaugeProtoMsg {
  typeUrl: "/osmosis.incentives.GroupsWithGauge";
  value: Uint8Array;
}
/**
 * GroupsWithGauge is a helper struct that stores a group and its
 * associated gauge.
 */
export interface GroupsWithGaugeAmino {
  group?: GroupAmino;
  gauge?: GaugeAmino;
}
export interface GroupsWithGaugeAminoMsg {
  type: "osmosis/incentives/groups-with-gauge";
  value: GroupsWithGaugeAmino;
}
/**
 * GroupsWithGauge is a helper struct that stores a group and its
 * associated gauge.
 */
export interface GroupsWithGaugeSDKType {
  group: GroupSDKType;
  gauge: GaugeSDKType;
}
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
export interface TickInfo {
  liquidityGross: string;
  liquidityNet: string;
  spreadRewardGrowthOppositeDirectionOfLastTraversal: DecCoin[];
  /**
   * uptime_trackers is a container encapsulating the uptime trackers.
   * We use a container instead of a "repeated UptimeTracker" directly
   * because we need the ability to serialize and deserialize the
   * container easily for events when crossing a tick.
   */
  uptimeTrackers: UptimeTrackers;
}
export interface TickInfoProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickInfo";
  value: Uint8Array;
}
export interface TickInfoAmino {
  liquidity_gross: string;
  liquidity_net: string;
  spread_reward_growth_opposite_direction_of_last_traversal: DecCoinAmino[];
  /**
   * uptime_trackers is a container encapsulating the uptime trackers.
   * We use a container instead of a "repeated UptimeTracker" directly
   * because we need the ability to serialize and deserialize the
   * container easily for events when crossing a tick.
   */
  uptime_trackers?: UptimeTrackersAmino;
}
export interface TickInfoAminoMsg {
  type: "osmosis/concentratedliquidity/tick-info";
  value: TickInfoAmino;
}
export interface TickInfoSDKType {
  liquidity_gross: string;
  liquidity_net: string;
  spread_reward_growth_opposite_direction_of_last_traversal: DecCoinSDKType[];
  uptime_trackers: UptimeTrackersSDKType;
}
export interface UptimeTrackers {
  list: UptimeTracker[];
}
export interface UptimeTrackersProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.UptimeTrackers";
  value: Uint8Array;
}
export interface UptimeTrackersAmino {
  list: UptimeTrackerAmino[];
}
export interface UptimeTrackersAminoMsg {
  type: "osmosis/concentratedliquidity/uptime-trackers";
  value: UptimeTrackersAmino;
}
export interface UptimeTrackersSDKType {
  list: UptimeTrackerSDKType[];
}
export interface UptimeTracker {
  uptimeGrowthOutside: DecCoin[];
}
export interface UptimeTrackerProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.UptimeTracker";
  value: Uint8Array;
}
export interface UptimeTrackerAmino {
  uptime_growth_outside: DecCoinAmino[];
}
export interface UptimeTrackerAminoMsg {
  type: "osmosis/concentratedliquidity/uptime-tracker";
  value: UptimeTrackerAmino;
}
export interface UptimeTrackerSDKType {
  uptime_growth_outside: DecCoinSDKType[];
}
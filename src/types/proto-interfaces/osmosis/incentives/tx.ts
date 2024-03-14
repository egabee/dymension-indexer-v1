import { QueryCondition, QueryConditionAmino, QueryConditionSDKType } from "../lockup/lock";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long } from "../../helpers";
/** MsgCreateGauge creates a gague to distribute rewards to users */
export interface MsgCreateGauge {
  /**
   * is_perpetual shows if it's a perpetual or non-perpetual gauge
   * Non-perpetual gauges distribute their tokens equally per epoch while the
   * gauge is in the active period. Perpetual gauges distribute all their tokens
   * at a single time and only distribute their tokens again once the gauge is
   * refilled
   */
  isPerpetual: boolean;
  /** owner is the address of gauge creator */
  owner: string;
  /**
   * distribute_to show which lock the gauge should distribute to by time
   * duration or by timestamp
   */
  distributeTo: QueryCondition;
  /** coins are coin(s) to be distributed by the gauge */
  coins: Coin[];
  /** start_time is the distribution start time */
  startTime: Date;
  /**
   * num_epochs_paid_over is the number of epochs distribution will be completed
   * over
   */
  numEpochsPaidOver: Long;
  /**
   * pool_id is the ID of the pool that the gauge is meant to be associated
   * with. if pool_id is set, then the "QueryCondition.LockQueryType" must be
   * "NoLock" with all other fields of the "QueryCondition.LockQueryType" struct
   * unset, including "QueryCondition.Denom". However, note that, internally,
   * the empty string in "QueryCondition.Denom" ends up being overwritten with
   * incentivestypes.NoLockExternalGaugeDenom(<pool-id>) so that the gauges
   * associated with a pool can be queried by this prefix if needed.
   */
  poolId: Long;
}
export interface MsgCreateGaugeProtoMsg {
  typeUrl: "/osmosis.incentives.MsgCreateGauge";
  value: Uint8Array;
}
/** MsgCreateGauge creates a gague to distribute rewards to users */
export interface MsgCreateGaugeAmino {
  /**
   * is_perpetual shows if it's a perpetual or non-perpetual gauge
   * Non-perpetual gauges distribute their tokens equally per epoch while the
   * gauge is in the active period. Perpetual gauges distribute all their tokens
   * at a single time and only distribute their tokens again once the gauge is
   * refilled
   */
  is_perpetual: boolean;
  /** owner is the address of gauge creator */
  owner: string;
  /**
   * distribute_to show which lock the gauge should distribute to by time
   * duration or by timestamp
   */
  distribute_to?: QueryConditionAmino;
  /** coins are coin(s) to be distributed by the gauge */
  coins: CoinAmino[];
  /** start_time is the distribution start time */
  start_time?: Date;
  /**
   * num_epochs_paid_over is the number of epochs distribution will be completed
   * over
   */
  num_epochs_paid_over: string;
  /**
   * pool_id is the ID of the pool that the gauge is meant to be associated
   * with. if pool_id is set, then the "QueryCondition.LockQueryType" must be
   * "NoLock" with all other fields of the "QueryCondition.LockQueryType" struct
   * unset, including "QueryCondition.Denom". However, note that, internally,
   * the empty string in "QueryCondition.Denom" ends up being overwritten with
   * incentivestypes.NoLockExternalGaugeDenom(<pool-id>) so that the gauges
   * associated with a pool can be queried by this prefix if needed.
   */
  pool_id: string;
}
export interface MsgCreateGaugeAminoMsg {
  type: "osmosis/incentives/create-gauge";
  value: MsgCreateGaugeAmino;
}
/** MsgCreateGauge creates a gague to distribute rewards to users */
export interface MsgCreateGaugeSDKType {
  is_perpetual: boolean;
  owner: string;
  distribute_to: QueryConditionSDKType;
  coins: CoinSDKType[];
  start_time: Date;
  num_epochs_paid_over: Long;
  pool_id: Long;
}
export interface MsgCreateGaugeResponse {}
export interface MsgCreateGaugeResponseProtoMsg {
  typeUrl: "/osmosis.incentives.MsgCreateGaugeResponse";
  value: Uint8Array;
}
export interface MsgCreateGaugeResponseAmino {}
export interface MsgCreateGaugeResponseAminoMsg {
  type: "osmosis/incentives/create-gauge-response";
  value: MsgCreateGaugeResponseAmino;
}
export interface MsgCreateGaugeResponseSDKType {}
/** MsgAddToGauge adds coins to a previously created gauge */
export interface MsgAddToGauge {
  /** owner is the gauge owner's address */
  owner: string;
  /** gauge_id is the ID of gauge that rewards are getting added to */
  gaugeId: Long;
  /** rewards are the coin(s) to add to gauge */
  rewards: Coin[];
}
export interface MsgAddToGaugeProtoMsg {
  typeUrl: "/osmosis.incentives.MsgAddToGauge";
  value: Uint8Array;
}
/** MsgAddToGauge adds coins to a previously created gauge */
export interface MsgAddToGaugeAmino {
  /** owner is the gauge owner's address */
  owner: string;
  /** gauge_id is the ID of gauge that rewards are getting added to */
  gauge_id: string;
  /** rewards are the coin(s) to add to gauge */
  rewards: CoinAmino[];
}
export interface MsgAddToGaugeAminoMsg {
  type: "osmosis/incentives/add-to-gauge";
  value: MsgAddToGaugeAmino;
}
/** MsgAddToGauge adds coins to a previously created gauge */
export interface MsgAddToGaugeSDKType {
  owner: string;
  gauge_id: Long;
  rewards: CoinSDKType[];
}
export interface MsgAddToGaugeResponse {}
export interface MsgAddToGaugeResponseProtoMsg {
  typeUrl: "/osmosis.incentives.MsgAddToGaugeResponse";
  value: Uint8Array;
}
export interface MsgAddToGaugeResponseAmino {}
export interface MsgAddToGaugeResponseAminoMsg {
  type: "osmosis/incentives/add-to-gauge-response";
  value: MsgAddToGaugeResponseAmino;
}
export interface MsgAddToGaugeResponseSDKType {}
/** MsgCreateGroup creates a group to distribute rewards to a group of pools */
export interface MsgCreateGroup {
  /** coins are the provided coins that the group will distribute */
  coins: Coin[];
  /**
   * num_epochs_paid_over is the number of epochs distribution will be completed
   * in. 0 means it's perpetual
   */
  numEpochsPaidOver: Long;
  /** owner is the group owner's address */
  owner: string;
  /** pool_ids are the IDs of pools that the group is comprised of */
  poolIds: Long[];
}
export interface MsgCreateGroupProtoMsg {
  typeUrl: "/osmosis.incentives.MsgCreateGroup";
  value: Uint8Array;
}
/** MsgCreateGroup creates a group to distribute rewards to a group of pools */
export interface MsgCreateGroupAmino {
  /** coins are the provided coins that the group will distribute */
  coins: CoinAmino[];
  /**
   * num_epochs_paid_over is the number of epochs distribution will be completed
   * in. 0 means it's perpetual
   */
  num_epochs_paid_over: string;
  /** owner is the group owner's address */
  owner: string;
  /** pool_ids are the IDs of pools that the group is comprised of */
  pool_ids: string[];
}
export interface MsgCreateGroupAminoMsg {
  type: "osmosis/incentives/create-group";
  value: MsgCreateGroupAmino;
}
/** MsgCreateGroup creates a group to distribute rewards to a group of pools */
export interface MsgCreateGroupSDKType {
  coins: CoinSDKType[];
  num_epochs_paid_over: Long;
  owner: string;
  pool_ids: Long[];
}
export interface MsgCreateGroupResponse {
  /** group_id is the ID of the group that is created from this msg */
  groupId: Long;
}
export interface MsgCreateGroupResponseProtoMsg {
  typeUrl: "/osmosis.incentives.MsgCreateGroupResponse";
  value: Uint8Array;
}
export interface MsgCreateGroupResponseAmino {
  /** group_id is the ID of the group that is created from this msg */
  group_id: string;
}
export interface MsgCreateGroupResponseAminoMsg {
  type: "osmosis/incentives/create-group-response";
  value: MsgCreateGroupResponseAmino;
}
export interface MsgCreateGroupResponseSDKType {
  group_id: Long;
}
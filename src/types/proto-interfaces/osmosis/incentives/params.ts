import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
/** Params holds parameters for the incentives module */
export interface Params {
  /**
   * distr_epoch_identifier is what epoch type distribution will be triggered by
   * (day, week, etc.)
   */
  distrEpochIdentifier: string;
  /**
   * group_creation_fee is the fee required to create a new group
   * It is only charged to all addresses other than incentive module account
   * or addresses in the unrestricted_creator_whitelist
   */
  groupCreationFee: Coin[];
  /**
   * unrestricted_creator_whitelist is a list of addresses that are
   * allowed to bypass restrictions on permissionless Group
   * creation. In the future, we might expand these to creating gauges
   * as well.
   * The goal of this is to allow a subdao to manage incentives efficiently
   * without being stopped by 5 day governance process or a high fee.
   * At the same time, it prevents spam by having a fee for all
   * other users.
   */
  unrestrictedCreatorWhitelist: string[];
  /**
   * internal_uptime is the uptime used for internal incentives on pools that
   * use NoLock gauges (currently only Concentrated Liquidity pools).
   * 
   * Since Group gauges route through internal gauges, this parameter affects
   * the uptime of those incentives as well (i.e. distributions through volume
   * splitting incentives will use this uptime).
   */
  internalUptime: Duration;
  /**
   * min_value_for_distribution is the minimum amount a token must be worth
   * in order to be eligible for distribution. If the token is worth
   * less than this amount (or the route between the two denoms is not
   * registered), it will not be distributed and is forfeited to the remaining
   * distributees that are eligible.
   */
  minValueForDistribution: Coin;
}
export interface ParamsProtoMsg {
  typeUrl: "/osmosis.incentives.Params";
  value: Uint8Array;
}
/** Params holds parameters for the incentives module */
export interface ParamsAmino {
  /**
   * distr_epoch_identifier is what epoch type distribution will be triggered by
   * (day, week, etc.)
   */
  distr_epoch_identifier: string;
  /**
   * group_creation_fee is the fee required to create a new group
   * It is only charged to all addresses other than incentive module account
   * or addresses in the unrestricted_creator_whitelist
   */
  group_creation_fee: CoinAmino[];
  /**
   * unrestricted_creator_whitelist is a list of addresses that are
   * allowed to bypass restrictions on permissionless Group
   * creation. In the future, we might expand these to creating gauges
   * as well.
   * The goal of this is to allow a subdao to manage incentives efficiently
   * without being stopped by 5 day governance process or a high fee.
   * At the same time, it prevents spam by having a fee for all
   * other users.
   */
  unrestricted_creator_whitelist: string[];
  /**
   * internal_uptime is the uptime used for internal incentives on pools that
   * use NoLock gauges (currently only Concentrated Liquidity pools).
   * 
   * Since Group gauges route through internal gauges, this parameter affects
   * the uptime of those incentives as well (i.e. distributions through volume
   * splitting incentives will use this uptime).
   */
  internal_uptime?: DurationAmino;
  /**
   * min_value_for_distribution is the minimum amount a token must be worth
   * in order to be eligible for distribution. If the token is worth
   * less than this amount (or the route between the two denoms is not
   * registered), it will not be distributed and is forfeited to the remaining
   * distributees that are eligible.
   */
  min_value_for_distribution?: CoinAmino;
}
export interface ParamsAminoMsg {
  type: "osmosis/incentives/params";
  value: ParamsAmino;
}
/** Params holds parameters for the incentives module */
export interface ParamsSDKType {
  distr_epoch_identifier: string;
  group_creation_fee: CoinSDKType[];
  unrestricted_creator_whitelist: string[];
  internal_uptime: DurationSDKType;
  min_value_for_distribution: CoinSDKType;
}
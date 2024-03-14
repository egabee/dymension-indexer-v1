import { DistrInfo, DistrInfoAmino, DistrInfoSDKType } from "./distr_info";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long } from "../../helpers";
/**
 * Stream is an object that stores and distributes yields to recipients who
 * satisfy certain conditions. Currently streams support conditions around the
 * duration for which a given denom is locked.
 */
export interface Stream {
  /** id is the unique ID of a Stream */
  id: Long;
  /** distribute_to is the distr_info. */
  distributeTo: DistrInfo;
  /**
   * coins is the total amount of coins that have been in the stream
   * Can distribute multiple coin denoms
   */
  coins: Coin[];
  /** start_time is the distribution start time */
  startTime: Date;
  /**
   * distr_epoch_identifier is what epoch type di-stribution will be triggered by
   * (day, week, etc.)
   */
  distrEpochIdentifier: string;
  /**
   * num_epochs_paid_over is the number of total epochs distribution will be
   * completed over
   */
  numEpochsPaidOver: Long;
  /**
   * filled_epochs is the number of epochs distribution has been completed on
   * already
   */
  filledEpochs: Long;
  /** distributed_coins are coins that have been distributed already */
  distributedCoins: Coin[];
}
export interface StreamProtoMsg {
  typeUrl: "/dymensionxyz.dymension.streamer.Stream";
  value: Uint8Array;
}
/**
 * Stream is an object that stores and distributes yields to recipients who
 * satisfy certain conditions. Currently streams support conditions around the
 * duration for which a given denom is locked.
 */
export interface StreamAmino {
  /** id is the unique ID of a Stream */
  id: string;
  /** distribute_to is the distr_info. */
  distribute_to?: DistrInfoAmino;
  /**
   * coins is the total amount of coins that have been in the stream
   * Can distribute multiple coin denoms
   */
  coins: CoinAmino[];
  /** start_time is the distribution start time */
  start_time?: Date;
  /**
   * distr_epoch_identifier is what epoch type di-stribution will be triggered by
   * (day, week, etc.)
   */
  distr_epoch_identifier: string;
  /**
   * num_epochs_paid_over is the number of total epochs distribution will be
   * completed over
   */
  num_epochs_paid_over: string;
  /**
   * filled_epochs is the number of epochs distribution has been completed on
   * already
   */
  filled_epochs: string;
  /** distributed_coins are coins that have been distributed already */
  distributed_coins: CoinAmino[];
}
export interface StreamAminoMsg {
  type: "/dymensionxyz.dymension.streamer.Stream";
  value: StreamAmino;
}
/**
 * Stream is an object that stores and distributes yields to recipients who
 * satisfy certain conditions. Currently streams support conditions around the
 * duration for which a given denom is locked.
 */
export interface StreamSDKType {
  id: Long;
  distribute_to: DistrInfoSDKType;
  coins: CoinSDKType[];
  start_time: Date;
  distr_epoch_identifier: string;
  num_epochs_paid_over: Long;
  filled_epochs: Long;
  distributed_coins: CoinSDKType[];
}
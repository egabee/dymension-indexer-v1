import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
/** Params defines the parameters for the module. */
export interface Params {
  minBond: Coin;
  /** unbonding_time is the time duration of unbonding. */
  unbondingTime: Duration;
}
export interface ParamsProtoMsg {
  typeUrl: "/dymensionxyz.dymension.sequencer.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  min_bond?: CoinAmino;
  /** unbonding_time is the time duration of unbonding. */
  unbonding_time?: DurationAmino;
}
export interface ParamsAminoMsg {
  type: "/dymensionxyz.dymension.sequencer.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  min_bond: CoinSDKType;
  unbonding_time: DurationSDKType;
}
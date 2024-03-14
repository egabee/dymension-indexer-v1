/** Params holds parameters for the superfluid module */
export interface Params {
  /**
   * minimum_risk_factor is to be cut on OSMO equivalent value of lp tokens for
   * superfluid staking, default: 5%. The minimum risk factor works
   * to counter-balance the staked amount on chain's exposure to various asset
   * volatilities, and have base staking be 'resistant' to volatility.
   */
  minimumRiskFactor: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/osmosis.superfluid.Params";
  value: Uint8Array;
}
/** Params holds parameters for the superfluid module */
export interface ParamsAmino {
  /**
   * minimum_risk_factor is to be cut on OSMO equivalent value of lp tokens for
   * superfluid staking, default: 5%. The minimum risk factor works
   * to counter-balance the staked amount on chain's exposure to various asset
   * volatilities, and have base staking be 'resistant' to volatility.
   */
  minimum_risk_factor: string;
}
export interface ParamsAminoMsg {
  type: "osmosis/params";
  value: ParamsAmino;
}
/** Params holds parameters for the superfluid module */
export interface ParamsSDKType {
  minimum_risk_factor: string;
}
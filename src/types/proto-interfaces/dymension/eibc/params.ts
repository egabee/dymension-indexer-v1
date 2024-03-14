/** Params defines the parameters for the module. */
export interface Params {
  epochIdentifier: string;
  timeoutFee: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/dymensionxyz.dymension.eibc.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  epoch_identifier: string;
  timeout_fee: string;
}
export interface ParamsAminoMsg {
  type: "/dymensionxyz.dymension.eibc.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  epoch_identifier: string;
  timeout_fee: string;
}
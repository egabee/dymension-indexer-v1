/** Params defines the parameters for the module. */
export interface Params {
  epochIdentifier: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/dymensionxyz.dymension.delayedack.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  epoch_identifier: string;
}
export interface ParamsAminoMsg {
  type: "/dymensionxyz.dymension.delayedack.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  epoch_identifier: string;
}
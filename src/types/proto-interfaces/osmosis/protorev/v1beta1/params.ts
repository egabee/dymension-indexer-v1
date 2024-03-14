/** Params defines the parameters for the module. */
export interface Params {
  /** Boolean whether the protorev module is enabled. */
  enabled: boolean;
  /** The admin account (settings manager) of the protorev module. */
  admin: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  /** Boolean whether the protorev module is enabled. */
  enabled: boolean;
  /** The admin account (settings manager) of the protorev module. */
  admin: string;
}
export interface ParamsAminoMsg {
  type: "osmosis/protorev/params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  enabled: boolean;
  admin: string;
}
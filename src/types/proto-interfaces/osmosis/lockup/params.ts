export interface Params {
  forceUnlockAllowedAddresses: string[];
}
export interface ParamsProtoMsg {
  typeUrl: "/osmosis.lockup.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  force_unlock_allowed_addresses: string[];
}
export interface ParamsAminoMsg {
  type: "osmosis/lockup/params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  force_unlock_allowed_addresses: string[];
}
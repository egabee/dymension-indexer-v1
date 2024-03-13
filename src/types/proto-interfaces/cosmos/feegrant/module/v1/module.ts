/** Module is the config object of the feegrant module. */
export interface Module {}
export interface ModuleProtoMsg {
  typeUrl: "/cosmos.feegrant.module.v1.Module";
  value: Uint8Array;
}
/** Module is the config object of the feegrant module. */
export interface ModuleAmino {}
export interface ModuleAminoMsg {
  type: "cosmos-sdk/Module";
  value: ModuleAmino;
}
/** Module is the config object of the feegrant module. */
export interface ModuleSDKType {}
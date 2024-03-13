/** Module is the config object for the genutil module. */
export interface Module {}
export interface ModuleProtoMsg {
  typeUrl: "/cosmos.genutil.module.v1.Module";
  value: Uint8Array;
}
/** Module is the config object for the genutil module. */
export interface ModuleAmino {}
export interface ModuleAminoMsg {
  type: "cosmos-sdk/Module";
  value: ModuleAmino;
}
/** Module is the config object for the genutil module. */
export interface ModuleSDKType {}
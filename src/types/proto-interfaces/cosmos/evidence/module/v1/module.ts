/** Module is the config object of the evidence module. */
export interface Module {}
export interface ModuleProtoMsg {
  typeUrl: "/cosmos.evidence.module.v1.Module";
  value: Uint8Array;
}
/** Module is the config object of the evidence module. */
export interface ModuleAmino {}
export interface ModuleAminoMsg {
  type: "cosmos-sdk/Module";
  value: ModuleAmino;
}
/** Module is the config object of the evidence module. */
export interface ModuleSDKType {}
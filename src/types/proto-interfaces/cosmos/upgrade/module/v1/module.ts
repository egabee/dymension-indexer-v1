/** Module is the config object of the upgrade module. */
export interface Module {
  /** authority defines the custom module authority. If not set, defaults to the governance module. */
  authority: string;
}
export interface ModuleProtoMsg {
  typeUrl: "/cosmos.upgrade.module.v1.Module";
  value: Uint8Array;
}
/** Module is the config object of the upgrade module. */
export interface ModuleAmino {
  /** authority defines the custom module authority. If not set, defaults to the governance module. */
  authority: string;
}
export interface ModuleAminoMsg {
  type: "cosmos-sdk/Module";
  value: ModuleAmino;
}
/** Module is the config object of the upgrade module. */
export interface ModuleSDKType {
  authority: string;
}
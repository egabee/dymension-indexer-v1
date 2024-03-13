/** Module is the config object of the mint module. */
export interface Module {
  feeCollectorName: string;
  /** authority defines the custom module authority. If not set, defaults to the governance module. */
  authority: string;
}
export interface ModuleProtoMsg {
  typeUrl: "/cosmos.mint.module.v1.Module";
  value: Uint8Array;
}
/** Module is the config object of the mint module. */
export interface ModuleAmino {
  fee_collector_name: string;
  /** authority defines the custom module authority. If not set, defaults to the governance module. */
  authority: string;
}
export interface ModuleAminoMsg {
  type: "cosmos-sdk/Module";
  value: ModuleAmino;
}
/** Module is the config object of the mint module. */
export interface ModuleSDKType {
  fee_collector_name: string;
  authority: string;
}
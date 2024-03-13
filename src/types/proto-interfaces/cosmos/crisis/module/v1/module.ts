/** Module is the config object of the crisis module. */
export interface Module {
  /** fee_collector_name is the name of the FeeCollector ModuleAccount. */
  feeCollectorName: string;
  /** authority defines the custom module authority. If not set, defaults to the governance module. */
  authority: string;
}
export interface ModuleProtoMsg {
  typeUrl: "/cosmos.crisis.module.v1.Module";
  value: Uint8Array;
}
/** Module is the config object of the crisis module. */
export interface ModuleAmino {
  /** fee_collector_name is the name of the FeeCollector ModuleAccount. */
  fee_collector_name: string;
  /** authority defines the custom module authority. If not set, defaults to the governance module. */
  authority: string;
}
export interface ModuleAminoMsg {
  type: "cosmos-sdk/Module";
  value: ModuleAmino;
}
/** Module is the config object of the crisis module. */
export interface ModuleSDKType {
  fee_collector_name: string;
  authority: string;
}
/** Module is the config object of the nft module. */
export interface Module {}
export interface ModuleProtoMsg {
  typeUrl: "/cosmos.nft.module.v1.Module";
  value: Uint8Array;
}
/** Module is the config object of the nft module. */
export interface ModuleAmino {}
export interface ModuleAminoMsg {
  type: "cosmos-sdk/Module";
  value: ModuleAmino;
}
/** Module is the config object of the nft module. */
export interface ModuleSDKType {}
import { Downtime } from "./downtime_duration";
export interface GenesisDowntimeEntry {
  duration: Downtime;
  lastDowntime: Date;
}
export interface GenesisDowntimeEntryProtoMsg {
  typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisDowntimeEntry";
  value: Uint8Array;
}
export interface GenesisDowntimeEntryAmino {
  duration: Downtime;
  last_downtime?: Date;
}
export interface GenesisDowntimeEntryAminoMsg {
  type: "osmosis/downtimedetector/genesis-downtime-entry";
  value: GenesisDowntimeEntryAmino;
}
export interface GenesisDowntimeEntrySDKType {
  duration: Downtime;
  last_downtime: Date;
}
/** GenesisState defines the twap module's genesis state. */
export interface GenesisState {
  downtimes: GenesisDowntimeEntry[];
  lastBlockTime: Date;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the twap module's genesis state. */
export interface GenesisStateAmino {
  downtimes: GenesisDowntimeEntryAmino[];
  last_block_time?: Date;
}
export interface GenesisStateAminoMsg {
  type: "osmosis/downtimedetector/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the twap module's genesis state. */
export interface GenesisStateSDKType {
  downtimes: GenesisDowntimeEntrySDKType[];
  last_block_time: Date;
}
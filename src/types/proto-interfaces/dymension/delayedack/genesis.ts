import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { RollappPacket, RollappPacketAmino, RollappPacketSDKType } from "../common/rollapp_packet";
/** GenesisState defines the delayedack module's genesis state. */
export interface GenesisState {
  /** params are all the parameters of the module */
  params: Params;
  /** streams are all streams that should exist at genesis */
  rollappPackets: RollappPacket[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/dymensionxyz.dymension.delayedack.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the delayedack module's genesis state. */
export interface GenesisStateAmino {
  /** params are all the parameters of the module */
  params?: ParamsAmino;
  /** streams are all streams that should exist at genesis */
  rollapp_packets: RollappPacketAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/dymensionxyz.dymension.delayedack.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the delayedack module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  rollapp_packets: RollappPacketSDKType[];
}
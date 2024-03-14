import { Packet, PacketAmino, PacketSDKType } from "../../ibc/core/channel/v1/channel";
import { Status } from "./status";
import { Long } from "../../helpers";
export enum RollappPacket_Type {
  ON_RECV = 0,
  ON_ACK = 1,
  ON_TIMEOUT = 2,
  UNRECOGNIZED = -1,
}
export const RollappPacket_TypeSDKType = RollappPacket_Type;
export const RollappPacket_TypeAmino = RollappPacket_Type;
export function rollappPacket_TypeFromJSON(object: any): RollappPacket_Type {
  switch (object) {
    case 0:
    case "ON_RECV":
      return RollappPacket_Type.ON_RECV;
    case 1:
    case "ON_ACK":
      return RollappPacket_Type.ON_ACK;
    case 2:
    case "ON_TIMEOUT":
      return RollappPacket_Type.ON_TIMEOUT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RollappPacket_Type.UNRECOGNIZED;
  }
}
export function rollappPacket_TypeToJSON(object: RollappPacket_Type): string {
  switch (object) {
    case RollappPacket_Type.ON_RECV:
      return "ON_RECV";
    case RollappPacket_Type.ON_ACK:
      return "ON_ACK";
    case RollappPacket_Type.ON_TIMEOUT:
      return "ON_TIMEOUT";
    case RollappPacket_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface RollappPacket {
  rollappId: string;
  packet: Packet;
  acknowledgement: Uint8Array;
  status: Status;
  ProofHeight: Long;
  relayer: Uint8Array;
  type: RollappPacket_Type;
  error: string;
}
export interface RollappPacketProtoMsg {
  typeUrl: "/dymensionxyz.dymension.common.RollappPacket";
  value: Uint8Array;
}
export interface RollappPacketAmino {
  rollapp_id: string;
  packet?: PacketAmino;
  acknowledgement: Uint8Array;
  status: Status;
  ProofHeight: string;
  relayer: Uint8Array;
  type: RollappPacket_Type;
  error: string;
}
export interface RollappPacketAminoMsg {
  type: "/dymensionxyz.dymension.common.RollappPacket";
  value: RollappPacketAmino;
}
export interface RollappPacketSDKType {
  rollapp_id: string;
  packet: PacketSDKType;
  acknowledgement: Uint8Array;
  status: Status;
  ProofHeight: Long;
  relayer: Uint8Array;
  type: RollappPacket_Type;
  error: string;
}
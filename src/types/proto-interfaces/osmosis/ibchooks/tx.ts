import { Long } from "../../helpers";
export interface MsgEmitIBCAck {
  sender: string;
  packetSequence: Long;
  channel: string;
}
export interface MsgEmitIBCAckProtoMsg {
  typeUrl: "/osmosis.ibchooks.MsgEmitIBCAck";
  value: Uint8Array;
}
export interface MsgEmitIBCAckAmino {
  sender: string;
  packet_sequence: string;
  channel: string;
}
export interface MsgEmitIBCAckAminoMsg {
  type: "osmosis/ibchooks/emit-ibc-ack";
  value: MsgEmitIBCAckAmino;
}
export interface MsgEmitIBCAckSDKType {
  sender: string;
  packet_sequence: Long;
  channel: string;
}
export interface MsgEmitIBCAckResponse {
  contractResult: string;
  ibcAck: string;
}
export interface MsgEmitIBCAckResponseProtoMsg {
  typeUrl: "/osmosis.ibchooks.MsgEmitIBCAckResponse";
  value: Uint8Array;
}
export interface MsgEmitIBCAckResponseAmino {
  contract_result: string;
  ibc_ack: string;
}
export interface MsgEmitIBCAckResponseAminoMsg {
  type: "osmosis/ibchooks/emit-ibc-ack-response";
  value: MsgEmitIBCAckResponseAmino;
}
export interface MsgEmitIBCAckResponseSDKType {
  contract_result: string;
  ibc_ack: string;
}
import { Fee, FeeAmino, FeeSDKType, PacketFee, PacketFeeAmino, PacketFeeSDKType } from "./fee";
import { PacketId, PacketIdAmino, PacketIdSDKType } from "../../../core/channel/v1/channel";
/** MsgRegisterPayee defines the request type for the RegisterPayee rpc */
export interface MsgRegisterPayee {
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */
  channelId: string;
  /** the relayer address */
  relayer: string;
  /** the payee address */
  payee: string;
}
export interface MsgRegisterPayeeProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayee";
  value: Uint8Array;
}
/** MsgRegisterPayee defines the request type for the RegisterPayee rpc */
export interface MsgRegisterPayeeAmino {
  /** unique port identifier */
  port_id: string;
  /** unique channel identifier */
  channel_id: string;
  /** the relayer address */
  relayer: string;
  /** the payee address */
  payee: string;
}
export interface MsgRegisterPayeeAminoMsg {
  type: "cosmos-sdk/MsgRegisterPayee";
  value: MsgRegisterPayeeAmino;
}
/** MsgRegisterPayee defines the request type for the RegisterPayee rpc */
export interface MsgRegisterPayeeSDKType {
  port_id: string;
  channel_id: string;
  relayer: string;
  payee: string;
}
/** MsgRegisterPayeeResponse defines the response type for the RegisterPayee rpc */
export interface MsgRegisterPayeeResponse {}
export interface MsgRegisterPayeeResponseProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayeeResponse";
  value: Uint8Array;
}
/** MsgRegisterPayeeResponse defines the response type for the RegisterPayee rpc */
export interface MsgRegisterPayeeResponseAmino {}
export interface MsgRegisterPayeeResponseAminoMsg {
  type: "cosmos-sdk/MsgRegisterPayeeResponse";
  value: MsgRegisterPayeeResponseAmino;
}
/** MsgRegisterPayeeResponse defines the response type for the RegisterPayee rpc */
export interface MsgRegisterPayeeResponseSDKType {}
/** MsgRegisterCounterpartyPayee defines the request type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayee {
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */
  channelId: string;
  /** the relayer address */
  relayer: string;
  /** the counterparty payee address */
  counterpartyPayee: string;
}
export interface MsgRegisterCounterpartyPayeeProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee";
  value: Uint8Array;
}
/** MsgRegisterCounterpartyPayee defines the request type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayeeAmino {
  /** unique port identifier */
  port_id: string;
  /** unique channel identifier */
  channel_id: string;
  /** the relayer address */
  relayer: string;
  /** the counterparty payee address */
  counterparty_payee: string;
}
export interface MsgRegisterCounterpartyPayeeAminoMsg {
  type: "cosmos-sdk/MsgRegisterCounterpartyPayee";
  value: MsgRegisterCounterpartyPayeeAmino;
}
/** MsgRegisterCounterpartyPayee defines the request type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayeeSDKType {
  port_id: string;
  channel_id: string;
  relayer: string;
  counterparty_payee: string;
}
/** MsgRegisterCounterpartyPayeeResponse defines the response type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayeeResponse {}
export interface MsgRegisterCounterpartyPayeeResponseProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayeeResponse";
  value: Uint8Array;
}
/** MsgRegisterCounterpartyPayeeResponse defines the response type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayeeResponseAmino {}
export interface MsgRegisterCounterpartyPayeeResponseAminoMsg {
  type: "cosmos-sdk/MsgRegisterCounterpartyPayeeResponse";
  value: MsgRegisterCounterpartyPayeeResponseAmino;
}
/** MsgRegisterCounterpartyPayeeResponse defines the response type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayeeResponseSDKType {}
/**
 * MsgPayPacketFee defines the request type for the PayPacketFee rpc
 * This Msg can be used to pay for a packet at the next sequence send & should be combined with the Msg that will be
 * paid for
 */
export interface MsgPayPacketFee {
  /** fee encapsulates the recv, ack and timeout fees associated with an IBC packet */
  fee: Fee;
  /** the source port unique identifier */
  sourcePortId: string;
  /** the source channel unique identifer */
  sourceChannelId: string;
  /** account address to refund fee if necessary */
  signer: string;
  /** optional list of relayers permitted to the receive packet fees */
  relayers: string[];
}
export interface MsgPayPacketFeeProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee";
  value: Uint8Array;
}
/**
 * MsgPayPacketFee defines the request type for the PayPacketFee rpc
 * This Msg can be used to pay for a packet at the next sequence send & should be combined with the Msg that will be
 * paid for
 */
export interface MsgPayPacketFeeAmino {
  /** fee encapsulates the recv, ack and timeout fees associated with an IBC packet */
  fee?: FeeAmino;
  /** the source port unique identifier */
  source_port_id: string;
  /** the source channel unique identifer */
  source_channel_id: string;
  /** account address to refund fee if necessary */
  signer: string;
  /** optional list of relayers permitted to the receive packet fees */
  relayers: string[];
}
export interface MsgPayPacketFeeAminoMsg {
  type: "cosmos-sdk/MsgPayPacketFee";
  value: MsgPayPacketFeeAmino;
}
/**
 * MsgPayPacketFee defines the request type for the PayPacketFee rpc
 * This Msg can be used to pay for a packet at the next sequence send & should be combined with the Msg that will be
 * paid for
 */
export interface MsgPayPacketFeeSDKType {
  fee: FeeSDKType;
  source_port_id: string;
  source_channel_id: string;
  signer: string;
  relayers: string[];
}
/** MsgPayPacketFeeResponse defines the response type for the PayPacketFee rpc */
export interface MsgPayPacketFeeResponse {}
export interface MsgPayPacketFeeResponseProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeResponse";
  value: Uint8Array;
}
/** MsgPayPacketFeeResponse defines the response type for the PayPacketFee rpc */
export interface MsgPayPacketFeeResponseAmino {}
export interface MsgPayPacketFeeResponseAminoMsg {
  type: "cosmos-sdk/MsgPayPacketFeeResponse";
  value: MsgPayPacketFeeResponseAmino;
}
/** MsgPayPacketFeeResponse defines the response type for the PayPacketFee rpc */
export interface MsgPayPacketFeeResponseSDKType {}
/**
 * MsgPayPacketFeeAsync defines the request type for the PayPacketFeeAsync rpc
 * This Msg can be used to pay for a packet at a specified sequence (instead of the next sequence send)
 */
export interface MsgPayPacketFeeAsync {
  /** unique packet identifier comprised of the channel ID, port ID and sequence */
  packetId: PacketId;
  /** the packet fee associated with a particular IBC packet */
  packetFee: PacketFee;
}
export interface MsgPayPacketFeeAsyncProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync";
  value: Uint8Array;
}
/**
 * MsgPayPacketFeeAsync defines the request type for the PayPacketFeeAsync rpc
 * This Msg can be used to pay for a packet at a specified sequence (instead of the next sequence send)
 */
export interface MsgPayPacketFeeAsyncAmino {
  /** unique packet identifier comprised of the channel ID, port ID and sequence */
  packet_id?: PacketIdAmino;
  /** the packet fee associated with a particular IBC packet */
  packet_fee?: PacketFeeAmino;
}
export interface MsgPayPacketFeeAsyncAminoMsg {
  type: "cosmos-sdk/MsgPayPacketFeeAsync";
  value: MsgPayPacketFeeAsyncAmino;
}
/**
 * MsgPayPacketFeeAsync defines the request type for the PayPacketFeeAsync rpc
 * This Msg can be used to pay for a packet at a specified sequence (instead of the next sequence send)
 */
export interface MsgPayPacketFeeAsyncSDKType {
  packet_id: PacketIdSDKType;
  packet_fee: PacketFeeSDKType;
}
/** MsgPayPacketFeeAsyncResponse defines the response type for the PayPacketFeeAsync rpc */
export interface MsgPayPacketFeeAsyncResponse {}
export interface MsgPayPacketFeeAsyncResponseProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsyncResponse";
  value: Uint8Array;
}
/** MsgPayPacketFeeAsyncResponse defines the response type for the PayPacketFeeAsync rpc */
export interface MsgPayPacketFeeAsyncResponseAmino {}
export interface MsgPayPacketFeeAsyncResponseAminoMsg {
  type: "cosmos-sdk/MsgPayPacketFeeAsyncResponse";
  value: MsgPayPacketFeeAsyncResponseAmino;
}
/** MsgPayPacketFeeAsyncResponse defines the response type for the PayPacketFeeAsync rpc */
export interface MsgPayPacketFeeAsyncResponseSDKType {}
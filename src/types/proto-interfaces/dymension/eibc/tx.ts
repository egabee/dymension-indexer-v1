/** MsgFulfillOrder defines the FullfillOrder request type. */
export interface MsgFulfillOrder {
  /** fulfiller_address is the bech32-encoded address of the account which the message was sent from. */
  fulfillerAddress: string;
  orderId: string;
}
export interface MsgFulfillOrderProtoMsg {
  typeUrl: "/dymensionxyz.dymension.eibc.MsgFulfillOrder";
  value: Uint8Array;
}
/** MsgFulfillOrder defines the FullfillOrder request type. */
export interface MsgFulfillOrderAmino {
  /** fulfiller_address is the bech32-encoded address of the account which the message was sent from. */
  fulfiller_address: string;
  order_id: string;
}
export interface MsgFulfillOrderAminoMsg {
  type: "/dymensionxyz.dymension.eibc.MsgFulfillOrder";
  value: MsgFulfillOrderAmino;
}
/** MsgFulfillOrder defines the FullfillOrder request type. */
export interface MsgFulfillOrderSDKType {
  fulfiller_address: string;
  order_id: string;
}
/** MsgFulfillOrderResponse defines the FullfillOrder response type. */
export interface MsgFulfillOrderResponse {}
export interface MsgFulfillOrderResponseProtoMsg {
  typeUrl: "/dymensionxyz.dymension.eibc.MsgFulfillOrderResponse";
  value: Uint8Array;
}
/** MsgFulfillOrderResponse defines the FullfillOrder response type. */
export interface MsgFulfillOrderResponseAmino {}
export interface MsgFulfillOrderResponseAminoMsg {
  type: "/dymensionxyz.dymension.eibc.MsgFulfillOrderResponse";
  value: MsgFulfillOrderResponseAmino;
}
/** MsgFulfillOrderResponse defines the FullfillOrder response type. */
export interface MsgFulfillOrderResponseSDKType {}
/** EventSend is emitted on Msg/Send */
export interface EventSend {
  /** class_id associated with the nft */
  classId: string;
  /** id is a unique identifier of the nft */
  id: string;
  /** sender is the address of the owner of nft */
  sender: string;
  /** receiver is the receiver address of nft */
  receiver: string;
}
export interface EventSendProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.EventSend";
  value: Uint8Array;
}
/** EventSend is emitted on Msg/Send */
export interface EventSendAmino {
  /** class_id associated with the nft */
  class_id: string;
  /** id is a unique identifier of the nft */
  id: string;
  /** sender is the address of the owner of nft */
  sender: string;
  /** receiver is the receiver address of nft */
  receiver: string;
}
export interface EventSendAminoMsg {
  type: "cosmos-sdk/EventSend";
  value: EventSendAmino;
}
/** EventSend is emitted on Msg/Send */
export interface EventSendSDKType {
  class_id: string;
  id: string;
  sender: string;
  receiver: string;
}
/** EventMint is emitted on Mint */
export interface EventMint {
  /** class_id associated with the nft */
  classId: string;
  /** id is a unique identifier of the nft */
  id: string;
  /** owner is the owner address of the nft */
  owner: string;
}
export interface EventMintProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.EventMint";
  value: Uint8Array;
}
/** EventMint is emitted on Mint */
export interface EventMintAmino {
  /** class_id associated with the nft */
  class_id: string;
  /** id is a unique identifier of the nft */
  id: string;
  /** owner is the owner address of the nft */
  owner: string;
}
export interface EventMintAminoMsg {
  type: "cosmos-sdk/EventMint";
  value: EventMintAmino;
}
/** EventMint is emitted on Mint */
export interface EventMintSDKType {
  class_id: string;
  id: string;
  owner: string;
}
/** EventBurn is emitted on Burn */
export interface EventBurn {
  /** class_id associated with the nft */
  classId: string;
  /** id is a unique identifier of the nft */
  id: string;
  /** owner is the owner address of the nft */
  owner: string;
}
export interface EventBurnProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.EventBurn";
  value: Uint8Array;
}
/** EventBurn is emitted on Burn */
export interface EventBurnAmino {
  /** class_id associated with the nft */
  class_id: string;
  /** id is a unique identifier of the nft */
  id: string;
  /** owner is the owner address of the nft */
  owner: string;
}
export interface EventBurnAminoMsg {
  type: "cosmos-sdk/EventBurn";
  value: EventBurnAmino;
}
/** EventBurn is emitted on Burn */
export interface EventBurnSDKType {
  class_id: string;
  id: string;
  owner: string;
}
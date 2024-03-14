import { Asset, AssetAmino, AssetSDKType, AssetWithStatus, AssetWithStatusAmino, AssetWithStatusSDKType, AssetStatus } from "./bridge";
export interface EventInboundTransfer {
  /** Sender is a sender's address */
  sender: string;
  /** DestAddr is a destination Osmosis address */
  destAddr: string;
  /** Asset contains a source chain and a target denom */
  asset: Asset;
  /** Amount of coins to transfer */
  amount: string;
}
export interface EventInboundTransferProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.EventInboundTransfer";
  value: Uint8Array;
}
export interface EventInboundTransferAmino {
  /** Sender is a sender's address */
  sender: string;
  /** DestAddr is a destination Osmosis address */
  dest_addr: string;
  /** Asset contains a source chain and a target denom */
  asset?: AssetAmino;
  /** Amount of coins to transfer */
  amount: string;
}
export interface EventInboundTransferAminoMsg {
  type: "osmosis/bridge/event-inbound-transfer";
  value: EventInboundTransferAmino;
}
export interface EventInboundTransferSDKType {
  sender: string;
  dest_addr: string;
  asset: AssetSDKType;
  amount: string;
}
export interface EventOutboundTransfer {
  /** Sender is a sender's address */
  sender: string;
  /** DestAddr is a destination Osmosis address */
  destAddr: string;
  /** Asset contains a source chain and a target denom */
  asset: Asset;
  /** Amount of coins to transfer */
  amount: string;
}
export interface EventOutboundTransferProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.EventOutboundTransfer";
  value: Uint8Array;
}
export interface EventOutboundTransferAmino {
  /** Sender is a sender's address */
  sender: string;
  /** DestAddr is a destination Osmosis address */
  dest_addr: string;
  /** Asset contains a source chain and a target denom */
  asset?: AssetAmino;
  /** Amount of coins to transfer */
  amount: string;
}
export interface EventOutboundTransferAminoMsg {
  type: "osmosis/bridge/event-outbound-transfer";
  value: EventOutboundTransferAmino;
}
export interface EventOutboundTransferSDKType {
  sender: string;
  dest_addr: string;
  asset: AssetSDKType;
  amount: string;
}
export interface EventUpdateParams {
  newSigners: string[];
  createdSigners: string[];
  deletedSigners: string[];
  newAssets: AssetWithStatus[];
  createdAssets: AssetWithStatus[];
  deletedAssets: AssetWithStatus[];
}
export interface EventUpdateParamsProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.EventUpdateParams";
  value: Uint8Array;
}
export interface EventUpdateParamsAmino {
  new_signers: string[];
  created_signers: string[];
  deleted_signers: string[];
  new_assets: AssetWithStatusAmino[];
  created_assets: AssetWithStatusAmino[];
  deleted_assets: AssetWithStatusAmino[];
}
export interface EventUpdateParamsAminoMsg {
  type: "osmosis/bridge/event-update-params";
  value: EventUpdateParamsAmino;
}
export interface EventUpdateParamsSDKType {
  new_signers: string[];
  created_signers: string[];
  deleted_signers: string[];
  new_assets: AssetWithStatusSDKType[];
  created_assets: AssetWithStatusSDKType[];
  deleted_assets: AssetWithStatusSDKType[];
}
export interface EventChangeAssetStatus {
  sender: string;
  asset: Asset;
  oldAssetStatus: AssetStatus;
  newAssetStatus: AssetStatus;
}
export interface EventChangeAssetStatusProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.EventChangeAssetStatus";
  value: Uint8Array;
}
export interface EventChangeAssetStatusAmino {
  sender: string;
  asset?: AssetAmino;
  old_asset_status: AssetStatus;
  new_asset_status: AssetStatus;
}
export interface EventChangeAssetStatusAminoMsg {
  type: "osmosis/bridge/event-change-asset-status";
  value: EventChangeAssetStatusAmino;
}
export interface EventChangeAssetStatusSDKType {
  sender: string;
  asset: AssetSDKType;
  old_asset_status: AssetStatus;
  new_asset_status: AssetStatus;
}
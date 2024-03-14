import { Asset, AssetAmino, AssetSDKType, Params, ParamsAmino, ParamsSDKType, AssetStatus } from "./bridge";
/**
 * MsgInboundTransfer defines the message structure for the InboundTransfer gRPC
 * service method. It allows a sender to perform an inbound cross-chain
 * transfer, i.e., to transfer their tokens from the source chain to Osmosis and
 * get the equivalent amount of the corresponding token (specified in subdenom)
 * on Osmosis in return. The tokens are minted through the x/tokenfactory module
 * to the destination address.
 */
export interface MsgInboundTransfer {
  /** Sender is a sender's address */
  sender: string;
  /** DestAddr is a destination Osmosis address */
  destAddr: string;
  /** Asset contains a source chain and a target denom */
  asset: Asset;
  /** Amount of coins to transfer */
  amount: string;
}
export interface MsgInboundTransferProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.MsgInboundTransfer";
  value: Uint8Array;
}
/**
 * MsgInboundTransfer defines the message structure for the InboundTransfer gRPC
 * service method. It allows a sender to perform an inbound cross-chain
 * transfer, i.e., to transfer their tokens from the source chain to Osmosis and
 * get the equivalent amount of the corresponding token (specified in subdenom)
 * on Osmosis in return. The tokens are minted through the x/tokenfactory module
 * to the destination address.
 */
export interface MsgInboundTransferAmino {
  /** Sender is a sender's address */
  sender: string;
  /** DestAddr is a destination Osmosis address */
  dest_addr: string;
  /** Asset contains a source chain and a target denom */
  asset?: AssetAmino;
  /** Amount of coins to transfer */
  amount: string;
}
export interface MsgInboundTransferAminoMsg {
  type: "osmosis/bridge/inbound-transfer";
  value: MsgInboundTransferAmino;
}
/**
 * MsgInboundTransfer defines the message structure for the InboundTransfer gRPC
 * service method. It allows a sender to perform an inbound cross-chain
 * transfer, i.e., to transfer their tokens from the source chain to Osmosis and
 * get the equivalent amount of the corresponding token (specified in subdenom)
 * on Osmosis in return. The tokens are minted through the x/tokenfactory module
 * to the destination address.
 */
export interface MsgInboundTransferSDKType {
  sender: string;
  dest_addr: string;
  asset: AssetSDKType;
  amount: string;
}
export interface MsgInboundTransferResponse {}
export interface MsgInboundTransferResponseProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.MsgInboundTransferResponse";
  value: Uint8Array;
}
export interface MsgInboundTransferResponseAmino {}
export interface MsgInboundTransferResponseAminoMsg {
  type: "osmosis/bridge/inbound-transfer-response";
  value: MsgInboundTransferResponseAmino;
}
export interface MsgInboundTransferResponseSDKType {}
/**
 * MsgOutboundTransfer defines the message structure for the OutboundTransfer
 * gRPC service method. It allows a sender to perform an outbound cross-chain
 * transfer, i.e., to transfer their tokens from Osmosis to the destination
 * chain. The tokens are burned through the x/tokenfactory module from the
 * sender's address.
 */
export interface MsgOutboundTransfer {
  /** Sender is a sender's Osmosis address */
  sender: string;
  /** DestAddr is a destination address */
  destAddr: string;
  /** Asset contains a target chain and a source denom */
  asset: Asset;
  /** Amount of coins to transfer */
  amount: string;
}
export interface MsgOutboundTransferProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.MsgOutboundTransfer";
  value: Uint8Array;
}
/**
 * MsgOutboundTransfer defines the message structure for the OutboundTransfer
 * gRPC service method. It allows a sender to perform an outbound cross-chain
 * transfer, i.e., to transfer their tokens from Osmosis to the destination
 * chain. The tokens are burned through the x/tokenfactory module from the
 * sender's address.
 */
export interface MsgOutboundTransferAmino {
  /** Sender is a sender's Osmosis address */
  sender: string;
  /** DestAddr is a destination address */
  dest_addr: string;
  /** Asset contains a target chain and a source denom */
  asset?: AssetAmino;
  /** Amount of coins to transfer */
  amount: string;
}
export interface MsgOutboundTransferAminoMsg {
  type: "osmosis/bridge/outbound-transfer";
  value: MsgOutboundTransferAmino;
}
/**
 * MsgOutboundTransfer defines the message structure for the OutboundTransfer
 * gRPC service method. It allows a sender to perform an outbound cross-chain
 * transfer, i.e., to transfer their tokens from Osmosis to the destination
 * chain. The tokens are burned through the x/tokenfactory module from the
 * sender's address.
 */
export interface MsgOutboundTransferSDKType {
  sender: string;
  dest_addr: string;
  asset: AssetSDKType;
  amount: string;
}
export interface MsgOutboundTransferResponse {}
export interface MsgOutboundTransferResponseProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.MsgOutboundTransferResponse";
  value: Uint8Array;
}
export interface MsgOutboundTransferResponseAmino {}
export interface MsgOutboundTransferResponseAminoMsg {
  type: "osmosis/bridge/outbound-transfer-response";
  value: MsgOutboundTransferResponseAmino;
}
export interface MsgOutboundTransferResponseSDKType {}
/**
 * MsgUpdateParams allows to update module params. It contains UpdateParams
 * instead of just Params to forbid status updating using this method.
 * All new assets introduced with this method have ASSET_STATUS_BLOCKED_BOTH
 * status by default.
 */
export interface MsgUpdateParams {
  /** Sender is a sender's address */
  sender: string;
  /** NewParams should be fully populated */
  newParams: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams allows to update module params. It contains UpdateParams
 * instead of just Params to forbid status updating using this method.
 * All new assets introduced with this method have ASSET_STATUS_BLOCKED_BOTH
 * status by default.
 */
export interface MsgUpdateParamsAmino {
  /** Sender is a sender's address */
  sender: string;
  /** NewParams should be fully populated */
  new_params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "osmosis/bridge/update-params";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams allows to update module params. It contains UpdateParams
 * instead of just Params to forbid status updating using this method.
 * All new assets introduced with this method have ASSET_STATUS_BLOCKED_BOTH
 * status by default.
 */
export interface MsgUpdateParamsSDKType {
  sender: string;
  new_params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "osmosis/bridge/update-params-response";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {}
/** MsgChangeAssetStatus changes the status of the provided asset. */
export interface MsgChangeAssetStatus {
  /** Sender is a sender's address */
  sender: string;
  /**
   * Asset is an asset to update.
   * The asset should be known; otherwise, the method will failed.
   */
  asset: Asset;
  /** NewAssetStatus is a new asset's status. */
  newAssetStatus: AssetStatus;
}
export interface MsgChangeAssetStatusProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.MsgChangeAssetStatus";
  value: Uint8Array;
}
/** MsgChangeAssetStatus changes the status of the provided asset. */
export interface MsgChangeAssetStatusAmino {
  /** Sender is a sender's address */
  sender: string;
  /**
   * Asset is an asset to update.
   * The asset should be known; otherwise, the method will failed.
   */
  asset?: AssetAmino;
  /** NewAssetStatus is a new asset's status. */
  new_asset_status: AssetStatus;
}
export interface MsgChangeAssetStatusAminoMsg {
  type: "osmosis/bridge/change-asset-status";
  value: MsgChangeAssetStatusAmino;
}
/** MsgChangeAssetStatus changes the status of the provided asset. */
export interface MsgChangeAssetStatusSDKType {
  sender: string;
  asset: AssetSDKType;
  new_asset_status: AssetStatus;
}
export interface MsgChangeAssetStatusResponse {}
export interface MsgChangeAssetStatusResponseProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.MsgChangeAssetStatusResponse";
  value: Uint8Array;
}
export interface MsgChangeAssetStatusResponseAmino {}
export interface MsgChangeAssetStatusResponseAminoMsg {
  type: "osmosis/bridge/change-asset-status-response";
  value: MsgChangeAssetStatusResponseAmino;
}
export interface MsgChangeAssetStatusResponseSDKType {}
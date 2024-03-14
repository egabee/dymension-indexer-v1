import { Long } from "../../../helpers";
export enum AssetStatus {
  ASSET_STATUS_UNSPECIFIED = 0,
  ASSET_STATUS_OK = 1,
  ASSET_STATUS_BLOCKED_INBOUND = 2,
  ASSET_STATUS_BLOCKED_OUTBOUND = 3,
  ASSET_STATUS_BLOCKED_BOTH = 4,
  UNRECOGNIZED = -1,
}
export const AssetStatusSDKType = AssetStatus;
export const AssetStatusAmino = AssetStatus;
export function assetStatusFromJSON(object: any): AssetStatus {
  switch (object) {
    case 0:
    case "ASSET_STATUS_UNSPECIFIED":
      return AssetStatus.ASSET_STATUS_UNSPECIFIED;
    case 1:
    case "ASSET_STATUS_OK":
      return AssetStatus.ASSET_STATUS_OK;
    case 2:
    case "ASSET_STATUS_BLOCKED_INBOUND":
      return AssetStatus.ASSET_STATUS_BLOCKED_INBOUND;
    case 3:
    case "ASSET_STATUS_BLOCKED_OUTBOUND":
      return AssetStatus.ASSET_STATUS_BLOCKED_OUTBOUND;
    case 4:
    case "ASSET_STATUS_BLOCKED_BOTH":
      return AssetStatus.ASSET_STATUS_BLOCKED_BOTH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AssetStatus.UNRECOGNIZED;
  }
}
export function assetStatusToJSON(object: AssetStatus): string {
  switch (object) {
    case AssetStatus.ASSET_STATUS_UNSPECIFIED:
      return "ASSET_STATUS_UNSPECIFIED";
    case AssetStatus.ASSET_STATUS_OK:
      return "ASSET_STATUS_OK";
    case AssetStatus.ASSET_STATUS_BLOCKED_INBOUND:
      return "ASSET_STATUS_BLOCKED_INBOUND";
    case AssetStatus.ASSET_STATUS_BLOCKED_OUTBOUND:
      return "ASSET_STATUS_BLOCKED_OUTBOUND";
    case AssetStatus.ASSET_STATUS_BLOCKED_BOTH:
      return "ASSET_STATUS_BLOCKED_BOTH";
    case AssetStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Params defines params for x/bridge module. */
export interface Params {
  /** Signers used to sign inbound and release outbound transactions */
  signers: string[];
  /**
   * Assets is a list used to create tokenfactory denoms
   * for corresponding trading pairs
   */
  assets: AssetWithStatus[];
}
export interface ParamsProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines params for x/bridge module. */
export interface ParamsAmino {
  /** Signers used to sign inbound and release outbound transactions */
  signers: string[];
  /**
   * Assets is a list used to create tokenfactory denoms
   * for corresponding trading pairs
   */
  assets: AssetWithStatusAmino[];
}
export interface ParamsAminoMsg {
  type: "osmosis/bridge/params";
  value: ParamsAmino;
}
/** Params defines params for x/bridge module. */
export interface ParamsSDKType {
  signers: string[];
  assets: AssetWithStatusSDKType[];
}
/** AssetWithStatus defines a pair of the asset and its current status. */
export interface AssetWithStatus {
  asset: Asset;
  assetStatus: AssetStatus;
}
export interface AssetWithStatusProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.AssetWithStatus";
  value: Uint8Array;
}
/** AssetWithStatus defines a pair of the asset and its current status. */
export interface AssetWithStatusAmino {
  asset?: AssetAmino;
  asset_status: AssetStatus;
}
export interface AssetWithStatusAminoMsg {
  type: "osmosis/bridge/asset-with-status";
  value: AssetWithStatusAmino;
}
/** AssetWithStatus defines a pair of the asset and its current status. */
export interface AssetWithStatusSDKType {
  asset: AssetSDKType;
  asset_status: AssetStatus;
}
/**
 * Asset defines a pair of the source chain name and its Osmosis representation
 * denoted by denom. It also includes a precision used for coins representation.
 */
export interface Asset {
  /** SourceChain is a source chain name */
  sourceChain: string;
  /** Denom is the Osmosis representation of the SourceChain */
  denom: string;
  /** Precision used for coins representation */
  precision: Long;
}
export interface AssetProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.Asset";
  value: Uint8Array;
}
/**
 * Asset defines a pair of the source chain name and its Osmosis representation
 * denoted by denom. It also includes a precision used for coins representation.
 */
export interface AssetAmino {
  /** SourceChain is a source chain name */
  source_chain: string;
  /** Denom is the Osmosis representation of the SourceChain */
  denom: string;
  /** Precision used for coins representation */
  precision: string;
}
export interface AssetAminoMsg {
  type: "osmosis/bridge/asset";
  value: AssetAmino;
}
/**
 * Asset defines a pair of the source chain name and its Osmosis representation
 * denoted by denom. It also includes a precision used for coins representation.
 */
export interface AssetSDKType {
  source_chain: string;
  denom: string;
  precision: Long;
}
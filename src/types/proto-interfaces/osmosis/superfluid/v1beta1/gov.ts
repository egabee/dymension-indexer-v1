import { SuperfluidAsset, SuperfluidAssetAmino, SuperfluidAssetSDKType } from "../superfluid";
import { Long } from "../../../helpers";
/**
 * SetSuperfluidAssetsProposal is a gov Content type to update the superfluid
 * assets
 */
export interface SetSuperfluidAssetsProposal {
  title: string;
  description: string;
  assets: SuperfluidAsset[];
}
export interface SetSuperfluidAssetsProposalProtoMsg {
  typeUrl: "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal";
  value: Uint8Array;
}
/**
 * SetSuperfluidAssetsProposal is a gov Content type to update the superfluid
 * assets
 */
export interface SetSuperfluidAssetsProposalAmino {
  title: string;
  description: string;
  assets: SuperfluidAssetAmino[];
}
export interface SetSuperfluidAssetsProposalAminoMsg {
  type: "osmosis/set-superfluid-assets-proposal";
  value: SetSuperfluidAssetsProposalAmino;
}
/**
 * SetSuperfluidAssetsProposal is a gov Content type to update the superfluid
 * assets
 */
export interface SetSuperfluidAssetsProposalSDKType {
  title: string;
  description: string;
  assets: SuperfluidAssetSDKType[];
}
/**
 * RemoveSuperfluidAssetsProposal is a gov Content type to remove the superfluid
 * assets by denom
 */
export interface RemoveSuperfluidAssetsProposal {
  title: string;
  description: string;
  superfluidAssetDenoms: string[];
}
export interface RemoveSuperfluidAssetsProposalProtoMsg {
  typeUrl: "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal";
  value: Uint8Array;
}
/**
 * RemoveSuperfluidAssetsProposal is a gov Content type to remove the superfluid
 * assets by denom
 */
export interface RemoveSuperfluidAssetsProposalAmino {
  title: string;
  description: string;
  superfluid_asset_denoms: string[];
}
export interface RemoveSuperfluidAssetsProposalAminoMsg {
  type: "osmosis/del-superfluid-assets-proposal";
  value: RemoveSuperfluidAssetsProposalAmino;
}
/**
 * RemoveSuperfluidAssetsProposal is a gov Content type to remove the superfluid
 * assets by denom
 */
export interface RemoveSuperfluidAssetsProposalSDKType {
  title: string;
  description: string;
  superfluid_asset_denoms: string[];
}
/**
 * UpdateUnpoolWhiteListProposal is a gov Content type to update the
 * allowed list of pool ids.
 */
export interface UpdateUnpoolWhiteListProposal {
  title: string;
  description: string;
  ids: Long[];
  isOverwrite: boolean;
}
export interface UpdateUnpoolWhiteListProposalProtoMsg {
  typeUrl: "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal";
  value: Uint8Array;
}
/**
 * UpdateUnpoolWhiteListProposal is a gov Content type to update the
 * allowed list of pool ids.
 */
export interface UpdateUnpoolWhiteListProposalAmino {
  title: string;
  description: string;
  ids: string[];
  is_overwrite: boolean;
}
export interface UpdateUnpoolWhiteListProposalAminoMsg {
  type: "osmosis/update-unpool-whitelist";
  value: UpdateUnpoolWhiteListProposalAmino;
}
/**
 * UpdateUnpoolWhiteListProposal is a gov Content type to update the
 * allowed list of pool ids.
 */
export interface UpdateUnpoolWhiteListProposalSDKType {
  title: string;
  description: string;
  ids: Long[];
  is_overwrite: boolean;
}
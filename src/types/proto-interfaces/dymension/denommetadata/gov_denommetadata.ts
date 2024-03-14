import { Metadata, MetadataAmino, MetadataSDKType } from "../../cosmos/bank/v1beta1/bank";
export interface CreateDenomMetadataProposal {
  title: string;
  description: string;
  tokenMetadata: Metadata;
}
export interface CreateDenomMetadataProposalProtoMsg {
  typeUrl: "/dymensionxyz.dymension.denommetadata.CreateDenomMetadataProposal";
  value: Uint8Array;
}
export interface CreateDenomMetadataProposalAmino {
  title: string;
  description: string;
  tokenMetadata?: MetadataAmino;
}
export interface CreateDenomMetadataProposalAminoMsg {
  type: "/dymensionxyz.dymension.denommetadata.CreateDenomMetadataProposal";
  value: CreateDenomMetadataProposalAmino;
}
export interface CreateDenomMetadataProposalSDKType {
  title: string;
  description: string;
  tokenMetadata: MetadataSDKType;
}
export interface UpdateDenomMetadataProposal {
  title: string;
  description: string;
  tokenMetadata: Metadata;
}
export interface UpdateDenomMetadataProposalProtoMsg {
  typeUrl: "/dymensionxyz.dymension.denommetadata.UpdateDenomMetadataProposal";
  value: Uint8Array;
}
export interface UpdateDenomMetadataProposalAmino {
  title: string;
  description: string;
  tokenMetadata?: MetadataAmino;
}
export interface UpdateDenomMetadataProposalAminoMsg {
  type: "/dymensionxyz.dymension.denommetadata.UpdateDenomMetadataProposal";
  value: UpdateDenomMetadataProposalAmino;
}
export interface UpdateDenomMetadataProposalSDKType {
  title: string;
  description: string;
  tokenMetadata: MetadataSDKType;
}
import { CreateGroup, CreateGroupAmino, CreateGroupSDKType } from "./group";
/**
 * CreateGroupsProposal is a type for creating one or more groups via
 * governance. This is useful for creating groups without having to pay
 * creation fees.
 */
export interface CreateGroupsProposal {
  title: string;
  description: string;
  createGroups: CreateGroup[];
}
export interface CreateGroupsProposalProtoMsg {
  typeUrl: "/osmosis.incentives.CreateGroupsProposal";
  value: Uint8Array;
}
/**
 * CreateGroupsProposal is a type for creating one or more groups via
 * governance. This is useful for creating groups without having to pay
 * creation fees.
 */
export interface CreateGroupsProposalAmino {
  title: string;
  description: string;
  create_groups: CreateGroupAmino[];
}
export interface CreateGroupsProposalAminoMsg {
  type: "osmosis/incentives/create-groups-proposal";
  value: CreateGroupsProposalAmino;
}
/**
 * CreateGroupsProposal is a type for creating one or more groups via
 * governance. This is useful for creating groups without having to pay
 * creation fees.
 */
export interface CreateGroupsProposalSDKType {
  title: string;
  description: string;
  create_groups: CreateGroupSDKType[];
}
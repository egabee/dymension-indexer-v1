/**
 * SetProtoRevEnabledProposal is a gov Content type to update whether the
 * protorev module is enabled
 */
export interface SetProtoRevEnabledProposal {
  title: string;
  description: string;
  enabled: boolean;
}
export interface SetProtoRevEnabledProposalProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.SetProtoRevEnabledProposal";
  value: Uint8Array;
}
/**
 * SetProtoRevEnabledProposal is a gov Content type to update whether the
 * protorev module is enabled
 */
export interface SetProtoRevEnabledProposalAmino {
  title: string;
  description: string;
  enabled: boolean;
}
export interface SetProtoRevEnabledProposalAminoMsg {
  type: "osmosis/SetProtoRevEnabledProposal";
  value: SetProtoRevEnabledProposalAmino;
}
/**
 * SetProtoRevEnabledProposal is a gov Content type to update whether the
 * protorev module is enabled
 */
export interface SetProtoRevEnabledProposalSDKType {
  title: string;
  description: string;
  enabled: boolean;
}
/**
 * SetProtoRevAdminAccountProposal is a gov Content type to set the admin
 * account that will receive permissions to alter hot routes and set the
 * developer address that will be receiving a share of profits from the module
 */
export interface SetProtoRevAdminAccountProposal {
  title: string;
  description: string;
  account: string;
}
export interface SetProtoRevAdminAccountProposalProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.SetProtoRevAdminAccountProposal";
  value: Uint8Array;
}
/**
 * SetProtoRevAdminAccountProposal is a gov Content type to set the admin
 * account that will receive permissions to alter hot routes and set the
 * developer address that will be receiving a share of profits from the module
 */
export interface SetProtoRevAdminAccountProposalAmino {
  title: string;
  description: string;
  account: string;
}
export interface SetProtoRevAdminAccountProposalAminoMsg {
  type: "osmosis/SetProtoRevAdminAccountProposal";
  value: SetProtoRevAdminAccountProposalAmino;
}
/**
 * SetProtoRevAdminAccountProposal is a gov Content type to set the admin
 * account that will receive permissions to alter hot routes and set the
 * developer address that will be receiving a share of profits from the module
 */
export interface SetProtoRevAdminAccountProposalSDKType {
  title: string;
  description: string;
  account: string;
}
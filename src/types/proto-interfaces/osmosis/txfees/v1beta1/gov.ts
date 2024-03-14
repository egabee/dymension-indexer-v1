import { FeeToken, FeeTokenAmino, FeeTokenSDKType } from "./feetoken";
/**
 * UpdateFeeTokenProposal is a gov Content type for adding new whitelisted fee
 * token(s). It must specify a denom along with gamm pool ID to use as a spot
 * price calculator. It can be used to add new denoms to the whitelist. It can
 * also be used to update the Pool to associate with the denom. If Pool ID is
 * set to 0, it will remove the denom from the whitelisted set.
 */
export interface UpdateFeeTokenProposal {
  title: string;
  description: string;
  feetokens: FeeToken[];
}
export interface UpdateFeeTokenProposalProtoMsg {
  typeUrl: "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal";
  value: Uint8Array;
}
/**
 * UpdateFeeTokenProposal is a gov Content type for adding new whitelisted fee
 * token(s). It must specify a denom along with gamm pool ID to use as a spot
 * price calculator. It can be used to add new denoms to the whitelist. It can
 * also be used to update the Pool to associate with the denom. If Pool ID is
 * set to 0, it will remove the denom from the whitelisted set.
 */
export interface UpdateFeeTokenProposalAmino {
  title: string;
  description: string;
  feetokens: FeeTokenAmino[];
}
export interface UpdateFeeTokenProposalAminoMsg {
  type: "osmosis/UpdateFeeTokenProposal";
  value: UpdateFeeTokenProposalAmino;
}
/**
 * UpdateFeeTokenProposal is a gov Content type for adding new whitelisted fee
 * token(s). It must specify a denom along with gamm pool ID to use as a spot
 * price calculator. It can be used to add new denoms to the whitelist. It can
 * also be used to update the Pool to associate with the denom. If Pool ID is
 * set to 0, it will remove the denom from the whitelisted set.
 */
export interface UpdateFeeTokenProposalSDKType {
  title: string;
  description: string;
  feetokens: FeeTokenSDKType[];
}
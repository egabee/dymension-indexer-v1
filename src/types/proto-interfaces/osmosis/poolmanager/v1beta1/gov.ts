import { DenomPairTakerFee, DenomPairTakerFeeAmino, DenomPairTakerFeeSDKType } from "./tx";
/**
 * DenomPairTakerFeeProposal is a type for adding/removing a custom taker fee(s)
 * for one or more denom pairs.
 */
export interface DenomPairTakerFeeProposal {
  title: string;
  description: string;
  denomPairTakerFee: DenomPairTakerFee[];
}
export interface DenomPairTakerFeeProposalProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.DenomPairTakerFeeProposal";
  value: Uint8Array;
}
/**
 * DenomPairTakerFeeProposal is a type for adding/removing a custom taker fee(s)
 * for one or more denom pairs.
 */
export interface DenomPairTakerFeeProposalAmino {
  title: string;
  description: string;
  denom_pair_taker_fee: DenomPairTakerFeeAmino[];
}
export interface DenomPairTakerFeeProposalAminoMsg {
  type: "osmosis/poolmanager/denom-pair-taker-fee-proposal";
  value: DenomPairTakerFeeProposalAmino;
}
/**
 * DenomPairTakerFeeProposal is a type for adding/removing a custom taker fee(s)
 * for one or more denom pairs.
 */
export interface DenomPairTakerFeeProposalSDKType {
  title: string;
  description: string;
  denom_pair_taker_fee: DenomPairTakerFeeSDKType[];
}
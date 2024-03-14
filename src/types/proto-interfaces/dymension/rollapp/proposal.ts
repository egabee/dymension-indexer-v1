import { Long } from "../../helpers";
export interface SubmitFraudProposal {
  title: string;
  description: string;
  /** The rollapp id */
  rollappId: string;
  /** The ibc client id of the rollapp */
  ibcClientId: string;
  /** The height of the fraudelent block */
  fraudelentHeight: Long;
  /** The address of the fraudelent sequencer */
  fraudelentSequencerAddress: string;
}
export interface SubmitFraudProposalProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.SubmitFraudProposal";
  value: Uint8Array;
}
export interface SubmitFraudProposalAmino {
  title: string;
  description: string;
  /** The rollapp id */
  rollapp_id: string;
  /** The ibc client id of the rollapp */
  ibc_client_id: string;
  /** The height of the fraudelent block */
  fraudelent_height: string;
  /** The address of the fraudelent sequencer */
  fraudelent_sequencer_address: string;
}
export interface SubmitFraudProposalAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.SubmitFraudProposal";
  value: SubmitFraudProposalAmino;
}
export interface SubmitFraudProposalSDKType {
  title: string;
  description: string;
  rollapp_id: string;
  ibc_client_id: string;
  fraudelent_height: Long;
  fraudelent_sequencer_address: string;
}
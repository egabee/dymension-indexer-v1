import { DistrRecord, DistrRecordAmino, DistrRecordSDKType } from "./distr_info";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long } from "../../helpers";
export interface CreateStreamProposal {
  title: string;
  description: string;
  distributeToRecords: DistrRecord[];
  /** coins are coin(s) to be distributed by the stream */
  coins: Coin[];
  /** start_time is the distribution start time */
  startTime: Date;
  distrEpochIdentifier: string;
  /**
   * num_epochs_paid_over is the number of epochs distribution will be completed
   * over
   */
  numEpochsPaidOver: Long;
}
export interface CreateStreamProposalProtoMsg {
  typeUrl: "/dymensionxyz.dymension.streamer.CreateStreamProposal";
  value: Uint8Array;
}
export interface CreateStreamProposalAmino {
  title: string;
  description: string;
  distribute_to_records: DistrRecordAmino[];
  /** coins are coin(s) to be distributed by the stream */
  coins: CoinAmino[];
  /** start_time is the distribution start time */
  start_time?: Date;
  distr_epoch_identifier: string;
  /**
   * num_epochs_paid_over is the number of epochs distribution will be completed
   * over
   */
  num_epochs_paid_over: string;
}
export interface CreateStreamProposalAminoMsg {
  type: "/dymensionxyz.dymension.streamer.CreateStreamProposal";
  value: CreateStreamProposalAmino;
}
export interface CreateStreamProposalSDKType {
  title: string;
  description: string;
  distribute_to_records: DistrRecordSDKType[];
  coins: CoinSDKType[];
  start_time: Date;
  distr_epoch_identifier: string;
  num_epochs_paid_over: Long;
}
export interface TerminateStreamProposal {
  title: string;
  description: string;
  streamId: Long;
}
export interface TerminateStreamProposalProtoMsg {
  typeUrl: "/dymensionxyz.dymension.streamer.TerminateStreamProposal";
  value: Uint8Array;
}
export interface TerminateStreamProposalAmino {
  title: string;
  description: string;
  stream_id: string;
}
export interface TerminateStreamProposalAminoMsg {
  type: "/dymensionxyz.dymension.streamer.TerminateStreamProposal";
  value: TerminateStreamProposalAmino;
}
export interface TerminateStreamProposalSDKType {
  title: string;
  description: string;
  stream_id: Long;
}
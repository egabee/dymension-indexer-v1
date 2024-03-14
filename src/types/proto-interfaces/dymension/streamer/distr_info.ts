import { Long } from "../../helpers";
export interface DistrInfo {
  totalWeight: string;
  records: DistrRecord[];
}
export interface DistrInfoProtoMsg {
  typeUrl: "/dymensionxyz.dymension.streamer.DistrInfo";
  value: Uint8Array;
}
export interface DistrInfoAmino {
  total_weight: string;
  records: DistrRecordAmino[];
}
export interface DistrInfoAminoMsg {
  type: "/dymensionxyz.dymension.streamer.DistrInfo";
  value: DistrInfoAmino;
}
export interface DistrInfoSDKType {
  total_weight: string;
  records: DistrRecordSDKType[];
}
export interface DistrRecord {
  gaugeId: Long;
  weight: string;
}
export interface DistrRecordProtoMsg {
  typeUrl: "/dymensionxyz.dymension.streamer.DistrRecord";
  value: Uint8Array;
}
export interface DistrRecordAmino {
  gauge_id: string;
  weight: string;
}
export interface DistrRecordAminoMsg {
  type: "/dymensionxyz.dymension.streamer.DistrRecord";
  value: DistrRecordAmino;
}
export interface DistrRecordSDKType {
  gauge_id: Long;
  weight: string;
}
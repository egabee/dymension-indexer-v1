/** ===================== JoinPoolExecuteMsg */
export interface EmptyRequest {}
export interface EmptyRequestProtoMsg {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.EmptyRequest";
  value: Uint8Array;
}
/** ===================== JoinPoolExecuteMsg */
export interface EmptyRequestAmino {}
export interface EmptyRequestAminoMsg {
  type: "osmosis/cosmwasmpool/empty-request";
  value: EmptyRequestAmino;
}
/** ===================== JoinPoolExecuteMsg */
export interface EmptyRequestSDKType {}
export interface JoinPoolExecuteMsgRequest {
  /**
   * join_pool is the structure containing all request fields of the join pool
   * execute message.
   */
  joinPool: EmptyRequest;
}
export interface JoinPoolExecuteMsgRequestProtoMsg {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.JoinPoolExecuteMsgRequest";
  value: Uint8Array;
}
export interface JoinPoolExecuteMsgRequestAmino {
  /**
   * join_pool is the structure containing all request fields of the join pool
   * execute message.
   */
  join_pool?: EmptyRequestAmino;
}
export interface JoinPoolExecuteMsgRequestAminoMsg {
  type: "osmosis/cosmwasmpool/join-pool-execute-msg-request";
  value: JoinPoolExecuteMsgRequestAmino;
}
export interface JoinPoolExecuteMsgRequestSDKType {
  join_pool: EmptyRequestSDKType;
}
export interface JoinPoolExecuteMsgResponse {}
export interface JoinPoolExecuteMsgResponseProtoMsg {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.JoinPoolExecuteMsgResponse";
  value: Uint8Array;
}
export interface JoinPoolExecuteMsgResponseAmino {}
export interface JoinPoolExecuteMsgResponseAminoMsg {
  type: "osmosis/cosmwasmpool/join-pool-execute-msg-response";
  value: JoinPoolExecuteMsgResponseAmino;
}
export interface JoinPoolExecuteMsgResponseSDKType {}
/** ===================== ExitPoolExecuteMsg */
export interface ExitPoolExecuteMsgRequest {
  /**
   * exit_pool is the structure containing all request fields of the exit pool
   * execute message.
   */
  exitPool: EmptyRequest;
}
export interface ExitPoolExecuteMsgRequestProtoMsg {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.ExitPoolExecuteMsgRequest";
  value: Uint8Array;
}
/** ===================== ExitPoolExecuteMsg */
export interface ExitPoolExecuteMsgRequestAmino {
  /**
   * exit_pool is the structure containing all request fields of the exit pool
   * execute message.
   */
  exit_pool?: EmptyRequestAmino;
}
export interface ExitPoolExecuteMsgRequestAminoMsg {
  type: "osmosis/cosmwasmpool/exit-pool-execute-msg-request";
  value: ExitPoolExecuteMsgRequestAmino;
}
/** ===================== ExitPoolExecuteMsg */
export interface ExitPoolExecuteMsgRequestSDKType {
  exit_pool: EmptyRequestSDKType;
}
export interface ExitPoolExecuteMsgResponse {}
export interface ExitPoolExecuteMsgResponseProtoMsg {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.ExitPoolExecuteMsgResponse";
  value: Uint8Array;
}
export interface ExitPoolExecuteMsgResponseAmino {}
export interface ExitPoolExecuteMsgResponseAminoMsg {
  type: "osmosis/cosmwasmpool/exit-pool-execute-msg-response";
  value: ExitPoolExecuteMsgResponseAmino;
}
export interface ExitPoolExecuteMsgResponseSDKType {}
import { Permissions, PermissionsAmino, PermissionsSDKType } from "./types";
/** MsgAuthorizeCircuitBreaker defines the Msg/AuthorizeCircuitBreaker request type. */
export interface MsgAuthorizeCircuitBreaker {
  /**
   * granter is the granter of the circuit breaker permissions and must have
   * LEVEL_SUPER_ADMIN.
   */
  granter: string;
  /** grantee is the account authorized with the provided permissions. */
  grantee: string;
  /**
   * permissions are the circuit breaker permissions that the grantee receives.
   * These will overwrite any existing permissions. LEVEL_NONE_UNSPECIFIED can
   * be specified to revoke all permissions.
   */
  permissions: Permissions;
}
export interface MsgAuthorizeCircuitBreakerProtoMsg {
  typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker";
  value: Uint8Array;
}
/** MsgAuthorizeCircuitBreaker defines the Msg/AuthorizeCircuitBreaker request type. */
export interface MsgAuthorizeCircuitBreakerAmino {
  /**
   * granter is the granter of the circuit breaker permissions and must have
   * LEVEL_SUPER_ADMIN.
   */
  granter: string;
  /** grantee is the account authorized with the provided permissions. */
  grantee: string;
  /**
   * permissions are the circuit breaker permissions that the grantee receives.
   * These will overwrite any existing permissions. LEVEL_NONE_UNSPECIFIED can
   * be specified to revoke all permissions.
   */
  permissions?: PermissionsAmino;
}
export interface MsgAuthorizeCircuitBreakerAminoMsg {
  type: "cosmos-sdk/MsgAuthorizeCircuitBreaker";
  value: MsgAuthorizeCircuitBreakerAmino;
}
/** MsgAuthorizeCircuitBreaker defines the Msg/AuthorizeCircuitBreaker request type. */
export interface MsgAuthorizeCircuitBreakerSDKType {
  granter: string;
  grantee: string;
  permissions: PermissionsSDKType;
}
/** MsgAuthorizeCircuitBreaker defines the Msg/AuthorizeCircuitBreaker response type. */
export interface MsgAuthorizeCircuitBreakerResponse {
  success: boolean;
}
export interface MsgAuthorizeCircuitBreakerResponseProtoMsg {
  typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreakerResponse";
  value: Uint8Array;
}
/** MsgAuthorizeCircuitBreaker defines the Msg/AuthorizeCircuitBreaker response type. */
export interface MsgAuthorizeCircuitBreakerResponseAmino {
  success: boolean;
}
export interface MsgAuthorizeCircuitBreakerResponseAminoMsg {
  type: "cosmos-sdk/MsgAuthorizeCircuitBreakerResponse";
  value: MsgAuthorizeCircuitBreakerResponseAmino;
}
/** MsgAuthorizeCircuitBreaker defines the Msg/AuthorizeCircuitBreaker response type. */
export interface MsgAuthorizeCircuitBreakerResponseSDKType {
  success: boolean;
}
/** MsgTripCircuitBreaker defines the Msg/TripCircuitBreaker request type. */
export interface MsgTripCircuitBreaker {
  /** authority is the account authorized to trip the circuit breaker. */
  authority: string;
  /**
   * msg_type_urls specifies a list of type URLs to immediately stop processing.
   * IF IT IS LEFT EMPTY, ALL MSG PROCESSING WILL STOP IMMEDIATELY.
   * This value is validated against the authority's permissions and if the
   * authority does not have permissions to trip the specified msg type URLs
   * (or all URLs), the operation will fail.
   */
  msgTypeUrls: string[];
}
export interface MsgTripCircuitBreakerProtoMsg {
  typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker";
  value: Uint8Array;
}
/** MsgTripCircuitBreaker defines the Msg/TripCircuitBreaker request type. */
export interface MsgTripCircuitBreakerAmino {
  /** authority is the account authorized to trip the circuit breaker. */
  authority: string;
  /**
   * msg_type_urls specifies a list of type URLs to immediately stop processing.
   * IF IT IS LEFT EMPTY, ALL MSG PROCESSING WILL STOP IMMEDIATELY.
   * This value is validated against the authority's permissions and if the
   * authority does not have permissions to trip the specified msg type URLs
   * (or all URLs), the operation will fail.
   */
  msg_type_urls: string[];
}
export interface MsgTripCircuitBreakerAminoMsg {
  type: "cosmos-sdk/MsgTripCircuitBreaker";
  value: MsgTripCircuitBreakerAmino;
}
/** MsgTripCircuitBreaker defines the Msg/TripCircuitBreaker request type. */
export interface MsgTripCircuitBreakerSDKType {
  authority: string;
  msg_type_urls: string[];
}
/** MsgTripCircuitBreaker defines the Msg/TripCircuitBreaker response type. */
export interface MsgTripCircuitBreakerResponse {
  success: boolean;
}
export interface MsgTripCircuitBreakerResponseProtoMsg {
  typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreakerResponse";
  value: Uint8Array;
}
/** MsgTripCircuitBreaker defines the Msg/TripCircuitBreaker response type. */
export interface MsgTripCircuitBreakerResponseAmino {
  success: boolean;
}
export interface MsgTripCircuitBreakerResponseAminoMsg {
  type: "cosmos-sdk/MsgTripCircuitBreakerResponse";
  value: MsgTripCircuitBreakerResponseAmino;
}
/** MsgTripCircuitBreaker defines the Msg/TripCircuitBreaker response type. */
export interface MsgTripCircuitBreakerResponseSDKType {
  success: boolean;
}
/** MsgResetCircuitBreaker defines the Msg/ResetCircuitBreaker request type. */
export interface MsgResetCircuitBreaker {
  /** authority is the account authorized to trip or reset the circuit breaker. */
  authority: string;
  /**
   * msg_type_urls specifies a list of Msg type URLs to resume processing. If
   * it is left empty all Msg processing for type URLs that the account is
   * authorized to trip will resume.
   */
  msgTypeUrls: string[];
}
export interface MsgResetCircuitBreakerProtoMsg {
  typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker";
  value: Uint8Array;
}
/** MsgResetCircuitBreaker defines the Msg/ResetCircuitBreaker request type. */
export interface MsgResetCircuitBreakerAmino {
  /** authority is the account authorized to trip or reset the circuit breaker. */
  authority: string;
  /**
   * msg_type_urls specifies a list of Msg type URLs to resume processing. If
   * it is left empty all Msg processing for type URLs that the account is
   * authorized to trip will resume.
   */
  msg_type_urls: string[];
}
export interface MsgResetCircuitBreakerAminoMsg {
  type: "cosmos-sdk/MsgResetCircuitBreaker";
  value: MsgResetCircuitBreakerAmino;
}
/** MsgResetCircuitBreaker defines the Msg/ResetCircuitBreaker request type. */
export interface MsgResetCircuitBreakerSDKType {
  authority: string;
  msg_type_urls: string[];
}
/** MsgResetCircuitBreakerResponse defines the Msg/ResetCircuitBreaker response type. */
export interface MsgResetCircuitBreakerResponse {
  success: boolean;
}
export interface MsgResetCircuitBreakerResponseProtoMsg {
  typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreakerResponse";
  value: Uint8Array;
}
/** MsgResetCircuitBreakerResponse defines the Msg/ResetCircuitBreaker response type. */
export interface MsgResetCircuitBreakerResponseAmino {
  success: boolean;
}
export interface MsgResetCircuitBreakerResponseAminoMsg {
  type: "cosmos-sdk/MsgResetCircuitBreakerResponse";
  value: MsgResetCircuitBreakerResponseAmino;
}
/** MsgResetCircuitBreakerResponse defines the Msg/ResetCircuitBreaker response type. */
export interface MsgResetCircuitBreakerResponseSDKType {
  success: boolean;
}
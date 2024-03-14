import { ValidatorPreference, ValidatorPreferenceAmino, ValidatorPreferenceSDKType } from "./state";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
/** MsgCreateValidatorSetPreference is a list that holds validator-set. */
export interface MsgSetValidatorSetPreference {
  /** delegator is the user who is trying to create a validator-set. */
  delegator: string;
  /** list of {valAddr, weight} to delegate to */
  preferences: ValidatorPreference[];
}
export interface MsgSetValidatorSetPreferenceProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference";
  value: Uint8Array;
}
/** MsgCreateValidatorSetPreference is a list that holds validator-set. */
export interface MsgSetValidatorSetPreferenceAmino {
  /** delegator is the user who is trying to create a validator-set. */
  delegator: string;
  /** list of {valAddr, weight} to delegate to */
  preferences: ValidatorPreferenceAmino[];
}
export interface MsgSetValidatorSetPreferenceAminoMsg {
  type: "osmosis/MsgSetValidatorSetPreference";
  value: MsgSetValidatorSetPreferenceAmino;
}
/** MsgCreateValidatorSetPreference is a list that holds validator-set. */
export interface MsgSetValidatorSetPreferenceSDKType {
  delegator: string;
  preferences: ValidatorPreferenceSDKType[];
}
export interface MsgSetValidatorSetPreferenceResponse {}
export interface MsgSetValidatorSetPreferenceResponseProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreferenceResponse";
  value: Uint8Array;
}
export interface MsgSetValidatorSetPreferenceResponseAmino {}
export interface MsgSetValidatorSetPreferenceResponseAminoMsg {
  type: "osmosis/valsetpref/set-validator-set-preference-response";
  value: MsgSetValidatorSetPreferenceResponseAmino;
}
export interface MsgSetValidatorSetPreferenceResponseSDKType {}
/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 */
export interface MsgDelegateToValidatorSet {
  /** delegator is the user who is trying to delegate. */
  delegator: string;
  /**
   * the amount of tokens the user is trying to delegate.
   * For ex: delegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3, ValC
   * -> 0.2} our staking logic would attempt to delegate 5osmo to A , 3osmo to
   * B, 2osmo to C.
   */
  coin: Coin;
}
export interface MsgDelegateToValidatorSetProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet";
  value: Uint8Array;
}
/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 */
export interface MsgDelegateToValidatorSetAmino {
  /** delegator is the user who is trying to delegate. */
  delegator: string;
  /**
   * the amount of tokens the user is trying to delegate.
   * For ex: delegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3, ValC
   * -> 0.2} our staking logic would attempt to delegate 5osmo to A , 3osmo to
   * B, 2osmo to C.
   */
  coin?: CoinAmino;
}
export interface MsgDelegateToValidatorSetAminoMsg {
  type: "osmosis/MsgDelegateToValidatorSet";
  value: MsgDelegateToValidatorSetAmino;
}
/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 */
export interface MsgDelegateToValidatorSetSDKType {
  delegator: string;
  coin: CoinSDKType;
}
export interface MsgDelegateToValidatorSetResponse {}
export interface MsgDelegateToValidatorSetResponseProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSetResponse";
  value: Uint8Array;
}
export interface MsgDelegateToValidatorSetResponseAmino {}
export interface MsgDelegateToValidatorSetResponseAminoMsg {
  type: "osmosis/valsetpref/delegate-to-validator-set-response";
  value: MsgDelegateToValidatorSetResponseAmino;
}
export interface MsgDelegateToValidatorSetResponseSDKType {}
export interface MsgUndelegateFromValidatorSet {
  /** delegator is the user who is trying to undelegate. */
  delegator: string;
  /**
   * the amount the user wants to undelegate
   * For ex: Undelegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3,
   * ValC
   * -> 0.2} our undelegate logic would attempt to undelegate 5osmo from A ,
   * 3osmo from B, 2osmo from C
   */
  coin: Coin;
}
export interface MsgUndelegateFromValidatorSetProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet";
  value: Uint8Array;
}
export interface MsgUndelegateFromValidatorSetAmino {
  /** delegator is the user who is trying to undelegate. */
  delegator: string;
  /**
   * the amount the user wants to undelegate
   * For ex: Undelegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3,
   * ValC
   * -> 0.2} our undelegate logic would attempt to undelegate 5osmo from A ,
   * 3osmo from B, 2osmo from C
   */
  coin?: CoinAmino;
}
export interface MsgUndelegateFromValidatorSetAminoMsg {
  type: "osmosis/MsgUndelegateFromValidatorSet";
  value: MsgUndelegateFromValidatorSetAmino;
}
export interface MsgUndelegateFromValidatorSetSDKType {
  delegator: string;
  coin: CoinSDKType;
}
export interface MsgUndelegateFromValidatorSetResponse {}
export interface MsgUndelegateFromValidatorSetResponseProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSetResponse";
  value: Uint8Array;
}
export interface MsgUndelegateFromValidatorSetResponseAmino {}
export interface MsgUndelegateFromValidatorSetResponseAminoMsg {
  type: "osmosis/valsetpref/undelegate-from-validator-set-response";
  value: MsgUndelegateFromValidatorSetResponseAmino;
}
export interface MsgUndelegateFromValidatorSetResponseSDKType {}
export interface MsgUndelegateFromRebalancedValidatorSet {
  /** delegator is the user who is trying to undelegate. */
  delegator: string;
  /**
   * the amount the user wants to undelegate
   * For ex: Undelegate 50 osmo with validator-set {ValA -> 0.5, ValB -> 0.5}
   * Our undelegate logic would first check the current delegation balance.
   * If the user has 90 osmo delegated to ValA and 10 osmo delegated to ValB,
   * the rebalanced validator set would be {ValA -> 0.9, ValB -> 0.1}
   * So now the 45 osmo would be undelegated from ValA and 5 osmo would be
   * undelegated from ValB.
   */
  coin: Coin;
}
export interface MsgUndelegateFromRebalancedValidatorSetProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSet";
  value: Uint8Array;
}
export interface MsgUndelegateFromRebalancedValidatorSetAmino {
  /** delegator is the user who is trying to undelegate. */
  delegator: string;
  /**
   * the amount the user wants to undelegate
   * For ex: Undelegate 50 osmo with validator-set {ValA -> 0.5, ValB -> 0.5}
   * Our undelegate logic would first check the current delegation balance.
   * If the user has 90 osmo delegated to ValA and 10 osmo delegated to ValB,
   * the rebalanced validator set would be {ValA -> 0.9, ValB -> 0.1}
   * So now the 45 osmo would be undelegated from ValA and 5 osmo would be
   * undelegated from ValB.
   */
  coin?: CoinAmino;
}
export interface MsgUndelegateFromRebalancedValidatorSetAminoMsg {
  type: "osmosis/MsgUndelegateFromRebalValset";
  value: MsgUndelegateFromRebalancedValidatorSetAmino;
}
export interface MsgUndelegateFromRebalancedValidatorSetSDKType {
  delegator: string;
  coin: CoinSDKType;
}
export interface MsgUndelegateFromRebalancedValidatorSetResponse {}
export interface MsgUndelegateFromRebalancedValidatorSetResponseProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSetResponse";
  value: Uint8Array;
}
export interface MsgUndelegateFromRebalancedValidatorSetResponseAmino {}
export interface MsgUndelegateFromRebalancedValidatorSetResponseAminoMsg {
  type: "osmosis/valsetpref/undelegate-from-rebalanced-validator-set-response";
  value: MsgUndelegateFromRebalancedValidatorSetResponseAmino;
}
export interface MsgUndelegateFromRebalancedValidatorSetResponseSDKType {}
export interface MsgRedelegateValidatorSet {
  /** delegator is the user who is trying to create a validator-set. */
  delegator: string;
  /** list of {valAddr, weight} to delegate to */
  preferences: ValidatorPreference[];
}
export interface MsgRedelegateValidatorSetProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet";
  value: Uint8Array;
}
export interface MsgRedelegateValidatorSetAmino {
  /** delegator is the user who is trying to create a validator-set. */
  delegator: string;
  /** list of {valAddr, weight} to delegate to */
  preferences: ValidatorPreferenceAmino[];
}
export interface MsgRedelegateValidatorSetAminoMsg {
  type: "osmosis/MsgRedelegateValidatorSet";
  value: MsgRedelegateValidatorSetAmino;
}
export interface MsgRedelegateValidatorSetSDKType {
  delegator: string;
  preferences: ValidatorPreferenceSDKType[];
}
export interface MsgRedelegateValidatorSetResponse {}
export interface MsgRedelegateValidatorSetResponseProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSetResponse";
  value: Uint8Array;
}
export interface MsgRedelegateValidatorSetResponseAmino {}
export interface MsgRedelegateValidatorSetResponseAminoMsg {
  type: "osmosis/valsetpref/redelegate-validator-set-response";
  value: MsgRedelegateValidatorSetResponseAmino;
}
export interface MsgRedelegateValidatorSetResponseSDKType {}
/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 */
export interface MsgWithdrawDelegationRewards {
  /** delegator is the user who is trying to claim staking rewards. */
  delegator: string;
}
export interface MsgWithdrawDelegationRewardsProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards";
  value: Uint8Array;
}
/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 */
export interface MsgWithdrawDelegationRewardsAmino {
  /** delegator is the user who is trying to claim staking rewards. */
  delegator: string;
}
export interface MsgWithdrawDelegationRewardsAminoMsg {
  type: "osmosis/MsgWithdrawDelegationRewards";
  value: MsgWithdrawDelegationRewardsAmino;
}
/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 */
export interface MsgWithdrawDelegationRewardsSDKType {
  delegator: string;
}
export interface MsgWithdrawDelegationRewardsResponse {}
export interface MsgWithdrawDelegationRewardsResponseProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewardsResponse";
  value: Uint8Array;
}
export interface MsgWithdrawDelegationRewardsResponseAmino {}
export interface MsgWithdrawDelegationRewardsResponseAminoMsg {
  type: "osmosis/valsetpref/withdraw-delegation-rewards-response";
  value: MsgWithdrawDelegationRewardsResponseAmino;
}
export interface MsgWithdrawDelegationRewardsResponseSDKType {}
/**
 * MsgDelegateBondedTokens breaks bonded lockup (by ID) of osmo, of
 * length <= 2 weeks and takes all that osmo and delegates according to
 * delegator's current validator set preference.
 */
export interface MsgDelegateBondedTokens {
  /** delegator is the user who is trying to force unbond osmo and delegate. */
  delegator: string;
  /** lockup id of osmo in the pool */
  lockID: Long;
}
export interface MsgDelegateBondedTokensProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens";
  value: Uint8Array;
}
/**
 * MsgDelegateBondedTokens breaks bonded lockup (by ID) of osmo, of
 * length <= 2 weeks and takes all that osmo and delegates according to
 * delegator's current validator set preference.
 */
export interface MsgDelegateBondedTokensAmino {
  /** delegator is the user who is trying to force unbond osmo and delegate. */
  delegator: string;
  /** lockup id of osmo in the pool */
  lockID: string;
}
export interface MsgDelegateBondedTokensAminoMsg {
  type: "osmosis/valsetpref/delegate-bonded-tokens";
  value: MsgDelegateBondedTokensAmino;
}
/**
 * MsgDelegateBondedTokens breaks bonded lockup (by ID) of osmo, of
 * length <= 2 weeks and takes all that osmo and delegates according to
 * delegator's current validator set preference.
 */
export interface MsgDelegateBondedTokensSDKType {
  delegator: string;
  lockID: Long;
}
export interface MsgDelegateBondedTokensResponse {}
export interface MsgDelegateBondedTokensResponseProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokensResponse";
  value: Uint8Array;
}
export interface MsgDelegateBondedTokensResponseAmino {}
export interface MsgDelegateBondedTokensResponseAminoMsg {
  type: "osmosis/valsetpref/delegate-bonded-tokens-response";
  value: MsgDelegateBondedTokensResponseAmino;
}
export interface MsgDelegateBondedTokensResponseSDKType {}
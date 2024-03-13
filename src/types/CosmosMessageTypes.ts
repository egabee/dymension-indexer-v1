// SPDX-License-Identifier: Apache-2.0

// Auto-generated , DO NOT EDIT
import {CosmosMessage} from "@subql/types-cosmos";

import * as CosmosAuthV1beta1Tx from "./proto-interfaces/cosmos/auth/v1beta1/tx";

import * as CosmosAuthzV1beta1Tx from "./proto-interfaces/cosmos/authz/v1beta1/tx";

import * as CosmosBankV1beta1Tx from "./proto-interfaces/cosmos/bank/v1beta1/tx";

import * as CosmosCircuitV1Tx from "./proto-interfaces/cosmos/circuit/v1/tx";

import * as CosmosConsensusV1Tx from "./proto-interfaces/cosmos/consensus/v1/tx";

import * as CosmosCrisisV1beta1Tx from "./proto-interfaces/cosmos/crisis/v1beta1/tx";

import * as CosmosDistributionV1beta1Tx from "./proto-interfaces/cosmos/distribution/v1beta1/tx";

import * as CosmosEvidenceV1beta1Tx from "./proto-interfaces/cosmos/evidence/v1beta1/tx";

import * as CosmosFeegrantV1beta1Tx from "./proto-interfaces/cosmos/feegrant/v1beta1/tx";

import * as CosmosGovV1Tx from "./proto-interfaces/cosmos/gov/v1/tx";

import * as CosmosGovV1beta1Tx from "./proto-interfaces/cosmos/gov/v1beta1/tx";

import * as CosmosGroupV1Tx from "./proto-interfaces/cosmos/group/v1/tx";

import * as CosmosMintV1beta1Tx from "./proto-interfaces/cosmos/mint/v1beta1/tx";

import * as CosmosNftV1beta1Tx from "./proto-interfaces/cosmos/nft/v1beta1/tx";

import * as CosmosSlashingV1beta1Tx from "./proto-interfaces/cosmos/slashing/v1beta1/tx";

import * as CosmosStakingV1beta1Tx from "./proto-interfaces/cosmos/staking/v1beta1/tx";

import * as CosmosVestingV1beta1Tx from "./proto-interfaces/cosmos/vesting/v1beta1/tx";

import * as CosmwasmWasmV1Tx from "./proto-interfaces/cosmwasm/wasm/v1/tx";

import * as IbcApplicationsFeeV1Tx from "./proto-interfaces/ibc/applications/fee/v1/tx";

import * as IbcApplicationsInterchain_accountsControllerV1Tx from "./proto-interfaces/ibc/applications/interchain_accounts/controller/v1/tx";

import * as IbcApplicationsInterchain_accountsHostV1Tx from "./proto-interfaces/ibc/applications/interchain_accounts/host/v1/tx";

import * as IbcApplicationsTransferV1Tx from "./proto-interfaces/ibc/applications/transfer/v1/tx";

import * as IbcCoreChannelV1Tx from "./proto-interfaces/ibc/core/channel/v1/tx";

import * as IbcCoreClientV1Tx from "./proto-interfaces/ibc/core/client/v1/tx";

import * as IbcCoreConnectionV1Tx from "./proto-interfaces/ibc/core/connection/v1/tx";


export namespace cosmos.auth.v1beta1.tx {

  export type MsgUpdateParamsMessage = CosmosMessage<CosmosAuthV1beta1Tx.MsgUpdateParams>;
}

export namespace cosmos.authz.v1beta1.tx {

  export type MsgGrantMessage = CosmosMessage<CosmosAuthzV1beta1Tx.MsgGrant>;
  export type MsgExecMessage = CosmosMessage<CosmosAuthzV1beta1Tx.MsgExec>;
  export type MsgRevokeMessage = CosmosMessage<CosmosAuthzV1beta1Tx.MsgRevoke>;
}

export namespace cosmos.bank.v1beta1.tx {

  export type MsgSendMessage = CosmosMessage<CosmosBankV1beta1Tx.MsgSend>;
  export type MsgMultiSendMessage = CosmosMessage<CosmosBankV1beta1Tx.MsgMultiSend>;
  export type MsgUpdateParamsMessage = CosmosMessage<CosmosBankV1beta1Tx.MsgUpdateParams>;
  export type MsgSetSendEnabledMessage = CosmosMessage<CosmosBankV1beta1Tx.MsgSetSendEnabled>;
  export type MsgBurnMessage = CosmosMessage<CosmosBankV1beta1Tx.MsgBurn>;
}

export namespace cosmos.circuit.v1.tx {

  export type MsgAuthorizeCircuitBreakerMessage = CosmosMessage<CosmosCircuitV1Tx.MsgAuthorizeCircuitBreaker>;
  export type MsgTripCircuitBreakerMessage = CosmosMessage<CosmosCircuitV1Tx.MsgTripCircuitBreaker>;
  export type MsgResetCircuitBreakerMessage = CosmosMessage<CosmosCircuitV1Tx.MsgResetCircuitBreaker>;
}

export namespace cosmos.consensus.v1.tx {

  export type MsgUpdateParamsMessage = CosmosMessage<CosmosConsensusV1Tx.MsgUpdateParams>;
}

export namespace cosmos.crisis.v1beta1.tx {

  export type MsgVerifyInvariantMessage = CosmosMessage<CosmosCrisisV1beta1Tx.MsgVerifyInvariant>;
  export type MsgUpdateParamsMessage = CosmosMessage<CosmosCrisisV1beta1Tx.MsgUpdateParams>;
}

export namespace cosmos.distribution.v1beta1.tx {

  export type MsgSetWithdrawAddressMessage = CosmosMessage<CosmosDistributionV1beta1Tx.MsgSetWithdrawAddress>;
  export type MsgWithdrawDelegatorRewardMessage = CosmosMessage<CosmosDistributionV1beta1Tx.MsgWithdrawDelegatorReward>;
  export type MsgWithdrawValidatorCommissionMessage = CosmosMessage<CosmosDistributionV1beta1Tx.MsgWithdrawValidatorCommission>;
  export type MsgFundCommunityPoolMessage = CosmosMessage<CosmosDistributionV1beta1Tx.MsgFundCommunityPool>;
  export type MsgUpdateParamsMessage = CosmosMessage<CosmosDistributionV1beta1Tx.MsgUpdateParams>;
  export type MsgCommunityPoolSpendMessage = CosmosMessage<CosmosDistributionV1beta1Tx.MsgCommunityPoolSpend>;
  export type MsgDepositValidatorRewardsPoolMessage = CosmosMessage<CosmosDistributionV1beta1Tx.MsgDepositValidatorRewardsPool>;
}

export namespace cosmos.evidence.v1beta1.tx {

  export type MsgSubmitEvidenceMessage = CosmosMessage<CosmosEvidenceV1beta1Tx.MsgSubmitEvidence>;
}

export namespace cosmos.feegrant.v1beta1.tx {

  export type MsgGrantAllowanceMessage = CosmosMessage<CosmosFeegrantV1beta1Tx.MsgGrantAllowance>;
  export type MsgRevokeAllowanceMessage = CosmosMessage<CosmosFeegrantV1beta1Tx.MsgRevokeAllowance>;
}

export namespace cosmos.gov.v1.tx {

  export type MsgSubmitProposalMessage = CosmosMessage<CosmosGovV1Tx.MsgSubmitProposal>;
  export type MsgExecLegacyContentMessage = CosmosMessage<CosmosGovV1Tx.MsgExecLegacyContent>;
  export type MsgVoteMessage = CosmosMessage<CosmosGovV1Tx.MsgVote>;
  export type MsgVoteWeightedMessage = CosmosMessage<CosmosGovV1Tx.MsgVoteWeighted>;
  export type MsgDepositMessage = CosmosMessage<CosmosGovV1Tx.MsgDeposit>;
  export type MsgUpdateParamsMessage = CosmosMessage<CosmosGovV1Tx.MsgUpdateParams>;
  export type MsgCancelProposalMessage = CosmosMessage<CosmosGovV1Tx.MsgCancelProposal>;
}

export namespace cosmos.gov.v1beta1.tx {

  export type MsgSubmitProposalMessage = CosmosMessage<CosmosGovV1beta1Tx.MsgSubmitProposal>;
  export type MsgVoteMessage = CosmosMessage<CosmosGovV1beta1Tx.MsgVote>;
  export type MsgVoteWeightedMessage = CosmosMessage<CosmosGovV1beta1Tx.MsgVoteWeighted>;
  export type MsgDepositMessage = CosmosMessage<CosmosGovV1beta1Tx.MsgDeposit>;
}

export namespace cosmos.group.v1.tx {

  export type MsgCreateGroupMessage = CosmosMessage<CosmosGroupV1Tx.MsgCreateGroup>;
  export type MsgUpdateGroupMembersMessage = CosmosMessage<CosmosGroupV1Tx.MsgUpdateGroupMembers>;
  export type MsgUpdateGroupAdminMessage = CosmosMessage<CosmosGroupV1Tx.MsgUpdateGroupAdmin>;
  export type MsgUpdateGroupMetadataMessage = CosmosMessage<CosmosGroupV1Tx.MsgUpdateGroupMetadata>;
  export type MsgCreateGroupPolicyMessage = CosmosMessage<CosmosGroupV1Tx.MsgCreateGroupPolicy>;
  export type MsgUpdateGroupPolicyAdminMessage = CosmosMessage<CosmosGroupV1Tx.MsgUpdateGroupPolicyAdmin>;
  export type MsgCreateGroupWithPolicyMessage = CosmosMessage<CosmosGroupV1Tx.MsgCreateGroupWithPolicy>;
  export type MsgUpdateGroupPolicyDecisionPolicyMessage = CosmosMessage<CosmosGroupV1Tx.MsgUpdateGroupPolicyDecisionPolicy>;
  export type MsgUpdateGroupPolicyMetadataMessage = CosmosMessage<CosmosGroupV1Tx.MsgUpdateGroupPolicyMetadata>;
  export type MsgSubmitProposalMessage = CosmosMessage<CosmosGroupV1Tx.MsgSubmitProposal>;
  export type MsgWithdrawProposalMessage = CosmosMessage<CosmosGroupV1Tx.MsgWithdrawProposal>;
  export type MsgVoteMessage = CosmosMessage<CosmosGroupV1Tx.MsgVote>;
  export type MsgExecMessage = CosmosMessage<CosmosGroupV1Tx.MsgExec>;
  export type MsgLeaveGroupMessage = CosmosMessage<CosmosGroupV1Tx.MsgLeaveGroup>;
}

export namespace cosmos.mint.v1beta1.tx {

  export type MsgUpdateParamsMessage = CosmosMessage<CosmosMintV1beta1Tx.MsgUpdateParams>;
}

export namespace cosmos.nft.v1beta1.tx {

  export type MsgSendMessage = CosmosMessage<CosmosNftV1beta1Tx.MsgSend>;
}

export namespace cosmos.slashing.v1beta1.tx {

  export type MsgUnjailMessage = CosmosMessage<CosmosSlashingV1beta1Tx.MsgUnjail>;
  export type MsgUpdateParamsMessage = CosmosMessage<CosmosSlashingV1beta1Tx.MsgUpdateParams>;
}

export namespace cosmos.staking.v1beta1.tx {

  export type MsgCreateValidatorMessage = CosmosMessage<CosmosStakingV1beta1Tx.MsgCreateValidator>;
  export type MsgEditValidatorMessage = CosmosMessage<CosmosStakingV1beta1Tx.MsgEditValidator>;
  export type MsgDelegateMessage = CosmosMessage<CosmosStakingV1beta1Tx.MsgDelegate>;
  export type MsgBeginRedelegateMessage = CosmosMessage<CosmosStakingV1beta1Tx.MsgBeginRedelegate>;
  export type MsgUndelegateMessage = CosmosMessage<CosmosStakingV1beta1Tx.MsgUndelegate>;
  export type MsgCancelUnbondingDelegationMessage = CosmosMessage<CosmosStakingV1beta1Tx.MsgCancelUnbondingDelegation>;
  export type MsgUpdateParamsMessage = CosmosMessage<CosmosStakingV1beta1Tx.MsgUpdateParams>;
}

export namespace cosmos.vesting.v1beta1.tx {

  export type MsgCreateVestingAccountMessage = CosmosMessage<CosmosVestingV1beta1Tx.MsgCreateVestingAccount>;
  export type MsgCreatePermanentLockedAccountMessage = CosmosMessage<CosmosVestingV1beta1Tx.MsgCreatePermanentLockedAccount>;
  export type MsgCreatePeriodicVestingAccountMessage = CosmosMessage<CosmosVestingV1beta1Tx.MsgCreatePeriodicVestingAccount>;
}

export namespace cosmwasm.wasm.v1.tx {

  export type MsgStoreCodeMessage = CosmosMessage<CosmwasmWasmV1Tx.MsgStoreCode>;
  export type MsgInstantiateContractMessage = CosmosMessage<CosmwasmWasmV1Tx.MsgInstantiateContract>;
  export type MsgInstantiateContract2Message = CosmosMessage<CosmwasmWasmV1Tx.MsgInstantiateContract2>;
  export type MsgExecuteContractMessage = CosmosMessage<CosmwasmWasmV1Tx.MsgExecuteContract>;
  export type MsgMigrateContractMessage = CosmosMessage<CosmwasmWasmV1Tx.MsgMigrateContract>;
  export type MsgUpdateAdminMessage = CosmosMessage<CosmwasmWasmV1Tx.MsgUpdateAdmin>;
  export type MsgClearAdminMessage = CosmosMessage<CosmwasmWasmV1Tx.MsgClearAdmin>;
  export type MsgUpdateInstantiateConfigMessage = CosmosMessage<CosmwasmWasmV1Tx.MsgUpdateInstantiateConfig>;
  export type MsgUpdateParamsMessage = CosmosMessage<CosmwasmWasmV1Tx.MsgUpdateParams>;
  export type MsgSudoContractMessage = CosmosMessage<CosmwasmWasmV1Tx.MsgSudoContract>;
  export type MsgPinCodesMessage = CosmosMessage<CosmwasmWasmV1Tx.MsgPinCodes>;
  export type MsgUnpinCodesMessage = CosmosMessage<CosmwasmWasmV1Tx.MsgUnpinCodes>;
  export type MsgStoreAndInstantiateContractMessage = CosmosMessage<CosmwasmWasmV1Tx.MsgStoreAndInstantiateContract>;
  export type MsgAddCodeUploadParamsAddressesMessage = CosmosMessage<CosmwasmWasmV1Tx.MsgAddCodeUploadParamsAddresses>;
  export type MsgRemoveCodeUploadParamsAddressesMessage = CosmosMessage<CosmwasmWasmV1Tx.MsgRemoveCodeUploadParamsAddresses>;
  export type MsgStoreAndMigrateContractMessage = CosmosMessage<CosmwasmWasmV1Tx.MsgStoreAndMigrateContract>;
}

export namespace ibc.applications.fee.v1.tx {

  export type MsgRegisterPayeeMessage = CosmosMessage<IbcApplicationsFeeV1Tx.MsgRegisterPayee>;
  export type MsgRegisterCounterpartyPayeeMessage = CosmosMessage<IbcApplicationsFeeV1Tx.MsgRegisterCounterpartyPayee>;
  export type MsgPayPacketFeeMessage = CosmosMessage<IbcApplicationsFeeV1Tx.MsgPayPacketFee>;
  export type MsgPayPacketFeeAsyncMessage = CosmosMessage<IbcApplicationsFeeV1Tx.MsgPayPacketFeeAsync>;
}

export namespace ibc.applications.interchain_accounts.controller.v1.tx {

  export type MsgRegisterInterchainAccountMessage = CosmosMessage<IbcApplicationsInterchain_accountsControllerV1Tx.MsgRegisterInterchainAccount>;
  export type MsgSendTxMessage = CosmosMessage<IbcApplicationsInterchain_accountsControllerV1Tx.MsgSendTx>;
  export type MsgUpdateParamsMessage = CosmosMessage<IbcApplicationsInterchain_accountsControllerV1Tx.MsgUpdateParams>;
}

export namespace ibc.applications.interchain_accounts.host.v1.tx {

  export type MsgUpdateParamsMessage = CosmosMessage<IbcApplicationsInterchain_accountsHostV1Tx.MsgUpdateParams>;
}

export namespace ibc.applications.transfer.v1.tx {

  export type MsgTransferMessage = CosmosMessage<IbcApplicationsTransferV1Tx.MsgTransfer>;
  export type MsgUpdateParamsMessage = CosmosMessage<IbcApplicationsTransferV1Tx.MsgUpdateParams>;
}

export namespace ibc.core.channel.v1.tx {

  export type MsgChannelOpenInitMessage = CosmosMessage<IbcCoreChannelV1Tx.MsgChannelOpenInit>;
  export type MsgChannelOpenTryMessage = CosmosMessage<IbcCoreChannelV1Tx.MsgChannelOpenTry>;
  export type MsgChannelOpenAckMessage = CosmosMessage<IbcCoreChannelV1Tx.MsgChannelOpenAck>;
  export type MsgChannelOpenConfirmMessage = CosmosMessage<IbcCoreChannelV1Tx.MsgChannelOpenConfirm>;
  export type MsgChannelCloseInitMessage = CosmosMessage<IbcCoreChannelV1Tx.MsgChannelCloseInit>;
  export type MsgChannelCloseConfirmMessage = CosmosMessage<IbcCoreChannelV1Tx.MsgChannelCloseConfirm>;
  export type MsgRecvPacketMessage = CosmosMessage<IbcCoreChannelV1Tx.MsgRecvPacket>;
  export type MsgTimeoutMessage = CosmosMessage<IbcCoreChannelV1Tx.MsgTimeout>;
  export type MsgTimeoutOnCloseMessage = CosmosMessage<IbcCoreChannelV1Tx.MsgTimeoutOnClose>;
  export type MsgAcknowledgementMessage = CosmosMessage<IbcCoreChannelV1Tx.MsgAcknowledgement>;
}

export namespace ibc.core.client.v1.tx {

  export type MsgCreateClientMessage = CosmosMessage<IbcCoreClientV1Tx.MsgCreateClient>;
  export type MsgUpdateClientMessage = CosmosMessage<IbcCoreClientV1Tx.MsgUpdateClient>;
  export type MsgUpgradeClientMessage = CosmosMessage<IbcCoreClientV1Tx.MsgUpgradeClient>;
  export type MsgSubmitMisbehaviourMessage = CosmosMessage<IbcCoreClientV1Tx.MsgSubmitMisbehaviour>;
  export type MsgRecoverClientMessage = CosmosMessage<IbcCoreClientV1Tx.MsgRecoverClient>;
  export type MsgIBCSoftwareUpgradeMessage = CosmosMessage<IbcCoreClientV1Tx.MsgIBCSoftwareUpgrade>;
  export type MsgUpdateParamsMessage = CosmosMessage<IbcCoreClientV1Tx.MsgUpdateParams>;
}

export namespace ibc.core.connection.v1.tx {

  export type MsgConnectionOpenInitMessage = CosmosMessage<IbcCoreConnectionV1Tx.MsgConnectionOpenInit>;
  export type MsgConnectionOpenTryMessage = CosmosMessage<IbcCoreConnectionV1Tx.MsgConnectionOpenTry>;
  export type MsgConnectionOpenAckMessage = CosmosMessage<IbcCoreConnectionV1Tx.MsgConnectionOpenAck>;
  export type MsgConnectionOpenConfirmMessage = CosmosMessage<IbcCoreConnectionV1Tx.MsgConnectionOpenConfirm>;
  export type MsgUpdateParamsMessage = CosmosMessage<IbcCoreConnectionV1Tx.MsgUpdateParams>;
}


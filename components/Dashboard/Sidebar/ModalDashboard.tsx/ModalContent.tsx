import { FC } from "react";
import { DashboardModalProps } from ".";
import { DashboardEditState } from "../..";
import { AccountForm, JobFairForm, ProfileForm } from "./Form";

export const ModalContent: FC<DashboardModalProps> = ({
  currentState,
  data,
}) => {
  switch (currentState) {
    case DashboardEditState.PROFILE:
      return <ProfileForm data={data.profile} />;
    case DashboardEditState.ACCOUNT:
      return <AccountForm data={data.account} />;
    case DashboardEditState.JOBFAIR:
      return <JobFairForm data={data.jobfairProfile} />;
    default:
      return null;
  }
};

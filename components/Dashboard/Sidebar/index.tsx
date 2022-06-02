import { FC, useState } from "react";
import { DashboardEditState, UserInfo } from "..";
import { useAuth } from "../../../context/auth";
import { DashboardModal } from "./ModalDashboard.tsx";
import { SideBarCard } from "./SideBarCard";

export const SideBar: FC<{
  data: UserInfo;
}> = ({ data }) => {
  const [currentState, showModal] = useState<DashboardEditState>(
    DashboardEditState.NOSHOW
  );
  const { user } = useAuth();

  const { profile, account, jobfairProfile } = data;
  return (
    <div className="w-full md:w-[250px] lg:w-[330px] xl:w-1/3">
      <DashboardModal
        data={data}
        currentState={currentState}
        showModal={showModal}
      />
      <SideBarCard
        type={DashboardEditState.PROFILE}
        showModal={showModal}
        text="Edit Profile"
      >
        <div>
          <h6>Name</h6>
          <p className="font-bold text-sm">{profile.name}</p>
        </div>
        <div className="my-3">
          <h6>Phone Number</h6>
          <p className="font-bold text-sm">{profile.phone}</p>
        </div>
      </SideBarCard>
      <SideBarCard
        type={DashboardEditState.ACCOUNT}
        showModal={showModal}
        text="Change Password"
      >
        <div>
          <h6>Email</h6>
          <p className="font-bold text-sm">{account.email}</p>
        </div>
      </SideBarCard>
      <SideBarCard
        type={DashboardEditState.JOBFAIR}
        showModal={showModal}
        text="Edit Job Fair Profile"
      >
        <div className="h-2" />
        <div className="mb-2">
          <h6 className="leading-3 font-medium">Curriculum Vitae (CV)</h6>
          {!!data.jobfairProfile[0].link ? (
            <a
              target="_blank"
              href={data.jobfairProfile[0].link}
              className="font-bold text-sm text-info-base underline"
              rel="noreferrer"
            >
              {`${user.full_name}.pdf`}
            </a>
          ) : (
            "-"
          )}
        </div>
        <div className="mb-2">
          <h6 className="leading-3 font-medium">Linkedin</h6>
          {!!data.jobfairProfile[1].link ? (
            <a
              target="_blank"
              href={data.jobfairProfile[1].link}
              className="font-bold text-sm text-info-base underline"
              rel="noreferrer"
            >
              {data.jobfairProfile[1].link ?? "-"}
            </a>
          ) : (
            "-"
          )}
        </div>
        <div className="mb-2">
          <h6 className="leading-3 font-medium">Website/Portfolio</h6>
          {!!data.jobfairProfile[2].link ? (
            <a
              target="_blank"
              href={data.jobfairProfile[2].link}
              className="font-bold text-sm text-info-base underline"
              rel="noreferrer"
            >
              {data.jobfairProfile[2].link ?? "-"}
            </a>
          ) : (
            "-"
          )}
        </div>
      </SideBarCard>
    </div>
  );
};

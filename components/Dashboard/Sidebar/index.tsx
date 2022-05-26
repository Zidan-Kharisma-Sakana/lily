import { FC, useState } from "react";
import { DashboardEditState, UserInfo } from "..";
import { DashboardModal } from "./ModalDashboard.tsx";
import { SideBarCard } from "./SideBarCard";

export const SideBar: FC<{
  data: UserInfo;
}> = ({ data }) => {
  const [currentState, showModal] = useState<DashboardEditState>(
    DashboardEditState.NOSHOW
  );

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
        {jobfairProfile.map((data, idx) => (
          <div key={`jobfairProfile-${idx}`} className="mb-2">
            <h6 className="leading-3 font-medium">{data.title}</h6>
            <a
              href={data.link}
              className="font-bold text-sm text-info-base underline"
            >
              {data.filename ?? "-"}
            </a>
          </div>
        ))}
      </SideBarCard>
    </div>
  );
};

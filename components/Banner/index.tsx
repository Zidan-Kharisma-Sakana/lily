import { FC } from "react";
import styles from "./Banner.module.css";
export const Banner: FC = () => {
  return (
    <section
      id="banner"
      className="bg-[#3C1856] overflow-hidden text-center relative rounded-3xl py-10 px-32 lg:px-36 xl:px-[168px] w-full text-[rgba(247,249,250,1)]"
    >
      <div className="font-bold text-2xl">
        <h3>The Life-long Learner’s Journey:</h3>
        <h3>Navigating the Bigger Picture With a Greater Purpose</h3>
      </div>
      <p className="font-medium text-lg mt-4">
        The power of youth has tremendously shaped the era we live in today. To
        align with the exponential growth of humanity, we need to redefine and
        rebirth our purpose in living. By embracing EduTech, Start-Ups and
        Innovation, LeadSeries will guide young people to redefine, rebirth, and
        place their purpose on this Earth to give sustainable positive impact to
        the world.{" "}
      </p>
      <div className={styles.bubble1} />
      <div className={styles.bubble2} />
    </section>
  );
};

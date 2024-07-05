import { useGetVolunteersQuery } from "@/redux/features/volunteer/volunteerApi";
import Spninner from "../ui/Spninner";
import AnimatedUnderLine from "../ui/AnimatedUnderLine";
import { TVolunteerCard } from "@/types/volunteer.type";
import VolunteerCard from "../ui/VolunteerCard";

const OurVolunteer = () => {
  const { data: volunteerData, isFetching } = useGetVolunteersQuery(undefined);

  if (isFetching) {
    return (
      <div className="h-96">
        <Spninner />
      </div>
    );
  }
  return (
    <div className="py-20">
      <div className="text-center mb-20">
        <h4 className="text-secondary text-lg font-semibold mb-3">
          Our Volunteers
        </h4>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary dark:text-white font-bold mb-2">
          Serve the humanity
        </h2>
        <AnimatedUnderLine className="mx-auto bg-red-500" />
      </div>
      <div className="w-[95%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 justify-items-center gap-10 mx-auto">
        {volunteerData?.data?.map((volunteer: TVolunteerCard) => (
          <VolunteerCard
            key={volunteer._id}
            volunteer={volunteer}
          ></VolunteerCard>
        ))}
      </div>
    </div>
  );
};

export default OurVolunteer;

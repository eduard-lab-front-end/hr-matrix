import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useContext } from "react";
import { SessionContext } from "@/contexts/SessionContext";
import Spinner from "../ui/spinner";
import { Badge } from "../ui/badge";
import ApplicantDetails from "../ApplicantDetails/ApplicantDetails";

const Applicants = () => {
  const { applicants } = useContext(SessionContext);
  const avatars = [
    "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png",
    "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
    "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
  ]
  const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {!applicants ? (
        <Spinner />
      ) : (
        applicants.map((currentApplicant) => (
          <>
            <ApplicantDetails
              applicantData={currentApplicant}
              trigger={
                <Card
                  className="p-6 lg:max-w-xl cursor-pointer"
                  key={currentApplicant._id}
                >
                  <CardHeader className="flex-row gap-4 items-center pt-0 pl-0">
                    <Avatar className="h-24 w-24">
                      <AvatarImage
                        className="rounded-full"
                        src={getRandomElement(avatars)}
                        alt="Applicant Image"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-2">
                      <CardTitle className="text-xl">
                        {currentApplicant.fullname}
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className="text-sm rounded-2xl bg-secondary"
                      >
                        {currentApplicant.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col px-0">
                    <div className="flex gap-1 items-center justify-between">
                      <h2 className="text-muted-foreground uppercase text-sm">
                        Email
                      </h2>
                      <p className="font-semibold">{currentApplicant.email}</p>
                    </div>
                    <div className="flex gap-1 items-center justify-between">
                      <h2 className="text-muted-foreground uppercase text-sm">
                        Application Date
                      </h2>
                      <p className="font-semibold">
                        {currentApplicant.applied.slice(0, 10)}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              }
            />
          </>
        ))
      )}
    </div>
  );
};

export default Applicants;

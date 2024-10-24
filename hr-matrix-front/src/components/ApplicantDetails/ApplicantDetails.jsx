import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Archive, Mail, Phone } from "lucide-react";
import uuid from "react-uuid";

const ApplicantDetails = ({ trigger, applicantData }) => {
  const avatars = [
    "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png",
    "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
    "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
  ]
  const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent
        className="sm:max-w-2xl overflow-y-auto
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-muted-foreground
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-muted"
      >
        <SheetHeader>
          <SheetTitle>
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
                <CardTitle className="text-lg">
                  {applicantData.fullname}
                </CardTitle>
                <div className="flex gap-2">
                <p> Applied for </p>
                <Badge className="text-sm rounded-2xl">
                  Full-stack Developer
                </Badge>
                </div>
                  
              </div>
            </CardHeader>
          </SheetTitle>
          <Card className="p-6 lg:max-w-xl">
            <CardHeader className="p-0 mb-5">
              <CardTitle className="text-2xl">Personal Info</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 p-0">
              <div className="flex gap-1 items-center justify-between">
                <h2 className="text-muted-foreground uppercase text-sm">
                  Full Name
                </h2>
                <p className="font-semibold text-sm">
                  {applicantData.fullname}
                </p>
              </div>
              <Separator />
              <div className="flex gap-1 items-center justify-between">
                <h2 className="text-muted-foreground uppercase text-sm">
                  Email
                </h2>
                <p className="font-semibold text-sm flex items-center">
                  <Mail size={14} className="mr-1" />
                  {applicantData.email}
                </p>
              </div>
              <Separator />
              <div className="flex gap-1 items-center justify-between">
                <h2 className="text-muted-foreground uppercase text-sm">
                  PHONE NUMBER
                </h2>
                <p className="font-semibold text-sm flex items-center">
                  <Phone size={14} className="mr-1" />
                  {applicantData.phone}
                </p>
              </div>
              <Separator />
              <div className="flex gap-1 items-center justify-between">
                <h2 className="text-muted-foreground uppercase text-sm">
                  Linkedin
                </h2>
                <p className="font-semibold text-sm">
                  {applicantData.linkedin}
                </p>
              </div>
              <Separator />
              <div className="flex gap-1 items-center justify-between">
                <h2 className="text-muted-foreground uppercase text-sm">
                  Applied
                </h2>
                <p className="font-semibold text-sm">
                  {applicantData.applied.slice(0, 10)}
                </p>
              </div>
              <Separator />
            </CardContent>
          </Card>
          <Card className="p-6 lg:max-w-xl">
            <CardHeader className="flex-row gap-4 items-center justify-between p-0 mb-5">
              <CardTitle className="text-2xl">Education Information</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 p-0 text-secondary-foreground">
              <div className="flex flex-col gap-2">
                <h3 className="uppercase text-sm">
                  {applicantData.educationInfo.degree}
                </h3>
                <div className="flex justify-between">
                  <h3 className="uppercase text-sm flex items-center">
                    <Archive size={14} className="mr-1" />{" "}
                    {applicantData.educationInfo.university}
                  </h3>
                  <h3 className="uppercase text-sm">
                    Graduated {applicantData.educationInfo.graduationYear}
                  </h3>
                </div>
              </div>
              <Separator />
            </CardContent>
          </Card>
          <Card className="p-6 lg:max-w-xl">
            <CardHeader className="flex-row gap-4 items-center justify-between p-0 mb-5">
              <CardTitle className="text-2xl">
                Professional Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 p-0 text-secondary-foreground ">
              {applicantData.professionalExperience.map((experience) => (
                <div
                  className="flex flex-col gap-2 border-b-4 mb-2 pb-3"
                  key={experience._id}
                >
                  <div className="flex justify-between">
                    <h3 className="uppercase text-sm flex items-center">
                      Position
                    </h3>
                    <h3 className="uppercase text-sm">{experience.jobTitle}</h3>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <h3 className="uppercase text-sm flex items-center">
                      Company
                    </h3>
                    <h3 className="uppercase text-sm">{experience.company}</h3>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <h3 className="uppercase text-sm flex items-center">
                      Location
                    </h3>
                    <h3 className="uppercase text-sm">{experience.location}</h3>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <h3 className="uppercase text-sm flex items-center">
                      Duration
                    </h3>
                    <h3 className="uppercase text-sm">{experience.years}</h3>
                  </div>
                  <Separator />
                  <div className="flex flex-col text-left">
                    <h3 className="uppercase text-sm flex items-center">
                      Responsibilities
                    </h3>
                    <ul className="uppercase text-sm">
                      {experience.responsibilities.map((item) => (
                        <li key={uuid()} className="text-xs ml-2">
                          - {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </SheetHeader>
        <SheetFooter className="sm:flex-col">
          <Card className="p-6 w-full lg:max-w-xl mt-2">
            <CardHeader className="p-0 mb-5">
              <CardTitle className="text-2xl">Skills</CardTitle>
            </CardHeader>
            <CardContent className="gap-2 p-0 text-secondary-foreground flex flex-wrap">
              {applicantData.skills.map((skill) => (
                <Badge variant="outline" key={applicantData._id}>
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ApplicantDetails;

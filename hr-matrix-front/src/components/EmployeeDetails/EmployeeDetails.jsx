import { SessionContext } from "@/contexts/SessionContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar } from "../ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "../ui/badge";
import { Mail, Pencil } from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

export const EmployeeDetails = () => {
  const [employee, setEmployee] = useState();
  const { setNeedRefresh, fetchWithToken } = useContext(SessionContext);
  const { employeeId } = useParams();

  const fetchEmployeeHandle = async () => {
    try {
      const response = await fetchWithToken(`/employees/${employeeId}`);
      setEmployee(response);
      setNeedRefresh(true);
    } catch (error) {
      console.log("Can't fetch employee", error);
    }
  };
  useEffect(() => {
    fetchEmployeeHandle();
  }, []);

  return (
    <>
      {employee && (
        <div className="p-8 grid grid-flow-col-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          <Card className="p-6 lg:max-w-xl">
            <CardHeader className="flex-row gap-4 items-center pt-0 pl-0">
              <Avatar className="h-24 w-24">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-2">
                <CardTitle className="text-xl">
                  {employee.firstName} {employee.lastName}
                </CardTitle>
                <Badge className="text-md rounded-2xl">{employee.role}</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex justify-between px-0">
              <div className="flex flex-col gap-1">
                <h2 className="text-muted-foreground uppercase text-sm">
                  Department
                </h2>
                <p className="font-semibold">Sales & Marketing</p>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-muted-foreground uppercase text-sm">
                  Date of Joining
                </h2>
                <p className="font-semibold">Jan 26 2020</p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2 bg-muted p-4 rounded-lg text-sm md:text-base items-start">
              <p className="flex gap-2 items-center">
                <Mail size={20} /> {employee.email}
              </p>
              <Separator />
              <p className="flex gap-2 items-center">
                <Mail size={20} /> {employee.email}
              </p>
            </CardFooter>
          </Card>

          <Card className="p-6 lg:max-w-xl">
            <CardHeader className="flex-row gap-4 items-center justify-between p-0 mb-5">
              <CardTitle className="text-2xl">Personal Info</CardTitle>
              <Button
                className="text-sm rounded-2xl py-px px-2 flex bg-muted text-muted-foreground hover:text-muted"
                style={{ "marginTop": "0px" }}
              >
                <Pencil size={14} className="mr-1" />
                Edit
              </Button>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 p-0">
              <div className="flex gap-1 items-center justify-between">
                <h2 className="text-muted-foreground uppercase text-sm">
                  Passport no.
                </h2>
                <p className="font-semibold">QW3342981</p>
              </div>
              <Separator /> 
              <div className="flex gap-1 items-center justify-between">
                <h2 className="text-muted-foreground uppercase text-sm">
                  PASSPORT EXP DATE.
                </h2>
                <p className="font-semibold">2/12/28</p>
              </div>
              <Separator /> 
              <div className="flex gap-1 items-center justify-between">
                <h2 className="text-muted-foreground uppercase text-sm">
                PHONE NUMBER
                </h2>
                <p className="font-semibold">(380).322-4422</p>
              </div>
              <Separator /> 
              <div className="flex gap-1 items-center justify-between">
                <h2 className="text-muted-foreground uppercase text-sm">
                BIRTHDAY
                </h2>
                <p className="font-semibold">12/01/1988</p>
              </div>
              <Separator /> 
              <div className="flex gap-1 items-center justify-between">
                <h2 className="text-muted-foreground uppercase text-sm">
                MARITAL STATUS
                </h2>
                <p className="font-semibold">Married</p>
              </div>
              <Separator /> 
            </CardContent>
          </Card>
          <Card className="p-6 lg:max-w-xl">
            <CardHeader className="flex-row gap-4 items-center justify-between p-0 mb-5">
              <CardTitle className="text-2xl">Bank informationY</CardTitle>
              <Button
                className="text-sm rounded-2xl py-px px-2 flex bg-muted text-muted-foreground hover:text-muted"
                style={{ "marginTop": "0px" }}
              >
                <Pencil size={14} className="mr-1" />
                Edit
              </Button>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 p-0">
              <div className="flex gap-1 items-center justify-between">
                <h2 className="text-muted-foreground uppercase text-sm">
                BANK ACCOUNT NO.
                </h2>
                <p className="font-semibold">00234552976293057</p>
              </div>
              <Separator /> 
              <div className="flex gap-1 items-center justify-between">
                <h2 className="text-muted-foreground uppercase text-sm">
                IFSC CODE
                </h2>
                <p className="font-semibold">CC128693311</p>
              </div>
              <Separator /> 
              <div className="flex gap-1 items-center justify-between">
                <h2 className="text-muted-foreground uppercase text-sm">
                PHONE NUMBER
                </h2>
                <p className="font-semibold">(380)-322-4422</p>
              </div>
              <Separator /> 
              <div className="flex gap-1 items-center justify-between">
                <h2 className="text-muted-foreground uppercase text-sm">
                PAN NO
                </h2>
                <p className="font-semibold">0012998383647383</p>
              </div>
              <Separator /> 
            </CardContent>
          </Card>
          <Card className="p-6 lg:max-w-xl">
            <CardHeader className="flex-row gap-4 items-center justify-between p-0 mb-5">
              <CardTitle className="text-2xl">Salary Information</CardTitle>
              <Button
                className="text-sm rounded-2xl py-px px-2 flex bg-muted text-muted-foreground hover:text-muted"
                style={{ "marginTop": "0px" }}
              >
                <Pencil size={14} className="mr-1" />
                Edit
              </Button>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 p-0">
              <div className="flex gap-1 items-center justify-between">
                <h2 className="text-muted-foreground uppercase text-sm">
                SALARY BASIS
                </h2>
                <p className="font-semibold">Monthly</p>
              </div>
              <Separator /> 
              <div className="flex gap-1 items-center justify-between">
                <h2 className="text-muted-foreground uppercase text-sm">
                SALARY AMOUNT PER MONTH
                </h2>
                <p className="font-semibold">$1300</p>
              </div>
              <Separator /> 
              <div className="flex gap-1 items-center justify-between">
                <h2 className="text-muted-foreground uppercase text-sm">
                EFFECTIVE DATE
                </h2>
                <p className="font-semibold">19/08/2022</p>
              </div>
              <Separator /> 
              <div className="flex gap-1 items-center justify-between">
                <h2 className="text-muted-foreground uppercase text-sm">
                PAYMENT TYPE
                </h2>
                <p className="font-semibold">Transfer</p>
              </div>
              <Separator /> 
              <div className="flex gap-1 items-center justify-between">
                <h2 className="text-muted-foreground uppercase text-sm">
                BILL RATE
                </h2>
                <p className="font-semibold">20%</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

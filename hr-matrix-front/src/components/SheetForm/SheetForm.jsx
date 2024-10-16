import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SessionContext } from "@/contexts/SessionContext";
import { useContext, useState } from "react";

export function SheetForm({
  sheetTrigger,
  employee = {
    firstName: "",
    lastName: "",
    role: "",
    status: "Active",
    employmentType: "",
    email: "",
    img: "",
    salary: "",
  },
  isUpdate = false,
}) {
  const { setNeedRefresh, fetchEmployeesWithToken } =
    useContext(SessionContext);
  const [employeeValues, setEmployeeValues] = useState({ ...employee });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setEmployeeValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!isUpdate) {
        await fetchEmployeesWithToken("/employees", "POST", employeeValues);
        setEmployeeValues({
          firstName: "",
          lastName: "",
          role: "",
          status: "Active",
          employmentType: "",
          email: "",
          img: "",
          salary: "",
        });
      } else {
        await fetchEmployeesWithToken(
          `/employees/${employee._id}`,
          "PUT",
          employeeValues
        );
      }
      setNeedRefresh(true);
    } catch (err) {
      console.log("Failed to add an employee", err);
    }
  };
  return (
    <Sheet>
      <SheetTrigger asChild>{sheetTrigger}</SheetTrigger>
      <SheetContent>
        <form onSubmit={handleSubmit}>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="firstName" className="text-right">
                First Name
              </Label>
              <Input
                id="firstName"
                name="firstName"
                value={employeeValues.firstName}
                onChange={handleChange}
                className="col-span-3"
                placeholder="John"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="lastName" className="text-right">
                Last Name
              </Label>
              <Input
                id="lastName"
                name="lastName"
                value={employeeValues.lastName}
                onChange={handleChange}
                className="col-span-3"
                placeholder="Doe"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="role" className="text-right">
                Role
              </Label>
              <Input
                id="role"
                name="role"
                value={employeeValues.role}
                onChange={handleChange}
                className="col-span-3"
                placeholder="Software Engineer"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="employmentType" className="text-right">
                Work Type
              </Label>
              <Input
                id="employmentType"
                name="employmentType"
                value={employeeValues.employmentType}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                value={employeeValues.email}
                onChange={handleChange}
                className="col-span-3"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="img" className="text-right">
                Image URL
              </Label>
              <Input
                id="img"
                name="img"
                value={employeeValues.img}
                onChange={handleChange}
                className="col-span-3"
                placeholder="https://example"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="salary" className="text-right">
                Salary
              </Label>
              <Input
                id="salary"
                name="salary"
                value={employeeValues.salary}
                onChange={handleChange}
                className="col-span-3"
                placeholder="Income per month"
              />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">{!isUpdate ? "Create" : "Edit"}</Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}

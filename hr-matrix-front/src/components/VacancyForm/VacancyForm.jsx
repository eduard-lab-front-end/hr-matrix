import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SessionContext } from "@/contexts/SessionContext";
import { useContext, useState } from "react";

const timeElapsed = Date.now();
const today = new Date(timeElapsed);

export function VacancyForm({
  dialogTrigger,
  vacancy,
  reloadHandler,
  isUpdate = false,
}) {
  const { setNeedRefresh, fetchWithToken } = useContext(SessionContext);
  const [vacancyValues, setVacancyValues] = useState(isUpdate ? vacancy : {
    positionTitle: "",
    applicants: "",
    location: "",
    status: "Open",
    publication: today.toLocaleDateString(),
  });
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setVacancyValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!isUpdate) {
        await fetchWithToken("/vacancies", "POST", vacancyValues);
        setVacancyValues({
          positionTitle: "",
          publication: "",
          applicants: "",
          location: "",
          status: "",
        });
      } else {
        await fetchWithToken(`/vacancies/${vacancy._id}`, "PUT", vacancyValues);
      }
      setOpen(false);
      reloadHandler();
      setNeedRefresh(true);
    } catch (err) {
      console.log("Failed to add a vacancy", err);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{dialogTrigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>{isUpdate ? "Update" : "Create"}</DialogTitle>
            <DialogDescription>
              {isUpdate
                ? "Make changes to your profile here. Click save when you're done."
                : "Fill in the fields to create a new position. Click save when you're done."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="positionTitle" className="text-right">
                Position
              </Label>
              <Input
                id="positionTitle"
                name="positionTitle"
                value={vacancyValues.positionTitle}
                onChange={handleChange}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="applicants" className="text-right">
                Applicants
              </Label>
              <Input
                id="applicants"
                name="applicants"
                value={vacancyValues.applicants}
                onChange={handleChange}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="location" className="text-right">
                Location
              </Label>
              <Input
                id="location"
                name="location"
                value={vacancyValues.location}
                onChange={handleChange}
                className="col-span-3"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">
              {isUpdate ? "Update" : "Create"} Vacancy
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

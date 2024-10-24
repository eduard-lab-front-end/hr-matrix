import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Profile = ({ user }) => {
  return (
    <div className="flex flex-col items-center mt-7 p-6">
      <div className="bg-muted w-full max-w-2xl shadow overflow-hidden rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex justify-between">
          <div className="">
            <h3 className="text-lg leading-6 font-medium text-foreground">
              Your Profile
            </h3>
            <p className="mt-1 max-w-2xl text-sm">
              Details and information about user.
            </p>
          </div>
          <div>
            <Avatar className="h-20 w-20">
              <AvatarImage
                className="rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="Applicant Image"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="border-t border-muted">
          <dl>
            <div className="bg-popover px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium ">Full name</dt>
              <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                {user.username}
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium ">Email address</dt>
              <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                {user.email}
              </dd>
            </div>
            <div className="bg-popover px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium ">User Id</dt>
              <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">{user._id}</dd>
            </div>
            <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium ">Created At</dt>
              <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                {user.createdAt.slice(0, 10)}
              </dd>
            </div>
            <div className="bg-popover px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium ">About</dt>
              <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                To get social media testimonials like these, keep your customers
                engaged with your social media accounts by posting regularly
                yourself
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Profile;

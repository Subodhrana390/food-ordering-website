import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();

  console.log(currentUser);

  if (isGetLoading) {
    return <span>Loading... </span>;
  }

  if (!currentUser) {
    return <span>Unable to Load user profile</span>;
  }

  console.log(currentUser);
  return (
    <UserProfileForm
      currentUser={currentUser}
      onsave={updateUser}
      isLoading={isUpdateLoading}
    />
  );
};

export default UserProfilePage;

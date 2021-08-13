import { Profile } from './Profile';


export const SwitchPage = ({ pageToOpen }) => {
  if (pageToOpen === "userPage") {
    return <Profile />;
  }

  return null;
}

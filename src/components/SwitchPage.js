import { Profile } from './Profile';
import { DayPlan } from './DayPlan';

export const SwitchPage = ({ pageToOpen, setIsPageOpen }) => {

  if (pageToOpen === "userPage") {
    return <Profile setIsPageOpen={setIsPageOpen} />;
  } else if (pageToOpen === "dayPlanPage") {
    return <DayPlan setIsPageOpen={setIsPageOpen} />;
  } else if (pageToOpen === "homePage") {
    return null;
  }

  return null;
}
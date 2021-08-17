import { Profile } from './Profile';
import { useState } from 'react';

export const SwitchPage = ({ pageToOpen, setIsPageOpen }) => {

  if (pageToOpen === "userPage") {
    return <Profile setIsPageOpen={setIsPageOpen} />;
  } else if (pageToOpen === "homePage") {
    return null;
  }

  return null;
}
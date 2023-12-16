import { Dispatch, SetStateAction, useState } from "react";
import Text from "./Text";

const Header = ({
  setIsClickLogin,
  isClickLogin,
}: {
  setIsClickLogin: Dispatch<SetStateAction<boolean>>;
  isClickLogin: boolean;
}) => {
  return (
    <div className="bg-kl-blue flex justify-between p-4 relative">
      <Text label="KLEDO TEST" className="font-bold not-italic	text-2xl font-roboto text-white" />

      <div className="flex fixed top-0 right-4">
        <div
          onClick={() => setIsClickLogin(false)}
          className={`${!isClickLogin && "bg-black"} py-4 px-4 cursor-pointer`}
        >
          <Text label="Profile" className="text-lg not-italic font-normal font-roboto text-white" />
        </div>

        <div
          onClick={() => setIsClickLogin(true)}
          className={`${isClickLogin && "bg-black"} py-4 px-4 cursor-pointer`}
        >
          <Text label="Login" className="text-lg not-italic font-normal font-roboto text-white" />
        </div>
      </div>
    </div>
  );
};

export default Header;

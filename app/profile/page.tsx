/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { FC, useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Protected from "../hooks/useProtected";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Profile from "../components/Profile/Profile";

type Props = {};

const page: FC<Props> = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(5);
  const [route, setRoute] = useState("Login");
  const { user } = useSelector((state: any) => state.auth);
  return (
    <div className="min-h-screen">
      <Protected>
        <Heading
          title={`${user?.name} profile - Smart Edu`}
          description="SmartEdu is a platform for students to learn and get help from teachers"
          keywords="Prograaming,MERN,Redux,Machine Learning"
        />
        <Header
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          setRoute={setRoute}
          route={route}
        />
        <Profile user={user} />
        <Footer />
      </Protected>
    </div>
  );
};

export default page;

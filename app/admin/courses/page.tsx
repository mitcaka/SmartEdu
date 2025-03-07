/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
'use client'
import DashboardHero from '@/app/components/Admin/DashboardHero'
import AdminProtected from '@/app/hooks/adminProtected'
import Heading from '@/app/utils/Heading'
import React from 'react'
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import AllCourses from "../../components/Admin/Course/AllCourses";

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title="SmartEdu - Admin"
          description="SmartEdu SmartEdu là nền tảng học trực tuyến số 1 Việt Nam"
          keywords="Programming,MERN,Redux,Machine Learning"
        />
        <div className="flex h-screen">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashboardHero />
            <AllCourses />
          </div>
        </div>
      </AdminProtected>
    </div>
  )
}

export default page
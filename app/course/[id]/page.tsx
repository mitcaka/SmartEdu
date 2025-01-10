/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { use } from "react";
import CourseDetailsPage from "../../components/Course/CourseDetailsPage";


const Page = ({params}:any) => {
    const unwrappedParams = use(params);
    return (
        <div>
            <CourseDetailsPage id={unwrappedParams.id} />
        </div>
    )
}

export default Page;
 
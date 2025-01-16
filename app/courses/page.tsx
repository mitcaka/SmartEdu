/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";
import Header from "../components/Header";
import Heading from "../utils/Heading";
import { styles } from "../styles/style";
import CourseCard from "../components/Course/CourseCard";
import Footer from "../components/Footer";

type Props = {};

const Page = (props: Props) => {
  const searchParams = useSearchParams();
  const search = searchParams?.get("title");
  const { data, isLoading } = useGetUsersAllCoursesQuery(undefined, {});
  const { data: categoriesData } = useGetHeroDataQuery("Categories", {});
  const [route, setRoute] = useState("Login");
  const [open, setOpen] = useState(false);
  const [courses, setcourses] = useState([]);
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 8;

  useEffect(() => {
    if (data) {
      let filteredCourses = data.courses;

      if (category !== "All") {
        filteredCourses = filteredCourses.filter(
          (item: any) => item.categories === category
        );
      }

      if (search) {
        filteredCourses = filteredCourses.filter((item: any) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );
      }

      const indexOfLastCourse = currentPage * perPage;
      const indexOfFirstCourse = indexOfLastCourse - perPage;
      const currentCourses = filteredCourses.slice(
        indexOfFirstCourse,
        indexOfLastCourse
      );

      setcourses(currentCourses);
    }
  }, [data, category, search, currentPage]);
  const totalPages = Math.ceil(data?.courses.length / perPage);
  const categories = categoriesData?.layout.categories;

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header
            route={route}
            setRoute={setRoute}
            open={open}
            setOpen={setOpen}
            activeItem={1}
          />
          <div className="w-[95%] 800px:w-[85%] m-auto min-h-[70vh]">
            <Heading
              title={"Tất cả khóa học"}
              description={"SmartEdu is a programming community."}
              keywords={
                "programming community, coding skills, expert insights, collaboration, growth"
              }
            />
            <br />
            <div className="w-full flex items-center flex-wrap">
              <div
                className={`h-[35px] ${
                  category === "All" ? "bg-[crimson]" : "bg-cyan-600"
                } m-3 px-3 rounded-[30px] flex items-center justify-center font-Poppins cursor-pointer text-white`}
                onClick={() => setCategory("All")}
              >
                Tất cả
              </div>
              {categories &&
                categories.map((item: any, index: number) => (
                  <div key={index}>
                    <div
                      className={`h-[35px] ${
                        category === item.title
                          ? "bg-[crimson]"
                          : "bg-cyan-600"
                      } m-3 px-3 rounded-[30px] flex items-center justify-center font-Poppins cursor-pointer text-white`}
                      onClick={() => setCategory(item.title)}
                    >
                      {item.title}
                    </div>
                  </div>
                ))}
            </div>
            {courses && courses.length === 0 && (
              <p
                className={`${styles.label} justify-center min-h-[50vh] flex items-center`}
              >
                {search
                  ? "Không tìm thấy khóa học nào!"
                  : "Không tìm thấy khóa học nào trong danh mục này. Vui lòng thử một danh mục khác!"}
              </p>
            )}
            <br />
            <br />
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] mb-12 border-0">
              {courses &&
                courses.map((item: any, index: number) => (
                  <CourseCard item={item} key={index} />
                ))}
            </div>
            <div className="flex justify-between items-center my-4 p-4 rounded-lg shadow-md dark:bg-slate-500 dark:bg-opacity-20 backdrop-blur border dark:border-[#ffffff1d] border-[#00000015] dark:shadow-[bg-slate-700] max-w-3xl mx-auto">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`bg-blue-500 text-white p-2 rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                Trang trước
              </button>
              <span className="font-semibold text-black dark:text-[#fff]">{`Trang ${currentPage} / ${totalPages}`}</span>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`bg-blue-500 text-white p-2 rounded ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                Trang kế
              </button>
            </div>
          </div>

          <Footer />
        </>
      )}
    </div>
  );
};

export default Page;

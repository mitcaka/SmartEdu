/* eslint-disable @typescript-eslint/no-explicit-any */
import { formatCurrency } from "@/app/utils/Format";
import Ratings from "@/app/utils/Ratings";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";

type Props = {
  item: any;
  isProfile?: boolean;
};

const CourseCard: FC<Props> = ({ item, isProfile }) => {
  return (
    <Link
      href={!isProfile ? `/course/${item._id}` : `course-access/${item._id}`}
    >
      <div className="w-full min-h-[35vh] dark:bg-slate-500 dark:bg-opacity-20 backdrop-blur border dark:border-[#ffffff1d] border-[#00000015] dark:shadow-[bg-slate-700] rounded-lg p-3 shadow-sm dark:shadow-inner">
        <Image
          src={item.thumbnail.url}
          width={500}
          height={300}
          style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
            borderRadius: "0.5rem",
          }}
          className="rounded w-full"
          alt=""
        />
        <br />
        <h1
          className="font-Poppins text-[16px] text-black dark:text-[#fff]"
          style={{
            overflow: "hidden", // Ẩn phần văn bản vượt quá
            display: "-webkit-box", // Sử dụng flexbox để quản lý số dòng
            WebkitLineClamp: 2, // Giới hạn số dòng tối đa là 2
            WebkitBoxOrient: "vertical", // Định hướng theo chiều dọc
            lineClamp: 2, // Hỗ trợ cho trình duyệt không phải WebKit
            height: "3em", // Căn chỉnh chiều cao cho 2 dòng
          }}
        >
          {item.name}
        </h1>
        <div className="w-full flex items-center justify-between pt-2">
          <Ratings rating={item.ratings} />
          <h5
            className={`text-black dark:text-[#fff] ${
              isProfile && "hidden 800px:inline"
            }`}
          >
            {item.purchased} Học viên
          </h5>
        </div>
        <div className="w-full flex items-center justify-between pt-3">
          <div className="flex">
            <h3 className="text-black dark:text-[#fff]">
              {item.price === 0 ? "Miễn phí" : formatCurrency(item.price)}
            </h3>
            <h5 className="pl-3 text-[14px] mt-[-5px] line-through opacity-80 text-black dark:text-[#fff]">
              {formatCurrency(item.estimatedPrice)}
            </h5>
          </div>
          <div className="flex items-center pb-3">
            <AiOutlineUnorderedList size={20} fill="#fff" />
            <h5 className="pl-2 text-black dark:text-[#fff]">
              {item.courseData?.length} Bài giảng
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;

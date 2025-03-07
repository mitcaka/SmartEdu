/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";
import CoursePlayer from "../../../utils/CoursePlayer";
import { styles } from "../../../../app/styles/style";
import Ratings from "../../../../app/utils/Ratings";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { formatCurrency } from "@/app/utils/Format";

type Props = {
  active: number;
  setActive: (active: number) => void;
  courseData: any;
  handleCourseCreate: any;
  isEdit?: boolean;
};

const CoursePreview: FC<Props> = ({
  courseData,
  handleCourseCreate,
  setActive,
  active,
  isEdit
}) => {
  const dicountPercentenge =
    ((courseData?.estimatedPrice - courseData?.price) /
      courseData?.estimatedPrice) *
    100;

  const discountPercentengePrice = dicountPercentenge.toFixed(0);

  const prevButton = () => {
    setActive(active - 1);
  };

  const createCourse = () => {
    handleCourseCreate();
  };

  return (
    <div className="w-[90%] m-auto py-5 mb-5">
      <div className="w-full relative">
        <div className="w-full mt-10">
          <CoursePlayer
            videoUrl={courseData?.demoUrl}
            title={courseData?.title}
          />
        </div>
        <div className="flex items-center">
          <h1 className="pt-5 text-[25px]">
            {courseData?.price === 0 ? "Miễn phí" : formatCurrency(courseData?.price)}
          </h1>
          <h5 className="pl-3 text-[20px] mt-2 line-through opacity-80">
            {formatCurrency(courseData?.estimatedPrice)}
          </h5>

          <h4 className="pl-5 pt-4 text-[22px]">
            {discountPercentengePrice}% Giảm
          </h4>
        </div>

        <div className="flex items-center">
          <div
            className={`${styles.button} !w-[180px] my-3 font-Poppins !bg-[crimson] cursor-not-allowed`}
          >
            Mua ngay {formatCurrency(courseData?.price)}
          </div>
        </div>
        <p className="pb-1">• Tài nguyên khóa học</p>
        <p className="pb-1">• Quyền truy cập trọn đời</p>
        <p className="pb-1">• Chứng chỉ hoàn thành</p>
        <p className="pb-3 800px:pb-1">• Hỗ trợ mọi lúc mọi nơi</p>
      </div>
      <div className="w-full">
        <div className="w-full 800px:pr-5">
          <h1 className="text-[25px] font-Poppins font-[600]">
            {courseData?.name}
          </h1>
          <div className="flex items-center justify-between pt-3">
            <div className="flex items-center">
              <Ratings rating={0} />
              <h5>0 Đánh giá</h5>
            </div>
            <h5>0 Học viên</h5>
          </div>
          <br />
          <h1 className="text-[25px] font-Poppins font-[600]">
          Bạn sẽ học được gì từ khóa học này?
          </h1>
        </div>
        {courseData?.benefits?.map((item: any, index: number) => (
          <div className="w-full flex 800px:items-center py-2" key={index}>
            <div className="w-[15px] mr-1">
              <IoCheckmarkDoneOutline size={20} />
            </div>
            <p className="pl-2">{item.title}</p>
          </div>
        ))}
        <br />
        <br />
        <h1 className="text-[25px] font-Poppins font-[600]">
        Yêu cầu cần có để bắt đầu khóa học này là gì?
        </h1>
        {courseData?.prerequisites?.map((item: any, index: number) => (
          <div className="w-full flex 800px:items-center py-2" key={index}>
            <div className="w-[15px] mr-1">
              <IoCheckmarkDoneOutline size={20} />
            </div>
            <p className="pl-2">{item.title}</p>
          </div>
        ))}
        <br />
        <br />
        {/* course description */}
        <div className="w-full">
          <h1 className="text-[25px] font-Poppins font-[600]">
            Thông tin khóa học
          </h1>
          <p className="text-[18px] mt-[20px] whitespace-pre-line w-full overflow-hidden">
            {courseData?.description}
          </p>
        </div>
        <br />
        <br />
      </div>
      <div className="w-full flex items-center justify-between">
        <div
          className="w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
          onClick={() => prevButton()}
        >
          Quay lại
        </div>
        <div
          className="w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
          onClick={() => createCourse()}
        >
         {
          isEdit ? 'Cập nhật' : 'Tạo khóa học'
         }
        </div>
      </div>
    </div>
  );
};

export default CoursePreview;

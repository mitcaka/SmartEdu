/* eslint-disable @typescript-eslint/no-require-imports */
import React from "react";
import { styles } from "../styles/style";
import Image from "next/image";

const About = () => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <h1
        className={`${styles.title} 800px:!text-[45px]`}
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        Giới thiệu học viện online{" "}
        <span className="text-gradient">SmartEdu</span>
      </h1>
      <p
        className="pb-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line"
        style={{ fontSize: "1.2rem", textAlign: "center" }}
      >
        SmartEdu là một hệ thống đào tạo trực tuyến, cổng kết nối Chuyên gia với
        Học viên
      </p>
      <p
        className="pb-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line"
        style={{ fontSize: "1.2rem", textAlign: "center" }}
      >
        Sứ mệnh của SmartEdu là chia sẻ kiến thức thực tiễn tới 10 triệu người
        dân Việt Nam
      </p>
      <iframe
        width="800"
        height="400"
        src="https://www.youtube.com/embed/YYa-XK11FvM"
        frameBorder="0"
        allowFullScreen
        style={{ display: "block", margin: "0 auto" }}
      ></iframe>
      <div className="w-[95%] 800px:w-[85%] m-auto">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Học viên
              </dt>
              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                5000+
              </dd>
            </div>

            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Giảng viên
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                50+
              </dd>
            </div>

            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Khóa học
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                100+
              </dd>
            </div>

            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Lượt xem
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                80.000+
              </dd>
            </div>
          </dl>
        </div>
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <header className="text-center">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                TRẢI NGHIỆM PHƯƠNG PHÁP HỌC TẬP HIỆN ĐẠI
              </h2>
            </header>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              <li className="flex flex-col items-center">
                <Image
                  src={require("../../public/assests/h1.png")}
                  alt=""
                  className="rounded-full"
                />
                <p className="mt-2">
                  <span className="tracking-wider text-gray-900">
                    Học mọi lúc, mọi nơi
                  </span>
                </p>
              </li>
              <li className="flex flex-col items-center">
                <Image
                  src={require("../../public/assests/h2.png")}
                  alt=""
                  className="rounded-full"
                />
                <p className="mt-2">
                  <span className="tracking-wider text-gray-900">
                    Chi phí hợp lý
                  </span>
                </p>
              </li>

              <li className="flex flex-col items-center">
                <Image
                  src={require("../../public/assests/h3.png")}
                  alt=""
                  className="rounded-full"
                />
                <p className="mt-2">
                  <span className="tracking-wider text-gray-900">
                    Tính ứng dụng cao
                  </span>
                </p>
              </li>

              <li className="flex flex-col items-center">
                <Image
                  src={require("../../public/assests/h4.png")}
                  alt=""
                  className="rounded-full"
                />
                <p className="mt-2">
                  <span className="tracking-wider text-gray-900">
                    Tương tác với giảng viên
                  </span>
                </p>
              </li>
              <li className="flex flex-col items-center">
                <Image
                  src={require("../../public/assests/h5.png")}
                  alt=""
                  className="rounded-full"
                />
                <p className="mt-2">
                  <span className="tracking-wider text-gray-900">
                    Hỗ trợ 24/7
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className="bg-white">
          <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <h2 className=" text-center text-xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              HỌC VIÊN NÓI GÌ VỀ SMARTEDU
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                  <Image
                    src={require("../../public/assests/ab-av-1.jpg")}
                    alt=""
                    className="size-14 rounded-full object-cover"
                  />

                  <div>
                    <div className="flex justify-center gap-0.5 text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>

                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      Nguyễn Ngân Hà
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-700">
                  Mình đang theo học khóa Tiếng Anh tại SmartEdu, chương trình
                  dạy rất thực tế và dễ hiểu cho người mất gốc. Chỉ sau 3 tháng
                  mình đã có thể tự tin giao tiếp Tiếng Anh cơ bản và sử dụng
                  được ngay trong chuyến du lịch Thái vừa rồi. Rất cám ơn
                  SmartEdu và cô giáo đã nhiệt tình support, mình sẽ tham khảo
                  thêm các khóa nâng cao hơn để thi lấy chứng chỉ Tiếng Anh nữa.
                </p>
              </blockquote>

              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                <Image
                    src={require("../../public/assests/ab-av-3.jpg")}
                    alt=""
                    className="size-14 rounded-full object-cover"
                  />

                  <div>
                    <div className="flex justify-center gap-0.5 text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>

                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      Trần Văn Tuấn
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-700">
                  Cám ơn SmartEdu đã mang đến những khóa học chất lượng, tôi đã
                  mua tới 6 khóa học bởi những kiến thức rất thực tế mà các bài
                  học mang lại và chắc chắn sẽ sẽ còn mua thêm. Bên chăm sóc
                  khách hàng và tư vấn cũng rất nhiệt tình để tìm ra đúng khóa
                  học phù hợp yêu cầu của khách hàng, khi gặp khó khăn gì tôi
                  cũng nhanh chóng được giải quyết ngay. Đây cũng là điều tôi
                  rất thích về SmartEdu.
                </p>
              </blockquote>

              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                <Image
                    src={require("../../public/assests/ab-av-2.jpg")}
                    alt=""
                    className="size-14 rounded-full object-cover"
                  />

                  <div>
                    <div className="flex justify-center gap-0.5 text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>

                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      Đào Thị Hồng Anh
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-700">
                  Tôi là nhân viên văn phòng nên không có nhiều thời gian đi học
                  thêm. Nhưng Unica mang cho tôi trải nghiệm học tập rất thoải
                  mái, mở máy lên là học bất cứ lúc nào cũng được, hoàn toàn chủ
                  động chứ không bị phụ thuộc vào ai cả. Tuy là học online nhưng
                  vẫn được giảng viên hỗ trợ giải đáp thắc mắc nữa. Tôi chắc
                  chắn sẽ đăng ký thêm nhiều khóa học tại đây!
                </p>
              </blockquote>
            </div>
          </div>
        </section>
        <br />
        <span className="text-[22px]">Nguyen Phuong Mai</span>
        <h5 className="text-[18px] font-Poppins">
          Founder and CEO of SmartEdu
        </h5>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;

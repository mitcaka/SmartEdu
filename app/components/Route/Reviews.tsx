/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-require-imports */
import { styles } from "@/app/styles/style";
import Image from "next/image";
import React from "react";
import ReviewCard from "../Review/ReviewCard";

type Props = {};

export const reviews = [
  {
    name: "Trương Quỳnh Hoa",
    avatar: require("../../../public/assests/1.png"),
    profession: "Sinh viên | Đại học Bách Khoa Hà Nội",
    comment:
    "Tôi rất vui khi khám phá SmartEdu, một trang web cung cấp nhiều khóa học phong phú về các chủ đề công nghệ khác nhau. Tôi rất ấn tượng với trải nghiệm của mình, vì trang web cung cấp một lựa chọn đa dạng các khóa học phù hợp với nhiều cấp độ kỹ năng và sở thích khác nhau. Nếu bạn đang tìm cách nâng cao kiến thức và kỹ năng trong ngành công nghệ, tôi rất khuyên bạn nên tham khảo SmartEdu!",
},
{
    name: "Nguyễn Văn A",
    avatar: require("../../../public/assests/2.png"),
    profession: "Lập trình viên Full stack | Công ty TNHH ABC",
    comment:
    "Tôi thật sự ấn tượng với nền tảng học online SmartEdu! Giao diện của trang web rất thân thiện và dễ sử dụng, giúp người học dễ dàng tìm kiếm và tiếp cận các khóa học mà mình quan tâm. Đặc biệt, sự đa dạng trong các chủ đề và khóa học không chỉ đáp ứng nhu cầu của học viên ở nhiều trình độ khác nhau mà còn khuyến khích họ khám phá thêm nhiều lĩnh vực mới.Các khóa học được thiết kế rất bài bản, với nội dung phong phú và chi tiết, giúp học viên dễ dàng nắm bắt kiến thức. Hơn nữa, việc kết hợp giữa lý thuyết và thực hành trong từng bài học là một điểm cộng lớn, giúp người học áp dụng kiến thức vào thực tế một cách hiệu quả.",
},
{
    name: "Lê Minh Tuấn",
    avatar: require("../../../public/assests/3.png"),
    profession: "Sinh viên kỹ thuật hệ thống máy tính | Việt Nam",
    comment:
    "Nội dung của video rất đặc biệt. Điều tôi thích nhất là các video rất dài, có nghĩa là chúng bao quát mọi thứ một cách chi tiết. Nhờ đó, bất kỳ ai có trình độ mới bắt đầu cũng có thể hoàn thành một dự án tích hợp khi xem các video. Cảm ơn bạn rất nhiều. Tôi rất mong chờ các video tiếp theo. Hãy tiếp tục công việc tuyệt vời này!",
},
{
    name: "Nguyễn Thị Hương",
    avatar: require("../../../public/assests/4.png"),
    profession: "Lập trình viên Web Junior | FPT Software",
    comment:
    "Tôi đã có một trải nghiệm tuyệt vời trên SmartEdu. Các khóa học rất phong phú và hữu ích cho việc phát triển nghề nghiệp.",
},
{
    name: "Lê Thị Lan",
    avatar: require("../../../public/assests/5.png"),
    profession: "Lập trình viên Full stack | VNPT",
    comment:
    "Nội dung của bạn rất chất lượng! Tôi đánh giá cao sự chi tiết trong các video, giúp tôi học hỏi nhanh chóng.",
},
{
    name: "Nguyễn Văn Bình",
    avatar: require("../../../public/assests/6.png"),
    profession: "Lập trình viên Full stack | HostingViet",
    comment:
    "Tham gia SmartEdu là một quyết định đúng đắn! Các bài học thực tiễn giúp tôi áp dụng kiến thức vào dự án thực tế.",
},
];

const Reviews = (props: Props) => {
  return (
  <div className="w-[90%] 800px:w-[85%] m-auto">
      <div className="w-full 800px:flex items-center">
      <div className="800px:w-[50%] w-full">
        <Image
        src={require("../../../public/assests/business-img.png")}
        alt="business"
        width={500}
        height={500}
        />
        </div>
        <div className="800px:w-[50%] w-full">
          <h3 className={`${styles.title} 800px:!text-[40px]`}>
            Các học viên  <span className="text-gradient">tiêu biểu</span>{" "}
          </h3>
          <br />
          {/* <p className={styles.label}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque unde
            voluptatum dignissimos, nulla perferendis dolorem voluptate nemo
            possimus magni deleniti natus accusamus officiis quasi nihil
            commodi, praesentium quidem, quis doloribus?
          </p> */}
        </div>
        <br />
        <br />
       </div>
       <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0 md:[&>*:nth-child(3)]:!mt-[-60px] md:[&>*:nth-child(6)]:!mt-[-20px]">
        {reviews &&
            reviews.map((i, index) => <ReviewCard item={i} key={index} />)}
        </div>
  </div>
  );
};

export default Reviews;

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { styles } from "@/app/styles/style";
import React, { FC, useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { BsLink45Deg, BsPencil } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

type Props = {
  active: number;
  setActive: (active: number) => void;
  courseContentData: any;
  setCourseContentData: (courseContentData: any) => void;
  handleSubmit: any;
};

const CourseContent: FC<Props> = ({
  courseContentData,
  setCourseContentData,
  active,
  setActive,
  handleSubmit: handlleCourseSubmit,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(
    Array(courseContentData.length).fill(false)
  );

  const [activeSection, setActiveSection] = useState(1);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const handleCollapseToggle = (index: number) => {
    const updatedCollasped = [...isCollapsed];
    updatedCollasped[index] = !updatedCollasped[index];
    setIsCollapsed(updatedCollasped);
  };

  const handleRemoveLink = (index: number, linkIndex: number) => {
    const updatedData = [...courseContentData];
    updatedData[index].links.splice(linkIndex, 1);
    setCourseContentData(updatedData);
  };

  const handleAddLink = (index: number) => {
    const updatedData = [...courseContentData];
    updatedData[index].links.push({ title: "", url: "" });
    setCourseContentData(updatedData);
  };

  const newContentHandler = (item: any) => {
    if (
      item.title === "" ||
      item.description === "" ||
      item.videoUrl === "" ||
      item.links[0].title === "" ||
      item.links[0].url === "" ||
      item.videoLength === ""
    ) {
      toast.error("Vui lòng điền đầy đủ thông tin!");
    } else {
      let newVideoSection = "";

      if (courseContentData.length > 0) {
        const lastVideoSection =
          courseContentData[courseContentData.length - 1].videoSection;

        // use the last videoSection if available, else use user input
        if (lastVideoSection) {
          newVideoSection = lastVideoSection;
        }
      }
      const newContent = {
        videoUrl: "",
        title: "",
        description: "",
        videoSection: newVideoSection,
        videoLength: "",
        links: [{ title: "", url: "" }],
      };

      setCourseContentData([...courseContentData, newContent]);
    }
  };

  const addNewSection = () => {
    if (
      courseContentData[courseContentData.length - 1].title === "" ||
      courseContentData[courseContentData.length - 1].description === "" ||
      courseContentData[courseContentData.length - 1].videoUrl === "" ||
      courseContentData[courseContentData.length - 1].links[0].title === "" ||
      courseContentData[courseContentData.length - 1].links[0].url === ""
    ) {
      toast.error("Vui lòng điền đầy đủ thông tin!");
    } else {
      setActiveSection(activeSection + 1);
      const newContent = {
        videoUrl: "",
        title: "",
        description: "",
        videoLength: "",
        videoSection: `Chương ${activeSection}`,
        links: [{ title: "", url: "" }],
      };
      setCourseContentData([...courseContentData, newContent]);
    }
  };

  const prevButton = () => {
    setActive(active - 1);
  };

  const handleOptions = () => {
    if (
      courseContentData[courseContentData.length - 1].title === "" ||
      courseContentData[courseContentData.length - 1].description === "" ||
      courseContentData[courseContentData.length - 1].videoUrl === "" ||
      courseContentData[courseContentData.length - 1].links[0].title === "" ||
      courseContentData[courseContentData.length - 1].links[0].url === ""
    ) {
      toast.error("Chương học không thể trống!");
    } else {
      setActive(active + 1);
      handlleCourseSubmit();
    }
  };

  function handleSectionChange(index: number, value: string): void {
    const updatedData = courseContentData.map((section, i) => {
      if (i === index) {
        return { ...section, videoSection: value };
      }
      return section;
    });
    setCourseContentData(updatedData);
  }

  function handleDataChange(index: number, value: string): void {
    const updatedData = courseContentData.map((item, i) => {
      if (i === index) {
        return { ...item, title: value }; 
      }
      return item;
    });
    setCourseContentData(updatedData);
  }
  return (
    <div className="w-[80%] m-auto mt-24 p-3">
      <form onSubmit={handleSubmit}>
        {courseContentData?.map((item: any, index: number) => {
          const showSectionInput =
            index === 0 ||
            item.videoSection !== courseContentData[index - 1].videoSection
          return (
            <>
              <div
                className={`w-full bg-[#cdc8c817] p-4 ${
                  showSectionInput ? "mt-10" : "mb-0"
                }`}
                key={index}
              >
                {showSectionInput && (
                  <>
                    <div className="flex w-full items-center">
                      <input
                        type="text"
                        className={`text-[20px] ${
                          item.videoSection === "Untitled Section"
                            ? "w-[170px]"
                            : "w-min"
                        } font-Poppins cursor-pointer dark:text-white text-black bg-transparent outline-none`}
                        value={item.videoSection}
                        onChange={(e) => handleSectionChange(index, e.target.value)}
                      />
                      <BsPencil className="cursor-pointer dark:text-white text-black" />
                    </div>
                    <br />
                  </>
                )}

                <div className="flex w-full items-center justify-between my-0">
                  {isCollapsed[index] ? (
                    <>
                      {item.title ? (
                        <p className="font-Poppins dark:text-white text-black">
                          {index + 1}. {item.title}
                        </p>
                      ) : (
                        <></>
                      )}
                    </>
                  ) : (
                    <div></div>
                  )}

                  {/* // arrow button for collasped video content */}
                  <div className="flex items-center">
                    <AiOutlineDelete
                      className={`dark:text-white text-[20px] mr-2 text-black ${
                        index > 0 ? "cursor-pointer" : "cursor-no-drop"
                      }`}
                      onClick={() => {
                        if (index > 0) {
                          const updatedData = [...courseContentData];
                          updatedData.splice(index, 1);
                          setCourseContentData(updatedData);
                        }
                      }}
                    />
                    <MdOutlineKeyboardArrowDown
                      fontSize="large"
                      className="dark:text-white text-black"
                      style={{
                        transform: isCollapsed[index]
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      }}
                      onClick={() => handleCollapseToggle(index)}
                    />
                  </div>
                </div>
                {!isCollapsed[index] && (
                  <>
                    <div className="my-3">
                      <label className={styles.label}>Tiêu đề Video</label>
                      <input
                        type="text"
                        placeholder="Bài học 1..."
                        className={`${styles.input}`}
                        value={item.title}
                        onChange={(e) => handleDataChange(index, e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className={styles.label}>Link Video</label>
                      <input
                        type="text"
                        placeholder="Mã video..."
                        className={`${styles.input}`}
                        value={item.videoUrl}
                        onChange={(e) => {
                          const updatedData = courseContentData.map((item, i) => {
                            if (i === index) {
                              return { ...item, videoUrl: e.target.value };
                            }
                            return item;
                          });
                          setCourseContentData(updatedData);
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label className={styles.label}>Chiều dài video (phút)</label>
                      <input
                        type="number"
                        placeholder="20"
                        className={`${styles.input}`}
                        value={item.videoLength}
                        onChange={(e) => {
                          const updatedData = courseContentData.map((item, i) => {
                            if (i === index) {
                              return { ...item, videoLength: e.target.value };
                            }
                            return item;
                          });
                          setCourseContentData(updatedData);
                        }}
                      />
                    </div>
                    

                    <div className="mb-3">
                      <label className={styles.label}>Mô tả video</label>
                      <textarea
                        rows={8}
                        cols={30}
                        placeholder="..."
                        className={`${styles.input} !h-min py-2`}
                        value={item.description}
                        onChange={(e) => {
                          const updatedData = courseContentData.map((item, i) => {
                            if (i === index) {
                              return { ...item, description: e.target.value };
                            }
                            return item;
                          });
                          setCourseContentData(updatedData);
                        }}
                      />
                      <br />
                    </div>
                    {item?.links.map((link: any, linkIndex: number) => (
                      <div className="mb-3 block" key={linkIndex}>
                        <div className="w-full flex items-center justify-between">
                          <label className={styles.label}>
                            Link {linkIndex + 1}
                          </label>
                          <AiOutlineDelete
                            className={`${
                              linkIndex === 0
                                ? "cursor-no-drop"
                                : "cursor-pointer"
                            } text-black dark:text-white text-[20px]`}
                            onClick={() =>
                              linkIndex === 0
                                ? null
                                : handleRemoveLink(index, linkIndex)
                            }
                          />
                        </div>
                        <input
                          type="text"
                          placeholder="Tiêu đề tài nguyên..."
                          className={`${styles.input}`}
                          value={link.title}
                          onChange={(e) => {
                            const updatedData = courseContentData.map((item, i) => {
                              if (i === index) {
                                const updatedLinks = item.links.map((link, j) => {
                                  if (j === linkIndex) {
                                    return { ...link, title: e.target.value };
                                  }
                                  return link;
                                });
                                return { ...item, links: updatedLinks };
                              }
                              return item;
                            });
                            setCourseContentData(updatedData);
                          }}
                        />
                        <input
                          type="url"
                          placeholder="Link tài nguyên..."
                          className={`${styles.input} mt-6`}
                          value={link.url}
                          onChange={(e) => {
                            const updatedData = courseContentData.map((item, i) => {
                              if (i === index) {
                                const updatedLinks = item.links.map((link, j) => {
                                  if (j === linkIndex) {
                                    return { ...link, url: e.target.value };
                                  }
                                  return link;
                                });
                                return { ...item, links: updatedLinks };
                              }
                              return item;
                            });
                            setCourseContentData(updatedData);
                          }}
                        />
                      </div>
                    ))}
                    <br />
                    {/* add link button */}
                    <div className="inline-block mb-4">
                      <p
                        className="flex items-center text-[18px] dark:text-white text-black cursor-pointer"
                        onClick={() => handleAddLink(index)}
                      >
                        <BsLink45Deg className="mr-2" /> Thêm tài nguyên
                      </p>
                    </div>
                  </>
                )}
                <br />
                {/* add new content */}
                {index === courseContentData.length - 1 && (
                  <div>
                    <p
                      className="flex items-center text-[18px] dark:text-white text-black cursor-pointer"
                      onClick={(e: any) => newContentHandler(item)}
                    >
                      <AiOutlinePlusCircle className="mr-2" /> Thêm Bài học
                    </p>
                  </div>
                )}
              </div>
            </>
          );
        })}
        <br />
        <div
          className="flex items-center text-[20px] dark:text-white text-black cursor-pointer"
          onClick={() => addNewSection()}
        >
          <AiOutlinePlusCircle className="mr-2" /> Thêm chương mới
        </div>
      </form>
      <br />
      <div className="w-full flex items-center justify-between">
        <div
          className="w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
          onClick={() => prevButton()}
        >
          Quay lại
        </div>
        <div
          className="w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
          onClick={() => handleOptions()}
        >
          Tiếp tục
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default CourseContent;

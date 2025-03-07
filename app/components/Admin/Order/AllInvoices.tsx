/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useTheme } from "next-themes";
import { useGetAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import Loader from "../../Loader/Loader";
import { format,register } from "timeago.js";

import { useGetAllUsersQuery } from "@/redux/features/user/userApi";
import { AiOutlineMail } from "react-icons/ai";
import { useGetAllOrdersQuery } from "@/redux/features/orders/ordersApi";
import { formatCurrency } from "@/app/utils/Format";
import vi from "timeago.js/lib/lang/vi";

register('vi', vi);

type Props = {
  isDashboard?: boolean;
};

type Order = {
  _id: string;
  userName: string;
  userEmail: string;
  title: string;
  price: number;
  createdAt: string;
};

const AllInvoices = ({ isDashboard }: Props) => {
  const { theme, setTheme } = useTheme();
  const { isLoading, data } = useGetAllOrdersQuery({});
  const { data: usersData } = useGetAllUsersQuery({});
  const { data: coursesData } = useGetAllCoursesQuery({});

  const [orderData, setOrderData] =  useState<Order[]>([]);

  useEffect(() => {
    if (data) {
      const temp = data.orders.map((item: any) => {
        const user = usersData?.users.find(
          (user: any) => user._id === item.userId
        );
        const course = coursesData?.courses.find(
          (course: any) => course._id === item.courseId
        );
        return {
          ...item,
          userName: user?.name,
          userEmail: user?.email,
          title: course?.name,
          price: course ? course.price : 0,
        };
      });
      setOrderData(temp);
    }
  }, [data, usersData, coursesData]);

  // const columns: any = [
  //   { field: "id", headerName: "ID", flex: 0.3 },
  //   { field: "userName", headerName: "Tên học viên", flex: isDashboard ? 0.6 : 0.5 },
  //   ...(isDashboard
  //     ? []
  //     : [
  //         { field: "userEmail", headerName: "Email", flex: 1 },
  //         { field: "title", headerName: "Tên khóa học", flex: 1 },
  //       ]),
  //   { field: "price", headerName: "Giá tiền", flex: 0.5 },
  //   ...(isDashboard
  //     ? [{ field: "created_at", headerName: "Ngày tạo", flex: 0.5 }]
  //     : [
  //         {
  //           field: " ",
  //           headerName: "Email",
  //           flex: 0.2,
  //           renderCell: (params: any) => {
  //             return (
  //               <a href={`mailto:${params.row.userEmail}`}>
  //                 <AiOutlineMail
  //                   className="dark:text-white text-black mt-4"
  //                   size={20}
  //                 />
  //               </a>
  //             );
  //           },
  //         },
  //       ]),
  // ];
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 0.3 },
    { field: "userName", headerName: "Tên học viên", flex: isDashboard ? 0.6 : 0.5 },
    ...(isDashboard ? [] : [
        { field: "userEmail", headerName: "Email", flex: 1 },
        { field: "title", headerName: "Tên khóa học", flex: 1 },
      ]),
    { field: "price", headerName: "Giá tiền", flex: 0.5 },
    ...(isDashboard ? [
        { field: "created_at", headerName: "Ngày tạo", flex: 0.5 },
      ] : [
        {
          field: "emailAction",
          headerName: "Email",
          flex: 0.2,
          renderCell: (params: any) => (
            <a href={`mailto:${params.row.userEmail}`}>
              <AiOutlineMail className="dark:text-white text-black mt-4" size={20} />
            </a>
          ),
        },
      ]),
  ];
  const rows: any = [];

  orderData &&
    orderData.forEach((item: any) => {
      rows.push({
        id: item._id,
        userName: item.userName,
        userEmail: item.userEmail,
        title: item.title,
        price: formatCurrency(item.price),
        created_at: format(item.createdAt,'vi'),
      });
      console.log(item.price);
      
    });

  return (
    <div className={!isDashboard ? "mt-[120px]" : "mt-[0px]"}>
      {isLoading ? (
        <Loader />
      ) : (
        <Box m={isDashboard ? "0" : "40px"}>
          <Box
            m={isDashboard ? "0" : "40px 0 0 0"}
            height={isDashboard ? "35vh" : "90vh"}
            overflow={"hidden"}
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
                outline: "none",
              },
              "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-sortIcon": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-row": {
                color: theme === "dark" ? "#fff" : "#000",
                borderBottom:
                  theme === "dark"
                    ? "1px solid #ffffff30!important"
                    : "1px solid #ccc!important",
              },
              "& .MuiTablePagination-root": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none!important",
              },
              "& .name-column--cell": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: theme === "dark" ? "#3e4396" : "#A4A9FC",
                borderBottom: "none",
                color: theme === "dark" ? "#000" : "#000",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: theme === "dark" ? "#1F2A40" : "#F2F0F0",
              },
              "& .MuiDataGrid-footerContainer": {
                color: theme === "dark" ? "#fff" : "#000",
                borderTop: "none",
                backgroundColor: theme === "dark" ? "#3e4396" : "#A4A9FC",
              },
              "& .MuiCheckbox-root": {
                color:
                  theme === "dark" ? `#b7ebde !important` : `#000 !important`,
              },
              "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: `#fff !important`,
              },
            }}
          >
            <DataGrid
              checkboxSelection={isDashboard ? false : true}
              rows={rows}
              columns={columns}
            />
          </Box>
        </Box>
      )}
    </div>
  );
};

export default AllInvoices;

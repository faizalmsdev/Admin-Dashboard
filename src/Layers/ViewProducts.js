import React, { useEffect, useState } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const ViewProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://karaikudi-kitchen-backend.onrender.com/api/v1/menu');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        // Add a unique id to each row
        const menuWithId = jsonData.data.menu.map((item, index) => ({ ...item, id: index + 1 }));
        setData(menuWithId);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs only once after the initial render

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'dish_name', headerName: 'Dish Name', width: 200 },
    { field: 'price', headerName: 'Price', width: 120 },
    { field: 'instock', headerName: 'In Stock', width: 120 },
    { field: 'discount_price_available', headerName: 'Discount Available', width: 200 },
    { field: 'description', headerName: 'Description', width: 250 },
    { field: 'vg_category', headerName: 'Veg/Non-Veg', width: 150 },
    { field: 'category', headerName: 'Category', width: 150 },
    { field: 'images', headerName: 'Image', width: 200 },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        View Products
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={columns}
      />
    </div>
  );
};

export default ViewProducts;

import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';
import Filter from "./Filter";
import { fetchUsers } from "../redux/dataSlice";
import { setFilteredUsers } from "../redux/filteredDataSlice";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from "../store";

export interface UserData {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

const cellStyle = {
    fontSize: {
        xs: '10px',
        sm: '10px',
        md: '12px',
        lg: '13px',
        xl: '15px'
    }
}

const headStyle = {
    fontSize: {
        xs: '12px',
        sm: '13px',
        md: '15px',
        lg: '16px',
        xl: '18px'
    }
}

const MyTable: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const data = useSelector((state: RootState) => state.data.users);
    const filteredData = useSelector((state : RootState) => state.filteredUsers.filteredUsers);
    const [filters, setFilters] = useState<{ param: string }>({ param: '' });

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    useEffect(() => {
        const applyFilters = () => {
            const filtered = data.filter((item : UserData) =>
                (filters.param ? item.name.toLowerCase().includes(filters.param.toLowerCase()) : true) ||
                (filters.param ? item.username.toLowerCase().includes(filters.param.toLowerCase()) : true) ||
                (filters.param ? item.phone.toLowerCase().includes(filters.param.toLowerCase()) : true) ||
                (filters.param ? item.email.toLowerCase().includes(filters.param.toLowerCase()) : true)
        );
            dispatch(setFilteredUsers(filtered))
        };

        applyFilters();
    }, [filters, data]);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 3 }}>
               <TableContainer component={Paper}>
                   <Table>
                       <TableHead>
                           <TableRow>
                               <TableCell sx={headStyle}>Name</TableCell>
                               <TableCell sx={headStyle}>Username</TableCell>
                               <TableCell sx={headStyle}>Email</TableCell>
                               <TableCell sx={headStyle}>Phone</TableCell>
                           </TableRow>
                       </TableHead>
                       <TableBody>
                           {filteredData.map((row) => (
                               <TableRow key={row.id}>
                                   <TableCell sx={cellStyle}>{row.name}</TableCell>
                                   <TableCell sx={cellStyle}>{row.username}</TableCell>
                                   <TableCell sx={cellStyle}>{row.email}</TableCell>
                                   <TableCell sx={cellStyle}>{row.phone}</TableCell>
                               </TableRow>
                           ))}
                       </TableBody>
                   </Table>
               </TableContainer>
               <Filter onFilterChange={(filters) => setFilters(filters)} />
        </Box>
    );
};

export default MyTable;

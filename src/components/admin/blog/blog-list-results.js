import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux'
import { format } from 'date-fns';
import TableContainer from '@mui/material/TableContainer';
import Moment from 'moment';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import Link from 'next/link';
import { getInitials } from '../../../utils/get-initials';
import { InfoBox } from '@react-google-maps/api';

export const BlogListResults = ({ customers, ...rest }) => {
  const { user, isSuccess, spinnerAuth } = useSelector((state) => state.auth)
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = customers.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
    
        <Box>
        <TableContainer>
          <Table  sx={{ minWidth: 750 }}>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === customers.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < customers.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Title
                </TableCell>
                <TableCell>
                  Description
                </TableCell>
                <TableCell>
                  Author
                </TableCell>
                
                <TableCell>
                 Created
                </TableCell> 
                <TableCell>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.slice(0, limit).map((customer) => (
                <TableRow
                  hover
                  key={customer.id}
                  selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(customer.id) !== -1}
                      onChange={(event) => handleSelectOne(event, customer.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                  {customer.title}
                  </TableCell>
                  <TableCell>
                    {customer.description}
                  </TableCell>
                  {/* <TableCell>
                    {`${customer.address.city}, ${customer.address.state}, ${customer.address.country}`}
                  </TableCell> */}
                  <TableCell>
                    {customer.user === user._id?'Self':customer.admin[0].name}
                  </TableCell> 
                  <TableCell>
                  
                  {Moment(customer.createdAt).format('DD-MM-YYYY')}
                    {/* {format(customer.createdAt, 'dd-MM-yyyy HH:MM:ss')} */}
                  </TableCell> 
                  <TableCell >
                    {customer.user === user._id?(<>
                      <Button
                      color="primary"
                      variant="contained"
                      sx={{ mr: 2 }}
                    >
                      View
                    </Button>
                    <Link
        href={'/admin/blog/'+[customer._id]+'/edit'}
        passHref
        style={{width:'100%'}}
      >
        <Button
                      color="primary"
                      variant="contained"
                      sx={{ mr: 2 }}
                    >
                      Edit
                    </Button>
                    </Link>
                    <Button
                      color="error"
                      variant="contained"
                    >
                      Delete
                    </Button></>):null}
                    
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </TableContainer>
          <TablePagination
        component="div"
        count={customers.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
        </Box>
    
     
    </Card>
  );
};

BlogListResults.propTypes = {
  customers: PropTypes.array.isRequired
};

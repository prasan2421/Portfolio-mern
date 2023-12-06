
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import AWS from 'aws-sdk';
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
import Grid from '@mui/material/Grid';
import React, { useEffect, useState, useRef } from "react";
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";


AWS.config.update({
  accessKeyId: process.env.ACCESSKEY_ID,
  secretAccessKey: process.env.SECRETKEY_ID,
  region: 'eu-north-1',
  // signatureVersion: 'v4',
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

export const MediaListResults = ({ customers,event, onHandleStateChange, ...rest }) => {
  const s3 = new AWS.S3();
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const[uploaded, setUploaded] = React.useState(true)
  const [uploadedFiles, setUploadedFiles] = useState([]);

  // useEffect(()=>{
  //   alert(JSON.stringify(customers))
  // },[])
  useEffect(() => {
    console.log(event)
    // uploadToS3(event)
    if(event){
      getImagesFromS3()
      onHandleStateChange(!event)
    }
    
  },[event])

  
  
  const uploadToS3 = async (event) => {

   
    // if (selectedFiles.length<=0) {
      
    //   return;
    // }
    const files = Array.from(event.target.files);

    
   
    const promises = files.map(file => {
      
      const params = { 
        Bucket: 'prasannat-bucket', 
        Key: `${Date.now()}.${file['name']}`, 
        Body: file,
       
      };
      return new Promise((resolve, reject) => {
        // S3 ManagedUpload with callbacks are not supported in AWS SDK for JavaScript (v3).
        // Please convert to 'await client.upload(params, options).promise()', and re-run aws-sdk-js-codemod.
        // S3 ManagedUpload with callbacks are not supported in AWS SDK for JavaScript (v3).
        // Please convert to 'await client.upload(params, options).promise()', and re-run aws-sdk-js-codemod.
        s3.upload(params, (err, data) => {
          if (err) {
            alert(err)
            reject(err);
          } else {
           
            resolve(data.Location);
          }
        });
      });
    })

    Promise.all(promises)
    .then(urls => {
      alert(JSON.stringify(urls))
      getImagesFromS3()
      // setUploadedFiles([...uploadedFiles, ...urls]);
      
    })
    .catch(error => {
      console.error('Error uploading files:', error);
    });
    
   
  }

  const handleDeleteImage = async (key) => {

    // console.log(key);return;
    
    const params = {
      Bucket: 'prasannat-bucket',
      Key: key,
    };

    s3.deleteObject(params, (err, data) => {
      if (err) {
        console.log(err, err.stack);
      } else {
        console.log("Image deleted successfully", data);
        getImagesFromS3()
        // set success message in state
        // setSuccessMessage("Image deleted successfully");
      }
    });

    // try {
    //   await s3.deleteObject(params, (err, data)).promise();
    //   console.log(data)
    //   // console.log('Object successfully deleted from S3 bucket');
    //   // getImagesFromS3()
    // } catch (error) {
    //   console.log(error);
    // }
  };


  async function getImagesFromS3() {
 

    const params = {
      Bucket: 'prasannat-bucket',
    };

    try {
      const data = await s3.listObjectsV2(params).promise();
     
      // const urls = data.Contents.map((obj) => s3.getSignedUrl('getObject', { Bucket: params.Bucket, Key: obj.Key }));
      
      const imageKeys = data.Contents.filter((object) => {
        return object.Key.endsWith('.jpg') || object.Key.endsWith('.jpeg') || object.Key.endsWith('.png');
      }).map((object) => {
        return object.Key;
      });
      const imageUrls = imageKeys.map((key) => {
        return {'url':`https://${params.Bucket}.s3.${s3.config.region}.amazonaws.com/${key}`,'key':key};
      });
      console.log(imageUrls)
      setUploadedFiles(imageUrls);
      setUploaded(false)
    } catch (error) {
      console.log(error);
    }
  }
  
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
    <Card >
      
      
        <Box >

          {/* // Upload image button  */}

          {/* <input
        type="file"
        style={{ display: 'none' }}
        id="file-input"
        multiple
        onChange={uploadToS3}
      />
      <label htmlFor="file-input">
        <Button variant="contained" component="span">
        Upload Files
        </Button>
      </label> */}
      
     
      <Grid container spacing={2}>

        {uploadedFiles.map((item,index) => (

<Grid item xs={6} >
<Item>
<ImageListItem>

<img
        style={{width:'100%', height:200}}
            src={item.url}
            srcSet={item.url}
            alt={item.key}
            loading="lazy"
            
          />
           <ImageListItemBar
            title={item.key}
            // subtitle={item.name}
            actionIcon={
              <IconButton
                sx={{ color: 'red' }}
                aria-label={`info about ${item.key}`}
                onClick={()=>handleDeleteImage(item.key)}
              >
                <CancelIcon />
              </IconButton>
            }
          />
          </ImageListItem>

</Item>
          
</Grid>
        ))}
       
      </Grid>
    </Box>
        
     
      <TablePagination
        component="div"
        count={customers.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

MediaListResults.propTypes = {
  customers: PropTypes.array.isRequired
};

import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon, Typography
} from '@mui/material';
import { Search as SearchIcon } from '../../../icons/search';
import { Upload as UploadIcon } from '../../../icons/upload';
import { Download as DownloadIcon } from '../../../icons/download';
import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.ACCESSKEY_ID,
  secretAccessKey: process.env.SECRETKEY_ID,
  region: 'eu-north-1',
  // signatureVersion: 'v4',
});


export const MediaListToolbar = ({onButtonClick}) => {
  const s3 = new AWS.S3();
  const handleButtonClick = (event) => {
    const data = Array.from(event.target.files);
    
  
    if (onButtonClick) {
      onButtonClick(data);
    }
  };

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
      // alert(JSON.stringify(urls))
      if (onButtonClick) {
        onButtonClick(true);
      }
      // setUploadedFiles([...uploadedFiles, ...urls]);
      
    })
    .catch(error => {
      console.error('Error uploading files:', error);
    });
    
   
  }


  return (
  <Box >
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        m: -1
      }}
    >
      <Typography
        sx={{ m: 1 }}
        variant="h4"
      >
        Media
      </Typography>
      <Box sx={{ m: 1 }}>

      <input
        type="file"
        style={{ display: 'none' }}
        id="file-inputnew"
        multiple
        onChange={uploadToS3}
      />
      <label htmlFor="file-inputnew">
        <Button
          color="primary"
          variant="contained"
          component="span"
        >
          Add Media
        </Button>
      </label>

        
      </Box>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      color="action"
                      fontSize="small"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Search media"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>
  )
};

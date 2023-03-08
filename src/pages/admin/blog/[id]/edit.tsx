import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState, useRef } from "react";
import Router from 'next/router';
import { useFormik, FormikErrors } from 'formik';
import { FormControl, InputLabel, Input } from '@mui/material'
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/navigation';


import * as yup from "yup";
import axios from 'axios';
import qs from 'qs';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  TextField,
  Typography
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector, useDispatch } from 'react-redux'
// import { JSDOM } from 'jsdom';

import { marked } from 'marked';
import eachDayOfIntervalWithOptions from 'date-fns/fp/eachDayOfIntervalWithOptions/index.js';

const clean = marked('# Marked in browser\n\nRendered by **marked**.');

interface IFormInputs {
  title: string;
  description: string;
  markdown: string;
 

}



const Edit = () => {
  const router = useRouter()
  const { user, isSuccess, spinnerAuth } = useSelector((state:any) => state.auth)
  const [preview, setPreview] = useState(false)
  const [success, setSuccess] = useState(false)
  const[data, setData] = React.useState()
  const [initialValues, setInitialValues] = useState({
    title: '',
    description: '',
    markdown: '',

  });

  const { id } = router.query

  function createMarkup() {
    return { __html: marked(formik.values.markdown) };
  }

  const getData = async() => {
  
    await axios.get(process.env.HOST+'/blogs/'+id,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
      })
   
      .then(function (response) {
      //  alert(JSON.stringify(response.data[0]))
        setData(response.data[0])
        setInitialValues({
          title: response.data[0].title,
    description: response.data[0].description,
    markdown: response.data[0].markdown,
        })
        router.push('/admin/blog')
        alert('Success')
      })
    
      .catch(function (error) {
        
        console.log(error);
        alert(JSON.stringify(error))
      })


  }
  useEffect(()=>{
    getData()
    // alert(id)

  },[])

  const submitBlog = async (data: any) => {

    axios.put(process.env.HOST+'/blogs/'+id
      , qs.stringify(data),
      {
        headers: {
          // 'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
      }
    )
      .then(function (response) {

        // setSuccess(true)
        alert(JSON.stringify(response))

      })
      .catch(function (error) {
        // setSuccess(false)
        alert(data)
      })

  }
  // custom validation


  const validate = (values: any) => {
    const errors: FormikErrors<IFormInputs> = {};

    if (!values.title) {
      errors.title = 'Title is required';
    }

    // else if (values.title.length > 15) {
    //   errors.title = 'Must be 15 characters or less';
    // }

    if (!values.description) {
      errors.description = 'Description is required';
    }

    // else if (values.description.length > 20) {
    //   errors.description = 'Must be 20 characters or less';
    // }

    if (!values.markdown) {
      errors.markdown = 'Markdown is required';
    }

    // else if (values.markdown.length > 20) {
    //   errors.markdown = 'Must be 20 characters or less';
    // }

    // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //   errors.email = 'Invalid email address';
    // }

    return errors;
  };


  const formik = useFormik<IFormInputs>({
    
    initialValues: initialValues,
    enableReinitialize: true,
    validate,
    
    // validationSchema: yup.object({
    //   title: yup.string().required(),
    //   description: yup.string().required(),
    //   markdown: yup.string().required()
    // }),


    onSubmit: values => {


      // setData(values)
      
      submitBlog(values)
    }
  });



  return (
    <>
      <Head>
        <title>
          Blog | Prasanna Tuladhar
        </title>
      </Head>
      <Box
        sx={{
          marginX: 2
        }}
      >

        <Link
          href="/admin/blog"
          passHref
        >
          <Button

            startIcon={<ArrowBackIcon fontSize="small" />}
          >
            Back
          </Button>
        </Link>
      </Box>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >

        <Container >
          <Box sx={{ my: 3 }}>
            <Typography
              color="textPrimary"
              variant="h4"
            >
              Create a new blog post
            </Typography>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              Write a new blog
            </Typography>
          </Box>


          <form onSubmit={formik.handleSubmit}>
            <FormControl sx={{ width: '100%' }}>
              <TextField
                error={Boolean(formik.touched.title &&
                  formik.errors.title
                )}
                fullWidth
                helperText={
                  formik.touched.title &&
                  formik.errors.title}
                label="Title"
                margin="normal"
                name="title"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.title}
                variant="outlined"
              />
              <TextField
                error={Boolean(formik.touched.description && formik.errors.description)}
                fullWidth
                helperText={formik.touched.description && formik.errors.description}
                label="Description"
                margin="normal"
                name="description"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.description}
                variant="outlined"
              />
              <Box sx={{ display: 'flex', justifyContent: 'right', my: 1 }}>
                <Button
                  color="secondary"
                  size="large"
                  variant={!preview ? "contained" : "outlined"}
                  sx={{ mx: 2 }}
                  onClick={() => setPreview(false)}
                >
                  Markdown
                </Button>
                <Button
                  color="secondary"
                  size="large"
                  variant={preview ? "contained" : "outlined"}
                  onClick={() => setPreview(true)}
                >
                  Preview
                </Button>
              </Box>

              {!preview ?
                (
                  <TextField
                    error={Boolean(formik.touched.markdown && formik.errors.markdown)}
                    fullWidth
                    helperText={formik.touched.markdown && formik.errors.markdown}
                    label="Markdown"
                    margin="normal"
                    name="markdown"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    multiline
                    minRows={10}
                    value={formik.values.markdown}
                    variant="outlined"
                  />
                ) : (
                  <Box>
                    <Paper variant="outlined" sx={{ px: 2, minHeight: 20 }}>
                      <div dangerouslySetInnerHTML={createMarkup()} />
                    </Paper>
                  </Box>

                )}


              <Box sx={{ py: 2 }}>
                <Button
                  color="primary"
                  // disabled={formik.isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Save
                </Button>
              </Box>
            </FormControl>
          </form>

        </Container>
      </Box>
    </>
  );
};

export default Edit;

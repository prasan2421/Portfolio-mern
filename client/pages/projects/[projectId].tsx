import Layout from '../../components/layout'
import React, { useEffect } from "react";
import {useRouter} from 'next/router'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'


export default function Project() {

  const router = useRouter()
  const projectId = router.query.projectId
  return (
    <Layout>
      
      <article>
        <h1 style={{marginTop:'100px'}}>Details about project {projectId}</h1>
        {/* <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div> */}
        
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [{ params: { projectId: '1' } }, { params: { projectId: '2' } }]
 
  
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  return {
    // Passed to the page component as props
    props: { post: {} },
  }
}
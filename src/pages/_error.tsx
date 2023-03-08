import Layout from '../components/layout';

function Error({ statusCode }) {
    return (
        <Layout>
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server. Please try again.`
          : 'An error occurred on client'}
      </p>
      </Layout>
    )
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
  export default Error
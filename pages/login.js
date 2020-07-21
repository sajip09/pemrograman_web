import Menu from '../components/menu';
import Layout from '../layout/layout';
  
  function Login(){
    return (
      <Layout>
      <Menu />
        <p>Username: </p>
        <p>Password:</p>
      </Layout>
    );
}

export default Login;
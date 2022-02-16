import '../styles/globals.css';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {

  const [active, setActive] = useState(false);

  const onClick = () => {
    setActive(!active);
};

  return (
    <Layout>
      <Navbar onClick={onClick} active={active} />
      <Component {...pageProps} />
    </Layout>
  

  )};

export default MyApp

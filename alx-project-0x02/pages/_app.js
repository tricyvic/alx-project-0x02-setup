import Layout from '../components/layout/Layout.jsx'
import "../styles/globals.css";
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
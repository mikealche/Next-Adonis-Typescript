import { AuthProvider } from "../contexts/auth";
import "../styles/theme.scss";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;

import { LanguageProvider } from "./i18n/LanguageContext";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";

function App() {
  return (
    <LanguageProvider>
      <MainLayout>
        <Home />
      </MainLayout>
    </LanguageProvider>
  );
}

export default App;

import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import { GlobalStyle } from "./components/GlobalStyle";
import Header from "./components/Header";
import Message from "./components/Message";
import Spinner from "./components/Spinner";
import useLoading from "./hooks/useLoading";
import CategoriesService from "./services/CategoriesService";
import { AppContext } from "./contexts/AppContext";
import { Routes } from "./Routes";
import { ICategoriesState } from "./types/interfaces";

function App() {
  const [filter, setFilter] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [categories, setCategories] = useState<ICategoriesState>(
    {} as ICategoriesState
  );
  const { addRequest, removeRequest, isLoading } = useLoading();

  // eslint-disable-next-line
  useEffect(() => loadCategories(), []);

  function loadCategories() {
    addRequest();
    CategoriesService.get()
      .then((c) => setCategories(c))
      .catch(() => setMessage("Ocorreu um erro ao carregar as categorias..."))
      .finally(() => removeRequest());
  }

  const values = {
    filterValue: { filter, setFilter },
    loadingValue: { addRequest, removeRequest, isLoading },
    messageValue: { message, setMessage },
    categoriesValue: { categories },
  };

  return (
    <>
      <GlobalStyle />
      <AppContext values={values}>
        <Spinner></Spinner>
        <div className="page-container">
          <Message></Message>
          <Header></Header>
          <Routes />
        </div>
        <Footer></Footer>
      </AppContext>
    </>
  );
}

export default App;

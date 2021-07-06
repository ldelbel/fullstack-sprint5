import CategoriesContext from './CategoriesContext';
import FilterContext from './FilterContext';
import LoadingContext from './LoadingContext';
import MessageContext from './MessageContext';

export function AppContext({children, values}) {
  const { filterValue, loadingValue, messageValue, categoriesValue } = values;
    
  return (
    <FilterContext.Provider value={filterValue}>
      <LoadingContext.Provider value={loadingValue}>
        <MessageContext.Provider value={messageValue}>
          <CategoriesContext.Provider value={categoriesValue}>
            {children}
          </CategoriesContext.Provider>
        </MessageContext.Provider>
      </LoadingContext.Provider>
    </FilterContext.Provider>
  )
}
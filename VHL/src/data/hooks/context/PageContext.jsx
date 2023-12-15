import { createContext } from "react";

export const PageContext = createContext()

export const PageProvider = ({ children }) => {


    return <PageContext.Provider value={
        {

        }
    }>
        {children}
    </PageContext.Provider>
}

export default PageContext
import { fireEvent, render,screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"


it("should render header component with login button",()=>{
   render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
   );
   const logginButton = screen.getByRole("button",{name:"login"});
   fireEvent.click(logginButton);
   const logoutButton = screen.getByRole("button",{name:"logout"});
   expect(logoutButton).toBeInTheDocument();
});
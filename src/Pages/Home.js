import React from "react";
import EmployeeTable from "../Components/EmployeeTable/EmployeeTable"
import Header from "../Components/Header/Header";
import Wrapper from "../Components/Wrapper";
import Buttons from "../Components/Buttons/Buttons";


function Home() {
    return (
        <Wrapper>
            <Header />
            <Buttons />
            <EmployeeTable />
        </Wrapper>
    )
}

export default Home;
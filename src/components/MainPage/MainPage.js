import React from 'react';
import classes from './MainPage.css';
import Wrapper from '../../hoc/wrapper';
import PageTitle from "../RepeatableComponents/PageTitle/PageTitle";
import ItemsList from "../../containers/ItemsList/ItemsList";

const  mainPage = (props)=> {
  return <Wrapper>
            <PageTitle>Items list</PageTitle>
            <ItemsList/>
         </Wrapper>
};
export default mainPage;
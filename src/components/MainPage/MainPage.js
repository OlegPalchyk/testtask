import React from 'react';
import classes from './MainPage.css';
import Wrapper from '../../hoc/wrapper';
import PageTitle from "../RepeatableComponents/PageTitle/PageTitle";

const  mainPage = (props)=> {
  return <Wrapper>
            <PageTitle>Items list</PageTitle>
            <ItemsList>

            </ItemsList>
         </Wrapper>
};
export default mainPage;
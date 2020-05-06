 import styled from 'styled-components';
 import React from "react";
import { connect } from "react-redux";

 const DayCard = styled.div `
    width: 100%;
    height: 100%;
    border: dashed 2px black;
 `
 const CardHeader = styled.div `
    width: 100%;
    height: 60px;
    border-bottom: dashed 1px black;
 `

 class DailyCard extends React.Component {
     render() {
       return <DayCard>
           <CardHeader>

           </CardHeader>
       </DayCard>;
     }
   }
   export default connect()(DailyCard);
  
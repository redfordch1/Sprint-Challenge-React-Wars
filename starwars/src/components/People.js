import React from "react";
import styled from "styled-components";

function People(props) {

    const Cards = styled.div`
        width: 250px;
        height: 250px;
        margin: 50px auto;
        background-color: peru;
        box-shadow: 0px 20px 30px 5px rgba(0, 0, 0, 0.9);
        padding: 20px;
        border-radius: 15px;

        h2 {
            text-align: center;
            font-size: 1.6rem;
            margin: 10px 0px;
            text-decoration: underline;
            color: black;
        }

        li {
            list-style-type: none;
            margin: 0 auto;
            width: 60%;
            line-height: 1.9;
            font-size: 1.2rem;
        }
    `;

  return (
    <Cards>
        <div>
            <h2>{props.name}</h2>
            <li>Gender: {props.gender}</li>
            <li>Hair Color: {props.hairColor}</li>
            <li>Mass: {props.mass}</li>
            <li>Skin Color: {props.skinColor}</li>
       </div>
    </Cards>
  );
}

export default People;
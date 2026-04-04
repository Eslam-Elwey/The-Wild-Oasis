import styled, { css } from "styled-components";

const Heading = styled.h1`
    ${(props)=>
        props.as ==='h1' && css`
            font-size: 30px;
            font-weight: 800;
            text-align: center;
            padding: 15px 0;
        ` }

    ${(props)=>
        props.as ==='h2' && css`
            font-size: 24px;
            font-weight: 600;
            text-align: center;
            padding: 15px 0;
        ` }

    ${(props)=>
        props.as ==='h3' && css`
            font-size: 20px;
            font-weight: 400;
            text-align: center;
            padding: 15px 0;
        ` }
  
`;

export default Heading ;
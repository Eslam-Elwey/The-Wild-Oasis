import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  flex-direction: ${({ type = "vertical" }) =>
    type === "horizontal" ? "row" : "column"};

  ${({ type = "vertical" }) =>
    type === "horizontal"
      ? css`
          justify-content: space-between;
          align-items: center;
        `
      : css`
          gap: 1.6rem;
        `}
`;

// const Row = styled.div`
//   display: flex;

//   ${(props) =>
//     props.type === "horizontal" &&
//     css`
//       flex-direction: row;
//       justify-content: space-between;
//       align-items: center;
//     `}

//   ${(props) =>
//     props.type === "vertical" &&
//     css`
//       flex-direction: column;
//       gap : 1.6rem ;
//     `}
// `;

// Row.defaultProps = {
//     type : "vertical"
// }

export default Row;

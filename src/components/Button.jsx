import styled from "styled-components"

const Button = styled.button`
    display:block;
    margin:0 auto;
    border:1px solid ${(props)=>props.borderColor ? props.borderColor : "#000"};
    background: ${(props)=>props.bgColor ? props.bgColor : "lightgray"};
    cursor:pointer;
`;

export default Button;

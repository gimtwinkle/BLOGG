import styled from "styled-components";

const ListContent = styled.a`
    display:block;
    color:${(props) => props.Color ? props.Color : '#000'}
    text-align:left;
`;

export default ListContent;
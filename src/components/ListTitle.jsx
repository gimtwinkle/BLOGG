import styled from "styled-components";

const ListTitle = styled.a`
    display:block;
    color:${(props) => props.Color ? props.Color : '#000'}
    text-align:left;
`;

export default ListTitle;
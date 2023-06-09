//Imports
import styled from "styled-components";

//Local styles
export const StyledAccount = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    background-color: #fff;
    width: 80%;
    margin: 0 auto;
    flex-direction: column;
    padding: 1.5rem;
    box-sizing: border-box;
    text-align: left;
    margin-bottom: 2rem;
    @media (min-width: 720px) {
        flex-direction: row;
    }
    @media (max-width: 350px) {
        width: 90%;
        padding: 0.75rem;
    }
`;

export const StyledInfos = styled.div`
    width: 100%;
    flex: 1;
    h3 {
        margin: 0;
        padding: 0;
        font-size: 1rem;
        font-weight: normal;
    }
`;

export const StyledCTA = styled.button`
    width: 100%;
    @media (min-width: 720px) {
        width: 200px;
    }
`;

export const StyledBalance = styled.p`
    margin: 0;
    font-size: 2.5rem;
    font-weight: bold;
    @media (max-width: 350px) {
        font-size: 1.5rem;
    }
`;

export const StyledBalanceDescription = styled.p`
    margin: 0;
`;

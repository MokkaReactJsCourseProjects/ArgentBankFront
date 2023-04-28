//Imports
import Styled from 'styled-components';

//Local styles
export const StyledAccount = Styled.div`
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
`;

export const StyledInfos = Styled.div`
    width: 100%;
    flex: 1;
    h3 {
        margin: 0;
        padding: 0;
        font-size: 1rem;
        font-weight: normal;
    }
`;

export const StyledCTA = Styled.button`
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    @media (min-width: 720px) {
        width: 200px;
    }
`;

export const StyledBalance = Styled.p`
    margin: 0;
    font-size: 2.5rem;
    font-weight: bold;
`;

export const StyledBalanceDescription = Styled.p`
    margin: 0;
`;
//Imports
import styled from "styled-components";
import background from "../../assets/bank-tree.jpeg";

//Local styles
export const StyledHero = styled.section`
    background-image: url(${background});
    background-position: 0 -50px;
    background-size: cover;
    background-repeat: no-repeat;
    height: 300px;
    position: relative;
    section {
        position: relative;
        top: 2rem;
        width: 200px;
        background: white;
        padding: 2rem;
        text-align: left;
        margin: 0 auto;
        .subtitle {
            font-weight: bold;
            font-size: 1rem;
        }
        .text {
            font-size: 0.9rem;
            margin-top: 20px;
        }
    }
    @media (max-width: 400px) {
        section {
            margin: 0 auto;
            width: 180px;
            padding: 1rem;
            .subtitle {
                font-size: 0.9rem;
            }
            .text {
                font-size: 0.8rem;
                margin-top: 10px;
            }
        }
    }
    @media (min-width: 920px) {
        height: 400px;
        background-position: 0% 33%;
        section {
            position: absolute;
            top: 50px;
            right: 50px;
            width: 300px;
            margin: 2rem;
            .subtitle {
                font-size: 1.5rem;
            }
            .text {
                font-size: 1.2rem;
            }
        }
    }
`;

import styled from "styled-components";

export const StyledSection = styled.section`
    height: 88vh;
    background-color: #EEF2FF;
    display: flex;
    align-items: center; 
    justify-content: center;

    img{
        height: 30vh;
    }

    div{
        background-color: rgba(175,189,217,0.7);
        border-radius: 20px;
        padding: 15vh 10vw 15vh 10vw;
        display: flex;
    }

    article{
        height: 30vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 10vh;
    }

    h2{
        display: flex;
        flex-wrap: wrap;
        width: 40vw;
        color: white;
        text-align: center;
        margin: 0px;

    }
`
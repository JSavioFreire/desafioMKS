import styled from "styled-components";

export const HeaderS = styled.header`
    width: 100%;
    height: 101px;
    background-color: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    .flex{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 80%;

    }
    .logo{
        display: flex;
        align-items: flex-end;
        color: #FFFFFF;

    }
    h1{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 40px;
    }
    h2{
        margin-bottom: 5px;
        margin-left: 7px;
        font-weight: 300;
        font-size: 20px;
    }
    .cart{
        width: 90px;
        height: 45px;
        background-color: white;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    
    .icon svg{
        height: 18px;
        width: 19.007722854614258px;
    }
    .cart p{
        font-weight: 700;
        font-size: 18px;
        margin-bottom: 4px;
    }
`
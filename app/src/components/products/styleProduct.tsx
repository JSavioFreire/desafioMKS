import styled from "styled-components";

export const AllProducts = styled.section`
    margin: 116px auto 172px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 601px;
    width: 938px;    

`
export const EachProductS = styled.div`
    height: 285px;
    width: 217.5617218017578px;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

    img{
        height: 138px;
        width: 147.85714721679688px;
        margin-top: 18px;

    }
    h2{
        height: 38px;
        width: 124px;
        left: 14px;
        top: 170px;
        font-size: 16px;
        font-weight: 400;
        
    }
    .price{
        height: 26px;
        width: 64px;
        border-radius: 5px;
        background-color: var(--dark);
        font-weight: 700;
        font-size: 15px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center ;

    }
    .flex{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    p{
        height: 25px;
        width: 192px;
        font-weight: 300;
        font-size: 10px;
    }
    .comprar{
        height: 31.907432556152344px;
        width: 218px;
        background-color: var(--primary);
        font-size: 14px;
        font-weight: 600;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 0;
        left: 0;
        border-radius: 0 0 8px 8px;
        cursor: pointer;
    }

`
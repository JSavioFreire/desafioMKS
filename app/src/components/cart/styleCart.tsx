import styled from "styled-components";

export const CartS = styled.section`

    .open{
        position: absolute;
        width: 486px;
        height: 1024px;;
        top: 0px;
        right: 0;
        z-index: 1;
        transition: .5s;
        background-color: var(--primary);
        box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
    }
    .close{
        position: fixed;
        width: 486px;
        height: 1024px;
        top: 0px;
        right: -486px;
        z-index: 1;
        transition: .5s;
        background-color: var(--primary);
        box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
    }
    
    .header{
        display: flex;
        justify-content: space-between;


       h1{
            width: 180px;
            height: 56px;
            margin-top: 36px;
            margin-left: 47px;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 700;
            font-size: 27px;
            line-height: 33px;

            color: #FFFFFF;
        }
        p{


            background: #000000;
            font-size: 28px;
            font-weight: 400;
            color: white;
            width: 38px;
            height: 38px;
            margin-top: 39px;
            margin-right: 22px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        } 
    }
    .productCart{
        margin-top: 70px;
        margin-left: 47px;
        height: 95px;
        width: 379px;
        border-radius: 8px;
        background: #FFFFFF;
        box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        img{
            position: absolute;
            left: 5.97%;
            right: 82.08%;
            top: 24.75%;
            bottom: 18.81%;

        }
        p{
            position: absolute;
            left: 23.38%;
            right: 47.27%;
            top: 36.63%;
            bottom: 30.69%;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 13px;
            line-height: 17px;
            color: #2C2C2C;

        }
        .closeX{
            height: 20px;
            width: 20px;
            top: 0;
            border-radius: 0px;
            position: absolute;
            left: 95.32%;
            border-radius: 50%;
            color: white;
            background-color: #000000;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            font-weight: 400;


        }
        .qtd{
            position: absolute;
            left: 55.06%;
            right: 42.08%;
            top: 33.66%;
            bottom: 60.4%;
            font-style: normal;
            font-weight: 400;
            font-size: 5px;
            line-height: 6px;
        }
        .price{
            position: absolute;
            left: 78.44%;
            right: 5.45%;
            top: 44.55%;
            bottom: 38.61%;
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 17px;
        }
    }
    .total{
        width: 100%;
        display: flex;
        text-align: center;
        justify-content: space-between;
        position: absolute;
        bottom: 139px;
        p{
            font-weight: 700;
            font-size: 28px;
            line-height: 15px;
            color: #FFFFFF;
            margin-left: 47px;
        }
        .price{
            font-weight: 700;
            font-size: 28px;
            line-height: 15px;
            color: #ffffff;
            margin-right: 63px;
        }
    }


    .footer{
        position: absolute;
        width: 486px;
        height: 97px;
        bottom: 0;
        background: #000000;
        display: flex;
        align-items: center;
        justify-content: center;

        h2{
            font-weight: 700;
            font-size: 28px; 
            color: white;
        }
    
    }
    
`
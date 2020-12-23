import React from 'react'
import styled from 'styled-components'

import toodle from '../../assets/images/toodles.png'
import LongArrow from '../../assets/svgs/LongArrow.svg'
const Container = styled.footer`
    width: 100%;
    height: 198px;
    background: #23a7f0;
    position: relative;
    padding: 3rem 0rem 1rem 0rem;
    box-sizing: border-box;

    @media (max-width: 900px) {
        padding: 2rem 0rem 1rem 0rem;
    }

    @media (max-width: 700px) {
        padding: 1rem 0rem 1rem 0rem;
    }
    #toodles {
        position: absolute;
        left: 147px;
        height: 247px;
        width: 187px;
        top: -48px;

        @media (max-width: 700px) {
            left: 50px;
            top: -28px;
            height: calc(247px * 0.95);
            width: calc(187px * 0.95);
        }

        @media (max-width: 500px) {
            left: -10px;
            top: -28px;
            height: calc(247px * 0.75);
            width: calc(187px * 0.75);
        }
    }

    #text {
        width: 426px;
        margin-left: 405px;

        @media (max-width: 900px) {
            width: 426px;
            margin-left: 300px;
        }

        @media (max-width: 700px) {
            width: 350px;
            margin-left: 200px;
        }

        @media (max-width: 550px) {
            width: 250px;
            margin-left: 160px;
        }
        @media (max-width: 400px) {
            width: 200px;
            margin-left: 100px;
        }

        h5 {
            color: white;
            font-size: 2.025rem;
            font-weight: 700;
        }
        p {
            color: white;
            font-size: 0.8rem;
            font-weight: 500;
            @media (max-width: 550px) {
                font-size: 0.6rem;
            }
        }

        #long-arrow {
        }
    }

    #get-help {
        width: 219px;
        height: 38px;
        text-align: center;
        padding: 0.5rem;
        border-radius: 5px;
        border: none;
        background: #f7d130;
        display: block;
        color: #000;
        font-weight: 500;
        font-size: 0.8rem;
        margin-left: 405px;

        @media (max-width: 900px) {
            margin-left: 300px;
        }

        @media (max-width: 700px) {
            margin-left: 200px;
        }

        @media (max-width: 500px) {
            width: 150px;
            margin-left: 160px;
        }
        @media (max-width: 400px) {
            width: 150px;
            margin-left: 100px;
        }

        #long-arrow {
            margin-left: 0.5rem;
            color: #000;
        }

        #help-link {
            color: white;
            &:hover {
                text-decoration: none;
                color: white;
            }
            &:visited {
                color: white;
            }
        }
    }
`

const Footer = (props) => {
    return (
        <Container>
            <img src={toodle} id="toodles" alt="a mascot" />
            <header id="text">
                <h5 id="header">How To Win</h5>
                <p>
                    Every question has a weight W. The weight varies for each
                    plan. To win a game in any plan, a player must answer at
                    least 8 questions correctly.
                </p>
            </header>
            <span role="button" labeled-by="help-link" id="get-help">
                <a href="https://cashingames.com" id="help-link">
                    Get assistance
                    <img id="long-arrow" src={LongArrow} alt="a long arrow" />
                </a>
            </span>
        </Container>
    )
}

Footer.propTypes = {}

export default Footer

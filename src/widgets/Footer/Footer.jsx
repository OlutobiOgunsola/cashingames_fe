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
    #toodles {
        position: absolute;
        left: 147px;
        height: 247px;
        width: 187px;
        top: -48px;
    }

    #text {
        width: 426px;
        margin-left: 405px;

        h5 {
            color: white;
            font-size: 2.025rem;
            font-weight: 700;
        }
        p {
            color: white;
            font-size: 0.8rem;
            font-weight: 500;
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

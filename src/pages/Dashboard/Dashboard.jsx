import React, { useState, useEffect } from 'react'
import styled, { withTheme } from 'styled-components'
import Header from '../../widgets/Header'
import { getUser, getLeaderBoard } from '../../utils/queries'
import axios from 'axios'
import LeaderboardTable from '../../components/LeaderboardTable'
import ArrowIcon from '../../assets/svgs/ArrowIcon.svg'
import HomeIcon from '../../assets/svgs/HomeIcon.svg'
import WinnersIcon from '../../assets/svgs/WinnersIcon.svg'
import Footer from '../../widgets/Footer'

const Container = styled.div`
    width: 100%;
    font-size: 1rem;
`

const DashboardHero = styled.div`
    ${(props) =>
        props.theme.mixins.flexMixin(
            'row',
            'nowrap',
            'space-between',
            'center'
        )};

    ${(props) => props.theme.mixins.padding('page')};
    width: 100%;
    height: 10em;
    background: ${(props) => props.theme.colors.primary};
    box-sizing: border-box;

    @media (max-width: 700px) {
        height: 3em;
    }

    .dashboard-heading {
        font-size: 2.025em;
        font-family: 'Roboto', 'Arial';
        line-height: 42px;
        font-weight: 400;
        color: white;
        @media (max-width: 700px) {
            font-size: 1em;
            width: 100%;
            text-align: center;
        }
    }

    .options {
        ${(props) =>
            props.theme.mixins.flexMixin(
                'row',
                'nowrap',
                'space-between',
                'center'
            )}
        width: 660px;
        height: 50px;
        @media (max-width: 900px) {
            display: none;
        }
    }
`

const Option = styled.span`
    width: 330px;
    height: 50px;
    color: white;
    ${(props) => props.theme.mixins.flexMixin('row', 'nowrap')}
    font-weight: 300;
    font-size: 1.5em;
    text-align: center;
    line-height: 50px;
    box-sizing: border-box;
    box-sizing: border-box;

    .arrow-icon {
        padding: 0;
        margin: 0;
        margin-left: 1rem;
        margin-top: 0.75rem;
        height: 50px;
        width: 50px;
    }

    &:last-child {
        border-left: solid 1px rgba(0, 0, 0, 0.5);
    }
`

const Strip = styled.span`
    width: 100%;
    height: 2rem;
    display: block;
    background: #fcf7e0;
    ${(props) => props.theme.mixins.padding('page')};

    margin-bottom: 1rem;
    #home-icon {
        padding: 0;
        margin: 0;
        height: 30px;
        width: 30px;
    }
`

const Main = styled.main`
    ${(props) => props.theme.mixins.padding('page')};

    ${(props) =>
        props.theme.mixins.flexMixin('row', 'nowrap', 'space-between')};
    width: 100%;
    height: auto;
    #wallet-and-active-plan {
        width: 700px;
        height: 100%;
        margin-bottom: 1rem;

        @media (max-width: 900px) {
            width: 700px;
            height: 100%;
            margin: 0 auto;
        }

        @media (max-width: 700px) {
            width: 100%;
        }
    }

    #wallet {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
        border-radius: 25px;
        background: #fafceb;
        width: 100%;
        height: 160px;
        padding: 1rem 0.5rem;
        box-sizing: border-box;
        margin-bottom: 1rem;
        ${(props) => props.theme.mixins.flexMixin('row', 'nowrap')}

        .circle {
            margin: 0 1rem;
            box-sizing: border-box;
            ${(props) => props.theme.mixins.flexMixin('column', 'nowrap')}
            @media(max-width: 500px) {
                margin: 0 0.25rem;
                ${(props) => props.theme.mixins.flexMixin('row', 'nowrap')}
            }
        }

        #circle-rank {
            @media (max-width: 500px) {
                margin: 0 0.25rem;
                ${(props) =>
                    props.theme.mixins.flexMixin('row-reverse', 'nowrap')}
            }
            border-left: solid 1px rgba(0, 0, 0, 0.2);
        }

        .inner-circle {
            height: 112px;
            width: 112px;
            border-style: solid;
            border-width: 5px;
            border-radius: 50%;
            display: inline-block;
            margin: 0 4rem;
            text-align: center;
            color: white;
            font-size: 0.75rem;
            font-weight: 700;
            line-height: 112px;

            @media (max-width: 700px) {
                height: 96px;
                width: 96px;
                line-height: 86px;
                margin: 0rem 2rem;
            }
            @media (max-width: 500px) {
                height: 80px;
                width: 80px;
                line-height: 60px;
                margin: 0rem -0.5rem;
            }
        }
        .undernote {
            text-align: center;
            font-weight: 700;
            font-size: 0.75rem;
            color: #6a6a6a;
            width: 100%;
            display: block;
            margin-top: 0.5rem;
            @media (max-width: 500px) {
                margin: 0rem 0.5rem;
                width: 40px;
                font-size: 0.5rem;
            }
        }

        #inner-circle-rank {
            background: #d88906;
            border-color: #f7d130;
        }

        #inner-circle-wallet {
            background: #f997c1;
            border-color: #fbc9cf;
        }
    }

    #active-plan {
        background: #f9f9f9;
        padding: 1rem;
        box-sizing: border-box;
        border-radius: 10px;
        margin-bottom: 1rem;

        #plan-header {
            padding: 1rem 0.5rem;
            font-size: 2.025rem;
            font-weight: 700;
            color: #949292;
            border-bottom: solid 1px rgba(0, 0, 0, 0.1);
            @media (max-width: 700px) {
                font-size: 1.75rem;
            }
            @media (max-width: 500px) {
                width: 100%;
                text-align: center;
                font-size: 1.5rem;
                font-weight: 500;
            }
        }
    }

    #leaderboard {
        width: calc(100% - 724px);
        height: 476px;
        background: #fbfbfb;
        margin-left: 24px;
        @media (max-width: 900px) {
            display: none;
        }
    }

    #plan-list {
        list-style-type: none;
    }
    .available-plan {
        border-bottom: solid 1px rgba(0, 0, 0, 0.1);
        width: 200px;
        height: 50px;
        display: flex;
        flex-flow: row nowrap;
        list-style-type: none;
        text-decoration: none;
        margin-top: 0.5rem;

        @media (max-width: 500px) {
            width: 100%;
        }
        .plan-head {
            width: 70%;
            margin: 0;
            padding: 0;
            text-align: center;
            display: inline-block;

            #bronze1 {
                color: #b866de;
            }
            #bronze2 {
                color: #ff9292;
            }
            #bronze3 {
                color: #9c9ee0;
            }

            .plan-title {
                font-size: 1rem;
                font-weight: 700;
                display: block;
                margin: 0;
            }

            .plan-left {
                font-size: 0.5rem;
                font-weight: 700;
                color: #949292;
            }
        }

        .inner-play {
            display: inline-block;
            width: calc(30% - 24px);
            margin: 0;
            margin-left: 24px;
            padding: 0;

            #bronze1 {
                background: #b866de;
            }
            #bronze2 {
                background: #ff9292;
            }
            #bronze3 {
                background: #9c9ee0;
            }
            span {
                margin: 0 auto;
                display: inline-block;
                text-align: center;
                border-radius: 50%;
                color: white;
                width: 24px;
                height: 24px;
                font-size: 0.75rem;
                line-height: 24px;
            }
        }
    }

    #available-plans {
        height: auto;
        width: 100%;
        ${(props) =>
            props.theme.mixins.flexMixin(
                'row',
                'nowrap',
                'space-between',
                'center'
            )}
        @media(max-width: 560px) {
            ${(props) =>
                props.theme.mixins.flexMixin(
                    'column',
                    'nowrap',
                    'space-between',
                    'center'
                )}
        }
    }

    #available {
        width: 50%;

        @media (max-width: 500px) {
            width: 100%;
        }
    }

    #play-button {
        border-left: solid 1px rgba(0, 0, 0, 0.1);
        width: 50%;
        ${(props) => props.theme.mixins.flexMixin('row', 'nowrap')}
        margin: 1rem auto;
        @media (max-width: 500px) {
            width: 100%;
            border-left: none;
        }
    }

    #play {
        padding: 0.75rem 1rem;
        background: linear-gradient(180deg, #ffed80 0%, #f8ab2e 100%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
        border-radius: 25px;
        border: none;
        width: 198px;
        height: 75px;
        @media (max-width: 500px) {
            width: 100%;
        }
    }

    #podium {
        padding: 2rem 1rem;
        box-sizing: border-box;
        width: 100%;
        height: auto;
        ${(props) =>
            props.theme.mixins.flexMixin('row', 'nowrap', 'space-between')}
    }

    .podium-circle {
        width: 86px;
        height: 86px;
        font-size: 2.025rem;
        font-weight: 900;
        ${(props) => props.theme.mixins.flexMixin('column', 'nowrap')}
    }

    .podium-main {
        width: 100%;
        height: 86px;
        border-radius: 50%;
        border: none;
        background: #eee;
        text-align: center;
        line-height: 86px;
        color: rgba(57, 57, 57, 0.5);
        margin-bottom: 0.5rem;

        #winners-icon {
            width: 49px;
            height: 49px;
            margin: 0 auto;
        }
    }

    .podium-text {
        font-size: 0.5rem;
        text-align: center;
        width: 100%;
    }
`

const Dashboard = (props) => {
    const [isLoading, setLoading] = useState(false)
    const [leaderboard, setLeaderboard] = useState([])
    const [user, setUser] = useState({
        username: '',
        balance: 0,
        rank: 0,
    })

    React.useEffect(() => {
        // get leaderboard

        const leaderboard = getLeaderBoard()
        leaderboard
            .then((res) => {
                setLeaderboard(res.data.data.leaderboardObject)
            })
            .catch((err) => {
                console.log(err)
            })

        const USER_ID = '12345'

        // generate cancel token for cleanup
        const source = axios.CancelToken.source()
        const token = source.token

        // api call to get user details

        const user = getUser(USER_ID, token)
        user.then((res) => {
            console.log(res)
            setUser(res.data.data.userObject)
        }).catch((err) => {
            console.log(err)
        })

        return () => {
            // cancel network request to prevent memory leaks
            source.cancel()
        }
    }, [])

    return (
        <Container className="body-container">
            <Header username={user.username} />
            <DashboardHero>
                <h1 className="dashboard-heading">Dashboard</h1>
                <div className="options">
                    <Option id="buy-lives">
                        BUY LIVES
                        <img className="arrow-icon" src={ArrowIcon} />
                    </Option>
                    <Option id="top-wallet">
                        TOP WALLET
                        <img className="arrow-icon" src={ArrowIcon} />
                    </Option>
                </div>
            </DashboardHero>
            <Strip>
                <img id="home-icon" src={HomeIcon} />
            </Strip>
            <Main>
                <section id="wallet-and-active-plan">
                    <div id="wallet">
                        <div className="circle" id="circle-wallet">
                            <span
                                className="inner-circle"
                                id="inner-circle-wallet"
                            >
                                {user.username
                                    ? `NGN ${user.wallet_balance}`
                                    : `NGN 0`}
                            </span>
                            <span className="undernote">WALLET</span>
                        </div>
                        <div className="circle" id="circle-rank">
                            <span
                                className="inner-circle"
                                id="inner-circle-rank"
                            >
                                {user.username ? user.rank : 0}
                            </span>
                            <span className="undernote">RANK</span>
                        </div>
                    </div>
                    <div id="active-plan">
                        <h5 id="plan-header">CURRENT PLAN</h5>
                        <div id="available-plans">
                            <div id="available">
                                {user.available_plan &&
                                    user.available_plan.map((plan, idx) => {
                                        return (
                                            <div
                                                key={idx}
                                                className="available-plan"
                                            >
                                                <div className="plan-head">
                                                    <h6
                                                        id={`${plan.id}`}
                                                        className="plan-title"
                                                    >
                                                        {plan.plan}
                                                    </h6>
                                                    <span className="plan-left">
                                                        {plan.lives_left} of 4
                                                        lives
                                                    </span>
                                                </div>
                                                <div className="inner-play">
                                                    <span id={plan.id}>
                                                        {plan.plays}
                                                    </span>
                                                </div>
                                            </div>
                                        )
                                    })}
                            </div>
                            <div id="play-button">
                                <button id="play">PLAY</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="leaderboard">
                    <div id="podium">
                        <div className="podium-circle" id="podium-2">
                            <span className="podium-main">2</span>
                            <span className="podium-text">
                                {leaderboard && leaderboard.length > 0
                                    ? leaderboard[1].name
                                    : ''}
                            </span>
                        </div>
                        <div className="podium-circle" id="podium-1">
                            <span className="podium-main">
                                <img src={WinnersIcon} id="winners-icon" />
                            </span>
                            <span className="podium-text">
                                {leaderboard.length > 0
                                    ? leaderboard[0].name
                                    : ''}
                            </span>
                        </div>
                        <div className="podium-circle" id="podium-3">
                            <span className="podium-main">3</span>
                            <span className="podium-text">
                                {leaderboard.length > 0
                                    ? leaderboard[2].name
                                    : ''}
                            </span>
                        </div>
                    </div>
                    <div id="leaderboard-table">
                        <LeaderboardTable data={leaderboard} />
                    </div>
                </section>
            </Main>

            <Footer />
        </Container>
    )
}

Dashboard.propTypes = {}

export default withTheme(Dashboard)

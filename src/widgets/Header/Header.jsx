import React, { useState } from 'react'
import styled, { keyframes, withTheme } from 'styled-components'
import PropTypes from 'prop-types'

import { fadeIn } from 'react-animations'
import { freezeScroll, unfreezeScroll } from '../../utils/helpers'

import Logo from '../../assets/images/Logo.png'
import Notification from '../../assets/svgs/Notification.svg'
import ModalUSER from '../../assets/images/ModalUSER.png'
import User from '../../assets/images/User.png'
import Hamburger from '../../assets/svgs/Hamburger.svg'

import Dropdown from 'react-bootstrap/Dropdown'

const slideinAnimation = keyframes`${fadeIn}`

const ParentContainer = styled.header`
    width: 100%;
    height: 6.125rem;
    background: #32607a;
    padding: 0px 20px;
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

    #hamburger {
        @media (min-width: 500px) {
            display: none;
        }
        @media (max-width: 500px) {
            display: inline-block;
        }
    }

    @media (max-width: 500px) {
        height: 3rem;
    }
`

const LogoContainer = styled.span`
    width: 10rem;
    height: 100%;
    .logo {
        width: 124px;
        height: 62px;
        margin: 1rem 0rem;
        box-sizing: border-box;

        @media (max-width: 500px) {
            width: 62px;
            height: 31px;
            margin: 0.5rem 0rem;
        }
    }
    display: inline-block;
`

const Navigation = styled.nav`
    width: calc(100% - 10rem);
    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0;
    padding: 0;

    @media (max-width: 500px) {
        display: none;
    }

    .show {
        border: none;
        outline: none;
    }

    #dropdown-component {
        display: flex;
        flex-flow: row nowrap;
        /* width: 200px; */
        height: 70px;
        align-items: center;
        justify-content: center;
        background: none;
        outline: none;
        border: none;
    }
`

const NotificationIcon = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    display: inline-block;
`

const UserBar = styled.div`
    width: 100%;
    height: 100%;
    padding: 0.75rem 0rem;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100px;
        /* height: 100px; */
        margin: 0;
        padding: 0;
        /* top: -20px;
        position: relative; */
    }

    p {
        padding: 0;
        margin: 0;
        display: inline-block;
        line-height: 70px;
        /* top: -30px;
        left: -30px;
        position: relative; */
        font-size: 0.75rem;
    }
`
const ModalMenu = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 1rem;
    box-sizing: boroder-box;
    background: rgba(34, 62, 79, 0.9);
    position: absolute;
    z-index: 9999999;
    top: 3rem;
    left: 0;
    animation: 0.5s ${slideinAnimation};
`

const Menu = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const Profile = styled.span`
    color: #e0e0e0;
    display: block;
    width: 100%;
    height: 150px;
    border-bottom: 1px solid #e0e0e0;

    .profile-img-sm {
        display: block;
        margin: 0 auto;

        #modal-profile {
            width: 110px;
            height: 110px;
            margin: 0 auto;
            display: block;
        }

        #modal-username {
            color: #e0e0e0;
            width: 100%;
            text-align: center;
        }
    }
`

const Item = styled.span`
    color: white;
    display: block;
    width: 50%;
    height: 45px;
    font-size: 0.75rem;
    line-height: 45px;
    padding: 0.5rem 0rem;
    margin: 0 auto;
    box-sizing: border-box;
    border-bottom: solid 1px #858585;
`
const Header = (props) => {
    const [modal, setModal] = React.useState(false)
    const username = props.username

    const toggleModal = () => {
        if (modal) {
            freezeScroll()
        } else {
            unfreezeScroll()
        }
        return setModal(!modal)
    }
    return (
        <ParentContainer>
            {modal && (
                <ModalMenu className="modal-menu">
                    <Menu>
                        <Profile>
                            <span className="profile-img-sm">
                                <img
                                    src={ModalUSER}
                                    alt="profile image"
                                    id="modal-profile"
                                />
                                <p className="username" id="modal-username">
                                    {username}
                                </p>
                            </span>
                        </Profile>
                        <Item>LEADERBOARD</Item>
                        <Item>WALLET</Item>
                        <Item>PROFILE</Item>
                        <Item>LOGOUT</Item>
                    </Menu>
                </ModalMenu>
            )}
            <LogoContainer>
                <img className="logo" src={Logo} alt="Logo of Cashingames" />
            </LogoContainer>
            <Navigation id="nav">
                <NotificationIcon id="notification-icon" src={Notification} />
                <Dropdown variant="dark">
                    <Dropdown.Toggle id="dropdown-component">
                        <UserBar>
                            {/* <img
                                src={User}
                                id="user-photo"
                                alt={`A photo of ${'props.user.username'}`}
                            /> */}
                            <p id="username">{username ? username : 'Guest'}</p>
                        </UserBar>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="1">WALLET</Dropdown.Item>
                        <Dropdown.Item eventKey="2">PROFILE</Dropdown.Item>
                        <Dropdown.Item eventKey="3">LOGOUT</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Navigation>
            <img
                onClick={toggleModal}
                id="hamburger"
                src={Hamburger}
                alt={`Hamburger menu}`}
            />
        </ParentContainer>
    )
}

Header.propTypes = {
    isLoggedIn: PropTypes.bool,
}

export default withTheme(Header)

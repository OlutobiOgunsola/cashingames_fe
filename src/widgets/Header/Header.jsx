import  React, { useState } from  'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Logo from '../../assets/images/Logo.png'
import Notification from '../../assets/svgs/Notification.svg'
import UserIcon from '../../assets/svgs/UserIcon.svg'
import Hamburger from '../../assets/svgs/Hamburger.svg'

const ParentContainer = styled.header`
    width: 100%;
    height: 6.125rem;
    background: #32607A;
    padding: 0px 20px;
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

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
            margin: .5rem 0rem;
        }
    };
    display: inline-block;
`

const Navigation = styled.nav`
    width: calc(100% - 10rem);
    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    background: red;
    margin: 0;
    padding: 0;
`

const NotificationIcon = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    display: inline-block;
`

const UserBar = styled.div`
    width: 21rem;
    height: 100%;
`

const Header = (props) => {
    return (
        <ParentContainer>
            <LogoContainer>
                <img className='logo' src={Logo} alt='Logo of Cashingames' />
            </LogoContainer>
            {/* <Navigation>
                <NotificationIcon id='notification-icon' src={Notification}/>
                <UserBar>
                    <img src={UserIcon} id='user-photo' alt={`A photo of ${'props.user.username'}`}/>
                </UserBar>
            </Navigation> */}
            <img src={Hamburger} alt={`Hamburger menu}`}/>
        </ParentContainer>
    )
}

Header.propTypes = {
    isLoggedIn: PropTypes.bool,
}

export default Header
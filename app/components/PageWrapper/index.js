/**
*
* PageWrapper
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { scaleDown as Menu } from 'react-burger-menu';

// import styled from 'styled-components';
import NavBar from './navBar';
import './pageWrapper.css';
import PageLayout from './pageLayout';
import { logOut } from '../../utils/authFunctions';


function addGradient(e) {
  const x = e.pageX - e.target.offsetLeft;
  const y = e.pageY - e.target.offsetTop;

  if (e.target.classList.contains('bm-item') ||
    e.target.classList.contains('bm-item-list')) {
    const xy = (x + y) / 15;
    const bgWebKit = `linear-gradient(${xy}deg, #4ac1ff, #795bb0)`;
    e.currentTarget.children[0].children[1].children[0].style.background = bgWebKit;
  }
  if (e.currentTarget.children[0].classList[0].split('-')[0] === 'MuiPaper') {
    const xy = (y) / 10;
    const bgWebKit = `linear-gradient(${xy}deg, #4ac1ff, #795bb0)`;
    e.currentTarget.children[0].style.background = bgWebKit;
  }
}

class PageWrapper extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div id={'PageWrapper'} style={{ height: '100%' }} >
        <div onMouseMove={addGradient}>
          <Menu
            pageWrapId={'page-wrap'}
            outerContainerId={'PageWrapper'}
          >
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className={'menu-item'} href={'/contact'}>Contact</a>
            <a className="menu-item--small" href="">Settings</a>
            <a onClick={logOut} className="menu-item--small" href={'/'}> Log Out </a>
          </Menu>
        </div>
        <main id={'page-wrap'}>
          <div onMouseMove={addGradient}>
            <NavBar />
          </div>
          <PageLayout page={this.props.page} />
        </main>
      </div>
    );
  }
}

PageWrapper.propTypes = {
  page: PropTypes.string,

};

export default PageWrapper;

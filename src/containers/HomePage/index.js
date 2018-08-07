import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import WebFont from 'webfontloader';
import { SocialIcon } from 'react-social-icons';
import MediaQuery from 'react-responsive'

import EntranceAnimation from '../../components/EntranceAnimation'
import Container from '../../components/Container'

import landingImg from '../../static/img/landing1.jpg';
import landingMobileImg from '../../static/img/landing1mobile.png';
import skillsImg from '../../static/img/skills.jpg';
import seatedImg from '../../static/img/seated-square.png';
import ladonImg from '../../static/img/LadonWebsite.jpg';
import ladonAppImg from '../../static/img/LadonApp.jpg';
import shipeeeImg from '../../static/img/ShipeeeImg.jpg';
import NTUImg from '../../static/img/ntuLogo.jpg';
import UCBImg from '../../static/img/ucbLogo.png';
import './styles.css'
WebFont.load({
  google: {
    families: ['Gloria Hallelujah', 'sans-serif', 'Roboto']
  }
});

class HomePage extends Component {
  render() {
    const nameCard = (
      <div className="namecard">
        <span className="text">Hi, my name is</span>
        <h1 className="name">MELVYN</h1>
        <span className="text">I am a</span>
        <h3 className="subtitle">Entrepreneur & Coder</h3>
        <SocialIcon style={{margin: 5}} url="https://www.linkedin.com/in/melvynsng"/>
        <SocialIcon style={{margin: 5}} url="https://www.facebook.com/melvyn.sngguojie"/>
        <SocialIcon style={{margin: 5}} url="mailto:sngguojie@gmail.com"/>
      </div>
    )
    return (
      <MediaQuery maxWidth={767}>
       { (isPhone) => (
        <div style={styles.global}>
          <EntranceAnimation>
            <header style={isPhone ? styles.headerImgMobile : styles.headerImg}>
            {
              isPhone && nameCard
            }
              {
                !isPhone && (
                  <Row>
                    <Col lg={6}/>
                    <Col lg={6}>
                      { nameCard }
                    </Col>
                  </Row>

                )
              }

            </header>

            <Container color="blue">
              <Row>
                <Col lg={12} style={{margin: 'auto'}}>
                  <h1 className="title">About Me</h1>
                </Col>
              </Row>
              <Row>
                <Col lg={1}/>
                <Col lg={4}>
                  <div style={{}}>
                    <img alt="seatedImg" className="img" style={{borderRadius: '100%'}} src={seatedImg}/>
                  </div>
                </Col>
                <Col lg={6}>
                  <p className="content">Cofounder and CTO at Ladon Technologies</p>
                  <p className="content">Based in Singapore & California</p>
                  <p className="content">Other Interests:</p>
                  <ul className="content">
                    <li>Self-Leadership</li>
                    <li>Autonomous Vehicles</li>
                    <li>Home Automation</li>
                    <li>Game Development</li>
                  </ul>
                </Col>
                <Col lg={1}/>
              </Row>
            </Container>
            <Container color={'white'}>
              <Row>
                <Col lg={12} style={{margin: 'auto'}}>
                  <h1 className="title">Education</h1>
                </Col>
              </Row>
              <Row>
                <Col lg={1}/>
                <Col lg={4}>
                  <img alt="NTU Logo" className="img" src={NTUImg}/>
                </Col>
                <Col lg={6}>
                  <p className="content"><strong>Nanyang Technological University (2017)</strong></p>
                  <p className="content">Master of Technology Management, Computer Science, Honors (Highest Distinction)</p>
                </Col>
                <Col lg={1}/>
              </Row>
              <Row>
                <Col lg={1}/>
                <Col lg={4}>
                  <img alt="UCB Logo" style={{height: 100, ...styles.img, width: 100}} src={UCBImg}/>
                </Col>
                <Col lg={6}>
                  <p className="content"><strong>University of California, Berkeley (2015)</strong></p>
                  <p className="content">12-month exchange at the University of California, Berkeley, Computer Science</p>
                </Col>
                <Col lg={1}/>
              </Row>
            </Container>

            <Container color={'blue'}>
              <Row>
                <Col lg={12} style={{margin: 'auto'}}>
                  <h1 className="title">Skills</h1>
                </Col>
              </Row>
              <Row>
                <Col lg={1}/>
                <Col lg={6}>
                  <ul className="content">
                    <li>Web Application Development (React, Django)</li>
                    <li>Mobile Development (ReactNative)</li>
                    <li>DevOps (Heroku, Google Cloud, AWS)</li>
                    <li>Content Management (Wordpress)</li>
                    <li>Game Development (Unity)</li>
                  </ul>
                </Col>
                <Col lg={4}>
                  <div style={{}}>
                    <img alt="skills" className="img" src={skillsImg}/>
                  </div>
                </Col>
                <Col lg={1}/>
              </Row>
            </Container>
            <Container color={'white'}>
              <Row>
                <Col lg={12} style={{margin: 'auto'}}>
                  <h1 className="title">Projects</h1>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <h2>Ladon Language Hotline</h2>
                  <div className="imgContainer">
                    <img alt="Ladon Language Hotline" className="img" src={ladonImg}/>
                  </div>
                  <p className="content"><a href="https://www.ladonlanguage.com">Ladon Language Hotline</a> is a phone platform to connect with freelance translators who can help you communicate with non English Speakers. We are available in Spanish, Mandarin, Cantonese, Vietnamese, Arabic</p>
                </Col>
                <Col lg={4}>
                  <h2>Ladon Mobile App</h2>
                  <div className="imgContainer">
                    <img alt="Ladon Mobile App" className="img" src={ladonAppImg}/>
                  </div>
                  <p className="content"><a href="https://www.ladonlanguage.com/ladonapp">Ladon Mobile App</a> is a mobile app to call live language assistants on demand who can help you navigate language barriers in a foreign land</p>
                </Col>
                <Col lg={4}>
                  <h2>Shipeee</h2>
                  <div className="imgContainer">
                    <img alt="Shipeee" className="img" src={shipeeeImg}/>
                  </div>
                  <p className="content"><a href="https://www.facebook.com/singaporepsa/videos/1527599587307682/">Shipeee</a> is a mobile game developed by my team as part of PSA GameIt Competition by Port Authority of Singapore. Shipeee clinched top place among over 50 teams</p>
                </Col>
              </Row>
            </Container>
            <Container color={'blue'}>
              <Row>
                <Col lg={12} style={{margin: 'auto'}}>
                  <h1 className="title">Contact</h1>
                    <SocialIcon style={{margin: 5}} url="https://www.linkedin.com/in/melvynsng"/>
                    <SocialIcon style={{margin: 5}} url="https://www.facebook.com/melvyn.sngguojie"/>
                    <SocialIcon style={{margin: 5}} url="mailto:sngguojie@gmail.com"/>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div style={{height: 100}}/>
                </Col>
              </Row>
            </Container>
          </EntranceAnimation>

        </div>
      )}
      </MediaQuery>
    );
  }
}

const styles = {
  global: {
    fontFamily: 'Roboto',
  },
  container: {
    paddingLeft: 200,
    paddingRight: 200,
    paddingBottom: 100,
  },
  headerImg: {
    height: '80vh',
    padding: 100,
    backgroundImage: `url(${landingImg})`,
    backgroundPosition: 'center'
  },
  headerImgMobile: {
    height: '100vh',
    backgroundImage: `url(${landingMobileImg})`,
    backgroundPosition: 'center bottom',
    display: 'container'
  },
}

export default HomePage;

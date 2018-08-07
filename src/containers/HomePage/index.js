import React, { Component } from 'react';
import { Row, Col, getRowProps, getColumnProps } from 'react-flexbox-grid';
import WebFont from 'webfontloader';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

import EntranceAnimation from '../../components/EntranceAnimation'
import Container from '../../components/Container'

import landingImg from '../../static/img/landing1.jpg';
import skillsImg from '../../static/img/skills.jpg';
import seatedImg from '../../static/img/seated-square.png';
import ladonImg from '../../static/img/LadonWebsite.jpg';
import ladonAppImg from '../../static/img/LadonApp.jpg';
import shipeeeImg from '../../static/img/ShipeeeImg.jpg';
import NTUImg from '../../static/img/ntuLogo.jpg';
import UCBImg from '../../static/img/ucbLogo.png';

WebFont.load({
  google: {
    families: ['Gloria Hallelujah', 'sans-serif', 'Roboto']
  }
});

class HomePage extends Component {
  render() {
    return (
        <div style={styles.global}>
          <EntranceAnimation>
            <header style={styles.headerImg}>
              <Row>
                <Col lg={6}/>
                <Col lg={6}>
                  <div style={styles.namecard}>
                    <span style={styles.text}>Hi, my name is</span>
                    <h1 style={styles.name}>MELVYN</h1>
                    <span style={styles.text}>I am a</span>
                    <h3 style={styles.subtitle}>Cofounder & Developer</h3>
                  </div>
                  <SocialIcon style={{margin: 20}} url="https://www.linkedin.com/in/melvynsng"/>
                  <SocialIcon style={{margin: 20}} url="https://www.facebook.com/melvyn.sngguojie"/>
                  <SocialIcon style={{margin: 20}} url="mailto:sngguojie@gmail.com"/>
                </Col>
              </Row>

            </header>
            <Container color="blue">
              <Row>
                <Col lg={12} style={{margin: 'auto'}}>
                  <h1 style={styles.title}>About Me</h1>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <div style={{}}>
                    <img style={{borderRadius: 1000,...styles.img}} src={seatedImg}/>
                  </div>
                </Col>
                <Col lg={6}>
                  <p style={styles.content}>Changing the world at Ladon Technologies as CTO</p>
                  <p style={styles.content}>Based in Singapore & California</p>
                  <p style={styles.content}>Other Interests:</p>
                  <ul style={styles.content}>
                    <li>Self-Leadership</li>
                    <li>Autonomous Vehicles</li>
                    <li>Home Automation</li>
                    <li>Game Development</li>
                  </ul>
                </Col>
              </Row>
            </Container>
            <Container color={'white'}>
              <Row>
                <Col lg={12} style={{margin: 'auto'}}>
                  <h1 style={styles.title}>Education</h1>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <img style={styles.img} src={NTUImg}/>
                  <p style={styles.content}>Master of Technology Management, Computer Science, Honors (Highest Distinction)</p>
                </Col>
                <Col lg={6}>
                  <img style={styles.img} src={UCBImg}/>
                  <p style={styles.content}>12-month exchange at the University of California, Berkeley, Computer Science</p>
                </Col>
              </Row>
            </Container>

            <Container color={'blue'}>
              <Row>
                <Col lg={12} style={{margin: 'auto'}}>
                  <h1 style={styles.title}>Skills</h1>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <ul style={styles.content}>
                    <li>Web Application Development (React, Django)</li>
                    <li>Mobile Development (ReactNative)</li>
                    <li>DevOps (Heroku, Google Cloud, AWS)</li>
                    <li>Content Management (Wordpress)</li>
                    <li>Game Development (Unity)</li>
                  </ul>
                </Col>
                <Col lg={6}>
                  <div style={{}}>
                    <img style={styles.img} src={skillsImg}/>
                  </div>
                </Col>
              </Row>
            </Container>
            <Container color={'white'}>
              <Row>
                <Col lg={12} style={{margin: 'auto'}}>
                  <h1 style={styles.title}>Projects</h1>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <h2>Ladon Language Hotline</h2>
                  <img style={styles.img} src={ladonImg}/>
                  <p style={styles.content}><a href="https://www.ladonlanguage.com">Ladon Language Hotline</a> is a phone platform to connect with freelance translators who can help you communicate with non English Speakers. We are available in Spanish, Mandarin, Cantonese, Vietnamese, Arabic</p>
                </Col>
                <Col lg={4}>
                  <h2>Ladon Mobile App</h2>
                  <img style={styles.img} src={ladonAppImg}/>
                  <p style={styles.content}><a href="https://www.ladonlanguage.com/ladonapp">Ladon Mobile App</a> is a mobile app to call live language assistants on demand who can help you navigate language barriers in a foreign land</p>
                </Col>
                <Col lg={4}>
                  <h2>Shipeee</h2>
                  <img style={styles.img} src={shipeeeImg}/>
                  <p style={styles.content}><a href="https://www.facebook.com/singaporepsa/videos/1527599587307682/">Shipeee</a> is a mobile game developed by my team as part of PSA GameIt Competition by Port Authority of Singapore. Shipeee clinched top place among over 50 teams</p>
                </Col>
              </Row>
            </Container>
            <Container color={'blue'}>
              <Row>
                <Col lg={12} style={{margin: 'auto'}}>
                  <h1 style={styles.title}>Contact</h1>
                    <SocialIcon style={{margin: 20}} url="https://www.linkedin.com/in/melvynsng"/>
                    <SocialIcon style={{margin: 20}} url="https://www.facebook.com/melvyn.sngguojie"/>
                    <SocialIcon style={{margin: 20}} url="mailto:sngguojie@gmail.com"/>
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
  text: {
    fontSize: 30,
  },
  content: {
    fontSize: 24,
    textAlign: 'left'
  },
  name: {
    fontSize: 80,
    marginTop: 0,
  },
  title: {
    fontFamily: 'Gloria Hallelujah',
    fontSize: 60,
    textDecoration: 'underline'
  },
  subtitle: {
    fontSize: 40,
    marginTop: 0,
  },
  namecard:{
    fontFamily: 'Gloria Hallelujah',
    top: '50%',
    padding: 50,
    background: 'rgba(0, 64, 124,0.5)',
    borderRadius: 50,
  },
  headerImg: {
    height: '80vh',
    padding: 100,
    backgroundImage: `url(${landingImg})`,
    backgroundPosition: 'center'
  },
  img: {
    width: 280,
    padding: 30,
  }
}

export default HomePage;

import React, { Component } from 'react';
import { Row, Col, getRowProps, getColumnProps } from 'react-flexbox-grid';
import WebFont from 'webfontloader';
import EntranceAnimation from '../../components/EntranceAnimation'

import landing from '../../static/img/landing1.jpg';

WebFont.load({
  google: {
    families: ['Gloria Hallelujah', 'sans-serif']
  }
});

class HomePage extends Component {
  render() {
    return (
        <div>
          <EntranceAnimation>
            <header style={styles.headerImg}>
              <Row>
                <Col lg={6}/>
                <Col lg={6}>
                  <div style={styles.namecard}>
                    <h1 style={styles.name}>MELVYN SNG</h1>
                    <h3 style={styles.subtitle}>Dreamer | Learner | Doer</h3>
                  </div>
                </Col>
              </Row>
            </header>
          </EntranceAnimation>
        </div>
      
    );
  }
}

const styles = {
  name: {
    fontSize: 80
  },
  subtitle: {
    fontSize: 40
  },
  namecard:{
    marginTop: 200, 
    padding: 50,
    background: 'rgba(13,71,161,0.5)',
    borderRadius: 50,
    fontFamily: 'Gloria Hallelujah'
  },
  headerImg: {
    height: '80vh', 
    padding: 100, 
    backgroundImage: `url(${landing})`, 
    backgroundPosition: 'center'
  }
}

export default HomePage;

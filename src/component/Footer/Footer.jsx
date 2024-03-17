import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { SlSocialFacebook, SlSocialGithub, SlSocialInstagram, SlSocialLinkedin, } from "react-icons/sl";
import { SiX } from "react-icons/si";
export default function Footer() {

    const styleFooter = {
        background: "#111827",
        color: "white",
        padding: "20px"
    }
    const styleFont = {
        fontSize: "20px"
    }
    const redirectTodia = () => {
        window.location.href = 'https://dia.wiki/';
      };
      const redirectToWorldVibe = () => {
        window.location.href = 'https://worldvibeweb.org/';
      };
      const redirectToPurpleRock = () => {
        window.location.href = 'https://www.purplerock.xyz/';
      };
      const redirectToGoldenMeme = () => {
        window.location.href = 'https://goldenmeme.org/';
      };
    const styleIcon={
        gap:"20px"
        
    }
    return (
        <>
            <footer style={styleFooter}>
                <Container>
                    <Row className='mb-3'>

                        <Col xxl={8} xl={7} lg={6} md={6} sm={12} xs={12}>
                            <Row>
                                <Col className='text-white mb-5' style={styleFont}>
                                    Partner
                                </Col>
                            </Row>
                            <Row>
                                <Col className='text-white'>
                                    <Link className='text-white' onClick={redirectTodia}>
                                        Decentralized Intelligence Agency
                                    </Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='text-white'>
                                    <Link className='text-white' onClick={redirectToWorldVibe}>
                                        World Vibe Web
                                    </Link>
                                </Col>
                            </Row>
                            <Row className=''>
                                <Col className='text-white  mb-3'>
                                    <Link className='text-white' onClick={redirectToPurpleRock}>
                                        Purplerock
                                    </Link>
                                </Col>
                            </Row>
                            <div className='d-flex mb-5' style={styleIcon}>
                                {/* <Col xxl={1} xl={1} lg={1} md={1} sm={1} >     <SlSocialInstagram /></Col>
                                <Col xxl={1} xl={1} lg={1} md={1} sm={1} >     <SlSocialLinkedin /></Col>
                                <Col xxl={1} xl={1} lg={1} md={1} sm={1} >     <SlSocialGithub /></Col>
                                <Col xxl={1} xl={1} lg={1} md={1} sm={1}  >     <SiX /></Col> */}
                         <SlSocialInstagram />
                         <SlSocialLinkedin />
                            <SlSocialGithub />
                             <SiX />
                            </div>
                        </Col>


                        <Col xxl={4} xl={5} lg={6} md={6} sm={12} xs={12}>
                            <Row>
                                <Col className='text-white mb-5' style={styleFont}>
                                    Resource
                                </Col>
                            </Row>
                            <Row>
                                <Col className='text-white'>
                                    <Link className='text-white' onClick={redirectToGoldenMeme}>
                                        Effective Vibe
                                    </Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='text-white'>
                                    <Link className='text-white'>
                                        Golden Memes
                                    </Link>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                    <Row>
                        <Col className='text-center m-0 p-0'> &copy; Devesh chauhan (devesh123chauahan@gmail.com)</Col>
                    </Row>


                </Container>
            </footer>
        </>
    )
}

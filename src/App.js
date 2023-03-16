import './style.css'
import styled from 'styled-components';
import Progress from './components/Progress';
import Card from './components/Card';
import Patent from './components/Patent';
import { HiChevronDoubleUp } from 'react-icons/hi'
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { useRef } from 'react';

function App() {
  const contact = useRef(null);
  const home = useRef(null);
  const about = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <div>
      <section id='home' ref={home}>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div id='title'>
          <TitleText>
            Hello, I'm <NameS>Utpal Prajapati.</NameS>
          </TitleText>
          <TitleText>
            I'm a Software Developer.
          </TitleText>
          <div>
            <button onClick={() => scrollToSection(about)} className='btn btn-1 btn-1b'>View my work</button>
          </div>
        </div>
      </section>

      <AboutSection ref={about}>
        <Header >ABOUT</Header>
        <HeaderLine />

        <AboutInfoSection>
          <Flex1>
            <img src='me.png' class="me" />
            <Label> Who's this guy? </Label>
            <Aboutme>
              Upcoming software development at bank of america.
              An undergrad currently pursuing B.Tech in Computer Science and eager to learn new technologies.
              <br />
              <SpanLink onClick={() => scrollToSection(contact)} dest="contact">Let's make something special.</SpanLink>
            </Aboutme>
          </Flex1>
          <Flex2>
            <Progress pname="CSS" done="90" />
            <Progress pname="HTML" done="90" />
            <Progress pname="React" done="80" />
            <Progress pname="JavaScript" done="80" />
            <Progress pname="Python" done="80" />
            <Progress pname="Node.js" done="65" />
            <Progress pname="MySQL" done="80" />
            <Progress pname="MongoDB" done="90" />
            <Progress pname="Git" done="80" />
            <Progress pname="java" done="80" />
          </Flex2>
        </AboutInfoSection>
      </AboutSection>

      <ProjectSection>
        <Header >PROJECTS</Header>
        <HeaderLine />
        <Gallery>
          <Card
            name="AllMart eCommerce Website"
            tech="react, Nodejs"
            pimage="p1.png"
            info="The main aim of this project is to make shopping easier for the user for buying essential items as well as for sellers to sell items more easily. 
            This platform has an easy-to-use user interface to search for items, view a complete description of the product, and order the product. 
            The app has been designed and built in a manner that makes it very easy to order items once they are added to the cart. 
            "
            link="true"
            git="https://github.com/Utpal29/AllMart"
          />
          <Card
            name="Phishing Website Detection"
            tech="Python"
            pimage="p2.jpg"
            info="Phishing website detection using machine learning and deep neural networks.
            Algorithms like Naïve Bayes, Decision Tree, Random Forest, ANN, and CNN were used with and without a generic Algorithm. 
            Compared all Algorithms’ accuracy, RMSE, and computation time.
            "
            link="true"
            git="https://Utpal29/Phishing-Website-Detection"
          />
          <Card
            name="Queue Management Using Computer Vision"
            tech="Python"
            pimage="p3.jpg"
            info="Queue manager using object detection and tracking. The queue manager will be identifying a person (in the frame of vision of the camera) and giving him/her a number tag. People will follow the order of their tag number."
            link="true"
            git="https://github.com/Utpal29/Queue-Management"
          />
          <Card
            name="Analysis and Visualization of Criminal Activity in Urban Illinois"
            tech="Python"
            pimage="p4.jpeg"
            info="Chicago Crime Dataset was used to visualize and analyze the trends of crime over the years, locations of the crimes where they happened the most, and hotspots of crimes over the years.
            Trained the decision tree model to make predictions on whether arrests will be made or not. Its accuracy is measured and cross-validated against the present data."
            link="false"
            git="https://github.com/"
          />
          <Card
            name="Weather app"
            tech="JavaScript"
            pimage="p5.png"
            info="Weather-app is a clean and clear web app that allows you to quickly see the weather for any given location.Because of its small footprint, Weather-app could be used on a site by embedding in an iframe tag, or by a link on a button. Weather-app could also be deployed to a mobile device for quickly checking local temperature etc, as the small size minimises data use."
            link="true"
            git="https://github.com/Utpal29/Weather-app/"
          />
        </Gallery>
      </ProjectSection>

      <PatentSection>
        <PatentSectionInner>
          <Header >PUBLISHED PATENTS</Header>
          <HeaderLine />

          <Patents>
            <Patents>
              <Patent
                name="HEALTHCARE SYSTEM FOR CANCER CARE AND METHOD"
                id="202241031893"
                date="03/06/2022"
                image="pt1.png"
              />
              <Patent
                name="AUTONOMOUS VEHICLE SYSTEM FOR DATA SELECTION ON BOARD"
                id="202241047484"
                date="20/08/2022"
                image="pt2.png"
              />
            </Patents>
            <Patents>
              <Patent
                name="WIRELESS SIGNAL NOISE REDUCTION METHOD AND SYSTEM"
                id="202241047466"
                date="20/08/2022"
                image="pt3.png"
              />
              <Patent
                name="SUPPLY CHAIN MANAGEMENT RISK PREDICTION"
                id="202241050428"
                date="03/09/2022"
                image="pt4.png"
              />
            </Patents>
          </Patents>
        </PatentSectionInner>
      </PatentSection>

      <Contact ref={contact}>
        <svg style={{ left: '0', position: 'absolute', top: '0' }} preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="svgcolor-light">
          <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
        </svg>

        <ContactContainer id='contact'>
          <Header style={{ color: '#FFF', marginTop: '65px' }}>CONTACT</Header>
          <HeaderLine style={{ backgroundColor: '#FFF', margin: '25px 0 40px 0' }} />
          <PLb>Working with someone has always been fun for me. Want to make something cool together?</PLb>
          <ContactForm>
            <Name placeholder="Name" type="text" name="name" required />
            <Name placeholder="Enter email" type="email" name="email" required />
            <Message placeholder="Your Message" type="text" name="message" data-gramm="false" wt-ignore-input="true" data-quillbot-element="vUWuNutko0jruLdSV2JkF" style={{ height: '150px', width: '515px', }} />
          </ContactForm>
          <FormSubmit type="submit" value="SUBMIT" />
        </ContactContainer>
      </Contact>

      <Footer>
        <FHiChevronDoubleUp onClick={() => scrollToSection(home)} dest="home" />
        <Icons>
          <a style={{ color: 'inherit', textDecoration: 'none' }} href="https://www.linkedin.com/in/utpal-prajapati-191a391a8/">
            <Icon>
              <FaLinkedinIn />
            </Icon>
          </a>
          <a style={{ color: 'inherit', textDecoration: 'none' }} href="https://github.com/Utpal29">
            <Icon>
              <FaGithub />
            </Icon>
          </a>
          <a style={{ color: 'inherit', textDecoration: 'none' }} href="https://www.instagram.com/utpal.29/">
            <Icon>
              <FaInstagram />
            </Icon>
          </a>
          <a style={{ color: 'inherit', textDecoration: 'none' }} href="https://twitter.com/utpal_29">
            <Icon>
              <FaTwitter />
            </Icon>
          </a>
        </Icons>
        <InfoBox>
          <Footnote>
            UTPAL PRAJAPATI <SHighlight>@2022</SHighlight>
          </Footnote>
        </InfoBox>
      </Footer>
    </div>
  );
}


const Footer = styled.section`
background: #1b242f;
padding: 70px 0 50px 0;
position: relative;
`

const FHiChevronDoubleUp = styled(HiChevronDoubleUp)`
color: #FFF;
background: #e31b6d;
cursor: pointer;
font-size: 10pt;
height: 50px;
left: 0;
line-height: 40pt;
margin: 0 auto;
position: absolute;
right: 0;
top: -25px;
transition: background 0.5s;
width: 47px;
`
const Icons = styled.div`
flex-direction: row;
align-items: center;
display: flex;
justify-content: center;
color: #fff;
`

const Icon = styled.div`
background: #262f38;
cursor: pointer;
font-size: 18pt;
height: 55px;
margin: 0 15px;
overflow: hidden;
position: relative;
text-align: center;
transition: background 0.3s, color 0.3s, box-shadow 0.3s, transform 0.3s;
width: 55px;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;

&:hover{
  background: #04c2c9;
  box-shadow: 0 0 0 3px rgb(4 94 201 / 10%);
  transform: scale(0.9);
}
`
const InfoBox = styled.div`
text-align: center;
`

const Footnote = styled.div` 
color: #8f9aa7;
font-size: 10pt;
margin-top: 35px;
opacity: 0.6;
font-family: "Raleway";
`

const SHighlight = styled.span`
color: #e31b6d;
font-family: "Open Sans";
`

const FormSubmit = styled.input`
width: 165px;
background: transparent;
color: #fff;
float: right;
font-size: 12pt;
margin: 5px 0 0 0;
outline: 0;
padding: 10px 30px;
border: 2px solid #fff;
box-sizing: inherit;
cursor: pointer;
display: inline-block;
transition: all 0.5s;

&:hover {
  background: #04c2c9;
  border-color: #04c2c9;
}
`

const Name = styled.input`
background: #1e242c;
border: 0;
box-sizing: border-box;
color: #fff;
display: block;
font-size: 12pt;
margin-bottom: 3px;
outline: none;
padding: 10px 15px;
width: 100%;
`

const Message = styled.textarea`
height: 150px;
width: 515px;
margin-bottom: 5px;
min-height: 150px;
background: #1e242c;
border: 0;
box-sizing: border-box;
color: #fff;
display: block;
font-size: 12pt;
outline: none;
padding: 10px 15px;
`

const ContactForm = styled.form`
animation-delay: 0.5s;
animation: popIn 1s both;
min-width: 500px;
margin: 40px auto 0 auto;
`

const PLb = styled.div`
color: #04c2c9;
font-weight: 600;
`

const ContactContainer = styled.section`
padding: 0 10px;
box-sizing: border-box;
margin: 0 auto;
max-width: 1200px;
width: 100%;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
font-family: "Raleway";
`

const Contact = styled.section`
background: #252934;
color: #fff;
padding-top: 175px;
line-height: 18pt;
padding: 100px 0 130px 0;
position: relative;

`

const Patents = styled.div`
align-items: flex-start;
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;

`

const PatentSection = styled.section`
padding: 130px 0 180px 0;
text-align: left;
line-height: 18pt;
color: #616161;
font-family: "Raleway";
`

const PatentSectionInner = styled.div`
padding: 0 10px;
box-sizing: border-box;
margin: 0 auto;
max-width: 1200px;
width: 100%;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
`

const Gallery = styled.section`
margin: 20px 0;
padding: 0;
flex-wrap: wrap;
flex-direction: row;
box-sizing: border-box;
max-width: 1200px;
width: 100%;
align-items: center;
display: flex;
justify-content: center;
`

const ProjectSection = styled.section`
background: #f5f5f5;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center
color: #616161;
padding: 100px 0 130px 0;
`

const Label = styled.div`
margin: 20px 0 15px 0;
font-size: 18pt;
font-weight: bold;
font-family: "Raleway";
text-align: center;

`

const Aboutme = styled.div`
font-size: 12pt;
font-family: "Raleway";
color: #616161;
text-align: center;

`

const SpanLink = styled.span`
color: #009ada;
cursor: pointer;

`

const Flex1 = styled.div`
  display: flex;
  padding: 0 0 0 50px;
  box-sizing: border-box;
  flex: 1 1 50%;
  max-height: 100%;
  max-width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Flex2 = styled.div`

  display: flex;
  margin: 0 0 0 0;
  max-width: 90%;
  width: calc(100% - 15px);
  flex: 1 1 50%;
  max-height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const HeaderLine = styled.div`
  background: #444649;
  height: 4px;
  width: 70px;
  margin: 25px auto 100px auto;
  text-align: center;
`

const AboutInfoSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 50px;
  align-items: flex-start;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-direction: row;
`

const Header = styled.div`
  font-family: "raleway";
  font-size: 30pt;
  color: #444649;
  font-weight: bold;
  display: block;
  text-align: center;
`

const AboutSection = styled.section`
  margin: auto;
  overflow: hidden;
  border-top: 3px solid #04c2c9;
  padding: 100px 0 130px 0;
  line-height: 18pt;
  color: #616161;
  position: relative;
  font-size: 12pt;
`

const TitleText = styled.div`
  letter-spacing: normal;
  font-size: 32pt;
  line-height: 36pt;
  pointer-events: none;
  color: #fff;
  font-family: "Raleway";
  -webkit-font-smoothing: antialiased;
`

const NameS = styled.span`
  font-family: "Raleway";
  font-weight:600;
  color: #e31b6d;
`

export default App;

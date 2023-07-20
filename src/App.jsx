import { useState } from 'react'
import './App.scss'

function App() {
  const [faqState, setFaqState] = useState(null),
    worksList = [
      {
        title: "Todo Web App - Electron, React",
        subTitle: "UI/UX Design July 2023 - September 2023",
        imgSrc: "../MoaazAlla/res/img01.svg",
        url: ""
      }, {
        title: "Eosmas Baisc Web - Html & Scss",
        subTitle: "Frontend dev (ReactJs, Scss) - September 2023",
        imgSrc: "../MoaazAlla/res/img03.svg",
        url: ""
      }, {
        title: "CairoNews Web - React & Scss",
        subTitle: "UI/UX Design July 2023 - September 2023",
        imgSrc: "../MoaazAlla/res/img02.svg",
        url: ""
      }, {
        title: "BrandCapital Web Design - Figma",
        subTitle: "Frontend dev (Baisc) - September 2023",
        imgSrc: "../MoaazAlla/res/img06.svg",
        url: ""
      },
    ], [faqsList, setFaqsList] = useState([
      {
        Ques: "What is your development process?",
        Answ: "My structured web development process includes discovery, planning, design, development, testing, launch, and maintenance. I prioritize keeping my clients informed and involved to deliver a high-quality websites that reflects their brand and helps their business to thrive online.",
      }, {
        Ques: "What frontend technologies do you use?",
        Answ: "I offer frontend development services, create modern and responsive user interfaces for websites and applications. I use technologies like ReactJS, SCSS, NodeJS, ElectronJS, JS ES6, and Webpack.",
      }, {
        Ques: "How do you approach design?",
        Answ: "I aim to create visually appealing and responsive interface designs for websites and applications that provide a seamless user experience across different screens and devices. I utilize design tools like Figma and implement responsive design and design systems.",
      }, {
        Ques: "What is your focus?",
        Answ: "My focus is on creating high quality frontend development and design services to deliver modern and responsive websites and applications. I follow a structured approach to ensure clients are informed, involved and end up with an online presence that helps grow their business.",
      }
    ]);
  const toggleFaq = (N) => {
    if (faqState == N) {
      setFaqState(null);
    } else {
      setFaqState(N);
    }
  }
  return (
    <div className="App">
      <nav>
        <span className="logo Body_Sub">Moaaz <br />Alla.</span>

        <ul>
          <a href="#works"><span className="A_Link_01">Works</span></a>
          <a href="#faq"><span className="A_Link_01">Faq</span></a>
          <a href="#services"><span className="A_Link_01">Services</span></a>
        </ul>
       </nav>
      <section className="Overview_wrap">
        <span className="Header_Lable Lefted">
          Overview
        </span>
        <span className="Body_Context Lefted">
          A driven individual interested in building high-quality products for the web, With an eye for details and a passion for delivering exceptional results,
        </span>
      </section>
      <section id="works">
        <span className="Header_Display">
          Hello world! My name Is Moaaz Alla. Independant front-end web developer <br /> based in egypt
        </span>
      </section>
      <section>
        <span className="Header_Lable">Works</span>
        <div className="Two_Grid_Wrap">
          {worksList.map(work => <>
            <div className="Project_Item">

              <div className="Details">
                <div>
                  <span className="Body_Title">
                    {work.title}
                  </span>
                  <span className="Body_Sub">
                    {work.subTitle}
                  </span>
                </div>
                <button>
                  <img src="../MoaazAlla/res/link.svg" alt='Link' />
                </button>
              </div>
              <div className="Preview_Image">
                <img src={work.imgSrc} alt="Preview" />
              </div>

            </div>
          </>)}

        </div>
      </section>
      <section className="Faqs_Wrap" id="faq">
        <span className="Header_Lable Lefted">
          FAQs
        </span>
        <div className="Wraper Lefted">
          {faqsList.map((faq, i) => <>
            <div className="Item">
              <div>
                <span className="Body_Sub Ques">{faq.Ques}</span>
                <button className="switch" onClick={() => toggleFaq(i)}>
                  <img className={(i === faqState) ? "rote" : "null"} src="../MoaazAlla/res/thexvector.svg" />
                </button>
              </div>
              <span className={(i === faqState) ? "Body_Context Answ toggle" : "Body_Context Answ"}>{faq.Answ}</span>
            </div>
            <span className='Break_Line'></span>
          </>)}
        </div>

        <span className='Body_Sub Lefted'>
          <span className="sixteyO">
            Still have questions?

          </span>   <span className="link">
            Have a coversation with me.
          </span>
        </span>
      </section>
      <section className='SpecialSS' id="services">
        <div>
          <img src="../MoaazAlla/logo.svg" alt="" />
          <span className="Header">
            Want to work together?
          </span>
          <span className="Body_Sub sixteyO">
            Feel free to reach out for collaborations or just a friendly hello <br />

          </span>
          <span className="Body_Sub">
            <span className="sixteyO">email: </span> <span className="link">moaz.dev@yahoo.com
            </span></span>
        </div>
        <div className="leftSide">
          <span className="Header_Lable">
            Services
          </span>
          <div>
            <span className="Body_Context sixteyO">
              My structured web development process includes discovery, planning, design, development, testing, launch, and maintenance. I prioritize keeping my clients informed and involved to deliver a high-quality websites that reflects their brand and helps their business to thrive online,
            </span>
            <span className="Body_Context sixteyO">
              Visually appealing and responsive interface designs for websites and applications that provide a seamless user experience across different screens and devices,
            </span>
            <span className="Body_Context sixteyO">
              I offer frontend development services, create modern and responsive user interfaces for websites and applications.
            </span>
          </div>
          <div className="skills_wrap">
            <span>ReactJS</span>
            <span className='x'>NodeJS</span>
            <span>ElectronJS</span>
            <span className='y'>SCSS</span>
            <span>JS ES6</span>
            <span className='dm'>Responsive design</span>
            <span>Webpack</span>
            <span className='de'>Design systems</span>
            <span>Figma</span>
          </div>
        </div>
      </section>
      <footer>
        <span className="A_Link_01 sixteyO">
          ©2023 Divesh Chauhan
        </span>
        <div className="links">
          <span className="A_Link_02">LinkedIn<img src="../MoaazAlla/res/socialLink.svg" alt="" /></span><span className='Break_Line_v'></span>
          <span className="A_Link_02">Github<img src="../MoaazAlla/res/socialLink.svg" alt="" /></span><span className='Break_Line_v'></span>
          <span className="A_Link_02">Instagram<img src="../MoaazAlla/res/socialLink.svg" alt="" /></span>
        </div>
      </footer>
    </div>
  )
}

export default App

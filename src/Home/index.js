import React from "react";
import{
  ScrollContainer, 
  ScrollPage, 
  Animator,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from 'react-scroll-motion';
  import './style.css'
  import headerImage from "../img/my-image.png"
  import projectOne from '../img/project-1.png'
  import projectTwo from '../img/project-2.png'
  import projectThree from '../img/project-3.png'
  import aboutMe from '../img/aboutMe.png'


const Home = () => {

  const ZoomInScrollOut = batch (StickyIn(), FadeIn(), ZoomIn())

  const work = [
    {
      name: "Project 1",
      Link: '#',
      imageSrc: projectOne
    },
    {
      name: "Project 2",
      Link: '#',
      imageSrc: projectTwo
    },
    {
      name: "Project 3",
      Link: '#',
      imageSrc: projectThree
    }

  ]
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
         <div className="image-container">
          <img src={headerImage} alt="header"/>
          <div className="black-background"></div>
         </div>
        </Animator>
         <Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 0))}>
          <div className="name">
            <h2 className="first">
              Shivangi 
            </h2>
          </div>
         </Animator>
         
         <Animator animation={batch(Fade(), Sticky(), MoveOut(-1650, 0))}>
          <div className="name">
            <h2 className="last">
              Khandelwal
            </h2>
          </div>
         </Animator>

         <Animator animation={batch(Fade(), Sticky(), MoveOut(-100, 100))}>
          <div className="position">
            <div></div>
            <h2 className="last">
              UI/UX Desiger 
            </h2>
          </div>
         </Animator>
      </ScrollPage>


     {/* section-2 */}


    <ScrollPage page={1}>
     <Animator animation={ZoomInScrollOut}>
      <div className="section-title">
       Portfolio
      </div>
     </Animator>
    </ScrollPage>
    

    <ScrollPage page={2}>
      <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
        <div className="portfolio-content">
        {
         work?.map((work) => {
         return(
          <a href={work?.link} target="_blank" key={work?.name}>
           <div className="portfolio-card"> 
            <div className="portfolio-image">
               <img src={work?.imageSrc} alt={work?.name}/>
            </div>
              <div className="portfolio-title">
               <h3>
                {work?.name}
               </h3>
              </div>
             <div className="count">
             
             </div>
           </div>
          </a>
          )
         })
        }
        </div>
      </Animator>
     </ScrollPage>



     {/* section-3 */}


     <ScrollPage page={3}>
     <Animator animation={ZoomInScrollOut}>
      <div className="section-title-about">
       About Me
      </div>
     </Animator>
    </ScrollPage>

    <ScrollPage page={4}>
      <Animator animation={batch(Fade(), Sticky(), MoveOut(-1000, -400))}>
        <div className="background-image-container">
           <img src={aboutMe} alt="my picture"/>
            <div className="black-background"></div>
        </div>
      </Animator>
       <Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 500))}>
        <div className="details">
         <h2 className="hello"> Hello</h2>
          <p className="bio">
          The visual experience of the user is the center of UI design. It determines how a user interacts with an interface, whether that interface is an app, a video game, or a website. Infographic helps to provide informations with the help of illustrations.</p>

          <p className="bio">
          Provide direction on how to put UX research tools and testing activities in place to assess user behaviour. To better understand user demands, identify target user groups and conduct interviews. Comprehend product requirements as well as user psychology to forecast what would work best for both.
          </p>

          <p className="bio">
          Perform user interface testing on CTAs, layouts, target links, landing pages, and banners, among other things . Provide direction on how to put UX research methodologies and testing activities in place to assess user behavior.
          </p>
          
        </div>
       </Animator>
    </ScrollPage>
</ScrollContainer>
  )
}

export default Home
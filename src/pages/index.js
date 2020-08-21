import React from "react"
import "../styles/global.css"
import SubscribeForm from "../SubscribeForm.js"

const IndexPage = () => (
  <main>
    <div>
      <div className="navbar" id="top">
        <a className="nav-link" href="#about">
          About
        </a>
        <a className="nav-link" href="#subscribe">
          Subscribe
        </a>
        <a className="nav-link" href="#projects">
          Projects
        </a>
        <a className="nav-link" href="#team">
          Team
        </a>
        <a className="nav-link" href="#contact">
          Contact
        </a>
        <a className="nav-link" href="#partners">
          Partners
        </a>
      </div>

      <div className="top-banner">
        <img id="logo-pic" src={"Octavia Final Logo.png"} alt="logo" />
      </div>
      <h1>Spatial: The Next Generation</h1>

      <h2 id="about">
          About Octavia
      </h2>
        <div className="demo-vid">
          <iframe src="https://player.vimeo.com/video/447367776"
            frameBorder="0" allow="autoplay; fullscreen"
            allowFullScreen></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
        <h2 id="subscribe">Join Our Mailing List</h2>

        <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css" />
        <div id="mc_embed_signup">
          <form action="https://github.us17.list-manage.com/subscribe/post?u=7b08e15e5a660a7041f6f0f6f&amp;id=822e3eff4c"
            method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank"
            noValidate>
            <div id="mc_embed_signup_scroll">
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL">Email Address </label>
                <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
              </div>
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response"></div>
                <div className="response" id="mce-success-response"></div>
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-NAME">Name </label>
                <input type="text" name="FNAME" tabIndex="-1" value="" />
              </div>
              <div className="clear">
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
              </div>
            </div>
          </form>
          <SubscribeForm/>
        </div>

        <h2 id="projects">Projects</h2>

        <div className="stampin" id="work">
          <img id="stampin-gif" src={"Stampin.gif"} />
          <div id="stampin-button">
            <h3>Exodus</h3>
          </div>
        </div>
        <div id="modalStampin" className="modal">
          <span className="close closeStampin">&times;</span>
          <div className="modal-content">
            <p>
              Please wait while the experience loads
            </p>
            <iframe src={"https://octaviaxr.github.io/stampin-webar/"} width="100%" height="500px">
            </iframe>
          </div>
        </div>

        <h2 id="team">Team</h2>
        <div className="team">
          <div className="person" id="doug">
            <h3>
              Douglass Goldstein
            </h3>
            <img src={"Doug.png"} />
          </div>
          <div id="modalDoug" className="modal">
            <span className="close closeDoug">&times;</span>
            <div className="modal-content">
              <p>
                Douglas Jay Goldstein is a NY native creative technologist,
                immersive designer, and virtual producer. He is currently enrolled
                at ITP, Tisch NYU, where he focuses on mixed-reality storytelling &amp;
                experience production at the intersection of gaming , music, cinema,
                and theater. Beyond his work in the new media space, Douglas brings
                to his practice over a decade of professional experience as a
                recording artist, performer, writer, and banjoist.
              </p>
            </div>
          </div>

          <div className="person" id="maryanne">
            <h3>
              MaryAnn Talverna
            </h3>
            <img src={"Maryann.png"} />
          </div>
          <div id="modalMaryanne" className="modal">
            <span className="close closeMaryanne">&times;</span>
            <div className="modal-content">
              <p>
                MaryAnn Talverna is a creative technologist, filmmaker, and polyglot
                with a love for storytelling and travel. She is studying immersive
                media, XR, and virtual production in the Interactive
                Telecommunications Program(ITP) at New York University’s Tisch
                School of the Arts. In addition to graduate school, MaryAnn works as
                the Associate Director of Recruitment in the Office of Special
                Programs at Tisch. Before joining Special Programs, she worked in
                the Professional Prizes department at Columbia University’s Graduate
                School of Journalism.
              </p>
            </div>
          </div>

          <div className="person" id="marcel">
            <h3>
              Marcel Truxillo
            </h3>
            <img src={`Marcel.png`} />
          </div>
          <div id="modalMarcel" className="modal">
            <span className="close closeMarcel">&times;</span>
            <div className="modal-content">
              <p>
                Marcel Truxillo has a background in experimental theater in New
                Orleans. It is there that began eir love of masks, character design,
                and performance. These skills have transcended into the world of new
                technology in the form of motion capture, augmented costuming, and
                avatar creation. Marcel, additionally, carries skills in machine
                learning, VR filmmaking, visual design, and musical composition.
              </p>
            </div>
          </div>

          <div className="person" id="jess">
            <h3>
              Jess Chase
            </h3>
            <img src={`Jess.png`} />
          </div>
          <div id="modalJess" className="modal">
            <span className="close closeJess">&times;</span>
            <div className="modal-content">
              <p>
                Jess Chase is a creative technologist, singer-songwriter,
                multi-instrumentalist, producer &amp; audio engineer. She just completed
                her M.S from IDM, Tandon School of Engineering, NYU. She is the
                founder of Womxnin, an initiative for female leadership in music and
                technology
              </p>
            </div>
          </div>

          <div className="person" id="pippa">
            <h3>
              Pippa Kelmenson
            </h3>
            <img src={`Pip.png`} />
          </div>
          <div id="modalPippa" className="modal">
            <span className="close closePippa">&times;</span>
            <div className="modal-content">
              <p>
                Pippa Kelmenson is a creative technologist with a background in
                experimental and electronic music, who uses interaction design as an
                art form for project development. Her ambitious projects have
                allowed her to question the role of participation in immersive
                system design, and to delve into the process of bringing
                multi-sensory visions to life. She is currently enrolled in the
                Interactive Telecommunications Program at Tisch, NYU, where she
                focuses on design, programming, and fabrication.
              </p>
            </div>
          </div>

          <div className="person" id="yiting">
            <h3>
              Yiting Liu
            </h3>
            <img src={`yiting.png`} />
          </div>
          <div id="modalYiting" className="modal">
            <span className="close closeYiting">&times;</span>
            <div className="modal-content">
              <p>
                Yiting Liu is a creative technologist who focuses on XR development
                and music production to foster meaningful interactions. She creates
                absurd environments to introduce a new perspective for people to
                experience. Her recent work Toilet Paper Mania creates a VR toilet
                paper museum that invites people to reflect on their change of
                behaviors during COVID-19. She has also performed some of her music
                for the Network Music Festival in July 2020. Portfolio:
                https://yitingliu.com/
              </p>
            </div>
          </div>

          <div className="person" id="max">
            <h3>
              Max Horwich
            </h3>
            <img src={`max.png`} />
          </div>
          <div id="modalMax" className="modal">
            <span className="close closeMax">&times;</span>
            <div className="modal-content">
              <p>
                Max Horwich is a musician, designer, educator and creative
                technologist.
              </p>
            </div>
          </div>

          <div className="person" id="zack">
            <h3>
              Zack Lee
            </h3>
            <img src={`Zack.png`} />
          </div>
          <div id="modalZack" className="modal">
            <span className="close closeZack">&times;</span>
            <div className="modal-content">
              <p>
                Zack Lee is a developer and creative technologist. <br/>
                <a href="https://www.linkedin.com/in/cuinjune/">Connect with him on LinkedIn</a>
              </p>
            </div>
          </div>
        </div>

        <h2 id="contact">
          Contact Octavia
        </h2>

        <div className="contact">
          <form action="action_page.php">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" />

            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Your email address" />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Write something.." ></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>

        <h2 id="partners">Affiliates &amp; Partners</h2>

        <div className="partners">
          <img className="partner-logo" src={`logo__Mach1.jpg`} />
          <img className="partner-logo" src={`logo__NYCmediaLab.png`} />
          <img className="partner-logo" src={`logo___BoseAR.png`} />
          <img className="partner-logo" src={`logo__Ascap.jpg`} />
          <img className="partner-logo" src={`logo___ITP.png`} />
        </div>
    </div>
    <footer>
      <a id="bottom-link" href="#top">
        Back to top
      </a>
    </footer>
  </main>
);

export default IndexPage;
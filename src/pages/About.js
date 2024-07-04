// src/pages/About.js
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>Welcome to [Your Blog Name]!</p>

      <p>
        At [Your Blog Name], we believe in the power of stories and the impact
        of sharing knowledge. Our blog is a diverse space where personal
        experiences meet professional expertise, offering our readers a rich
        blend of content designed to inspire, inform, and entertain.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to create a community where readers can find valuable
        insights, share their own experiences, and engage in meaningful
        discussions. We aim to provide high-quality content that covers a wide
        range of topics, from personal stories and how-to guides to product
        reviews and opinion pieces.
      </p>

      {/* <h2>Meet the Team</h2>




      <h3>[Your Name]</h3>
      <p>
        <em>Founder & Chief Editor</em>
      </p>
      <p>
        As the founder of [Your Blog Name], I started this blog with a passion
        for storytelling and a desire to connect with like-minded individuals.
        With a background in [Your Background], I bring a unique perspective
        to the blog, ensuring that our content is both engaging and
        informative.
      </p>



      <h3>[Team Member Name]</h3>
      <p>
        <em>Content Writer & Researcher</em>
      </p>
      <p>
        With a keen eye for detail and a knack for research, [Team Member
        Name] is our go-to person for in-depth articles and insightful guides.
        Their expertise in [Team Member's Expertise] ensures that our readers
        always get accurate and up-to-date information.
      </p>

      <h3>[Team Member Name]</h3>
      <p>
        <em>Guest Contributor</em>
      </p>
      <p>
        We are thrilled to have [Team Member Name] as a regular guest
        contributor. Their diverse experiences and unique voice add depth and
        variety to our content, enriching the blog with fresh perspectives.
      </p> */}

      <div class="testimonial-container">
        <div class="testimonial-content">
          <h2 class="testimonial-title">
            Meet the Team
          </h2>
          <div class="testimonial-grid">
            <div class="testimonial-card">
              <div class="testimonial-avatar">
                <img src="#" />
              </div>
              <div class="testimonial-details">
                <h3 class="testimonial-name">
                  [Your Name]
                </h3>
                <p class="testimonial-desc">
                  <em>Founder & Chief Editor</em>
                </p>
                <div class="testimonial-text">
                  As the founder of [Your Blog Name], I started this blog with a passion
                  for storytelling and a desire to connect with like-minded individuals.
                  With a background in [Your Background], I bring a unique perspective
                  to the blog, ensuring that our content is both engaging and
                  informative.
                </div>
              </div>
            </div>
            <div class="testimonial-card">
              <div class="testimonial-avatar">
                <img src="#" />
              </div>
              <div class="testimonial-details">
                <h3 class="testimonial-name">
                  [Team Member Name]
                </h3>
                <p class="testimonial-desc">
                  <em>Content Writer & Researcher</em>
                </p>
                <div class="testimonial-text">
                  With a keen eye for detail and a knack for research, [Team Member
                  Name] is our go-to person for in-depth articles and insightful guides.
                  Their expertise in [Team Member's Expertise] ensures that our readers
                  always get accurate and up-to-date information.
                </div>
              </div>
            </div>

            <div class="testimonial-card">
              <div class="testimonial-avatar">
                <img src="#" />
              </div>
              <div class="testimonial-details">
                <h3 class="testimonial-name">
                  [Team Member Name]
                </h3>
                <p class="testimonial-desc">
                  <em>Content Writer & Researcher</em>
                </p>
                <div class="testimonial-text">
                  We are thrilled to have [Team Member Name] as a regular guest
                  contributor. Their diverse experiences and unique voice add depth and
                  variety to our content, enriching the blog with fresh perspectives.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <h2>What We Offer</h2>
      <ul>
        <li>
          <strong>Personal Stories</strong>: Our personal stories section is
          filled with real-life experiences, anecdotes, and reflections that
          resonate with our readers on a personal level.
        </li>
        <li>
          <strong>How-To Guides</strong>: From DIY projects to tech tutorials,
          our how-to guides are designed to help you navigate through various
          tasks with ease.
        </li>
        <li>
          <strong>Product Reviews</strong>: Honest and comprehensive reviews
          of products related to our blog’s niche, helping you make informed
          decisions.
        </li>
        <li>
          <strong>Opinion Pieces</strong>: Our opinion pieces reflect our
          thoughts on current events, industry trends, and various topics that
          matter to us and our readers.
        </li>
        <li>
          <strong>Guest Posts</strong>: We welcome contributions from guest
          writers, providing diverse viewpoints and expanding the breadth of
          our content.
        </li>
      </ul> */}

      <h2>What We Offer</h2>
      <div class="faq">
        <ul class="accordion">
          <li>
            <input type="radio" name="accordion" id="first" />
            <label for="first">Personal Stories</label>
            <div class="content">
              <p>Our personal stories section is
                filled with real-life experiences, anecdotes, and reflections that
                resonate with our readers on a personal level.
              </p>
            </div>
          </li>

          <li>
            <input type="radio" name="accordion" id="second" />
            <label for="second">How To Guides</label>
            <div class="content">
              <p>From DIY projects to tech tutorials,
                our how-to guides are designed to help you navigate through various
                tasks with ease.
              </p>
            </div>
          </li>

          <li>
            <input type="radio" name="accordion" id="third" />
            <label for="third">Product Reviews</label>
            <div class="content">
              <p> Honest and comprehensive reviews
                of products related to our blog’s niche, helping you make informed
                decisions.
              </p>
            </div>
          </li>

          <li>
            <input type="radio" name="accordion" id="fourth" />
            <label for="fourth">Opinion Pieces</label>
            <div class="content">
              <p> Our opinion pieces reflect our
                thoughts on current events, industry trends, and various topics that
                matter to us and our readers.
              </p>
            </div>
          </li>

          <li>
            <input type="radio" name="accordion" id="fifth" />
            <label for="fifth">Guest Post</label>
            <div class="content">
              <p>  We welcome contributions from guest
                writers, providing diverse viewpoints and expanding the breadth of
                our content.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <h2>Join Our Community</h2>
      <p>
        We invite you to become a part of our growing community. Subscribe to
        our newsletter to stay updated with the latest posts, leave comments
        to share your thoughts, and follow us on social media to connect with
        us and other readers.
      </p>

      <p>
        Thank you for visiting [Your Blog Name]. We hope you enjoy your stay
        and find our content valuable and inspiring!
      </p>

      <p>Warm regards,</p>

      <p>
        [Your Name]
        <br />
        Founder & Chief Editor, [Your Blog Name]
      </p>
    </div>
  );
};

export default About;

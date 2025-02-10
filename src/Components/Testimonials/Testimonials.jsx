import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();

  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translate(${tx}%)`;
  };

  const slideBackword = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translate(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        onClick={slideBackword}
        alt=""
        className="back-btn"
      />
      <div class="slider">
        <ul ref={slider}>
          <li>
            <div class="slide">
              <div class="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Sophia Martinez</h3>
                  <span>Eduvista, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Eduvista was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>

          <li>
            <div class="slide">
              <div class="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Eduvista, USA</span>
                </div>
              </div>
              <p>
                Joining Eduvista has been an incredible journey. The vibrant
                campus, exceptional educators, and endless opportunities have
                inspired me to aim higher and turn my dreams into reality with
                confidence and determination.
              </p>
            </div>
          </li>

          <li>
            <div class="slide">
              <div class="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Emily Carter</h3>
                  <span>Eduvista, USA</span>
                </div>
              </div>
              <p>
                Studying at Eduvista has been transformative. The supportive
                faculty, excellent resources, and welcoming atmosphere have
                equipped me with the skills and confidence to excel in academics
                and grow personally.
              </p>
            </div>
          </li>

          <li>
            <div class="slide">
              <div class="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Ethan Collins</h3>
                  <span>Eduvista, USA</span>
                </div>
              </div>
              <p>
              Eduvista has exceeded my expectations. The knowledgeable professors, modern facilities, and supportive community have given me the resources and confidence to succeed academically and personally.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;

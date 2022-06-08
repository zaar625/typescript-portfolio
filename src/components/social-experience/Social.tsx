import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Pagination, Autoplay } from 'swiper';
import { experience } from '../../assets/index';
import { work_description } from '../../configs/sidebarNav';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import './social.scss';
import LoadingSpinner from 'components/spinner/Spinner';

// types

interface Props {
  index: number;
}
export const Description = ({ index }: Props) => {
  const work = work_description[index];

  return index !== undefined ? (
    <div className="des">
      <div className="des__header">
        <div className="des__header__title">
          <h2>{work.title}</h2>
          <span>{work.date}</span>
        </div>
        <div className="des__header__depart">{work.department}</div>
      </div>
      <div className="des__contents">
        <div className="des__contents__key">
          <h4>Key Work</h4>
          <div>
            {work.keywork.map((keywork, index) => (
              <span key={index}>{keywork}</span>
            ))}
          </div>
        </div>
        <div className="des__contents__detail">
          <h4>Work Detail</h4>
          <ul>
            {work.workdetail.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <LoadingSpinner />
  );
};

const Social = () => {
  const [index, setIndex] = useState<number>(0);

  return (
    <div className="social col-7 col-md-12 cardstyle">
      <div className="title">Social Experience</div>
      <div className="social-container ">
        <div className="social__img">
          <Swiper
            modules={[Navigation, Thumbs, Pagination, Autoplay]}
            loop={true}
            autoplay={false}
            pagination={{ clickable: true }}
            spaceBetween={10}
            navigation={false}
            grabCursor={true}
            onSlideChange={(index) => setIndex(index.realIndex)}
          >
            {experience.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={item} alt="experience images" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <Description index={index} />
      </div>
      <a
        href="https://www.notion.so/53cbdd5bcc60459c974d9c2f8394a24b?v=ccf635c8ec82423e82a11b3e6ca57285"
        target="_blank"
        rel="noreferrer"
      >
        View more <i className="bx bx-right-arrow-alt"></i>
      </a>
    </div>
  );
};

export default Social;

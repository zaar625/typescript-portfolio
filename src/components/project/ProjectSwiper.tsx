import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Navigation } from 'swiper';
import { projectImages, projectSmallImages } from '../../assets';
import { project_description } from '../../configs/sidebarNav';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './project-swiper.scss';

interface Props {
  index: number;
}

const ProjectSwiper = () => {
  const [activeThumb, setActiveThumb] = useState<any>();
  const [index, setIndex] = useState<number>(0);
  return (
    <>
      <div className="project-swiper__img col-6 col-md-12 ">
        <div className="project-swiper__img__box col-9">
          <h1>Personal Portfolio</h1>
          <Swiper
            loop={false}
            spaceBetween={10}
            navigation={false}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            thumbs={{ swiper: activeThumb }}
            className="project-images-slider"
            onSlideChange={(index) => setIndex(index.realIndex)}
          >
            {projectImages.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item} alt="product images" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="pageNav">
            {index + 1}/{projectImages.length}
          </div>
        </div>
        <Swiper
          onSwiper={setActiveThumb}
          loop={false}
          direction="vertical"
          spaceBetween={10}
          slidesPerView={4}
          modules={[Navigation, Thumbs]}
          className="project-images-slider-thumbs col-2"
        >
          {projectSmallImages.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="product-images-slider-thumbs-wrapper">
                <img src={item} alt="product images" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="col-5 col-md-12">
        <ProjectDescription index={index} />
      </div>
    </>
  );
};
const ProjectDescription = (props: Props) => {
  const projdectIndex = project_description[props.index];

  return (
    <>
      <div className="ProjectDescription">
        {projdectIndex !== undefined ? (
          <div className="ProjectDescription__content">
            <div className="ProjectDescription__content__intro">
              <h2 className="">{projdectIndex.title}</h2>
              <p>{projdectIndex.des}</p>
            </div>
            <div className="ProjectDescription__content__skills">
              <h3>Use Skill</h3>
              <div>
                {projdectIndex.skill.map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </div>
            </div>
            <div className="ProjectDescription__content__fuc">
              <h3>Detail</h3>
              {projdectIndex.fuc.map((item, index) => (
                <div key={index}>
                  <h4>
                    <i className="bx bx-check-square"></i>
                    {item.title}
                  </h4>
                  <p>{item.des}</p>
                </div>
              ))}
            </div>
            <div className="ProjectDescription__content__links">
              <a
                target="_blank"
                rel="noreferrer"
                href={projdectIndex.url.github}
              >
                Github <i className="bx bx-right-arrow-alt"></i>
              </a>
              <a target="_blank" rel="noreferrer" href={projdectIndex.url.site}>
                View Site <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
          </div>
        ) : (
          '로딩중'
        )}
      </div>
    </>
  );
};

export default ProjectSwiper;

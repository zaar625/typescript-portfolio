/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useEffect } from 'react';

import './contactmap.scss';

declare global {
  interface Window {
    kakao: any;
  }
}

const ContactMap = () => {
  const { kakao } = window;

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.475875, 126.976887),
      level: 3,
      scrollwheel: false,
    };
    // 마커이미지 가져오기
    const imageSrc = require('../../assets/images/map-solid-24.png'), // 마커이미지의 주소
      imageSize = new kakao.maps.Size(30, 30), // 마커이미지의 크기
      imageOption = { offset: new kakao.maps.Point(27, 69) }; //마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정

    const map = new kakao.maps.Map(container, options);
    const markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption,
    );
    const markerPosition = new kakao.maps.LatLng(37.475875, 126.976887); //마커가 표시될 위치

    // 마커생성
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });

    marker.setMap(map);

    const iwContent = `
    <div style="background-color: var(--main-color); border-radius:10px;">
      <div style="padding:10px; color:var(--txt-color); display:flex; flex-direction:column; gap:5px;">
        <p style="font-weight:bold";>Hello! Here is me</p>
        <p> Gwanak-gu.Seoul.Korea</p>
      </div>
    </div>
    `, //
      iwPosition = new kakao.maps.LatLng(37.475675, 126.976785); // 표시 위치

    // 커스텀 오버레이를 생성
    const customOverlay = new kakao.maps.CustomOverlay({
      position: iwPosition,
      content: iwContent,
      xAnchor: 0.3,
      yAnchor: 0.91,
    });

    // 커스텀 오버레이를 지도에 표시합
    customOverlay.setMap(map);
  }, []);

  return (
    <div className="map-container ">
      <div className="map" id="map"></div>
    </div>
  );
};

export default ContactMap;

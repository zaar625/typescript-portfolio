import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import './modal.scss';

interface Props {
  pop: React.RefObject<HTMLDivElement>;
}

const Modal = () => {
  const pop = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!document.cookie.includes('pop=ondDay')) {
      pop.current?.classList.add('on');
    }
  }, []);

  return (
    <div ref={pop} className="modal">
      <ModalContent pop={pop} />
    </div>
  );
};
export const ModalContent = (props: Props) => {
  const popupCheck = useRef<HTMLInputElement>(null);
  function closePop() {
    if (popupCheck.current?.checked) {
      document.cookie = 'pop=ondDay; path=/; max-age=86400';
    } else {
      document.cookie = 'pop=ondDay; path=/; max-age=-1';
    }
    props.pop.current?.classList.remove('on');
    props.pop.current?.classList.add('off');
  }

  return (
    <div className={`modal__container ${props.pop ? 'col-5' : 'col-12'}`}>
      <div className="modal__container__contents">
        {props.pop ? (
          <div className="modal__container__contents__intro">
            <p>
              담당자님. 안녕하세요! <br />
              React.js + Typescript를 활용한 저의 웹 포트폴리오 사이트를 방문해
              주셔서 감사합니다.!
            </p>
            <p>
              여태까지 배운 내용들을 최대한 해당 포트폴리오에 담고자
              노력하였습니다.
            </p>
            <div></div>
          </div>
        ) : (
          ''
        )}
        <ul className="modal__container__contents__list">
          <li>
            <p>
              1. 포트폴리오의 제작과정인 디자인과 기능구현에 대한 자세한 안내
              페이지는 아래 가이드 버튼을 클릭하시면 보실 수 있습니다.
            </p>
            <a
              className="linkBtn"
              target="_blank"
              rel="noreferrer"
              href="https://www.figma.com/file/c95VmYMc5bji4E48BcPk4S/Untitled?node-id=258%3A14"
              title="React.js를 활용한 포트폴리오 사이트 안내 페이지 바로가기"
            >
              Guide
              <i className="bx bx-right-arrow-alt"></i>
            </a>
          </li>
          <li>
            <p>
              2. 해당 사이트의 깃허브도 공개하였으니, 제가 작성한 코드도 확인
              가능합니다.
            </p>
            <a
              className="linkBtn"
              href="https://github.com/zaar625"
              target="_black"
            >
              Go
              <i className="bx bx-right-arrow-alt"></i>
            </a>
          </li>
          <li>
            <p>
              3. 아울러 제가 공부한 내용이나 이력서는 노션으로 정리되어 있으니
              참고해주시면 감사하겠습니다.
            </p>
            <a
              className="linkBtn"
              target="_blank"
              rel="noreferrer"
              href="https://www.notion.so/I-AM-0dcdf68786ee4e219f1638eb8609be2e"
              title="notion 이력서 바로가기"
            >
              Go
              <i className="bx bx-right-arrow-alt"></i>
            </a>
          </li>
        </ul>
      </div>
      {props.pop ? (
        <div className="modal__container__check">
          <label htmlFor="popupCheck">
            하루 동안 안 보기
            <input
              ref={popupCheck}
              type="checkbox"
              id="popupCheck"
              tabIndex={0}
              // onKeyDown={(e) => {
              //   if (e.key === 'Enter') e.target.click();
              // }}
            />
          </label>
          <button onClick={closePop} className="close">
            닫기
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Modal;

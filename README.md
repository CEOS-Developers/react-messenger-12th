## 2주차 미션: React-Messenger💌

---

### 서론

---

안녕하세요 12기 프론트엔드 운영진 고은입니다😆

2주차부터는, React를 사용하여 미션을 진행해주시면 되는데요, 리액트 첫 미션인 만큼 React 자체에 익숙해지기 위한 시간을 가져보시게 될거에요!

또한 1주차에서 사용해봤던 바닐라 JS의 불편함이라고 할 수 있는 점들을 리액트가 어떻게 해결하는지 직접 코드를 짜보면서 알아보면서 리액트의 컨셉을 전체적으로 이해하시면 좋을 것 같습니다~

2주차 미션 마감일시는 2020년 9월 25일 금요일까지입니다.

진행 중 어려운 상황이 있다면, 우선 스스로 공부하고 찾아보시구

너무 해결이 안된다 싶으면 슬랙의 qna채널에 올려주시면 됩니다~~

PR 보내실땐 양식 맞춰주시고, 이번주 부터는 now로 배포한 링크까지 PR 보내주실때 링크 첨부해주세요~~

12기분들 너무 멋져요!! 이번주도 화이팅✨

---

## 미션

---

#### 미션목표

---

- React의 기초를 이해한다.
- useState로 컴포넌트의 상태를 관리할 수 있게된다.
- useEffect의 사용법을 이해한다.

### 기한

---

- 2020년 9월 25일(금)까지

### Key Questions?

---

- Virtual DOM이 무엇일까요?
  A. 리액트는 Virtual DOM 방식을 사용하여 DOM 업데이트를 추상화함으로써 DOM 처리 횟수를 최소화하고 효율적으로 진행한다.
  Virtual DOM을 사용하면 실제 DOM에 접근하여 조작하는 대신 이를 추상화한 자바스크립트 객체를 구성하여 사용한다. DOM의 가벼운 사본과 비슷하다.
  리액트에서 데이터가 변하여 웹 브라우저에 실제 DOM을 업데이트할 때는 다음 세 절차를 밟는다.

  1.  데이터를 업데이트하면 전체 UI를 Virtual DOM에 리렌더링한다.
  2.  이전 Virtual DOM에 있던 내용과 현재 내용을 비교한다.
  3.  바뀐 부분만 실제 DOM에 적용한다.

  리액트 매뉴얼
  "우리는 다음 문제를 해결하려고 리액트를 만들었습니다.
  지속적으로 데이터가 변화하는 대규모 어플리케이션 구축하기."

  리액트와 Virtual DOM이 언제나 제공할 수 있는 것은 바로 업데이트 처리 간결성이다. UI를 업데이트하는 과정에서 생기는 복잡함을 모두 해소하고 쉽게 업데이트할 수 있다.  
   출처 : 리액트를 다루는 기술

- 미션을 진행하면서 느낀, 리액트를 사용하는 장점이 있었다면?
  A. 바닐라 JS 를 이용할 때는 DOM에 접근하는게 복잡하고 번거로웠는데 REACT에서는 그것이 간편해서 좋았다.
  그리고 state를 이용해 변수를 관리할 수 있다는 것도 편리했다.

- 리액트에서는 상태를 어떻게 관리할까요?
  A. useState를 이용해 선언하고 setState를 이용해 업데이트한다. 추가로 child component에서 parent component의 state를 접근할 때는 props를 이용한다.

- styled-components 사용후기 (CSS와 비교)
  A. 컴포넌트 단위로 CSS를 적용할 수 있으니 가독성이 높고, 재사용하기 쉽다.
  사용할 때도 컴포넌트 단위로 쓰니 기존 컴포넌트들과 일관성을 줄 수 있다.
  props를 이용해 조건, 상황에 따라 CSS를 다르게 적용할 수 있다.

### 어려웠던 점

- parent component의 state를 child component에서 접근, 수정하기.
  -> props를 이용해서 state, update-state-function을 child component로 넘겨준다.
- CSS.. (element를 양 끝에 배치시키기, header 위치 고정시키기 등...)

### 코드 리뷰를 통해 배운 점

- flex-direction : row-reverse
  -> element 뒤집기
- props, 삼항 연산자를 이용해 코드 중복 줄이기.
- styled-component에 props를 줘서 조건에 따라 CSS 다르게 구성하기.

### 필수 요건

---

- 함수형 컴포넌트를 사용한다.
- styled-component를 이용하여 스타일링 한다.
- 상단바에 메시지를 보내는 사람의 프로필을 띄운다. + 상단바의 프로필로 메시지 발신자를 바꿀 수 있게 한다.

  (user: true는 은, user:false는 시원으로 고정됨)

- 공백메시지는 입력되지 않도록 핸들링 한다. + alert 메세지 띄우기
- 메시지 전송후 입력칸을 비워준다.
- 메시지 전송후 스크롤을 밑으로 내려준다. (Hint : useEffect + scrollBy 이용)
- 컴포넌트 이름을 역할이 잘 드러나게 짓는다.
- 개발자도구에서 Style을 복사하지말고, 직접 styled-components를 사용하여 만드는 연습을 한다ㅠㅠ.
- [결과 화면](https://react-messenger.eun-ko.vercel.app)을 구현한다.

## 로컬 실행방법

---

`npm start` : 로컬에서 react application을 자동으로 리로드하여 실행시켜줍니다.

## 배포 방법

---

- now에 회원가입하고 now를 설치합니다.

1. https://zeit.co 에서 회원가입합니다.
2. 터미널에서 `npm i -g now`를 입력해 now를 글로벌로 설치합니다.
3. 명령 프롬프트에서 프로젝트 폴더에 들어간 후 now를 입력합니다.
4. ID/PW를 입력합니다.
5. zeit 가입시 입력한 이메일에서 인증 링크를 클릭합니다. <인증완료>
6. 다시 프로젝트 폴더에서 `now`를 입력하면 자동으로 생성된 url에 배포됩니다!

## 링크 및 참고자료

---

- [create react app (CRA)](https://create-react-app.dev/docs/getting-started/)
- [리액트 docs 주요 개념 1-12](https://ko.reactjs.org/docs/hello-world.html)
- [리액트 docs Hook 1-3](https://ko.reactjs.org/docs/hooks-intro.html)
- [컴포넌트 네이밍을 위한 자바스크립트 네이밍 컨벤션](https://ui.toast.com/fe-guide/ko_CODING-CONVENSION/#%EB%AA%85%EB%AA%85-%EA%B7%9C%EC%B9%99)
- [useState, useEffect hooks](https://velog.io/@velopert/react-hooks#1-usestate)
- [styled-component](https://styled-components.com/docs/basics#getting-started)

# CEOS Front-end 2주차 미션: React-Messenger💌

## 미션목표

---

- React의 기초를 이해한다.
- useState로 컴포넌트의 상태를 관리할 수 있게된다.
- useEffect의 사용법을 이해한다.

---

## 결과화면

![image](./messenger.gif)

### Key Questions?

---

- Virtual DOM이 무엇일까요?
- 미션을 진행하면서 느낀, 리액트를 사용하는 장점이 있었다면?
- 리액트에서는 상태를 어떻게 관리할까요?
- styled-components 사용후기 (CSS와 비교)

### Key Question Answer

- https://www.notion.so/2-7de44d52c9f44c8ebf1ed236f9cc277f

### 구현시 고려한 요건

---

- 함수형 컴포넌트를 사용한다.
- styled-component를 이용하여 스타일링 한다.
- 상단바에 메시지를 보내는 사람의 프로필을 띄운다. + 상단바의 프로필로 메시지 발신자를 바꿀 수 있게 한다.

  (user: true는 은, user:false는 시원으로 고정됨)

- 공백메시지는 입력되지 않도록 핸들링 한다. + alert 메세지 띄우기
- 메시지 전송후 입력칸을 비워준다.
- 메시지 전송후 스크롤을 밑으로 내려준다. (Hint : useEffect + scrollBy 이용)
- 컴포넌트 이름을 역할이 잘 드러나게 짓는다.

### 공부 및 참고한 자료

---

- [create react app (CRA)](https://create-react-app.dev/docs/getting-started/)
- [리액트 docs 주요 개념 1-12](https://ko.reactjs.org/docs/hello-world.html)
- [리액트 docs Hook 1-3](https://ko.reactjs.org/docs/hooks-intro.html)
- [컴포넌트 네이밍을 위한 자바스크립트 네이밍 컨벤션](https://ui.toast.com/fe-guide/ko_CODING-CONVENSION/#%EB%AA%85%EB%AA%85-%EA%B7%9C%EC%B9%99)
- [useState, useEffect hooks](https://velog.io/@velopert/react-hooks#1-usestate)
- [styled-component](https://styled-components.com/docs/basics#getting-started)

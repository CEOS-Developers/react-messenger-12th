## CEOS 2주차 스터디

- 미션 링크: https://react-messenger-12th.wody27.vercel.app
- [미션을 통해 배운점, 힘들었던 점](#미션을-통해-배운점,-힘들었던-점)
- [Key Questions](#Key-Questions)



### 미션을 통해 배운점, 힘들었던 점

#### 새롭게 알게 된 점

- [Props, State, JSX 문법](https://github.com/wody27/TIL/blob/master/React기초.md)

- scrollBy 이용하기

  ```javascript
  // scroll down
  window.scrollBy(0, window.innerHeight);
  
  // scroll up
  window.scrollBy(0, -window.innerHeight);
  ```

- 상단 바, 하단 바 고정시키기 

  ```css
  position: fixed;
  bottom: 0;
  width: 100%
  ```

- styleComponent공부

  [밸로퍼트 블로그](https://react.vlpt.us/styling/03-styled-components.html)에 잘나와있당..

#### 힘들었던 점 

- 데이터 부모 컴포넌트로 끌고 올라가기

  ```jsx
  // props를 통해 해결
  const changeUser = () => {
      setCurrentUser(!currentUser);
   };
  
  <Header
          user={currentUser ? '고은' : '정쿨'}
          profileImg={currentUser ? EUNKO : COOL}
          changeUser={changeUser}
  ></Header>
  ```

- css

  계속 마진과 패딩이 의도치 않게 생기는 점,,  --> width와 height를 확실히 정해주고 마진 패딩은 항상 초기화 시켜주자 ㅜ

### Key Questions

- Virtual DOM이 무엇일까요?

  실제 View의 DOM과 새로 업데이트 될 DOM을 비교하여 한번에 렌더링하게 해주는데 이 때 새로 업데이트 될 DOM을 저장해두는 가상의 돔..?!

- 미션을 진행하면서 느낀, 리액트를 사용하는 장점이 있었다면? 

  이번 미션에서 4개의 컴포넌트를 만들었다. 채팅화면, 헤더, 채팅글쓰기창, 하나의 채팅 컴포넌트,, 각 컴포넌트들이 하는 일들이 전부 다 달라서, 오류가 생겼을 때 어느 부분에서 오류가 났는지 확실히 알 수 있었다. 

  또한 HTML파일에 가서 내가 지은 클래스이름을 찾아보지 않아도 되서 이것도 나름 장점이라고 하면 될 수 있겠다. 리액트만의 언어인 JSX를 통해 js파일내에서 구조를 짤 수 있다는 점!

- 리액트에서는 상태를 어떻게 관리할까요?

  Hook이 나오기 이전엔 class로 컴포넌트를 생성하여 그 내에서 state를 선언했고, setState() 메소드를 이용해서 상태를 관리했다. Hook이 나온 이후엔 함수 컴포넌트에서도 useState()를 이용하여 state를 생성 및 수정이 가능하다.

- styled-components 사용후기 (CSS와 비교)

  props를 잘 이용하면 코드를 더 유지 보수가 쉽게 짤 수 있을 것 같은데 일단 css조차도 아직 익숙치 않아서.. css 먼저 빨리 익숙해져야겠다,,,

  

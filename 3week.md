# 3주차 스터디



- 새롭게 알게 된 점
- Key Questions



## 새롭게 알게 된 점

-  `vw` `vh` 단위와 `%`  단위의 차이

  Safari랑 Chrome 브라우저에서 css 넓이와 높이를 지정해줄 때 `vw` `vh` 단위와 `%`  단위가 차이가 있었다.

  Safari에서 `vh` `vw`를 사용하면 스크롤이 되지 않는다. 그래서 `%` 를 사용하여 동적으로 만들어주어야 했다.

  Chrome에서 `%`를 사용하면 처음에만 동적으로 페이지의 값을 불러와 지정해주지만, margin이나 padding을 이용하여 width를 조정해주고 싶지만, 우선순위가 가장 높은지 width값은 고정되어 있다. `vw` 단위를 이용하면 우선순위가 낮아 width 조정이 되지만 Safari에서 문제가 생긴다. 

  그래서 내가 내린 결론은  width를 최대한 지정해주지말자..?이다! div와 같은 내부 값들을 이용해서 width를 조정해주고 그 후에 조정하고 싶을 때 이용하자

- [react-router-dom 사용](https://github.com/wody27/TIL/blob/master/React%20Routing.md)

- next 와 koa 프레임워크를 이용하여 SSR을 구현한 서버 구축!

  을 해보고 싶었는데 생각보다 쉽지 않아서 실패! 프론트에 집중하자

- 





## Key Questions

- **Routing**

  라우팅은 URL을 조작해서 경로를 설정해주는 작업이다. 웹 사이트는 여러 페이지들로 이루어지는데 각 페이지들로 이동할 수 있게끔 경로를 지정해주는 작업이다!!!

- **SSR / CSR**

  SSR을 알려면 먼저 CSR에 대해서 먼저 알아야한다. CSR은 Client Side Rendering으로 클라이언트에서 뷰를 렌더링해주는 방법이고 SSR은 Server Side Rendering으로 서버쪽에서 뷰를 렌더링해준 다음 클라이언트로 보내주는 방법이다. 

  여기서 렌더링이란 무엇일까?! 렌더링은 JS파일을 읽고 index.html파일로 다시 써주는 작업을 말한다. 즉 브라우저는index.html을 기반으로 뷰를 생성하므로 한마디로, 화면을 클라이언트에서 만들어주냐 아니면 서버에서 만들어서 넘겨주냐 이말이다!

- **SPA / MPA**

  위 설명을 더하기 위해서는 이 개념도 알아야한다. 

  SPA는 Single Page Application으로, 페이지가 처음 로드될 때 딱 한번만 서버에서 index.html파일을 받은 후, 그 이후부터 받지 않는, 오직 page하나로 이루어졌다. 그러므로 이는 CSR방법을 **채택**해야한다. 서버쪽에서 뷰를 렌더링한 후, index.html파일을 계속 넘겨주면 그것은 더이상 SPA라고 부를 수 없기 때문이다.

  MPA는 Multi Page Application으로, 페이지가 넘어갈 때마다 서버에서 index.html파일을 받아오는 여러 페이지로 이루어졌다. 그러므로 이는 SSR방법을 **채택**할 수 있다. 서버쪽에서 전부 렌더링해준 후, 클라이언트로 넘겨주면 편하기 떄문이다. 하지만 새로고침된다는 단점도 있다..^^

  최근 웹들은 SPA로 많이 제작되고 있다. 아래 그림을 보면서 동작되는 과정을 이해하는데 도움이 되었다.

  <img width="50%" alt="image" src="https://user-images.githubusercontent.com/56102421/94990049-0de07c80-05b4-11eb-890b-2fefc3a46991.png"><img width="50%" alt="image" src="https://user-images.githubusercontent.com/56102421/94990056-1638b780-05b4-11eb-8fa3-646dd1174173.png"> 



- **각자 개발하며 느낀 생각해 볼만한 주제 하나 이상 준비하기**

  카카오 API 사용해보기
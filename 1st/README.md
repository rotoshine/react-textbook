## 1주차 자료

`node.js` 설치가 되어있어야 동작합니다.

각 샘플 폴더로 이동한 뒤, 아래의 커맨드를 입력해서 실행하면 됩니다.

```sh
npm install
npm start
```

`npm install`은 폴더별로 1회만 하면 되고, 모든 샘플은 실행 후 브라우저에서 `http://localhost:3000/` 로 접속해서 보실 수 있습니다.

### sample1_express_handlebars

express와 handlebars로 SSR을 하고, 이후 스크립트를 통해 추가 렌더링을 하는 전통적인 코드의 예시입니다,.

### sample2_component

Application Server 없이, Client Side에서 모든 렌더링을 한 경우입니다.

Component 기반으로 쪼개서 만들어져 있습니다.

### sample3_apply_react

sample2_component를 React를 이용해 만든 버전입니다.

IE를 제외한 브라우저(Edge, Chrome, Firefox, Safari) 로 보는 것을 추천 드립니다.
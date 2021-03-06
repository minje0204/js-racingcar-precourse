<p align="middle" >
  <img width="200px;" src="https://github.com/woowacourse/javascript-racingcar-precourse/blob/main/images/racingcar_icon.png?raw=true"/>
</p>
<h1 align="middle">자동차 경주 게임</h1>

## 🎯 구현할 기능 목록

- Class Car

  - Attributes
    - 이름
    - 이동횟수
  - Methods
    - 이동하기

- Input 처리

  - 자동차 이름
    -> 유효성 검사 (5자 이하, 콤마로 구분)
    -> 검사 성공 시 시도할 횟수 Input Tag 렌더링
  - 시도 횟수
    -> 유효성 검사 (0 이상)
    -> 검사 성공 시 경주 과정, 우승자 출력

- 레이싱 함수
  - 시도 횟수별 0 - 9 랜덤 값 생성 후 조건에 맞춰 전진
    조건 : (4 이상 전진, 3 이하 멈춤)
  - 시도 횟수별 진행 사항 출력
  - 우승자 출력

### 공통 요구사항

- [ ] 사용자가 잘못된 입력 값을 작성한 경우 `alert`을 이용해 메시지를 보여주고, 재입력할 수 있게 한다.
- [ ] 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않고, 순수 Vanilla JS로만 구현한다.
- [ ] **자바스크립트 코드 컨벤션을 지키면서 프로그래밍** 한다
- [ ] **indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용**한다.
- [ ] **함수(또는 메소드)가 한 가지 일만 하도록 최대한 작게** 만들어라.
- [ ] 변수 선언시 `var` 를 사용하지 않는다. `const` 와 `let` 을 사용한다.
- [ ] `import` 문을 이용해 스크립트를 모듈화하고 불러올 수 있게 만든다.
- [ ] **함수(또는 메소드)의 길이가 15라인을 넘어가지 않도록 구현한다.**

## 💻 프로그램 실행 결과

![실행이미지](images/result.gif)
![실행이미지](images/result.jpg)

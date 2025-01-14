---
title: 3일 만에 OP.GG 만들기
date: 2025-01-06 00:00:00 +0900
categories: [연재, 원 히트 원더의 꿈]
tags: [기획, 개발]
description: UI 디자이너가 3일 만에 OP.GG 만들어 회사 내에 서비스한 이야기
---

게임은 개발 과정에서 일정 단계마다 사내 테스트로 가능성을 검증받습니다. 그 결과가 좋지 않으면 프로젝트가 그대로 종료될 수 있습니다. 이 때문에 초기 개발 단계에서는 생존과 직결된 것, 즉 재미를 만드는 것 이외의 것들은 우선순위가 낮게 책정됩니다.

데이터는 개발 단계에서 우선순위가 낮게 책정되는 대표적인 영역입니다. 사내 테스트 결과 분석은 설문조사를 통한 정성적인 평가에 의존하는 것이 보통입니다. 이 경우 잘못된 의사결정을 내리기 쉽습니다.

저는 현재 게임 UI를 담당하고 있습니다. UI를 잘 만드는 것이 제가 프로젝트의 생존에 기여할 수 있는 최선의 방법이겠지요. 하지만 저는 데이터를 오랜 기간 다뤄왔습니다. 그래서 본업인 UI 작업에 충실하면서 최소 비용으로 데이터를 활용할 수 있는 방법을 고민했습니다.

그 결과 **혼자 3일 만에** OP.GG와 같은 전적 검색 사이트를 만들어 회사 내에 서비스하기까지 했습니다. 그 과정을 설명드리며 **제너럴리스트가 팀에 기여하는 하나의 사례를 보여드립니다.**

![서비스 스크린샷](/assets/img/2025/2025-op-gg-result.jpg)


## 목적은 명확하게

먼저 데이터의 활용 목적을 명확하게 정했습니다.

가장 중요한 목적은 경영진 보고를 위한 지표를 만드는 것입니다. 사내 테스트 결과에 따라 프로젝트의 존속이 결정되기 때문입니다. DAU와 리텐션 같은 핵심지표는 반드시 필요합니다.

그 다음 목적은 게임 밸런스를 확인하는 것입니다. 10명 남짓한 팀 안에서의 플레이 경험으로 밸런싱하는 것은 주관적일 수 밖에 없습니다. 사내 테스트와 같이 대규모 인원이 플레이하는 기회를 놓치고 싶지 않았습니다.


## 기술은 적정하게

데이터를 분석하려면 데이터가 있어야 합니다. 그렇기에 데이터를 수집하는 것이 가능한지 먼저 확인했습니다. 가장 이상적인 방법은 데이터 파이프라인을 구축하여 데이터의 흐름을 자동화하는 것입니다. 그러나 개발 초기 단계에 하기에는 너무 큰 작업입니다. 그런 와중에 언리얼 데디케이티드 서버 로그는 어딘가에 저장된다는 확인하고 그냥 디버그 로그 형태로 로그를 남기기로 합니다. 서버 로그를 zip 파일로 다운받아 가공하는 등 자동화하는 대신 많은 부분을 수동(=노가다)으로 처리하기로 했습니다.

![수동 데이터 파이프라인](/assets/img/2025/2025-op-gg-data-pipeline.png)

그다음 어떤 데이터를 수집할지 정했습니다. 다양한 종류의 로그를 남길수록 분석은 풍성해지지만 작업 시간이 길어지게 됩니다. 욕심을 버리고 목적을 달성하는데 필요한 최소한의 로그 2개만 추려서 남기기로 결정합니다.

데이터를 생성하는 로직은 블루프린트로 작성했습니다. 블루프린트는 언리얼 엔진의 비주얼 프로그래밍 도구입니다. 코드를 몰라도 작성할 수 있는 대신 속도가 느리고 디버깅이 어려운 여러 단점이 있어 프로그래머가 선호하는 도구는 아닙니다. 하지만 작업 효율이 우선이었기에 블루프린트를 적극 사용했습니다.

![블루프린트로 로그 남기기](/assets/img/2025/2025-op-gg-blueprint.png)


## 3일 안에 OP.GG 만들기

마침내 사내 테스트가 시작되었습니다. 사내 테스트 기간에는 개발팀도 참가자 분들과 섞여 함께 게임을 플레이합니다. 유저들이 게임을 어떻게 플레이하는지, 그리고 개발팀 내부에서 볼 수 없는 새로운 플레이 방식이 있지 않은지 확인할 수 있는 기회이기 때문입니다.

그러다 **문득 OP.GG 같은 서비스를 만들고 싶다는 생각이 들었습니다.** [OP.GG](https://www.OP.GG/summoners/kr/Hide%20on%20bush-KR1)는 게임 전적 조회 서비스를 제공하는 플랫폼입니다. 자신의 게임 기록을 살펴볼 수도 있고, 페이커 선수와 같은 프로게이머가 어떻게 플레이하는지 살펴볼 수도 있습니다. 우리 게임에도 이런 서비스가 있다면 사내 테스트 참가자분들에게 또 다른 즐거움을 줄 수 있고, 개발팀이 게임 양상을 이해하는데도 도움이 될 것 같았습니다.

먼저 PD님과 논의했습니다. PD님은 사내 테스트 직후 빠르게 오픈해야 관심이 이어질 것 같다는 의견을 주셨습니다. 구체적으로 3일을 말씀하셨지요. 그렇게 3일 안에 OP.GG 유사 서비스를 회사 내에 런칭하는 것을 목표로 작업을 시작하게 되었습니다.

![OP.GG의 페이커 선수 전적](/assets/img/2025/2025-op-gg-faker.png){: w="400"}


## 작업 과정

프로젝트는 혼자 진행했습니다. 살면서 다양한 일을 하다 보니 데이터 기반 웹서비스를 만드는데 필요한 모든 기술을 일정 수준 가진 제너럴리스트가 되어있었고, 품질보다는 속도가 중요한 지금 상황에서는 혼자 작업하는 것이 최선이라 생각했기 때문입니다.

혼자 작업하기에 기획서는 필요하지 않습니다. 프로그래머와 디자이너에게 작업 목표를 전달하거나 구현 타당성을 검토받을 필요가 없기 때문입니다. 만들 것의 목록을 정리하고 머릿속에 그려지지 않는 레이아웃을 종이 위에 그려보는 정도는 작성해야 했습니다.

![기획서 아닌 기획서](/assets/img/2025/2025-op-gg-sketch.jpg)

제가 생각한 이 프로젝트의 킥은 게임 내 교전 상황을 멋지게 시각화하여 보여주는 것이었습니다. 이걸 할 수 없으면 이 프로젝트의 매력은 크게 떨어진다고 생각했습니다. 

시각화 라이브러리로 [Bokeh](https://docs.bokeh.org/)를 즐겨 사용합니다. 인터랙티브한 시각화를 하는데 강점이 있기 때문입니다. 하지만 [Bokeh Server](https://docs.bokeh.org/en/3.4.0/docs/user_guide/server.html)와 [Flask](https://flask.palletsprojects.com/)를 연동하여 사용해 본 적이 없기에 불확실성을 해소할 필요가 있었습니다. 그래서 3일짜리 프로젝트이지만 이 부분의 PoC에 1일을 투자했습니다.

![시각화 PoC](/assets/img/2025/2025-op-gg-visualize.jpg)


불확실성을 해소하니 개운한 마음으로 서비스를 만들어나갈 수 있었습니다.

와이어프레임 없이 머릿속에 있는 레이아웃을 코드로 바로 옮깁니다. 하얀 화면에 검은 글자만 있으면 작업이 재미가 없기에 디자인 작업도 살짝 곁들입니다.

그 다음 화면에 보여질 데이터를 출력하는 작업을 합니다. 플레이어나 경기 정보를 요청할 데이터 인프라가 없으므로 데이터를 웹 애플리케이션에 포함시켜야합니다. 매 호출 마다 서버에서 데이터를 가공하면 성능이 저하될 것이기에 원본 로그를 필요한 형태로 미리 가공하여 저장했습니다.

기획, 디자인, 데이터가 모두 제 머릿속에 있기에 저 자신과 대화하며 개발하면 됩니다. 커뮤니케이션 비용이 0이므로 작업 시간을 크게 단축할 수 있습니다.

![시안과 구현](/assets/img/2025/2025-op-gg-sketch-and-design.jpg){: w="400"}

셋째 날 아침, 첫 버전이 무사히 완성되었습니다. 팀에 공개하여 버그를 찾고 피드백을 받았습니다. PD님이 테스터 역할을 톡톡히 해주신 덕분에 문제를 빠르게 찾아서 수정할 수 있었습니다. 이후 서비스 배포와 관련하여 세세한 부분에 대한 의사결정을 내리고 마침내 회사 내에 공개했습니다.

하지만 실제 서비스 상황에서 늘 그렇듯 예상치 못한 문제가 발생했습니다. 접속이 폭주하여 서비스가 죽는다거나, 회사 외부에서 VPN으로 접속하면 CORS 문제로 시각화가 안 보인다거나 하는 문제를 런칭하고 빠르게 수정해 나갔습니다.

![런칭 공지](/assets/img/2025/2025-op-gg-launch.jpg){: w="400"}

이 서비스는 개발팀 내부에서 특히 잘 활용했습니다. 설문조사 응답에서 웹서비스의 링크를 걸어 응답자가 게임에서 어떤 경험을 했는지 확인할 수 있도록 했습니다. 덕분에 설문조사 결과를 보다 입체적으로 해석할 수 있었습니다.

이게 중요한 이유는 정량적 데이터가 뒷받침되지 않은 설문조사는 위험할 수 있기 때문입니다. 이를테면 어떤 참가자가 장문의 피드백을 남겼습니다. 개발팀은 정성이 담긴 이 피드백을 소중히 여길 수 있습니다. 하지만 이 피드백이 게임을 단 5분 플레이하고 남긴 것이라면 개발팀은 잘못된 의사결정을 내릴 수 있습니다.

![설문조사 결과와의 연계](/assets/img/2025/2025-op-gg-survey.jpg)


## 마치며

커리어 개발에 있어 많은 분들이 제너럴리스트와 스페셜리스트의 길 사이에서 선택의 어려움을 겪습니다. 저 또한 주니어 때부터 꾸준히 같은 고민을 해왔습니다.

하지만 이 과정에서 정보의 비대칭성이 고민을 더욱 어렵게 만들었습니다. 스페셜리스트의 실무 사례는 쉽게 찾을 수 있었지만, 제너럴리스트의 사례는 그렇지 않았기 때문입니다. 그래서 제 작업 중 하나를 제너럴리스트로의 어떤 실무 사례로 공유드리고 싶다는 생각으로 이 글을 작성해 보았습니다.

긴 글 읽어주셔서 감사합니다.

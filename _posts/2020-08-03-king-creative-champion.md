---
title: 픽사의 브레인 트러스트를 King에 도입하기
date: 2020-08-03 00:00:00 +0900
categories: [연재, 게임 개발 이야기]
tags: [게임디자인, GDC]
description: King이 픽사의 브레인 트러스트와 같은 피드백 시스템을 만들기 위해 시도한 것들.
---

이 발표에서는 King이 픽사의 [브레인 트러스트](http://www.lgeri.com/report/view.do?idx=19085)와 유사한 시스템인 크리에이티브 챔피언을 도입하려고 시도한 사례에 대해 설명한다. 크리에이티브 챔피언이란 프로덕션, 아트, 게임 디자인 등 각 분야에서 능력있고 경험많은 개인이 게임의 품질을 높힐 수 있도록 조언하는 시스템이다. 그 과정에서 무엇이 잘못되었고, 시스템을 안착시키기 위해 어떤 것을 고민했는지 이야기한다.

- **제목** : Implementing Pixar's Brain Trust Model at King - How it all went wrong and how we may have finally got it right ― [Youtube](https://www.youtube.com/watch?v=h5H7cKzIY9U)
- **발표자**
    - Stephen Jarret (VP Game Design)
    - Bob Woodburn (Director Design Operations)


## 발단
게임을 만드는 것은 어려운 일이며, 성공적인 게임을 만드는 것은 더욱 어려운 일이다. 성공적인 갓겜을 위해 다른 스튜디오의 프로세스를 조사하였다. 그 중 픽사의 [브레인 트러스트](http://www.lgeri.com/report/view.do?idx=19085)가 적합하다고 생각하여 시도해보았다.


## Creative Champions

### V1

King에서는 각 분야의 전문가를 모아 A-Team을 만들었고 이를 크리에이티브 챔피언이라 불렀다. 이들은 게임의 시작부터 끝까지 개별 스튜디오에 정기적으로 방문했다. 그곳에서 여러 직군의 사람들과 워크샵을 통해 깊게 파고, 솔직한 방식으로 문제를 해결하는 것을 돕는 것이 역할이었다.

![Creative Champions](/assets/img/2020/2020-gdc-king-implementing-pixar-01.png)


하지만 여기에는 몇 가지 문제가 있었다.

팀에서 크리에이티브 챔피언의 방문을 리뷰로 생각하는 문제가 있었다. 영어가 모국어가 아닌 스튜디오에서는 *champion* 이라는 이름이 *winner* 라는 어감을 주었다. 크리에이티브 챔피언이 게임을 엎을 수 있는 사람들로 여겨졌고, 그래서 팀은 이들의 방문을 리뷰로 생각했다.

크리에이티브 챔피언 입장에서는 1) 성공을 어떻게 정의할 지, 2) 의미있는 목표를 어떻게 설정할지, 3) 팀에 실질적인 가치를 더했는지 알기 어려웠다.

결과적으로 크리에이티브 챔피언은 문제 해결을 돕는 A-Team이 아니라, 문제를 찾는 '죽음의 천사'라는 기대한 것과 정반대의 역할이 되었다.

![Creative Champions](/assets/img/2020/2020-gdc-king-implementing-pixar-02.png)


### V2

기존 방식의 개선안으로 각 챔피언을 개별 게임 팀에 배정했다. 챔피언은 각 팀과 함께 일하지만 완전히 팀에 속해있지는 않으므로 다른 관점에서 리뷰해줄 수 있을 것을 기대했다.

하지만 크리에이티브 챔피언이 여러 영역에서 즉각적인 피드백을 주기 시작하면, 팀 입장에서는 누구의 피드백을 들어야할 지 모르는 상황이 되어버리는 문제가 있었다.

![Creative Champions](/assets/img/2020/2020-gdc-king-implementing-pixar-03.png)


### 회고

잘 작동한 것

- 팀으로부터 피드백 요청이 왔을 때
- 팀으로부터 워크샵 요청이 왔을 때 (소셜, 레벨 디자인 등)
- 팀이 그린라이트를 받는데 도움이 됨
- 팀이 리뷰해달라고 요청할 때 리뷰를 하는 FQA(Fun Quality Analysis)는 유용했다.
- 크리에이티브 챔피언은 문제가 많은 타이틀의 품질을 실제로 개선했다.


잘 작동하지 않은 것

- 팀이 피드백 요청을 하지 않은 경우
- 복수의 피드백 채널이 상호 충돌하는 경우
- 팀이 크리에이티브 챔피언의 방문에 압박감을 느끼는 경우

결과적으로 크리에이티브 챔피언 프로세스를 완전히 제거했다. 다른 스튜디오의 프로세스를 시도하는 것은 그만두고 King의 가치에 더 잘맞는 무언가를 만들기로 했다.

## Senior Creative Review

앞선 시행착오를 통해 얻은 결론은 이렇다.

- 팀이 리뷰어를 신뢰해야한다. (공포가 아니라)
- 피드백의 품질이 좋아야한다.
- 팀이 피드백을 필요로 해야한다.

### Game Design Leadership Team

신뢰받는 리뷰어로서 크리에이티브 챔피언을 도입했지만 실패했고, 대신 게임 디자인 리더십 팀을 만들었다. 이는 전세계에 걸쳐있는 King의 유능한 게임 디자이너들을 활용하는 것으로, 이들이 서로 연결되어있도록 하기 위해 수년 간 노력했다. 세 달에 한번 한 자리에 모여 여러 주제에 대해 이야기를 나누고, 바보같은 바이킹 모자를 쓰고 맥주를 마시기도 했다.

![Creative Champions](/assets/img/2020/2020-gdc-king-implementing-pixar-04.png)


King의 성공적인 모바일 게임을 만든 사람들의 경력을 보면, 과거부터 현재까지 아우르는 다양한 작품들이 있다. 이런 경험들을 활용하기 위해 회사 전체 게임 디자이너의 경력을 목록화하여 각자의 장르별, 분야별 숙련도를 정리했다. 그리고 이를 활용하여 게임에 적합한 리뷰어를 선정했다. [^1]

[^1]: 강연자가 직접 말하지는 않았지만 이 문장이 있는 게 적합해보여서 추가했습니다.

![Creative Champions](/assets/img/2020/2020-gdc-king-implementing-pixar-05.png)

### SCR 1.0

그리고 개발 과정에서 가볍지만 결단력있는 거버넌스를 만드는 결정을 했다. 우리는 이를 Senior Creative Review 라고 불렀다. 여기에는 디자인에 있어서는 고위 경영진 보다는 전문가에게 리뷰를 받아야한다는 주의가 있다.

![Creative Champions](/assets/img/2020/2020-gdc-king-implementing-pixar-06.png)


SCR은 게임디자인에 대한 정량적인 데이터와 피드백을 조합하여 게임의 각 측면에 대해 수치화된 평가를 내린다. 코어 게임플레이, 메타[^2], 소셜, 타겟 적합성, 테마 등 여러 요소를 살피고, 리뷰어의 전반적인 신뢰수준, 게임이 잘 개발되고 있는지, 목표를 잘 달성하고 있는지 등을 논의한다.

[^2]: 발표자는 *envelope* 라고 했는데 정확한 의미를 모르겠습니다. 슬라이드에 *Envelope/Meta* 라고 적힌 것을 보고 메타 게임으로 의미를 유추했습니다 (코어 게임을 감싸는 봉투로 해석).

![Creative Champions](/assets/img/2020/2020-gdc-king-implementing-pixar-07.png)


하지만 또 실패했다. 우선 리뷰어가 팀의 목표를 잘 알지 못했기 때문이다. 이를 보완하기 위해 리뷰어와 팀이 얼라인될 수 있도록 킥오프 미팅을 시작했다.

그리고 디자이너 이외의 사람과도 워크샵을 가졌다. 우리는 경영진이 무엇을 원하는지, 디자이너가 무엇을 검토하는지도 알았지만, 게임 팀과는 상세하게 대화하지 않았다는 것도 문제였기 때문이다.


### SCR 2.0

결과적으로 여러 변화를 만들었다.

- 기존의 방대한 분량의 피드백을 간결히 줄였다.
- 피드백 채널을 견고히 만들고 이를 공식화했다.

![Creative Champions](/assets/img/2020/2020-gdc-king-implementing-pixar-08.png)

피드백 채널로는 이런 것들을 운영하고 있다.

- **FQA**: 문서로 이루어지는 상대적으로 공식적인 프로세스. 하지만 평가없이 팀을 돕는 것이 목적. "이 피처가 괜찮은가?" 부터 "이 게임 재미있는가?" 와 같이 다양한 스케일의 요청을 받는다.
- **Playdates**: 개발 초기 단계 게임에서 기민하게 피드백을 받는 것이 목적. 여러 디자이너가 비디오 컨퍼런스로 모여 게임을 플레이하고 실시간으로 피드백을 주는 프로세스.
- **Workshop**: 게임에 중대한 문제가 발견되면 한 자리에 모여 문제를 해결하는 프로세스. 이메일로 진행하기도 한다.
- **Concept Coffee**: 커피를 마시며 아이디어를 나눈다.

![Creative Champions](/assets/img/2020/2020-gdc-king-implementing-pixar-09.png)


SCR 2.0이 성공적인지 측정하는 것은 애매하다. 시행한지 1년 반 밖에 안되어 많은 게임들이 런칭까지 가지 못했기 때문이다.

하지만 파이프라인 자체는 더 건강해진 것 같다. 2016년 여름에는 게임들이 프로덕션과 플레이테스트 단계에 많이 있고 프로토타입이나 컨셉 단계에 있는 게임은 적었다. 하지만 1년 후에는 초기 단계에 있는 게임이 많아졌다는 점에서 건강해졌다고 보여진다. 우리는 초기 단계에 더 많이 시도하고, 빠르게 실패하고, 팀이 생각하는 아이디어에 집중하는 것이 허용된다는 점에서 좋다.

![Creative Champions](/assets/img/2020/2020-gdc-king-implementing-pixar-10.png)


## 마무리

우리는 다른 스튜디오의 프로세스를 도입하는 과정에서 실수를 많이 했다. 처음에는 픽사의 브레인 트러스트처럼 고정된 전문가 그룹인 크리에이티브 챔피언에서, 순환하는 전문가 그룹인 시니어 크리에이티브로 넘어갔다. 창의성은 피드백을 주고 받는 과정에서 오가기도 하며, 이를 모두에게 여는 것은 King의 모든 전문가를 신뢰하는 느낌도 준다는 점에서 아주 좋았다.

![Creative Champions](/assets/img/2020/2020-gdc-king-implementing-pixar-11.png)

다른 하나는 개발팀을 중심으로 해야한다는 것이다. 앞서 말한 프로세스들은 모두 개발팀에서 요청이 올 때 수행한다. SCR의 리뷰는 크리에이티브 챔피언 때 처럼 숨겨져있지 않다. 그리고 강제되지 않으며, 개발팀이 준비가 되었을 때 진행한다.

![Creative Champions](/assets/img/2020/2020-gdc-king-implementing-pixar-12.png)


결과적으로 우리와 개발팀은 함께하는 관계가 되었다.
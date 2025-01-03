---
title: 플레이 일과 디자인
date: 2019-01-06 00:00:00 +0900
categories: [연재, 게임 개발 이야기]
tags: [게임디자인]
description: 꾸준한 접속을 유도하는 게임이라면, 게임에 사용하는 시간을 플레이어의 생활패턴에 맞게 디자인해야 한다.
---

게임은 상품이다. 게임이 제공하는 재미라는 가치에 플레이어는 돈을 지불한다. 그런 점에서 상업 게임이라면 상품 본연의 가치인 재미에 대한 고민과 함께 비즈니스 모델에 대한 고민이 수반된다.

온라인 게임이라면 여기에 시간이라는 요소를 추가로 고려해야 한다. 플레이어는 돈을 지불할 뿐 아니라 자신의 시간을 꾸준히 사용하기 때문이다. 돈을 어떻게 얼마나 받을 것인가에 대한 고민 만큼, 시간을 어떻게 얼마나 받을까에 대한 고민이 함께 필요하다.

## 상품 경제와 구독 경제
온라인 게임에서 시간이라는 요소를 추가로 고려해야 하는 이유는 소비 방식의 차이에 있다. 패키지 게임은 소유를 통해 소비한다. 책과 같아서 틈틈이 조금씩 플레이하든 하루에 몰아서 플레이하든 플레이어의 자유다. 하지만 온라인 게임은 구독을 통해 소비한다. 하루에 몰아서 클리어할 수 있는 형태면 존속할 수 없다.

온라인 게임은 플레이를 하면 보상을 주는 방식으로 지속적인 필요를 만들었다. 초기에는 플레이하는 만큼 보상을 받을 수 있었다. 노력한 만큼 보상을 얻는다는 점은 공정해보일 수 있다. 그러나 게임에 쓸 수 있는 시간도 누구에게나 공정하지 않다. 결국 시간이 많으면서 더 나아가 타인의 시간을 돈으로 사는 사람이 경쟁을 승리하게 되었다.

## F2P 시대, 보상 구조의 변화
F2P 게임의 시대가 되며 이는 큰 문제가 된다. F2P 게임의 핵심은 플레이어를 많이 확보하는 것인데, 시간을 많이 부을 수 있는 일부 유저에게만 유리하면 그것이 진입장벽이 되기 때문이다.

이 문제는 하루에 일정 시간만 플레이해도 하루에 얻을 수 있는 보상의 대부분을 얻을 수 있도록 보상 구조를 바꾸면서 해결되었다. 이는 리텐션을 향상시키는 것은 물론, "하루에 이만큼 플레이해도 경쟁할 수 있어." 라고 말함으로써 플레이어의 폭을 넓히는데 큰 가치가 있었다.

이에 대한 디자인은 컨텐츠 영역을 세분화하는 것으로 시작한다. 각 영역에 성장에 필요한 주요 요소를 배치하고 여기에 횟수 제한을 두어 무한정 보상을 획득하는 것을 막는다. 그리고 그 이외의 플레이는 아주 작은 보상을 주거나 혹은 순위를 올리기 위한 플레이로 만든다. 결과적으로 제한이 있는 컨텐츠를 모두 완료하는데 드는 시간이 곧 하루에 필수적인 플레이 시간이 되는 것이다.

## 플레이 일과 디자인
날마다 규칙적으로 하는 일정한 일을 가리켜 일과라고 한다. 플레이어로 하여금 매일 일정 플레이를 요구하는 것은 플레이어의 생활에 일과를 더하는 것이다. 그러므로 게임 디자이너는 게임의 일과가 플레이어의 현실 속 다른 일과들과 충돌하지 않도록 디자인할 필요가 있다. 이를 가리켜 **플레이 일과 디자인** 이라고 하겠다.

플레이 일과 디자인은 길이와 시간 두 가지 요소를 고려해야 한다.

### 길이
일과는 시간이 너무 길면 피로감이 느껴지기 마련이다. 게임 초반에는 게임에 대한 재미가 피로감을 앞설 수 있다. 하지만 게임에 익숙해지면 그간 인지하지 못하던 피로감이 체감되기 시작한다.

개를 산책시키는 일과는 힘들 때라도 애정과 책임감으로 시간을 낼 것이다. 하지만 플레이어는 게임에 대해 책임감이 있지는 않으므로 힘들면 떠날 것이다. 그러므로 일과를 유도하는 게임에서는 일일 플레이 시간을 적절히 만들 필요가 있다.

개발 단계에서는,

- 일일 필수 플레이 시간이 적절한 수준이 되도록 한다.
- 이벤트를 상시 진행할 게임이라면, 하루 일과에 필요한 시간을 그만큼 비워둔다.

신규 컨텐츠를 추가하는 시점이 중요하다. 신경쓰지 않으면 가랑비에 옷 젖듯 플레이어의 피로도가 가중될 수 있다. 신규 컨텐츠가 필수 플레이를 요구한다면, 기존 컨텐츠에 아래와 같은 조치를 취하여 플레이 일과가 길어지지 않게 조정할 필요가 있다.

- 오래된 컨텐츠에서 일과 요소를 제거
- 오래된 컨텐츠를 건너뛸 수 있도록

일과 요소의 제거는 신규 컨텐츠를 추가하면서 기존 컨텐츠를 일상적 컨텐츠로 만드는 것이다. 기존 컨텐츠의 보상과 호환되지 않은 상위 보상을 신규 컨텐츠에서 주고, 기존 컨텐츠의 플레이 제한을 제거하는 방식으로 달성한다. 와우나 파판14에서 새 확팩이 나올 때 기존 레이드의 보상 화폐를 일반 던전에서 얻을 수 있도록 하며, 신규 레이드에서는 새로운 상위 화폐를 지급하는 것이 그 예. 이런 방식은 신규 유저가 시간을 들이면 기존 유저와의 격차를 일정 수준까지는 빠르게 좁힐 수 있다는 효과도 있다.

오래된 컨텐츠를 건너뛰는 것은 보통 비용을 받는다. 무한의 탑과 같은 컨텐츠에서 한번 클리어한 층 까지는 그냥 스킵할 수 있도록 하는 것 처럼 비용을 받지 않을 수 있다. 게임 내 잉여 화폐로 건너뛸 수 있도록 하여 소모처와 건너뛰기를 한번에 잡는 방법도 있다. 현금으로 소탕권을 판매하는 방법도 있으나, 무언가를 얻기 위해 쓴다기보다 세금 느낌으로 내는 것이므로 과금 만족도는 기대하기 어렵다.

### 시점
게임 내 일과의 시점을 생활 속 일과 속에 잘 배치하여 생활에 녹이는 것을 말한다. 이 부분은 일반적인 내용이라 개인 참고용으로 정리만 한다.

- 컨텐츠에 생활 일과에 맞춘 대기 시간 넣기
- 이벤트는 생활 일과를 피해 전후에 배치하기

팜 게임과 같이 대기 시간과 보상이 반복되는 게임이라면, 생활 일과에 맞는 대기 시간이 있어야 플레이어의 생활에 녹아들 수 있다.

- 생활 속 주요 주기에 맞춘 대기 시간
    - 자기 전에 돌릴 만한, 점심 시간~퇴근 시간 사이에 돌릴만한 컨텐츠
- 일상이 완전히 규칙적이지는 않으므로 시간에 살짝 여유 두기
    - '내일 이 시간' 에 해당하는 컨텐츠를 24시간 대신 23시간으로
    - 혹은 짧은 시간 즉시 완료하는 것은 비용이 아주 작게
    - 상위 컨텐츠에 여유 시간을 배치하는 것도 방법
- 꾸준히 챙길 것
    - 레벨 제한이 풀린다거나 할 때, 생활 시간에 맞는 컨텐츠의 상위 티어를 챙겨야 한다.

이벤트는 생활 일과 전후에 배치하여 가급적 많은 사람이 부담없이 할 수 있도록 해야한다. 일일 이벤트를 낮에는 점심 시간에 밤에는 저녁 시간에 한다거나, 주말 이벤트는 토요일 저녁 보다는 일요일 저녁에 하는 것이 그 예.
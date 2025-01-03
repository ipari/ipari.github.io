---
title: LOL 새 아이템 아이콘에 대하여
date: 2020-12-07 00:00:00 +0900
categories: [연재, 게임 개발 이야기]
tags: [게임, UI]
description: LOL의 새 아이콘이 가독성이 낮은 이유에 대하여 고민해보았다.
---


![LOL 새 아이콘과 기존 아이콘](/assets/img/2020/2020-lol-icon-comparison.png)

LOL 아이템 시스템 개편과 함께 새로 디자인된 아이콘이 가독성이 낮은 이유에 대하여 고민해보았다.

## 고찰의 취지

LOL 10.23 패치에서 아이템 시스템이 개편되었다. 플레이어 당 하나만 보유할 수 있는 신화급 아이템이 등장하게 된 것.

문제는 아이콘 스타일이 바뀌면서 **아이콘을 알아보기 너무 어렵게 되었다**는 것. 커뮤니티를 살펴보아도 적응할 때가 되었는데 아직 못하겠다고 한다. 프로게이머의 방송에서도 적이 무슨 아이템을 들고 있는지 못 알아보겠다는 이야기가 나온다. 어째서 이런 상황이 생기는지 고민해보았다.

## 고찰 방법

비교를 하려면 먼저 기존 아이콘과 새 아이콘 이미지를 구해야한다. 이는 HTTP Reequest를 통해 얻을 수 있으며, Riot Developer Portal 에 자세한 정보가 있다. 먼저 아이템 데이터를 읽고 아이템 데이터에 있는 아이콘 파일명으로 아이템 이미지를 얻을 수 있다.

아이템 시스템 업데이트 전인 _10.22.1_ 버전과 최신의 버전인 _10.24.1_ 버전의 아이템 중 두 버전에 모두 있는 것을 서로 비교해보았다.

## 간결성의 상실

### 아이콘에서 일러스트로

아이콘은 작게 표현되는 만큼 간결성이 있어야한다. 물론 판타지 배경의 게임 아이콘은 현실의 사물에 빗대어 표현할 수 없는 만큼 간결함만 추구하기는 어렵다. 그럼에도 불구하고 LOL의 새 아이콘은 간결성을 너무 벗어난 것으로 보인다.

수은 장식띠의 아이콘에는 반드시 수은을 표현하겠다는 일념이 느껴진다. 존야의 모래시계는 현실에 비유할 수 있는 모래시계가 있음에도 과도하게 표현되었다. 밤의 끝자락은 아이템의 컨셉을 간결하게 표현한 ‘아이콘’에서 하나의 ‘일러스트’가 되어버렸다.

![아이콘에서 일러스트로 변화한 LOL 아이콘](/assets/img/2020/2020-lol-icon-comparison-1.png)


### 입체적 구도

사람은 입체 요소보다 평면 요소를 더 잘 인지한다. 눈은 대상을 평면 요소로 뇌에 전달하기 때문이다. 그러므로 대부분의 아이콘은 평면으로 그려진다. 사실주의적인 스큐어모피즘 아이콘 역시 구도는 평면이다.

하지만 게임의 아이콘은 평면으로만 표현하기는 어렵다. 스마트폰 사용자가 수십 개의 메일 앱을 구분해야 할 일은 없지만, 게임의 플레이어는 수십 개의 갑옷을 구분할 수 있어야 하기 때문이다. 그러므로 평면으로 실루엣을 차별화하기 어려운 경우 어느 정도 사용할 수는 있다.

LOL의 새 아이템 아이콘들은 플레이어의 인지 속도를 늦추는 입체적인 구도가 많아졌다. 앞서 언급했듯 평면으로 표현하는데 한계가 있는 경우에는 입체적인 구도를 사용할 수 있다. 하지만 기존 형태로도 특징이 명확한 아이콘들을 불필요하게 입체로 바꿨다는 느낌밖에 들지 않는다.

![입체적 구도로 변화한 LOL 아이콘](/assets/img/2020/2020-lol-icon-comparison-2.png)

## 실루엣

실루엣을 부각하는 요소가 줄어든 것도 아이템을 인지하기 어렵게 만든 요소 중 하나라고 생각한다.

LOL의 아이템 아이콘은 상점에서 보이는데 그치지 않는다. 탭 키로 개별 플레이어의 아이템 보유 상황을 확인하는 일이 훨씬 빈번하다. 상황판에서는 아이템의 아이콘이 40px 정도로 작게 보이므로, 아이콘의 디테일 보다는 실루엣과 색상이 더욱 중요하다고 할 수 있다.

### 외곽선이 사라짐

기존의 아이콘들은 실루엣을 강조해주는 선들이 있었다. 하지만 새 아이콘들은 일러스트화 되면서 외곽선이 많이 사라지게 되었다. 이로 인해 작게 표시될 때 인지하기 더 어렵게 되었다.

### 여백이 사라짐

아이콘 내의 이미지가 크다고 해서 좋은 것은 아니다. 적절한 여백이 있을 때 형태를 인지하기 용이하다. 게임의 아이콘은 형태와 함께 배경색으로도 구분한다는 점에서 여백은 더욱 중요하다. 하지만 새로운 아이콘들은 크기가 훨씬 커지면서 실루엣과 배경색 모두 인지하기 어렵게 되었다.

## 마치며

아이콘은 결국 시간이 지나면 익숙하게 될 것이다. 하지만 아이템 시스템에 큰 변화가 생기면서 플레이어가 새로 배워야할 것이 많아지게 되었다. 그런만큼 아이콘의 가독성을 좀 더 배려했으면 하는 아쉬움이 있기에 한 명의 플레이어로서 이런 글을 작성해보았다.

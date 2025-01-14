---
title: 로망 가득 모바일 청첩장 DIY
date: 2024-08-15 12:43:00 +0900
categories: [연재, 1인 개발 이야기]
tags: [기획, 개발, 모바일, 결혼, 청첩장]
description: 결혼식 후에 더욱 특별한 모바일 청첩장
image:
  path: /assets/img/2024/2024-marriage-thumbnail.jpg
  alt: 청첩장과 감사장
---

우리는 모바일 청첩장을 전달하며 결혼 사실을 공개적으로 알립니다. 이런 중요성에 비해 기존의 모바일 청첩장은 아쉬운 점이 많습니다.

가장 큰 아쉬움은 시간이 지나면 사라진다는 점입니다. 그래서 모바일 청첩장을 직접 만들어 평생 유지할 수 있도록 했습니다. 더불어 **결혼식 후에 더욱 특별한 페이지**로 만들어 영원히 의미 있는 공간으로 만들기로 했습니다.


## 청첩장 DIY

게임업계 사람들은 모바일 청첩장을 미니 게임 포맷으로 제작하기도 합니다. 하지만 제 아내는 게임과 거리가 먼 사람이기에 일반적인 모바일 청첩장을 참고하기로 했습니다.

최근에 받은 모바일 청첩장들을 보며 어떤 구성요소가 어떤 순서로 배치되어 있는지 살펴보았습니다. 몇몇 청첩장은 금세 없는 페이지라 나오는 걸 보며 더더욱 직접 만들어 평생 유지하겠다는 생각이 들었습니다.


### 갤러리

모바일 청첩장의 꽃은 갤러리입니다. 장소와 시간은 종이 청첩장으로도 확인할 수 있지만, 갤러리는 오직 모바일 청첩장에서만 볼 수 있기 때문입니다.

**신부의 최우선 요구 조건은 “사진이 확대되지 않는 것”이었습니다.** 스튜디오 사진이 아직 보정되기 전이라 신경 쓰인다는 것이 이유였습니다. 저는 보정하지 않아도 가장 예쁜 신부라 생각하지만 어쨌든 신부의 생각은 달랐기에 이 부분을 챙겨야했습니다.

구글에 *js photo gallery* 로 검색하여 괜찮은 라이브러리를 찾았습니다. 그 중 [PhotoSwipe](https://photoswipe.com/getting-started/)를 선택했는데, 돋보기 메뉴를 끄는 방법을 문서에서 빠르게 찾을 수 있었기 때문입니다. 새삼 잘 구성된 문서의 중요성을 느꼈습니다.

![PhotoSwipe를 이용한 웨딩 갤러리](/assets/img/2024/2024-marriage-gallery.png)


### 참석여부

**동시예식은 하객 수를 정확하게 예측하는 게 중요합니다.** 예식과 식사가 동시에 진행되므로 자리가 없으면 식사도 못하기 때문입니다. 그래서 동시예식 청첩장에는 참석여부를 남기는 입력창이 있는 경우가 많았습니다.

동적인 페이지이므로 [Flask](https://flask.palletsprojects.com/)로 청첩장을 만들고, 쿠키를 남겨 수정할 때 인원 수만 수정 가능하도록 했습니다. 디자인은 다른 청첩장의 입력폼을 참고하여 만들었습니다.

![RSVP](/assets/img/2024/2024-marriage-rsvp.png)

**그런데 어르신들로부터 부정적인 피드백이 있었습니다.** 개인정보를 입력하는 것에 굉장히 민감하셨던 것이지요. 결국 참석여부 입력창은 포기하고 Google Analytics를 붙여서 대략적으로 추정하기로 했습니다. 결과적으로 보증 인원을 적절하게 맞출 수 있었습니다.

![모바일 청첩장 GA](/assets/img/2024/2024-marriage-ga.jpg)


### 우리만의 도메인

모바일 청첩장의 도메인이 업체 도메인인 것도 제게는 만족스럽지 않은 부분이었습니다. 청첩장을 위해 눈여겨보고 있던 `.love` 도메인을 구매할 때가 된 것이지요. 아내의 이름을 앞에 넣고 싶었지만, 제 이름을 앞에 넣는 쪽이 도메인 이름이 쉬워져서 제 이름의 이니셜을 앞에 넣었습니다.

나중에 친구가 모바일 청첩장에 커스텀 도메인을 넣었는데, 제게서 영감을 받았다고 했을 때 마음이 뿌듯했습니다.


### 지도

구글맵은 한국에서는 좋은 선택지가 아닙니다. 네이버 지도 아니면 카카오맵을 선택해야합니다. 아쉽게도 둘 다 API를 이용해야 웹사이트에 넣을 수 있습니다. 작업 편의성이 고만고만하면 MAU가 압도적인 [네이버 지도](https://www.ncloud.com/product/applicationService/maps)를 사용하는 것이 순리였습니다.

**지도에서는 UX 관련한 시행착오**가 있었습니다. 예식장이 남북으로 놓인 두 지하철역 사이에 있었기 때문에 지도를 세로로 길게 넣었습니다. 그랬더니 스크롤이 안된다는 피드백이 들어왔습니다.

이 부분을 미리 생각하여 지도가 아닌 영역을 충분히 남겼음에도 이 피드백을 피할 수 없었습니다. 지도가 아닌 영역에서 스크롤을 시작하면 된다는 것도 어떤 사용자에게는 어려울 수 있다는 것을 알게 되었습니다.

![지도 비율](/assets/img/2024/2024-marriage-map.png)


## 결혼식 후 더욱 특별하게

모바일 청첩장은 결혼 소식을 주변에 공개적으로 알리는 중요한 요소입니다. **그렇기에 결혼식 후에 사라지는 것이 아니라, 맺어짐의 증거로 오래오래 남겨놓고 싶었습니다.** 청첩장을 감사장으로 만드는 방식으로!

### 결혼합니다 → 결혼했어요

발리의 리조트에 도착하여 “결혼합니다”를 “결혼했어요”로 수정했습니다. 결혼이 이루어짐을 선언하는 느낌이라 마음이 몽글몽글했습니다. 초대 메시지는 아내와 고민하여 작성한 감사 메시지로 수정했습니다.

![모바일 청첩장 타이틀](/assets/img/2024/2024-marriage-thumbnail.jpg)
![모바일 청첩장 메시지](/assets/img/2024/2024-marriage-message.png)

### 하객분들의 사진으로

웨딩 갤러리를 하객 분들이 카톡으로 보내주신 사진들로 업데이트했습니다. 아내와 함께 9장의 사진을 고르며 꿈같은 결혼식을 다시 떠올릴 수 있었습니다.

길안내는 더 이상 필요하지 않으므로 바로 지웠습니다. 계좌번호는 늦게 보내주시는 분들을 위해 며칠 더 유지하다 지웠습니다. 사진은 나중에 보정된 사진으로 교체했습니다.

![모바일 청첩장 콘텐츠](/assets/img/2024/2024-marriage-content.jpg)


## 청첩장에서 인생의 기록으로

우리의 모바일 청첩장은 결혼식에서 끝나지 않습니다. 더 나아가 부부의 소중한 순간들을 기록하며 결혼 이후의 이야기를 이어가고자 합니다.

특히 두 달 뒤에는 아주 특별한 일이 우리를 기다리고 있습니다. 바로 콩콩이가 우리 부부의 품에 찾아오는 날입니다. 이 순간은 청첩장에 기록될 첫번째 이벤트가 될 것입니다.

언젠가 누군가가 우리의 모바일 청첩장을 다시 열어보았을 때, "그때 결혼하고 이렇게 잘 살고 있구나" 하며 따뜻하게 미소지을 수 있는 그런 공간으로 만들어가고자 합니다.
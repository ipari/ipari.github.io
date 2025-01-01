---
title: AI 스피커 개발기
date: 2019-03-29 00:00:00 +0900
categories: [연재, 1인 개발 이야기]
tags: [AI, 개발, Python]
description: AI MAKERS KIT 으로 슬랙과 연동되는 AI 스피커 소프트웨어를 구현해보았다.
---

## 시작

최근 나의 관심사는 AI 스피커였다. 나오는 제품들을 지켜보며 [[스마트 스피커와 로봇 청소기]] 라는 글을 쓰기도 했다.

챗봇에 대한 관심은 최근에 생겼다. [카카오미니c](https://kakao.ai/product/kakaomini)를 일상에서 쓰며 STT는 이제 기술적으로 완성 단계에 접어들었다는 생각이 들었다. 그럼 이제 그 텍스트를 어떻게 처리하느냐가 관건이겠고, 그 기술의 발전은 챗봇으로 바로 이어지겠다는 생각이 들었다. (구어체와 문어체의 차이로 학습은 따로 필요하겠지만)

이런 부분들을 직접 구현하며 GUI와 VUI를 실험해보고 싶다는 생각이 들었고, 그래서 개인 비서봇을 직접 만들어보게 되었다.


## 설계


### 작동 흐름

입력 채널로부터 텍스트를 입력받아 행동과 대답을 선택한다. 그에 따라 기기를 조작하고 입력 채널로 응답한다. 여기에 디스플레이를 더하여 [Echo Show](https://www.amazon.com/All-new-Echo-Show-2nd-Gen/dp/B077SXWSRP) 나 [구글 홈 허브](https://store.google.com/us/product/google_home_hub) 처럼 시각적인 정보를 제공하는 것이 목표.

![설계](/assets/img/2019/ai-speaker-design.png)


### 입력 채널

#### 슬랙
![Slack logo](/assets/img/2019/ai-speaker-slack-logo.png)

보통 개인 봇은 텔레그램에 많이 띄운다. 하지만 업무에서 사용하는 슬랙이 친숙하기도 하고, 회사에서 쓰려고 만들어둔 슬랙봇이 있어서 슬랙을 활용하기로 했다.

#### AI 스피커
AI 스피커의 DIY 키트로는 구글의 [AIY Voice Kit](https://aiyprojects.withgoogle.com/voice/) 와 KT의 [AI MAKERS KIT](https://apilink.kt.co.kr/api/menu/apiSpcDetail.do?apiSpcId=183) 두 가지가 있다. 기술적인 부분에서 구글이 훨씬 낫겠으나, 아래의 이유에서 KT의 키트를 선택했다.

구글은 호출어가 번거롭다. 'Ok Google' 은 5글자나 된다. 'Hey Google' 은 좀 더 짧기는 하지만 '구글' 이라는 단어는 발음하기 불편하여 여전히 답답하다. 반면에 KT는 호출어인 '지니야', '자기야', '친구야'는 3글자로 짧으며 발음하기도 편하다.

더불어 케이스의 재질도 종이와 아크릴로 내구성의 차이가 있다. 들고 케이블을 끼웠다 뺐다 하려면 아무래도 튼튼한 쪽이 더 낫겠다 싶었다.

![Google Voice Kit & KT AI Makers Kit](/assets/img/2019/ai-speaker-kits.png)

## 질의응답

### 형태소 분석기
대화를 하는데 대답이 늦으면 답답할 것이다. 때문에 챗봇의 형태소 분석기는 정확도 보다는 속도가 중요하다. KoNLPy 의 [형태소 분석기 비교](https://konlpy.org/en/latest/morph/#pos-tagging-with-konlpy)를 보면 Mecab이 가장 빠르고 Okt (구 Twitter)가 그 뒤를 잇는다. 여기에 카카오의 [Khaiii](https://github.com/kakao/khaiii) 도 고려해보았다.

[Khaiii](https://github.com/kakao/khaiii) 는 일단 설치가 불가능했다. 빌드에 CMake 3.10 이상을 요구하는데, 라즈베리파이에는 3.7 버전 밖에 없기 때문이다. Mecab은 테스트에 있던 그대로 속도와 성능 모두 훌륭했다. 하지만 단어를 기본형으로 만들어주는 기능이 없어서 아쉬웠다. [Okt](https://github.com/open-korean-text/open-korean-text) 는 상대적으로 속도는 느리지만 기본형으로 만들어주는 기능이 있어서 편리하다. 라즈베리파이 기준 최초 로딩에 30초 가까이 걸리기는 하지만, 그 이후에는 챗봇에 쓸만한 정도의 속도는 나오기에 결과적으로 Okt 를 사용하게 되었다.

### 응답 선택
작동하는 무언가를 만드는 것의 우선 순위가 높았다. 딥러닝으로 멋있게 하면 좋겠으나 그것은 미래의 일로 남기기로 했다. 기존에 취미 삼아 만들던 [슬랙봇](https://github.com/ipari/slack-response-bot)을 그대로 사용하여 데이터를 직접 입력하기로 했다.

동일 의미의 단어들을 그룹으로 묶고,

```yaml
groups:
    iu: '아이유, 지은, 징쨩'
    birthday: '생일, 태어나다'
    when: '날짜, 날, 언제, 며칠'
```

아래와 같이 질의응답을 정의한다.

```yaml
qnas:
  - keywords: 'group:iu, group:birthday, group:when'
    answers: '아이유 생일은 1993년 5월 16일 입니다.'
```

각 그룹의 단어 중 하나씩을 모두 포함하면 그에 정해진 대답을 고르게 된다.

```
"아이유 언제 태어났어"
[('아이유', 'Noun'), ('언제', 'Noun'), ('태어나다', 'Verb'), ('어', 'Eomi')]
>>> | "아이유 생일은 1993년 5월 16일 입니다."
```

[Okt](https://github.com/open-korean-text/open-korean-text) 는 사용자 사전 기능이 없다. 때문에 '징쨩[^징쨩]' 같은 단어에서 '쨩'을 접미사로 인식하여 분리한다. 때문에 지정한 단어가 날 것의 문장에 포함되어있는지 추가로 확인하게 하였다.

[^징쨩]: 지은 + 쨩 = 아이유의 애칭

```
"징쨩 생일 언제야?"
[('징', 'Noun'), ('쨩', 'Suffix'), ('생일', 'Noun'), ('언제', 'Noun'), ('야', 'Josa'), ('?', 'Punctuation')]
>>> | "아이유 생일은 1993년 5월 16일 입니다."
```

### 작동 영상
봇에게 뻘소리를 할 수 있게 되었다.

{% include embed/youtube.html id='sVRIgbhn5tU' %}

![슬랙 질의응답](/assets/img/2019/ai-speaker-slack-qna.png){: w="400" .normal}

## 기기 제어

### 미에어

질의응답만 하면 심심하니 집에 있는 미에어를 제어해보기로 했다. 샤오미 기기를 컨트롤하는 라이브러리인 [python-miio](https://github.com/rytilahti/python-miio) 가 있어 내게 필요한 기능만 구현하면 되었다.

#### 구조
질의 응답의 데이터 구조에 행동을 추가했다. 행동에는 지정한 기기의 ID와 실행할 메소드를 입력한다. 실행된 메소드는 값을 리턴하며, 이 값을 답 문장에 넣어 음성으로 재생한다.

```yaml
- keywords: 'group:home, 습도'
  actions:
    - device: 'mi_air'
      action: 'get_humidity'
  answers: '현재 방 습도는 {} 퍼센트 입니다.'
```

미에어는 모터 속도를 1~17단계로 작동시킬 수 있다. 특정 단계로 실행시키려면 문장에서 값을 알아내어 메소드로 전달해야한다. 어떤 값을 전달할지는 일단의 문장의 품사로 지정하도록 하였다.

이는 매우 임시방편이다. 품사 뿐 아니라 의미 단위(조금, 많이 등)로 지정할 수 있도록 하고, 필요한 정보가 부족하면 되묻는 기능도 추가해야 한다.

```yaml
- keywords: 'group:mi_air, group:level'
  actions:
    - device: 'mi_air'
      action: 'be_custom'
      params: 'number'
  answers: '공기청정기 {} 단계로 작동시켰어요.'
```

#### 반응성을 위한 작은 노력
미에어는 항상 깨어있지 않다. 깨어있지 않을 때 명령을 내리면 기기를 찾을 수 없다는 에러가 뜬다. `discover()` 로 기기를 깨운 후에 명령을 내려야하는데, 기기가 깨어있는데 또 깨우면 응답이 느리게 된다.

시간을 재어보니 300초가 지나면 대기 상태로 들어가는 것을 알 수 있었다. 마지막으로 깨운 시간을 기록한 후에 300초가 지난 경우에만 `discover()` 하는 식으로 응답 속도를 조금이나마 높혔다.

```python
def discover_required(func):
    def wrapper(self, *args, **kwargs):
        now = time.time()
        if now - self.last_discovered > TTL:
            self.device.discover()
            self.last_discovered = now
        return func(self, *args, **kwargs)
    return wrapper

@discover_required
def get_aqi(self):
    return self.status.aqi
```



### 작동 영상
미세먼지가 심한 날의 출근길에 슬랙으로 집의 공기질을 확인하고 원격으로 틀 수 있게 되었다. 이건 Mi Home 앱으로도 할 수 있는 것이기는 하다. 하지만 게임 중에 목이 칼칼할 때 음성으로 공기질을 확인하고 공기청정기를 세게 트는 것은 꽤 유용했다.

{% include embed/youtube.html id='meDSpFfC5q0' %}

![슬랙 기기 제어](/assets/img/2019/ai-speaker-slack-device-control.png){: w="400" .normal}

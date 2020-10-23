import TAERIIMAGE from '../images/TAERI.png';
import YOUJINCHOIIMAGE from '../images/YOUJINCHOI.png';
import KOODONGMAEIMAGE from '../images/KOODONGMAE.png';
import HEESUNGIMAGE from '../images/HEESUNG.png';
import KOODOIMAGE from '../images/KOODO.png';

export const TAERI_MESSAGE = [
  { opponent: TAERIIMAGE, opponentName: '고애신' },
  { user: TAERIIMAGE, content: '슬슬 일본군들이 눈치를 챈 것 같소..' },
  { user: TAERIIMAGE, content: '우리도 만반의 준비를 가지고 대처해야하오' },
  { user: false, content: '애기씨는 조금 멀리라도 도망을 가시는 것이.. ' },
  {
    user: false,
    content: '애기씨가 위험해지는 것을 의병들이 가만히 보고있지 않을 겁니다..',
  },
  {
    user: TAERIIMAGE,
    content: '내가 발벗고 나서야 조국의 독립이 빠른 시일안에 되지 않겠소?',
  },
  { user: false, content: '그건 맞지만...' },
  {
    user: false,
    content: '최근 총격 사건으로 인해 다들 조심히 움직이고 있습니다',
  },
  {
    user: TAERIIMAGE,
    content: '알겠소.. 빠른 시일 내에 계획을 세워 연락주시오',
  },
];

export const KOODO_MESSAGE = [
  { opponent: KOODOIMAGE, opponentName: '쿠도히나' },
  { user: false, content: '히나씨 304호 양반에 관해 여쭤 볼 것이 있소' },
  { user: KOODOIMAGE, content: '무슨 일이신지요?' },
  {
    user: KOODOIMAGE,
    content: '저도 아는것이 많이 없다만 최대한 답변드리지요.',
  },
  {
    user: KOODOIMAGE,
    content: '물론 어제 총격사건과 관련해서라면 저도 아는게 없습니다.',
  },
  { user: false, content: '그것이 아니라 혹여' },
  {
    user: false,
    content: '애기씨가 미국 나으리를 뵈러 여관에 잠시 온 적이 있는지..?',
  },
  { user: KOODOIMAGE, content: '몇일 전 잠시 들렀습니다 왜 물어보시는 지요?' },
  {
    user: false,
    content: '애기씨와 미국 나으리와 어떤 관계인지 알고 싶어 그러오',
  },
  { user: false, content: '감사하오' },
  {
    user: KOODOIMAGE,
    content: '아닙니다. 혹여 더 질문할게 있으시면 물어보십시오.',
  },
];

export const YOUJINCHOI_MESSAGE = [
  { opponent: YOUJINCHOIIMAGE, opponentName: 'You Jin Choi' },
  { user: false, content: '애기 씨의 일과 관련해 이야기를 여쭙고 싶습니다.' },
  { user: YOUJINCHOIIMAGE, content: '무슨 일이오?' },
  { user: YOUJINCHOIIMAGE, content: '직접 가서 물으시지 왜 그러오?' },
  { user: false, content: '애기 씨 몰래 물어보려해서 그러오' },
  { user: false, content: '이번 총격 사건의 총에 관한 이야기오.' },
  { user: YOUJINCHOIIMAGE, content: '그 총에 관하면....' },
  { user: YOUJINCHOIIMAGE, content: '오늘 밤 미국 공사관으로 오시오' },
];

export const KOODONGMAE_MESSAGE = [
  { opponent: KOODONGMAEIMAGE, opponentName: '구동매' },
  { user: KOODONGMAEIMAGE, content: '저기 혹시 질문하나만 받아 주시겠소?' },
  { user: KOODONGMAEIMAGE, content: '그저 궁금 해서 그러오..' },
  {
    user: KOODONGMAEIMAGE,
    content: '애기 씨는 도대체 무슨 일을 하오??',
  },
  { user: false, content: '그건 나도 말해 줄 수 없소..' },
  { user: false, content: '직접가서 물으시오' },
  {
    user: KOODONGMAEIMAGE,
    content: '도대체 무슨 일을 하길래 다들 숨기는거요..',
  },
  { user: false, content: '아무한테도 말 하지 않으시겠다면 힌트는 주겠소' },
  { user: KOODONGMAEIMAGE, content: '내 약조하마 아무한테도 말 하지 않겠소' },
  { user: false, content: '그저 나라를 위한 일을 할 뿐이오...' },
  { user: KOODONGMAEIMAGE, content: '의심은 했다만... 의병인 것 같구려' },
  {
    user: KOODONGMAEIMAGE,
    content: '의병 그거 돈이 되는 거요? 돈이 된다면 나도 하겠소',
  },
];

export const HEESUNG_MESSAGE = [
  { opponent: HEESUNGIMAGE, opponentName: '김희성' },
  { user: HEESUNGIMAGE, content: '바쁜 와중에 죄송하오' },
  { user: HEESUNGIMAGE, content: '급한 일이 있어 그러는데...' },
  { user: false, content: '어떤 일이오' },
  { user: false, content: '설마 이번 저녁 약속 때문이오?' },
  { user: HEESUNGIMAGE, content: '그렇소, 혹시 저녁 약속을 취소해도 되겠소?' },
  { user: false, content: '무슨 일이시오?' },
  { user: false, content: '급한 일이오?' },
  { user: HEESUNGIMAGE, content: '약혼녀를 보러가야해서 바쁘오' },
];

export const MESSAGE_LIST = [
  TAERI_MESSAGE,
  KOODO_MESSAGE,
  YOUJINCHOI_MESSAGE,
  KOODONGMAE_MESSAGE,
  HEESUNG_MESSAGE,
];

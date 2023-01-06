const quotes = [
  {
    quote: "You can no more win a war than you can win an earthquake.",
    kor: "전쟁에서 이기기란 지진을 이기는 것과 마찬가지다.",
    author: "Jeannette Rankin",
  },

  {
    quote: "The price of greatness is responsibility.",
    kor: "위대함의 대가는 책임감이다.",
    author: "Sir Winston Churchill",
  },

  {
    quote:
      "As you grow older, you'll find the only things you regret are the things you didn't do.",
    kor: "나이가 들수록 해보지 않았던 것에 대해서만 후회한다는 것을 발견하게 될 것이다.",
    author: "Zachary Scott",
  },

  {
    quote:
      "I do not know what the future holds, but I know who holds the future.",
    kor: "저는 미래가 어떻게 전개될지는 모르지만, 누가 그 미래를 결정하는지는 압니다.",
    author: "Oprah Winfrey",
  },

  {
    quote: "All would live long, but none would be old.",
    kor: "모두가 오래 살고 싶어 하지만 아무도 늙고 싶어 하지는 않는다.",
    author: "Benjamin Franklin",
  },

  {
    quote:
      "Challenges are gifts that force us to search for a new center of gravity. Don't fight them. Just find a different way to stand.",
    kor: "도전은 우리로 하여금 새로운 무게중심을 찾게 하는 선물입니다. 맞서 싸우지 마세요. 그저 중심을 잡을 수 있는 다른 방법을 찾아보세요.",
    author: "Oprah Winfrey",
  },

  {
    quote: "Well begun is half done.",
    kor: "시작이 반이다.",
    author: "Aristotle",
  },

  {
    quote:
      "When you are courting a nice girl an hour seems like a second. When you sit on a red-hot cinder a second seems like an hour. That's relativity.",
    kor: "아름다운 여자의 마음에 들려고 노력할 때는 1시간이 마치 1초처럼 흘러간다. 그러나 뜨거운 난로 위에 앉아 있을 때는 1초가 마치 1시간처럼 느껴진다. 그것이 바로 상대성이다.",
    author: "Albert Einstein",
  },

  {
    quote: "All people want is someone to listen.",
    kor: "사람들이 원하는 모든 것은 자신의 얘기를 들어줄 사람이다.",
    author: "Hugh Elliott",
  },
  /*
  {
    quote:
      "명언은 스스로가 맞다고 생각하는 느낌을 적어놓은 것이다. 자신의 명언을 찾아라.",
    author: "나",
  },
  {
    quote: "장점만 있거나 단점만 있지는 않다.",
    author: "나",
  },
  {
    quote:
      "지금부터 바꿀 수 있다고 입만 나불거리지마. 진심으로 이기고 싶다면 스스로 생각해봐.",
    author: "연봉신9화",
  },
  {
    quote:
      "어떠한 강한 상대도 모든 부분에서 강할 수는 없어. 내가 그 상대보다 강한 부분은 반드시 있다. 그것을 찾으면 돼",
    author: "연봉신9화",
  },
  {
    quote:
      "사람은 한 번에 하나의 일 밖에 못 한다. 한 분야, 한 단계씩 차근차근 가는 것이 빠르고 쉽게 일을 끝내는 법. 과욕은 금물.",
    author: "나",
  },
  {
    quote:
      "다른 사람들이 인정할 정도로 어떤 것을 이루려면 다른 것은 볼 필요없이 그 '어떤 것'에만 몰두해야 한다.",
    author: "나",
  },
  {
    quote:
      "모든 것을 다 잘하겠다는 욕심을 이룰 수는 없다. 현실은 잡지식만 늘고 이도 저도 아니라는 평가를 받을 뿐이다.",
    author: "나",
  },
  {
    quote: "이미 벌여놓은 것을 마무리하는 힘은 책임감이고 스펙이다.",
    author: "나",
  },
  */
];

const quote = document.querySelector("#quote div:first-child");
const kor = document.querySelector("#kor");
const author = document.querySelector("#quote div:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = ` -${todaysQuote.author}-`;
kor.innerText = todaysQuote.kor;

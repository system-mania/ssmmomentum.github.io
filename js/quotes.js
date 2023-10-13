const quotes = [
  {
    quote: '개인적 에너지를 최적화하라',
    author: '더 시스템',
  },
  {
    quote: '매력적인 악인이 되어라',
    author: '악인론',
  },
  {
    quote: '10배 더 많은 행동을 하라',
    author: '10배의 법칙',
  },
  {
    quote: '시스템은 승자들을 위한 것이다.',
    author: '더 시스템',
  },
  {
    quote: '자의식을 해체하라',
    author: '역행자',
  },
  {
    quote: '한계를 뛰어넘어라',
    author: '마지막 몰입',
  },
  {
    quote: 'FASTER기법을 활용하라',
    author: '마지막 몰입',
  },
  {
    quote: '분명하게 만들어라',
    author: '아주 작은 습관의 힘',
  },
  {
    quote: '독자를 생각하며 친절하게 써라',
    author: '초사고 글쓰기',
  },
  {
    quote: '요소들을 이해하고 통제하라',
    author: '시스매',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = ` from ${todaysQuote.author}`;

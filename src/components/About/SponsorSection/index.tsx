import * as S from './styled';

const Images = [
  {
    src: '/ogimage.png',
    name: 'title1',
  },
  {
    src: '/ogimage.png',
    name: 'title2',
  },
  {
    src: '/ogimage.png',
    name: 'title3',
  },
  {
    src: '/ogimage.png',
    name: 'title4',
  },
  {
    src: '/ogimage.png',
    name: 'title5',
  },
  {
    src: '/ogimage.png',
    name: 'title6',
  },
  {
    src: '/ogimage.png',
    name: 'title7',
  },
  {
    src: '/ogimage.png',
    name: 'title8',
  },
  {
    src: '/ogimage.png',
    name: 'title9',
  },
  {
    src: '/ogimage.png',
    name: 'title10',
  },
  {
    src: '/ogimage.png',
    name: 'title11',
  },
  {
    src: '/ogimage.png',
    name: 'title12',
  },
];

const Sponsor = () => {
  return (
    <S.Wrapper>
      <S.Title>후원사 소개</S.Title>
      <S.ImageList>
        {Images.map((image) => (
          <S.Image src={image.src} />
        ))}
      </S.ImageList>
    </S.Wrapper>
  );
};

export default Sponsor;

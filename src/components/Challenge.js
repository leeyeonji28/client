import { useEffect, useState } from "react";

const challengeData = [
  {
    categoryName: "운동",
    challengeTitle: "주 2회 1만보 걷기",
    challengeContent: "안녕하세요",
    challengeStartDate: "2021.07.27",
    challengeEndDate: "2021.08.10",
    challengeHoliday: true,
    challengeImgUrl:
      "https://d2v80xjmx68n4w.cloudfront.net/gigs/JU2Lp1593392669.jpg",
    challengePassword: "1234",
  },
  {
    categoryName: "점심",
    challengeTitle: "주 3회 카페",
    challengeContent: "커피 맛있어",
    challengeStartDate: "2021.06.02",
    challengeEndDate: "2021.07.15",
    challengeHoliday: true,
    challengeImgUrl: "https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E",
    challengePassword: "1234",
  },
  {
    categoryName: "잠",
    challengeTitle: "6시간 자기",
    challengeContent: "잠 좋아요",
    challengeStartDate: "2021.08.25",
    challengeEndDate: "2021.08.30",
    challengeHoliday: false,
    challengeImgUrl:
      "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
    challengePassword: "1234",
  },
  {
    categoryName: "약먹기",
    challengeTitle: "주 5회 약",
    challengeContent: "약약약",
    challengeStartDate: "2021.04.27",
    challengeEndDate: "2021.05.10",
    challengeHoliday: true,
    challengeImgUrl: "http://blog.jinbo.net/attach/615/200937431.jpg",
    challengePassword: "1234",
  },
];

function Challenge() {
  //   const [] = useState();
  //   const getChallenge = async () => {
  //     const Response = await fetch();
  //     const json = await Response.json();
  //   };

  //   useEffect(() => {
  //     getChallenge();
  //   }, []);

  return (
    <div>
      <h2>
        <span>하루조각</span>건강챌린지
      </h2>
      <ul>
        {challengeData.map((challenge, index) => (
          <li key={index}>
            <img src={challenge.challengeImgUrl} alt="" />
            <h3>{challenge.challengeTitle}</h3>
            <p>
              {challenge.challengeStartDate}-{challenge.challengeEndDate}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Challenge;
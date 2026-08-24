// 이 파일은 자동 생성됩니다. 직접 수정하지 마세요.
// 생성: tistory 프로젝트의 `python src/site_sync.py`
// 티스토리에 발행된 기업교육 후기 기록입니다.
// 모집 중인 유료 공개과정(courses 배열)과는 성격이 다르므로 섞지 마세요.

export type TrainingRecord = {
  id: string;
  title: string;
  date: string;      // YYYY-MM-DD
  summary: string;
  thumbnail: string; // public/ 기준 경로 (없으면 빈 문자열)
  tags: string[];
  url: string;       // 티스토리 원문
};

export const trainingLog: TrainingRecord[] = [
  {
    id: "224386751050",
    title: "영어 원서로 수능 대비가 되나요? 워크북 4장으로 보는 구문독해 훈련법",
    date: "2026-08-22",
    summary: "결론부터 말하면, 원서 읽기는 수능 대비와 별개의 활동이 아니다. 수능 영어 지문 자체가 영미권 원문을 짧게 편집한 형태이기 때문이다. 문제는 '원서를 읽느냐'가 아니라 '어떻게 읽느냐'다.",
    thumbnail: "/training/224386751050.png",
    tags: ["영어원서읽기", "구문독해", "수능영어", "문해력"],
    url: "https://readandtalk3.tistory.com/2"
  }
];

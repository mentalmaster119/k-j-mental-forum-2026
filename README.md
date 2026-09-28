# 제3회 한일국제멘탈포럼 2026 공식 랜딩페이지 (The 3rd Japan–Korea International Mental Coaching Forum)

> **Evolution Together — Evolve Together. Create a New Future.**  
> 2026년 10월 3일(토) | 일본 요코하마 관동학원대학 간나이 캠퍼스 17층

본 저장소는 **제3회 한일국제멘탈포럼**의 공식 기능명세서를 기반으로 구현된 **반응형 인터랙티브 랜딩페이지** 및 **Framer 실무 구축 가이드** 패키지입니다.

---

## 🚀 빠른 시작 (Local Preview)

별도의 복잡한 설치 과정 없이 웹 브라우저에서 즉시 확인할 수 있습니다:

### 방법 1. 직접 브라우저로 열기 (macOS)
```bash
open index.html
```

### 방법 2. 로컬 웹 서버 실행 (권장)
```bash
python3 -m http.server 8080
```
브라우저에서 `http://localhost:8080` 으로 접속합니다.

---

## 🌟 구현된 핵심 기능

1. **완전한 3개 국어(Trilingual) 실시간 전환**:
   - **English (기본)** / **한국어** / **日本語** 원클릭 전환
   - 헤더, 히어로, 세션 타임테이블, 8인 연사 소개, 오시는 길, 안내 가이드 전 영역 완벽 번역
   - 브라우저 언어 선택값 LocalStorage 기억 지원

2. **3단계 행사 운영 페이즈 시뮬레이터 (Operational Phase Switcher)**:
   - 상단 유틸리티 바에서 **[Pre-Forum (행사 전 안내)]**, **[Forum Day (행사 당일)]**, **[Post-Forum (아카이브)]** 모드를 즉시 토글하여 화면 변화를 미리 체험할 수 있습니다.
   - 모드에 따라 Hero CTA 및 자료 공개 상태 안내 문구가 유기적으로 변경됩니다.

3. **인터랙티브 타임테이블 & 모바일 반응형 카드**:
   - 데스크톱: 시간 / 카테고리 태그 / 세부 내용 / 발표자 열이 정돈된 표
   - 모바일: 가독성 높은 세로형 카드 레이아웃으로 자동 전환
   - 최종 업데이트 일자 표기 (`Updated on September 28, 2026`)

4. **연사진(8인) 필터 및 Abstract 상세 모달**:
   - 카테고리 필터: `All` | `Keynote` | `Korea Presenters (4명)` | `Japan Presenters (3명)`
   - 한국 연사진 상세 탑재:
     - **염동철 교수** (한국체대): *When Leaders Change, Schools Change*
     - **윤태련 대표** (올댓컨디셔닝): *When Physical Training Meets Mental Coaching*
     - **김성민 대표** (BALANCED): *When the Body Is Stable, the Mind Becomes Clearer*
     - **박철수 대표** (MCCI - Mental Coaching Center Int'l / 국제멘탈코칭센터): *The Future of Mental Coaching* (AI 시대 기술 경쟁을 넘어 인간의 존엄과 주체적 선택을 돕는 코칭의 본질)
   - [Read Abstract] 클릭 시 부드러운 팝업 모달로 발표 개요 확인
   - [Presentation Slides] Google Drive 링크 버튼

5. **Google Drive & Google Photos 아키텍처 연동**:
   - 권한 정책: `Anyone with the link (Viewer)`
   - 4대 리소스 카드 (Program Guide, Korea Sessions, Japan Sessions, Speaker Profiles)
   - 표준 폴더 트리 구조 뷰어 탑재
   - MCCI(국제멘탈코칭센터, Mental Coaching Center Int'l) & Field Flow 공동 10주년(2016–2026) 기관 카드 및 사진 공유 구글 포토 앨범 연동

6. **행사장(Venue) & 당일 현장 가이드 5대 수칙**:
   - 관동학원대학 요코하마 간나이 캠퍼스 17층 (JR 간나이역 도보 2분)
   - 09:40 1층 접수, 점심 도시락(고기/생선), 언어 지원/번역 앱 권장, 저녁 리셉션(야키토리 오오기야)

7. **한국 사무국 (MCCI) 공식 정보 및 직통 문의**:
   - **기관명**: MCCI (국제멘탈코칭센터 / Mental Coaching Center Int'l)
   - **주소**: 서울시 서초구 양재천로15길 1, 제이애드빌딩 3층
   - **담당자**: 천비키 코치 (MCCI 부대표)
   - **연락처**: 010-4457-3850 (원클릭 전화 연결 탑재)

---

## 📁 파일 구조

```text
K_J Mental Forum_2026/
├── index.html                  # 공식 랜딩페이지 시맨틱 마크업
├── css/
│   └── style.css               # 최신 CSS 변수, 반응형 레이아웃, 모던 UI 디자인 시스템
├── js/
│   ├── data.js                 # 3개 국어(EN, KO, JA) 전체 텍스트 및 데이터 사전
│   └── app.js                  # 언어 전환, 페이즈 시뮬레이터, 연사 필터, 모달 로직
├── FRAMER_SPEC_GUIDE.md        # Framer CMS 스키마 및 구축/운영 실무 가이드
└── README.md                   # 프로젝트 개요 및 실행 안내
```

---

## 🎨 Framer로 가져가기 (Framer Migration)

자세한 Framer 컴포넌트 세팅 및 CMS 스키마 설정법은 [`FRAMER_SPEC_GUIDE.md`](./FRAMER_SPEC_GUIDE.md) 문서를 참고해 주십시오.
- CMS 컬렉션 2종 (`Speakers`, `Program Schedule`) 필드 정의 완료
- Framer Localization (`/`, `/ko`, `/ja`) 세팅 가이드 포함
- 시크릿 창 권한 검수 및 체크리스트 포함

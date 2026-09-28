# 제3회 한일국제멘탈포럼 2026 Framer 제작 및 운영 가이드

본 문서는 **제3회 한일국제멘탈포럼(The 3rd Japan–Korea International Mental Coaching Forum)** 공식 랜딩페이지를 **Framer**에서 제작하고, **Google Drive** 및 **Google Photos**와 연동하여 행사 전·당일·행사 후까지 원활하게 운영하기 위한 실무 가이드라인입니다.

---

## 1. Framer 프로젝트 기초 설정

### 1.1 브레이크포인트 (Breakpoints)
- **Desktop (기본)**: `1200px` (Max Content Width: `1200px`)
- **Tablet**: `810px`
- **Phone**: `390px` (모바일 첫 화면에서 행사명, 날짜, 장소, 최소 1개의 CTA가 스크롤 없이 노출되도록 패딩 조정)

### 1.2 디자인 시스템 토큰 (Color & Typography)
#### Color Styles
- `Primary/950 (Dark Navy)`: `#0a0f1d` (헤더, 풋터, 딥 다크 배경)
- `Primary/900 (Slate Navy)`: `#0f172a` (히어로 및 주요 배경)
- `Accent/Blue (Core Action)`: `#2563eb` (기본 CTA, 링크, 하이라이트)
- `Accent/Light Blue`: `#38bdf8` (어두운 배경 위의 보조 강조)
- `Accent/Gold (Celebration)`: `#f59e0b` (MCCI & Field Flow 10주년, 서브 타이틀)
- `Background/Main`: `#f8fafc`
- `Background/Card`: `#ffffff`
- `Border/Subtle`: `#e2e8f0`

#### Text Styles
- **Primary Headings**: `Inter` (영문) / `Pretendard` (국문) / `Noto Sans JP` (일문)
- **H1 (Hero)**: Size `48~64px` / Weight `900` / Line Height `1.1`
- **H2 (Section Title)**: Size `32~40px` / Weight `800` / Line Height `1.2`
- **H3 (Card Title)**: Size `18~20px` / Weight `700` / Line Height `1.4`
- **Body Regular**: Size `16px` (모바일 `15px`) / Line Height `1.7` / Weight `400`
- **Caption / Badge**: Size `12~13px` / Weight `700` / Tracking `0.05em`

---

## 2. Framer CMS 컬렉션 스키마 (CMS Collections)

Framer의 CMS를 활용하면 발표자 정보나 일정 변동 시 캔버스를 건드리지 않고 CMS 표에서 즉각 수정할 수 있습니다.

### 2.1 컬렉션 1: `Speakers` (연사 목록)
| 필드명 (Field Name) | 필드 타입 (Type) | 설명 및 예시 |
| :--- | :--- | :--- |
| `Name (EN)` | Plain Text | `Dong Chul Yeom`, `Prof. Aoyagi` 등 |
| `Name (KO)` | Plain Text | `염동철 교수`, `아오야기 교수` 등 |
| `Name (JA)` | Plain Text | `ヨム・ドンチョル 教授`, `青柳 教授` |
| `Country` | Option / Text | `KR` 또는 `JP` |
| `Category` | Option | `Keynote`, `Korea Presenter`, `Japan Presenter` |
| `Role & Org (EN)` | Plain Text | `Professor, Korea National Sport University` |
| `Role & Org (KO)` | Plain Text | `한국체육대학교 역도학과 교수` |
| `Role & Org (JA)` | Plain Text | `韓国体育大学 重量挙げ学科 教授` |
| `Presentation Topic (EN)` | Plain Text | `When Leaders Change, Schools Change` |
| `Presentation Topic (KO)` | Plain Text | `리더가 변하면 학교가 변한다` |
| `Presentation Topic (JA)` | Plain Text | `リーダーが変われば学校が変わる` |
| `Abstract (EN/KO/JA)` | Formatted Text | 발표 상세 개요 (모달 또는 아코디언 연동) |
| `Slide Download URL` | Link | Google Drive 개별 PDF 공유 링크 |
| `Is Slide Public` | Toggle (Boolean) | 행사 전 `False`, 동의 후 공개 시 `True` |
| `Profile Image` | Image (1:1) | 500x500px 정방형 WebP 프로필 이미지 |
| `Sort Order` | Number | 발표 순서 정렬 번호 (1 ~ 8) |

### 2.2 컬렉션 2: `Program Schedule` (일정 타임테이블)
| 필드명 | 타입 | 설명 |
| :--- | :--- | :--- |
| `Time Range` | Plain Text | `09:40 – 10:00`, `10:40 – 11:40` 등 |
| `Category` | Option | `General`, `Keynote`, `Korea Session`, `Japan Session`, `Workshop`, `Reception` |
| `Session Title (EN/KO/JA)` | Plain Text | 세션명 다국어 |
| `Description (EN/KO/JA)` | Formatted Text | 세부 진행 내용 및 식사/공연 안내 |
| `Speaker / Lead` | Plain Text | 진행자 또는 발표자명 |
| `Sort Order` | Number | 1, 2, 3... (시간 순 정렬) |

---

## 3. 다국어 (Framer Localization) 설정

1. **기본 로케일 (Default Locale)**:
   - `English (EN)`: 국제 포럼의 공용어 기준으로 기본 설정 (`/` 또는 `/en`)
2. **보조 로케일 (Secondary Locales)**:
   - `한국어 (KO)`: `/ko`
   - `日本語 (JA)`: `/ja`
3. **상단 네비게이션 언어 선택기**:
   - Framer의 **Locale Selector** 컴포넌트를 네비게이션 우측 상단에 배치
   - 토글 시 현재 머물고 있는 섹션 앵커(`#program`, `#speakers` 등)를 유지하며 해당 언어 페이지로 전환

---

## 4. Google Drive 및 외부 리소스 연동 표준

### 4.1 권한 및 보안 설정 가이드
1. **공개용 폴더 생성**:
   - `03rd_Japan_Korea_Mental_Coaching_Forum_Public/`
2. **공유 권한 (General Access)**:
   - `Anyone with the link (링크가 있는 모든 사용자)`
   - `Role: Viewer (뷰어)`
   - ⚠️ *절대 Editor나 Commenter 권한으로 링크를 배포하지 마십시오.*
3. **Framer 버튼 링크 연동**:
   - 모든 Drive 링크는 Framer 링크 옵션에서 **"Open in new tab (새 탭에서 열기)"** 체크 필수!

### 4.2 권장 폴더 및 파일 네이밍
```text
Google Drive/
├── 01_Forum_Program/
│   └── 2026_JKMCF_Program_Final.pdf
├── 02_Korea_Speakers/
│   ├── 01_Dong_Chul_Yeom_Slides.pdf
│   ├── 02_Tae_Ryeon_Yoon_Slides.pdf
│   ├── 03_Sung_Min_Kim_Slides.pdf
│   └── 04_Chul_Soo_Park_Slides.pdf
├── 03_Japan_Speakers/
│   ├── 01_Prof_Aoyagi_Keynote.pdf
│   ├── 02_Motonari_Takahashi_Slides.pdf
│   └── 03_Japan_Speakers_Slides.pdf
├── 04_Speaker_Profiles/
│   └── 2026_JKMCF_Speaker_Profiles.pdf
└── 05_Forum_Archive/
    ├── Forum_Summary_Review.pdf
    └── Photos_Archive_Link.txt
```

---

## 5. 단계별(Phase) 3단계 운영 전환 매뉴얼

| 운영 시점 | 주요 목표 | Framer Hero 섹션 구성 | 발표자료(Materials) 노출 상태 |
| :--- | :--- | :--- | :--- |
| **1단계: 행사 전 (D-30 ~ D-1)** | 행사 안내 & 참가 준비 | - 메인 버튼: `View Program`<br>- 서브 버튼: `Presentation Materials` (안내 이동)<br>- 등록 09:40 및 교통편 강조 | "포럼 당일 순차 공개 (Available after session)" 뱃지 표시 |
| **2단계: 행사 당일 (D-Day)** | 모바일 현장 사용성 극대화 | - 메인 버튼: `Live Schedule` (모바일 최적화 표)<br>- 서브 버튼: `Access Handouts`<br>- 1층 접수 및 점심/리셉션 안내 부각 | 확정 발표 슬라이드 다운로드 링크 활성화 |
| **3단계: 행사 후 (Archive)** | 학술 기록 및 아카이브 | - 메인 버튼: `Browse Archive`<br>- 서브 버튼: `View Photo Album`<br>- 후기 및 차기 포럼 연결 | 전체 발표 PDF, MCCI & Field Flow 10주년 사진첩, 요약본 영구 다운로드 제공 |

---

## 6. 점검 체크리스트 (Launch Readiness)

- [ ] **반응형 테스트**: iPhone(390px), iPad(810px), Desktop(1200px+)에서 표와 그리드가 자연스럽게 전환되는지 확인
- [ ] **다국어 매핑**: 영/한/일 3개 국어 전환 시 번역이 누락된 영문 단어가 없는지 전수 검수
- [ ] **시크릿 모드 링크 테스트**: 브라우저 시크릿 창(로그아웃 상태)에서 Google Drive 및 Google Photos 링크 클릭 시 로그인 요구 없이 바로 열리는지 확인
- [ ] **안내 정보 정합성**:
  - 장소: 관동학원대학 요코하마 간나이 캠퍼스 17층
  - 등록: 09:40 1층 로비
  - 점심: 고기/생선 도시락
  - 리셉션: 19:00~21:00 야키토리 오오기야 (참가비 포함)
- [ ] **문의 폼 동작**: Framer Form 또는 mailto 링크(`secretariat@mentalforum2026.org`) 정상 수신 테스트

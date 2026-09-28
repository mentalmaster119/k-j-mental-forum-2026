/**
 * The 3rd Japan-Korea International Mental Coaching Forum 2026
 * Trilingual Content Dictionary & Data Source (EN, KO, JA)
 */

const FORUM_DATA = {
  currentLang: 'en',
  currentPhase: 'pre', // 'pre' (Before Forum), 'day' (Forum Day), 'post' (Post-Forum Archive)

  driveLinks: {
    root: "https://drive.google.com/drive/folders/03rd_Japan_Korea_Mental_Coaching_Forum_Demo",
    programPdf: "https://drive.google.com/file/d/2026_Forum_Program_Final_Demo/view?usp=sharing",
    koreaFolder: "https://drive.google.com/drive/folders/02_Korea_Speakers_Demo?usp=sharing",
    japanFolder: "https://drive.google.com/drive/folders/03_Japan_Speakers_Demo?usp=sharing",
    speakerProfilesPdf: "https://drive.google.com/file/d/Speaker_Profiles_Demo/view?usp=sharing",
    archiveFolder: "https://drive.google.com/drive/folders/05_Forum_Archive_Demo?usp=sharing",
    googlePhotos: "https://photos.google.com/share/field-flow-10th-anniversary-demo",
    googleMaps: "https://maps.google.com/?q=Kanto+Gakuin+University+Yokohama+Kannai+Campus"
  },

  i18n: {
    en: {
      meta: {
        title: "The 3rd Japan–Korea International Mental Coaching Forum 2026 | Evolution Together",
        description: "Official landing page for the 3rd Japan-Korea International Mental Coaching Forum. October 3, 2026 at Kanto Gakuin University Yokohama Kannai Campus."
      },
      nav: {
        about: "ABOUT",
        program: "PROGRAM",
        speakers: "SPEAKERS",
        materials: "MATERIALS",
        venue: "VENUE & GUIDE",
        fieldflow: "MCCI & FIELD FLOW 10TH",
        contact: "CONTACT"
      },
      phases: {
        pre: {
          banner: "Registration is open! The forum takes place on Saturday, October 3, 2026.",
          heroCtaPrimary: "View Program",
          heroCtaSecondary: "Presentation Materials",
          materialsStatus: "Materials will be accessible here as they are released."
        },
        day: {
          banner: "Today is Forum Day! Check in at 1F from 09:40. Sessions begin on 17F at 10:00.",
          heroCtaPrimary: "Live Schedule",
          heroCtaSecondary: "Access Materials",
          materialsStatus: "Live session handouts & slides are now available for participants."
        },
        post: {
          banner: "Thank you for attending! Forum archives, slides, and photo albums are now available.",
          heroCtaPrimary: "Browse Archive",
          heroCtaSecondary: "Download Slides",
          materialsStatus: "All approved presentation slides and event memories are archived below."
        }
      },
      hero: {
        badge: "3rd International Forum · Yokohama 2026",
        mainTitle: "Evolution Together",
        subTitle: "Evolve Together. Create a New Future.",
        description: "A premier international gathering bringing together pioneering mental coaches, elite sports mentors, and educational leaders from Japan and Korea to explore human-centered coaching in the evolving era of AI and technology.",
        date: "Saturday, October 3, 2026",
        time: "10:00 – 18:00 (Reception 19:00 – 21:00)",
        venue: "Kanto Gakuin University, Yokohama Kannai Campus 17F",
        transport: "JR Kannai Station South Exit (2-min walk) / Nihon-odori Station (8-min walk)",
        btnProgram: "View Program",
        btnMaterials: "Presentation Materials",
        stats: [
          { number: "8+", label: "Keynote & Expert Speakers" },
          { number: "2", label: "Countries: Korea & Japan" },
          { number: "1", label: "Shared Vision for Evolution" },
          { number: "10th", label: "MCCI & Field Flow 10th Anniversary" }
        ]
      },
      about: {
        tag: "Forum Philosophy",
        title: "No One Evolves Alone.",
        highlight: "Learn Together · Think Together · Evolve Together",
        p1: "The Japan–Korea International Mental Coaching Forum is an academic and practical exchange platform where coaches, practitioners, and leaders bridge experiences, research, and cultural insights.",
        p2: "As artificial intelligence and rapid technological advances reshape human society, the essence of mental coaching—listening deeply, unlocking authentic potential, and guiding self-determined action—has never been more vital. Through open dialogue and mutual respect, we lay the groundwork for the next generation of coaching.",
        pillars: [
          {
            icon: "learn",
            title: "Learn Together",
            desc: "Bridging elite athletic coaching methodologies with academic sports psychology and clinical insights."
          },
          {
            icon: "think",
            title: "Think Together",
            desc: "Reflecting on human dignity, genuine empowerment, and the vital role of coaches alongside generative AI."
          },
          {
            icon: "evolve",
            title: "Evolve Together",
            desc: "Cultivating an enduring bilateral partnership and professional community across borders."
          }
        ]
      },
      program: {
        tag: "Schedule of Events",
        title: "Forum Program",
        subtitle: "A day filled with transformative lectures, case studies, live artistic performance, and interactive workshops.",
        updated: "Updated on September 28, 2026",
        downloadBtn: "Download Program PDF",
        tableHeaders: {
          time: "Time",
          type: "Category",
          title: "Session Title & Details",
          speaker: "Speaker / Facilitator"
        },
        badgeLive: "Live Today",
        categories: {
          general: "General",
          keynote: "Keynote Lecture",
          korea: "Korea Session",
          japan: "Japan Session",
          workshop: "Workshop",
          reception: "Evening Reception"
        }
      },
      speakers: {
        tag: "Distinguished Speakers",
        title: "Speakers & Presenters",
        subtitle: "Meet the pioneering thinkers and practitioners shaping the future of mental coaching across Korea and Japan.",
        filterAll: "All Speakers",
        filterKeynote: "Keynote",
        filterKorea: "Korea Presenters",
        filterJapan: "Japan Presenters",
        btnAbstract: "View Abstract",
        btnMaterials: "Presentation Slides",
        availableAfter: "Available after session",
        modalClose: "Close"
      },
      materials: {
        tag: "Digital Resources",
        title: "Presentation Materials & Archive",
        subtitle: "All forum handouts and approved presentation slides are hosted securely on Google Drive for seamless viewing and download.",
        drivePolicy: "Permissions: Anyone with the link (Viewer). Presentation slides are made public with each speaker's prior consent.",
        cards: [
          {
            id: "program",
            title: "Forum Program Guide",
            badge: "PDF Document",
            desc: "The complete official schedule, floor guide, speaker biographies, and event notes in high resolution.",
            buttonText: "Download Program (PDF)",
            linkKey: "programPdf"
          },
          {
            id: "korea",
            title: "Korea Session Materials",
            badge: "Folder · 4 Speakers",
            desc: "Presentation slide decks, research summaries, and reference handouts from the four Korean presenters.",
            buttonText: "View Korea Materials",
            linkKey: "koreaFolder"
          },
          {
            id: "japan",
            title: "Japan Session Materials",
            badge: "Folder · 3 Speakers",
            desc: "Case study presentations, sports coaching models, and workshop frameworks from the Japanese presenters.",
            buttonText: "View Japan Materials",
            linkKey: "japanFolder"
          },
          {
            id: "profiles",
            title: "Speaker Profiles & Abstracts",
            badge: "Comprehensive Bio",
            desc: "In-depth profiles, career credentials, organization backgrounds, and presentation summaries for all speakers.",
            buttonText: "View Speaker Profiles",
            linkKey: "speakerProfilesPdf"
          }
        ],
        folderStructureTitle: "Recommended Google Drive Folder Hierarchy",
        folderTree: [
          "📁 03rd_Japan_Korea_Mental_Coaching_Forum/",
          "├── 📁 01_Forum_Program/ (2026_Forum_Program_Final.pdf)",
          "├── 📁 02_Korea_Speakers/ (Slides: Yeom, Yoon, Kim, Park)",
          "├── 📁 03_Japan_Speakers/ (Slides: Takahashi, Japan Speakers)",
          "├── 📁 04_Speaker_Profiles/ (Speaker_Profiles.pdf)",
          "└── 📁 05_Forum_Archive/ (Forum_Review.pdf, Photos)"
        ]
      },
      venue: {
        tag: "Location & Day-of Guide",
        title: "Venue & Attendee Guide",
        subtitle: "Key details on campus navigation, registration, dining, language support, and the networking reception.",
        venueName: "Kanto Gakuin University, Yokohama Kannai Campus",
        venueFloor: "17th Floor Main Conference Hall",
        address: "1-1-10 Bandai-cho, Naka-ku, Yokohama, Kanagawa 231-0031 Japan",
        openMapsBtn: "Open in Google Maps",
        guides: [
          {
            icon: "checkin",
            title: "Registration & Check-in",
            time: "09:40 onwards",
            desc: "Please gather at the 1st Floor Lobby of Kanto Gakuin University for check-in and security clearance before proceeding to the 17th floor."
          },
          {
            icon: "train",
            title: "Public Transportation",
            time: "Superb Accessibility",
            desc: "2-minute walk from JR Kannai Station (South Exit). Approximately 8-minute walk from Nihon-odori Station (Minatomirai Line)."
          },
          {
            icon: "lunch",
            title: "Lunch Bento Service",
            time: "11:40 – 13:00",
            desc: "Japanese Bento boxes (Meat or Fish based on your pre-selection) will be provided along with beverages in exchange for your lunch voucher."
          },
          {
            icon: "language",
            title: "Language & Communication",
            time: "Trilingual Friendly",
            desc: "Volunteer liaisons will be present on-site. Real-time translation apps (DeepL, Google Translate, Papago) are strongly encouraged during free discussions."
          },
          {
            icon: "reception",
            title: "Evening Networking Reception",
            time: "19:00 – 21:00",
            desc: "Sumibi Yakitori Oogiya Yokohama Kannai (3-minute walk from the forum venue). Full reception cost is included in your forum registration fee."
          }
        ]
      },
      fieldflow: {
        tag: "Double 10th Anniversary Milestone (2016–2026)",
        title: "Celebrating 10 Years of MCCI & Field Flow",
        subtitle: "A Decade of Coaching Impact in Korea & Japan — Growing Together into the Next Era",
        description: "Both Korea's MCCI (Mental Coaching Center Int'l) and Japan's Field Flow mark their 10th anniversaries in 2026. For a decade, both organizations have pioneered human-centered mental coaching, empowering athletes, leaders, and communities across Korea and Japan. Join us in celebrating this shared milestone by exploring historic moments and uploading your forum memories to our collaborative album.",
        albumBtn: "Open 10th Anniversary Album",
        uploadBtn: "Share Your Photos (Google Photos)"
      },
      contact: {
        tag: "Inquiries & Support",
        title: "Contact Secretariat",
        subtitle: "Have questions about the forum, materials, or upcoming initiatives? Reach out to our organizing team.",
        emailLabel: "Official Secretariat Email",
        email: "secretariat@mentalforum2026.org",
        orgLabel: "Host & Organizing Committee",
        orgName: "Korea-Japan Mental Coaching Forum Organizing Committee & MCCI & Field Flow",
        koreaOfficeLabel: "Korea Secretariat (MCCI)",
        koreaOrgName: "Mental Coaching Center Int'l (국제멘탈코칭센터)",
        koreaAddress: "3F, J-Add Bldg., 1, Yangjaecheon-ro 15-gil, Seocho-gu, Seoul, Korea",
        koreaContactPerson: "Coach Vicky Cheon (Vice President, MCCI)",
        koreaPhone: "010-4457-3850",
        formName: "Your Full Name",
        formEmail: "Email Address",
        formMessage: "Message / Inquiry",
        formSubmit: "Send Message",
        privacyNotice: "Your personal data will only be utilized for answering your forum inquiry in accordance with our privacy practices."
      },
      footer: {
        rights: "© 2026 The 3rd Japan-Korea International Mental Coaching Forum. All rights reserved.",
        builtWith: "Designed for Framer deployment with Google Drive integration.",
        backToTop: "Back to top ↑"
      }
    },

    ko: {
      meta: {
        title: "제3회 한일국제멘탈포럼 2026 공식 랜딩페이지 | Evolution Together",
        description: "제3회 한일국제멘탈포럼 공식 홈페이지. 2026년 10월 3일(토) 일본 요코하마 관동학원대학 간나이 캠퍼스 17층."
      },
      nav: {
        about: "포럼 소개",
        program: "프로그램",
        speakers: "발표자",
        materials: "발표 자료",
        venue: "장소 및 안내",
        fieldflow: "MCCI & Field Flow 10주년",
        contact: "문의하기"
      },
      phases: {
        pre: {
          banner: "사전 안내 모드: 2026년 10월 3일(토) 요코하마에서 개최됩니다.",
          heroCtaPrimary: "프로그램 보기",
          heroCtaSecondary: "발표 자료",
          materialsStatus: "발표 자료는 사전 동의 및 공개 일정에 맞춰 순차적으로 연동됩니다."
        },
        day: {
          banner: "행사 당일 모드: 오전 09:40부터 1층 로비에서 접수 진행! 포럼은 17층에서 10시에 시작됩니다.",
          heroCtaPrimary: "실시간 일정 확인",
          heroCtaSecondary: "현장 발표자료 열람",
          materialsStatus: "당일 발표 세션 핸드아웃 및 슬라이드를 구글 드라이브에서 열람하실 수 있습니다."
        },
        post: {
          banner: "행사 후 아카이브 모드: 제3회 포럼이 성황리에 종료되었습니다. 발표 자료와 사진을 확인해보세요.",
          heroCtaPrimary: "아카이브 둘러보기",
          heroCtaSecondary: "발표자료 다운로드",
          materialsStatus: "전체 프로그램 및 확정 발표자료, 현장 스케치 아카이브가 공개되었습니다."
        }
      },
      hero: {
        badge: "제3회 한·일 국제 포럼 · 요코하마 2026",
        mainTitle: "Evolution Together",
        subTitle: "Evolve Together. Create a New Future.",
        description: "한국과 일본의 멘탈코칭 전문가, 스포츠·교육 지도자가 함께 모여 AI와 대변혁의 시대에 인간 중심 코칭의 가치와 새로운 미래를 여는 국제 학술·실천 교류의 장입니다.",
        date: "2026년 10월 3일 (토요일)",
        time: "10:00 – 18:00 (네트워킹 리셉션 19:00 – 21:00)",
        venue: "일본 요코하마 관동학원대학 간나이 캠퍼스 17층",
        transport: "JR 간나이역 남쪽 출구 도보 2분 / 니혼오도리역 도보 8분",
        btnProgram: "프로그램 확인하기",
        btnMaterials: "발표 자료 열람",
        stats: [
          { number: "8명+", label: "기조강연 및 한·일 전문 발표자" },
          { number: "2개국", label: "한국 & 일본 공동 주최" },
          { number: "1일", label: "집중 포럼 & 인터랙티브 워크숍" },
          { number: "10주년", label: "MCCI & Field Flow 공동 10주년" }
        ]
      },
      about: {
        tag: "포럼 철학 & 메시지",
        title: "No One Evolves Alone.",
        highlight: "Learn Together · Think Together · Evolve Together",
        p1: "제3회 한일국제멘탈포럼은 한국과 일본의 멘탈코치가 서로의 현장 경험과 학문적 깊이, 문화적 통찰을 나누며 함께 성장하는 자리입니다.",
        p2: "인공지능(AI)과 첨단 기술이 삶의 전 영역으로 확산되는 대전환의 시대, 멘탈코칭은 기술과의 경쟁이 아닌 인간 본연의 고유한 가치와 자율적 의사결정을 밝히는 등불이 되어야 합니다. 두 나라 코치진이 머리를 맞대고 새로운 미래를 모색합니다.",
        pillars: [
          {
            icon: "learn",
            title: "함께 배우다 (Learn Together)",
            desc: "엘리트 스포츠부터 교육 현장까지, 한·일 양국의 실전 멘탈 트레이닝 및 코칭 방법론을 심도 있게 교류합니다."
          },
          {
            icon: "think",
            title: "함께 사유하다 (Think Together)",
            desc: "AI 기술 혁신 속에서 인간의 주체성과 내면적 존엄성을 지키는 멘탈코치의 본질적 소명을 깊이 성찰합니다."
          },
          {
            icon: "evolve",
            title: "함께 진화하다 (Evolve Together)",
            desc: "일회성 행사를 넘어 지속 가능한 한·일 코치 연대 네트워크를 구축하고 함께 미래를 설계합니다."
          }
        ]
      },
      program: {
        tag: "행사 타임테이블",
        title: "포럼 상세 프로그램",
        subtitle: "기조강연, 한·일 7인 발표, 특별 공연, 전원 참여 그룹 워크숍, 저녁 리셉션까지 빈틈없이 구성된 일정입니다.",
        updated: "최종 업데이트: 2026년 9월 28일",
        downloadBtn: "전체 프로그램 PDF 다운로드",
        tableHeaders: {
          time: "시간",
          type: "구분",
          title: "세션 주제 및 세부 내용",
          speaker: "발표자 / 진행"
        },
        badgeLive: "진행 중",
        categories: {
          general: "공통 안내",
          keynote: "기조 강연",
          korea: "한국 세션",
          japan: "일본 세션",
          workshop: "그룹 워크숍",
          reception: "네트워킹 리셉션"
        }
      },
      speakers: {
        tag: "초청 연사 소개",
        title: "기조강연 및 발표자",
        subtitle: "스포츠 현장, 대학 강단, 코칭 산업 최전선에서 변화를 이끌어가는 한·일 대표 연사진을 소개합니다.",
        filterAll: "전체 보기",
        filterKeynote: "기조강연",
        filterKorea: "한국 발표자 (4명)",
        filterJapan: "일본 발표자 (3명)",
        btnAbstract: "발표 개요 보기",
        btnMaterials: "발표 자료 (PDF)",
        availableAfter: "포럼 당일 순차 공개",
        modalClose: "닫기"
      },
      materials: {
        tag: "자료 열람 및 다운로드",
        title: "발표 자료 및 공식 아카이브",
        subtitle: "포럼의 공식 자료는 구글 드라이브(Google Drive)와 안전하게 연동되어 참가자 누구나 편리하게 다운로드할 수 있습니다.",
        drivePolicy: "공개 권한: 링크가 있는 모든 사용자(뷰어). 연사 사전 동의를 거친 공식 자료만 안전하게 배포됩니다.",
        cards: [
          {
            id: "program",
            title: "공식 프로그램 가이드",
            badge: "PDF 문서",
            desc: "전체 타임테이블, 행사장 층별 안내도, 연사진 프로필 요약본이 수록된 공식 안내 브로슈어입니다.",
            buttonText: "프로그램 다운로드 (PDF)",
            linkKey: "programPdf"
          },
          {
            id: "korea",
            title: "한국 세션 발표자료",
            badge: "공유 폴더 · 발표자 4인",
            desc: "염동철 교수, 윤태련 대표, 김성민 대표, 박철수 대표의 발표 슬라이드 및 세션 보충 자료 모음.",
            buttonText: "한국 발표자료 열람",
            linkKey: "koreaFolder"
          },
          {
            id: "japan",
            title: "일본 세션 발표자료",
            badge: "공유 폴더 · 발표자 3인",
            desc: "타카하시 모토나리 코치 및 일본 발표진의 최신 실천 케이스 스터디 및 프레임워크 자료 모음.",
            buttonText: "일본 발표자료 열람",
            linkKey: "japanFolder"
          },
          {
            id: "profiles",
            title: "발표자 상세 프로필북",
            badge: "통합 프로필 PDF",
            desc: "기조연설자를 포함한 8명 연사의 학문적 배경, 코칭 이력, 발표 초록이 국·영·일문으로 정리된 프로필 문서입니다.",
            buttonText: "발표자 프로필 열람",
            linkKey: "speakerProfilesPdf"
          }
        ],
        folderStructureTitle: "표준 구글 드라이브 아카이브 구조",
        folderTree: [
          "📁 03rd_Japan_Korea_Mental_Coaching_Forum/",
          "├── 📁 01_Forum_Program/ (2026_Forum_Program_Final.pdf)",
          "├── 📁 02_Korea_Speakers/ (Dong_Chul_Yeom, Tae_Ryeon_Yoon, Sung_Min_Kim, Chul_Soo_Park)",
          "├── 📁 03_Japan_Speakers/ (Motonari_Takahashi, Japan_Speakers)",
          "├── 📁 04_Speaker_Profiles/ (Speaker_Profiles.pdf)",
          "└── 📁 05_Forum_Archive/ (Forum_Review.pdf, Photos)"
        ]
      },
      venue: {
        tag: "오시는 길 & 당일 안내",
        title: "행사장 위치 및 참가자 안내",
        subtitle: "등록 시간, 대중교통, 점심 식사, 소통 지원 및 저녁 네트워킹 리셉션 정보를 확인하세요.",
        venueName: "일본 관동학원대학 요코하마 간나이 캠퍼스",
        venueFloor: "17층 메인 콘퍼런스 홀",
        address: "〒231-0031 神奈川県横浜市中区万代町1-1-10",
        openMapsBtn: "Google 지도에서 열기",
        guides: [
          {
            icon: "checkin",
            title: "등록 및 접수 안내",
            time: "오전 09:40부터",
            desc: "관동학원대학 1층 로비 등록 데스크에서 명찰 수령 및 출입 확인 후, 엘리베이터를 이용해 17층 본행사장으로 이동합니다."
          },
          {
            icon: "train",
            title: "대중교통 오시는 길",
            time: "도보 2분 거리",
            desc: "JR 간나이(関内)역 남쪽 출구(南口)에서 도보 2분. 요코하마 고속철도 미나토미라이선 니혼오도리(日本大通り)역에서 도보 약 8분."
          },
          {
            icon: "lunch",
            title: "점심 도시락 제공",
            time: "11:40 – 13:00",
            desc: "사전 선택하신 정식 도시락(고기 Bento 또는 생선 Bento)과 음료가 제공됩니다. 접수 시 수령하신 식권을 준비해 주세요."
          },
          {
            icon: "language",
            title: "언어 지원 및 소통",
            time: "한·일 양방향 지원",
            desc: "현장 통역 자원봉사자가 배치되며, 자유 토론 시 스마트폰 실시간 번역 앱(DeepL, 파파고, 구글 번역) 활용을 적극 권장합니다."
          },
          {
            icon: "reception",
            title: "공식 네트워킹 리셉션",
            time: "19:00 – 21:00",
            desc: "장소: 숯불 야키토리 오오기야 요코하마 간나이점 (포럼 행사장 도보 약 3분). 포럼 등록비에 리셉션 비용 전액이 포함되어 있습니다."
          }
        ]
      },
      fieldflow: {
        tag: "한·일 공동 10주년 기념 (2016–2026)",
        title: "MCCI & Field Flow 창립 10주년을 함께 축하합니다",
        subtitle: "Share Your Memories with MCCI & Field Flow — 지난 10년의 여정과 오늘의 만남을 함께 기록합니다.",
        description: "대한민국의 MCCI(국제멘탈코칭센터, Mental Coaching Center Int'l)와 일본의 Field Flow가 2026년 나란히 창립 10주년을 맞이했습니다. 지난 10년 동안 양 기관은 스포츠, 교육, 비즈니스 현장에서 인간 중심의 멘탈코칭을 개척하며 수많은 선수와 리더의 잠재력을 꽃피워 왔습니다. 양국의 깊은 신뢰와 연대로 이루어낸 10년의 발자취와 이번 포럼의 순간들을 공동 기념 앨범에 함께 기록해 주세요.",
        albumBtn: "10주년 공동 사진 앨범 열기",
        uploadBtn: "추억 사진 공유하기 (Google Photos)"
      },
      contact: {
        tag: "문의 및 사무국",
        title: "포럼 사무국 문의",
        subtitle: "포럼 참가, 발표 자료, 후속 교류 프로그램에 대한 문의 사항을 남겨주시면 신속히 답변해 드립니다.",
        emailLabel: "사무국 공식 이메일",
        email: "secretariat@mentalforum2026.org",
        orgLabel: "주최 및 주관",
        orgName: "한일국제멘탈포럼 조직위원회 · MCCI · Field Flow",
        koreaOfficeLabel: "한국 사무국 (MCCI)",
        koreaOrgName: "국제멘탈코칭센터 (Mental Coaching Center Int'l)",
        koreaAddress: "서울시 서초구 양재천로15길 1, 제이애드빌딩 3층",
        koreaContactPerson: "천비키 코치 (MCCI 부대표)",
        koreaPhone: "010-4457-3850",
        formName: "이름",
        formEmail: "이메일 주소",
        formMessage: "문의 내용",
        formSubmit: "문의 보내기",
        privacyNotice: "남겨주신 개인정보는 포럼 문의 답변 처리 목적으로만 안전하게 활용됩니다."
      },
      footer: {
        rights: "© 2026 제3회 한일국제멘탈포럼 조직위원회. All rights reserved.",
        builtWith: "Framer 배포 및 Google Drive 연동 최적화 규격으로 제작되었습니다.",
        backToTop: "맨 위로 이동 ↑"
      }
    },

    ja: {
      meta: {
        title: "第3回 日韓国際メンタルフォーラム 2026 公式ランディングページ | Evolution Together",
        description: "第3回日韓国際メンタルフォーラム公式ウェブサイト。2026年10月3日（土）関東学院大学 横浜・関内キャンパス17階にて開催。"
      },
      nav: {
        about: "フォーラムについて",
        program: "プログラム",
        speakers: "登壇者紹介",
        materials: "発表資料",
        venue: "会場・当日のご案内",
        fieldflow: "MCCI＆Field Flow 10周年",
        contact: "お問い合わせ"
      },
      phases: {
        pre: {
          banner: "事前案内モード：2026年10月3日（土）横浜にて開催されます。",
          heroCtaPrimary: "プログラムを見る",
          heroCtaSecondary: "発表資料",
          materialsStatus: "発表資料はセッション開始および公開許諾に合わせて順次公開されます。"
        },
        day: {
          banner: "当日モード：午前9時40分より大学1階にて受付開始！フォーラムは17階にて10時スタートです。",
          heroCtaPrimary: "タイムテーブル確認",
          heroCtaSecondary: "当日の発表資料",
          materialsStatus: "当日のハンドアウトおよび発表スライドをGoogle Driveでご確認いただけます。"
        },
        post: {
          banner: "終了後アーカイブモード：第3回フォーラムは盛況のうちに終了しました。記録資料と写真をご覧いただけます。",
          heroCtaPrimary: "アーカイブを見る",
          heroCtaSecondary: "資料ダウンロード",
          materialsStatus: "公式発表スライド、プログラム、記念写真アーカイブを公開しています。"
        }
      },
      hero: {
        badge: "第3回 日韓国際メンタルフォーラム · 横浜 2026",
        mainTitle: "Evolution Together",
        subTitle: "Evolve Together. Create a New Future.",
        description: "韓国と日本のメンタルコーチ、スポーツ・教育指導者が集い、AI時代における人間中心のコーチングの意義と新たな未来を共創する国際フォーラムです。",
        date: "2026年10月3日（土曜日）",
        time: "10:00 – 18:00（懇親会 19:00 – 21:00）",
        venue: "関東学院大学 横浜・関内キャンパス 17階",
        transport: "JR関内駅 南口より徒歩2分 / 日本大通り駅より徒歩8分",
        btnProgram: "プログラムを見る",
        btnMaterials: "発表資料を見る",
        stats: [
          { number: "8名+", label: "基調講演および日韓登壇者" },
          { number: "2カ国", label: "日本 & 韓国 共同連携" },
          { number: "1日", label: "集中フォーラム＆ワークショップ" },
          { number: "10周年", label: "MCCI＆Field Flow 共同10周年" }
        ]
      },
      about: {
        tag: "フォーラムの理念",
        title: "No One Evolves Alone.",
        highlight: "Learn Together · Think Together · Evolve Together",
        p1: "第3回日韓国際メンタルコーチングフォーラムは、日本と韓国のメンタルコーチが現場の実践知、学術的洞察、文化的視点を持ち寄り、共に学び進化するための交流基盤です。",
        p2: "AIや先端テクノロジーが急速に普及する現代において、クライアントの可能性を深く信じ、自律的な選択と行動を支えるメンタルコーチの本質は一層重要性を増しています。国境を越えた対話を通じて、次世代のコーチングを拓きます。",
        pillars: [
          {
            icon: "learn",
            title: "共に学ぶ（Learn Together）",
            desc: "トップアスリートの指導現場から教育現場まで、日韓の先駆的なコーチング手法と実践知を深く学び合います。"
          },
          {
            icon: "think",
            title: "共に思索する（Think Together）",
            desc: "AI時代における人間の尊厳や主体性、そしてメンタルコーチが果たすべき真の役割を深く探求します。"
          },
          {
            icon: "evolve",
            title: "共に進化する（Evolve Together）",
            desc: "一時的なイベントにとどまらず、持続的な日韓コーチネットワークを構築し、未来の新たなスタンダードを共創します。"
          }
        ]
      },
      program: {
        tag: "当日のスケジュール",
        title: "フォーラム プログラム",
        subtitle: "基調講演、日韓登壇セッション、特別公演、グループワーク、懇親会まで充実したプログラムです。",
        updated: "最終更新：2026年9月28日",
        downloadBtn: "プログラムPDFをダウンロード",
        tableHeaders: {
          time: "時間",
          type: "区分",
          title: "セッション内容・詳細",
          speaker: "登壇者 / 進行"
        },
        badgeLive: "進行中",
        categories: {
          general: "共通案内",
          keynote: "基調講演",
          korea: "韓国セッション",
          japan: "日本セッション",
          workshop: "グループワーク",
          reception: "懇親レセプション"
        }
      },
      speakers: {
        tag: "登壇者プロフィール",
        title: "登壇者一覧",
        subtitle: "スポーツ、大学教育、メンタルコーチング界の第一線で活躍する日韓の登壇陣をご紹介します。",
        filterAll: "すべて",
        filterKeynote: "基調講演",
        filterKorea: "韓国登壇者（4名）",
        filterJapan: "日本登壇者（3名）",
        btnAbstract: "講演要旨を見る",
        btnMaterials: "発表資料（PDF）",
        availableAfter: "セッション後に順次公開",
        modalClose: "閉じる"
      },
      materials: {
        tag: "配布資料・ダウンロード",
        title: "発表資料＆公式アーカイブ",
        subtitle: "フォーラムの公式資料はGoogle Driveにて安全かつ便利に閲覧・ダウンロードいただけます。",
        drivePolicy: "公開権限：「リンクを知っている全員（閲覧者）」。登壇者の事前同意を得た資料のみ公開されます。",
        cards: [
          {
            id: "program",
            title: "公式プログラムガイド",
            badge: "PDFファイル",
            desc: "当日のタイムテーブル、フロアマップ、登壇者略歴を収録した高解像度公式プログラムです。",
            buttonText: "プログラムをダウンロード（PDF）",
            linkKey: "programPdf"
          },
          {
            id: "korea",
            title: "韓国セッション発表資料",
            badge: "共有フォルダ · 4名",
            desc: "ヨム・ドンチョル教授、ユン・テリョン代表、キム・ソンミン代表、パク・チョルス代表の発表スライド集。",
            buttonText: "韓国セッション資料を見る",
            linkKey: "koreaFolder"
          },
          {
            id: "japan",
            title: "日本セッション発表資料",
            badge: "共有フォルダ · 3名",
            desc: "高橋元成コーチをはじめとする日本側登壇者の実践ケーススタディおよびフレームワーク資料。",
            buttonText: "日本セッション資料を見る",
            linkKey: "japanFolder"
          },
          {
            id: "profiles",
            title: "登壇者プロフィールブック",
            badge: "統合プロフィールPDF",
            desc: "基調講演者を含む登壇者8名の経歴、専門領域、講演要旨を収録したプロフィール集です。",
            buttonText: "プロフィール集を見る",
            linkKey: "speakerProfilesPdf"
          }
        ],
        folderStructureTitle: "推奨 Google Drive フォルダ構造",
        folderTree: [
          "📁 03rd_Japan_Korea_Mental_Coaching_Forum/",
          "├── 📁 01_Forum_Program/ (2026_Forum_Program_Final.pdf)",
          "├── 📁 02_Korea_Speakers/ (Dong_Chul_Yeom, Tae_Ryeon_Yoon, Sung_Min_Kim, Chul_Soo_Park)",
          "├── 📁 03_Japan_Speakers/ (Motonari_Takahashi, Japan_Speakers)",
          "├── 📁 04_Speaker_Profiles/ (Speaker_Profiles.pdf)",
          "└── 📁 05_Forum_Archive/ (Forum_Review.pdf, Photos)"
        ]
      },
      venue: {
        tag: "アクセス＆当日案内",
        title: "会場アクセス・当日のご案内",
        subtitle: "受付時間、交通アクセス、ご昼食、言語サポート、懇親会会場についてのご案内です。",
        venueName: "関東学院大学 横浜・関内キャンパス",
        venueFloor: "17階 メインカンファレンスホール",
        address: "〒231-0031 神奈川県横浜市中区万代町1-1-10",
        openMapsBtn: "Google Mapsで開く",
        guides: [
          {
            icon: "checkin",
            title: "受付・チェックイン",
            time: "09:40より開始",
            desc: "関東学院大学1階ロビーの受付デスクにて入館手続きとネームホルダーをお受け取りいただき、17階へお上がりください。"
          },
          {
            icon: "train",
            title: "交通アクセス",
            time: "駅近好アクセス",
            desc: "JR「関内駅」南口より徒歩2分。横浜高速鉄道みなとみらい線「日本大通り駅」より徒歩約8分。"
          },
          {
            icon: "lunch",
            title: "昼食弁当のご提供",
            time: "11:40 – 13:00",
            desc: "事前選択いただいた和食御膳（お肉弁当 または お魚弁当）とお茶をご用意しております。受付時のお引換券をご利用ください。"
          },
          {
            icon: "language",
            title: "言語・コミュニケーション",
            time: "日韓バイリンガル支援",
            desc: "当日は語学ボランティアがサポートいたします。フリートーク時はスマートフォンの翻訳アプリ（DeepL、Google翻訳、Papago等）のご活用を推奨します。"
          },
          {
            icon: "reception",
            title: "懇親レセプション（夕食）",
            time: "19:00 – 21:00",
            desc: "炭火やきとり 扇屋 横浜関内店（フォーラム会場より徒歩約3分）。参加費はフォーラム登録料に含まれております。"
          }
        ]
      },
      fieldflow: {
        tag: "日韓共同 創立10周年記念（2016–2026）",
        title: "MCCI＆Field Flow 創立10周年を共に祝う",
        subtitle: "Share Your Memories with MCCI & Field Flow — 10年の歩みと未来への絆を共に祝う記念アルバムです。",
        description: "韓国のMCCI（国際メンタルコーチングセンター / Mental Coaching Center Int'l）と日本のField Flowは、共に2026年に創立10周年を迎えました。過去10年間にわたり、両組織はスポーツ、教育、ビジネスの現場で人間中心のメンタルコーチングを切り拓き、多くの指導者やアスリートの成長を伴走してきました。両国の絆と10年の歩み、そして本フォーラムの想い出を共同記念アルバムにぜひ共有してください。",
        albumBtn: "10周年共同記念アルバムを開く",
        uploadBtn: "想い出の写真を共有する（Google Photos）"
      },
      contact: {
        tag: "事務局お問い合わせ",
        title: "お問い合わせ",
        subtitle: "フォーラムに関するご質問、資料閲覧、今後の連携等についてお気軽にお問い合わせください。",
        emailLabel: "事務局公式メールアドレス",
        email: "secretariat@mentalforum2026.org",
        orgLabel: "主催・運営",
        orgName: "日韓国際メンタルフォーラム運営委員会 · MCCI · Field Flow",
        koreaOfficeLabel: "韓国事務局（MCCI）",
        koreaOrgName: "国際メンタルコーチングセンター（MCCI）",
        koreaAddress: "ソウル特別市瑞草区良才川路15キル1、J-Addビル3階",
        koreaContactPerson: "チョン・ビキ コーチ（MCCI副代表）",
        koreaPhone: "+82-10-4457-3850",
        formName: "お名前",
        formEmail: "メールアドレス",
        formMessage: "お問い合わせ内容",
        formSubmit: "送信する",
        privacyNotice: "ご入力いただいた個人情報は、お問い合わせへの回答目的のみに使用いたします。"
      },
      footer: {
        rights: "© 2026 第3回日韓国際メンタルフォーラム運営委員会. All rights reserved.",
        builtWith: "Framer公開およびGoogle Drive連携に最適化された設計です。",
        backToTop: "トップへ戻る ↑"
      }
    }
  },

  // Program Sessions Array
  sessions: [
    {
      time: "09:40 – 10:00",
      categoryKey: "general",
      en: {
        title: "Registration & Welcome Check-in",
        desc: "Check-in at the 1st Floor Campus Lobby, receive name badges & lunch vouchers, proceed to the 17th Floor Conference Hall.",
        speaker: "Forum Secretariat & Staff"
      },
      ko: {
        title: "참가자 등록 및 안내 데스크 접수",
        desc: "대학교 1층 로비 집결 및 접수, 명찰 및 점심 식권 수령 후 17층 메인 행사장으로 이동",
        speaker: "포럼 사무국 및 스태프"
      },
      ja: {
        title: "受付開始・チェックイン",
        desc: "関東学院大学1階ロビーにて受付、ネームカード・昼食引換券をお受け取りの上、17階会場へご入場ください。",
        speaker: "事務局・運営スタッフ"
      }
    },
    {
      time: "10:00 – 10:20",
      categoryKey: "general",
      en: {
        title: "Opening Ceremony & Welcome Remarks",
        desc: "Opening address by Korean & Japanese representatives; introducing the 2026 theme 'Evolution Together'.",
        speaker: "Organizing Committee Chairs"
      },
      ko: {
        title: "개회식 및 환영 인사",
        desc: "한·일 대표 주최자 개회사 및 2026 포럼 슬로건 'Evolution Together' 선포",
        speaker: "한·일 공동 조직위원장"
      },
      ja: {
        title: "開会式・開会宣言",
        desc: "日韓両国代表による開会挨拶およびフォーラムスローガン「Evolution Together」の共有",
        speaker: "日韓共同実行委員長"
      }
    },
    {
      time: "10:20 – 10:40",
      categoryKey: "general",
      en: {
        title: "Icebreaking & Networking Warm-up",
        desc: "Interactive session to build rapport among attendees across language and cultural boundaries.",
        speaker: "Forum Facilitator"
      },
      ko: {
        title: "아이스브레이크 & 네트워킹 웜업",
        desc: "참가자 간의 친밀감 형성, 언어와 문화의 장벽을 낮추는 참여형 라포 세션",
        speaker: "포럼 퍼실리테이터"
      },
      ja: {
        title: "アイスブレイク＆ネットワーキング導入",
        desc: "参加者同士の心理的距離を縮め、言語や文化の壁を越えて打ち解けるウォームアップセッション",
        speaker: "ファシリテーター"
      }
    },
    {
      time: "10:40 – 11:40",
      categoryKey: "keynote",
      en: {
        title: "Keynote Lecture: The Horizon of Contemporary Sports & Mental Science",
        desc: "Deep exploration into systemic coaching, psychological resilience, and evidence-based mental mastery.",
        speaker: "Prof. Aoyagi (Kanto Gakuin University / Sports Psychology)"
      },
      ko: {
        title: "기조강연: 현대 스포츠와 멘탈 사이언스의 새로운 지평",
        desc: "스포츠 심리학과 실증적 코칭 과학이 제시하는 인간 잠재력 발현과 심리적 회복탄력성 모델",
        speaker: "아오야기 교수 (Prof. Aoyagi)"
      },
      ja: {
        title: "基調講演：現代スポーツとメンタルサイエンスの新地平",
        desc: "スポーツ心理学とエビデンスに基づくコーチングサイエンスが示す、人間の可能性開花とレジリエンス",
        speaker: "青柳 教授（関東学院大学 / スポーツ心理学）"
      }
    },
    {
      time: "11:40 – 13:00",
      categoryKey: "general",
      en: {
        title: "Lunch & Informal Networking",
        desc: "Enjoy Japanese Bento (Meat or Fish) at designated dining lounges; cross-cultural exchange.",
        speaker: "All Participants"
      },
      ko: {
        title: "점심 식사 및 교류",
        desc: "사전 선택 도시락(고기 Bento / 생선 Bento) 식사 및 참가자 간 자유 대화",
        speaker: "전체 참가자"
      },
      ja: {
        title: "昼食休憩＆フリーネットワーキング",
        desc: "特製お弁当（肉または魚）のお食事および参加者同士の自由歓談",
        speaker: "参加者全員"
      }
    },
    {
      time: "13:00 – 14:40",
      categoryKey: "korea",
      en: {
        title: "Korea Session Presentations (4 Speakers)",
        desc: "Four in-depth presentations highlighting leadership evolution, physical-mental synergy, somatic stability, and AI-era coaching.",
        speaker: "Dong Chul Yeom · Tae Ryeon Yoon · Sung Min Kim · Chul Soo Park"
      },
      ko: {
        title: "한국 발표 세션 (4인 집중 발표)",
        desc: "1) 염동철: 리더가 변하면 학교가 변한다 | 2) 윤태련: 피지컬 트레이닝과 멘탈코칭의 만남 | 3) 김성민: 몸이 안정될 때 마음은 더 선명해진다 | 4) 박철수: 멘탈코칭의 미래",
        speaker: "염동철 교수 · 윤태련 대표 · 김성민 대표 · 박철수 대표"
      },
      ja: {
        title: "韓国登壇セッション（4名連続発表）",
        desc: "1) ヨム・ドンチョル：リーダーが変われば学校が変わる | 2) ユン・テリョン：フィジカルとメンタルの融合 | 3) キム・ソンミン：身体が安定すれば心は澄みわたる | 4) パク・チョルス：メンタルコーチングの未来",
        speaker: "ヨム・ドンチョル · ユン・テリョン · キム・ソンミン · パク・チョルス"
      }
    },
    {
      time: "14:40 – 15:00",
      categoryKey: "general",
      en: {
        title: "Break & Live Performance",
        desc: "Refreshing coffee break featuring a special artistic / musical celebration performance.",
        speaker: "Guest Artist & Performers"
      },
      ko: {
        title: "휴식 및 특별 문화 공연",
        desc: "리프레시 티타임 및 포럼을 기념하는 예술/음악 축하 무대",
        speaker: "초청 아티스트"
      },
      ja: {
        title: "休憩＆特別アニバーサリー公演",
        desc: "リフレッシュタイムおよびフォーラムを祝う特別芸術パフォーマンス",
        speaker: "ゲストパフォーマー"
      }
    },
    {
      time: "15:00 – 16:30",
      categoryKey: "japan",
      en: {
        title: "Japan Session Presentations (3 Speakers)",
        desc: "Cutting-edge Japanese field cases: high-performance team coaching, youth development, and systemic mental frameworks.",
        speaker: "Motonari Takahashi · Japan Speaker 02 · Japan Speaker 03"
      },
      ko: {
        title: "일본 발표 세션 (3인 집중 발표)",
        desc: "타카하시 모토나리 코치를 비롯한 일본 멘탈코칭 전문가 3인의 실전 사례 및 시스템 코칭 방법론",
        speaker: "타카하시 모토나리 · 일본 발표자 2 · 일본 발표자 3"
      },
      ja: {
        title: "日本登壇セッション（3名発表）",
        desc: "高橋元成氏をはじめとする日本側メンタルコーチ3名による実践事例、組織パフォーマンス向上モデルの共有",
        speaker: "高橋 元成 · 日本側登壇者2 · 日本側登壇者3"
      }
    },
    {
      time: "16:30 – 17:30",
      categoryKey: "workshop",
      en: {
        title: "Interactive Group Workshop & Discussion",
        desc: "Cross-border breakout circles: Reflecting on common challenges, best practices, and co-creating future paradigms.",
        speaker: "Bilingual Group Facilitators"
      },
      ko: {
        title: "참여형 그룹 워크숍 & 토론",
        desc: "한·일 혼합 소그룹 테이블 구성: 현장 고민 나눔, 우수 실천사례 상호 피드백 및 미래 코칭 로드맵 도출",
        speaker: "소그룹 퍼실리테이터"
      },
      ja: {
        title: "対話型グループワークショップ＆全体討議",
        desc: "日韓混合テーブルによる対話：現場の課題共有、相互フィードバック、次世代コーチングの協創",
        speaker: "グループファシリテーター"
      }
    },
    {
      time: "17:30 – 18:00",
      categoryKey: "general",
      en: {
        title: "Reflections, Commemorative Photo & Closing",
        desc: "Closing reflections, announcement of future initiatives, group commemorative photo.",
        speaker: "All Participants"
      },
      ko: {
        title: "전체 랩업, 기념 단체 촬영 및 폐회식",
        desc: "하루의 성찰 공유, 차기 포럼 비전 공유, 전체 단체 기념 촬영 및 공식 폐회",
        speaker: "전체 참가자"
      },
      ja: {
        title: "振り返り・全体記念撮影・閉会式",
        desc: "本日の学びの総括、次回フォーラムへの展望、参加者全員による記念集合写真撮影、閉会",
        speaker: "参加者全員"
      }
    },
    {
      time: "19:00 – 21:00",
      categoryKey: "reception",
      en: {
        title: "Official Networking Reception & Dinner",
        desc: "Sumibi Yakitori Oogiya Yokohama Kannai (3-min walk from venue). Deepen bonds over dinner and drinks (included in registration).",
        speaker: "All Registered Forum Guests"
      },
      ko: {
        title: "공식 네트워킹 리셉션 (석식 만찬)",
        desc: "장소: 숯불 야키토리 오오기야 요코하마 간나이점 (도보 3분). 포럼 등록비에 일체 포함된 친교 만찬.",
        speaker: "포럼 참가자 전원"
      },
      ja: {
        title: "公式懇親レセプション（ディナー懇親会）",
        desc: "会場：炭火やきとり 扇屋 横浜関内店（会場より徒歩3分）。参加費はフォーラム登録料に含まれます。",
        speaker: "フォーラム参加者全員"
      }
    }
  ],

  // Speakers Array
  speakersList: [
    {
        "id": "aoyagi",
        "country": "JP",
        "category": "keynote",
        "nameEn": "Dr. Aoyagi",
        "nameKo": "아오야기 교수",
        "nameJa": "青柳 敏久 教授",
        "roleEn": "Professor of Sports Psychology / Keynote Speaker",
        "roleKo": "스포츠 심리학 교수 / 기조강연자",
        "roleJa": "スポーツ心理学教授 / 基調講演者",
        "orgEn": "Kanto Gakuin University",
        "orgKo": "관동학원대학",
        "orgJa": "関東学院大学",
        "topicEn": "\"The Impact of Personal Coaching on Athletes\" — Kumotori Card Workshop",
        "topicKo": "선수에 대한 퍼스널 코칭의 작용 — 雲取り(쿠모토리) 카드 워크숍",
        "topicJa": "「アスリートへのパーソナルコーチングの作用」 雲取りカードワークショップ",
        "abstractEn": "Dr. Aoyagi explores evidence-based somatic and mental mechanisms of personal coaching for athletes, featuring the interactive Kumotori Card Workshop.",
        "abstractKo": "선수에 대한 퍼스널 코칭이 미치는 심리·신체적 작용 메커니즘을 규명하고, 실전 '쿠모토리 카드' 워크숍을 통해 현장 적용법을 함께 나눕니다.",
        "abstractJa": "アスリートへのパーソナルコーチングがもたらす科学的作用を紐解き、現場で即活用できる「雲取りカード」ワークショップを実施します。",
        "materialUrl": "https://drive.google.com/file/d/demo_aoyagi_slides/view",
        "hasMaterial": true,
        "avatarBg": "linear-gradient(135deg, #1e3a8a, #3b82f6)"
    },
    {
        "id": "yeom-dong-chul",
        "country": "KR",
        "category": "korea",
        "nameEn": "Dong Chul Yeom",
        "nameKo": "염동철 교수",
        "nameJa": "ヨム・ドンチョル 教授",
        "roleEn": "Professor, Weightlifting Department",
        "roleKo": "한국체육대학교 역도부 교수",
        "roleJa": "韓国体育大学 重量挙げ部教授",
        "orgEn": "Korea National Sport University",
        "orgKo": "한국체육대학교",
        "orgJa": "韓国体育大学",
        "topicEn": "When Leaders Change, Schools Change",
        "topicKo": "리더가 변하면, 학교도 변한다",
        "topicJa": "リーダーが変われば、学校も変わる",
        "abstractEn": "How leadership mindsets among physical educators, coaches, and school administrators create profound systemic transformations in student athletes' well-being and long-term athletic success.",
        "abstractKo": "체육 지도자와 학교 관리자의 리더십 패러다임 변화가 학생 선수들의 정서적 안정과 자율적 동기부여, 학교 체육 시스템 전체의 질적 도약을 어떻게 이끄는지를 실천 사례를 바탕으로 논증합니다.",
        "abstractJa": "指導者や学校管理職のマインドセット変革が、生徒・アスリートの主体性や自己肯定感、さらには学校全体のカルチャーをどのように好転させるかを豊富な実例から解き明かします。",
        "materialUrl": "https://drive.google.com/file/d/demo_yeom_slides/view",
        "hasMaterial": true,
        "avatarBg": "linear-gradient(135deg, #047857, #10b981)"
    },
    {
        "id": "kim-sung-min",
        "country": "KR",
        "category": "korea",
        "nameEn": "Sung Min Kim",
        "nameKo": "김성민 대표",
        "nameJa": "キム・ソンミン 代表",
        "roleEn": "CEO / Physical Trainer",
        "roleKo": "대표 / 피지컬 트레이너",
        "roleJa": "代表 / フィジカルトレーナー",
        "orgEn": "Balanced",
        "orgKo": "밸런스드",
        "orgJa": "Balanced",
        "topicEn": "When the Body Is Stable, the Mind Becomes Clearer",
        "topicKo": "몸이 안정되면, 마음도 더욱 명석해진다",
        "topicJa": "体が安定すれば、心もより明晰になる",
        "abstractEn": "Exploring postural equilibrium, sensory integration, and breathing biomechanics as the primary physical foundation for clarity of thought, cognitive decisiveness, and stress management.",
        "abstractKo": "신체의 정렬과 호흡, 고유수용성 감각의 안정이 선수의 인지적 판단력과 멘탈의 선명도에 직결되는 메커니즘을 밝히고, 일상과 경기장에서 즉각 활용 가능한 밸런스 테크닉을 공유합니다.",
        "abstractJa": "身体のアライメント、呼吸、深部感覚の安定が、いかに思考の明晰さや決断の迅速さにつながるかを解説。現場で即実践できるボディ・マインド調律法を公開します。",
        "materialUrl": "https://drive.google.com/file/d/demo_kim_slides/view",
        "hasMaterial": true,
        "avatarBg": "linear-gradient(135deg, #4338ca, #6366f1)"
    },
    {
        "id": "takahashi-motonari",
        "country": "JP",
        "category": "japan",
        "nameEn": "Motonari Takahashi",
        "nameKo": "타카하시 모토나리 코치",
        "nameJa": "髙橋 基成 氏",
        "roleEn": "Sports Mental Coach",
        "roleKo": "WINGIFT 스포츠멘탈코치 / Field Flow",
        "roleJa": "WINGIFT スポーツメンタルコーチ / Field Flow",
        "orgEn": "WINGIFT · Field Flow Japan",
        "orgKo": "WINGIFT · Field Flow Japan",
        "orgJa": "WINGIFT · Field Flow Japan",
        "topicEn": "Transcending Differences to Become One Team — Lessons on Communication & Mental Support from Japan National Deaf Soccer Team",
        "topicKo": "차이를 넘어, 하나의 팀으로 — 데프사커(청각장애인 축구) 일본 대표팀에서 배우는 소통과 멘탈 서포트",
        "topicJa": "『違いを越えて、ひとつのチームへ』 デフサッカー日本代表から学ぶコミュニケーションとメンタルサポート",
        "abstractEn": "Unveiling non-verbal empathy, psychological safety, and unified team dynamics developed through mental coaching with the Japan National Deaf Soccer Team.",
        "abstractKo": "청각장애인 축구 일본대표팀 현장에서 구축한 언어를 뛰어넘는 공감과 심리적 안전감, 원팀(One Team) 멘탈 서포트 실천기를 공유합니다.",
        "abstractJa": "デフサッカー日本代表の現場で実践された、言葉や感覚の違いを超えてチームが一つになるコミュニケーションとメンタル支援の知見を公開します。",
        "materialUrl": "https://drive.google.com/file/d/demo_takahashi_slides/view",
        "hasMaterial": true,
        "avatarBg": "linear-gradient(135deg, #c026d3, #e879f9)"
    },
    {
        "id": "yoon-tae-ryeon",
        "country": "KR",
        "category": "korea",
        "nameEn": "Tae Ryeon Yoon",
        "nameKo": "윤태련 대표",
        "nameJa": "ユン・テリョン 代表",
        "roleEn": "CEO & Master Conditioning Specialist",
        "roleKo": "올댓컨디셔닝 대표",
        "roleJa": "All That Conditioning 代表",
        "orgEn": "All That Conditioning",
        "orgKo": "올댓컨디셔닝",
        "orgJa": "All That Conditioning",
        "topicEn": "When Physical Training Meets Mental Coaching",
        "topicKo": "피지컬 트레이닝과 멘탈코칭의 융합",
        "topicJa": "フィジカルトレーニングとメンタルコーチングの融合",
        "abstractEn": "Unveiling the symbiotic bridge between somatic conditioning and mental tenacity. Showing how physical rehabilitation and neuromuscular balance amplify athletes' emotional resilience.",
        "abstractKo": "신체 트레이닝과 멘탈코칭의 유기적 결합 모델을 제시합니다. 부상 회복 과정과 근신경계 밸런스 회복이 선수의 불안을 극복하고 실전 집중력을 극대화하는 구체적 프로세스를 설명합니다.",
        "abstractJa": "身体のコンディショニングとメンタルトレーニングのシナジーを追求。ケガのリハビリや筋神経系の調和が、選手の不安軽減と試合での強靱な集中力にどう寄与するかを実証します。",
        "materialUrl": "https://drive.google.com/file/d/demo_yoon_slides/view",
        "hasMaterial": true,
        "avatarBg": "linear-gradient(135deg, #b45309, #f59e0b)"
    },
    {
        "id": "tsuge-yoichiro",
        "country": "JP",
        "category": "japan",
        "nameEn": "Yoichiro Tsuge",
        "nameKo": "츠게 요이치로 대표 (陽さん)",
        "nameJa": "柘植 陽一郎 代表（陽さん）",
        "roleEn": "President & Executive Mental Coach",
        "roleKo": "Field Flow Japan 대표 / 총괄 멘탈코치",
        "roleJa": "Field Flow Japan 代表 / エグゼクティブメンタルコーチ",
        "orgEn": "Field Flow Japan",
        "orgKo": "Field Flow Japan",
        "orgJa": "Field Flow Japan",
        "topicEn": "The Future of Mental Coaching",
        "topicKo": "멘탈코칭의 향후에 대하여 (Field Flow의 비전)",
        "topicJa": "メンタルコーチングの今後について",
        "abstractEn": "Field Flow's 10-year journey coaching systemic field dynamics, collective resonance, and the next-generation coaching paradigm for the AI era.",
        "abstractKo": "지난 10년간 스포츠 및 비즈니스 조직에서 '장(Field)'의 흐름과 팀 시너지를 극대화해 온 Field Flow의 발자취와 향후 미래 멘탈코칭의 새로운 패러다임을 제언합니다.",
        "abstractJa": "過去10年にわたりスポーツとビジネスの現場で「場」のダイナミクスとチームフローを切り拓いてきたField Flowの軌跡と、次世代メンタルコーチングの未来展望を提示します。",
        "materialUrl": "https://drive.google.com/file/d/demo_tsuge_slides/view",
        "hasMaterial": true,
        "avatarBg": "linear-gradient(135deg, #d97706, #fbbf24)"
    },
    {
        "id": "park-chul-soo",
        "country": "KR",
        "category": "korea",
        "nameEn": "Chul Soo Park",
        "nameKo": "박철수 대표",
        "nameJa": "朴 哲秀 代表",
        "roleEn": "MCCI President / Mental Master",
        "roleKo": "MCCI 대표 / 멘탈 마스터",
        "roleJa": "MCCI 代表 / メンタルマスター",
        "orgEn": "MCCI (Mental Coaching Center Int'l)",
        "orgKo": "MCCI (국제멘탈코칭센터)",
        "orgJa": "MCCI（国際メンタルコーチングセンター）",
        "topicEn": "The Future of Mental Coaching",
        "topicKo": "멘탈코칭의 향후에 대하여 (MCCI의 10년 사명과 미래)",
        "topicJa": "メンタルコーチングの今後について",
        "abstractEn": "In an era saturated with AI and predictive algorithms, mental coaching must surpass technological utility. The coach's genuine role is to deeply understand human existence and empower individuals to make authentic, values-aligned choices.",
        "abstractKo": "AI와 첨단 알고리즘이 범람하는 시대일수록 멘탈코칭은 단순한 기능 경쟁을 뛰어넘어야 합니다. 인간에 대한 깊은 공감과 존중을 바탕으로, 내담자가 자신의 진정한 가치관에 입각해 주체적으로 선택하고 행동하도록 이끄는 멘탈코칭의 미래 사명을 제언합니다.",
        "abstractJa": "AIやテクノロジーが進化する現代だからこそ、メンタルコーチングは技術競争を超えた本質に立ち返る必要があります。人間への深い理解に基づき、クライアントが自らのコアバリューに沿って自律的に選択・行動することを支援する真の役割を提起します。",
        "materialUrl": "https://drive.google.com/file/d/demo_park_slides/view",
        "hasMaterial": true,
        "avatarBg": "linear-gradient(135deg, #0f766e, #14b8a6)"
    }
];

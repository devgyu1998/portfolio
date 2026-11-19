window.PORTFOLIO_CONTENT = {
  "hero": {
    "titleHtml": "해보지 않았다는 이유로,<br>할 수 있는 일에 선을 긋지 않습니다.",
    "role": "풀스택 개발자 양성규입니다.",
    "intro": "프론트엔드부터 백엔드, 배포까지 직접 맡아오며 서비스 개발 전반에 대한 이해를 쌓았습니다. 그 경험을 바탕으로 새로운 기술에도 주저하지 않고 도전하며, 막히는 문제는 끝까지 파고들어 해결합니다."
  },
  "career": {
    "period": "2024.07 — 현재",
    "company": "오케스트로 AGI",
    "position": "웹 풀스택 개발자 · 연구원 · 정규직",
    "summaryHtml": "AI 챗봇·지식관리 서비스를 개발하고 있습니다. 초기 G-AIDSP 1.0부터 현재 <strong>Clarinet(구 G-AIDSP 2.0)까지 제품의 웹 개발을 전담</strong>하며, DB 설계와 프론트엔드·백엔드 개발, AI API 연동부터 고객사 설치·배포까지 맡았습니다.",
    "details": [
      {
        "title": "제품 개발·고객사 서비스 구축",
        "text": "수원시 챗봇을 기반으로 초기 제품의 웹 기능을 개발했습니다. 이후 한국교통안전공단 업무지원 플랫폼을 구축하며 현재 Clarinet의 기반이 되는 기능을 설계·구현했고, 완성된 제품을 장병체감형 서비스의 요구사항에 맞게 확장했습니다."
      },
      {
        "title": "사용자·관리자 기능과 AI 연동 구현",
        "text": "실시간 AI 채팅, 대화 이력과 참고문서 조회, 문서 등록·승인·버전 관리, 사용자·권한 관리 기능의 DB와 화면·API를 개발했습니다. 문서 파싱·임베딩, 보고서 생성, 모델 학습 등 AI 서버의 API를 연동하고 처리 상태와 결과를 확인하는 기능을 구현했습니다."
      },
      {
        "title": "서비스 설치·배포 및 고객사 상주 경험",
        "text": "폐쇄망과 AWS·네이버 클라우드 등 다양한 환경에서 서비스 설치·배포를 담당했습니다. 환경에 따라 Tomcat과 DB를 오프라인으로 설치하거나, Docker 이미지와 배포용 YAML을 작성해 기존 Kubernetes 환경에 애플리케이션을 배포했습니다. 고객사에 3개월간 상주하며 폐쇄망에서 개발한 경험도 있습니다."
      },
      {
        "title": "보안 점검·GS 인증 대응",
        "text": "인증·접근 권한, 파일 업로드·다운로드, 정보 노출 등 보안 점검에서 확인된 취약점을 수정했습니다. 초기 제품인 G-AIDSP 1.0의 GS 인증 과정에서도 웹 기능과 보안 관련 사항을 조치했으며, 해당 제품은 GS 인증 1등급을 획득했습니다."
      }
    ]
  },
  "education": [
    {
      "period": "2023.07 — 2024.06 · 수료",
      "title": "삼성 청년 SW 아카데미 · SSAFY 10기",
      "summary": "알고리즘과 웹 개발을 학습하고, 세 차례의 팀 프로젝트를 통해 프론트엔드·백엔드 개발과 배포를 경험했습니다.",
      "details": [
        {
          "title": "웹 개발 학습·실습",
          "text": "Java·Spring Boot 기반의 API 개발과 인증 처리를 익혔습니다. React·TypeScript와 Vue.js를 활용해 화면을 구현하며 컴포넌트 구성, 상태 관리와 백엔드 연동을 경험했습니다."
        },
        {
          "title": "팀 개발·코드 리뷰",
          "text": "팀원들과 기능을 나누어 개발하고, Git으로 브랜치와 소스를 관리했습니다. Jira로 작업과 일정을 관리했으며, Gerrit을 직접 설정·관리하고 코드 리뷰를 주고받으며 협업했습니다."
        },
        {
          "title": "개발 환경 구성·배포",
          "text": "로컬에서 구현한 기능을 실제 서비스 환경에 배포하는 과정을 경험했습니다. Docker 이미지와 컨테이너를 구성하고, Nginx 설정과 Jenkins 파이프라인 작성을 통해 웹 서비스의 실행·배포 환경을 익혔습니다."
        }
      ]
    },
    {
      "period": "2021.03 — 2023.02 졸업",
      "title": "조선대학교 컴퓨터공학과",
      "summary": "",
      "details": []
    },
    {
      "period": "2022.03 — 2022.12",
      "title": "조선대학교 SW중심사업단 · 프로그래밍 실습 튜터",
      "summary": "Java·C를 사용하는 객체지향프로그래밍과 기초프로그래밍 강의에서 실습 튜터로 활동했습니다. 교수님의 실습 진행을 보조하고, 학생들이 수업 내용을 이해하고 실습을 수행할 수 있도록 도왔습니다.",
      "details": []
    }
  ],
  "projects": [
    {
      "id": "clarinet",
      "kind": "work",
      "name": "Clarinet 고도화",
      "period": "2026.08 — 현재",
      "description": "전자정부프레임워크와 JSP로 구성된 기존 Clarinet을 Spring Boot 백엔드와 React 프론트엔드로 분리하는 프로젝트입니다. 기존 기능을 옮길 때 반복되는 처리를 줄일 수 있도록 구조를 잡고, AI 코딩 에이전트를 개발에 활용하기 위한 작업 지침과 검증 기준을 마련하고 있습니다. 프론트엔드 개발을 맡아 관리자 웹의 개발 환경을 구성하고, 여러 화면에서 사용할 공통 API 처리 코드를 구현했습니다.",
      "details": [
        {
          "title": "프론트엔드 구조 설계와 기술 선정",
          "text": "관리자 화면에 필요한 라우팅, 데이터 조회, UI 구성과 폼 검증 기술을 예제로 직접 써 보며 비교하고, 선택 이유를 문서로 정리했습니다. 검색어·필터·페이지 번호를 URL에 남겨 조회 조건을 복원할 수 있도록 TanStack Router를 선택했고, 서버 데이터의 조회와 캐시는 TanStack Query에서 관리하도록 역할을 나눴습니다. React·TypeScript 앱에 기본 라우팅과 조회 설정을 연결하고, Tailwind CSS와 shadcn/ui의 초기 설정을 마쳤습니다."
        },
        {
          "title": "공통 API 처리 구현",
          "text": "여러 화면에서 API 요청과 응답을 같은 방식으로 처리할 수 있도록 공통 코드를 구현했습니다. Axios로 요청 설정을 한곳에 모으고, 실제 HTTP 상태와 응답 본문의 상태 값이 일치하는지 확인한 뒤 Zod로 필요한 데이터의 형식을 검증하도록 했습니다. 통신 실패나 시간 초과처럼 일시적인 조회 오류는 한 번 다시 요청하고, 조회나 저장이 최종적으로 실패하면 공통 알림으로 안내하도록 연결했습니다."
        },
        {
          "title": "AI 활용 개발 지침 마련",
          "text": "새 화면을 개발할 때 AI 코딩 에이전트가 기존 공통 코드를 재사용하고, 작업에 필요한 개발 문서를 찾아 참고할 수 있도록 지침을 구성했습니다. 프로젝트 구조와 코드 작성 방식, 화면과 API 구현 규칙, 빌드·테스트와 PR 리뷰 기준을 문서화했습니다. 작업 전에는 기존 구현과 실제 API 명세를 확인하도록 했으며, ESLint와 Prettier로 코드 검사와 서식 규칙을 설정했습니다."
        }
      ],
      "skills": [
        "React",
        "TypeScript",
        "Vite",
        "TanStack Router",
        "TanStack Query",
        "Axios",
        "Zod",
        "Tailwind CSS",
        "shadcn/ui",
        "Sonner"
      ],
      "recordLink": null
    },
    {
      "id": "soldier",
      "kind": "work",
      "name": "장병체감형 원스톱 서비스 플랫폼 LLM 기반 AI챗봇 서비스 구축",
      "period": "2026.03 — 2026.10",
      "description": "자사 제품 Clarinet을 기반으로 장병 대상 AI 챗봇 서비스를 구축했습니다. 사용자 화면에 제공하는 채팅 API와 관리자 웹을 개발하며, DB 설계부터 프론트엔드·백엔드 개발, AI API 연동과 배포까지 담당했습니다.",
      "details": [
        {
          "title": "채팅 API·사용자 정보 연동",
          "text": "AI 답변을 실시간으로 전달하는 SSE 기반 채팅 API와 대화 이력·참고문서 조회 API를 개발했습니다. 외부 플랫폼의 사용자 정보를 서비스 계정과 연계해, 기관·소속·신분별 사용자 관리와 이용 통계에 활용할 수 있도록 했습니다."
        },
        {
          "title": "채팅 이용 정책 관리",
          "text": "반복·유사 질문을 제한하고 사용자별 일일 채팅 한도를 관리하는 기능을 개발했습니다. 운영자가 반복 질문의 허용 횟수와 제한 시간, 일일 한도를 직접 조정할 수 있도록 설정 DB와 관리자 화면·API를 구현했습니다. 유사 질문 여부는 AI 서버의 검사 결과를 활용했으며, 일일 사용량은 여러 기기와 대화방의 이용 내역을 사용자 단위로 합산하고 동시 요청을 고려해 제한하도록 처리했습니다."
        },
        {
          "title": "관리자 웹·DB 설계",
          "text": "서비스에 필요한 데이터 모델과 테이블·관계를 설계하고, 사용자·권한과 데이터 관리 기능의 화면·API를 개발했습니다. FAQ, 학습 데이터와 모델 관리 기능을 추가·수정하며 기존 Clarinet의 관리자 웹을 서비스 운영 방식에 맞게 구성했습니다."
        },
        {
          "title": "AI 연동·작업 복구",
          "text": "문서 파싱·임베딩과 모델 학습 API를 연동해 처리 상태와 결과를 관리자 웹에서 확인할 수 있도록 구현했습니다. AI 서버 반영 결과를 관리하고, 애플리케이션 재기동 시 미완료 작업을 복구하도록 개발했습니다."
        },
        {
          "title": "보안 대응·클라우드 배포",
          "text": "사용자별 데이터·파일 접근 권한과 채팅 이력의 소유자를 검증하는 로직을 보완하고, 보안 점검에서 확인된 취약점을 수정했습니다. Tomcat 기반 Docker 이미지와 배포용 YAML을 작성해 네이버 클라우드의 기존 Kubernetes·Argo CD 환경에 애플리케이션을 배포했습니다."
        }
      ],
      "skills": [
        "Java",
        "전자정부프레임워크",
        "Spring MVC / Security",
        "JSP",
        "JavaScript / jQuery",
        "MyBatis",
        "MySQL",
        "WebClient / Reactor",
        "SSE",
        "Tomcat",
        "Docker",
        "Kubernetes",
        "Argo CD",
        "네이버 클라우드"
      ],
      "recordLink": null
    },
    {
      "id": "ts",
      "kind": "work",
      "name": "TS AI 공용플랫폼 구축",
      "period": "2025.06 — 2026.07",
      "description": "한국교통안전공단의 문서·데이터 관리와 질의응답, 보고서 작성을 지원하는 LLM·RAG 기반 공용플랫폼을 구축했습니다. DB 설계부터 프론트엔드·백엔드 개발, AI API 연동과 배포까지 웹 개발 전반을 전담했으며, 이 프로젝트에서 개발한 기능은 현재 자사 제품 Clarinet의 기반이 됐습니다.",
      "detailsTitle": "주요 구현 내용",
      "details": [
        {
          "title": "DB 설계·데이터 관리 체계",
          "text": "DCAT 3.0을 기준으로 데이터·데이터셋·컬렉션의 관계를 정의하고, 메타데이터와 승인·버전·변경 이력을 관리하는 테이블과 SQL을 설계했습니다. 대화·학습 데이터, 사용자·권한, 운영 이력에 필요한 데이터 구조도 설계했습니다."
        },
        {
          "title": "문서·메타데이터 관리",
          "text": "문서 등록·수정·검색, 메타데이터 입력 템플릿, 임시저장, 승인·반려·취소, 버전·변경 이력 관리 기능의 화면과 API를 개발했습니다. 데이터셋·컬렉션 구성과 북마크·최근 열람, 개인 문서 관리·미리보기·다운로드 기능을 구현했습니다. 문서와 메타데이터의 연관 관계를 확인하는 시각화 기능도 개발했습니다."
        },
        {
          "title": "법령 관리",
          "text": "법령 API를 연동해 법령을 검색·등록하고, 관련 문서와 서식을 수집하는 기능을 개발했습니다. 소관부처와 현행 여부를 확인하고, 등록한 법령의 문서를 열람·다운로드할 수 있도록 구현했습니다."
        },
        {
          "title": "AI 채팅·업무지원 기능",
          "text": "AI 답변을 실시간으로 전달하는 SSE 기반 채팅과 공개 채팅을 개발했습니다. 대화 이력, 답변에 참고한 문서, 만족도·의견을 관리하고 슬래시 명령어로 질문에 활용할 문서를 지정할 수 있도록 했습니다. 첨부문서 기반 보고서 생성·수정과 운수지도 AI 분석 API를 연동하고, 요청부터 결과 확인까지 필요한 화면과 백엔드를 개발했습니다."
        },
        {
          "title": "AI 스튜디오·학습 데이터 관리",
          "text": "AI 서비스의 참고 데이터와 프롬프트, 응답 길이 등을 설정하는 화면과 API를 개발했습니다. 예시 질문과 단계별 질문 안내를 관리하는 질문 도우미를 구현했습니다. 선택한 문서로 AI 서버에 학습 데이터 생성을 요청하고, 생성 결과의 조회·수정·임시저장·삭제와 검수 정보를 관리하는 기능을 개발했습니다."
        },
        {
          "title": "문서 파싱·임베딩 처리",
          "text": "타사 파서 API와 AI 서버의 임베딩 API를 연결하고, 문서 변환부터 임베딩까지의 처리 흐름을 웹에서 관리하도록 구현했습니다. 동시 처리 수와 대기열, 작업별 진행 상태와 성공·실패 결과를 관리하고 변환된 문서를 조회할 수 있도록 했습니다."
        },
        {
          "title": "로그인·조직·사용자 권한",
          "text": "기관의 EP 로그인 시스템을 연동하고 조직 정보를 동기화해 부서·사용자 정보에 반영했습니다. 기관·부서·사용자·역할을 관리하는 화면과 API를 개발하고, 사용자 권한에 따라 메뉴와 데이터 접근을 제한하도록 구현했습니다."
        },
        {
          "title": "게시판·통계·운영 정책",
          "text": "공지사항과 문의·답변 게시판, 사용자 알림, 활동·대화 이력 조회 기능을 개발했습니다. AI 서비스 이용 현황과 만족도, 데이터 등록 현황, 부서별 이용 통계를 대시보드로 구성했습니다. 파일 형식·크기·개수, 세션 유지 시간과 AI 이용 제한 시간을 DB와 관리자 화면에서 설정하고 적용할 수 있도록 했습니다."
        },
        {
          "title": "폐쇄망 배포·보안 대응",
          "text": "고객사에 3개월간 상주하며 폐쇄망에서 개발하고, VM에 Tomcat·MariaDB를 오프라인으로 설치해 서비스를 배포했습니다. 이후 Docker 이미지와 배포용 YAML을 작성해 애플리케이션을 기존 Kubernetes 환경으로 이전하고, DB는 기존 VM의 MariaDB를 유지했습니다. SQL·화면 출력·파일 업로드·오류 정보 노출 등 보안 점검에서 확인된 취약점을 수정했습니다."
        }
      ],
      "skills": [
        "Java",
        "전자정부프레임워크",
        "Spring MVC",
        "Spring Security",
        "JSP/JSTL",
        "JavaScript/jQuery",
        "MyBatis",
        "MariaDB",
        "SSE",
        "Tomcat",
        "Docker",
        "Kubernetes"
      ],
      "recordLink": null
    },
    {
      "id": "sc301",
      "kind": "work",
      "name": "SC301 AI 상담·예약 챗봇",
      "period": "2025.03 — 2025.08",
      "description": "LLM·RAG 기반 AI 상담과 상담 예약 접수를 제공하는 웹 챗봇을 개발했습니다. DB 설계부터 프론트엔드·백엔드 개발, AI API 연동과 AWS 배포까지 담당했습니다.",
      "overview": {
        "description": "SC301의 줄기세포 시술에 관한 질문에 답하고 상담 예약 신청을 받는 LLM·RAG 기반 웹 챗봇입니다. 궁금한 내용을 직접 묻거나 추천 질문을 선택해 대화를 이어갈 수 있고, 상담을 원하면 채팅 화면에서 연락처와 희망 일시를 입력해 예약을 신청할 수 있습니다.",
        "role": "웹 풀스택",
        "gallery": [
          {
            "src": "./assets/sc301/home-desktop.png",
            "title": "홈 · PC",
            "description": "질문을 입력해 상담을 시작합니다."
          },
          {
            "src": "./assets/sc301/home-mobile.jpg",
            "title": "홈 · 모바일",
            "description": "질문을 입력해 상담을 시작합니다."
          },
          {
            "src": "./assets/sc301/suggestions-desktop.png",
            "title": "추천 질문 · PC",
            "description": "입력한 내용과 관련된 추천 질문을 선택할 수 있습니다."
          },
          {
            "src": "./assets/sc301/suggestions-mobile.jpg",
            "title": "추천 질문 · 모바일",
            "description": "입력한 내용과 관련된 추천 질문을 선택할 수 있습니다."
          },
          {
            "src": "./assets/sc301/chat-location-desktop.png",
            "title": "상담 답변·위치 안내 · PC",
            "description": "대화 화면에서 질문에 대한 답변과 병원 위치를 확인합니다."
          },
          {
            "src": "./assets/sc301/chat-location-mobile.jpg",
            "title": "상담 답변·위치 안내 · 모바일",
            "description": "대화 화면에서 질문에 대한 답변과 병원 위치를 확인합니다."
          },
          {
            "src": "./assets/sc301/cost-desktop.png",
            "title": "빠른 비용상담 · PC",
            "description": "연락처와 희망 일시, 연락 방법을 입력해 비용상담을 신청합니다."
          },
          {
            "src": "./assets/sc301/cost-mobile.jpg",
            "title": "빠른 비용상담 · 모바일",
            "description": "연락처와 희망 일시, 연락 방법을 입력해 비용상담을 신청합니다."
          }
        ]
      },
      "development": [
        {
          "title": "토큰 단위 API 호출에서 SSE 스트리밍으로 전환",
          "paragraphs": [
            "수원시 챗봇에서는 AI 서버가 토큰마다 Spring API를 호출하고, 화면은 저장된 토큰을 순번대로 조회해 답변을 표시했습니다. 중간에 토큰 하나가 누락되면 이후 토큰이 도착해도 화면은 빠진 순번을 계속 기다리는 구조였습니다. 이 문제를 겪으면서 다음 챗봇에서는 질문 하나에 대한 답변을 같은 연결로 끝까지 전달하고 싶었습니다.",
            "SC301에서는 질문을 한 번 보내고 나면 서버에서 화면으로 답변만 전달하면 되기 때문에 단방향 스트리밍 방식인 SSE를 선택했습니다. 질문마다 SSE 연결을 열고, Spring이 WebClient로 AI 서버에서 받은 토큰을 SseEmitter로 JSP 화면에 전달한 뒤 답변이 끝나면 연결을 닫도록 구현했습니다.",
            "기존에는 AI 서버가 답변을 빠르게 생성해도 화면에서 토큰을 하나씩 조회해야 해서, 답변이 길어지면 화면 표시가 뒤처질 수 있었습니다. SSE로 전환하면서 토큰마다 발생하던 API 호출과 DB 조회를 줄이고, 이미 생성된 답변이 화면의 조회 주기 때문에 늦게 표시되는 문제를 해소했습니다."
          ]
        },
        {
          "title": "MongoDB에 채팅 이력 저장",
          "paragraphs": [
            "수원시 챗봇에서는 질문 한 번과 그에 대한 답변을 한 건의 이력으로 남겼습니다. SC301에서는 같은 상담에서 후속 질문을 계속할 수 있어, 개별 답변뿐 아니라 대화가 어떤 순서로 이어졌는지도 기록할 필요가 있었습니다.",
            "MariaDB에는 기존처럼 질문별 응답 이력을 남기고, MongoDB에는 대화 ID를 기준으로 상담 세션마다 문서 하나를 만들었습니다. 새 질문은 문서 안의 목록에 순서대로 추가하고, 스트리밍으로 받은 토큰은 질문 ID에 맞는 답변에 이어 저장했습니다. 이렇게 채팅 이력을 한 문서에 모아, 대화 ID 하나로 상담 전체를 순서대로 조회할 수 있도록 했습니다."
          ]
        }
      ],
      "detailsTitle": "전체 담당 기능",
      "details": [
        {
          "title": "상담 화면",
          "text": "디자인 시안을 바탕으로 PC·모바일 반응형 홈·채팅 화면, 사이드바와 상담 신청 폼 구현"
        },
        {
          "title": "상담 안내",
          "text": "자주 묻는 질문에 대한 답변, 관련 질문 추천, 병원 위치 안내와 예약 화면 연결"
        },
        {
          "title": "실시간 AI 상담",
          "text": "WebClient로 AI 서버 연동, SSE 기반 답변 표시, 연결 종료 및 오류 처리"
        },
        {
          "title": "DB 설계·채팅 이력",
          "text": "MariaDB의 질문별 응답 이력·예약 테이블 설계, MongoDB의 상담 세션별 대화 저장 구조 설계 및 구현"
        },
        {
          "title": "상담 예약 접수",
          "text": "개인정보 동의와 필수 항목 검증, 연락 방법·희망 일시를 포함한 예약 접수 API 개발 및 결과 안내"
        },
        {
          "title": "공통·보안",
          "text": "공통 오류 화면 구현 및 웹 보안 필터 적용"
        },
        {
          "title": "배포",
          "text": "AWS 서버에 MariaDB·Tomcat 설치, WAR 배포 및 서비스 구동 확인"
        }
      ],
      "skills": [
        "Java 11",
        "전자정부프레임워크 4.3",
        "Spring MVC",
        "JSP",
        "HTML/CSS",
        "JavaScript",
        "jQuery",
        "WebClient",
        "Project Reactor",
        "SSE",
        "MyBatis",
        "MariaDB",
        "MongoDB",
        "Maven",
        "Tomcat",
        "AWS"
      ],
      "recordLink": null
    },
    {
      "id": "company",
      "kind": "work",
      "name": "OKESTRO AGI 기업 홈페이지",
      "period": "2025.02",
      "description": "회사와 자사 솔루션, 주요 소식을 소개하는 기업 홈페이지를 개발했습니다. PC·모바일에 맞춘 반응형 화면을 구현하고, 가비아 호스팅에 배포했습니다.",
      "overview": {
        "status": "이전 버전",
        "gallery": [
          {
            "src": "./assets/company/home-desktop.png",
            "title": "메인 화면 · PC",
            "description": "상단 메뉴에서 회사 소개, 솔루션, 뉴스룸으로 이동합니다."
          },
          {
            "src": "./assets/company/home-mobile.png",
            "title": "메인 화면 · 모바일",
            "description": "작은 화면에서는 오른쪽 위 버튼으로 메뉴를 엽니다."
          }
        ]
      },
      "development": [
        {
          "title": "반응형 화면·메뉴 구현",
          "paragraphs": [
            "PC·모바일 환경에 맞춰 레이아웃을 구성하고, 공통 헤더·푸터와 모바일 메뉴를 개발했습니다. 스크롤에 따른 헤더 표시와 로고 전환도 구현했습니다."
          ]
        }
      ],
      "detailsTitle": "전체 담당 기능",
      "details": [
        {
          "title": "회사 소개·솔루션·뉴스룸 개발",
          "text": "HTML·CSS·JavaScript로 회사 소개와 솔루션 소개, 뉴스룸 페이지를 개발했습니다. 회사·제품 정보와 기사 이미지, 외부 기사 링크를 화면에 반영했습니다."
        },
        {
          "title": "호스팅 배포",
          "text": "가비아 정적 웹 호스팅에 홈페이지를 배포했습니다."
        }
      ],
      "skills": [
        "HTML",
        "CSS",
        "JavaScript",
        "가비아 호스팅"
      ],
      "recordLink": null
    },
    {
      "id": "suwon",
      "kind": "work",
      "name": "수원시 복지민원 검색 서비스",
      "period": "2024.07 — 2025.02",
      "description": "수원시 복지 문서와 조례를 바탕으로 질문에 답하고 근거 자료를 제공하는 LLM·RAG 기반 검색 서비스를 구축했습니다. DB 설계부터 사용자·관리자 화면과 백엔드 개발, AI 서버 API 연동, 폐쇄망 설치·배포까지 웹 개발 전반을 담당했습니다.",
      "overview": {
        "title": "수원시 복지민원 검색 서비스",
        "description": "수원시의 복지 문서와 조례에서 민원 업무에 필요한 정보를 찾아주는 LLM·RAG 기반 서비스입니다. 질문에 대한 답변과 참고 문서를 함께 보여주는 챗봇과, 검색 자료와 사용자 계정을 관리하고 서비스 이용 현황을 살펴볼 수 있는 관리자 페이지로 구성됩니다.",
        "role": "웹 풀스택 개발 · 폐쇄망 설치 및 배포"
      },
      "development": [
        {
          "title": "DCAT 3.0 기반 문서 관리와 연관맵 개발",
          "paragraphs": [
            "복지 문서를 등록할 때 분류와 키워드를 DCAT 3.0 기반 메타데이터로 저장하도록 DB와 등록 화면을 설계했습니다. 답변 화면에서는 이 메타데이터를 활용해 참고 문서와 같은 분류의 문서를 연결하고, 문서·분류·키워드 간 관계를 Cytoscape.js로 시각화했습니다. AI 서버가 전달한 참고 문서는 PDF 뷰어와 연결해, 문서를 선택하면 답변에 쓰인 페이지가 열리도록 했습니다."
          ]
        },
        {
          "title": "챗봇 응답 지연을 줄이기 위한 야간 문서 처리",
          "paragraphs": [
            "주간에 문서 파싱과 임베딩 작업이 겹치면 GPU 부하가 커져 챗봇 응답이 느려졌습니다. 이 문제를 줄이기 위해 문서 승인과 AI 서버 반영 시점을 분리했습니다. 승인 요청은 DB에 대기 작업으로 저장하고, 야간 스케줄러가 순서대로 처리하도록 변경했습니다. 긴급한 문서는 즉시 승인해 임베딩을 시작할 수 있게 했고, AI 서버의 완료 응답을 받으면 관리자 화면에도 처리 결과가 표시되도록 연결했습니다."
          ]
        },
        {
          "title": "G-AIDSP 1.0 웹 기능 개선 및 GS 인증 대응",
          "paragraphs": [
            "수원시에 구축한 G-AIDSP 1.0의 사용자·관리자 웹을 담당했습니다. 구축 이후에는 GS 인증을 준비하며 기존 웹 기능을 개선하고, 보안 점검에서 발견된 취약점을 수정했습니다. G-AIDSP 1.0은 이 과정을 거쳐 GS 인증 1등급을 획득했습니다."
          ]
        }
      ],
      "detailsTitle": "전체 담당 기능",
      "details": [
        {
          "title": "DB 설계",
          "text": "문서·조례, 질의응답 이력, 승인 작업, 계정·운영 데이터의 테이블 및 SQL 설계"
        },
        {
          "title": "사용자·관리자 웹",
          "text": "외주 HTML·CSS의 JSP 이관, JavaScript 화면 기능과 Java 백엔드 API 개발"
        },
        {
          "title": "챗봇 질의응답",
          "text": "AI 서버 연동, 답변 표시 및 질의응답 이력 조회"
        },
        {
          "title": "참고 문서·연관맵",
          "text": "근거 문서 PDF 열람·다운로드, 메타데이터 기반 연관맵 구현"
        },
        {
          "title": "복지 문서 관리",
          "text": "문서 등록·검색, DCAT 3.0 기반 메타데이터 관리, 다중 파일 업로드 및 검증"
        },
        {
          "title": "조례 관리",
          "text": "국가법령정보 API를 통한 조례 검색·조회 및 PDF 생성·등록"
        },
        {
          "title": "문서·조례의 AI 반영",
          "text": "승인·삭제·교체 연동, 예약·야간 처리, 즉시 승인 및 처리 현황 조회"
        },
        {
          "title": "문서 기반 Q&A",
          "text": "관리자용 Q&A 생성 API 연동 및 결과 다운로드"
        },
        {
          "title": "계정·운영 관리",
          "text": "관리자 로그인·계정 보안, 운영 콘텐츠·서비스 설정, 행정복지센터 정보 관리 및 안내"
        },
        {
          "title": "통계·대시보드",
          "text": "만족도 수집, 서비스 이용 현황·만족도 통계 대시보드 개발"
        },
        {
          "title": "폐쇄망 설치·배포",
          "text": "Tomcat·MariaDB 오프라인 설치 및 WAR 배포"
        },
        {
          "title": "GS 인증 대응",
          "text": "G-AIDSP 1.0 웹 기능 개선 및 보안 취약점 수정"
        }
      ],
      "skills": [
        "Java 11",
        "전자정부프레임워크 4.1",
        "Spring MVC",
        "JSP/JSTL",
        "JavaScript",
        "jQuery",
        "Cytoscape.js",
        "RestTemplate",
        "MyBatis",
        "MariaDB",
        "Maven",
        "Tomcat"
      ],
      "resources": [
        {
          "title": "수원시 AI 복지업무 프로그램 구축 · 연합뉴스, 2025.04.18",
          "url": "https://www.yna.co.kr/view/AKR20250418035100061"
        },
        {
          "title": "G-AIDSP GS 인증 1등급 획득 · ITdaily, 2025.02.25",
          "url": "https://www.itdaily.kr/news/articleView.html?idxno=231192"
        }
      ]
    },
    {
      "id": "ukkikki",
      "kind": "team",
      "name": "Ukkikki · 사진 공유 SNS",
      "period": "2024.04 — 2024.05",
      "description": "촬영한 사진을 자동으로 업로드하고 AI로 정리·분류해 공유하는 SNS를 팀 프로젝트로 개발했습니다. 메모·댓글 등 소통 기능의 화면·API와 회원 인증, 메시지 큐 서버를 개발하고 배포 환경을 구성했습니다.",
      "overview": {
        "title": "Ukkikki · 사진 공유 SNS",
        "description": "함께 찍은 사진을 한곳에 모아 보고 그날의 이야기를 나누는 그룹 SNS입니다. 앱에서 촬영한 사진은 그룹 앨범에 자동으로 올라가고, AI가 인물별로 정리해 줍니다. 그룹 안에서는 피드에 글과 댓글을 남기거나 실시간 채팅으로 대화를 나눌 수 있습니다.",
        "role": "풀스택 개발 및 인프라",
        "team": "6명 참여 — 프론트엔드 2명 / 백엔드 3명 / 풀스택 1명",
        "gallery": [
          {
            "src": "./assets/ukkikki/01-home.png",
            "title": "홈",
            "description": "현재 사진이 업로드되는 그룹을 확인하고 카메라를 열 수 있습니다."
          },
          {
            "src": "./assets/ukkikki/02-groups.png",
            "title": "참여 그룹",
            "description": "참여 중인 그룹을 확인하거나 새 그룹을 만듭니다."
          },
          {
            "src": "./assets/ukkikki/03-camera.png",
            "title": "카메라",
            "description": "사진을 촬영하면 지정한 그룹 앨범에 자동으로 올라갑니다."
          },
          {
            "src": "./assets/ukkikki/04-group-home.png",
            "title": "그룹 홈",
            "description": "그룹의 멤버를 확인하고 앨범, 피드, 채팅으로 이동합니다."
          },
          {
            "src": "./assets/ukkikki/05-photos.png",
            "title": "사진 모아보기",
            "description": "사진을 한눈에 보고 원하는 사진을 선택합니다."
          },
          {
            "src": "./assets/ukkikki/06-album.png",
            "title": "그룹 앨범",
            "description": "그룹에서 공유한 폴더와 사진을 함께 살펴봅니다."
          },
          {
            "src": "./assets/ukkikki/07-memo.png",
            "title": "사진 메모",
            "description": "사진에 남긴 메모를 읽거나 새 메모를 작성합니다."
          },
          {
            "src": "./assets/ukkikki/08-chat.png",
            "title": "그룹 채팅",
            "description": "그룹 멤버들과 실시간으로 메시지를 주고받습니다."
          },
          {
            "src": "./assets/ukkikki/09-feed.png",
            "title": "그룹 피드",
            "description": "그룹 멤버들이 사진과 함께 올린 게시글을 둘러봅니다."
          },
          {
            "src": "./assets/ukkikki/10-comments.png",
            "title": "게시글과 댓글",
            "description": "게시글의 사진과 본문을 보고 댓글이나 답글을 남깁니다."
          }
        ]
      },
      "development": [
        {
          "title": "사진 업로드 후 인물 분류 요청을 처리하는 메시지 큐",
          "paragraphs": [
            "촬영한 사진이 자동으로 올라가거나 사용자가 직접 사진을 올리면, 원본을 S3에 저장한 뒤 AI 서버에 인물 분류를 요청합니다. 여러 사진의 분류 요청이 한꺼번에 몰리지 않도록 메시지 큐를 개발했습니다.",
            "그룹 ID를 기준으로 요청을 네 개의 큐에 나누고, 각 큐에서는 앞선 요청이 끝나면 다음 사진을 보내도록 했습니다."
          ]
        },
        {
          "title": "GitLab과 Jenkins를 연동한 자동 배포",
          "paragraphs": [
            "프론트엔드, 백엔드, 메시지 큐 서버의 빌드와 배포를 자동화했습니다. Docker에서 Jenkins를 실행하고 GitLab 웹훅을 연동해, 코드가 변경되면 해당 서비스를 빌드하고 배포 서버의 컨테이너를 새 버전으로 교체하도록 구성했습니다."
          ]
        },
        {
          "title": "그룹 피드의 댓글·대댓글과 멤버 태그",
          "paragraphs": [
            "그룹 피드에서 게시글에 댓글을 남기고 특정 댓글에 답글을 달 수 있도록 화면과 API를 구현했습니다. 댓글이나 대댓글을 작성할 때 @ 뒤에 이름을 입력하면 일치하는 그룹 멤버가 표시되고, 그중 원하는 멤버를 선택해 태그할 수 있습니다."
          ],
          "demo": {
            "src": "./assets/ukkikki/comment-mention.gif",
            "poster": "./assets/ukkikki/comment-mention-poster.png",
            "title": "댓글에서 그룹 멤버 태그",
            "alt": "그룹 피드에서 댓글을 작성하며 멤버를 태그하는 시연",
            "width": 335,
            "height": 749
          }
        }
      ],
      "detailsTitle": "전체 담당 기능",
      "details": [
        {
          "title": "회원 인증",
          "text": "카카오 OAuth2 로그인, 게스트 로그인, 로그아웃, 토큰 재발급 API 구현"
        },
        {
          "title": "피드 댓글·대댓글",
          "text": "댓글·대댓글 작성·수정·삭제 화면과 API 구현, @로 그룹 멤버를 태그하는 기능 구현"
        },
        {
          "title": "사진 메모·좋아요",
          "text": "사진 메모 작성·수정·삭제와 좋아요 등록·취소 화면 및 API 구현"
        },
        {
          "title": "메시지 큐",
          "text": "자동·직접 업로드한 사진의 인물 분류 요청을 순서대로 전달하는 큐 서버 개발"
        },
        {
          "title": "서비스 배포",
          "text": "프론트엔드·백엔드·메시지 큐 서버를 Docker로 배포하고, GitLab과 Jenkins를 연동해 빌드·배포 자동화"
        },
        {
          "title": "데이터베이스·코드 리뷰 환경",
          "text": "MySQL·MongoDB·Redis를 Docker로 배포하고, 팀 코드 리뷰에 사용할 Gerrit 설정·관리"
        }
      ],
      "skills": [
        "React",
        "TypeScript",
        "Java",
        "Spring Boot",
        "Spring Security",
        "OAuth2",
        "Spring WebClient",
        "MySQL",
        "MongoDB",
        "Redis",
        "AWS EC2",
        "Docker",
        "Nginx",
        "Jenkins",
        "GitLab",
        "Gerrit"
      ],
      "resources": [
        {
          "title": "Ukkikki GitHub 저장소",
          "url": "https://github.com/devgyu1998/SSAFY10-Ukkikki",
          "description": "README에서 그룹 피드, 사진 메모, 좋아요 기능을 GIF로 볼 수 있습니다."
        }
      ]
    },
    {
      "id": "grabpic",
      "kind": "team",
      "name": "GrabPic · 실시간 AI 생태도감",
      "period": "2024.02 — 2024.04",
      "description": "카메라에 비친 동식물을 AI로 인식하고, 촬영한 개체를 개인 도감에 기록하는 서비스를 팀 프로젝트로 개발했습니다. React·TypeScript로 AI 카메라와 도감 등록, 회원 화면을 구현했습니다.",
      "overview": {
        "title": "GrabPic · 실시간 AI 생태도감",
        "description": "카메라에 비친 동식물을 AI로 실시간 인식하고, 촬영한 동식물을 나만의 도감에 기록하는 서비스입니다. 수집한 동식물을 지도와 차트로 확인하고, 다른 사용자를 구독해 도감을 둘러볼 수 있습니다.",
        "role": "프론트엔드",
        "team": "6명 참여 — 프론트엔드 3명 / 백엔드 2명 / AI 1명",
        "gallery": [
          {
            "src": "./assets/grabpic/01-camera.png",
            "title": "AI 카메라",
            "description": "카메라에 잡힌 새의 이름과 인식 영역을 표시합니다."
          },
          {
            "src": "./assets/grabpic/02-chart.png",
            "title": "도감 차트",
            "description": "도감에 기록한 동식물을 분류별로 살펴봅니다."
          },
          {
            "src": "./assets/grabpic/03-records.png",
            "title": "관찰 기록",
            "description": "지도 아래 목록에서 촬영한 동식물과 촬영 시각·위치를 확인합니다."
          },
          {
            "src": "./assets/grabpic/04-map.png",
            "title": "관찰 지도",
            "description": "지도에 표시된 사진으로 동식물을 촬영한 위치를 확인합니다."
          },
          {
            "src": "./assets/grabpic/05-guestbook.png",
            "title": "방명록",
            "description": "다른 사용자를 구독하거나 방명록에 글을 남길 수 있습니다."
          }
        ]
      },
      "development": [
        {
          "title": "실시간 AI 카메라와 인식 결과 표시",
          "paragraphs": [
            "기기 카메라 영상을 불러오고, TensorFlow.js로 YOLO 모델을 브라우저에서 실행했습니다. 카메라 프레임을 모델의 입력 크기에 맞게 조정하고 픽셀값을 정규화해 동식물 인식에 사용했습니다.",
            "인식한 동식물의 이름과 영역을 Canvas에 표시하고, 사용자가 해당 영역을 눌러 촬영할 대상을 선택할 수 있도록 구현했습니다."
          ],
          "demo": {
            "src": "./assets/grabpic/itemLabel.gif",
            "poster": "./assets/grabpic/itemLabel-poster.jpg",
            "title": "AI 카메라 실시간 인식",
            "alt": "AI 카메라가 새를 인식해 이름과 영역을 표시하는 시연",
            "width": 720,
            "height": 966
          }
        },
        {
          "title": "촬영 프레임 저장과 도감 등록",
          "paragraphs": [
            "영상 보간에 사용할 촬영 직전 장면을 확보하기 위해, 카메라 프레임을 0.1초 간격으로 최대 20장까지 저장했습니다. 새로운 프레임이 들어오면 가장 오래된 프레임을 제거하는 방식으로 최근 20장을 유지했습니다.",
            "촬영 후에는 사진과 인식한 동식물의 정보를 확인하고 도감에 등록할 수 있도록 화면과 API를 연결했습니다. 등록할 때 촬영 사진과 저장한 프레임을 FormData로 서버에 전달했으며, 전달한 프레임은 팀원이 구현한 영상 생성·프레임 보간에 사용됐습니다."
          ],
          "demo": {
            "src": "./assets/grabpic/itemSep.gif",
            "poster": "./assets/grabpic/itemSep-poster.jpg",
            "title": "촬영 사진 확인과 도감 등록",
            "alt": "촬영한 새의 사진을 확인하고 도감 등록을 위해 전송하는 시연",
            "width": 720,
            "height": 1560
          }
        }
      ],
      "detailsTitle": "전체 담당 기능",
      "details": [
        {
          "title": "카메라",
          "text": "기기 카메라 연결, 실시간 영상 표시, 사진 촬영·미리보기·재촬영"
        },
        {
          "title": "실시간 인식",
          "text": "TensorFlow.js로 YOLO 모델을 실행해 동식물 인식. Canvas에 이름과 영역을 표시하고 촬영 대상 선택"
        },
        {
          "title": "촬영 프레임 저장",
          "text": "영상 보간에 사용할 프레임을 0.1초 간격으로 저장하고 최근 20장 유지"
        },
        {
          "title": "도감 등록",
          "text": "촬영한 동식물의 정보 조회, 등록·취소 화면 구현, 등록 시 사진과 프레임 전송"
        },
        {
          "title": "회원",
          "text": "회원가입·로그인·로그아웃·회원정보 수정·비밀번호 재설정·회원 탈퇴 화면 구현 및 API 연동"
        },
        {
          "title": "자동 로그인",
          "text": "토큰 재발급 API 연동, 사용자 정보 조회 및 로그인 상태 복원"
        }
      ],
      "skills": [
        "React",
        "TypeScript",
        "TensorFlow.js",
        "YOLO",
        "Canvas API",
        "Recoil",
        "Axios",
        "Tailwind CSS",
        "styled-components"
      ],
      "resources": [
        {
          "title": "GrabPic GitHub 저장소",
          "url": "https://github.com/devgyu1998/SSAFY10-GrabPic",
          "description": "README에서 AI 카메라의 실시간 인식과 도감 등록 과정을 GIF로 볼 수 있습니다."
        }
      ]
    },
    {
      "id": "yutnori",
      "kind": "team",
      "name": "밀정 윷놀이 · 실시간 웹 게임",
      "period": "2024.01 — 2024.02",
      "description": "기존 윷놀이에 밀정 추리와 미니게임을 더한 실시간 웹 게임을 팀 프로젝트로 개발했습니다. Vue.js 기반의 게임 화면과 진행 로직, WebSocket 연동, 회원 화면을 담당했습니다.",
      "overview": {
        "title": "밀정 윷놀이",
        "description": "윷놀이에 밀정 추리와 미니게임을 더한 실시간 웹 보드게임입니다. 화상·음성으로 소통하며 팀별로 플레이하고, 미션에서 얻은 단서를 바탕으로 우리 팀에 숨어 있는 밀정을 추리합니다.",
        "role": "프론트엔드",
        "team": "6명 참여 — 프론트엔드 4명 / 백엔드 2명",
        "status": "프로젝트 종료",
        "gallery": [
          {
            "src": "./assets/yutnori/01-start.png",
            "title": "서비스 시작",
            "description": "로그인하거나 회원가입을 통해 밀정 윷놀이를 시작합니다."
          },
          {
            "src": "./assets/yutnori/02-lobby.png",
            "title": "게임 로비",
            "description": "개설된 게임 방을 찾아 입장하거나 새로운 방을 만듭니다."
          },
          {
            "src": "./assets/yutnori/03-waiting-room.png",
            "title": "대기방·팀 구성",
            "description": "홍팀과 청팀의 참가자를 확인하고 게임 시작을 준비합니다."
          },
          {
            "src": "./assets/yutnori/04-character-selection.png",
            "title": "캐릭터 선택",
            "description": "팀원들과 함께 게임에서 사용할 캐릭터를 선택합니다."
          },
          {
            "src": "./assets/yutnori/05-spy-selection.png",
            "title": "밀정 선택",
            "description": "게임 시작 전, 상대 팀의 말 중 밀정으로 지정할 말을 선택합니다."
          },
          {
            "src": "./assets/yutnori/06-game-start.png",
            "title": "게임 시작",
            "description": "참가자들의 화상 화면과 윷놀이 보드를 보며 차례대로 게임을 진행합니다."
          },
          {
            "src": "./assets/yutnori/07-yut-result.png",
            "title": "윷 던지기",
            "description": "3D 윷을 던지고 나온 결과에 따라 말을 이동합니다."
          },
          {
            "src": "./assets/yutnori/08-spy-deduction.png",
            "title": "밀정 추리",
            "description": "추리권을 사용해 우리 팀에서 밀정으로 의심되는 말을 지목합니다."
          },
          {
            "src": "./assets/yutnori/09-mission-tile.png",
            "title": "미션 칸 도착",
            "description": "말이 미션 칸에 도착하면 미니게임으로 이어집니다."
          },
          {
            "src": "./assets/yutnori/10-minigame-selection.png",
            "title": "미니게임 선택",
            "description": "카드를 골라 진행할 미니게임을 선택합니다."
          },
          {
            "src": "./assets/yutnori/11-camera-minigame.png",
            "title": "미니게임 진행",
            "description": "카메라 앞에서 손을 움직여 제한 시간 동안 미니게임을 진행합니다."
          },
          {
            "src": "./assets/yutnori/12-hint-selection.png",
            "title": "힌트 대상 선택",
            "description": "밀정을 추리하기 위해 힌트를 얻고 싶은 말을 선택합니다."
          }
        ]
      },
      "development": [
        {
          "title": "윷 던지기와 말 이동",
          "paragraphs": [
            "Three.js로 윷이 회전하며 떨어지는 애니메이션을 구현하고, 계산된 결과에 맞춰 윷의 앞뒷면을 표시했습니다. 말은 윷 결과와 선택한 경로에 따라 이동 위치를 계산하고, Vue의 스타일 바인딩과 CSS transition으로 움직임을 표현했습니다.",
            "윷 결과와 말 선택 정보는 WebSocket으로 주고받고, Pinia에서 말의 위치와 상태, 참가자의 차례를 관리했습니다. 상대 말을 잡거나 윷·모가 나오면 추가 기회를 부여하고, 제한 시간 내 입력이 없으면 자동으로 윷을 던지거나 말을 선택하도록 처리했습니다."
          ],
          "demo": {
            "src": "./assets/yutnori/demo-gameplay.gif",
            "poster": "./assets/yutnori/07-yut-result.png",
            "title": "윷 던지기·말 이동·미션 도착",
            "alt": "윷을 던지고 말을 이동해 미션 칸에 도착하는 시연",
            "width": 656,
            "height": 348
          }
        },
        {
          "title": "미니게임 연동과 밀정 추리 단서 제공",
          "paragraphs": [
            "말이 미션 칸에 도착하면 카드를 선택해 미니게임을 실행하도록 연결했습니다. 미니게임에 성공하면 우리 팀의 말 하나를 골라, 해당 캐릭터의 행적이나 소지품·흉터 등 밀정을 찾는 데 필요한 단서를 확인할 수 있도록 했습니다.",
            "WebSocket으로 받은 단서는 말에 마우스를 올렸을 때 표시했습니다. 게임 시작 시 제공되는 밀정의 단서와 각 캐릭터의 정보를 비교하며 추리할 수 있는 방식입니다. 미션이 끝나면 남은 추가 기회에 따라 윷 던지기를 이어가거나 다음 차례로 넘어가도록 처리했습니다."
          ],
          "demo": {
            "src": "./assets/yutnori/demo-hint.gif",
            "poster": "./assets/yutnori/12-hint-selection.png",
            "title": "미션 성공 후 단서 확인",
            "alt": "미션 성공 후 말을 선택하고 밀정 추리에 필요한 단서를 확인하는 시연",
            "width": 750,
            "height": 398
          }
        },
        {
          "title": "밀정 추리와 승패 판정",
          "paragraphs": [
            "추리권을 사용해 우리 팀 말 중 밀정으로 의심되는 말을 지목하고, 서버의 판정에 따라 성공·실패를 처리했습니다. 성공하면 밀정을 제거하고 윷을 던질 수 있도록 했으며, 실패하면 지목한 말이 3턴 동안 움직이지 못하게 하고 상대 팀으로 차례를 넘겼습니다.",
            "밀정을 제거한 뒤 나머지 말이 모두 골인하면 해당 팀이 승리하고, 밀정을 제거하지 못한 채 골인시키면 상대 팀이 승리하도록 구현했습니다. 각 종료 조건에 따라 승리 팀을 결정하고 게임 결과 화면을 표시했습니다."
          ],
          "demo": {
            "src": "./assets/yutnori/demo-deduction.gif",
            "poster": "./assets/yutnori/08-spy-deduction.png",
            "title": "추리권 사용·밀정 지목",
            "alt": "추리권을 사용해 밀정으로 의심되는 말을 선택하고 판정 결과를 확인하는 시연",
            "width": 594,
            "height": 334
          }
        }
      ],
      "detailsTitle": "전체 담당 기능",
      "details": [
        {
          "title": "게임 보드·말 정보",
          "text": "윷놀이 보드와 미션 칸 표시, 말에 마우스를 올렸을 때 캐릭터 정보와 획득한 단서 표시"
        },
        {
          "title": "윷 던지기",
          "text": "Three.js 기반 윷 던지기 애니메이션, 각 윷의 무작위 결과 계산, 도·개·걸·윷·모·백도 표시"
        },
        {
          "title": "말 선택·이동",
          "text": "이동할 말과 경로 선택, 윷 결과에 따른 말 이동, 상대 말 잡기와 골인 처리"
        },
        {
          "title": "차례·제한 시간",
          "text": "현재·다음 차례 표시, 추가 던지기 기회 관리, 제한 시간 초과 시 자동 윷 던지기·말 선택"
        },
        {
          "title": "실시간 연동",
          "text": "WebSocket을 통한 게임 동작 송수신, Pinia를 이용한 말의 위치·상태와 게임 진행 정보 관리"
        },
        {
          "title": "미션·미니게임 연결",
          "text": "미션 칸 도착 시 카드 선택·미니게임 실행 연결, 성공·실패 처리, 밀정 추리 단서 조회, 미션 종료 후 게임 진행 재개"
        },
        {
          "title": "밀정 추리·게임 종료",
          "text": "추리권 사용과 밀정 지목, 판정 결과에 따른 말 제거·이동 제한, 밀정과 일반 말의 골인 조건에 따른 승패 판정·결과 화면"
        },
        {
          "title": "회원 화면",
          "text": "회원가입·로그인·로그아웃, 이메일 인증과 입력값 검증, 닉네임·비밀번호 변경, 임시 비밀번호 발급, 회원 탈퇴"
        },
        {
          "title": "공통 UI",
          "text": "홈·게임·내 정보로 이동하는 상단 내비게이션, 친구 목록·채팅 등을 이용하는 사이드바 UI"
        }
      ],
      "skills": [
        "JavaScript",
        "Vue.js 3",
        "Pinia",
        "Three.js",
        "WebSocket",
        "Axios",
        "Vue Router",
        "Vite"
      ],
      "resources": [
        {
          "title": "GitHub 저장소",
          "url": "https://github.com/devgyu1998/SSAFY10-Yutnori",
          "description": "소스 코드와 README에서 프로젝트 설명 및 서비스 시연을 확인할 수 있습니다."
        }
      ]
    }
  ],
  "skills": [
    {
      "label": "Frontend",
      "items": [
        "HTML / CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "JSP / JSTL",
        "jQuery"
      ]
    },
    {
      "label": "Backend",
      "items": [
        "Java",
        "Spring Boot",
        "Spring MVC",
        "Spring Security",
        "전자정부프레임워크",
        "MyBatis",
        "JPA"
      ]
    },
    {
      "label": "Database",
      "items": [
        "SQL",
        "MariaDB",
        "MySQL",
        "MongoDB"
      ]
    },
    {
      "label": "Infrastructure",
      "items": [
        "Tomcat",
        "Docker",
        "Kubernetes",
        "Argo CD",
        "AWS",
        "네이버 클라우드"
      ]
    },
    {
      "label": "Collaboration",
      "items": [
        "Git",
        "Gerrit",
        "Jira",
        "Slack",
        "Mattermost"
      ]
    }
  ],
  "contact": {
    "email": "gyudev1356@gmail.com",
    "github": "https://github.com/devgyu1998"
  }
};

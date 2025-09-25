# 07. 테스팅 환경 구축

## 📋 작업 개요
테스트 환경 구축, 단위 테스트, 통합 테스트, E2E 테스트 구현

## 🎯 목표
- Server Actions 포함 포괄적인 테스트 환경 구축
- 코드 품질 보장
- 자동화된 테스트 파이프라인
- 테스트 커버리지 최적화
- Server Actions 테스트 전략 수립

## ✅ 세부 작업 목록

### 7.1 테스트 환경 설정
- [ ] Jest 설정
  - 기본 Jest 구성
  - TypeScript 지원
  - 환경 변수 설정
- [ ] React Testing Library 설정
  - 컴포넌트 테스트 환경
  - 커스텀 렌더 함수
  - 유틸리티 함수
- [ ] Playwright 설정 (E2E)
  - 브라우저 설정
  - 테스트 환경 구성
  - CI/CD 통합

### 7.2 단위 테스트 (Server Actions 포함)
- [ ] 유틸리티 함수 테스트
  - 날짜 처리 함수
  - 데이터 변환 함수
  - 유효성 검사 함수
- [ ] 훅 테스트
  - `useAuth` 훅
  - `useFoodLog` 훅
  - `useUpload` 훅
  - `useActionState` 훅 활용 테스트
- [ ] Server Actions 테스트
  - 인증 관련 Server Actions
  - 식단 데이터 관련 Server Actions
  - 업로드 관련 Server Actions
  - 에러 처리 테스트

### 7.3 컴포넌트 테스트 (Server Actions 통합)
- [ ] UI 컴포넌트 테스트
  - `Button` 컴포넌트
  - `Modal` 컴포넌트
  - `FoodLogCard` 컴포넌트
  - Server Actions 연동 테스트
- [ ] 폼 컴포넌트 테스트
  - `LoginForm` 컴포넌트
  - `SignupForm` 컴포넌트
  - Server Actions 기반 유효성 검사
  - `useActionState` 훅 테스트
- [ ] 페이지 컴포넌트 테스트
  - 인증 페이지
  - 대시보드 페이지
  - 식단 조회 페이지
  - Server Components와 Client Components 통합 테스트

### 7.4 통합 테스트 (Server Actions 중심)
- [ ] 인증 플로우 테스트
  - Server Actions 기반 로그인/로그아웃
  - Server Actions 기반 회원가입
  - 세션 관리
- [ ] 식단 기록 플로우 테스트
  - Server Actions 기반 이미지 업로드
  - AI 분석 결과 처리
  - Server Actions 기반 데이터 저장
- [ ] Server Actions 통합 테스트
  - Supabase 연동
  - n8n 웹훅 호출
  - 에러 시나리오
  - `revalidatePath` 테스트

### 7.5 E2E 테스트
- [ ] 사용자 시나리오 테스트
  - 전체 사용자 여정
  - 모바일 시나리오
  - 데스크톱 시나리오
- [ ] 성능 테스트
  - 페이지 로딩 시간
  - 이미지 업로드 성능
  - 데이터베이스 쿼리 성능
- [ ] 크로스 브라우저 테스트
  - Chrome, Firefox, Safari
  - 모바일 브라우저
  - 반응형 디자인

### 7.6 테스트 자동화
- [ ] GitHub Actions 설정
  - 테스트 실행 워크플로우
  - 코드 커버리지 리포트
  - 자동 배포
- [ ] 테스트 데이터 관리
  - 테스트 데이터베이스
  - 목 데이터 생성
  - 테스트 격리
- [ ] 테스트 리포팅
  - 커버리지 리포트
  - 테스트 결과 시각화
  - 성능 메트릭

### 7.7 모킹 및 스텁 (Server Actions 포함)
- [ ] Supabase 모킹
  - 데이터베이스 모킹
  - 인증 모킹
  - Storage 모킹
  - Server Actions 모킹
- [ ] n8n 웹훅 모킹
  - API 응답 모킹
  - 에러 시나리오 모킹
  - Server Actions 웹훅 호출 모킹
- [ ] 외부 API 모킹
  - AI 분석 API 모킹
  - 파일 업로드 모킹
  - Server Actions 외부 API 호출 모킹

## 🔧 필요한 기술 스택
- Jest
- React Testing Library
- Playwright
- MSW (Mock Service Worker)
- GitHub Actions
- Next.js Server Actions 테스트 도구

## ⏱️ 예상 소요 시간
8-10시간

## 📝 참고사항
- 테스트 우선 개발 (TDD) 적용
- 의미 있는 테스트 케이스 작성
- 테스트 유지보수성 고려
- CI/CD 파이프라인 통합
- Server Actions 테스트 전략 수립
- API Routes 대신 Server Actions 테스트
- `useActionState` 훅 테스트 방법론

## 🔗 의존성
- 01-06. 모든 핵심 기능 구현 완료 후 진행

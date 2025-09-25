# 05. 페이지 구현 및 라우팅

## 📋 작업 개요
Next.js App Router를 활용한 페이지 구현 및 라우팅 설정

## 🎯 목표
- 핵심 페이지 구현 (Server Actions 활용)
- 라우팅 및 네비게이션 설정
- 페이지별 상태 관리
- SEO 최적화
- Server Components와 Client Components 최적화

## ✅ 세부 작업 목록

### 5.1 인증 페이지 (Server Actions 활용)
- [ ] `/login` 페이지
  - Server Actions 기반 로그인 폼
  - `useActionState` 훅 활용
  - 회원가입 링크
  - 소셜 로그인 (선택사항)
- [ ] `/signup` 페이지
  - Server Actions 기반 회원가입 폼
  - `useActionState` 훅 활용
  - 로그인 링크
  - 이메일 인증
- [ ] `/auth/callback` 페이지
  - Supabase 인증 콜백 처리
  - Server Actions 기반 리다이렉트 로직

### 5.2 메인 페이지 (Server Actions 활용)
- [ ] `/` (홈) 페이지
  - Server Actions 기반 식단 기록 버튼
  - Server Components로 최근 기록 미리보기
  - Server Actions로 오늘의 칼로리 요약
- [ ] `/dashboard` 페이지
  - Server Actions 기반 식단 기록 버튼
  - Server Components로 오늘의 식단 요약
  - Server Actions 기반 빠른 액션 버튼들

### 5.3 식단 기록 페이지 (Server Actions 활용)
- [ ] `/log` 페이지
  - Server Actions 기반 식단 기록 인터페이스
  - 카메라/갤러리 선택
  - `useActionState` 훅으로 업로드 진행 상태 관리
  - Server Actions 결과 확인

### 5.4 식단 조회 페이지 (Server Actions 활용)
- [ ] `/my-diet` 페이지
  - Server Components로 날짜별 식단 조회
  - Server Actions 기반 끼니별 필터링
  - Server Actions 기반 검색 기능
- [ ] `/my-diet/[date]` 동적 페이지
  - Server Components로 특정 날짜 식단 상세
  - Server Actions 기반 개별 식단 수정/삭제
- [ ] `/my-diet/[date]/[mealType]` 동적 페이지
  - Server Components로 특정 끼니 상세 조회

### 5.5 설정 페이지 (Server Actions 활용)
- [ ] `/settings` 페이지
  - Server Actions 기반 프로필 정보 수정
  - Server Actions 기반 알림 설정
  - Server Actions 기반 데이터 내보내기
  - Server Actions 기반 계정 삭제

### 5.6 에러 페이지
- [ ] `404` 페이지
  - 페이지를 찾을 수 없음
  - 홈으로 돌아가기
- [ ] `500` 페이지
  - 서버 에러
  - 재시도 버튼
- [ ] `error.tsx` 글로벌 에러 처리

### 5.7 라우팅 및 네비게이션 (Server Actions 통합)
- [ ] `middleware.ts` 설정
  - Server Actions 기반 인증 상태 확인
  - 리다이렉트 로직
- [ ] `loading.tsx` 글로벌 로딩
- [ ] `not-found.tsx` 글로벌 404
- [ ] Server Actions 기반 네비게이션 메뉴 구현

### 5.8 SEO 및 메타데이터
- [ ] `metadata.ts` 설정
- [ ] 각 페이지별 메타데이터
- [ ] Open Graph 태그
- [ ] Twitter Card 설정

## 🔧 필요한 기술 스택
- Next.js App Router
- TypeScript
- Next.js Server Actions
- React Server Components
- React Client Components

## ⏱️ 예상 소요 시간
6-8시간

## 📝 참고사항
- 모든 페이지는 모바일 우선 반응형
- Server Components 우선 사용
- 클라이언트 상태가 필요한 경우만 Client Components
- 페이지 로딩 성능 최적화
- Server Actions를 통한 서버 로직 구현
- API Routes 대신 Server Actions 우선 사용
- `useActionState` 훅을 활용한 상태 관리

## 🔗 의존성
- 04. UI 컴포넌트 개발 완료 후 진행
- 02. Supabase 설정 완료 후 인증 페이지 개발

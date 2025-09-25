# 04. UI 컴포넌트 개발

## 📋 작업 개요
사용자 인터페이스 컴포넌트 개발 및 모바일 최적화

## 🎯 목표
- 핵심 UI 컴포넌트 구현 (Server Actions 통합)
- 모바일 우선 반응형 디자인
- 사용자 경험 최적화
- 접근성 고려
- Server Actions와의 원활한 통합

## ✅ 세부 작업 목록

### 4.1 레이아웃 컴포넌트
- [ ] `Header` 컴포넌트
  - 로고/브랜드명
  - 사용자 프로필 메뉴
  - 로그아웃 버튼
- [ ] `Navigation` 컴포넌트
  - 하단 네비게이션 바 (모바일)
  - 사이드바 (데스크톱)
- [ ] `Layout` 컴포넌트
  - 전체 페이지 레이아웃
  - 반응형 컨테이너

### 4.2 인증 관련 컴포넌트 (Server Actions 통합)
- [ ] `LoginForm` 컴포넌트
  - 이메일/비밀번호 입력
  - Server Actions 기반 로그인 처리
  - `useActionState` 훅 활용
  - 에러 메시지 표시
- [ ] `SignupForm` 컴포넌트
  - 회원가입 폼
  - Server Actions 기반 회원가입 처리
  - 비밀번호 확인
  - 약관 동의
- [ ] `AuthGuard` 컴포넌트
  - 인증 상태 확인
  - 리다이렉트 처리

### 4.3 식단 기록 컴포넌트 (Server Actions 통합)
- [ ] `FoodUploadButton` 컴포넌트
  - 원클릭 업로드 버튼
  - 카메라/갤러리 선택
  - Server Actions 기반 업로드 처리
  - `useActionState` 훅 활용
  - 로딩 상태 표시
- [ ] `UploadProgress` 컴포넌트
  - 업로드 진행률 표시
  - AI 분석 상태 표시
  - Server Actions 진행 상태 연동
- [ ] `UploadResult` 컴포넌트
  - 성공/실패 메시지
  - 결과 미리보기
  - Server Actions 결과 처리

### 4.4 식단 조회 컴포넌트 (Server Actions 통합)
- [ ] `FoodLogCard` 컴포넌트
  - 개별 식단 기록 카드
  - 이미지, 음식명, 칼로리 표시
  - 끼니별 구분 표시
  - Server Actions 기반 수정/삭제 기능
- [ ] `MealSection` 컴포넌트
  - 끼니별 그룹화
  - 아침/점심/저녁/간식 탭
  - Server Actions 기반 데이터 로딩
- [ ] `NutritionSummary` 컴포넌트
  - 총 칼로리 표시
  - 영양성분 요약
  - 차트/그래프 (선택사항)
  - Server Actions 기반 통계 계산

### 4.5 공통 컴포넌트 (Server Actions 지원)
- [ ] `Button` 컴포넌트
  - 다양한 스타일 변형
  - Server Actions 연동 지원
  - `useActionState` 훅 통합
  - 로딩 상태
  - 비활성화 상태
- [ ] `Modal` 컴포넌트
  - 모달 오버레이
  - 닫기 기능
  - 반응형 크기
  - Server Actions 결과 표시
- [ ] `LoadingSpinner` 컴포넌트
  - 로딩 인디케이터
  - 다양한 크기
  - Server Actions 진행 상태 표시
- [ ] `ErrorMessage` 컴포넌트
  - 에러 메시지 표시
  - 재시도 버튼
  - Server Actions 에러 처리

### 4.6 모바일 최적화
- [ ] 터치 인터페이스 최적화
- [ ] 스와이프 제스처 지원
- [ ] 키보드 접근성
- [ ] 화면 크기별 레이아웃 조정

## 🔧 필요한 기술 스택
- React
- TypeScript
- Next.js Server Actions
- Tailwind CSS
- shadcn/ui
- Framer Motion (애니메이션)

## ⏱️ 예상 소요 시간
8-10시간

## 📝 참고사항
- 모든 컴포넌트는 모바일 우선으로 설계
- 접근성 가이드라인 준수 (WCAG 2.1)
- 성능 최적화 고려 (React.memo, useMemo)
- 컴포넌트 재사용성 극대화
- Server Actions와의 원활한 통합
- `useActionState` 훅을 활용한 상태 관리
- API Routes 대신 Server Actions 우선 사용

## 🔗 의존성
- 01. 프로젝트 설정 완료 후 진행
- 02. Supabase 설정 완료 후 인증 컴포넌트 개발

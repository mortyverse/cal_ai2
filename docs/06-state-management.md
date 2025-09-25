# 06. 상태 관리 및 데이터 페칭

## 📋 작업 개요
애플리케이션 상태 관리, 데이터 페칭 로직, 캐싱 전략 구현

## 🎯 목표
- Server Actions와 통합된 상태 관리 시스템 구축
- 효율적인 데이터 페칭 구현
- 캐싱 및 성능 최적화
- 에러 상태 관리
- Server Actions 상태 관리 최적화

## ✅ 세부 작업 목록

### 6.1 인증 상태 관리 (Server Actions 통합)
- [ ] `AuthContext` 구현
  - 사용자 인증 상태
  - Server Actions 기반 로그인/로그아웃 함수
  - 세션 관리
- [ ] `useAuth` 훅 구현
  - 인증 상태 접근
  - Server Actions 기반 인증 함수들
  - `useActionState` 훅 활용
  - 로딩 상태
- [ ] 인증 상태 지속성
  - 로컬 스토리지 동기화
  - 페이지 새로고침 대응
  - Server Actions와 클라이언트 상태 동기화

### 6.2 식단 데이터 관리 (Server Actions 통합)
- [ ] `FoodLogContext` 구현
  - 식단 기록 목록
  - 현재 날짜 필터
  - 끼니별 필터
  - Server Actions 기반 데이터 업데이트
- [ ] `useFoodLog` 훅 구현
  - Server Actions 기반 식단 데이터 CRUD
  - `useActionState` 훅 활용
  - 필터링 로직
  - 통계 계산
- [ ] 데이터 동기화
  - Server Actions 기반 실시간 업데이트
  - 낙관적 업데이트
  - `revalidatePath` 활용

### 6.3 Server Actions 통신 관리
- [ ] `actions` 폴더 구조 설정
  - Server Actions 함수들
  - 공통 유틸리티 함수
  - 타입 정의
- [ ] `useServerAction` 훅 구현
  - Server Actions 호출 로직
  - `useActionState` 훅 래핑
  - 에러 처리
  - 로딩 상태
- [ ] React Query 설정 (선택사항)
  - Server Actions와 통합
  - 캐싱 전략
  - 백그라운드 업데이트
  - 무한 스크롤

### 6.4 업로드 상태 관리 (Server Actions 통합)
- [ ] `UploadContext` 구현
  - 업로드 진행 상태
  - 파일 선택 상태
  - Server Actions 결과 상태
- [ ] `useUpload` 훅 구현
  - Server Actions 기반 파일 업로드 함수
  - `useActionState` 훅 활용
  - 진행률 추적
  - 에러 처리
- [ ] 업로드 큐 관리
  - Server Actions 기반 다중 파일 업로드
  - 실패 재시도

### 6.5 UI 상태 관리
- [ ] `UIContext` 구현
  - 모달 상태
  - 사이드바 상태
  - 알림 상태
- [ ] `useUI` 훅 구현
  - UI 상태 제어
  - 모달 관리
  - 토스트 알림

### 6.6 캐싱 전략 (Server Actions 통합)
- [ ] 메모리 캐싱
  - React Query 또는 SWR
  - Server Actions와 통합
  - `revalidatePath` 기반 캐시 무효화
  - 백그라운드 업데이트
- [ ] 로컬 스토리지 캐싱
  - 사용자 설정
  - 임시 데이터
  - Server Actions 결과 캐싱
- [ ] 이미지 캐싱
  - Supabase Storage 최적화
  - 지연 로딩
  - Server Actions 기반 이미지 처리

### 6.7 에러 상태 관리 (Server Actions 통합)
- [ ] 글로벌 에러 처리
  - 에러 바운더리
  - Server Actions 에러 로깅
  - 사용자 알림
- [ ] 네트워크 에러 처리
  - Server Actions 재시도 로직
  - 오프라인 상태
  - 동기화 큐
  - Server Actions 에러 복구

## 🔧 필요한 기술 스택
- React Context API
- Custom Hooks
- Next.js Server Actions
- React Query 또는 SWR (선택사항)
- Zustand (선택사항)

## ⏱️ 예상 소요 시간
6-8시간

## 📝 참고사항
- 상태 관리 복잡도 최소화
- 불필요한 리렌더링 방지
- 메모리 누수 방지
- 타입 안전성 보장
- Server Actions와 클라이언트 상태 동기화
- `useActionState` 훅을 활용한 상태 관리
- API Routes 대신 Server Actions 우선 사용

## 🔗 의존성
- 02. Supabase 설정 완료 후 진행
- 03. n8n 연동 완료 후 업로드 상태 관리

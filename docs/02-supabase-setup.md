# 02. Supabase 설정 및 데이터베이스 구성

## 📋 작업 개요
Supabase 프로젝트 설정, 인증 시스템 구성, 데이터베이스 스키마 설계 및 구현

## 🎯 목표
- Supabase 프로젝트 생성 및 설정
- 사용자 인증 시스템 구현 (Server Actions 활용)
- 데이터베이스 스키마 설계 및 구현
- Supabase Storage 설정
- Server Actions와 Supabase 연동 최적화

## ✅ 세부 작업 목록

### 2.1 Supabase 프로젝트 설정
- [ ] Supabase 프로젝트 생성
- [ ] 프로젝트 URL 및 API 키 확인
- [ ] 환경 변수 설정 (`.env.local`)
- [ ] Supabase 클라이언트 라이브러리 설치

### 2.2 인증 시스템 구현 (Server Actions 활용)
- [ ] Supabase Auth 설정
- [ ] Server Actions 기반 인증 함수 구현
  - `actions/auth.ts` 파일 생성
  - `signUp`, `signIn`, `signOut` Server Actions
  - `getUser` Server Action (서버 컴포넌트용)
- [ ] 인증 상태 관리 (Context API 또는 Zustand)
- [ ] 보호된 라우트 구현 (middleware.ts)
- [ ] 로그아웃 기능 구현

### 2.3 데이터베이스 스키마 설계
- [ ] `users` 테이블 설계
- [ ] `food_logs` 테이블 설계
  - `id` (UUID, Primary Key)
  - `user_id` (UUID, Foreign Key)
  - `image_url` (TEXT)
  - `meal_type` (TEXT: 'breakfast', 'lunch', 'dinner', 'snack')
  - `ai_analysis_result` (JSONB)
  - `created_at` (TIMESTAMP)
  - `updated_at` (TIMESTAMP)
- [ ] RLS (Row Level Security) 정책 설정
- [ ] 인덱스 설정

### 2.4 Supabase Storage 설정
- [ ] Storage 버킷 생성 (`food-images`)
- [ ] Storage 정책 설정
- [ ] Server Actions 기반 이미지 업로드/다운로드 함수 구현
  - `actions/storage.ts` 파일 생성
  - `uploadImage` Server Action
  - `deleteImage` Server Action
  - `getImageUrl` Server Action

### 2.5 데이터베이스 함수 및 트리거
- [ ] 자동 타임스탬프 업데이트 트리거
- [ ] 데이터 검증 함수

### 2.6 Server Actions 기반 데이터베이스 연동
- [ ] `actions/food-logs.ts` 파일 생성
  - `createFoodLog` Server Action
  - `getFoodLogs` Server Action
  - `updateFoodLog` Server Action
  - `deleteFoodLog` Server Action
- [ ] Server Actions에서 Supabase 클라이언트 사용 최적화
- [ ] 에러 처리 및 로깅 구현

## 🔧 필요한 기술 스택
- Supabase
- PostgreSQL
- Row Level Security (RLS)
- Next.js Server Actions

## ⏱️ 예상 소요 시간
4-5시간

## 📝 참고사항
- 모든 테이블에 RLS 정책 적용
- 사용자별 데이터 격리 보장
- 이미지 파일 최적화 고려
- 데이터베이스 성능 최적화
- Server Actions에서 Supabase 클라이언트 재사용 최적화
- API Routes 대신 Server Actions 우선 사용

## 🔗 의존성
- 01. 프로젝트 설정 완료 후 진행

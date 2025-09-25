# 03. Server Actions 기반 n8n 연동 및 AI 분석 시스템

## 📋 작업 개요
Server Actions를 활용한 n8n 워크플로우 연동, AI 분석 서비스 통합, 서버 로직 구현

## 🎯 목표
- Server Actions 기반 n8n 워크플로우 연동
- AI 음식 분석 서비스 연동
- 시간 기반 자동 끼니 분류 로직 구현
- Server Actions를 통한 서버 로직 구현

## ✅ 세부 작업 목록

### 3.1 n8n 워크플로우 설계
- [ ] n8n 인스턴스 설정 (로컬 또는 클라우드)
- [ ] 웹훅 트리거 노드 설정
- [ ] 시간 기반 끼니 분류 로직 구현
  - 아침: 04:00 ~ 10:59
  - 점심: 11:00 ~ 16:59
  - 저녁: 17:00 ~ 21:59
  - 간식: 22:00 ~ 03:59
- [ ] 워크플로우 플로우차트 작성

### 3.2 AI 분석 서비스 연동
- [ ] AI 음식 분석 API 선택 및 설정
  - 옵션: Google Vision API, AWS Rekognition, OpenAI GPT-4V
- [ ] 이미지 전처리 로직 구현
- [ ] AI 분석 결과 파싱 및 정규화
- [ ] 에러 핸들링 구현

### 3.3 Supabase 연동
- [ ] Supabase Storage 업로드 노드 설정
- [ ] 데이터베이스 삽입 노드 설정
- [ ] 이미지 URL 생성 로직
- [ ] 트랜잭션 처리

### 3.4 Server Actions 기반 업로드 로직 구현
- [ ] `actions/food-upload.ts` 파일 생성
- [ ] `uploadFoodImage` Server Action 구현
  - multipart/form-data 처리
  - 이미지 파일 검증
  - n8n 웹훅 호출
  - 응답 처리 및 에러 핸들링
- [ ] `processFoodAnalysis` Server Action 구현
  - n8n 워크플로우 결과 처리
  - 데이터베이스 저장
  - 캐시 무효화

### 3.5 Server Actions 테스트 및 디버깅
- [ ] Server Actions 단위 테스트
- [ ] n8n 워크플로우 통합 테스트
- [ ] 에러 시나리오 테스트
- [ ] 로깅 시스템 구현
- [ ] Server Actions 성능 모니터링

## 🔧 필요한 기술 스택
- n8n
- AI 분석 API (Google Vision API 또는 대안)
- Supabase
- Next.js Server Actions

## ⏱️ 예상 소요 시간
6-8시간

## 📝 참고사항
- AI 분석 실패 시 적절한 에러 메시지 제공
- 이미지 파일 크기 제한 설정
- 워크플로우 실행 시간 최적화
- 비용 효율적인 AI API 사용
- Server Actions에서 n8n 웹훅 호출 최적화
- API Routes 대신 Server Actions 사용으로 보안성 향상

## 🔗 의존성
- 02. Supabase 설정 완료 후 진행
- AI 분석 API 키 발급 필요

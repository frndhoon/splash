## Splash Design

인터랙티브 스플래시 화면 프로젝트입니다.

### 기술 스택
- **Spline** - 3D 인터랙티브 씬
- **After Effects** - 2D 비디오 애니메이션 (mp4)

### 구현 방식
1. **2D 애니메이션**: After Effects로 제작한 비디오(`splash_intro_ver2.mp4`)를 자동 재생
2. **3D 인터랙션**: 비디오 종료 후 Spline 3D 씬으로 부드럽게 전환 (1초 페이드인)
3. **AI**: gemini 3 나노 바나나로 2d icon 생성, Spline AI로 material asset 생성
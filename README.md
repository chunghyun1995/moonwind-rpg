# 달바람 연대기 · Moonwind Chronicles

독자적인 동양 판타지 세계관의 싱글 플레이 픽셀 웹 RPG. 외부 이미지, 패키지, 서버 없이 HTML Canvas로 실행됩니다.

## 실행

`dist/index.html`을 브라우저로 열거나 `node serve.mjs` 실행 후 http://localhost:4173 접속.

## 조작

- WASD / 방향키: 이동
- Space: 검 공격, Q: 광역 달빛베기 (5초 재사용)
- E: 주민 대화, 1: 체력약
- 모바일: 화면의 이동 및 행동 버튼

이장 하람의 의뢰 → 들깨비 5마리 처치 → 보상 수령 → 동쪽 공터 수호자 처치 → 마을에 보고. 사냥, 레벨업, 물약 구매, 검 강화, 부활, 자동 저장을 지원합니다. 저장은 브라우저 localStorage에 보관되며 기기 간 동기화나 멀티플레이는 지원하지 않습니다.

## 배포

정적 배포 디렉터리는 `dist/`입니다. GitHub Pages는 Settings → Pages → Deploy from a branch → main / (root)로 배포합니다. 루트의 `index.html`은 게임으로 이동합니다.

플레이: https://chunghyun1995.github.io/moonwind-rpg/

모든 지도와 캐릭터는 코드로 직접 그렸으며 기존 게임의 그래픽, 이름, 음원을 사용하지 않습니다.

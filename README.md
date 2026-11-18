# figma-to-web-spec-kit

Figma 디자인을 웹 페이지로 옮길 때 쓰는 작업 순서, 명령 양식, 점검표를 모은 문서 묶음입니다.
같이 들어 있는 `web3-studio.html`은 이 방식으로 만든 단일 HTML 예시예요.

## 파일

| 자리 | 내용 |
|---|---|
| `FIGMA_TO_WEB_WORKFLOW.md` | Figma에서 웹으로 옮기는 명령 구조와 작업 순서 |
| `figma-to-web-spec-kit/` | 명세(`SPECIFICATIONS.md`), 디자인 패턴, 구현 안내, 점검표, 명령 양식, 문제 해결 문서. 목차는 `figma-to-web-spec-kit/README.md` |
| `web3-studio.html` | 예시 페이지. Tailwind CDN을 쓰고, 이미지는 `http://localhost:3845/assets/...`에서 불러와요 |
| `tests/web3-studio.test.cjs` | 예시 페이지의 스크립트 동작을 브라우저로 확인하는 시험 |
| `SECURITY.md` | 보안 문제를 알리는 방법 |

`web3-studio.html`의 이미지는 로컬 주소(`localhost:3845`)를 가리켜서, 그 주소에서 이미지를 내주는 프로그램이 없으면 보이지 않아요. 그 주소를 무엇이 띄웠는지는 저장소에서 확인 못 했습니다.
`figma-to-web-spec-kit/README.md`와 `examples/README.md`가 적은 `examples/web3-studio/`, `basic-landing/`, `portfolio-site/` 폴더는 저장소에 없어요.

## 시험

Node와 Playwright(Chromium 포함)가 있어야 돌아가요. Playwright가 없으면 시험은 건너뜁니다.

```
node --test tests/*.test.cjs
```

바깥 주소로 가는 요청은 모두 막은 채 `web3-studio.html`을 열고, 스크립트 오류가 없는지, 도움 탭 전환, 스크롤 때 나타나는 효과, 메뉴 링크 이동, 캐러셀 이전 버튼을 확인해요.

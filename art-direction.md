# 2D 캐릭터 생성 기록

생성 방식: built-in image_gen. WebP 포맷으로 변환하고 투명 알파를 유지했습니다.
최종 자산: dist/assets/characters-2d.webp, residents-2d.webp, creatures-2d.webp.

프롬프트 세트:
- 플레이어: Korean fantasy top-down RPG, smooth hand-painted anime sprites, clean anti-aliased contours, subtle painted shading, NOT pixel art. Transparent 4×4 atlas. Rows: blue hanbok traveler with gat, armored warrior with red cape, green leather archer, violet robe mage with pointed hat. Columns: front, right, back, left. Full bodies, no weapons, same scale, complete feet, no floor shadows or text.
- 주민: Korean historical fantasy top-down RPG, polished hand-painted 2D characters. Transparent 4×2 atlas: elderly chief, herbal merchant, blacksmith, wandering scholar, storyteller, gate keeper, weapon merchant, martial instructor. Full bodies, front facing, complete feet, equal baseline, no shadows or text.
- 몬스터: Smooth hand-painted 2D fantasy RPG 4×3 atlas. Woodland, northern, volcanic rows, each with three monsters and a crowned guardian. Transparent background, slightly elevated front view, full bodies, no overlaps, shadows or text.
- 주민 배경 보정: Remove the background completely and output genuine transparent alpha. Preserve all eight characters, arrangement exactly 4 columns by 2 rows, clothing, pose, full feet, colors and details. No drop shadows, no glow clouds. Background extraction only. Empty spaces between figures transparent.

이미지 원본은 generated_images에 보존되어 있으며, 게임은 위 세 WebP 자산을 사용합니다.

## 아이템 아이콘 (v13)
생성 방식: built-in image_gen. 최종 자산: dist/assets/items-2d.webp.
Prompt: Production inventory icon atlas for a cozy Korean fantasy 2D RPG. Smooth hand-painted anime game icons, polished shading, clean readable silhouettes, jewel colors, no pixel art. Exactly 4 columns by 4 rows, 16 separate centered icons in equal square cells with generous empty transparent padding, no overlaps, NO text, numbers, frames or labels, genuinely transparent background. Row1: red healing potion, blue mana potion, warm rice meal with dumpling in wooden bowl, protective yellow paper talisman with moon emblem. Row2: silver Korean fantasy sword with gold guard, curved wooden longbow, blue gem magic staff, folded blue hanbok robe. Row3: steel chest armor, green brown leather archer vest, purple embroidered wizard robe, green wind knot. Row4: lotus pendant necklace, golden celestial seal medallion, luminous blue enhancement crystals, medicinal herbs. Same camera and scale, full objects inside their own cells.

from collections import deque
from pathlib import Path
from shutil import copy2

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
ASSET_DIR = ROOT / "public" / "figma-assets"
BACKUP_DIR = ROOT / "public" / "figma-assets-original"


def is_checker_pixel(pixel: tuple[int, int, int]) -> bool:
    r, g, b = pixel
    # 체커보드 흰색(255,255,255)과 회색(~192,192,192) 모두 감지하도록 threshold 낮춤
    return min(r, g, b) >= 150 and max(r, g, b) - min(r, g, b) <= 40


def transparentize_background(path: Path) -> int:
    backup_path = BACKUP_DIR / path.name
    if not backup_path.exists():
        copy2(path, backup_path)

    image = Image.open(backup_path).convert("RGBA")
    width, height = image.size
    pixels = image.load()
    visited = bytearray(width * height)
    queue: deque[tuple[int, int]] = deque()

    def index(x: int, y: int) -> int:
        return y * width + x

    def add_if_background(x: int, y: int) -> None:
        idx = index(x, y)
        if visited[idx]:
            return
        r, g, b, _ = pixels[x, y]
        if is_checker_pixel((r, g, b)):
            visited[idx] = 1
            queue.append((x, y))

    for x in range(width):
        add_if_background(x, 0)
        add_if_background(x, height - 1)
    for y in range(height):
        add_if_background(0, y)
        add_if_background(width - 1, y)

    while queue:
        x, y = queue.popleft()
        if x > 0:
            add_if_background(x - 1, y)
        if x + 1 < width:
            add_if_background(x + 1, y)
        if y > 0:
            add_if_background(x, y - 1)
        if y + 1 < height:
            add_if_background(x, y + 1)

    cleared = 0
    for y in range(height):
        for x in range(width):
            if visited[index(x, y)]:
                r, g, b, _ = pixels[x, y]
                pixels[x, y] = (r, g, b, 0)
                cleared += 1

    image.save(path)
    return cleared


def main() -> None:
    BACKUP_DIR.mkdir(parents=True, exist_ok=True)
    for path in sorted(ASSET_DIR.glob("*.png")):
        cleared = transparentize_background(path)
        print(f"{path.name}: cleared {cleared:,} background pixels")


if __name__ == "__main__":
    main()

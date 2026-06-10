from __future__ import annotations

from pathlib import Path
from random import Random

from PIL import Image, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "figma-assets" / "lifestyle_backgrounds_1080x1920"
LOW_SIZE = (270, 480)
OUT_SIZE = (1080, 1920)


def rgba(hex_value: str, alpha: int = 255) -> tuple[int, int, int, int]:
    hex_value = hex_value.lstrip("#")
    return (
        int(hex_value[0:2], 16),
        int(hex_value[2:4], 16),
        int(hex_value[4:6], 16),
        alpha,
    )


def lerp(a: int, b: int, t: float) -> int:
    return int(a + (b - a) * t)


def gradient(top: str, bottom: str) -> Image.Image:
    image = Image.new("RGBA", LOW_SIZE)
    draw = ImageDraw.Draw(image)
    c1 = rgba(top)
    c2 = rgba(bottom)
    for y in range(LOW_SIZE[1]):
        t = y / max(1, LOW_SIZE[1] - 1)
        draw.line(
            (0, y, LOW_SIZE[0], y),
            fill=(lerp(c1[0], c2[0], t), lerp(c1[1], c2[1], t), lerp(c1[2], c2[2], t), 255),
        )
    return image


def add_noise(image: Image.Image, seed: int, alpha: int = 12) -> None:
    rand = Random(seed)
    pixels = Image.new("RGBA", LOW_SIZE, (0, 0, 0, 0))
    draw = ImageDraw.Draw(pixels)
    for _ in range(1400):
        x = rand.randrange(LOW_SIZE[0])
        y = rand.randrange(LOW_SIZE[1])
        value = rand.randrange(190, 255)
        draw.point((x, y), fill=(value, value, value, rand.randrange(3, alpha)))
    image.alpha_composite(pixels)


def star(draw: ImageDraw.ImageDraw, x: int, y: int, r: int, fill: tuple[int, int, int, int]) -> None:
    arm = max(1, r // 3)
    draw.polygon(
        [(x, y - r), (x + arm, y - arm), (x + r, y), (x + arm, y + arm),
         (x, y + r), (x - arm, y + arm), (x - r, y), (x - arm, y - arm)],
        fill=fill,
    )


def sparkles(draw: ImageDraw.ImageDraw, seed: int, count: int, area: tuple[int, int, int, int]) -> None:
    rand = Random(seed)
    for _ in range(count):
        x = rand.randrange(area[0], area[2])
        y = rand.randrange(area[1], area[3])
        r = rand.choice([1, 1, 2, 3])
        color = rand.choice([rgba("#ffffff", 160), rgba("#bcefff", 150), rgba("#ffd7ff", 135), rgba("#fff0a8", 145)])
        if r == 1:
            draw.rectangle((x, y, x + 1, y + 1), fill=color)
        else:
            star(draw, x, y, r, color)


def rect(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], fill: str, outline: str | None = None, width: int = 1) -> None:
    draw.rectangle(box, fill=rgba(fill), outline=rgba(outline) if outline else None, width=width)


def round_rect(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], radius: int, fill: str, outline: str | None = None, width: int = 1) -> None:
    draw.rounded_rectangle(box, radius=radius, fill=rgba(fill), outline=rgba(outline) if outline else None, width=width)


def window(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], sky_top: str, sky_bottom: str) -> None:
    x1, y1, x2, y2 = box
    round_rect(draw, (x1 - 4, y1 - 4, x2 + 4, y2 + 4), 8, "#21183d", "#7662bf", 1)
    pane = gradient(sky_top, sky_bottom).resize((x2 - x1, y2 - y1), Image.Resampling.BILINEAR)
    draw.bitmap((x1, y1), pane)
    draw.rectangle((x1, y1, x2, y2), outline=rgba("#a89dff", 150), width=2)
    draw.line((x1 + (x2 - x1) // 2, y1, x1 + (x2 - x1) // 2, y2), fill=rgba("#eee9ff", 120), width=2)
    draw.line((x1, y1 + (y2 - y1) // 2, x2, y1 + (y2 - y1) // 2), fill=rgba("#eee9ff", 90), width=2)
    sparkles(draw, x1 * 17 + y1, 18, (x1 + 8, y1 + 8, x2 - 8, y2 - 8))


def room_floor(draw: ImageDraw.ImageDraw, y: int, floor: str, line: str) -> None:
    rect(draw, (0, y, LOW_SIZE[0], LOW_SIZE[1]), floor)
    for x in range(-40, LOW_SIZE[0] + 50, 26):
        draw.line((x, y, x + 62, LOW_SIZE[1]), fill=rgba(line, 55), width=1)
    for yy in range(y + 28, LOW_SIZE[1], 32):
        draw.line((0, yy, LOW_SIZE[0], yy), fill=rgba(line, 45), width=1)


def plant(draw: ImageDraw.ImageDraw, x: int, y: int, scale: int = 1) -> None:
    rect(draw, (x - 10 * scale, y, x + 10 * scale, y + 18 * scale), "#8f5434", "#3d1e19")
    draw.rectangle((x - 13 * scale, y - 2 * scale, x + 13 * scale, y + 4 * scale), fill=rgba("#bd7a4a"), outline=rgba("#3d1e19"))
    draw.line((x, y, x, y - 32 * scale), fill=rgba("#54b465"), width=max(1, 3 * scale))
    draw.ellipse((x - 28 * scale, y - 33 * scale, x - 3 * scale, y - 12 * scale), fill=rgba("#62df86"), outline=rgba("#257747"))
    draw.ellipse((x + 3 * scale, y - 39 * scale, x + 29 * scale, y - 14 * scale), fill=rgba("#7df09a"), outline=rgba("#257747"))


def soft_overlay(image: Image.Image) -> None:
    glow = Image.new("RGBA", LOW_SIZE, (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse((30, 120, 240, 345), fill=rgba("#ffffff", 18))
    gd.ellipse((-60, 30, 150, 255), fill=rgba("#86dbff", 18))
    gd.ellipse((140, -40, 330, 165), fill=rgba("#ffafe4", 14))
    image.alpha_composite(glow.filter(ImageFilter.GaussianBlur(18)))


def cozy_room() -> Image.Image:
    image = gradient("#172348", "#2b1851")
    draw = ImageDraw.Draw(image)
    rect(draw, (0, 0, 270, 302), "#1b2448")
    for y in range(22, 300, 28):
        draw.line((0, y, 270, y + 6), fill=rgba("#263769", 85), width=2)
    window(draw, (34, 48, 124, 160), "#0c1237", "#426aa6")
    rect(draw, (154, 62, 231, 142), "#21143a", "#8066b4")
    for i, color in enumerate(["#ffd76a", "#81e6ff", "#d99cff", "#8af2a1"]):
        star(draw, 171 + i * 16, 82 + (i % 2) * 18, 5, rgba(color, 210))
    room_floor(draw, 302, "#36234a", "#5b3d71")
    round_rect(draw, (32, 252, 155, 335), 12, "#51386f", "#a987c9", 2)
    round_rect(draw, (43, 236, 125, 281), 11, "#6f5794", "#c8b6e8", 2)
    rect(draw, (156, 258, 230, 330), "#4c2d45", "#9b6b8f", 2)
    draw.rectangle((164, 268, 222, 276), fill=rgba("#f6cf8b"))
    plant(draw, 214, 254)
    rect(draw, (38, 351, 221, 379), "#65406b", "#d39dd3")
    for x in range(48, 215, 12):
        draw.line((x, 352, x - 14, 378), fill=rgba("#e6b7e6", 70), width=1)
    sparkles(draw, 101, 44, (12, 12, 258, 244))
    soft_overlay(image)
    add_noise(image, 11)
    return image


def moon_cafe() -> Image.Image:
    image = gradient("#22173c", "#513049")
    draw = ImageDraw.Draw(image)
    rect(draw, (0, 0, 270, 300), "#24183a")
    window(draw, (145, 40, 244, 151), "#151047", "#6d4ca8")
    round_rect(draw, (24, 62, 110, 124), 10, "#3c2745", "#c18d69", 2)
    draw.rectangle((33, 87, 101, 93), fill=rgba("#f3c071"))
    for x, y in [(47, 79), (67, 79), (87, 79)]:
        draw.ellipse((x - 6, y - 5, x + 6, y + 5), fill=rgba("#ffd47d"), outline=rgba("#775239"))
    draw.arc((38, 35, 76, 72), 75, 290, fill=rgba("#fff1b6"), width=5)
    room_floor(draw, 300, "#3b2a3f", "#6b4a5f")
    round_rect(draw, (53, 268, 220, 307), 11, "#7c4e3f", "#e0a05f", 2)
    rect(draw, (74, 306, 90, 378), "#5d352d")
    rect(draw, (184, 306, 200, 378), "#5d352d")
    for x in [88, 136, 184]:
        draw.ellipse((x - 14, 246, x + 14, 274), fill=rgba("#f4efe8"), outline=rgba("#744d42"), width=2)
        draw.rectangle((x - 11, 262, x + 11, 278), fill=rgba("#d3835d"), outline=rgba("#744d42"))
    round_rect(draw, (28, 332, 112, 384), 13, "#5d334a", "#b77c80", 2)
    round_rect(draw, (164, 329, 242, 382), 13, "#533252", "#a879be", 2)
    sparkles(draw, 202, 36, (8, 14, 260, 228))
    soft_overlay(image)
    add_noise(image, 22)
    return image


def rainy_window() -> Image.Image:
    image = gradient("#122137", "#1c3b51")
    draw = ImageDraw.Draw(image)
    rect(draw, (0, 0, 270, 304), "#15233b")
    window(draw, (32, 34, 238, 208), "#14284b", "#5582a0")
    rand = Random(33)
    for _ in range(70):
        x = rand.randrange(42, 229)
        y = rand.randrange(45, 200)
        draw.line((x, y, x - 2, y + rand.randrange(5, 12)), fill=rgba("#d9f6ff", rand.randrange(55, 120)), width=1)
    draw.arc((72, 86, 128, 142), 65, 290, fill=rgba("#fff7c9", 210), width=4)
    room_floor(draw, 304, "#223148", "#456078")
    round_rect(draw, (22, 278, 248, 322), 10, "#31415c", "#87a4be", 2)
    rect(draw, (48, 321, 62, 386), "#1f2a3c")
    rect(draw, (208, 321, 222, 386), "#1f2a3c")
    round_rect(draw, (70, 242, 205, 280), 12, "#4e617d", "#c4d6e2", 2)
    for x in range(89, 190, 22):
        draw.ellipse((x, 258, x + 14, 272), fill=rgba("#cfdde8"), outline=rgba("#4e617d"))
    plant(draw, 224, 270)
    rect(draw, (78, 339, 197, 374), "#476579", "#9cc5d9")
    for x in range(84, 193, 16):
        draw.line((x, 340, x + 9, 373), fill=rgba("#bce7f4", 70), width=1)
    sparkles(draw, 303, 28, (20, 14, 252, 255))
    soft_overlay(image)
    add_noise(image, 33)
    return image


def dream_library() -> Image.Image:
    image = gradient("#1a173c", "#38265b")
    draw = ImageDraw.Draw(image)
    rect(draw, (0, 0, 270, 303), "#1f1b42")
    for shelf_y in [72, 128, 184]:
        rect(draw, (22, shelf_y, 132, shelf_y + 10), "#7c4a36", "#351f25")
        x = 30
        colors = ["#875cff", "#ffbf63", "#62d9ff", "#ff7fac", "#8bea9a"]
        for i in range(12):
            w = 5 + (i % 3)
            h = 20 + (i * 7) % 18
            rect(draw, (x, shelf_y - h, x + w, shelf_y), colors[i % len(colors)], "#2c2138")
            x += w + 3
    window(draw, (157, 51, 239, 154), "#120d39", "#63449a")
    draw.ellipse((179, 70, 214, 105), fill=rgba("#fff0aa", 215))
    draw.ellipse((190, 64, 221, 99), fill=rgba("#2d2455"))
    room_floor(draw, 303, "#31234f", "#5e4778")
    round_rect(draw, (35, 275, 221, 328), 12, "#47356e", "#a890d9", 2)
    rect(draw, (51, 327, 66, 386), "#2e2451")
    rect(draw, (191, 327, 206, 386), "#2e2451")
    round_rect(draw, (92, 236, 184, 278), 9, "#f0d48a", "#6f4b37", 2)
    draw.line((138, 238, 138, 276), fill=rgba("#6f4b37"), width=2)
    for x in [77, 198]:
        draw.line((x, 244, x, 276), fill=rgba("#ffd97a"), width=2)
        draw.ellipse((x - 7, 232, x + 7, 248), fill=rgba("#fff0a7"), outline=rgba("#7c5a32"))
    sparkles(draw, 404, 54, (10, 12, 260, 238))
    soft_overlay(image)
    add_noise(image, 44)
    return image


def cloud(draw: ImageDraw.ImageDraw, x: int, y: int, color: str, outline: str | None = None, scale: int = 1) -> None:
    fill = rgba(color)
    stroke = rgba(outline, 150) if outline else None
    puffs = [
        (-18, 5, 28, 18),
        (-8, -8, 36, 22),
        (12, -4, 44, 19),
        (30, 2, 62, 18),
    ]
    for x1, y1, x2, y2 in puffs:
        draw.ellipse(
            (x + x1 * scale, y + y1 * scale, x + x2 * scale, y + y2 * scale),
            fill=fill,
            outline=stroke,
        )


def crystal(draw: ImageDraw.ImageDraw, x: int, y: int, size: int, color: str = "#b8f7ff") -> None:
    fill = rgba(color, 215)
    hi = rgba("#ffffff", 185)
    shadow = rgba("#7f8cd8", 150)
    points = [
        (x, y - size),
        (x + size // 2, y - size // 3),
        (x + size // 3, y + size),
        (x - size // 3, y + size),
        (x - size // 2, y - size // 3),
    ]
    draw.polygon(points, fill=fill, outline=shadow)
    draw.polygon([(x, y - size), (x + size // 2, y - size // 3), (x, y), (x - size // 2, y - size // 3)], fill=hi)
    draw.line((x, y - size + 2, x, y + size - 2), fill=rgba("#ffffff", 120), width=1)


def arched_window(
    draw: ImageDraw.ImageDraw,
    box: tuple[int, int, int, int],
    sky_top: str,
    sky_bottom: str,
    frame: str,
    trim: str,
) -> None:
    x1, y1, x2, y2 = box
    width = x2 - x1
    arch_h = width // 2
    draw.rectangle((x1 - 6, y1 + arch_h // 2, x2 + 6, y2 + 6), fill=rgba(frame), outline=rgba(trim), width=2)
    draw.pieslice((x1 - 6, y1, x2 + 6, y1 + width + 12), 180, 360, fill=rgba(frame), outline=rgba(trim), width=2)
    pane = gradient(sky_top, sky_bottom).resize((width, y2 - y1), Image.Resampling.BILINEAR)
    mask = Image.new("L", (width, y2 - y1), 0)
    md = ImageDraw.Draw(mask)
    md.rectangle((0, arch_h // 2, width, y2 - y1), fill=255)
    md.pieslice((0, 0, width, width), 180, 360, fill=255)
    temp = Image.new("RGBA", LOW_SIZE, (0, 0, 0, 0))
    temp.paste(pane, (x1, y1), mask)
    draw.bitmap((0, 0), temp)
    draw.line((x1 + width // 2, y1 + 15, x1 + width // 2, y2), fill=rgba(trim, 150), width=2)
    draw.rectangle((x1, y2 - 4, x2, y2 + 2), fill=rgba(trim, 140))


def moon_cloud_palace() -> Image.Image:
    image = gradient("#443a88", "#c1a6ff")
    draw = ImageDraw.Draw(image)
    rect(draw, (0, 0, 270, 318), "#8f7ace")
    for x in range(-40, 270, 42):
        cloud(draw, x, 8 + (x % 3) * 6, "#7367bd", "#a995dc")
    for x in [12, 214]:
        rect(draw, (x, 108, x + 28, 276), "#9c86d3", "#e8c98f", 2)
        draw.rectangle((x + 4, 116, x + 24, 124), fill=rgba("#dfbb77"))
    arched_window(draw, (88, 75, 182, 245), "#0d1745", "#496fc1", "#b39de7", "#f2d390")
    draw.ellipse((120, 113, 154, 147), fill=rgba("#fff5ba", 230))
    draw.ellipse((132, 105, 163, 137), fill=rgba("#17235e"))
    for cx, cy in [(100, 168), (146, 188)]:
        cloud(draw, cx, cy, "#8298e6", "#bcc6ff")
    for x in [68, 184]:
        draw.line((x, 76, x - 18, 238), fill=rgba("#fbf0ff", 185), width=4)
        draw.line((x + 18, 78, x + 8, 237), fill=rgba("#fbf0ff", 150), width=4)
        draw.line((x - 7, 160, x + 18, 160), fill=rgba("#f1cb78", 150), width=1)
    for x in [58, 202, 136]:
        draw.line((x, 20, x, 86), fill=rgba("#e7c07f", 155), width=1)
        star(draw, x, 91, 6, rgba("#fff0a8", 220))
    room_floor(draw, 318, "#bba5db", "#e9cfa4")
    draw.ellipse((28, 297, 242, 398), fill=rgba("#ffe9cf"), outline=rgba("#f4cf88"), width=2)
    draw.ellipse((43, 307, 227, 386), fill=rgba("#f8e7dc"), outline=rgba("#f8dca1"), width=1)
    cloud(draw, 16, 398, "#9f91d8", "#d9c7ff")
    cloud(draw, 188, 401, "#9b8bd5", "#d9c7ff")
    for x in [36, 231]:
        round_rect(draw, (x - 13, 380, x + 18, 425), 8, "#8b6cc8", "#f0ca88", 2)
        draw.ellipse((x - 8, 364, x + 13, 385), fill=rgba("#fff0b5"), outline=rgba("#d4a966"))
    sparkles(draw, 505, 70, (10, 8, 260, 280))
    soft_overlay(image)
    add_noise(image, 55, 16)
    return image


def crystal_garden_hall() -> Image.Image:
    image = gradient("#f8eadc", "#d2eadf")
    draw = ImageDraw.Draw(image)
    rect(draw, (0, 0, 270, 324), "#efe1d3")
    draw.pieslice((18, 18, 252, 252), 180, 360, fill=rgba("#dceee5"), outline=rgba("#b69b86"), width=2)
    round_rect(draw, (58, 70, 212, 246), 18, "#cde9dd", "#d5b894", 2)
    draw.rectangle((63, 104, 207, 243), fill=rgba("#cfeee2"))
    for x in [40, 86, 136, 186, 230]:
        draw.line((x, 0, x, 54), fill=rgba("#a1c2b8", 130), width=1)
        crystal(draw, x, 61, 6, "#c6f5ff")
    for x in [24, 217]:
        round_rect(draw, (x, 118, x + 30, 198), 6, "#e9ddcc", "#c1a58d", 1)
        crystal(draw, x + 15, 138, 7, "#d5f7ff")
    for x in [36, 222]:
        plant(draw, x, 250)
        crystal(draw, x + 18, 242, 8, "#d9f8ff")
        crystal(draw, x - 18, 250, 6, "#d9d1ff")
    room_floor(draw, 324, "#eadccc", "#cbb5a8")
    draw.ellipse((31, 291, 239, 402), fill=rgba("#fff5df"), outline=rgba("#bdccb9"), width=2)
    draw.ellipse((68, 316, 202, 378), outline=rgba("#b3d8cc", 135), width=1)
    draw.polygon([(135, 331), (149, 354), (135, 378), (121, 354)], outline=rgba("#a6d5cd", 170), fill=rgba("#f7f6e8", 60))
    for x, y in [(20, 404), (245, 405), (46, 432), (216, 438)]:
        crystal(draw, x, y, 12, "#bff4ff")
        plant(draw, x + (10 if x < 135 else -10), y + 8)
    sparkles(draw, 606, 42, (12, 12, 258, 275))
    soft_overlay(image)
    add_noise(image, 66, 12)
    return image


def star_observatory() -> Image.Image:
    image = gradient("#101339", "#3b3264")
    draw = ImageDraw.Draw(image)
    draw.pieslice((-34, -44, 304, 148), 180, 360, fill=rgba("#111844"), outline=rgba("#c2905c"), width=2)
    sparkles(draw, 707, 84, (4, 0, 266, 122))
    rect(draw, (0, 100, 270, 322), "#6d5c82", "#ad845c", 2)
    arched_window(draw, (81, 78, 191, 267), "#071031", "#184e9d", "#8c7390", "#d7a462")
    draw.arc((108, 127, 139, 158), 80, 290, fill=rgba("#ffeaa0", 230), width=4)
    draw.ellipse((166, 162, 189, 172), fill=rgba("#e5a867"), outline=rgba("#754b40"))
    for x, y, r in [(132, 165, 3), (158, 137, 2), (118, 194, 2)]:
        draw.ellipse((x - r, y - r, x + r, y + r), fill=rgba("#9f82ff", 180))
    draw.line((135, 16, 135, 86), fill=rgba("#c8965b"), width=2)
    star(draw, 135, 52, 12, rgba("#fff2bc", 230))
    rect(draw, (11, 155, 61, 279), "#342a4b", "#c18c5a", 2)
    for y in [178, 212, 247]:
        rect(draw, (8, y, 72, y + 8), "#5b3f58", "#c08e60", 1)
        for x in range(15, 64, 9):
            rect(draw, (x, y - 24, x + 5, y), "#8163b5", "#2b2140")
    rect(draw, (214, 234, 239, 295), "#433452", "#bd8f63", 1)
    draw.line((226, 230, 247, 304), fill=rgba("#bd8f63"), width=2)
    draw.line((226, 230, 207, 304), fill=rgba("#bd8f63"), width=2)
    draw.polygon([(202, 208), (246, 190), (252, 206), (208, 225)], fill=rgba("#e7dff4"), outline=rgba("#5b4675"))
    draw.ellipse((197, 202, 215, 220), fill=rgba("#2e2946"), outline=rgba("#c49763"))
    room_floor(draw, 322, "#42395f", "#725f86")
    draw.ellipse((34, 301, 236, 399), fill=rgba("#e6cda8"), outline=rgba("#ba8654"), width=2)
    draw.ellipse((69, 319, 201, 377), outline=rgba("#b88b66", 125), width=1)
    star(draw, 135, 349, 8, rgba("#ffe4a1", 130))
    sparkles(draw, 808, 42, (16, 20, 254, 316))
    soft_overlay(image)
    add_noise(image, 77, 15)
    return image


def save(image: Image.Image, filename: str) -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    image.resize(OUT_SIZE, Image.Resampling.NEAREST).save(OUT_DIR / filename)


def main() -> None:
    # Lifestyle backgrounds are curated final artwork.
    # Keep them out of this generator so reruns do not overwrite curated assets.
    pass


if __name__ == "__main__":
    main()

from __future__ import annotations

import math
from pathlib import Path
from random import Random

from PIL import Image, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
ITEM_DIR = ROOT / "public" / "figma-assets" / "accessory_items"
EFFECT_DIR = ROOT / "public" / "figma-assets" / "accessory_effects"
CANVAS = 128
OUT = 256


def color(hex_value: str, alpha: int = 255) -> tuple[int, int, int, int]:
    hex_value = hex_value.lstrip("#")
    return (
        int(hex_value[0:2], 16),
        int(hex_value[2:4], 16),
        int(hex_value[4:6], 16),
        alpha,
    )


def save_pixel(image: Image.Image, directory: Path, name: str) -> None:
    directory.mkdir(parents=True, exist_ok=True)
    image.resize((OUT, OUT), Image.Resampling.NEAREST).save(directory / f"{name}.png")


def item_canvas() -> tuple[Image.Image, ImageDraw.ImageDraw]:
    image = Image.new("RGBA", (CANVAS, CANVAS), (0, 0, 0, 0))
    return image, ImageDraw.Draw(image)


def shadow(draw: ImageDraw.ImageDraw, bbox: tuple[int, int, int, int], alpha: int = 90) -> None:
    draw.ellipse(bbox, fill=color("#050817", alpha))


def px_star(draw: ImageDraw.ImageDraw, x: int, y: int, r: int, fill: tuple[int, int, int, int]) -> None:
    draw.polygon(
        [
            (x, y - r),
            (x + max(1, r // 3), y - max(1, r // 3)),
            (x + r, y),
            (x + max(1, r // 3), y + max(1, r // 3)),
            (x, y + r),
            (x - max(1, r // 3), y + max(1, r // 3)),
            (x - r, y),
            (x - max(1, r // 3), y - max(1, r // 3)),
        ],
        fill=fill,
    )


def outline_rect(draw: ImageDraw.ImageDraw, bbox: tuple[int, int, int, int], fill: str, outline: str) -> None:
    draw.rounded_rectangle(bbox, radius=4, fill=color(outline))
    inset = (bbox[0] + 2, bbox[1] + 2, bbox[2] - 2, bbox[3] - 2)
    draw.rounded_rectangle(inset, radius=3, fill=color(fill))


def starlight_cushion() -> None:
    image, draw = item_canvas()
    shadow(draw, (28, 84, 100, 106))
    draw.ellipse((29, 67, 99, 98), fill=color("#2d2b78"), outline=color("#0c0e2d"), width=3)
    draw.ellipse((36, 62, 92, 87), fill=color("#6757d8"), outline=color("#211a67"), width=2)
    draw.rectangle((38, 82, 90, 96), fill=color("#232059"))
    draw.arc((34, 60, 94, 91), 194, 342, fill=color("#b9d8ff"), width=2)
    for x, y, r in [(47, 71, 5), (76, 68, 4), (89, 80, 3)]:
        px_star(draw, x, y, r, color("#ffe879"))
    save_pixel(image, ITEM_DIR, "crown")


def moon_stand() -> None:
    image, draw = item_canvas()
    shadow(draw, (38, 98, 92, 111))
    draw.line((62, 63, 62, 101), fill=color("#7b6db8"), width=5)
    draw.rectangle((50, 100, 75, 107), fill=color("#3b3473"))
    draw.rectangle((54, 96, 71, 101), fill=color("#9088d8"))
    draw.ellipse((43, 26, 80, 63), fill=color("#fff1b8"), outline=color("#916c3a"), width=2)
    draw.ellipse((54, 22, 88, 57), fill=(0, 0, 0, 0))
    draw.arc((42, 26, 81, 64), 72, 291, fill=color("#fff7d4"), width=3)
    px_star(draw, 85, 38, 4, color("#b7f7ff"))
    px_star(draw, 36, 61, 3, color("#ffd8ff"))
    save_pixel(image, ITEM_DIR, "witch-hat")


def mini_satellite() -> None:
    image, draw = item_canvas()
    shadow(draw, (33, 87, 97, 102), 70)
    draw.line((43, 60, 85, 80), fill=color("#9edfff"), width=3)
    draw.line((40, 79, 86, 58), fill=color("#9edfff"), width=3)
    draw.rectangle((54, 54, 75, 76), fill=color("#dceaff"), outline=color("#40547d"), width=2)
    draw.rectangle((27, 51, 49, 68), fill=color("#3d78ce"), outline=color("#172b54"), width=2)
    draw.rectangle((80, 62, 102, 79), fill=color("#3d78ce"), outline=color("#172b54"), width=2)
    draw.rectangle((58, 58, 71, 70), fill=color("#2a3152"))
    px_star(draw, 75, 48, 4, color("#fff0a0"))
    save_pixel(image, ITEM_DIR, "astronaut")


def space_planter() -> None:
    image, draw = item_canvas()
    shadow(draw, (36, 92, 95, 108))
    outline_rect(draw, (42, 72, 88, 101), "#a86735", "#4c2515")
    draw.rectangle((47, 74, 83, 80), fill=color("#d18b4b"))
    draw.arc((50, 80, 80, 97), 15, 165, fill=color("#3b2415"), width=2)
    draw.line((64, 72, 64, 46), fill=color("#4b9a36"), width=4)
    draw.ellipse((42, 40, 64, 58), fill=color("#7ee35d"), outline=color("#2c7b2b"), width=2)
    draw.ellipse((64, 37, 88, 59), fill=color("#8cff62"), outline=color("#2c7b2b"), width=2)
    px_star(draw, 93, 64, 4, color("#b9f7ff"))
    save_pixel(image, ITEM_DIR, "sprout")


def constellation_balloon() -> None:
    image, draw = item_canvas()
    shadow(draw, (42, 96, 88, 107), 55)
    draw.line((60, 72, 55, 101), fill=color("#7f83b9"), width=2)
    draw.line((73, 70, 78, 101), fill=color("#7f83b9"), width=2)
    for x, y, r, c in [(57, 52, 15, "#7c62ff"), (76, 45, 14, "#46d6ff")]:
        draw.ellipse((x - r, y - r, x + r, y + r), fill=color(c), outline=color("#14173d"), width=2)
        px_star(draw, x - 3, y - 4, 4, color("#ffffff", 210))
    draw.line((56, 52, 76, 45), fill=color("#ffffff", 130), width=1)
    draw.rectangle((54, 99, 81, 105), fill=color("#36335d"))
    save_pixel(image, ITEM_DIR, "cat-ears")


def record_flag() -> None:
    image, draw = item_canvas()
    shadow(draw, (42, 96, 93, 108), 70)
    draw.line((57, 44, 57, 101), fill=color("#b88755"), width=4)
    draw.polygon([(59, 45), (95, 54), (59, 66)], fill=color("#ffce58"), outline=color("#7f4a17"))
    draw.polygon([(63, 50), (85, 55), (63, 61)], fill=color("#ff855b"))
    draw.rectangle((48, 99, 72, 105), fill=color("#5d3b24"))
    px_star(draw, 93, 75, 5, color("#fff0a0"))
    save_pixel(image, ITEM_DIR, "star-band")


def soft_cloud() -> None:
    image, draw = item_canvas()
    shadow(draw, (25, 89, 104, 105), 60)
    draw.ellipse((34, 67, 64, 96), fill=color("#defaff"), outline=color("#6ecde8"), width=2)
    draw.ellipse((56, 56, 91, 95), fill=color("#ffffff"), outline=color("#6ecde8"), width=2)
    draw.ellipse((76, 70, 106, 98), fill=color("#c8f5ff"), outline=color("#6ecde8"), width=2)
    draw.rectangle((42, 82, 96, 98), fill=color("#eafcff"))
    draw.arc((42, 61, 100, 95), 199, 330, fill=color("#ffffff", 210), width=2)
    px_star(draw, 30, 61, 4, color("#ffe7ff"))
    save_pixel(image, ITEM_DIR, "bow-hat")


def sleepy_moon_lantern() -> None:
    image, draw = item_canvas()
    shadow(draw, (39, 97, 90, 108), 55)
    draw.line((61, 36, 61, 96), fill=color("#7269a7"), width=2)
    draw.ellipse((47, 61, 78, 93), fill=color("#6a63e8"), outline=color("#25235b"), width=2)
    draw.arc((47, 61, 78, 93), 0, 180, fill=color("#d2f4ff"), width=3)
    draw.ellipse((53, 48, 82, 77), fill=color("#fff1b8"), outline=color("#9b7442"), width=2)
    draw.ellipse((62, 44, 88, 72), fill=(0, 0, 0, 0))
    px_star(draw, 88, 58, 4, color("#d8f6ff"))
    save_pixel(image, ITEM_DIR, "night-cap")


def mini_rocket() -> None:
    image, draw = item_canvas()
    shadow(draw, (34, 96, 94, 108), 65)
    draw.polygon([(51, 88), (82, 41), (92, 97)], fill=color("#f4f8ff"), outline=color("#34466f"))
    draw.polygon([(82, 41), (91, 68), (72, 63)], fill=color("#ff5b65"), outline=color("#7e2530"))
    draw.ellipse((66, 62, 82, 78), fill=color("#5ed8ff"), outline=color("#315e99"), width=2)
    draw.polygon([(51, 88), (39, 103), (60, 99)], fill=color("#5796ff"), outline=color("#263e83"))
    draw.polygon([(92, 97), (104, 112), (84, 105)], fill=color("#5796ff"), outline=color("#263e83"))
    draw.polygon([(63, 100), (73, 119), (82, 101)], fill=color("#ffce4a"))
    draw.polygon([(67, 101), (73, 113), (78, 101)], fill=color("#ff6d4a"))
    save_pixel(image, ITEM_DIR, "space-cap")


def star_sticker() -> None:
    image, draw = item_canvas()
    for x, y, r in [(45, 51, 10), (82, 43, 7), (76, 80, 12), (105, 68, 5)]:
        px_star(draw, x, y, r, color("#ffd958"))
        px_star(draw, x, y, max(2, r // 2), color("#fff3b0"))
    save_pixel(image, ITEM_DIR, "sunglasses")


def heart_sticker() -> None:
    image, draw = item_canvas()
    for x, y, s in [(48, 58, 10), (82, 45, 13), (92, 82, 8)]:
        draw.ellipse((x - s, y - s, x, y + s // 2), fill=color("#ff7ebd"), outline=color("#803a68"))
        draw.ellipse((x, y - s, x + s, y + s // 2), fill=color("#ff7ebd"), outline=color("#803a68"))
        draw.polygon([(x - s, y), (x + s, y), (x, y + s + 8)], fill=color("#ff7ebd"), outline=color("#803a68"))
        px_star(draw, x - 2, y - 4, 3, color("#ffd9ef", 230))
    save_pixel(image, ITEM_DIR, "star-glasses")


def cloud_sticker() -> None:
    image, draw = item_canvas()
    for ox, oy in [(37, 55), (72, 74)]:
        draw.ellipse((ox, oy, ox + 24, oy + 18), fill=color("#d9fbff"), outline=color("#6ecde8"))
        draw.ellipse((ox + 14, oy - 7, ox + 42, oy + 20), fill=color("#ffffff"), outline=color("#6ecde8"))
        draw.rectangle((ox + 8, oy + 10, ox + 36, oy + 20), fill=color("#eafcff"))
    px_star(draw, 93, 51, 4, color("#fff1b8"))
    save_pixel(image, ITEM_DIR, "face-mask")


def crystal_sticker() -> None:
    image, draw = item_canvas()
    for x, y, s, fill in [(47, 62, 15, "#73e6ff"), (85, 50, 12, "#b78cff"), (83, 84, 9, "#f7dbff")]:
        draw.polygon([(x, y - s), (x + s, y), (x, y + s), (x - s, y)], fill=color(fill), outline=color("#34466f"))
        draw.line((x, y - s + 3, x, y + s - 3), fill=color("#ffffff", 150))
        draw.line((x - s + 3, y, x + s - 3, y), fill=color("#ffffff", 100))
    save_pixel(image, ITEM_DIR, "crystal-glasses")


def effect_canvas() -> tuple[Image.Image, ImageDraw.ImageDraw]:
    image = Image.new("RGBA", (384, 384), (0, 0, 0, 0))
    return image, ImageDraw.Draw(image)


def effect_star(draw: ImageDraw.ImageDraw, x: float, y: float, r: float, fill: tuple[int, int, int, int]) -> None:
    draw.polygon(
        [
            (x, y - r),
            (x + r * 0.28, y - r * 0.28),
            (x + r, y),
            (x + r * 0.28, y + r * 0.28),
            (x, y + r),
            (x - r * 0.28, y + r * 0.28),
            (x - r, y),
            (x - r * 0.28, y - r * 0.28),
        ],
        fill=fill,
    )


def save_effect(image: Image.Image, name: str) -> None:
    EFFECT_DIR.mkdir(parents=True, exist_ok=True)
    image.resize((768, 768), Image.Resampling.NEAREST).save(EFFECT_DIR / f"{name}.png")


def orbit_effect(name: str, seed: int, palette: list[str], hearts: bool = False, meteors: bool = False) -> None:
    rnd = Random(seed)
    image, draw = effect_canvas()
    glow = Image.new("RGBA", image.size, (0, 0, 0, 0))
    gdraw = ImageDraw.Draw(glow)
    for i, value in enumerate(palette):
        gdraw.ellipse((95 - i * 8, 115 - i * 5, 289 + i * 8, 265 + i * 5), fill=color(value, 26))
    image.alpha_composite(glow.filter(ImageFilter.GaussianBlur(20)))
    for offset, value in [(-8, palette[0]), (5, palette[min(1, len(palette) - 1)]), (18, palette[-1])]:
        draw.arc((67, 137 + offset, 317, 237 + offset), 7, 173, fill=color(value, 210), width=3)
        draw.arc((67, 137 + offset, 317, 237 + offset), 188, 352, fill=color(value, 120), width=2)
    for _ in range(80):
        angle = rnd.random() * math.tau
        radius = rnd.uniform(76, 160)
        x = 192 + math.cos(angle) * radius * rnd.uniform(0.92, 1.12)
        y = 192 + math.sin(angle) * radius * rnd.uniform(0.44, 0.72)
        fill = color(rnd.choice(palette), rnd.randint(110, 230))
        if rnd.random() < 0.2:
            effect_star(draw, x, y, rnd.uniform(3, 7), fill)
        else:
            draw.rectangle((x, y, x + 2, y + 2), fill=fill)
    if hearts:
        for x, y in [(287, 154), (105, 230), (266, 237)]:
            draw.ellipse((x - 5, y - 6, x + 1, y + 2), fill=color("#ff7ac0", 220))
            draw.ellipse((x, y - 6, x + 6, y + 2), fill=color("#ff7ac0", 220))
            draw.polygon([(x - 5, y), (x + 6, y), (x, y + 9)], fill=color("#ff7ac0", 220))
    if meteors:
        for x, y in [(91, 229), (288, 145), (265, 244)]:
            draw.line((x - 24, y + 9, x + 19, y - 8), fill=color("#ffcc5c", 220), width=3)
            effect_star(draw, x + 22, y - 9, 6, color("#fff0a8", 240))
    save_effect(image, name)


def generate_all() -> None:
    for fn in [
        starlight_cushion,
        moon_stand,
        mini_satellite,
        space_planter,
        constellation_balloon,
        record_flag,
        soft_cloud,
        sleepy_moon_lantern,
        mini_rocket,
        star_sticker,
        heart_sticker,
        cloud_sticker,
        crystal_sticker,
    ]:
        fn()

    orbit_effect("aqua-nebula-effect", 11, ["#5ee9ff", "#9ffcff", "#ffffff"])
    orbit_effect("gold-star-effect", 22, ["#ffe46b", "#ffb443", "#fff1b8"])
    orbit_effect("violet-galaxy-effect", 33, ["#8f73ff", "#d27cff", "#66ddff"])
    orbit_effect("aurora-leaf-effect", 44, ["#6dff9c", "#75f7ff", "#eaffb5"])
    orbit_effect("meteor-spark-effect", 55, ["#ffb340", "#ff6f4a", "#fff09a"], meteors=True)
    orbit_effect("heart-dream-effect", 66, ["#ff87d1", "#ffc4e8", "#b98cff"], hearts=True)


if __name__ == "__main__":
    generate_all()

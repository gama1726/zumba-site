from PIL import Image
from pathlib import Path

src = Path(r"C:\Users\User\.cursor\projects\c-Users-User-Desktop-Development-zumba-site\assets")
dest = Path(r"C:\Users\User\Desktop\Development\zumba-site\public\results")
dest.mkdir(parents=True, exist_ok=True)

ids = {
    "back-1": "image-b40ef26a-ed76-435e-be5f-d99c1e4fd534.png",
    "back-2": "image-939bfa05-5a93-471e-ab7c-790f8dc2fce1.png",
    "back-90": "image-a95d22ba-b2e5-4957-89c1-b1377a9d2379.png",
    "front-weight": "image-20c5ec4e-cd14-493a-b8f2-2849f05198ea.png",
    "back-weight": "image-eb3bcd3f-71a3-4b57-bcce-f2b0b0763b3b.png",
    "side-1": "image-b222e5c9-2235-49f9-8812-f440f3944251.png",
    "side-2": "image-61ab3a01-034b-4a70-9ce7-b578785e0eaf.png",
    "side-3": "image-de63277f-0dc5-4aff-99ae-231f19a1224b.png",
    "side-kg": "image-e3620ce4-13b0-43b8-b6de-e0469291c858.png",
    "dress": "image-0f2311c6-00b7-4d7d-981c-072fc443e0f0.png",
}

# left, top, right, bottom as fractions of width/height
crops = {
    "back-1": (0.02, 0.12, 0.98, 0.90),  # cut phone UI
    "back-2": (0.0, 0.0, 1.0, 1.0),
    "back-90": (0.0, 0.0, 1.0, 1.0),
    "front-weight": (0.01, 0.01, 0.99, 0.97),
    "back-weight": (0.0, 0.04, 1.0, 0.99),
    "side-1": (0.0, 0.0, 1.0, 0.97),
    "side-2": (0.0, 0.0, 1.0, 0.95),
    "side-3": (0.0, 0.0, 1.0, 0.95),
    "side-kg": (0.0, 0.02, 1.0, 0.93),
    "dress": (0.0, 0.0, 1.0, 1.0),
}


def find(name: str) -> Path:
    matches = list(src.glob(f"*{name}"))
    if not matches:
        matches = list(src.rglob(f"*{name}"))
    if not matches:
        raise FileNotFoundError(name)
    return matches[0]


for key, filename in ids.items():
    path = find(filename)
    im = Image.open(path).convert("RGB")
    w, h = im.size
    l, t, r, b = crops[key]
    box = (int(w * l), int(h * t), int(w * r), int(h * b))
    cropped = im.crop(box)
    # Limit long edge for web
    max_side = 1200
    cw, ch = cropped.size
    if max(cw, ch) > max_side:
        scale = max_side / max(cw, ch)
        cropped = cropped.resize((int(cw * scale), int(ch * scale)), Image.Resampling.LANCZOS)
    out = dest / f"{key}.jpg"
    cropped.save(out, "JPEG", quality=88, optimize=True)
    print(f"{key}: {im.size} -> {cropped.size} -> {out.name} ({out.stat().st_size // 1024}kb)")

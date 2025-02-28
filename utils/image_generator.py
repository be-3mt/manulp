from PIL import Image, ImageDraw, ImageFont
import random
from typing import Tuple

def create_gradient_background(width: int, height: int, color1: Tuple[int, int, int], color2: Tuple[int, int, int]) -> Image.Image:
    """グラデーション背景を生成"""
    image = Image.new('RGB', (width, height))
    draw = ImageDraw.Draw(image)
    for y in range(height):
        r = int(color1[0] + (color2[0] - color1[0]) * y / height)
        g = int(color1[1] + (color2[1] - color1[1]) * y / height)
        b = int(color1[2] + (color2[2] - color1[2]) * y / height)
        draw.line([(0, y), (width, y)], fill=(r, g, b))
    return image

def generate_metal_processing_image() -> Image.Image:
    """金属加工業の現場風景を生成"""
    img = create_gradient_background(800, 600, (50, 50, 60), (30, 30, 40))
    draw = ImageDraw.Draw(img)
    
    # 工作機械のシルエット
    draw.rectangle((100, 200, 700, 450), outline=(200, 200, 200), width=3)
    draw.rectangle((150, 150, 250, 200), fill=(180, 180, 180))  # 制御パネル
    
    # 切削工具や金属部品
    for i in range(5):
        x = random.randint(300, 600)
        y = random.randint(100, 150)
        draw.rectangle((x, y, x+40, y+20), fill=(160, 160, 170))
    
    return img

def generate_machinery_image() -> Image.Image:
    """機械製造業の現場風景を生成"""
    img = create_gradient_background(800, 600, (45, 45, 55), (25, 25, 35))
    draw = ImageDraw.Draw(img)
    
    # 組立ライン
    draw.line([(100, 300), (700, 300)], fill=(200, 200, 200), width=5)
    
    # 機械設備
    for i in range(4):
        x = 150 + i * 150
        draw.rectangle((x, 200, x+100, 400), outline=(180, 180, 180), width=2)
        draw.rectangle((x+20, 250, x+80, 350), fill=(160, 160, 170))
    
    return img

def generate_electronics_image() -> Image.Image:
    """電気・電子機器製造業の現場風景を生成"""
    img = create_gradient_background(800, 600, (40, 40, 50), (20, 20, 30))
    draw = ImageDraw.Draw(img)
    
    # 基板パターン
    for i in range(20):
        x = random.randint(100, 700)
        y = random.randint(100, 500)
        draw.line([(x, y), (x+random.randint(20, 50), y)], fill=(0, 255, 0), width=1)
        draw.line([(x, y), (x, y+random.randint(20, 50))], fill=(0, 255, 0), width=1)
    
    # 電子部品
    for i in range(10):
        x = random.randint(200, 600)
        y = random.randint(200, 400)
        draw.rectangle((x, y, x+10, y+10), fill=(100, 100, 100))
    
    return img

def generate_chemical_image() -> Image.Image:
    """化学工業の現場風景を生成"""
    img = create_gradient_background(800, 600, (35, 35, 45), (15, 15, 25))
    draw = ImageDraw.Draw(img)
    
    # タンクと配管
    for i in range(3):
        x = 200 + i * 200
        draw.rectangle((x, 200, x+100, 400), outline=(150, 150, 150), width=3)
        draw.arc([x-50, 150, x+150, 250], 0, 180, fill=(150, 150, 150), width=3)
    
    # パイプライン
    draw.line([(100, 300), (700, 300)], fill=(170, 170, 170), width=10)
    
    return img

def generate_textile_image() -> Image.Image:
    """繊維・衣服製造業の現場風景を生成"""
    img = create_gradient_background(800, 600, (55, 55, 65), (35, 35, 45))
    draw = ImageDraw.Draw(img)
    
    # 織機のシルエット
    for i in range(4):
        x = 150 + i * 160
        draw.rectangle((x, 200, x+120, 400), outline=(180, 180, 180), width=2)
        # 糸巻き
        for j in range(3):
            y = 250 + j * 50
            draw.ellipse((x+30, y, x+90, y+20), outline=(200, 200, 200), width=2)
    
    return img

def generate_wood_paper_image() -> Image.Image:
    """木材・紙パルプ・印刷業の現場風景を生成"""
    img = create_gradient_background(800, 600, (60, 50, 40), (40, 30, 20))
    draw = ImageDraw.Draw(img)
    
    # 製材機械
    draw.rectangle((100, 200, 300, 400), outline=(150, 120, 90), width=3)
    
    # 木材
    for i in range(5):
        y = 150 + i * 50
        draw.rectangle((400, y, 700, y+30), fill=(139, 69, 19))
    
    return img

def generate_precision_medical_image() -> Image.Image:
    """精密機器・医療機器製造業の現場風景を生成"""
    img = create_gradient_background(800, 600, (40, 40, 50), (20, 20, 30))
    draw = ImageDraw.Draw(img)
    
    # クリーンルーム風の環境
    draw.rectangle((100, 100, 700, 500), outline=(200, 200, 220), width=3)
    
    # 精密機器
    for i in range(3):
        x = 200 + i * 200
        draw.rectangle((x, 200, x+150, 300), outline=(180, 180, 200), width=2)
        # 計測器のディスプレイ
        draw.rectangle((x+20, 220, x+130, 260), fill=(0, 150, 150))
    
    return img

def generate_all_images():
    """全ての製造業分野の画像を生成して保存"""
    generators = {
        'metal_processing': generate_metal_processing_image,
        'machinery': generate_machinery_image,
        'electronics': generate_electronics_image,
        'chemical': generate_chemical_image,
        'textile': generate_textile_image,
        'wood_paper': generate_wood_paper_image,
        'precision_medical': generate_precision_medical_image
    }
    
    for name, generator in generators.items():
        img = generator()
        img.save(f'client/public/images/manufacturing/{name}.png')

if __name__ == '__main__':
    # 保存用ディレクトリの作成
    import os
    os.makedirs('client/public/images/manufacturing', exist_ok=True)
    generate_all_images()

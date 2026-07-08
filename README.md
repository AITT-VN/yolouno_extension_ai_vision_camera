# AI VISION CAMERA — Extension cho Yolo UNO

Thư viện mở rộng (extension) cho **Yolo UNO** trên nền tảng lập trình kéo–thả
[app.ohstem.vn](https://app.ohstem.vn). Extension đọc kết quả **nhận dạng** từ
module **AI Vision Camera** qua UART và cung cấp các khối Blockly để dùng ngay
trong chương trình: nhận dạng **khuôn mặt**, **màu sắc**, **lớp (Stream video / Teachable Machine)**
và **mã QR**.

> Lưu ý: Hai chức năng *Object tracking* và *Line tracking* **không** nằm trong
> extension này — chúng thuộc mục "AI CAMERA" của thư viện **ROBOTICS**.

## Kết nối phần cứng

Camera giao tiếp với Yolo UNO qua **UART**, tốc độ cố định **115200**.

| Camera | Yolo UNO |
|--------|----------|
| TX     | chân RX (mặc định **D3**) |
| RX     | chân TX (mặc định **D4**) |
| VCC    | 5V / 3V3 |
| GND    | GND |

Chọn đúng chân RX/TX trong khối *khởi tạo* cho khớp cổng cắm camera.

## Giao thức UART

Camera gửi từng dòng dạng `NHÃN:dữ_liệu` (kết thúc bằng xuống dòng):

| Dòng gửi          | Ý nghĩa |
|-------------------|---------|
| `FACE:<id>`       | `id ≥ 1` = người đã lưu · `0` = mặt lạ · `-1` = không có mặt |
| `COLOR:<TÊN>`     | Màu ở tâm khung (`RED`, `GREEN`, `BLUE`, …) |
| `CLASS:<tên>,<%>` | Lớp nhận dạng + độ tin cậy, ví dụ `CLASS:meo,87` |
| `QR:<nội dung>`   | Nội dung mã QR đọc được |

Nếu không nhận dữ liệu mới trong **200 ms**, kết quả được coi là **mất** (trả về
rỗng / False) — tránh giữ kết quả cũ khi mất vật hoặc mất kết nối.

## Danh sách khối lệnh

### Kết nối
- **khởi tạo ai vision camera chân RX \_ TX \_** — mở UART với camera.

### Nhận dạng khuôn mặt
- **phát hiện khuôn mặt đã lưu ID \_** — đúng khi nhận ra đúng ID đã lưu (chọn 1–5).
- **phát hiện khuôn mặt lạ (chưa lưu)** — đúng khi thấy mặt nhưng chưa lưu (ID = 0).

### Nhận dạng màu sắc
- **màu sắc nhận dạng được là** — trả về tên màu ở tâm khung (chuỗi).
- **phát hiện ra màu \_** — đúng khi màu ở tâm khung khớp màu đã chọn.

### Stream video / AI
- **nhận dạng được là** — tên lớp nhận dạng (chuỗi).
- **độ tin cậy nhận dạng (%)** — độ tin cậy 0–100.
- **nhận dạng là \_ và độ tin cậy ≥ \_ %** — đúng khi khớp tên lớp **và** đạt ngưỡng.

### Mã QR
- **mã QR đọc được** — nội dung chuỗi của mã QR gần nhất.

## Ví dụ mẫu

Các đoạn mã dưới đây tương ứng với chương trình khối được sinh ra dạng MicroPython.

### 1. Mở cửa khi nhận ra chủ nhân (khuôn mặt ID 1)

```python
from ai_vision_camera import *

camera_ai_init(D3_PIN, D4_PIN)   # RX = D3, TX = D4

while True:
    if camera_ai_face_known(1):          # đúng chủ nhân (ID 1)
        print("Xin chào! Mở cửa.")
    elif camera_ai_face_unknown():       # có người lạ
        print("Người lạ!")
    time.sleep_ms(100)
```

### 2. Robot dò theo màu

```python
from ai_vision_camera import *

camera_ai_init(D3_PIN, D4_PIN)

while True:
    if camera_ai_is_color('RED'):
        print("Thấy màu đỏ -> dừng")
    else:
        print("Màu hiện tại:", camera_ai_color_name())
    time.sleep_ms(100)
```

### 3. Phân loại vật bằng Stream video (Teachable Machine)

```python
from ai_vision_camera import *

camera_ai_init(D3_PIN, D4_PIN)

while True:
    if camera_ai_is_class('meo', 80):    # là "meo" và tin cậy ≥ 80%
        print("Đây là con mèo!")
    print(camera_ai_class(), camera_ai_class_conf(), "%")
    time.sleep_ms(100)
```

### 4. Đọc mã QR

```python
from ai_vision_camera import *

camera_ai_init(D3_PIN, D4_PIN)

while True:
    data = camera_ai_qr()
    if data:
        print("QR:", data)
    time.sleep_ms(100)
```

## Cấu trúc thư mục

| File                  | Vai trò |
|-----------------------|---------|
| `config.json`         | Khai báo extension (libs, blocks, toolbox, ngôn ngữ) |
| `definition.js`       | Định nghĩa khối Blockly + bộ sinh mã Python |
| `toolbox.xml`         | Bố cục khối trong toolbox |
| `en.js` / `vi.js`     | Chuỗi hiển thị tiếng Anh / tiếng Việt |
| `ai_vision_camera.py` | Thư viện MicroPython chạy trên Yolo UNO |
| `images/`             | Icon SVG của các khối |
| `poster.png`          | Ảnh đại diện extension |

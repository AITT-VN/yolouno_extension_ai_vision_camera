// Tiếng Việt — AI Camera V2 (Yolo UNO)

// ==== CATEGORY & GROUPS ====
Blockly.Msg.AICAMERA_CAT = "AI CAMERA V2";
Blockly.Msg.AICAMERA_GRP_CONNECT = "Kết nối";
Blockly.Msg.AICAMERA_GRP_FACE = "Nhận dạng khuôn mặt";
Blockly.Msg.AICAMERA_GRP_COLOR = "Nhận dạng màu sắc";
Blockly.Msg.AICAMERA_GRP_STREAM = "Stream video";
Blockly.Msg.AICAMERA_GRP_QR = "Mã QR";

// ==== BLOCKS ====
Blockly.Msg.AICAMERA_INIT = "%1 khởi tạo ai vision camera chân RX %2 TX %3";
Blockly.Msg.AICAMERA_FACE_KNOWN = "%1 phát hiện khuôn mặt đã lưu ID %2";
Blockly.Msg.AICAMERA_FACE_UNKNOWN = "%1 phát hiện khuôn mặt lạ (chưa lưu)";
Blockly.Msg.AICAMERA_COLOR_NAME = "%1 màu sắc nhận dạng được là";
Blockly.Msg.AICAMERA_IS_COLOR = "%1 phát hiện ra màu %2";
Blockly.Msg.AICAMERA_CLASS = "%1 nhận dạng được là";
Blockly.Msg.AICAMERA_CLASS_CONF = "%1 độ tin cậy nhận dạng (%)";
Blockly.Msg.AICAMERA_IS_CLASS = "%1 nhận dạng là %2 và độ tin cậy ≥ %3 %";
Blockly.Msg.AICAMERA_QR = "%1 mã QR đọc được";

// ==== TOOLTIPS ====
Blockly.Msg.AICAMERA_INIT_TOOLTIP = "Khởi tạo kết nối Camera AI qua UART trên Yolo UNO. Chọn chân RX và TX (cùng cổng nối camera). Tốc độ cố định 115200 khớp với camera.";
Blockly.Msg.AICAMERA_FACE_KNOWN_TOOLTIP = "Đúng (True) khi camera nhận ra một người đã lưu (ID ≥ 1).";
Blockly.Msg.AICAMERA_FACE_UNKNOWN_TOOLTIP = "Đúng (True) khi camera thấy một khuôn mặt nhưng chưa được lưu (ID = 0).";
Blockly.Msg.AICAMERA_COLOR_NAME_TOOLTIP = "Trả về tên màu ở tâm khung (chuỗi: RED, ORANGE, YELLOW, GREEN, CYAN, BLUE, PURPLE, PINK, BROWN, WHITE, GRAY, BLACK).";
Blockly.Msg.AICAMERA_IS_COLOR_TOOLTIP = "Đúng (True) khi màu ở tâm khung đúng bằng màu đã chọn.";
Blockly.Msg.AICAMERA_CLASS_TOOLTIP = "Tên lớp (class) nhận dạng được từ Stream video / Teachable Machine. Rỗng nếu chưa có.";
Blockly.Msg.AICAMERA_CLASS_CONF_TOOLTIP = "Độ tin cậy (%) của lớp đang nhận dạng (0–100).";
Blockly.Msg.AICAMERA_IS_CLASS_TOOLTIP = "Đúng (True) khi lớp nhận dạng đúng bằng tên đã nhập VÀ độ tin cậy ≥ ngưỡng %.";
Blockly.Msg.AICAMERA_QR_TOOLTIP = "Nội dung chuỗi của mã QR camera đọc được gần nhất (mode QR code). Rỗng nếu chưa đọc được mã nào.";

// ==== COLOR DROPDOWN ====
Blockly.Msg.AICAMERA_COLOR_RED = "đỏ";
Blockly.Msg.AICAMERA_COLOR_ORANGE = "cam";
Blockly.Msg.AICAMERA_COLOR_YELLOW = "vàng";
Blockly.Msg.AICAMERA_COLOR_GREEN = "xanh lá";
Blockly.Msg.AICAMERA_COLOR_CYAN = "xanh ngọc";
Blockly.Msg.AICAMERA_COLOR_BLUE = "xanh dương";
Blockly.Msg.AICAMERA_COLOR_PURPLE = "tím";
Blockly.Msg.AICAMERA_COLOR_PINK = "hồng";
Blockly.Msg.AICAMERA_COLOR_BROWN = "nâu";
Blockly.Msg.AICAMERA_COLOR_WHITE = "trắng";
Blockly.Msg.AICAMERA_COLOR_GRAY = "xám";
Blockly.Msg.AICAMERA_COLOR_BLACK = "đen";

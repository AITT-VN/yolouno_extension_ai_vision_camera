// English — AI Camera V2 (Yolo UNO)

// ==== CATEGORY & GROUPS ====
Blockly.Msg.AICAMERA_CAT = "AI CAMERA V2";
Blockly.Msg.AICAMERA_GRP_CONNECT = "Connect";
Blockly.Msg.AICAMERA_GRP_FACE = "Face recognition";
Blockly.Msg.AICAMERA_GRP_COLOR = "Color recognition";
Blockly.Msg.AICAMERA_GRP_STREAM = "Stream video / AI";
Blockly.Msg.AICAMERA_GRP_QR = "QR code";

// ==== BLOCKS ====
Blockly.Msg.AICAMERA_INIT = "%1 init AI camera RX %2 TX %3";
Blockly.Msg.AICAMERA_FACE_KNOWN = "%1 detected known face ID %2";
Blockly.Msg.AICAMERA_FACE_UNKNOWN = "%1 detected an unknown face";
Blockly.Msg.AICAMERA_COLOR_NAME = "%1 recognized color is";
Blockly.Msg.AICAMERA_IS_COLOR = "%1 detected color %2";
Blockly.Msg.AICAMERA_CLASS = "%1 recognized class is";
Blockly.Msg.AICAMERA_CLASS_CONF = "%1 recognition confidence (%)";
Blockly.Msg.AICAMERA_IS_CLASS = "%1 recognized as %2 with confidence ≥ %3 %";
Blockly.Msg.AICAMERA_QR = "%1 QR code value";

// ==== TOOLTIPS ====
Blockly.Msg.AICAMERA_INIT_TOOLTIP = "Initialize AI Camera connection via UART on Yolo UNO. Select RX and TX pins. Fixed baud rate 115200.";
Blockly.Msg.AICAMERA_FACE_KNOWN_TOOLTIP = "True when camera recognizes a saved person (ID ≥ 1).";
Blockly.Msg.AICAMERA_FACE_UNKNOWN_TOOLTIP = "True when camera sees a face that has not been saved (ID = 0).";
Blockly.Msg.AICAMERA_COLOR_NAME_TOOLTIP = "Returns the color name at frame center (string: RED, ORANGE, YELLOW, GREEN, CYAN, BLUE, PURPLE, PINK, BROWN, WHITE, GRAY, BLACK).";
Blockly.Msg.AICAMERA_IS_COLOR_TOOLTIP = "True when the color at frame center matches the selected color.";
Blockly.Msg.AICAMERA_CLASS_TOOLTIP = "Class name recognized from Stream video / Teachable Machine. Empty if none.";
Blockly.Msg.AICAMERA_CLASS_CONF_TOOLTIP = "Confidence (%) of the currently recognized class (0–100).";
Blockly.Msg.AICAMERA_IS_CLASS_TOOLTIP = "True when the recognized class matches the entered name AND confidence ≥ threshold %.";
Blockly.Msg.AICAMERA_QR_TOOLTIP = "String content of the most recently read QR code (QR code mode). Empty if none read.";

// ==== COLOR DROPDOWN ====
Blockly.Msg.AICAMERA_COLOR_RED = "red";
Blockly.Msg.AICAMERA_COLOR_ORANGE = "orange";
Blockly.Msg.AICAMERA_COLOR_YELLOW = "yellow";
Blockly.Msg.AICAMERA_COLOR_GREEN = "green";
Blockly.Msg.AICAMERA_COLOR_CYAN = "cyan";
Blockly.Msg.AICAMERA_COLOR_BLUE = "blue";
Blockly.Msg.AICAMERA_COLOR_PURPLE = "purple";
Blockly.Msg.AICAMERA_COLOR_PINK = "pink";
Blockly.Msg.AICAMERA_COLOR_BROWN = "brown";
Blockly.Msg.AICAMERA_COLOR_WHITE = "white";
Blockly.Msg.AICAMERA_COLOR_GRAY = "gray";
Blockly.Msg.AICAMERA_COLOR_BLACK = "black";

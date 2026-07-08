var PythonGen = (typeof pythonGenerator !== 'undefined') ? pythonGenerator : (typeof Blockly !== 'undefined' && Blockly.Python ? Blockly.Python : {});
if (!PythonGen) PythonGen = {};

const CameraAI_Color = "#9C27B0";

var CameraAI_Pins = [
  ["D3","D3"],["D4","D4"],["D5","D5"],["D6","D6"],["D7","D7"],["D8","D8"],["D9","D9"],["D10","D10"],
  ["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"],["A4","A4"]
];

// ── Icons (base64 — nguồn SVG gốc lưu trong images/) ────────────────────────
var ICON = {
  camera:    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOCAxOCI+PHJlY3QgeD0iNSIgeT0iNyIgd2lkdGg9IjgiIGhlaWdodD0iNiIgcng9IjEuMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEuNCIvPjxsaW5lIHgxPSI5IiB5MT0iMTMiIHgyPSI5IiB5Mj0iMTciIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI2LjUiIHkxPSIzLjUiIHgyPSI2LjUiIHkyPSI3IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTEuNSIgeTE9IjMuNSIgeDI9IjExLjUiIHkyPSI3IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4=",
  face:      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOCAxOCI+PGNpcmNsZSBjeD0iOSIgY3k9IjkiIHI9IjcuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEuNCIvPjxjaXJjbGUgY3g9IjYuNSIgY3k9IjcuNSIgcj0iMS4xIiBmaWxsPSIjMDAwIi8+PGNpcmNsZSBjeD0iMTEuNSIgY3k9IjcuNSIgcj0iMS4xIiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTYsMTEuNSBROSwxNC41IDEyLDExLjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==",
  color:     "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOCAxOCI+PGNpcmNsZSBjeD0iNS41IiBjeT0iNS41IiByPSIzLjgiIGZpbGw9IiNlNTM5MzUiLz48Y2lyY2xlIGN4PSIxMi41IiBjeT0iNS41IiByPSIzLjgiIGZpbGw9IiNmZmIzMDAiLz48Y2lyY2xlIGN4PSI1LjUiIGN5PSIxMi41IiByPSIzLjgiIGZpbGw9IiMxZTg4ZTUiLz48Y2lyY2xlIGN4PSIxMi41IiBjeT0iMTIuNSIgcj0iMy44IiBmaWxsPSIjNDNhMDQ3Ii8+PC9zdmc+",
  stream:    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxyZWN0IHg9IjEiIHk9IjUiIHdpZHRoPSIxMSIgaGVpZ2h0PSI5IiByeD0iMS41IiBzdHJva2Utd2lkdGg9IjEuMyIvPjxwb2x5Z29uIHBvaW50cz0iMTIsOCAxNyw2IDE3LDEyIDEyLDExIiBzdHJva2Utd2lkdGg9IjEuMyIvPjxjaXJjbGUgY3g9IjYiIGN5PSI5LjUiIHI9IjIuNSIgc3Ryb2tlLXdpZHRoPSIxLjMiLz48Y2lyY2xlIGN4PSI2IiBjeT0iOS41IiByPSIxIiBmaWxsPSIjMDAwIiBzdHJva2U9Im5vbmUiLz48L3N2Zz4=",
  qr:        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOCAxOCI+PHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjciIGhlaWdodD0iNyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEuNSIvPjxyZWN0IHg9IjMiIHk9IjMiIHdpZHRoPSIzIiBoZWlnaHQ9IjMiIGZpbGw9IiMwMDAiLz48cmVjdCB4PSIxMCIgeT0iMSIgd2lkdGg9IjciIGhlaWdodD0iNyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEuNSIvPjxyZWN0IHg9IjEyIiB5PSIzIiB3aWR0aD0iMyIgaGVpZ2h0PSIzIiBmaWxsPSIjMDAwIi8+PHJlY3QgeD0iMSIgeT0iMTAiIHdpZHRoPSI3IiBoZWlnaHQ9IjciIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48cmVjdCB4PSIzIiB5PSIxMiIgd2lkdGg9IjMiIGhlaWdodD0iMyIgZmlsbD0iIzAwMCIvPjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0iIzAwMCIvPjxyZWN0IHg9IjEzIiB5PSIxMCIgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0iIzAwMCIvPjxyZWN0IHg9IjE2IiB5PSIxMCIgd2lkdGg9IjEiIGhlaWdodD0iNSIgZmlsbD0iIzAwMCIvPjxyZWN0IHg9IjEwIiB5PSIxMyIgd2lkdGg9IjUiIGhlaWdodD0iMiIgZmlsbD0iIzAwMCIvPjxyZWN0IHg9IjEzIiB5PSIxNiIgd2lkdGg9IjQiIGhlaWdodD0iMSIgZmlsbD0iIzAwMCIvPjwvc3ZnPg=="
};

// Helper: tạo field_image từ ICON object
function camIcon(name) {
  return { type: "field_image", src: ICON[name], width: 18, height: 18, alt: "*" };
}

// ════════════════════════════════════════════════════════════════
// BLOCK 1: Khởi tạo Camera AI — default RX=D3, TX=D4
// ════════════════════════════════════════════════════════════════
Blockly.Blocks['camera_ai_init'] = {
  init: function() {
    this.jsonInit({
      type: "camera_ai_init",
      message0: Blockly.Msg.AICAMERA_INIT,
      previousStatement: null,
      nextStatement: null,
      args0: [
        camIcon("camera"),
        { type: "field_dropdown", name: "RX_PIN", options: CameraAI_Pins },
        { type: "field_dropdown", name: "TX_PIN", options: CameraAI_Pins }
      ],
      colour: CameraAI_Color,
      tooltip: Blockly.Msg.AICAMERA_INIT_TOOLTIP,
      helpUrl: ""
    });
    // Đặt giá trị mặc định
    this.setFieldValue('D3', 'RX_PIN');
    this.setFieldValue('D4', 'TX_PIN');
  }
};
PythonGen['camera_ai_init'] = function(block) {
  var rx = block.getFieldValue('RX_PIN');
  var tx = block.getFieldValue('TX_PIN');
  PythonGen.definitions_['import_machine']         = 'import machine';
  PythonGen.definitions_['import_time']            = 'import time';
  PythonGen.definitions_['import_ai_vision_camera'] = 'from ai_vision_camera import *';
  return 'camera_ai_init(' + rx + '_PIN, ' + tx + '_PIN)\n';
};

// ════════════════════════════════════════════════════════════════
// BLOCK 11: Nhận ra khuôn mặt đã lưu?
// ════════════════════════════════════════════════════════════════
Blockly.Blocks['camera_ai_face_known'] = {
  init: function() {
    this.jsonInit({
      type: "camera_ai_face_known",
      message0: Blockly.Msg.AICAMERA_FACE_KNOWN,
      args0: [
        camIcon("face"),
        {
          type: "field_dropdown", name: "FACE_ID",
          options: [ ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"] ]
        }
      ],
      output: null, colour: CameraAI_Color,
      tooltip: Blockly.Msg.AICAMERA_FACE_KNOWN_TOOLTIP, helpUrl: ""
    });
  }
};
PythonGen['camera_ai_face_known'] = function(block) {
  var id = block.getFieldValue('FACE_ID');
  PythonGen.definitions_['import_ai_vision_camera'] = 'from ai_vision_camera import *';
  return ['camera_ai_face_known(' + id + ')', PythonGen.ORDER_NONE];
};

// ════════════════════════════════════════════════════════════════
// BLOCK 12: Thấy khuôn mặt lạ (chưa lưu)?
// ════════════════════════════════════════════════════════════════
Blockly.Blocks['camera_ai_face_unknown'] = {
  init: function() {
    this.jsonInit({
      type: "camera_ai_face_unknown",
      message0: Blockly.Msg.AICAMERA_FACE_UNKNOWN,
      args0: [camIcon("face")],
      output: null, colour: CameraAI_Color,
      tooltip: Blockly.Msg.AICAMERA_FACE_UNKNOWN_TOOLTIP, helpUrl: ""
    });
  }
};
PythonGen['camera_ai_face_unknown'] = function(block) {
  PythonGen.definitions_['import_ai_vision_camera'] = 'from ai_vision_camera import *';
  return ['camera_ai_face_unknown()', PythonGen.ORDER_NONE];
};

// ════════════════════════════════════════════════════════════════
// BLOCK 13: Màu đang thấy — reporter
// ════════════════════════════════════════════════════════════════
Blockly.Blocks['camera_ai_color_name'] = {
  init: function() {
    this.jsonInit({
      type: "camera_ai_color_name",
      message0: Blockly.Msg.AICAMERA_COLOR_NAME,
      args0: [camIcon("color")],
      output: null, colour: CameraAI_Color,
      tooltip: Blockly.Msg.AICAMERA_COLOR_NAME_TOOLTIP, helpUrl: ""
    });
  }
};
PythonGen['camera_ai_color_name'] = function(block) {
  PythonGen.definitions_['import_ai_vision_camera'] = 'from ai_vision_camera import *';
  return ['camera_ai_color_name()', PythonGen.ORDER_NONE];
};

// ════════════════════════════════════════════════════════════════
// BLOCK 14: Thấy màu [dropdown]? — boolean
// ════════════════════════════════════════════════════════════════
Blockly.Blocks['camera_ai_is_color'] = {
  init: function() {
    this.jsonInit({
      type: "camera_ai_is_color",
      message0: Blockly.Msg.AICAMERA_IS_COLOR,
      output: null,
      args0: [
        camIcon("color"),
        {
          type: "field_dropdown", name: "COLOR",
          options: [
            [Blockly.Msg.AICAMERA_COLOR_RED,    "RED"],
            [Blockly.Msg.AICAMERA_COLOR_ORANGE, "ORANGE"],
            [Blockly.Msg.AICAMERA_COLOR_YELLOW, "YELLOW"],
            [Blockly.Msg.AICAMERA_COLOR_GREEN,  "GREEN"],
            [Blockly.Msg.AICAMERA_COLOR_CYAN,   "CYAN"],
            [Blockly.Msg.AICAMERA_COLOR_BLUE,   "BLUE"],
            [Blockly.Msg.AICAMERA_COLOR_PURPLE, "PURPLE"],
            [Blockly.Msg.AICAMERA_COLOR_PINK,   "PINK"],
            [Blockly.Msg.AICAMERA_COLOR_BROWN,  "BROWN"],
            [Blockly.Msg.AICAMERA_COLOR_WHITE,  "WHITE"],
            [Blockly.Msg.AICAMERA_COLOR_GRAY,   "GRAY"],
            [Blockly.Msg.AICAMERA_COLOR_BLACK,  "BLACK"]
          ]
        }
      ],
      colour: CameraAI_Color,
      tooltip: Blockly.Msg.AICAMERA_IS_COLOR_TOOLTIP, helpUrl: ""
    });
  }
};
PythonGen['camera_ai_is_color'] = function(block) {
  var c = block.getFieldValue('COLOR');
  PythonGen.definitions_['import_ai_vision_camera'] = 'from ai_vision_camera import *';
  return ["camera_ai_is_color('" + c + "')", PythonGen.ORDER_NONE];
};

// ════════════════════════════════════════════════════════════════
// BLOCK 15: Tên lớp nhận dạng — reporter
// ════════════════════════════════════════════════════════════════
Blockly.Blocks['camera_ai_class'] = {
  init: function() {
    this.jsonInit({
      type: "camera_ai_class",
      message0: Blockly.Msg.AICAMERA_CLASS,
      args0: [camIcon("stream")],
      output: null, colour: CameraAI_Color,
      tooltip: Blockly.Msg.AICAMERA_CLASS_TOOLTIP, helpUrl: ""
    });
  }
};
PythonGen['camera_ai_class'] = function(block) {
  PythonGen.definitions_['import_ai_vision_camera'] = 'from ai_vision_camera import *';
  return ['camera_ai_class()', PythonGen.ORDER_NONE];
};

// ════════════════════════════════════════════════════════════════
// BLOCK 16: Độ tin cậy nhận dạng % — reporter
// ════════════════════════════════════════════════════════════════
Blockly.Blocks['camera_ai_class_conf'] = {
  init: function() {
    this.jsonInit({
      type: "camera_ai_class_conf",
      message0: Blockly.Msg.AICAMERA_CLASS_CONF,
      args0: [camIcon("stream")],
      output: null, colour: CameraAI_Color,
      tooltip: Blockly.Msg.AICAMERA_CLASS_CONF_TOOLTIP, helpUrl: ""
    });
  }
};
PythonGen['camera_ai_class_conf'] = function(block) {
  PythonGen.definitions_['import_ai_vision_camera'] = 'from ai_vision_camera import *';
  return ['camera_ai_class_conf()', PythonGen.ORDER_NONE];
};

// ════════════════════════════════════════════════════════════════
// BLOCK 17: Nhận dạng là [tên] & tin cậy ≥ [%]? — boolean
// ════════════════════════════════════════════════════════════════
Blockly.Blocks['camera_ai_is_class'] = {
  init: function() {
    this.jsonInit({
      type: "camera_ai_is_class",
      message0: Blockly.Msg.AICAMERA_IS_CLASS,
      output: null,
      args0: [
        camIcon("stream"),
        { type: "field_input",  name: "NAME", text: "meo" },
        { type: "field_number", name: "CONF", value: 80, min: 0, max: 100 }
      ],
      colour: CameraAI_Color,
      tooltip: Blockly.Msg.AICAMERA_IS_CLASS_TOOLTIP, helpUrl: ""
    });
  }
};
PythonGen['camera_ai_is_class'] = function(block) {
  var name = block.getFieldValue('NAME');
  var conf = block.getFieldValue('CONF');
  PythonGen.definitions_['import_ai_vision_camera'] = 'from ai_vision_camera import *';
  return ["camera_ai_is_class('" + name + "', " + conf + ")", PythonGen.ORDER_NONE];
};

// ════════════════════════════════════════════════════════════════
// BLOCK 18: Mã QR đọc được — reporter
// ════════════════════════════════════════════════════════════════
Blockly.Blocks['camera_ai_qr'] = {
  init: function() {
    this.jsonInit({
      type: "camera_ai_qr",
      message0: Blockly.Msg.AICAMERA_QR,
      args0: [camIcon("qr")],
      output: null, colour: CameraAI_Color,
      tooltip: Blockly.Msg.AICAMERA_QR_TOOLTIP, helpUrl: ""
    });
  }
};
PythonGen['camera_ai_qr'] = function(block) {
  PythonGen.definitions_['import_ai_vision_camera'] = 'from ai_vision_camera import *';
  return ['camera_ai_qr()', PythonGen.ORDER_NONE];
};

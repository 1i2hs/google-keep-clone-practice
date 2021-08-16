const { v4: uuidv4 } = require("uuid");

class Note {
  constructor(title, body, option) {
    this.id = uuidv4(); // 고유 ID
    this.title = title;
    this.body = body;
    this.pinned = option.pinned;
    this.backgroundColor = option.backgroundColor;
    const currentTime = Math.floor(Date.now() / 1000);
    this.createdAt = currentTime; // 생성된 시간
    this.updatedAt = currentTime; // 수정된 시간
  }
}

module.exports = Note;

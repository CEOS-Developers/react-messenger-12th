const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

const MSGLIST = [
	{ user: true, content: '안녕하세요 12기 프론트엔드 개발자분들' },
	{ user: true, content: '저희의 대화를 마음껏 조작해보세요 💌' },
	{ user: true, content: '상단에 프로필을 눌러서 발신자 변경하면 됩니당~' },
	{ user: false, content: '안녕 은아' },
	{ user: false, content: '뭐해 ?' },
	{ user: true, content: '시원아 넌 최고의 팀장이야' },
	{ user: false, content: '나도 아니까  ' },
	{ user: false, content: '그만 말해줘도 돼' },
	{ user: true, content: 'ㅠㅠ' },
];

app.use(cors());
app.options("*", cors());

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/chat", (req, res) => res.json(MSGLIST));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
## Installation

- ให้สร้าง .env ขึ้นมาใหม่ โดยมีตัวอย่างอยู่ใน .env.example
- ทำการ npm install
- ลองเข้า localhost:3000/api/v1/example

## Structure

คล้ายๆกับใน laravel
- app
	- controllers เก็บ controllers  
	- models เก็บ models
	- routes 
- config
- test
- node_modules เก็บ package ที่เรา install ทั้งหมด ควรจะ ignore ไว้

## Start server

- ใช้คำสั่ง npm start
- ทุกๆการ save ไฟล์ JS ระบบจะทำการ restart server ให้ทันทีด้วย gulp-nodemon

## Tests

- ใช้คำสั่ง npm test
- เพิ่ม test case ได้ที่ test/test.js

## License

THiNKNET Developer
# Part 1: README   
## ตัวอย่าง Tag   
|             Tag   <br> |                                                                       หน้าที่   <br> |                       Attribute ที่ต้องระบุ   <br> |
|:-----------------------|:-------------------------------------------------------------------------------------|:---------------------------------------------------|
|         `<div>`   <br> |                                               ใช้แบ่งส่วนหรือจัดกลุ่ม Element   <br> |                                                    |
| `<h1>` - `<h6>`   <br> |                                                                ใช้กำหนดหัวข้อ   <br> |                                                    |
|           `<p>`   <br> |                                                     ใช้แสดงข้อความเป็นย่อหน้า   <br> |                                                    |
|           `<a>`   <br> |                                                                 ใช้สร้างลิงก์   <br> |                                      `href`   <br> |
|         `<img>`   <br> |                                                                 ใช้แสดงรูปภาพ   <br> |                                `src`, `alt`   <br> |
|       `<video>`   <br> |                                                                 ใช้แสดงวิดีโอ   <br> |                                                    |
|      `<button>`   <br> |                                                                  ใช้สร้างปุ่ม   <br> |                                                    |
|        `<form>`   <br> |                                                     ใช้สร้างแบบฟอร์มรับข้อมูล   <br> |                                                    |

## ตัวอย่าง HTML   
```
 <a id="title" "href="https://google.com">Google</a>
```
   
# CSS   
## การกำหนดชื่อ   
```
p {} /* สำหรับ tag เช่น body div h */
#id {} /* เริ่มด้วย # เเล้วตามด้วยชื่อ id */
.class {} /* เริ่มด้วย . เเล้วตามด้วยชื่อ class */
```
   
## ตัวอย่าง CSS   
```
/* เลือก Element ที่มี id="title" */
#title {
    font-size: 64px;             /* กำหนดขนาดตัวอักษร */
    font-weight: bold;           /* กำหนดความหนาของตัวอักษร */
    color: white;                /* กำหนดสีตัวอักษรเป็นสีขาว */

    background-color: rgb(53, 93, 255); /* กำหนดสีพื้นหลัง */
    width: fit-content;          /* กำหนดความกว้างให้พอดีกับเนื้อหาภายใน */
    padding: 12px;                /* กำหนดระยะห่างระหว่างเนื้อหากับขอบด้านใน */
    margin: 8px;                  /* กำหนดระยะห่างจาก Element อื่นด้านนอก */

    border-radius: 16px;         /* กำหนดความโค้งมนของมุม */
    border-style: solid;         /* กำหนดรูปแบบเส้นขอบเป็นเส้นทึบ */
    border-width: 4px;            /* กำหนดความหนาของเส้นขอบ */
    border-color: black;         /* กำหนดสีของเส้นขอบ */
}
```
   
### Flex Container   
```
#container {
	display: flex;
	flex-direction: column;  /* กำหนดทิศทาง */
	justify-content: center; /* ทำให้อยู่ตรงกลาง */
	align-items: center; /* ทำให้อยู่ตรงกลาง */
	gap: 16px; /* ระยะระหว่าง element */
}
```
   
### Grid Container   
```
#container {
	display: grid
}
```
   
### Animation   
```
/* ตัวอย่างกล่องเปลี่ยนสีเมื่อเอา mouse ไปชี้ จากเเดง->น้ำเงิน */
#container {
	background-color: red;
	transition: background-color 200ms ease-out; /* ชื่อ style + เวลา + รูปแบบการเปลี่ ยน */
}

#container {
	background-color: blue;
}
```
   
   
   
## Dev Console   
กด F12 หรือ คลิกขวา inspect หรือ Ctrl + Shift + C   
   
## เว็ปสำหรับหาข้อมูลเพิ่มเติม   
[HTML](https://www.w3schools.com/html/default.asp)   
[CSS](https://www.w3schools.com/css/default.asp)   
ใช้ AI ก็ได้เช่นกัน   
   
## ตัวอย่างเว็ปไซต์   
[https://lmt-webdev.vercel.app/project-1/](https://lmt-webdev.vercel.app/project-1/)    
   
## Deploy   
[Vercel Drop](https://vercel.com/drop) หรือค้นหา vercel drop   
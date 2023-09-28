var input = document.querySelector(".input");
var items = Array.from(document.querySelectorAll(".item"));
console.log(input);
console.log(items);
items.forEach((item) => {
  item.addEventListener("click", () => {
    if (input.innerHTML == "0") {
      //xóa bỏ số 0 dư thừa ở đầu số nếu có
      input.innerHTML = "";
    }
    if (item.innerHTML == "AC") {
      //bấm vào nút AC thì reset value
      input.innerHTML = "";
    } else if (item.innerHTML == "DEL") {
      var arr = Array.from(input.innerHTML); //chuyển string thành array
      arr.splice(arr.length - 1, 1);
      if (arr.length != 0) {
        input.innerHTML = arr.join(""); //chuyển array thành string
      } else {
        input.innerHTML == "0";
      }
    } else if (item.innerHTML == "=") {
      input.innerHTML = eval(input.innerHTML); //sử dụng hàm eval tính kết quả của chuỗi value trên input
    } else input.innerHTML += item.innerHTML;
  });
});

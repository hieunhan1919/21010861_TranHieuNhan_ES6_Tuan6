// 1. In các số từ 1 đến 10
console.log("Các số từ 1 đến 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. In các số lẻ nhỏ hơn 100
console.log("Các số lẻ nhỏ hơn 100:");
for (let i = 1; i < 100; i += 2) {
    console.log(i);
}

// 3. In bảng nhân với 7
console.log("Bảng nhân của 7:");
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// 4. In tất cả các bảng nhân với các số từ 1 đến 10
console.log("Các bảng nhân từ 1 đến 10:");
for (let i = 1; i <= 10; i++) {
    console.log(`Bảng nhân cho ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log('-------------------');
}

// 5. Tính tổng các số từ 1 đến 10
const tong1Den10 = Array.from({ length: 10 }, (_, i) => i + 1).reduce((tich, giaTri) => tich + giaTri, 0);
console.log(`Tổng các số từ 1 đến 10: ${tong1Den10}`);

// 6. Tính 10!
const giaiThua = n => (n === 0 ? 1 : n * giaiThua(n - 1));
console.log(`10! = ${giaiThua(10)}`);

// 7. Tính tổng các số chẵn lớn hơn 10 và nhỏ hơn 30
const tongChan = Array.from({ length: 29 - 10 }, (_, i) => i + 11)
                     .filter(num => num % 2 === 0)
                     .reduce((tich, giaTri) => tich + giaTri, 0);
console.log(`Tổng các số chẵn từ 11 đến 29: ${tongChan}`);

// 8. Chuyển đổi Celsius sang Fahrenheit
const celsiusToFahrenheit = celsius => (celsius * 9/5) + 32;
console.log(`25°C sang Fahrenheit: ${celsiusToFahrenheit(25)}°F`);

// 9. Chuyển đổi Fahrenheit sang Celsius
const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;
console.log(`77°F sang Celsius: ${fahrenheitToCelsius(77)}°C`);

// 10. Tính tổng các số trong một mảng
const tongMang = mang => mang.reduce((tich, giaTri) => tich + giaTri, 0);
const mangSo = [1, 2, 3, 4, 5]; // Mảng ví dụ
console.log(`Tổng của mảng: ${tongMang(mangSo)}`);

// 11. Tính trung bình của các số trong một mảng
const trungBinhMang = mang => tongMang(mang) / mang.length;
console.log(`Trung bình của mảng: ${trungBinhMang(mangSo)}`);

// 12. Trả về mảng các số dương
const soDuong = mang => mang.filter(num => num > 0);
console.log(`Các số dương trong [-5, 0, 5, 10]: ${soDuong([-5, 0, 5, 10])}`);

// 13. Tìm số lớn nhất trong một mảng
const maxTrongMang = mang => Math.max(...mang);
console.log(`Số lớn nhất trong [1, 2, 3, 4, 5]: ${maxTrongMang([1, 2, 3, 4, 5])}`);

// 14. In 10 số Fibonacci đầu tiên không dùng đệ quy
const fibonacciKhongDeQuy = (n) => {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
};
console.log(`10 số Fibonacci đầu tiên: ${fibonacciKhongDeQuy(10)}`);

// 15. Tìm số Fibonacci thứ n sử dụng đệ quy
const soFibonacciThucN = n => (n <= 1 ? n : soFibonacciThucN(n - 1) + soFibonacciThucN(n - 2));
console.log(`Số Fibonacci thứ 5: ${soFibonacciThucN(5)}`);

// 16. Kiểm tra xem một số có phải là số nguyên tố không
const laSoNguyenTo = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};
console.log(`7 có phải là số nguyên tố không? ${laSoNguyenTo(7)}`);

// 17. Tính tổng các chữ số của một số nguyên dương
const tongCacChuSo = num => String(num).split('').reduce((tich, chuSo) => tich + Number(chuSo), 0);
console.log(`Tổng các chữ số của 1234: ${tongCacChuSo(1234)}`);

// 18. In 100 số nguyên tố đầu tiên
const soNguyenToDauTien = (n) => {
    const soNguyenTo = [];
    let num = 2;
    while (soNguyenTo.length < n) {
        if (laSoNguyenTo(num)) soNguyenTo.push(num);
        num++;
    }
    return soNguyenTo;
};
console.log(`100 số nguyên tố đầu tiên: ${soNguyenToDauTien(100)}`);

// 19. Trả về "p" số nguyên tố đầu tiên lớn hơn "n"
const soNguyenToLonHonN = (n, p) => {
    const soNguyenTo = [];
    let num = n + 1;
    while (soNguyenTo.length < p) {
        if (laSoNguyenTo(num)) soNguyenTo.push(num);
        num++;
    }
    return soNguyenTo;
};
console.log(`5 số nguyên tố đầu tiên lớn hơn 10: ${soNguyenToLonHonN(10, 5)}`);

// 20. Xoay mảng sang trái 1 vị trí
const xoayTrai = mang => [...mang.slice(1), mang[0]];
console.log(`Xoay trái [1, 2, 3]: ${xoayTrai([1, 2, 3])}`);

// 21. Xoay mảng sang phải 1 vị trí
const xoayPhai = mang => [mang[mang.length - 1], ...mang.slice(0, -1)];
console.log(`Xoay phải [1, 2, 3]: ${xoayPhai([1, 2, 3])}`);

// 22. Đảo ngược một mảng
const daoNguocMang = mang => [...mang].reverse();
console.log(`Đảo ngược [1, 2, 3]: ${daoNguocMang([1, 2, 3])}`);

// 23. Đảo ngược một chuỗi
const daoNguocChuoi = str => str.split('').reverse().join('');
console.log(`Đảo ngược "hello": ${daoNguocChuoi("hello")}`);

// 24. Ghép hai mảng
const ghepHaiMang = (mang1, mang2) => [...mang1, ...mang2];
console.log(`Ghép [1, 2] và [3, 4]: ${ghepHaiMang([1, 2], [3, 4])}`);

// 25. Trả về các số chỉ có trong một mảng nhưng không có trong mảng kia
const khacBietDoiXung = (mang1, mang2) => {
    const duyNhatTrongDau = mang1.filter(x => !mang2.includes(x));
    const duyNhatTrongHai = mang2.filter(x => !mang1.includes(x));
    return [...duyNhatTrongDau, ...duyNhatTrongHai];
};
console.log(`Sự khác biệt đối xứng giữa [1, 2, 3] và [3, 4, 5]: ${khacBietDoiXung([1, 2, 3], [3, 4, 5])}`);

// 26. Trả về các phần tử trong mảng đầu tiên nhưng không có trong mảng thứ hai
const khacBiet = (mang1, mang2) => mang1.filter(x => !mang2.includes(x));
console.log(`Sự khác biệt giữa [1, 2, 3] và [2, 3]: ${khacBiet([1, 2, 3], [2, 3])}`);


const A = parseInt(prompt("Bir ədəd daxil edin:"));

if (isNaN(A)) {
    console.log("Zəhmət olmasa, düzgün bir ədəd daxil edin.");
} else {
    for (let i = 1; i <= 1000; i++) {
        if (i % A === 0) {
            console.log(i);
        }
    }
}

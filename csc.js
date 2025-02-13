// إظهار رسالة ترحيبية
function showAlert() {
    alert("مرحبًا بك في موقعنا!");
}

// فتح وإغلاق الشريط الجانبي
function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    let overlay = document.getElementById("overlay");
    let menuBtn = document.querySelector(".menu-btn");

    if (sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
        overlay.classList.remove("active");
        menuBtn.style.display = "block";
    } else {
        sidebar.classList.add("open");
        overlay.classList.add("active");
        menuBtn.style.display = "none";
    }
}

// إغلاق القائمة عند النقر خارجها
document.addEventListener("click", function (event) {
    let sidebar = document.getElementById("sidebar");
    let overlay = document.getElementById("overlay");

    if (!sidebar.contains(event.target) && !event.target.matches(".menu-btn")) {
        sidebar.classList.remove("open");
        overlay.classList.remove("active");
        document.querySelector(".menu-btn").style.display = "block";
    }
});

// التحقق من إرسال النموذج
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("تم إرسال رسالتك بنجاح!");
    document.getElementById("contactForm").reset();
});

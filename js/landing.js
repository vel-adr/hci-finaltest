alert("Prototype ini menampilkan icon melalui service CDN yang membutuhkan koneksi internet. Pastikan perangkat terhubung dengan koneksi internet agar icon dapat muncul. Terima kasih.");


$("#submit").click(function (event) {
    const email = $("#email").val();
    const pass = $("#password").val();

    if (email != "admin" && pass != "admin") {
        alert("Wrong email and password!");
        event.preventDefault();
    } else if (email != "admin") {
        alert("Wrong email!");
        event.preventDefault();
    } else if (pass != "admin") {
        alert("Wrong password!");
        event.preventDefault();
    }
});
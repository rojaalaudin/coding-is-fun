document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    // Ambil nilai username dan password
    const username = this.username.value;
    const password = this.password.value;

    // Logika sederhana untuk validasi (ganti dengan logika yang sesuai)
    if (username === "admin" && password === "password") {
        alert("Login berhasil!");
        // Arahkan ke halaman lain atau lakukan tindakan lain
    } else {
        document.getElementById('error-message').innerText = "Username atau password salah.";
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const pelangganData = [
        { nama: 'Andi', alamat: 'Jl. Merdeka No.1', email: 'andi@mail.com', telepon: '08123456789' },
        { nama: 'Budi', alamat: 'Jl. Sudirman No.2', email: 'budi@mail.com', telepon: '08123456790' },
        { nama: 'Cici', alamat: 'Jl. Gatot Subroto No.3', email: 'cici@mail.com', telepon: '08123456791' },
        // Tambahkan data lainnya sesuai kebutuhan
    ];

    const tbody = document.getElementById('pelanggan-data');

    pelangganData.forEach(pelanggan => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${pelanggan.nama}</td>
            <td>${pelanggan.alamat}</td>
            <td>${pelanggan.email}</td>
            <td>${pelanggan.telepon}</td>
        `;
        tbody.appendChild(row);
    });
});

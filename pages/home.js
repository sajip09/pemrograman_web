function Menu(){
  return (
    <ul>
      <li><a href="/home">Home</a></li>
      <li><a href="/eskul">Extrakulikuler</a></li>
      <li><a href="/daftar">Daftar</a></li>
      <li><a href="/login">Login</a></li>
    </ul>
  );
}

function Home(){
  return (
    <div>
    <h2>Pendaftaran Peserta Didik Baru</h2>
    <h5>Rabu, 1 Juli 2020</h5>

    <p>Alhamdulillahi rabbil'alamin</p>
    <p>Puji syukur ke hadirat Allah SWT, yang senantiasa melimpahkan rahmat dan karunia-Nya, sehingga Panitia Penerimaan Peserta Didik SMP Muhammadiyah 7 Sempu Tahun Pelajaran 2020/2021 dapat mengadakan PPDB ini.
    Terkait dengan syarat-syarat pendaftaran kami sampaikan hal-hal berikut ini:</p>
    <p>1. Fotocopy Raport</p>
    <p>2. Fotocopy Ijazah</p>
    <p>3. Fotocopy Nilai UN</p>
    <Menu />
    </div>
  );
}

export default Home;
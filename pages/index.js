import Menu from '../components/menu';
import Layout from '../layout/layout';
  
  function Home(){
    return (
      <Layout>
      <Menu />
      <section>
      <article>
      <div>
      <h2>Pendaftaran Peserta Didik Baru</h2>
      <h5>Rabu, 1 Juli 2020</h5>
        <img src="images/ppdb.jpg" />
        <figcaption>PPDB tahun 2020/2021</figcaption>
      <p>Alhamdulillahi rabbil'alamin
      <br/>
      Puji syukur ke hadirat Allah SWT, yang senantiasa melimpahkan rahmat dan karunia-Nya, sehingga Panitia Penerimaan Peserta Didik SMP Muhammadiyah 7 Sempu Tahun Pelajaran 2020/2021 dapat mengadakan PPDB ini.
      Terkait dengan syarat-syarat pendaftaran kami sampaikan hal-hal berikut ini:
      <br/>
      1. Fotocopy Raport
      <br/>
      2. Fotocopy Ijazah
      <br/>
      3. Fotocopy Nilai UN</p>
      <br />
      <hr />
      </div>

      <div>
      <h2>Bupati Banyuwangi: Sekolah Libur, Kecuali 
      SMA dan SMK yang Sedang Ujian</h2>
      <h5>Minggu, 1 Maret 2020</h5>
        <img src="images/story.jpg" />
        <figcaption>Insta Story Bupati Banyuwangi Abdullah Azwar Anas. (Foto: Instagram @azwaranas.a3)</figcaption>
      <p>TIMESINDONESIA, BANYUWANGI – Insta Story Bupati Banyuwangi, Abdullah Azwar Anas @azwaranas.a3 kembali mengunggah beberapa tulisan masa libur sekolah sebagai upaya pencegahan penyebaran virus Corona, Minggu (15/3/2020) malam. Unggahan terbaru tertulis 'Demikian pula untuk RA, MI, MTs, dan MA terhitung besok Senin 16 Maret belajar di rumah ; sesuai hasil koordinasi dengan Kementerian Agama. Tetap belajar dan jaga kesehatan semuanya'.</p>
      </div>
      </article>
      </section>
      </Layout>
    );
  }
  
  export default Home;
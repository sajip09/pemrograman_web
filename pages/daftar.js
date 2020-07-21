import Menu from '../components/menu';
import Layout from '../layout/layout'

  function Daftar(){
    return (
      <Layout>
      <Menu />
        <p>Nama: </p>
        <p>NIK:</p>
        <p>Tempat: </p>
        <p>Tanggal Lahir: </p>
        <p>Jenis Kelamin: </p>
        <p>Agama: </p>
        <p>Asal Sekolah: </p>
        <p>No. Handphone: </p>
      </Layout>
    );
}

export default Daftar;
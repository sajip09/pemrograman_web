import Link from 'next/link';
import fetch from 'node-fetch';

const Utama = (props) => (
        <div className="container">
            <nav className="level">
                <div className="level-item has-text-centered">
                <Link href="/tenaga/[guru]/[code]" as="/tenaga/utama/kepsek"><a>Kepala Sekolah</a></Link>
            </div>
                <div className="level-item has-text-centered">
                <Link href="/tenaga/[guru]/[code]" as="/tenaga/utama/wakepsek1"><a>Wakil Kepala Sekolah 1</a></Link>
            </div>
                <div className="level-item has-text-centered">
                <Link href="/tenaga/[guru]/[code]" as="/tenaga/utama/wakepsek2"><a>Wakil Kepala Sekolah 2</a></Link>
            </div>
            </nav>

            <p className="title">Data Diri {props.jenisKelamin} {props.code.toUpperCase()}</p>
            <div className="box">
                <div className="media">
                    <figure className="media-left">
                        <p className="image is-64x64">
                            <img src={props.foto} />
                        </p>
                    </figure>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{props.nama}</strong> <small>{props.email}</small>
                                <br />
                                {props.alamat}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)

export async function getStaticPaths(){
    return {
        paths: [
        {params: {guru: "utama", code: "kepsek"}},
        {params: {guru: "utama", code: "wakepsek1"}},
        {params: {guru: "utama", code: "wakepsek2"}}
        ],
        fallback: false
    }
}

export async function getStaticProps(context){
    let { guru, code } = context.params;
    let source = `https://randomuser.me/api/?gender=${guru}`;
    let response = await fetch(source);
    let data = await response.json();
    let result = data.results[0];

    let nama = `${result.name.first} ${result.name.last}`;
    let email = result.email;
    let foto = result.picture.large;
    let alamat = `Jalan ${result.location.street.name} No. ${result.location.street.number}, Kota ${result.location.city}, ${result.location.state}, ${result.location.country}`;
    
    return {
        props: {
            code, nama, email, foto, alamat
        }
    }
}

export default Utama;
   

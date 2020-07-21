import data from "../components/data.json"

const Kontak = () => (
    <div style={{textAlign: 'left'}}>
        {
            data.map((data, index) =>
            <div key={index} style={{marginBottom: 50}}>
                <p><h1>Nama Sekolah</h1>: {data.Sekolah}</p>
                <p><h1>Webiste</h1>: {data.info.website} </p>
                <p><h1>Alamat</h1>: {data.info.Alamat} </p>
                <p><h1>Kontak</h1>: {data.info.Kontak} </p>
                <p><h1>Email</h1>: {data.info.Email} </p>
            </div>
            
        )}
    </div>
)

export default Kontak
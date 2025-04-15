import Link from 'next/link';
import mangas from '../public/data/mangas.json';

export default function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>MangaNexus</h1>
      <input type="text" placeholder="Buscar mangá..." style={{ padding: '10px', width: '100%', marginBottom: '20px' }} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {mangas.map((manga) => (
          <div key={manga.id} style={{ width: '200px' }}>
            <img src={manga.cover} style={{ width: '100%' }} />
            <h3>{manga.title}</h3>
            <p>{manga.description}</p>
            <Link href={`/manga/${manga.id}`}>Ler agora</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
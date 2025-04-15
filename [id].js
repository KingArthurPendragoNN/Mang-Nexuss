import { useRouter } from 'next/router';
import mangas from '../../public/data/mangas.json';

export default function MangaPage() {
  const { query } = useRouter();
  const manga = mangas.find(m => m.id.toString() === query.id);
  if (!manga) return <div>Carregando...</div>;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>{manga.title}</h1>
      <p>{manga.description}</p>
      <h2>Capítulos</h2>
      <ul>
        {manga.chapters.map((chapter, index) => (
          <li key={index}>
            <a href={`/reader/${manga.id}/${index + 1}`}>Capítulo {index + 1}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
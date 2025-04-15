import { useRouter } from 'next/router';
import mangas from '../../../../public/data/mangas.json';

export default function Reader() {
  const { query } = useRouter();
  const manga = mangas.find(m => m.id.toString() === query.id);
  const chapterNum = parseInt(query.chapter);
  const chapter = manga?.chapters[chapterNum - 1];

  if (!manga || !chapter) return <div>Carregando...</div>;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>{manga.title} - Capítulo {chapterNum}</h1>
      {chapter.pages.map((img, i) => (
        <img key={i} src={img} style={{ width: '100%', marginBottom: '10px' }} />
      ))}
    </div>
  );
}
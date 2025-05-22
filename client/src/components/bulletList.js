export default function BulletList({title,isi1,isi2,isi3}) {
  return (
    <div>
      <p className="display-3">{title}</p>
      <ul>
        {isi1 && <li>{isi1}</li>}
        {isi2 && <li>{isi2}</li>}
        {isi3 && <li>{isi3}</li>}
      </ul>
    </div>
  );
}

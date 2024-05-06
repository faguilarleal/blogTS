import CardLoading from './CardLoading';
import './Loading.css';

function Loading() {
  return (
    <div id='loading'>
      {[...Array(6)].map((_, i) => (
        <CardLoading key={i}></CardLoading>
      ))}
    </div>
  );
}


export default Loading;

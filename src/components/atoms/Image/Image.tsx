import "./styles.css";

type Props = {
  src: string;
  loading: HTMLImageElement["loading"];
};

function Image({ src, loading }: Props) {
  return <img className="Image" src={src} loading={loading} />;
}

export default Image;

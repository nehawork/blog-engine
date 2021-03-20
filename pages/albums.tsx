import PageWrapper from "../components/hoc/pageWrapper";
import { Album } from "../core/apis/scheme";
import { albumsList } from "../core/apis/services";

const AlbumsList = ({ data }: { data: Album[] }) => {
  return <div>{data.length}</div>
}

export default PageWrapper({ listFun: albumsList, Component: AlbumsList });
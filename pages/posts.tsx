import PageWrapper from "../components/hoc/pageWrapper";
import { Post } from "../core/apis/scheme";
import { postsList } from "../core/apis/services";

const PostsList = ({ data }: { data: Post[] }) => {
    return <div>{data.length}</div>
}

export default PageWrapper({listFun:postsList,Component:PostsList});
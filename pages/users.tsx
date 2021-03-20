import PageWrapper from "../components/hoc/pageWrapper";
import { User } from "../core/apis/scheme";
import { usersList } from "../core/apis/services";

const UsersList = ({ data }: { data: User[] }) => {
    return <div>{data.length}</div>
}

export default PageWrapper({listFun:usersList,Component:UsersList});
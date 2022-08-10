import Adress from "./component/profil/Address";
import FullName from "./component/profil/FullName";
import ProfilePhoto from "./component/profil/ProfilePhoto";



function App(){
    return(
        <div>
            <ProfilePhoto />
            <FullName/>
            <Adress/>
        </div>
    )
}

export default App


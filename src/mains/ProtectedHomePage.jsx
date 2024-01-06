import { HeroBanner, ProfileEdit, SearchProfiles, ProfileList } from "../components/export"
import { useState } from "react";

function ProtectedHomePage() {
  const [profiles, setProfiles] = useState([]);

  return (
    <div>
        <HeroBanner />
        <ProfileEdit />
        <SearchProfiles setProfiles={setProfiles} />
        <ProfileList profiles={profiles}/>
    </div>
  )
}

export default ProtectedHomePage;

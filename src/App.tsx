import { LoginPage, UserCard } from './pages'
import { Routes, Route } from "react-router-dom";
import UserProfile from './pages/userProfile.page';

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/connect" element={<UserCard />} />
                <Route path="/profile" element={<UserProfile />} />
            </Routes>
        </>
    )
}

export default App

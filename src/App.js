import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AboutIconLink from "./components/AboutIconLink"
import { FeedbackProvider } from "./context/FeedbackContext"

function App() {
  return (
    <>
      <FeedbackProvider>
        <Router>
          <Header text={"Feedback App"} />
          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
                  </>
                }
              ></Route>

              <Route path="/about" element={<AboutPage />}></Route>
            </Routes>
          </div>
          <AboutIconLink />
        </Router>
      </FeedbackProvider>
    </>
  )
}
export default App

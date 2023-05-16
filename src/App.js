
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom';

//layout
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import JobLayout from './layouts/JobLayout';

//pages
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Contact, { contactAction } from './pages/help/Contact';
import Faq from './pages/help/Faq';
import Jobs, { getJobs } from './pages/jobs/Jobs';
import JobDetails, { getJobDetails } from './pages/jobs/JobDetails';
import JobsError from './pages/jobs/JobsError';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>} />
      <Route path="about" element={<About/>} />

      <Route path="help" element={<HelpLayout/>}>
        <Route path="faq" element={<Faq/>} />
        <Route path="contact" element={<Contact/>} action={contactAction} />
      </Route>
      <Route path="jobs" element={<JobLayout/>} errorElement={<JobsError/>}>
        <Route index element={<Jobs/>} loader={getJobs} />
        <Route path=":id" element={<JobDetails/>} loader={getJobDetails}/>
      </Route>

      <Route path="*" element={<NotFound/>} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

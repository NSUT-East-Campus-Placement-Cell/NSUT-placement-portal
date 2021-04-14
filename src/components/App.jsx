import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './home';
import AboutUs from './aboutUs';
import Process from './process';
import Downloads from './downloads';
import ContactUs from './contactUs';
import CoursesOffered from './whyNsut/CoursesOffered';
import PastRecruiters from './whyNsut/PastRecruiters';
import OurAlumni from './whyNsut/OurAlumni';
import Societies from './whyNsut/Societies';
import NotFound from './common/notFound';
import Administration from './team/administration';
import CurrentTeam from './team/currentTeam';

function App() {
	return (
		<Switch>
			<Route path='/about-us' component={AboutUs} />
			<Route path='/why-nsut/courses-offered' component={CoursesOffered} />
			<Route path='/why-nsut/past-recruiters' component={PastRecruiters} />
			<Route path='/why-nsut/our-alumni' component={OurAlumni} />
			<Route path='/why-nsut/our-societies' component={Societies} />
			<Route path='/process' component={Process} />
			<Route path='/downloads' component={Downloads} />
			<Route path='/team/administration' component={Administration} />
			<Route path='/team/current' component={CurrentTeam} />
			<Route path='/contact-us' component={ContactUs} />
			<Route path='/not-found' component={NotFound} />
			<Route path='/' exact component={Home} />
			<Redirect to='/not-found' />
		</Switch>
	);
}

export default App;
